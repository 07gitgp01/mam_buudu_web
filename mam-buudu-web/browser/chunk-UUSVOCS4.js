import {
  AuthService
} from "./chunk-3BB7U3NX.js";
import {
  Router,
  inject
} from "./chunk-UZMMFXAY.js";

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
//# sourceMappingURL=chunk-UUSVOCS4.js.map
