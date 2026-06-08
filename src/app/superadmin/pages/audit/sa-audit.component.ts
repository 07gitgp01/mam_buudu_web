import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../services/superadmin.service';

@Component({ selector: 'sa-audit', templateUrl: './sa-audit.component.html', styleUrl: './sa-audit.component.scss', standalone: false })
export class SaAuditComponent implements OnInit {
  data: any = null;
  loading = true;
  page = 1;

  readonly actionLabels: Record<string, { label: string; color: string; icon: string }> = {
    assign_plan:     { label: 'Plan assigné',          color: '#3B82F6', icon: 'workspace_premium' },
    suspend_famille: { label: 'Famille suspendue',     color: '#F59E0B', icon: 'pause_circle' },
    delete_famille:  { label: 'Famille supprimée',     color: '#EF4444', icon: 'delete' },
    delete_user:     { label: 'Utilisateur supprimé',  color: '#EF4444', icon: 'person_remove' },
    change_role:     { label: 'Rôle modifié',          color: '#8B5CF6', icon: 'manage_accounts' },
    broadcast:       { label: 'Broadcast envoyé',      color: '#10B981', icon: 'campaign' },
    change_setting:  { label: 'Paramètre modifié',     color: '#6366F1', icon: 'settings' },
    delete_plan:     { label: 'Plan supprimé',         color: '#EF4444', icon: 'delete' },
  };

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.sa.getAudit({ page: this.page }).subscribe({
      next: (d) => { this.data = d; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  getMeta(action: string) {
    return this.actionLabels[action] ?? { label: action, color: '#94A3B8', icon: 'info' };
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  formatDetails(details: any): string {
    if (!details) return '—';
    return Object.entries(details).map(([k, v]) => `${k}: ${v}`).join(' · ');
  }
}
