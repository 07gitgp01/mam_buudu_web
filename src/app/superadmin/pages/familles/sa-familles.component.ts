import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SuperAdminService } from '../../services/superadmin.service';

@Component({ selector: 'sa-familles', templateUrl: './sa-familles.component.html', styleUrl: './sa-familles.component.scss', standalone: false })
export class SaFamillesComponent implements OnInit {
  data: any = null;
  loading = true;
  q = '';
  page = 1;
  statut = '';
  actionLoading = '';

  // Assign-plan modal
  assignModal: { famille: any; planId: string; dateFin: string } | null = null;
  plans: any[] = [];
  assigning = false;

  // Detail expand
  expandedId: string | null = null;
  detailData: any = null;
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
      next: (d: any) => { this.data = d; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  search(): void { this.page = 1; this.load(); }

  toggleStatut(f: any): void {
    const newStatut = f.statut === 'actif' ? 'suspendu' : 'actif';
    this.actionLoading = f.id;
    this.sa.patchFamille(f.id, { statut: newStatut }).subscribe({
      next: (updated: any) => { f.statut = updated.statut; this.actionLoading = ''; },
      error: () => this.actionLoading = '',
    });
  }

  delete(f: any): void {
    if (!confirm(`Supprimer définitivement la famille "${f.nom}" ? Cette action est irréversible.`)) return;
    this.actionLoading = f.id;
    this.sa.deleteFamille(f.id).subscribe({
      next: () => { this.load(); this.actionLoading = ''; },
      error: () => this.actionLoading = '',
    });
  }

  openAssign(f: any): void {
    this.assignModal = { famille: f, planId: f.subscription?.planId ?? '', dateFin: '' };
  }
  closeAssign(): void { this.assignModal = null; }

  confirmAssign(): void {
    if (!this.assignModal || !this.assignModal.planId) return;
    this.assigning = true;
    this.sa.assignPlan(this.assignModal.famille.id, this.assignModal.planId, this.assignModal.dateFin || undefined).subscribe({
      next: (sub: any) => {
        const f = this.data.familles.find((x: any) => x.id === this.assignModal!.famille.id);
        if (f) f.subscription = sub;
        this.assignModal = null;
        this.assigning = false;
      },
      error: () => this.assigning = false,
    });
  }

  toggleDetail(f: any): void {
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
