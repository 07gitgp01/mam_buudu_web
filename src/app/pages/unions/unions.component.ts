import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Union } from '../../models/union.model';
import {
  Personne, getInitiales, extractAnnee, getNomComplet,
  getPhotoUrl, estVivant,
} from '../../models/personne.model';
import { ApiService } from '../../services/api.service';

export const MOIS = [
  { val: '01', label: 'Janvier' },  { val: '02', label: 'Février' },
  { val: '03', label: 'Mars' },     { val: '04', label: 'Avril' },
  { val: '05', label: 'Mai' },      { val: '06', label: 'Juin' },
  { val: '07', label: 'Juillet' },  { val: '08', label: 'Août' },
  { val: '09', label: 'Septembre' },{ val: '10', label: 'Octobre' },
  { val: '11', label: 'Novembre' }, { val: '12', label: 'Décembre' },
];

export const TYPE_UNION = [
  { val: 'mariage',     label: 'Mariage' },
  { val: 'pacs',        label: 'PACS' },
  { val: 'union_libre', label: 'Union libre' },
  { val: 'fiancailles', label: 'Fiançailles' },
  { val: 'adoption',    label: 'Adoption' },
  { val: 'polygamie',   label: 'Polygamie' },
];

export type CoupleStatus = 'active' | 'divorced' | 'widowed';

/** Groupe de couples autour du même chef de famille */
export interface UnionGroup {
  chef: Personne;
  couples: Union[];
}

interface FormData {
  type: string;
  debut_annee: string; debut_mois: string; debut_jour: string;
  lieuDebut: string;
  fin_annee: string;   fin_mois: string;   fin_jour: string;
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

  getPhotoUrl = getPhotoUrl;
  failedPhotos = new Set<string>();
  onPhotoError(id: string): void { this.failedPhotos.add(id); }
  photoOf(p: Personne | null): string | null { return p ? getPhotoUrl(p) : null; }

  // ── Groupes ────────────────────────────────────────────────────────────
  expandedGroups = new Set<string>(); // IDs des chefs dont le groupe est déplié

  /** Groupes de couples par chef de famille (personne avec ordre=0 le plus souvent) */
  get groupedUnions(): UnionGroup[] {
    // Compter les apparitions en ordre=0 par personne
    const chefCount = new Map<string, number>();
    for (const u of this.unions) {
      const p0 = u.participants.find(p => p.ordre === 0);
      if (p0) chefCount.set(p0.personneId, (chefCount.get(p0.personneId) ?? 0) + 1);
    }

    // Construire les groupes
    const groupMap = new Map<string, UnionGroup>();
    for (const u of this.unions) {
      // Le chef = participant en ordre=0. Si ordre=0 n'existe pas → premier participant.
      const p0 = u.participants.find(p => p.ordre === 0) ?? u.participants[0];
      if (!p0) continue;
      const pid = p0.personneId;
      if (!groupMap.has(pid)) {
        groupMap.set(pid, { chef: p0.personne, couples: [] });
        this.expandedGroups.add(pid); // déplier par défaut
      }
      groupMap.get(pid)!.couples.push(u);
    }

    // Trier : groupes avec plus d'unions en premier
    return Array.from(groupMap.values())
      .sort((a, b) => b.couples.length - a.couples.length);
  }

  toggleGroup(chefId: string): void {
    if (this.expandedGroups.has(chefId)) this.expandedGroups.delete(chefId);
    else this.expandedGroups.add(chefId);
  }

  isGroupExpanded(chefId: string): boolean { return this.expandedGroups.has(chefId); }

  // ── Statut d'un couple ─────────────────────────────────────────────────
  coupleStatus(u: Union): CoupleStatus {
    if (!u.dateFin) return 'active';
    const partner = u.participants.find(p => p.ordre !== 0)?.personne;
    if (partner && !estVivant(partner)) return 'widowed';
    return 'divorced';
  }

  coupleStatusLabel(u: Union): string {
    const s = this.coupleStatus(u);
    if (s === 'divorced') return 'Divorcé(e)';
    if (s === 'widowed')  return 'Veuf/Veuve';
    return 'Actif';
  }

  coupleStatusIcon(u: Union): string {
    const s = this.coupleStatus(u);
    return s === 'active' ? 'favorite' : s === 'divorced' ? 'heart_broken' : 'favorite';
  }

  // ── Panels ─────────────────────────────────────────────────────────────
  showForm = false;
  editTarget: Union | null = null;

  showDeleteConfirm = false;
  deleteTarget: Union | null = null;

  showEnfantPanel = false;
  enfantUnionTarget: Union | null = null;
  enfantsSelectionnes: string[] = [];
  searchEnfant = '';

  // Création rapide dans le panneau enfants
  showCreateChild = false;
  createChildForm = { prenoms: '', nomNaissance: '', nomUsage: '', sexe: 'M', dateNaissance: '' };
  createChildSaving = false;

  saving = false; deleting = false; addingEnfant = false;

  mois = MOIS; typeUnion = TYPE_UNION;
  form: FormData = this.emptyForm();

  // ── Libellés ───────────────────────────────────────────────────────────
  private typeLabel: Record<string, string> = {
    mariage: 'Mariage', pacs: 'PACS', union_libre: 'Union libre',
    fiancailles: 'Fiançailles', adoption: 'Adoption', polygamie: 'Polygamie',
  };
  private typeIconMap: Record<string, string> = {
    mariage: 'favorite', pacs: 'handshake', union_libre: 'people',
    fiancailles: 'ring_volume', adoption: 'child_care', polygamie: 'group',
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void { this.loadAll(); }

  private loadAll(): void {
    this.loading = true;
    forkJoin({ unions: this.api.getUnions(), personnes: this.api.getPersonnes() }).subscribe({
      next: ({ unions, personnes }) => {
        this.unions = unions; this.personnes = personnes; this.loading = false;
      },
      error: () => { this.erreur = 'Impossible de charger les données.'; this.loading = false; },
    });
  }

  private refreshUnions(): void {
    this.api.getUnions().subscribe({ next: (data) => { this.unions = data; } });
  }

  // ── Helpers ─────────────────────────────────────────────────────────────
  getPartner(u: Union, chefId: string): Personne | null {
    return u.participants.find(p => p.personneId !== chefId)?.personne ?? null;
  }

  getConjoint1(u: Union): Personne | null { return u.participants.find(p => p.ordre === 0)?.personne ?? null; }
  getConjoint2(u: Union): Personne | null { return u.participants.find(p => p.ordre === 1)?.personne ?? null; }

  initiales(p: Personne | null): string { return p ? getInitiales(p) : '?'; }
  nomComplet(p: Personne | null): string { return p ? getNomComplet(p) : '—'; }
  annee(d: string | null): number | null { return extractAnnee(d); }
  getPersonneById(id: string): Personne | null { return this.personnes.find(p => p.id === id) ?? null; }
  getTypeLabel(type: string | null): string { return this.typeLabel[type ?? ''] ?? type ?? 'Union'; }
  getTypeIcon(type: string | null): string { return this.typeIconMap[type ?? ''] ?? 'favorite'; }
  totalEnfants(couples: Union[]): number { return couples.reduce((s, u) => s + u.filiations.length, 0); }

  // ── Unions multiples : avertissements ─────────────────────────────────
  getPersonActiveUnions(personId: string): Union[] {
    return this.unions.filter(u =>
      !u.dateFin &&
      u.participants.some(pt => pt.personneId === personId) &&
      (!this.editTarget || u.id !== this.editTarget.id)
    );
  }

  getPersonUnionHint(personId: string): string {
    const actives = this.getPersonActiveUnions(personId);
    if (!actives.length) return '';
    return actives.map(u => {
      const partner = u.participants.find(pt => pt.personneId !== personId);
      const name = partner?.personne
        ? `${partner.personne.prenoms ?? ''} ${partner.personne.nomUsage ?? partner.personne.nomNaissance ?? ''}`.trim()
        : '—';
      return `${this.typeLabel[u.type ?? ''] ?? 'Union'} avec ${name}`;
    }).join(' · ');
  }

  get multiUnionWarnings(): Array<{ person: Personne; hint: string }> {
    return this.form.participantIds
      .map(pid => {
        const person = this.getPersonneById(pid);
        const hint = this.getPersonUnionHint(pid);
        return person && hint ? { person, hint } : null;
      })
      .filter((x): x is { person: Personne; hint: string } => x !== null);
  }

  // ── Ouverture des panels ───────────────────────────────────────────────

  openCreate(): void {
    this.editTarget = null;
    this.form = this.emptyForm();
    this.showForm = true;
  }

  /** Crée un nouveau couple pour un chef de famille donné */
  openCreateForChef(chef: Personne): void {
    this.editTarget = null;
    this.form = this.emptyForm();
    this.form.participantIds = [chef.id];
    this.showForm = true;
  }

  openEdit(u: Union): void {
    this.editTarget = u;
    const [dy, dm, dd] = this.splitDate(u.dateDebut);
    const [fy, fm, fd] = this.splitDate(u.dateFin);
    this.form = {
      type: u.type ?? 'mariage',
      debut_annee: dy, debut_mois: dm, debut_jour: dd, lieuDebut: u.lieuDebut ?? '',
      fin_annee: fy,   fin_mois: fm,   fin_jour: fd,   lieuFin: u.lieuFin ?? '',
      notes: u.notes ?? '',
      participantIds: u.participants.map(p => p.personneId),
    };
    this.showForm = true;
  }

  closeAll(): void {
    this.showForm = false; this.showDeleteConfirm = false; this.showEnfantPanel = false;
    this.editTarget = null; this.deleteTarget = null;
    this.enfantUnionTarget = null; this.enfantsSelectionnes = [];
  }

  private splitDate(d: string | null): [string, string, string] {
    if (!d) return ['', '', ''];
    const parts = d.split('-');
    return [parts[0] ?? '', parts[1] ?? '', parts[2] ?? ''];
  }

  buildDateStr(a: string, m: string, j: string): string | null {
    if (!a) return null;
    if (!m) return a;
    if (!j) return `${a}-${m}`;
    return `${a}-${m}-${j}`;
  }

  toggleParticipant(id: string): void {
    const idx = this.form.participantIds.indexOf(id);
    if (idx >= 0) {
      this.form.participantIds.splice(idx, 1);
    } else {
      this.form.participantIds.push(id);
      if (this.getPersonActiveUnions(id).length > 0 && this.form.type === 'mariage') {
        this.form.type = 'polygamie';
      }
    }
  }

  isParticipant(id: string): boolean { return this.form.participantIds.includes(id); }

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
      next: () => { this.saving = false; this.closeAll(); this.refreshUnions(); },
      error: () => { this.saving = false; },
    });
  }

  confirmDelete(u: Union): void { this.deleteTarget = u; this.showDeleteConfirm = true; }

  deleteUnion(): void {
    if (!this.deleteTarget || this.deleting) return;
    this.deleting = true;
    this.api.deleteUnion(this.deleteTarget.id).subscribe({
      next: () => {
        this.deleting = false;
        this.unions = this.unions.filter(u => u.id !== this.deleteTarget!.id);
        this.closeAll();
      },
      error: () => { this.deleting = false; },
    });
  }

  openEnfantPanel(u: Union): void {
    this.enfantUnionTarget = u; this.enfantsSelectionnes = [];
    this.searchEnfant = ''; this.showCreateChild = false;
    this.createChildForm = { prenoms: '', nomNaissance: '', nomUsage: '', sexe: 'M', dateNaissance: '' };
    this.showEnfantPanel = true;
  }

  closeEnfantPanel(): void {
    this.showEnfantPanel = false; this.enfantUnionTarget = null;
    this.enfantsSelectionnes = []; this.showCreateChild = false;
  }

  /** Crée un nouveau membre et l'ajoute directement comme enfant */
  createAndAddChild(): void {
    if (this.createChildSaving || !this.enfantUnionTarget) return;
    if (!this.createChildForm.prenoms || !this.createChildForm.nomNaissance) return;
    this.createChildSaving = true;

    this.api.createPersonne({
      prenoms:      this.createChildForm.prenoms,
      nomNaissance: this.createChildForm.nomNaissance,
      nomUsage:     this.createChildForm.nomUsage || undefined,
      sexe:         this.createChildForm.sexe as 'M' | 'F',
      dateNaissance: this.createChildForm.dateNaissance || null,
    }).subscribe({
      next: (created) => {
        this.api.addEnfantToUnion(this.enfantUnionTarget!.id, created.id).subscribe({
          next: () => {
            this.createChildSaving = false;
            this.showCreateChild = false;
            this.createChildForm = { prenoms: '', nomNaissance: '', nomUsage: '', sexe: 'M', dateNaissance: '' };
            this.refreshUnions();
            // Aussi rafraîchir les personnes disponibles
            this.api.getPersonnes().subscribe(p => { this.personnes = p; });
          },
          error: () => { this.createChildSaving = false; },
        });
      },
      error: () => { this.createChildSaving = false; },
    });
  }

  get personnesDisponibles(): Personne[] {
    if (!this.enfantUnionTarget) return [];
    const exclus = new Set([
      ...this.enfantUnionTarget.participants.map(p => p.personneId),
      ...this.enfantUnionTarget.filiations.map(f => f.enfantId),
    ]);
    const q = this.searchEnfant.toLowerCase();
    return this.personnes.filter(p => {
      if (exclus.has(p.id)) return false;
      return !q || getNomComplet(p).toLowerCase().includes(q);
    });
  }

  toggleEnfantSelection(id: string): void {
    const idx = this.enfantsSelectionnes.indexOf(id);
    if (idx >= 0) this.enfantsSelectionnes.splice(idx, 1);
    else this.enfantsSelectionnes.push(id);
  }

  isEnfantSelected(id: string): boolean { return this.enfantsSelectionnes.includes(id); }

  ajouterEnfants(): void {
    if (!this.enfantUnionTarget || this.addingEnfant || !this.enfantsSelectionnes.length) return;
    this.addingEnfant = true;
    const unionId = this.enfantUnionTarget.id;
    const ids = [...this.enfantsSelectionnes];
    let completed = 0;
    ids.forEach(enfantId => {
      this.api.addEnfantToUnion(unionId, enfantId).subscribe({
        next: () => { completed++; if (completed === ids.length) { this.addingEnfant = false; this.closeEnfantPanel(); this.refreshUnions(); } },
        error: () => { completed++; if (completed === ids.length) { this.addingEnfant = false; this.refreshUnions(); } },
      });
    });
  }

  retirerEnfant(unionId: string, enfantId: string): void {
    this.api.removeEnfantFromUnion(unionId, enfantId).subscribe({
      next: () => { this.refreshUnions(); if (this.enfantUnionTarget?.id === unionId) { this.api.getUnions().subscribe(data => { this.unions = data; const u = data.find(u => u.id === unionId); if (u) this.enfantUnionTarget = u; }); } },
    });
  }

  private emptyForm(): FormData {
    return { type: 'mariage', debut_annee: '', debut_mois: '', debut_jour: '', lieuDebut: '', fin_annee: '', fin_mois: '', fin_jour: '', lieuFin: '', notes: '', participantIds: [] };
  }
}
