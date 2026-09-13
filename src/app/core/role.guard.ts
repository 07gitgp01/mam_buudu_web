import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Bloque l'accès à une route si le rôle de l'utilisateur connecté
 * n'est pas dans `allowedRoles`. À combiner avec authGuard/clientGuard
 * (qui vérifient seulement que l'utilisateur est connecté).
 */
export function roleGuard(allowedRoles: string[]): CanActivateFn {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const role = auth.getUser()?.role;

    if (role && allowedRoles.includes(role)) return true;

    router.navigate(role === 'membre' || role === 'viewonly' ? ['/famille'] : ['/app/home']);
    return false;
  };
}
