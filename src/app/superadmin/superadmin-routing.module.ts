import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { superAdminGuard } from './superadmin.guard';
import { SaShellComponent } from './shell/sa-shell.component';
import { SaLoginComponent } from './pages/login/sa-login.component';
import { SaDashboardComponent } from './pages/dashboard/sa-dashboard.component';
import { SaFamillesComponent } from './pages/familles/sa-familles.component';
import { SaUsersComponent } from './pages/users/sa-users.component';
import { SaSubscriptionsComponent } from './pages/subscriptions/sa-subscriptions.component';
import { SaSettingsComponent } from './pages/settings/sa-settings.component';
import { SaPlansComponent } from './pages/plans/sa-plans.component';
import { SaAuditComponent } from './pages/audit/sa-audit.component';

const routes: Routes = [
  { path: 'login', component: SaLoginComponent },
  {
    path: '',
    component: SaShellComponent,
    canActivate: [superAdminGuard],
    children: [
      { path: '',              redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',     component: SaDashboardComponent },
      { path: 'familles',      component: SaFamillesComponent },
      { path: 'users',         component: SaUsersComponent },
      { path: 'subscriptions', component: SaSubscriptionsComponent },
      { path: 'plans',         component: SaPlansComponent },
      { path: 'settings',      component: SaSettingsComponent },
      { path: 'audit',         component: SaAuditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}
