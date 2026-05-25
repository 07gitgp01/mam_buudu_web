import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne, Sexe, getInitiales, getAgeLabel, estVivant, getNomComplet, extractAnnee } from '../../models/personne.model';
import { ApiService } from '../../services/api.service';

export const MOIS = [
  { val: '01', label: 'Janvier' },
  { val: '02', label: 'Février' },
  { val: '03', label: 'Mars' },
  { val: '04', label: 'Avril' },
  { val: '05', label: 'Mai' },
  { val: '06', label: 'Juin' },
  { val: '07', label: 'Juillet' },
  { val: '08', label: 'Août' },
  { val: '09', label: 'Septembre' },
  { val: '10', label: 'Octobre' },
  { val: '11', label: 'Novembre' },
  { val: '12', label: 'Décembre' },
];

export const SEXE_OPTIONS: { val: Sexe; label: string }[] = [
  { val: 'M',     label: 'Homme'  },
  { val: 'F',     label: 'Femme'  },
  { val: 'autre', label: 'Autre'  },
];

interface PersonneForm {
  prenoms: string;
  nomNaissance: string;
  nomUsage: string;
  sexe: Sexe | '';
  nais_annee: string;
  nais_mois: string;
  nais_jour: string;
  lieuNaissance: string;
  estDecede: boolean;
  deces_annee: string;
  deces_mois: string;
  deces_jour: string;
  lieuDeces: string;
  biographie: string;
  notes: string;
}

type Filtre = 'tous' | 'hommes' | 'femmes' | 'vivants' | 'decedes';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrl: './personnes.component.scss',
  standalone: false,
})
export class PersonnesComponent implements OnInit {
  /* ---- Liste ---- */
  toutes: Personne[] = [];
  loading = true;
  erreur: string | null = null;
  searchQuery = '';
  filtreActif: Filtre = 'tous';

  filtres: { key: Filtre; label: string }[] = [
    { key: 'tous',    label: 'Tous'    },
    { key: 'hommes',  label: 'Hommes'  },
    { key: 'femmes',  label: 'Femmes'  },
    { key: 'vivants', label: 'Vivants' },
    { key: 'decedes', label: 'Décédés' },
  ];

  /* ---- Formulaire ---- */
  showForm = false;
  editTarget: Personne | null = null;
  form: PersonneForm = this.emptyForm();
  saving = false;

  /* ---- Photo ---- */
  selectedFile: File | null = null;
  photoPreview: string | null = null;
  photoToDelete = false;
  failedPhotos = new Set<string>();

  onPhotoError(id: string): void { this.failedPhotos.add(id); }

  /* ---- Détail ---- */
  showDetail = false;
  detailTarget: Personne | null = null;

  /* ---- Suppression ---- */
  showDeleteConfirm = false;
  deleteTarget: Personne | null = null;
  deleting = false;

  /* ---- Constantes exposées au template ---- */
  mois = MOIS;
  sexeOptions = SEXE_OPTIONS;

  /* ---- Helpers ---- */
  getInitiales = getInitiales;
  getAgeLabel  = getAgeLabel;
  estVivant    = estVivant;
  getNomComplet = getNomComplet;
  extractAnnee  = extractAnnee;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void { this.loadPersonnes(); }

  private loadPersonnes(): void {
    this.loading = true;
    this.failedPhotos.clear();
    this.api.getPersonnes().subscribe({
      next: (data) => {
        this.toutes = data;
        this.loading = false;

        const id = this.route.snapshot.queryParams['id'];
        if (id) {
          const found = this.toutes.find(p => String(p.id) === String(id));
          if (found) this.openDetail(found);
        }
      },
      error: ()     => { this.erreur = 'Impossible de charger les membres.'; this.loading = false; },
    });
  }

  get personnesFiltrees(): Personne[] {
    return this.toutes.filter((p) => {
      const q = this.searchQuery.toLowerCase();
      const nom = `${p.prenoms ?? ''} ${p.nomUsage ?? p.nomNaissance ?? ''}`.toLowerCase();
      const matchSearch = !q || nom.includes(q) || (p.lieuNaissance ?? '').toLowerCase().includes(q);
      const matchFiltre =
        this.filtreActif === 'tous'    ? true :
        this.filtreActif === 'hommes'  ? p.sexe === 'M' :
        this.filtreActif === 'femmes'  ? p.sexe === 'F' :
        this.filtreActif === 'vivants' ? estVivant(p) :
        this.filtreActif === 'decedes' ? !estVivant(p) : true;
      return matchSearch && matchFiltre;
    });
  }

  /* ===== Formulaire ===== */

  private emptyForm(): PersonneForm {
    return {
      prenoms: '', nomNaissance: '', nomUsage: '', sexe: 'M',
      nais_annee: '', nais_mois: '', nais_jour: '', lieuNaissance: '',
      estDecede: false,
      deces_annee: '', deces_mois: '', deces_jour: '', lieuDeces: '',
      biographie: '', notes: '',
    };
  }

  openCreate(): void {
    this.editTarget = null;
    this.form = this.emptyForm();
    this.selectedFile = null;
    this.photoPreview = null;
    this.photoToDelete = false;
    this.showForm = true;
  }

  openEdit(p: Personne, event?: Event): void {
    event?.stopPropagation();
    this.editTarget = p;
    const [ny, nm, nd] = this.splitDate(p.dateNaissance);
    const [dy, dm, dd] = this.splitDate(p.dateDeces);
    this.form = {
      prenoms:      p.prenoms      ?? '',
      nomNaissance: p.nomNaissance ?? '',
      nomUsage:     p.nomUsage     ?? '',
      sexe:         p.sexe         ?? 'M',
      nais_annee: ny, nais_mois: nm, nais_jour: nd,
      lieuNaissance: p.lieuNaissance ?? '',
      estDecede: !!p.dateDeces,
      deces_annee: dy, deces_mois: dm, deces_jour: dd,
      lieuDeces: p.lieuDeces ?? '',
      biographie: p.biographie ?? '',
      notes:      p.notes      ?? '',
    };
    this.selectedFile = null;
    this.photoPreview = p.photoUrl;
    this.photoToDelete = false;
    this.showForm = true;
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.selectedFile = file;
    this.photoToDelete = false;
    const reader = new FileReader();
    reader.onload = (e) => { this.photoPreview = e.target?.result as string; };
    reader.readAsDataURL(file);
    input.value = '';
  }

  removeSelectedPhoto(): void {
    this.selectedFile = null;
    this.photoPreview = null;
    this.photoToDelete = !!this.editTarget?.photoUrl;
  }

  openDetail(p: Personne): void {
    this.detailTarget = p;
    this.showDetail = true;
  }

  confirmDelete(p: Personne, event?: Event): void {
    event?.stopPropagation();
    this.deleteTarget = p;
    this.showDeleteConfirm = true;
  }

  closeAll(): void {
    this.showForm = false;
    this.showDetail = false;
    this.showDeleteConfirm = false;
    this.editTarget = null;
    this.detailTarget = null;
    this.deleteTarget = null;
  }

  savePersonne(): void {
    if (this.saving) return;
    this.saving = true;

    const body = {
      prenoms:      this.form.prenoms      || null,
      nomNaissance: this.form.nomNaissance || null,
      nomUsage:     this.form.nomUsage     || null,
      sexe:         this.form.sexe         || null,
      dateNaissance: this.buildDateStr(this.form.nais_annee,  this.form.nais_mois,  this.form.nais_jour),
      lieuNaissance: this.form.lieuNaissance || null,
      dateDeces:     this.form.estDecede
        ? this.buildDateStr(this.form.deces_annee, this.form.deces_mois, this.form.deces_jour)
        : null,
      lieuDeces:  this.form.estDecede ? (this.form.lieuDeces  || null) : null,
      biographie: this.form.biographie || null,
      notes:      this.form.notes      || null,
    };

    const obs = this.editTarget
      ? this.api.updatePersonne(this.editTarget.id, body)
      : this.api.createPersonne(body);

    obs.subscribe({
      next: (saved) => {
        const finish = () => { this.saving = false; this.closeAll(); this.loadPersonnes(); };
        if (this.selectedFile) {
          this.api.uploadPhoto(saved.id, this.selectedFile).subscribe({ next: finish, error: finish });
        } else if (this.photoToDelete) {
          this.api.deletePhoto(saved.id).subscribe({ next: finish, error: finish });
        } else {
          finish();
        }
      },
      error: () => { this.saving = false; },
    });
  }

  deletePersonne(): void {
    if (!this.deleteTarget || this.deleting) return;
    this.deleting = true;
    this.api.deletePersonne(this.deleteTarget.id).subscribe({
      next: () => {
        this.toutes = this.toutes.filter(p => p.id !== this.deleteTarget!.id);
        this.deleting = false;
        this.closeAll();
      },
      error: () => { this.deleting = false; },
    });
  }

  /* ===== Utils ===== */

  buildDateStr(annee: string, mois: string, jour: string): string | null {
    if (!annee) return null;
    if (!mois)  return annee;
    if (!jour)  return `${annee}-${mois}`;
    return `${annee}-${mois}-${jour}`;
  }

  private splitDate(dateStr: string | null): [string, string, string] {
    if (!dateStr) return ['', '', ''];
    const parts = dateStr.split('-');
    return [parts[0] ?? '', parts[1] ?? '', parts[2] ?? ''];
  }

  getSexeLabel(sexe: string | null): string {
    if (sexe === 'M') return 'Homme';
    if (sexe === 'F') return 'Femme';
    if (sexe === 'autre') return 'Autre';
    return 'N/A';
  }
}
