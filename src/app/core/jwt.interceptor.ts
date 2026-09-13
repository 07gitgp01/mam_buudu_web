import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // Le module superadmin pose son propre header Authorization (token sa_token) ;
  // ne pas l'écraser avec le token utilisateur famille (mb_token).
  if (req.url.includes('/api/superadmin')) {
    return next(req);
  }

  const token = localStorage.getItem('mb_token');
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};
