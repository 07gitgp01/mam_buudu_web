import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperAdminService } from '../services/superadmin.service';

@Component({ selector: 'sa-shell', templateUrl: './sa-shell.component.html', styleUrl: './sa-shell.component.scss', standalone: false })
export class SaShellComponent {
  navItems = [
    { path: '/superadmin/dashboard',     icon: 'dashboard',          label: 'Tableau de bord' },
    { path: '/superadmin/familles',       icon: 'family_restroom',    label: 'Familles' },
    { path: '/superadmin/users',          icon: 'group',              label: 'Utilisateurs' },
    { path: '/superadmin/subscriptions',  icon: 'credit_card',        label: 'Abonnements' },
    { path: '/superadmin/plans',          icon: 'workspace_premium',  label: 'Plans' },
    { path: '/superadmin/settings',       icon: 'settings',           label: 'Paramètres' },
    { path: '/superadmin/audit',          icon: 'history',            label: 'Journal d\'audit' },
  ];

  constructor(private sa: SuperAdminService, private router: Router) {}
  logout(): void { this.sa.logout(); this.router.navigate(['/superadmin/login']); }
}
