import {
  AuthService
} from "./chunk-7NDXYM4W.js";
import {
  Router,
  inject
} from "./chunk-K4P23IOF.js";

// src/app/core/role.guard.ts
function roleGuard(allowedRoles) {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const role = auth.getUser()?.role;
    if (role && allowedRoles.includes(role))
      return true;
    router.navigate(role === "membre" || role === "viewonly" ? ["/famille"] : ["/app/home"]);
    return false;
  };
}

export {
  roleGuard
};
//# sourceMappingURL=chunk-4UVP2ZCS.js.map
