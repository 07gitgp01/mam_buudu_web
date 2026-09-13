import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../services/superadmin.service';
import { SaUser } from '../../models/superadmin.model';

@Component({
  selector: 'sa-users',
  templateUrl: './sa-users.component.html',
  styleUrl: './sa-users.component.scss',
  standalone: false,
})
export class SaUsersComponent implements OnInit {
  data: { users: SaUser[]; total: number; page: number; pages: number } | null = null;
  loading = true;
  q = '';
  page = 1;
  filterRole = '';
  actionLoading = '';
  actionErreur: string | null = null;

  readonly platformRoles = ['superadmin', 'platform_admin', 'support'];

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.sa.getUsers({ q: this.q, page: this.page, platformRole: this.filterRole }).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
        if (d.pages > 0 && this.page > d.pages) { this.page = d.pages; this.load(); }
      },
      error: () => { this.loading = false; },
    });
  }

  search(): void { this.page = 1; this.load(); }

  setRole(u: SaUser, role: string | null): void {
    const nom = `${u.prenom} ${u.nom}`;
    const message = role === 'superadmin'
      ? `Donner les pleins pouvoirs superadmin à "${nom}" ? Cette personne pourra tout gérer sur la plateforme, y compris supprimer des familles et des comptes.`
      : role
        ? `Attribuer le rôle "${role}" à "${nom}" ?`
        : `Retirer le rôle plateforme de "${nom}" ?`;
    if (!confirm(message)) return;

    this.actionLoading = u.id;
    this.actionErreur = null;
    this.sa.patchUser(u.id, { platformRole: role }).subscribe({
      next: (updated) => { u.platformRole = updated.platformRole; this.actionLoading = ''; },
      error: (err) => { this.actionLoading = ''; this.actionErreur = err?.error?.error ?? 'Erreur lors du changement de rôle.'; },
    });
  }

  toggleSuspend(u: SaUser): void {
    const nom = `${u.prenom} ${u.nom}`;
    const message = u.suspended
      ? `Réactiver le compte de "${nom}" ?`
      : `Suspendre le compte de "${nom}" ? La personne perdra immédiatement l'accès à la plateforme.`;
    if (!confirm(message)) return;

    this.actionLoading = u.id;
    this.actionErreur = null;
    this.sa.patchUser(u.id, { suspended: !u.suspended }).subscribe({
      next: (updated) => { u.suspended = updated.suspended; this.actionLoading = ''; },
      error: (err) => { this.actionLoading = ''; this.actionErreur = err?.error?.error ?? 'Erreur lors du changement de statut.'; },
    });
  }

  delete(u: SaUser): void {
    if (!confirm(`Supprimer "${u.prenom} ${u.nom}" ? Irréversible.`)) return;
    this.actionLoading = u.id;
    this.actionErreur = null;
    this.sa.deleteUser(u.id).subscribe({
      next: () => { this.load(); },
      error: (err) => { this.actionLoading = ''; this.actionErreur = err?.error?.error ?? 'Erreur lors de la suppression.'; },
    });
  }

  exportCsv(): void { this.sa.exportCsv('users'); }
}
