import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../services/superadmin.service';

@Component({
  selector: 'sa-users',
  templateUrl: './sa-users.component.html',
  styleUrl: './sa-users.component.scss',
  standalone: false,
})
export class SaUsersComponent implements OnInit {
  data: any = null;
  loading = true;
  q = '';
  page = 1;
  filterRole = '';
  actionLoading = '';

  readonly platformRoles = ['superadmin', 'platform_admin', 'support'];

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.sa.getUsers({ q: this.q, page: this.page, platformRole: this.filterRole }).subscribe({
      next: (d: any) => { this.data = d; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  search(): void { this.page = 1; this.load(); }

  setRole(u: any, role: string | null): void {
    this.actionLoading = u.id;
    this.sa.patchUser(u.id, { platformRole: role }).subscribe({
      next: (updated: any) => { u.platformRole = updated.platformRole; this.actionLoading = ''; },
      error: () => { this.actionLoading = ''; },
    });
  }

  toggleSuspend(u: any): void {
    this.actionLoading = u.id;
    this.sa.patchUser(u.id, { suspended: !u.suspended }).subscribe({
      next: (updated: any) => { u.suspended = updated.suspended; this.actionLoading = ''; },
      error: () => { this.actionLoading = ''; },
    });
  }

  delete(u: any): void {
    if (!confirm(`Supprimer "${u.prenom} ${u.nom}" ? Irréversible.`)) return;
    this.actionLoading = u.id;
    this.sa.deleteUser(u.id).subscribe({
      next: () => { this.load(); },
      error: () => { this.actionLoading = ''; },
    });
  }

  exportCsv(): void { this.sa.exportCsv('users'); }
}
