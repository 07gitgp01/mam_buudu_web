import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from './toast.service';

// Routes qui gèrent déjà leur propre affichage d'erreur en ligne (formulaires
// auth avec `errorMsg` dédié) — un toast en plus ferait doublon.
const SILENT_PREFIXES = ['/api/auth/'];

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);

  return next(req).pipe(
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse) {
        const isSilent = SILENT_PREFIXES.some(p => req.url.includes(p));
        if (!isSilent) {
          const backendMessage = (err.error as { error?: string } | null)?.error;
          const message = backendMessage
            || (err.status === 0 ? 'Connexion au serveur impossible. Vérifiez votre réseau.' : 'Une erreur est survenue. Réessayez.');
          toast.error(message);
        }
      }
      return throwError(() => err);
    }),
  );
};
