import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Union } from '../../models/union.model';
import { Personne, getInitiales, extractAnnee, getNomComplet } from '../../models/personne.model';
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

export const TYPE_UNION = [
  { val: 'mariage',     label: 'Mariage' },
  { val: 'pacs',        label: 'PACS' },
  { val: 'union_libre', label: 'Union libre' },
  { val: 'fiancailles', label: 'Fiançailles' },
  { val: 'adoption',    label: 'Adoption' },
  { val: 'polygamie',   label: 'Polygamie' },
];

interface FormData {
  type: string;
  debut_annee: string;
  debut_mois: string;
  debut_jour: string;
  lieuDebut: string;
  fin_annee: string;
  fin_mois: string;
  fin_jour: string;
  lieuFin: string;
  notes: string;
  participantIds: string[];
}

@Component({
  selector: 'app-unions',
  templateUrl: './unions.component.html',
  styleUrl: './unions.component.scss',
  standalone: false,
})
export class UnionsComponent implements OnInit {
  unions: Union[] = [];
  personnes: Personne[] = [];
  loading = true;
  erreur: string | null = null;
  viewMode: 'cards' | 'list' = 'cards';

  // Panel form
  showForm = false;
  editTarget: Union | null = null;

  // Panel suppression
  showDeleteConfirm = false;
  deleteTarget: Union | null = null;

  // Panel enfants
  showEnfantPanel = false;
  enfantUnionTarget: Union | null = null;
  enfantsSelectionnes: string[] = [];
  searchEnfant = '';

  // Flags
  saving = false;
  deleting = false;
  addingEnfant = false;

  // Constantes exposées au template
  mois = MOIS;
  typeUnion = TYPE_UNION;

  // Formulaire
  form: FormData = this.emptyForm();

  private typeLabel: Record<string, string> = {
    mariage:     'Mariage',
    pacs:        'PACS',
    union_libre: 'Union libre',
    fiancailles: 'Fiançailles',
    adoption:    'Adoption',
    polygamie:   'Polygamie',
  };

  private typeColorMap: Record<string, string> = {
    mariage:     'pink',
    pacs:        'accent',
    union_libre: 'primary',
    fiancailles: 'gold',
    adoption:    'green',
    polygamie:   'purple',
  };

  private typeIconMap: Record<string, string> = {
    mariage:     'favorite',
    pacs:        'handshake',
    union_libre: 'people',
    fiancailles: 'ring_volume',
    adoption:    'child_care',
    polygamie:   'group',
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  private loadAll(): void {
    this.loading = true;
    forkJoin({
      unions: this.api.getUnions(),
      personnes: this.api.getPersonnes(),
    }).subscribe({
      next: ({ unions, personnes }) => {
        this.unions = unions;
        this.personnes = personnes;
        this.loading = false;
      },
      error: () => {
        this.erreur = 'Impossible de charger les données.';
        this.loading = false;
      },
    });
  }

  private refreshUnions(): void {
    this.api.getUnions().subscribe({
      next: (data) => { this.unions = data; },
    });
  }

  /* ===== Helpers ===== */

  getConjoint1(u: Union): Personne | null {
    return u.participants.find(p => p.ordre === 0)?.personne ?? null;
  }

  getConjoint2(u: Union): Personne | null {
    return u.participants.find(p => p.ordre === 1)?.personne ?? null;
  }

  initiales(p: Personne | null): string {
    if (!p) return '?';
    return getInitiales(p);
  }

  nomComplet(p: Personne | null): string {
    if (!p) return '—';
    return getNomComplet(p);
  }

  annee(dateStr: string | null): number | null {
    return extractAnnee(dateStr);
  }

  getPersonneById(id: string): Personne | null {
    return this.personnes.find(p => p.id === id) ?? null;
  }

  getTypeLabel(type: string | null): string {
    return this.typeLabel[type ?? ''] ?? type ?? 'Union';
  }

  getTypeColor(type: string | null): string {
    return 'banner-' + (this.typeColorMap[type ?? ''] ?? 'primary');
  }

  getTypeIcon(type: string | null): string {
    return this.typeIconMap[type ?? ''] ?? 'favorite';
  }

  private emptyForm(): FormData {
    return {
      type: 'mariage',
      debut_annee: '',
      debut_mois: '',
      debut_jour: '',
      lieuDebut: '',
      fin_annee: '',
      fin_mois: '',
      fin_jour: '',
      lieuFin: '',
      notes: '',
      participantIds: [],
    };
  }

  /* ===== Form CRUD ===== */

  openCreate(): void {
    this.editTarget = null;
    this.form = this.emptyForm();
    this.showForm = true;
  }

  openEdit(u: Union): void {
    this.editTarget = u;
    const [dy, dm, dd] = this.splitDate(u.dateDebut);
    const [fy, fm, fd] = this.splitDate(u.dateFin);
    this.form = {
      type: u.type ?? 'mariage',
      debut_annee: dy,
      debut_mois: dm,
      debut_jour: dd,
      lieuDebut: u.lieuDebut ?? '',
      fin_annee: fy,
      fin_mois: fm,
      fin_jour: fd,
      lieuFin: u.lieuFin ?? '',
      notes: u.notes ?? '',
      participantIds: u.participants.map(p => p.personneId),
    };
    this.showForm = true;
  }

  closeAll(): void {
    this.showForm = false;
    this.showDeleteConfirm = false;
    this.showEnfantPanel = false;
    this.editTarget = null;
    this.deleteTarget = null;
    this.enfantUnionTarget = null;
    this.enfantsSelectionnes = [];
  }

  private splitDate(dateStr: string | null): [string, string, string] {
    if (!dateStr) return ['', '', ''];
    const parts = dateStr.split('-');
    return [parts[0] ?? '', parts[1] ?? '', parts[2] ?? ''];
  }

  buildDateStr(annee: string, mois: string, jour: string): string | null {
    if (!annee) return null;
    if (!mois) return annee;
    if (!jour) return `${annee}-${mois}`;
    return `${annee}-${mois}-${jour}`;
  }

  toggleParticipant(id: string): void {
    const idx = this.form.participantIds.indexOf(id);
    if (idx >= 0) {
      this.form.participantIds.splice(idx, 1);
    } else {
      this.form.participantIds.push(id);
    }
  }

  isParticipant(id: string): boolean {
    return this.form.participantIds.includes(id);
  }

  saveUnion(): void {
    if (this.saving) return;
    this.saving = true;

    const body = {
      type: this.form.type,
      dateDebut: this.buildDateStr(this.form.debut_annee, this.form.debut_mois, this.form.debut_jour),
      lieuDebut: this.form.lieuDebut || null,
      dateFin: this.buildDateStr(this.form.fin_annee, this.form.fin_mois, this.form.fin_jour),
      lieuFin: this.form.lieuFin || null,
      notes: this.form.notes || null,
      parentIds: this.form.participantIds,
    };

    const obs = this.editTarget
      ? this.api.updateUnion(this.editTarget.id, body)
      : this.api.createUnion(body);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeAll();
        this.refreshUnions();
      },
      error: () => {
        this.saving = false;
      },
    });
  }

  /* ===== Suppression ===== */

  confirmDelete(u: Union): void {
    this.deleteTarget = u;
    this.showDeleteConfirm = true;
  }

  deleteUnion(): void {
    if (!this.deleteTarget || this.deleting) return;
    this.deleting = true;
    this.api.deleteUnion(this.deleteTarget.id).subscribe({
      next: () => {
        this.deleting = false;
        this.unions = this.unions.filter(u => u.id !== this.deleteTarget!.id);
        this.closeAll();
      },
      error: () => {
        this.deleting = false;
      },
    });
  }

  /* ===== Enfants ===== */

  openEnfantPanel(u: Union): void {
    this.enfantUnionTarget = u;
    this.enfantsSelectionnes = [];
    this.searchEnfant = '';
    this.showEnfantPanel = true;
  }

  closeEnfantPanel(): void {
    this.showEnfantPanel = false;
    this.enfantUnionTarget = null;
    this.enfantsSelectionnes = [];
  }

  get personnesDisponibles(): Personne[] {
    if (!this.enfantUnionTarget) return [];
    const participantIds = this.enfantUnionTarget.participants.map(p => p.personneId);
    const enfantIds = this.enfantUnionTarget.filiations.map(f => f.enfantId);
    const exclus = new Set([...participantIds, ...enfantIds]);
    const q = this.searchEnfant.toLowerCase();
    return this.personnes.filter(p => {
      if (exclus.has(p.id)) return false;
      if (!q) return true;
      const nom = getNomComplet(p).toLowerCase();
      return nom.includes(q);
    });
  }

  toggleEnfantSelection(id: string): void {
    const idx = this.enfantsSelectionnes.indexOf(id);
    if (idx >= 0) {
      this.enfantsSelectionnes.splice(idx, 1);
    } else {
      this.enfantsSelectionnes.push(id);
    }
  }

  isEnfantSelected(id: string): boolean {
    return this.enfantsSelectionnes.includes(id);
  }

  ajouterEnfants(): void {
    if (!this.enfantUnionTarget || this.addingEnfant || this.enfantsSelectionnes.length === 0) return;
    this.addingEnfant = true;
    const unionId = this.enfantUnionTarget.id;
    const ids = [...this.enfantsSelectionnes];
    let completed = 0;

    ids.forEach(enfantId => {
      this.api.addEnfantToUnion(unionId, enfantId).subscribe({
        next: () => {
          completed++;
          if (completed === ids.length) {
            this.addingEnfant = false;
            this.closeEnfantPanel();
            this.refreshUnions();
          }
        },
        error: () => {
          completed++;
          if (completed === ids.length) {
            this.addingEnfant = false;
            this.refreshUnions();
          }
        },
      });
    });
  }

  retirerEnfant(unionId: string, enfantId: string): void {
    this.api.removeEnfantFromUnion(unionId, enfantId).subscribe({
      next: () => {
        this.refreshUnions();
        if (this.enfantUnionTarget?.id === unionId) {
          this.api.getUnions().subscribe(data => {
            this.unions = data;
            const updated = data.find(u => u.id === unionId);
            if (updated) this.enfantUnionTarget = updated;
          });
        }
      },
    });
  }
}
