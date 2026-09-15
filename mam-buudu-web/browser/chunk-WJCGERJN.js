import {
  AuthService
} from "./chunk-LX6YEX77.js";
import {
  Router,
  inject
} from "./chunk-4MA3A2KE.js";

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
//# sourceMappingURL=chunk-WJCGERJN.js.map
