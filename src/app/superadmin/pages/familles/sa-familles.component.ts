import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SuperAdminService } from '../../services/superadmin.service';
import { SaFamille, SaPlan } from '../../models/superadmin.model';

@Component({ selector: 'sa-familles', templateUrl: './sa-familles.component.html', styleUrl: './sa-familles.component.scss', standalone: false })
export class SaFamillesComponent implements OnInit {
  data: { familles: SaFamille[]; total: number; page: number; pages: number } | null = null;
  loading = true;
  q = '';
  page = 1;
  statut = '';
  actionLoading = '';
  actionErreur: string | null = null;

  // Assign-plan modal
  assignModal: { famille: SaFamille; planId: string; dateFin: string } | null = null;
  plans: SaPlan[] = [];
  assigning = false;
  assignErreur: string | null = null;

  // Detail expand
  expandedId: string | null = null;
  detailData: SaFamille | null = null;
  detailLoading = false;

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void {
    forkJoin({ familles: this.sa.getFamilles({ page: 1 }), plans: this.sa.getPlans() }).subscribe({
      next: (r) => { this.data = r.familles; this.plans = r.plans; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  load(): void {
    this.loading = true;
    this.sa.getFamilles({ q: this.q, page: this.page, statut: this.statut }).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
        if (d.pages > 0 && this.page > d.pages) { this.page = d.pages; this.load(); }
      },
      error: () => this.loading = false,
    });
  }

  search(): void { this.page = 1; this.load(); }

  toggleStatut(f: SaFamille): void {
    const newStatut = f.statut === 'actif' ? 'suspendu' : 'actif';
    const message = newStatut === 'suspendu'
      ? `Suspendre la famille "${f.nom}" ? Tous ses membres perdront immédiatement l'accès.`
      : `Réactiver la famille "${f.nom}" ?`;
    if (!confirm(message)) return;

    this.actionLoading = f.id;
    this.actionErreur = null;
    this.sa.patchFamille(f.id, { statut: newStatut }).subscribe({
      next: (updated) => { f.statut = updated.statut; this.actionLoading = ''; },
      error: (err) => { this.actionLoading = ''; this.actionErreur = err?.error?.error ?? 'Erreur lors du changement de statut.'; },
    });
  }

  delete(f: SaFamille): void {
    if (!confirm(`Supprimer définitivement la famille "${f.nom}" ? Cette action est irréversible.`)) return;
    this.actionLoading = f.id;
    this.actionErreur = null;
    this.sa.deleteFamille(f.id).subscribe({
      next: () => { this.load(); this.actionLoading = ''; },
      error: (err) => { this.actionLoading = ''; this.actionErreur = err?.error?.error ?? 'Erreur lors de la suppression.'; },
    });
  }

  openAssign(f: SaFamille): void {
    this.assignModal = { famille: f, planId: f.subscription?.plan?.id ?? '', dateFin: '' };
    this.assignErreur = null;
  }
  closeAssign(): void { this.assignModal = null; }

  confirmAssign(): void {
    if (!this.assignModal || !this.assignModal.planId) return;
    const planLabel = this.plans.find(p => p.id === this.assignModal!.planId)?.label ?? this.assignModal.planId;
    if (!confirm(`Assigner le plan "${planLabel}" à "${this.assignModal.famille.nom}" ? Cela modifie sa facturation.`)) return;

    this.assignErreur = null;
    this.assigning = true;
    this.sa.assignPlan(this.assignModal.famille.id, this.assignModal.planId, this.assignModal.dateFin || undefined).subscribe({
      next: (sub) => {
        const f = this.data?.familles.find((x) => x.id === this.assignModal!.famille.id);
        if (f) f.subscription = sub;
        this.assignModal = null;
        this.assigning = false;
      },
      error: (err) => { this.assigning = false; this.assignErreur = err?.error?.error ?? "Erreur lors de l'assignation du plan."; },
    });
  }

  toggleDetail(f: SaFamille): void {
    if (this.expandedId === f.id) { this.expandedId = null; this.detailData = null; return; }
    this.expandedId = f.id;
    this.detailLoading = true;
    this.sa.getFamille(f.id).subscribe({
      next: (d) => { this.detailData = d; this.detailLoading = false; },
      error: () => this.detailLoading = false,
    });
  }

  exportCsv(): void { this.sa.exportCsv('familles'); }
}
