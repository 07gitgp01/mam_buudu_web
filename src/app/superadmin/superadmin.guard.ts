import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SuperAdminService } from './services/superadmin.service';

export const superAdminGuard: CanActivateFn = () => {
  const sa = inject(SuperAdminService);
  const router = inject(Router);
  if (sa.isLoggedIn()) return true;
  router.navigate(['/superadmin/login']);
  return false;
};
