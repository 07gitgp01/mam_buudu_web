import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuperAdminRoutingModule } from './superadmin-routing.module';
import { SaShellComponent } from './shell/sa-shell.component';
import { SaLoginComponent } from './pages/login/sa-login.component';
import { SaDashboardComponent } from './pages/dashboard/sa-dashboard.component';
import { SaFamillesComponent } from './pages/familles/sa-familles.component';
import { SaUsersComponent } from './pages/users/sa-users.component';
import { SaSubscriptionsComponent } from './pages/subscriptions/sa-subscriptions.component';
import { SaSettingsComponent } from './pages/settings/sa-settings.component';
import { SaPlansComponent } from './pages/plans/sa-plans.component';
import { SaAuditComponent } from './pages/audit/sa-audit.component';

@NgModule({
  declarations: [
    SaShellComponent, SaLoginComponent, SaDashboardComponent,
    SaFamillesComponent, SaUsersComponent, SaSubscriptionsComponent,
    SaSettingsComponent, SaPlansComponent, SaAuditComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, SuperAdminRoutingModule],
})
export class SuperAdminModule {}
