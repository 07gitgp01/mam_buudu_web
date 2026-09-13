import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../services/superadmin.service';
import { SaAuditLog, SaAuditAdmin } from '../../models/superadmin.model';

@Component({ selector: 'sa-audit', templateUrl: './sa-audit.component.html', styleUrl: './sa-audit.component.scss', standalone: false })
export class SaAuditComponent implements OnInit {
  data: { logs: SaAuditLog[]; total: number; page: number; pages: number; admins: SaAuditAdmin[] } | null = null;
  loading = true;
  page = 1;

  filterAdminId = '';
  filterAction = '';
  filterDateDebut = '';
  filterDateFin = '';

  readonly actionLabels: Record<string, { label: string; color: string; icon: string }> = {
    assign_plan:     { label: 'Plan assigné',          color: '#3B82F6', icon: 'workspace_premium' },
    suspend_famille: { label: 'Famille suspendue',     color: '#F59E0B', icon: 'pause_circle' },
    delete_famille:  { label: 'Famille supprimée',     color: '#EF4444', icon: 'delete' },
    delete_user:     { label: 'Utilisateur supprimé',  color: '#EF4444', icon: 'person_remove' },
    change_role:     { label: 'Rôle modifié',          color: '#8B5CF6', icon: 'manage_accounts' },
    broadcast:       { label: 'Broadcast envoyé',      color: '#10B981', icon: 'campaign' },
    change_setting:  { label: 'Paramètre modifié',     color: '#6366F1', icon: 'settings' },
    delete_plan:     { label: 'Plan supprimé',         color: '#EF4444', icon: 'delete' },
    edit_plan:       { label: 'Plan modifié',          color: '#6366F1', icon: 'workspace_premium' },
    delete_setting:  { label: 'Paramètre supprimé',    color: '#EF4444', icon: 'settings' },
  };

  readonly actionKeys = Object.keys(this.actionLabels);

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    const params: Record<string, string | number> = { page: this.page };
    if (this.filterAdminId)   params['adminId']   = this.filterAdminId;
    if (this.filterAction)    params['action']    = this.filterAction;
    if (this.filterDateDebut) params['dateDebut'] = this.filterDateDebut;
    if (this.filterDateFin)   params['dateFin']   = this.filterDateFin;

    this.sa.getAudit(params).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
        if (d.pages > 0 && this.page > d.pages) { this.page = d.pages; this.load(); }
      },
      error: () => this.loading = false,
    });
  }

  applyFilters(): void { this.page = 1; this.load(); }

  resetFilters(): void {
    this.filterAdminId = ''; this.filterAction = ''; this.filterDateDebut = ''; this.filterDateFin = '';
    this.page = 1;
    this.load();
  }

  getMeta(action: string) {
    return this.actionLabels[action] ?? { label: action, color: '#94A3B8', icon: 'info' };
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  formatDetails(details: Record<string, unknown> | null): string {
    if (!details) return '—';
    return Object.entries(details).map(([k, v]) => `${k}: ${v}`).join(' · ');
  }
}
