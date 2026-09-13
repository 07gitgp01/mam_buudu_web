import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ESHQL2TU.js";
import {
  API_BASE_URL,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpHeaders,
  Injectable,
  NgModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SlicePipe,
  forkJoin,
  inject,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WU2I6PFW.js";
import "./chunk-YP43Q66R.js";

// src/app/superadmin/services/superadmin.service.ts
var SuperAdminService = class _SuperAdminService {
  http;
  base = `${API_BASE_URL}/api/superadmin`;
  constructor(http) {
    this.http = http;
  }
  headers() {
    const token = localStorage.getItem("sa_token") ?? "";
    return { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) };
  }
  // Auth
  login(email, password) {
    return this.http.post(`${this.base}/auth/login`, { email, password }).pipe(tap((res) => localStorage.setItem("sa_token", res.token)));
  }
  logout() {
    localStorage.removeItem("sa_token");
  }
  isLoggedIn() {
    return !!localStorage.getItem("sa_token");
  }
  // Stats
  getStats() {
    return this.http.get(`${this.base}/stats`, this.headers());
  }
  getRevenue() {
    return this.http.get(`${this.base}/revenue`, this.headers());
  }
  getActivity() {
    return this.http.get(`${this.base}/activity`, this.headers());
  }
  // Familles
  getFamilles(params = {}) {
    const q = new URLSearchParams(params).toString();
    return this.http.get(`${this.base}/familles?${q}`, this.headers());
  }
  getFamille(id) {
    return this.http.get(`${this.base}/familles/${id}`, this.headers());
  }
  patchFamille(id, data) {
    return this.http.patch(`${this.base}/familles/${id}`, data, this.headers());
  }
  assignPlan(familleId, planId, dateFin) {
    return this.http.post(`${this.base}/familles/${familleId}/assign-plan`, { planId, dateFin }, this.headers());
  }
  deleteFamille(id) {
    return this.http.delete(`${this.base}/familles/${id}`, this.headers());
  }
  // Users
  getUsers(params = {}) {
    const q = new URLSearchParams(params).toString();
    return this.http.get(`${this.base}/users?${q}`, this.headers());
  }
  patchUser(id, data) {
    return this.http.patch(`${this.base}/users/${id}`, data, this.headers());
  }
  deleteUser(id) {
    return this.http.delete(`${this.base}/users/${id}`, this.headers());
  }
  // Subscriptions
  getSubscriptions(params = {}) {
    const q = new URLSearchParams(params).toString();
    return this.http.get(`${this.base}/subscriptions?${q}`, this.headers());
  }
  // Plans
  getPlans() {
    return this.http.get(`${this.base}/plans`, this.headers());
  }
  createPlan(data) {
    return this.http.post(`${this.base}/plans`, data, this.headers());
  }
  patchPlan(id, data) {
    return this.http.patch(`${this.base}/plans/${id}`, data, this.headers());
  }
  deletePlan(id) {
    return this.http.delete(`${this.base}/plans/${id}`, this.headers());
  }
  // Settings
  getSettings() {
    return this.http.get(`${this.base}/settings`, this.headers());
  }
  patchSetting(key, value, label) {
    return this.http.patch(`${this.base}/settings/${key}`, { value, label }, this.headers());
  }
  deleteSetting(key) {
    return this.http.delete(`${this.base}/settings/${key}`, this.headers());
  }
  // Audit log
  getAudit(params = {}) {
    const q = new URLSearchParams(params).toString();
    return this.http.get(`${this.base}/audit?${q}`, this.headers());
  }
  // Broadcast
  broadcast(titre, message) {
    return this.http.post(`${this.base}/broadcast`, { titre, message }, this.headers());
  }
  // Export CSV (ouvre dans un nouvel onglet avec le token dans l'URL — on passe le token en header via fetch)
  exportCsv(type) {
    const token = localStorage.getItem("sa_token") ?? "";
    fetch(`${this.base}/export/${type}`, { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.blob()).then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${type}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  static \u0275fac = function SuperAdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuperAdminService, factory: _SuperAdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/superadmin/superadmin.guard.ts
var superAdminGuard = () => {
  const sa = inject(SuperAdminService);
  const router = inject(Router);
  if (sa.isLoggedIn())
    return true;
  router.navigate(["/superadmin/login"]);
  return false;
};

// src/app/superadmin/shell/sa-shell.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function SaShellComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 7)(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var SaShellComponent = class _SaShellComponent {
  sa;
  router;
  navItems = [
    { path: "/superadmin/dashboard", icon: "dashboard", label: "Tableau de bord" },
    { path: "/superadmin/familles", icon: "family_restroom", label: "Familles" },
    { path: "/superadmin/users", icon: "group", label: "Utilisateurs" },
    { path: "/superadmin/subscriptions", icon: "credit_card", label: "Abonnements" },
    { path: "/superadmin/plans", icon: "workspace_premium", label: "Plans" },
    { path: "/superadmin/settings", icon: "settings", label: "Param\xE8tres" },
    { path: "/superadmin/audit", icon: "history", label: "Journal d'audit" }
  ];
  constructor(sa, router) {
    this.sa = sa;
    this.router = router;
  }
  logout() {
    this.sa.logout();
    this.router.navigate(["/superadmin/login"]);
  }
  static \u0275fac = function SaShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaShellComponent)(\u0275\u0275directiveInject(SuperAdminService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaShellComponent, selectors: [["sa-shell"]], standalone: false, decls: 16, vars: 0, consts: [[1, "sa-layout"], [1, "sa-sidebar"], [1, "sa-logo"], [1, "material-icons-round"], [1, "sa-nav"], [1, "sa-logout", 3, "click"], [1, "sa-main"], ["routerLinkActive", "active", 3, "routerLink"]], template: function SaShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "admin_panel_settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "ul", 4);
      \u0275\u0275repeaterCreate(8, SaShellComponent_For_9_Template, 6, 3, "li", null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 5);
      \u0275\u0275listener("click", function SaShellComponent_Template_button_click_10_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(11, "span", 3);
      \u0275\u0275text(12, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " D\xE9connexion ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "main", 6);
      \u0275\u0275element(15, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.navItems);
    }
  }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.sa-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #F1F5F9;\n}\n.sa-sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  min-height: 100vh;\n  background: #0F172A;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n}\n.sa-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 20px 16px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sa-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #6366F1;\n  font-size: 28px;\n}\n.sa-nav[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 12px 0;\n  margin: 0;\n  flex: 1;\n  overflow-y: auto;\n}\n.sa-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 20px;\n  color: #94A3B8;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.sa-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.sa-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.06);\n}\n.sa-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: rgba(99, 102, 241, 0.2);\n  border-right: 3px solid #6366F1;\n}\n.sa-logout[_ngcontent-%COMP%] {\n  margin: 12px 16px;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #EF4444;\n  background: transparent;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sa-logout[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sa-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.sa-main[_ngcontent-%COMP%] {\n  margin-left: 240px;\n  flex: 1;\n  min-height: 100vh;\n  padding: 32px;\n}\n/*# sourceMappingURL=sa-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaShellComponent, [{
    type: Component,
    args: [{ selector: "sa-shell", standalone: false, template: '<div class="sa-layout">\r\n  <nav class="sa-sidebar">\r\n    <div class="sa-logo">\r\n      <span class="material-icons-round">admin_panel_settings</span>\r\n      <span>Admin</span>\r\n    </div>\r\n    <ul class="sa-nav">\r\n      @for (item of navItems; track item.path) {\r\n        <li>\r\n          <a [routerLink]="item.path" routerLinkActive="active">\r\n            <span class="material-icons-round">{{ item.icon }}</span>\r\n            <span>{{ item.label }}</span>\r\n          </a>\r\n        </li>\r\n      }\r\n    </ul>\r\n    <button class="sa-logout" (click)="logout()">\r\n      <span class="material-icons-round">logout</span>\r\n      D\xE9connexion\r\n    </button>\r\n  </nav>\r\n  <main class="sa-main">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n', styles: ["/* src/app/superadmin/shell/sa-shell.component.scss */\n.sa-layout {\n  display: flex;\n  min-height: 100vh;\n  background: #F1F5F9;\n}\n.sa-sidebar {\n  width: 240px;\n  min-height: 100vh;\n  background: #0F172A;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n}\n.sa-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 20px 16px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.sa-logo .material-icons-round {\n  color: #6366F1;\n  font-size: 28px;\n}\n.sa-nav {\n  list-style: none;\n  padding: 12px 0;\n  margin: 0;\n  flex: 1;\n  overflow-y: auto;\n}\n.sa-nav li a {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 20px;\n  color: #94A3B8;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.sa-nav li a .material-icons-round {\n  font-size: 20px;\n}\n.sa-nav li a:hover {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.06);\n}\n.sa-nav li a.active {\n  color: #fff;\n  background: rgba(99, 102, 241, 0.2);\n  border-right: 3px solid #6366F1;\n}\n.sa-logout {\n  margin: 12px 16px;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #EF4444;\n  background: transparent;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sa-logout .material-icons-round {\n  font-size: 18px;\n}\n.sa-logout:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.sa-main {\n  margin-left: 240px;\n  flex: 1;\n  min-height: 100vh;\n  padding: 32px;\n}\n/*# sourceMappingURL=sa-shell.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaShellComponent, { className: "SaShellComponent", filePath: "src/app/superadmin/shell/sa-shell.component.ts", lineNumber: 6 });
})();

// src/app/superadmin/pages/login/sa-login.component.ts
function SaLoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function SaLoginComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
function SaLoginComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Connexion ");
  }
}
var SaLoginComponent = class _SaLoginComponent {
  fb;
  sa;
  router;
  form;
  loading = false;
  errorMsg = "";
  showPassword = false;
  constructor(fb, sa, router) {
    this.fb = fb;
    this.sa = sa;
    this.router = router;
    if (sa.isLoggedIn())
      router.navigate(["/superadmin/dashboard"]);
    this.form = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    this.loading = true;
    this.errorMsg = "";
    this.sa.login(this.form.value.email, this.form.value.password).subscribe({
      next: () => this.router.navigate(["/superadmin/dashboard"]),
      error: (err) => {
        this.errorMsg = err?.error?.error ?? "Erreur de connexion";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function SaLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SuperAdminService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaLoginComponent, selectors: [["sa-login"]], standalone: false, decls: 31, vars: 10, consts: [[1, "sa-login-page"], [1, "sa-login-card"], [1, "sa-login-icon"], [1, "material-icons-round"], [1, "sa-login-sub"], [3, "ngSubmit", "formGroup"], [1, "sa-form-group"], [1, "sa-input"], ["type", "email", "formControlName", "email", "placeholder", "admin@mam-buudu.com"], ["formControlName", "password", 3, "type"], ["type", "button", 1, "sa-eye", 3, "click"], [1, "sa-error"], ["type", "submit", 1, "sa-btn-submit", 3, "disabled"], [1, "sa-spinner"]], template: function SaLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "admin_panel_settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Mam Buudu Platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "form", 5);
      \u0275\u0275listener("ngSubmit", function SaLoginComponent_Template_form_ngSubmit_9_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(10, "div", 6)(11, "label");
      \u0275\u0275text(12, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "span", 3);
      \u0275\u0275text(15, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 6)(18, "label");
      \u0275\u0275text(19, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7)(21, "span", 3);
      \u0275\u0275text(22, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 9);
      \u0275\u0275elementStart(24, "button", 10);
      \u0275\u0275listener("click", function SaLoginComponent_Template_button_click_24_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275elementStart(25, "span", 3);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(27, SaLoginComponent_Conditional_27_Template, 2, 1, "div", 11);
      \u0275\u0275elementStart(28, "button", 12);
      \u0275\u0275conditionalCreate(29, SaLoginComponent_Conditional_29_Template, 1, 0, "span", 13)(30, SaLoginComponent_Conditional_30_Template, 1, 0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("err", ctx.f["email"].invalid && ctx.f["email"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("err", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.showPassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMsg ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 29 : 30);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.sa-login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #0F172A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sa-login-card[_ngcontent-%COMP%] {\n  background: #1E293B;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 40px;\n  width: 380px;\n  text-align: center;\n}\n.sa-login-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: rgba(99, 102, 241, 0.15);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.sa-login-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #6366F1;\n}\nh1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  margin: 0 0 4px;\n}\n.sa-login-sub[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 13px;\n  margin-bottom: 28px;\n}\n.sa-form-group[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 16px;\n}\n.sa-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: #94A3B8;\n  font-size: 13px;\n  margin-bottom: 6px;\n}\n.sa-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #0F172A;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  padding: 0 12px;\n}\n.sa-input[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.sa-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  padding: 10px 0;\n}\n.sa-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #475569;\n}\n.sa-input[_ngcontent-%COMP%]   input.err[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.sa-eye[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #475569;\n  padding: 0;\n  display: flex;\n}\n.sa-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #EF4444;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.sa-btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: #6366F1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.sa-btn-submit[_ngcontent-%COMP%]:hover {\n  background: #4F46E5;\n}\n.sa-btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=sa-login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaLoginComponent, [{
    type: Component,
    args: [{ selector: "sa-login", standalone: false, template: `<div class="sa-login-page">\r
  <div class="sa-login-card">\r
    <div class="sa-login-icon">\r
      <span class="material-icons-round">admin_panel_settings</span>\r
    </div>\r
    <h1>Administration</h1>\r
    <p class="sa-login-sub">Mam Buudu Platform</p>\r
\r
    <form [formGroup]="form" (ngSubmit)="submit()">\r
      <div class="sa-form-group">\r
        <label>Email</label>\r
        <div class="sa-input">\r
          <span class="material-icons-round">email</span>\r
          <input type="email" formControlName="email" placeholder="admin@mam-buudu.com"\r
                 [class.err]="f['email'].invalid && f['email'].touched"/>\r
        </div>\r
      </div>\r
      <div class="sa-form-group">\r
        <label>Mot de passe</label>\r
        <div class="sa-input">\r
          <span class="material-icons-round">lock</span>\r
          <input [type]="showPassword ? 'text' : 'password'" formControlName="password"\r
                 [class.err]="f['password'].invalid && f['password'].touched"/>\r
          <button type="button" class="sa-eye" (click)="showPassword = !showPassword">\r
            <span class="material-icons-round">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>\r
          </button>\r
        </div>\r
      </div>\r
      @if (errorMsg) {\r
        <div class="sa-error">{{ errorMsg }}</div>\r
      }\r
      <button type="submit" class="sa-btn-submit" [disabled]="loading">\r
        @if (loading) { <span class="sa-spinner"></span> } @else { Connexion }\r
      </button>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/superadmin/pages/login/sa-login.component.scss */\n.sa-login-page {\n  min-height: 100vh;\n  background: #0F172A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sa-login-card {\n  background: #1E293B;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 40px;\n  width: 380px;\n  text-align: center;\n}\n.sa-login-icon {\n  width: 64px;\n  height: 64px;\n  background: rgba(99, 102, 241, 0.15);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.sa-login-icon .material-icons-round {\n  font-size: 32px;\n  color: #6366F1;\n}\nh1 {\n  color: #fff;\n  font-size: 22px;\n  margin: 0 0 4px;\n}\n.sa-login-sub {\n  color: #64748B;\n  font-size: 13px;\n  margin-bottom: 28px;\n}\n.sa-form-group {\n  text-align: left;\n  margin-bottom: 16px;\n}\n.sa-form-group label {\n  display: block;\n  color: #94A3B8;\n  font-size: 13px;\n  margin-bottom: 6px;\n}\n.sa-input {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #0F172A;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  padding: 0 12px;\n}\n.sa-input .material-icons-round {\n  color: #475569;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.sa-input input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 14px;\n  padding: 10px 0;\n}\n.sa-input input::placeholder {\n  color: #475569;\n}\n.sa-input input.err {\n  color: #EF4444;\n}\n.sa-eye {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #475569;\n  padding: 0;\n  display: flex;\n}\n.sa-error {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #EF4444;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.sa-btn-submit {\n  width: 100%;\n  padding: 12px;\n  background: #6366F1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.sa-btn-submit:hover {\n  background: #4F46E5;\n}\n.sa-btn-submit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=sa-login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: SuperAdminService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaLoginComponent, { className: "SaLoginComponent", filePath: "src/app/superadmin/pages/login/sa-login.component.ts", lineNumber: 12 });
})();

// src/app/superadmin/pages/dashboard/sa-dashboard.component.ts
var _forTrack02 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.at;
function SaDashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SaDashboardComponent_Conditional_7_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275element(5, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.montant > 0 ? \u0275\u0275pipeBind1(3, 6, m_r1.montant) : "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("height", ctx_r1.barHeight(m_r1.montant));
    \u0275\u0275classProp("sa-bar-active", m_r1.montant > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.label);
  }
}
function SaDashboardComponent_Conditional_7_For_64_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.sub);
  }
}
function SaDashboardComponent_Conditional_7_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 26)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27)(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SaDashboardComponent_Conditional_7_For_64_Conditional_7_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.activityColor(item_r3.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.sub ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.timeAgo(item_r3.at));
  }
}
function SaDashboardComponent_Conditional_7_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Aucune activit\xE9 r\xE9cente");
    \u0275\u0275elementEnd();
  }
}
function SaDashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4, "family_restroom");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275text(10, "Familles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 4)(14, "div", 11)(15, "span", 6);
    \u0275\u0275text(16, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 7)(18, "div", 8);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 9);
    \u0275\u0275text(22, "Utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 4)(26, "div", 12)(27, "span", 6);
    \u0275\u0275text(28, "credit_card");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 7)(30, "div", 8);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 9);
    \u0275\u0275text(33, "Abonnements actifs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 4)(35, "div", 13)(36, "span", 6);
    \u0275\u0275text(37, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 7)(39, "div", 8);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "number");
    \u0275\u0275elementStart(42, "small");
    \u0275\u0275text(43, "FCFA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 9);
    \u0275\u0275text(45, "Revenus ce mois");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 14)(47, "div", 15)(48, "div", 16)(49, "span", 6);
    \u0275\u0275text(50, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "h3");
    \u0275\u0275text(52, "Revenus mensuels (12 mois)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 17);
    \u0275\u0275repeaterCreate(54, SaDashboardComponent_Conditional_7_For_55_Template, 8, 8, "div", 18, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 15)(57, "div", 16)(58, "span", 6);
    \u0275\u0275text(59, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "h3");
    \u0275\u0275text(61, "Activit\xE9 r\xE9cente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 19);
    \u0275\u0275repeaterCreate(63, SaDashboardComponent_Conditional_7_For_64_Template, 10, 6, "div", 20, _forTrack1);
    \u0275\u0275conditionalCreate(65, SaDashboardComponent_Conditional_7_Conditional_65_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, ctx_r1.stats.totalFamilles));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", ctx_r1.stats.newFamillesMonth, " ce mois");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 9, ctx_r1.stats.totalUsers));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", ctx_r1.stats.newUsersWeek, " cette semaine");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalSubscriptions);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(41, 11, ctx_r1.stats.revenueMois), " ");
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.revenue);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.activity);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activity.length === 0 ? 65 : -1);
  }
}
var SaDashboardComponent = class _SaDashboardComponent {
  sa;
  stats = null;
  revenue = [];
  activity = [];
  loading = true;
  constructor(sa) {
    this.sa = sa;
  }
  ngOnInit() {
    forkJoin({ stats: this.sa.getStats(), revenue: this.sa.getRevenue(), activity: this.sa.getActivity() }).subscribe({
      next: (data) => {
        this.stats = data.stats;
        this.revenue = data.revenue;
        this.activity = data.activity;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  get revenueMax() {
    return Math.max(...this.revenue.map((r) => r.montant), 1);
  }
  barHeight(montant) {
    return `${Math.max(4, Math.round(montant / this.revenueMax * 100))}%`;
  }
  activityColor(type) {
    return { user: "#6366F1", famille: "#10B981", sub: "#F59E0B", payment: "#3B82F6" }[type] ?? "#94A3B8";
  }
  timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 6e4);
    if (m < 1)
      return "\xE0 l'instant";
    if (m < 60)
      return `il y a ${m} min`;
    const h = Math.floor(m / 60);
    if (h < 24)
      return `il y a ${h}h`;
    return `il y a ${Math.floor(h / 24)}j`;
  }
  static \u0275fac = function SaDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaDashboardComponent)(\u0275\u0275directiveInject(SuperAdminService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaDashboardComponent, selectors: [["sa-dashboard"]], standalone: false, decls: 8, vars: 1, consts: [[1, "sa-page"], [1, "sa-page-header"], [1, "sa-loading"], [1, "sa-stats-grid"], [1, "sa-stat-card"], [1, "sa-stat-icon", "blue"], [1, "material-icons-round"], [1, "sa-stat-body"], [1, "sa-stat-value"], [1, "sa-stat-label"], [1, "sa-stat-sub"], [1, "sa-stat-icon", "purple"], [1, "sa-stat-icon", "green"], [1, "sa-stat-icon", "orange"], [1, "sa-dash-grid"], [1, "sa-card"], [1, "sa-card-header"], [1, "sa-chart"], [1, "sa-bar-col"], [1, "sa-feed"], [1, "sa-feed-item"], [1, "sa-empty"], [1, "sa-bar-val"], [1, "sa-bar-wrap"], [1, "sa-bar"], [1, "sa-bar-label"], [1, "sa-feed-dot"], [1, "sa-feed-body"], [1, "sa-feed-label"], [1, "sa-feed-sub"], [1, "sa-feed-time"]], template: function SaDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Vue d'ensemble de la plateforme Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, SaDashboardComponent_Conditional_6_Template, 2, 0, "div", 2)(7, SaDashboardComponent_Conditional_7_Template, 66, 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading ? 6 : ctx.stats ? 7 : -1);
    }
  }, dependencies: [DecimalPipe], styles: ["\n\n.sa-page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.sa-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n  font-size: 14px;\n}\n.sa-loading[_ngcontent-%COMP%] {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}\n.sa-stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sa-stat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.sa-stat-icon.blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n}\n.sa-stat-icon.blue[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #2563EB;\n}\n.sa-stat-icon.purple[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n}\n.sa-stat-icon.purple[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.sa-stat-icon.green[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n}\n.sa-stat-icon.green[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.sa-stat-icon.orange[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n}\n.sa-stat-icon.orange[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #EA580C;\n}\n.sa-stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.sa-stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n  margin: 2px 0;\n}\n.sa-stat-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #10B981;\n}\n.sa-stat-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.sa-dash-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 20px;\n  margin-top: 20px;\n}\n@media (max-width: 900px) {\n  .sa-dash-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sa-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.sa-card-header[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #6366F1;\n  font-size: 20px;\n}\n.sa-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n}\n.sa-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 160px;\n  padding-bottom: 28px;\n  position: relative;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-bar-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  height: 100%;\n}\n.sa-bar-val[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #94A3B8;\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n  height: 30px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sa-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.sa-bar[_ngcontent-%COMP%] {\n  width: 80%;\n  border-radius: 4px 4px 0 0;\n  background: #E2E8F0;\n  transition: height 0.3s ease;\n}\n.sa-bar.sa-bar-active[_ngcontent-%COMP%] {\n  background: #6366F1;\n}\n.sa-bar-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #94A3B8;\n  text-align: center;\n  white-space: nowrap;\n}\n.sa-feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.sa-feed-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid #F8FAFC;\n}\n.sa-feed-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sa-feed-dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sa-feed-dot[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n}\n.sa-feed-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sa-feed-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #0F172A;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sa-feed-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.sa-feed-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94A3B8;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.sa-empty[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #94A3B8;\n  font-size: 13px;\n}\n/*# sourceMappingURL=sa-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaDashboardComponent, [{
    type: Component,
    args: [{ selector: "sa-dashboard", standalone: false, template: `<div class="sa-page">\r
  <div class="sa-page-header">\r
    <h1>Tableau de bord</h1>\r
    <p>Vue d'ensemble de la plateforme Mam Buudu</p>\r
  </div>\r
\r
  @if (loading) {\r
    <div class="sa-loading">Chargement...</div>\r
  } @else if (stats) {\r
\r
    <!-- Stat cards -->\r
    <div class="sa-stats-grid">\r
      <div class="sa-stat-card">\r
        <div class="sa-stat-icon blue"><span class="material-icons-round">family_restroom</span></div>\r
        <div class="sa-stat-body">\r
          <div class="sa-stat-value">{{ stats.totalFamilles | number }}</div>\r
          <div class="sa-stat-label">Familles</div>\r
          <div class="sa-stat-sub">+{{ stats.newFamillesMonth }} ce mois</div>\r
        </div>\r
      </div>\r
      <div class="sa-stat-card">\r
        <div class="sa-stat-icon purple"><span class="material-icons-round">group</span></div>\r
        <div class="sa-stat-body">\r
          <div class="sa-stat-value">{{ stats.totalUsers | number }}</div>\r
          <div class="sa-stat-label">Utilisateurs</div>\r
          <div class="sa-stat-sub">+{{ stats.newUsersWeek }} cette semaine</div>\r
        </div>\r
      </div>\r
      <div class="sa-stat-card">\r
        <div class="sa-stat-icon green"><span class="material-icons-round">credit_card</span></div>\r
        <div class="sa-stat-body">\r
          <div class="sa-stat-value">{{ stats.totalSubscriptions }}</div>\r
          <div class="sa-stat-label">Abonnements actifs</div>\r
        </div>\r
      </div>\r
      <div class="sa-stat-card">\r
        <div class="sa-stat-icon orange"><span class="material-icons-round">payments</span></div>\r
        <div class="sa-stat-body">\r
          <div class="sa-stat-value">{{ stats.revenueMois | number }} <small>FCFA</small></div>\r
          <div class="sa-stat-label">Revenus ce mois</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Revenue chart + Activity feed -->\r
    <div class="sa-dash-grid">\r
\r
      <!-- Revenue CSS bar chart -->\r
      <div class="sa-card">\r
        <div class="sa-card-header">\r
          <span class="material-icons-round">bar_chart</span>\r
          <h3>Revenus mensuels (12 mois)</h3>\r
        </div>\r
        <div class="sa-chart">\r
          @for (m of revenue; track m.label) {\r
            <div class="sa-bar-col">\r
              <div class="sa-bar-val">{{ m.montant > 0 ? (m.montant | number) : '' }}</div>\r
              <div class="sa-bar-wrap">\r
                <div class="sa-bar" [style.height]="barHeight(m.montant)" [class.sa-bar-active]="m.montant > 0"></div>\r
              </div>\r
              <div class="sa-bar-label">{{ m.label }}</div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
\r
      <!-- Activity feed -->\r
      <div class="sa-card">\r
        <div class="sa-card-header">\r
          <span class="material-icons-round">bolt</span>\r
          <h3>Activit\xE9 r\xE9cente</h3>\r
        </div>\r
        <div class="sa-feed">\r
          @for (item of activity; track item.at) {\r
            <div class="sa-feed-item">\r
              <div class="sa-feed-dot" [style.background]="activityColor(item.type)">\r
                <span class="material-icons-round">{{ item.icon }}</span>\r
              </div>\r
              <div class="sa-feed-body">\r
                <div class="sa-feed-label">{{ item.label }}</div>\r
                @if (item.sub) { <div class="sa-feed-sub">{{ item.sub }}</div> }\r
              </div>\r
              <div class="sa-feed-time">{{ timeAgo(item.at) }}</div>\r
            </div>\r
          }\r
          @if (activity.length === 0) {\r
            <div class="sa-empty">Aucune activit\xE9 r\xE9cente</div>\r
          }\r
        </div>\r
      </div>\r
\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/superadmin/pages/dashboard/sa-dashboard.component.scss */\n.sa-page-header {\n  margin-bottom: 28px;\n}\n.sa-page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header p {\n  color: #64748B;\n  margin: 0;\n  font-size: 14px;\n}\n.sa-loading {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}\n.sa-stat-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sa-stat-icon .material-icons-round {\n  font-size: 24px;\n}\n.sa-stat-icon.blue {\n  background: #EFF6FF;\n}\n.sa-stat-icon.blue .material-icons-round {\n  color: #2563EB;\n}\n.sa-stat-icon.purple {\n  background: #F5F3FF;\n}\n.sa-stat-icon.purple .material-icons-round {\n  color: #7C3AED;\n}\n.sa-stat-icon.green {\n  background: #ECFDF5;\n}\n.sa-stat-icon.green .material-icons-round {\n  color: #059669;\n}\n.sa-stat-icon.orange {\n  background: #FFF7ED;\n}\n.sa-stat-icon.orange .material-icons-round {\n  color: #EA580C;\n}\n.sa-stat-value {\n  font-size: 24px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.sa-stat-label {\n  font-size: 13px;\n  color: #64748B;\n  margin: 2px 0;\n}\n.sa-stat-sub {\n  font-size: 12px;\n  color: #10B981;\n}\n.sa-stat-value small {\n  font-size: 14px;\n  font-weight: 400;\n}\n.sa-dash-grid {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 20px;\n  margin-top: 20px;\n}\n@media (max-width: 900px) {\n  .sa-dash-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.sa-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.sa-card-header .material-icons-round {\n  color: #6366F1;\n  font-size: 20px;\n}\n.sa-card-header h3 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n}\n.sa-chart {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 160px;\n  padding-bottom: 28px;\n  position: relative;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-bar-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  height: 100%;\n}\n.sa-bar-val {\n  font-size: 9px;\n  color: #94A3B8;\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n  height: 30px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sa-bar-wrap {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.sa-bar {\n  width: 80%;\n  border-radius: 4px 4px 0 0;\n  background: #E2E8F0;\n  transition: height 0.3s ease;\n}\n.sa-bar.sa-bar-active {\n  background: #6366F1;\n}\n.sa-bar-label {\n  font-size: 10px;\n  color: #94A3B8;\n  text-align: center;\n  white-space: nowrap;\n}\n.sa-feed {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.sa-feed-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid #F8FAFC;\n}\n.sa-feed-item:last-child {\n  border-bottom: none;\n}\n.sa-feed-dot {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sa-feed-dot .material-icons-round {\n  font-size: 16px;\n  color: #fff;\n}\n.sa-feed-body {\n  flex: 1;\n  min-width: 0;\n}\n.sa-feed-label {\n  font-size: 13px;\n  color: #0F172A;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sa-feed-sub {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.sa-feed-time {\n  font-size: 11px;\n  color: #94A3B8;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.sa-empty {\n  padding: 20px;\n  text-align: center;\n  color: #94A3B8;\n  font-size: 13px;\n}\n/*# sourceMappingURL=sa-dashboard.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaDashboardComponent, { className: "SaDashboardComponent", filePath: "src/app/superadmin/pages/dashboard/sa-dashboard.component.ts", lineNumber: 6 });
})();

// src/app/superadmin/pages/familles/sa-familles.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function SaFamillesComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SaFamillesComponent_Conditional_25_For_23_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3.subscription == null ? null : f_r3.subscription.plan == null ? null : f_r3.subscription.plan.label);
  }
}
function SaFamillesComponent_Conditional_25_For_23_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Gratuit");
    \u0275\u0275elementEnd();
  }
}
function SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 4);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", m_r5.user.prenom, " ", m_r5.user.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.role);
  }
}
function SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_3_Conditional_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(6);
    \u0275\u0275textInterpolate1(" \xB7 Fin : ", \u0275\u0275pipeBind2(1, 1, ctx_r3.detailData.subscription.dateFin, "dd/MM/yyyy"), " ");
  }
}
function SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "strong");
    \u0275\u0275text(2, "Abonnement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275text(4, " Plan : ");
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275conditionalCreate(9, SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_3_Conditional_23_Conditional_9_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.detailData.subscription.plan.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \xB7 Statut : ", ctx_r3.detailData.subscription.statut, " \xB7 D\xE9but : ", \u0275\u0275pipeBind2(8, 4, ctx_r3.detailData.subscription.dateDebut, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.detailData.subscription.dateFin ? 9 : -1);
  }
}
function SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275repeaterCreate(5, SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_3_For_6_Template, 7, 3, "div", 33, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "strong");
    \u0275\u0275text(9, "Contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 34)(11, "span")(12, "span", 4);
    \u0275\u0275text(13, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span")(16, "span", 4);
    \u0275\u0275text(17, "auto_stories");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span")(20, "span", 4);
    \u0275\u0275text(21, "photo_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(23, SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_3_Conditional_23_Template, 10, 7, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Membres (", ctx_r3.detailData.membres == null ? null : ctx_r3.detailData.membres.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.detailData.membres);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r3.detailData._count.personnes, " personnes");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.detailData._count.stories, " stories");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.detailData._count.photos, " photos");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.detailData.subscription ? 23 : -1);
  }
}
function SaFamillesComponent_Conditional_25_For_23_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 27)(1, "td", 28);
    \u0275\u0275conditionalCreate(2, SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_2_Template, 2, 0, "div", 29)(3, SaFamillesComponent_Conditional_25_For_23_Conditional_35_Conditional_3_Template, 24, 5, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.detailLoading ? 2 : ctx_r3.detailData ? 3 : -1);
  }
}
function SaFamillesComponent_Conditional_25_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18)(2, "button", 19);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_25_For_23_Template_button_click_2_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleDetail(f_r3));
    });
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "code");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275conditionalCreate(16, SaFamillesComponent_Conditional_25_For_23_Conditional_16_Template, 2, 1, "span", 20)(17, SaFamillesComponent_Conditional_25_For_23_Conditional_17_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "div", 23)(26, "button", 24);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_25_For_23_Template_button_click_26_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAssign(f_r3));
    });
    \u0275\u0275elementStart(27, "span", 4);
    \u0275\u0275text(28, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 25);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_25_For_23_Template_button_click_29_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleStatut(f_r3));
    });
    \u0275\u0275elementStart(30, "span", 4);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 26);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_25_For_23_Template_button_click_32_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.delete(f_r3));
    });
    \u0275\u0275elementStart(33, "span", 4);
    \u0275\u0275text(34, "delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(35, SaFamillesComponent_Conditional_25_For_23_Conditional_35_Template, 4, 1, "tr", 27);
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sa-row-suspended", f_r3.statut === "suspendu");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.expandedId === f_r3.id ? "expand_less" : "expand_more");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r3.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r3.codeUnique);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3._count.membres);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3._count.personnes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((f_r3.subscription == null ? null : f_r3.subscription.plan) ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("green", f_r3.statut === "actif")("red", f_r3.statut === "suspendu");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r3.statut, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 19, f_r3.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r3.actionLoading === f_r3.id)("title", f_r3.statut === "actif" ? "Suspendre" : "R\xE9activer");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.statut === "actif" ? "pause_circle" : "play_circle");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.actionLoading === f_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.expandedId === f_r3.id ? 35 : -1);
  }
}
function SaFamillesComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "table", 15)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th");
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Membres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Personnes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Cr\xE9\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, SaFamillesComponent_Conditional_25_For_23_Template, 36, 22, null, null, _forTrack03);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 16)(25, "button", 17);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_25_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.page = ctx_r3.page - 1;
      return \u0275\u0275resetView(ctx_r3.load());
    });
    \u0275\u0275text(26, "\u2039 Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 17);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_25_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.page = ctx_r3.page + 1;
      return \u0275\u0275resetView(ctx_r3.load());
    });
    \u0275\u0275text(30, "Suivant \u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r3.data == null ? null : ctx_r3.data.familles);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r3.page, " / ", ctx_r3.data == null ? null : ctx_r3.data.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.page >= ((ctx_r3.data == null ? null : ctx_r3.data.pages) ?? 1));
  }
}
function SaFamillesComponent_Conditional_26_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275property("value", p_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r7.label, " (", p_r7.prix === 0 ? "Gratuit" : \u0275\u0275pipeBind1(2, 3, p_r7.prix) + " FCFA/mois", ")");
  }
}
function SaFamillesComponent_Conditional_26_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function SaFamillesComponent_Conditional_26_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Assigner ");
  }
}
function SaFamillesComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAssign());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_26_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAssign());
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 41)(9, "div", 42)(10, "label");
    \u0275\u0275text(11, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SaFamillesComponent_Conditional_26_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.assignModal.planId, $event) || (ctx_r3.assignModal.planId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 9);
    \u0275\u0275text(14, "\u2014 Choisir un plan \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, SaFamillesComponent_Conditional_26_For_16_Template, 3, 5, "option", 44, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 42)(18, "label");
    \u0275\u0275text(19, "Date de fin (optionnel \u2014 vide = ind\xE9fini)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SaFamillesComponent_Conditional_26_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.assignModal.dateFin, $event) || (ctx_r3.assignModal.dateFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 46)(22, "button", 47);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_26_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAssign());
    });
    \u0275\u0275text(23, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 48);
    \u0275\u0275listener("click", function SaFamillesComponent_Conditional_26_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmAssign());
    });
    \u0275\u0275conditionalCreate(25, SaFamillesComponent_Conditional_26_Conditional_25_Template, 1, 0, "span", 49)(26, SaFamillesComponent_Conditional_26_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Assigner un plan \u2014 ", ctx_r3.assignModal.famille.nom);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.assignModal.planId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.plans);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.assignModal.dateFin);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.assignModal.planId || ctx_r3.assigning);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.assigning ? 25 : 26);
  }
}
var SaFamillesComponent = class _SaFamillesComponent {
  sa;
  data = null;
  loading = true;
  q = "";
  page = 1;
  statut = "";
  actionLoading = "";
  // Assign-plan modal
  assignModal = null;
  plans = [];
  assigning = false;
  // Detail expand
  expandedId = null;
  detailData = null;
  detailLoading = false;
  constructor(sa) {
    this.sa = sa;
  }
  ngOnInit() {
    forkJoin({ familles: this.sa.getFamilles({ page: 1 }), plans: this.sa.getPlans() }).subscribe({
      next: (r) => {
        this.data = r.familles;
        this.plans = r.plans;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  load() {
    this.loading = true;
    this.sa.getFamilles({ q: this.q, page: this.page, statut: this.statut }).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
        if (d.pages > 0 && this.page > d.pages) {
          this.page = d.pages;
          this.load();
        }
      },
      error: () => this.loading = false
    });
  }
  search() {
    this.page = 1;
    this.load();
  }
  toggleStatut(f) {
    const newStatut = f.statut === "actif" ? "suspendu" : "actif";
    const message = newStatut === "suspendu" ? `Suspendre la famille "${f.nom}" ? Tous ses membres perdront imm\xE9diatement l'acc\xE8s.` : `R\xE9activer la famille "${f.nom}" ?`;
    if (!confirm(message))
      return;
    this.actionLoading = f.id;
    this.sa.patchFamille(f.id, { statut: newStatut }).subscribe({
      next: (updated) => {
        f.statut = updated.statut;
        this.actionLoading = "";
      },
      error: () => this.actionLoading = ""
    });
  }
  delete(f) {
    if (!confirm(`Supprimer d\xE9finitivement la famille "${f.nom}" ? Cette action est irr\xE9versible.`))
      return;
    this.actionLoading = f.id;
    this.sa.deleteFamille(f.id).subscribe({
      next: () => {
        this.load();
        this.actionLoading = "";
      },
      error: () => this.actionLoading = ""
    });
  }
  openAssign(f) {
    this.assignModal = { famille: f, planId: f.subscription?.plan?.id ?? "", dateFin: "" };
  }
  closeAssign() {
    this.assignModal = null;
  }
  confirmAssign() {
    if (!this.assignModal || !this.assignModal.planId)
      return;
    this.assigning = true;
    this.sa.assignPlan(this.assignModal.famille.id, this.assignModal.planId, this.assignModal.dateFin || void 0).subscribe({
      next: (sub) => {
        const f = this.data?.familles.find((x) => x.id === this.assignModal.famille.id);
        if (f)
          f.subscription = sub;
        this.assignModal = null;
        this.assigning = false;
      },
      error: () => this.assigning = false
    });
  }
  toggleDetail(f) {
    if (this.expandedId === f.id) {
      this.expandedId = null;
      this.detailData = null;
      return;
    }
    this.expandedId = f.id;
    this.detailLoading = true;
    this.sa.getFamille(f.id).subscribe({
      next: (d) => {
        this.detailData = d;
        this.detailLoading = false;
      },
      error: () => this.detailLoading = false
    });
  }
  exportCsv() {
    this.sa.exportCsv("familles");
  }
  static \u0275fac = function SaFamillesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaFamillesComponent)(\u0275\u0275directiveInject(SuperAdminService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaFamillesComponent, selectors: [["sa-familles"]], standalone: false, decls: 27, vars: 5, consts: [[1, "sa-page"], [1, "sa-page-header"], [1, "sa-header-row"], [1, "sa-export-btn", 3, "click"], [1, "material-icons-round"], [1, "sa-toolbar"], [1, "sa-search"], ["type", "text", "placeholder", "Rechercher par nom...", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "actif"], ["value", "suspendu"], [1, "sa-loading"], [1, "sa-modal-overlay"], [1, "sa-table-wrap"], [1, "sa-table"], [1, "sa-pagination"], [3, "click", "disabled"], [1, "sa-expand-cell"], [1, "sa-expand-btn", 3, "click"], [1, "sa-badge", "plan"], [1, "sa-badge", "grey"], [1, "sa-badge"], [1, "sa-actions"], ["title", "Assigner un plan", 1, "sa-act-btn", "blue", 3, "click"], [1, "sa-act-btn", 3, "click", "disabled", "title"], ["title", "Supprimer", 1, "sa-act-btn", "danger", 3, "click", "disabled"], [1, "sa-detail-row"], ["colspan", "9"], [1, "sa-detail-loading"], [1, "sa-detail-panel"], [1, "sa-detail-section"], [1, "sa-membres-list"], [1, "sa-membre-chip"], [1, "sa-detail-counts"], [1, "sa-role-badge"], [1, "sa-detail-sub"], [1, "sa-modal-overlay", 3, "click"], [1, "sa-modal", 3, "click"], [1, "sa-modal-header"], [1, "sa-modal-close", 3, "click"], [1, "sa-modal-body"], [1, "sa-field"], [3, "ngModelChange", "ngModel"], [3, "value"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "sa-modal-footer"], [1, "sa-btn-cancel", 3, "click"], [1, "sa-btn-confirm", 3, "click", "disabled"], [1, "sa-spinner-sm"]], template: function SaFamillesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Familles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function SaFamillesComponent_Template_button_click_8_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Export CSV ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "span", 4);
      \u0275\u0275text(15, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function SaFamillesComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.q, $event) || (ctx.q = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function SaFamillesComponent_Template_input_keyup_enter_16_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function SaFamillesComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statut, $event) || (ctx.statut = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SaFamillesComponent_Template_select_change_17_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(18, "option", 9);
      \u0275\u0275text(19, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 10);
      \u0275\u0275text(21, "Actifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 11);
      \u0275\u0275text(23, "Suspendus");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(24, SaFamillesComponent_Conditional_24_Template, 2, 0, "div", 12)(25, SaFamillesComponent_Conditional_25_Template, 31, 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(26, SaFamillesComponent_Conditional_26_Template, 27, 5, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", (ctx.data == null ? null : ctx.data.total) ?? "...", " familles enregistr\xE9es");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.q);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.statut);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading ? 24 : 25);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.assignModal ? 26 : -1);
    }
  }, dependencies: [NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n\n.sa-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n.sa-export-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.sa-export-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sa-export-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-row-suspended[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.sa-expand-cell[_ngcontent-%COMP%] {\n  width: 32px;\n  padding-right: 0 !important;\n}\n.sa-expand-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #94A3B8;\n  border-radius: 6px;\n}\n.sa-expand-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.sa-expand-btn[_ngcontent-%COMP%]:hover {\n  background: #F1F5F9;\n  color: #374151;\n}\n.sa-act-btn.blue[_ngcontent-%COMP%]:hover {\n  border-color: #3B82F6;\n  color: #3B82F6;\n  background: #EFF6FF;\n}\n.sa-detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #F8FAFC !important;\n  padding: 0 !important;\n}\n.sa-detail-loading[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: #94A3B8;\n  font-size: 13px;\n}\n.sa-detail-panel[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n}\n.sa-detail-section[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.sa-detail-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  display: block;\n  margin-bottom: 8px;\n}\n.sa-membres-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.sa-membre-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #fff;\n  border: 1px solid #E2E8F0;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 12px;\n  color: #374151;\n}\n.sa-membre-chip[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #94A3B8;\n}\n.sa-role-badge[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #6366F1;\n  padding: 1px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 600;\n  margin-left: 2px;\n}\n.sa-detail-counts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.sa-detail-counts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: #374151;\n}\n.sa-detail-counts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #94A3B8;\n}\n.sa-detail-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sa-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sa-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 440px;\n  max-width: 95vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.sa-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0;\n}\n.sa-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0;\n}\n.sa-modal-close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #94A3B8;\n  display: flex;\n}\n.sa-modal-close[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.sa-modal-close[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.sa-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sa-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sa-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  font-weight: 500;\n}\n.sa-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.sa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.sa-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.sa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #6366F1;\n}\n.sa-modal-footer[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.sa-btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #374151;\n  cursor: pointer;\n}\n.sa-btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: #94A3B8;\n}\n.sa-btn-confirm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  background: #6366F1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.sa-btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4F46E5;\n}\n.sa-spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sa-page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.sa-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading[_ngcontent-%COMP%] {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  align-items: center;\n}\n.sa-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  color: #374151;\n}\n.sa-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 360px;\n}\n.sa-search[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #94A3B8;\n  font-size: 18px;\n}\n.sa-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-size: 14px;\n  flex: 1;\n}\n.sa-table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.sa-table[_ngcontent-%COMP%]   tr.suspended[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.sa-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #6366F1;\n}\n.sa-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sa-badge.green[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.sa-badge.red[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #DC2626;\n}\n.sa-badge.purple[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.sa-badge.grey[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.sa-badge.plan[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sa-badge.ml[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.sa-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.sa-act-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748B;\n  transition: all 0.15s;\n}\n.sa-act-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sa-act-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n  background: #F5F3FF;\n}\n.sa-act-btn.danger[_ngcontent-%COMP%]:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n  background: #FEF2F2;\n}\n.sa-act-btn.green[_ngcontent-%COMP%]:hover {\n  border-color: #10B981;\n  color: #10B981;\n  background: #ECFDF5;\n}\n.sa-act-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px;\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=sa-familles.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaFamillesComponent, [{
    type: Component,
    args: [{ selector: "sa-familles", standalone: false, template: `<div class="sa-page">\r
  <div class="sa-page-header">\r
    <div class="sa-header-row">\r
      <div>\r
        <h1>Familles</h1>\r
        <p>{{ data?.total ?? '...' }} familles enregistr\xE9es</p>\r
      </div>\r
      <button class="sa-export-btn" (click)="exportCsv()">\r
        <span class="material-icons-round">download</span> Export CSV\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="sa-toolbar">\r
    <div class="sa-search">\r
      <span class="material-icons-round">search</span>\r
      <input type="text" [(ngModel)]="q" (keyup.enter)="search()" placeholder="Rechercher par nom..."/>\r
    </div>\r
    <select [(ngModel)]="statut" (change)="search()">\r
      <option value="">Tous les statuts</option>\r
      <option value="actif">Actifs</option>\r
      <option value="suspendu">Suspendus</option>\r
    </select>\r
  </div>\r
\r
  @if (loading) {\r
    <div class="sa-loading">Chargement...</div>\r
  } @else {\r
    <div class="sa-table-wrap">\r
      <table class="sa-table">\r
        <thead>\r
          <tr>\r
            <th></th>\r
            <th>Famille</th>\r
            <th>Code</th>\r
            <th>Membres</th>\r
            <th>Personnes</th>\r
            <th>Plan</th>\r
            <th>Statut</th>\r
            <th>Cr\xE9\xE9e</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (f of data?.familles; track f.id) {\r
            <tr [class.sa-row-suspended]="f.statut === 'suspendu'">\r
              <!-- Expand toggle -->\r
              <td class="sa-expand-cell">\r
                <button class="sa-expand-btn" (click)="toggleDetail(f)">\r
                  <span class="material-icons-round">{{ expandedId === f.id ? 'expand_less' : 'expand_more' }}</span>\r
                </button>\r
              </td>\r
              <td><strong>{{ f.nom }}</strong></td>\r
              <td><code>{{ f.codeUnique }}</code></td>\r
              <td>{{ f._count.membres }}</td>\r
              <td>{{ f._count.personnes }}</td>\r
              <td>\r
                @if (f.subscription?.plan) {\r
                  <span class="sa-badge plan">{{ f.subscription?.plan?.label }}</span>\r
                } @else {\r
                  <span class="sa-badge grey">Gratuit</span>\r
                }\r
              </td>\r
              <td>\r
                <span class="sa-badge" [class.green]="f.statut === 'actif'" [class.red]="f.statut === 'suspendu'">\r
                  {{ f.statut }}\r
                </span>\r
              </td>\r
              <td>{{ f.createdAt | date:'dd/MM/yyyy' }}</td>\r
              <td>\r
                <div class="sa-actions">\r
                  <button class="sa-act-btn blue" (click)="openAssign(f)" title="Assigner un plan">\r
                    <span class="material-icons-round">workspace_premium</span>\r
                  </button>\r
                  <button class="sa-act-btn" (click)="toggleStatut(f)" [disabled]="actionLoading === f.id"\r
                          [title]="f.statut === 'actif' ? 'Suspendre' : 'R\xE9activer'">\r
                    <span class="material-icons-round">{{ f.statut === 'actif' ? 'pause_circle' : 'play_circle' }}</span>\r
                  </button>\r
                  <button class="sa-act-btn danger" (click)="delete(f)" [disabled]="actionLoading === f.id" title="Supprimer">\r
                    <span class="material-icons-round">delete</span>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
\r
            <!-- Detail row -->\r
            @if (expandedId === f.id) {\r
              <tr class="sa-detail-row">\r
                <td colspan="9">\r
                  @if (detailLoading) {\r
                    <div class="sa-detail-loading">Chargement...</div>\r
                  } @else if (detailData) {\r
                    <div class="sa-detail-panel">\r
                      <div class="sa-detail-section">\r
                        <strong>Membres ({{ detailData.membres?.length }})</strong>\r
                        <div class="sa-membres-list">\r
                          @for (m of detailData.membres; track m.id) {\r
                            <div class="sa-membre-chip">\r
                              <span class="material-icons-round">person</span>\r
                              <span>{{ m.user.prenom }} {{ m.user.nom }}</span>\r
                              <span class="sa-role-badge">{{ m.role }}</span>\r
                            </div>\r
                          }\r
                        </div>\r
                      </div>\r
                      <div class="sa-detail-section">\r
                        <strong>Contenu</strong>\r
                        <div class="sa-detail-counts">\r
                          <span><span class="material-icons-round">people</span>{{ detailData._count.personnes }} personnes</span>\r
                          <span><span class="material-icons-round">auto_stories</span>{{ detailData._count.stories }} stories</span>\r
                          <span><span class="material-icons-round">photo_library</span>{{ detailData._count.photos }} photos</span>\r
                        </div>\r
                      </div>\r
                      @if (detailData.subscription) {\r
                        <div class="sa-detail-section">\r
                          <strong>Abonnement</strong>\r
                          <div class="sa-detail-sub">\r
                            Plan : <span class="sa-badge plan">{{ detailData.subscription.plan.label }}</span>\r
                            \xB7 Statut : {{ detailData.subscription.statut }}\r
                            \xB7 D\xE9but : {{ detailData.subscription.dateDebut | date:'dd/MM/yyyy' }}\r
                            @if (detailData.subscription.dateFin) { \xB7 Fin : {{ detailData.subscription.dateFin | date:'dd/MM/yyyy' }} }\r
                          </div>\r
                        </div>\r
                      }\r
                    </div>\r
                  }\r
                </td>\r
              </tr>\r
            }\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="sa-pagination">\r
      <button [disabled]="page <= 1" (click)="page = page - 1; load()">\u2039 Pr\xE9c\xE9dent</button>\r
      <span>Page {{ page }} / {{ data?.pages }}</span>\r
      <button [disabled]="page >= (data?.pages ?? 1)" (click)="page = page + 1; load()">Suivant \u203A</button>\r
    </div>\r
  }\r
</div>\r
\r
<!-- Assign Plan Modal -->\r
@if (assignModal) {\r
  <div class="sa-modal-overlay" (click)="closeAssign()">\r
    <div class="sa-modal" (click)="$event.stopPropagation()">\r
      <div class="sa-modal-header">\r
        <h3>Assigner un plan \u2014 {{ assignModal.famille.nom }}</h3>\r
        <button class="sa-modal-close" (click)="closeAssign()">\r
          <span class="material-icons-round">close</span>\r
        </button>\r
      </div>\r
      <div class="sa-modal-body">\r
        <div class="sa-field">\r
          <label>Plan</label>\r
          <select [(ngModel)]="assignModal.planId">\r
            <option value="">\u2014 Choisir un plan \u2014</option>\r
            @for (p of plans; track p.id) {\r
              <option [value]="p.id">{{ p.label }} ({{ p.prix === 0 ? 'Gratuit' : (p.prix | number) + ' FCFA/mois' }})</option>\r
            }\r
          </select>\r
        </div>\r
        <div class="sa-field">\r
          <label>Date de fin (optionnel \u2014 vide = ind\xE9fini)</label>\r
          <input type="date" [(ngModel)]="assignModal.dateFin"/>\r
        </div>\r
      </div>\r
      <div class="sa-modal-footer">\r
        <button class="sa-btn-cancel" (click)="closeAssign()">Annuler</button>\r
        <button class="sa-btn-confirm" (click)="confirmAssign()" [disabled]="!assignModal.planId || assigning">\r
          @if (assigning) { <span class="sa-spinner-sm"></span> } @else { Assigner }\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ["/* src/app/superadmin/pages/familles/sa-familles.component.scss */\n.sa-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n.sa-export-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.sa-export-btn .material-icons-round {\n  font-size: 16px;\n}\n.sa-export-btn:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-row-suspended td {\n  opacity: 0.55;\n}\n.sa-expand-cell {\n  width: 32px;\n  padding-right: 0 !important;\n}\n.sa-expand-btn {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #94A3B8;\n  border-radius: 6px;\n}\n.sa-expand-btn .material-icons-round {\n  font-size: 20px;\n}\n.sa-expand-btn:hover {\n  background: #F1F5F9;\n  color: #374151;\n}\n.sa-act-btn.blue:hover {\n  border-color: #3B82F6;\n  color: #3B82F6;\n  background: #EFF6FF;\n}\n.sa-detail-row td {\n  background: #F8FAFC !important;\n  padding: 0 !important;\n}\n.sa-detail-loading {\n  padding: 16px;\n  color: #94A3B8;\n  font-size: 13px;\n}\n.sa-detail-panel {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n}\n.sa-detail-section {\n  min-width: 200px;\n}\n.sa-detail-section strong {\n  font-size: 12px;\n  color: #64748B;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  display: block;\n  margin-bottom: 8px;\n}\n.sa-membres-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.sa-membre-chip {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #fff;\n  border: 1px solid #E2E8F0;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 12px;\n  color: #374151;\n}\n.sa-membre-chip .material-icons-round {\n  font-size: 14px;\n  color: #94A3B8;\n}\n.sa-role-badge {\n  background: #F1F5F9;\n  color: #6366F1;\n  padding: 1px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 600;\n  margin-left: 2px;\n}\n.sa-detail-counts {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.sa-detail-counts span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: #374151;\n}\n.sa-detail-counts span .material-icons-round {\n  font-size: 16px;\n  color: #94A3B8;\n}\n.sa-detail-sub {\n  font-size: 13px;\n  color: #374151;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sa-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sa-modal {\n  background: #fff;\n  border-radius: 16px;\n  width: 440px;\n  max-width: 95vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.sa-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 20px 0;\n}\n.sa-modal-header h3 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0;\n}\n.sa-modal-close {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #94A3B8;\n  display: flex;\n}\n.sa-modal-close .material-icons-round {\n  font-size: 22px;\n}\n.sa-modal-close:hover {\n  color: #374151;\n}\n.sa-modal-body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sa-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sa-field label {\n  font-size: 12px;\n  color: #64748B;\n  font-weight: 500;\n}\n.sa-field select,\n.sa-field input {\n  padding: 9px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.sa-field select:focus,\n.sa-field input:focus {\n  border-color: #6366F1;\n}\n.sa-modal-footer {\n  padding: 0 20px 20px;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.sa-btn-cancel {\n  padding: 9px 16px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #374151;\n  cursor: pointer;\n}\n.sa-btn-cancel:hover {\n  border-color: #94A3B8;\n}\n.sa-btn-confirm {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  background: #6366F1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.sa-btn-confirm:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-btn-confirm:hover:not(:disabled) {\n  background: #4F46E5;\n}\n.sa-spinner-sm {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sa-page-header {\n  margin-bottom: 24px;\n}\n.sa-page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header p {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-toolbar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  align-items: center;\n}\n.sa-toolbar select {\n  padding: 8px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  color: #374151;\n}\n.sa-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 360px;\n}\n.sa-search .material-icons-round {\n  color: #94A3B8;\n  font-size: 18px;\n}\n.sa-search input {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-size: 14px;\n  flex: 1;\n}\n.sa-table-wrap {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table tr:last-child td {\n  border-bottom: none;\n}\n.sa-table tr.suspended td {\n  opacity: 0.5;\n}\n.sa-table code {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #6366F1;\n}\n.sa-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sa-badge.green {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.sa-badge.red {\n  background: #FEE2E2;\n  color: #DC2626;\n}\n.sa-badge.purple {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.sa-badge.grey {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.sa-badge.plan {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sa-badge.ml {\n  margin-left: 6px;\n}\n.sa-actions {\n  display: flex;\n  gap: 6px;\n}\n.sa-act-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748B;\n  transition: all 0.15s;\n}\n.sa-act-btn .material-icons-round {\n  font-size: 16px;\n}\n.sa-act-btn:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n  background: #F5F3FF;\n}\n.sa-act-btn.danger:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n  background: #FEF2F2;\n}\n.sa-act-btn.green:hover {\n  border-color: #10B981;\n  color: #10B981;\n  background: #ECFDF5;\n}\n.sa-act-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px;\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-pagination button {\n  padding: 6px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.sa-pagination button:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-pagination button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=sa-familles.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaFamillesComponent, { className: "SaFamillesComponent", filePath: "src/app/superadmin/pages/familles/sa-familles.component.ts", lineNumber: 7 });
})();

// src/app/superadmin/pages/users/sa-users.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function SaUsersComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SaUsersComponent_Conditional_29_For_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r3.platformRole);
  }
}
function SaUsersComponent_Conditional_29_For_20_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275property("value", r_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5);
  }
}
function SaUsersComponent_Conditional_29_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SaUsersComponent_Conditional_29_For_20_Conditional_4_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "select", 21);
    \u0275\u0275listener("ngModelChange", function SaUsersComponent_Conditional_29_For_20_Template_select_ngModelChange_10_listener($event) {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setRole(u_r3, $event || null));
    });
    \u0275\u0275elementStart(11, "option", 9);
    \u0275\u0275text(12, "\u2014 Aucun \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, SaUsersComponent_Conditional_29_For_20_For_14_Template, 2, 2, "option", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 24)(23, "button", 25);
    \u0275\u0275listener("click", function SaUsersComponent_Conditional_29_For_20_Template_button_click_23_listener() {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleSuspend(u_r3));
    });
    \u0275\u0275elementStart(24, "span", 4);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 26);
    \u0275\u0275listener("click", function SaUsersComponent_Conditional_29_For_20_Template_button_click_26_listener() {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.delete(u_r3));
    });
    \u0275\u0275elementStart(27, "span", 4);
    \u0275\u0275text(28, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("suspended", u_r3.suspended);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", u_r3.prenom, " ", u_r3.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r3.platformRole ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.email || u_r3.telephone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3._count.familleMembres);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", u_r3.platformRole)("disabled", ctx_r3.actionLoading === u_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.platformRoles);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("green", !u_r3.suspended)("red", u_r3.suspended);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r3.suspended ? "suspendu" : "actif", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 19, u_r3.createdAt, "dd/MM/yy"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.actionLoading === u_r3.id)("title", u_r3.suspended ? "R\xE9activer" : "Suspendre");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.suspended ? "lock_open" : "lock");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.actionLoading === u_r3.id);
  }
}
function SaUsersComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 16)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Familles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "R\xF4le plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Cr\xE9\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, SaUsersComponent_Conditional_29_For_20_Template, 29, 22, "tr", 17, _forTrack04);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 18)(22, "button", 19);
    \u0275\u0275listener("click", function SaUsersComponent_Conditional_29_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.page = ctx_r3.page - 1;
      return \u0275\u0275resetView(ctx_r3.load());
    });
    \u0275\u0275text(23, "\u2039 Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 19);
    \u0275\u0275listener("click", function SaUsersComponent_Conditional_29_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.page = ctx_r3.page + 1;
      return \u0275\u0275resetView(ctx_r3.load());
    });
    \u0275\u0275text(27, "Suivant \u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r3.data == null ? null : ctx_r3.data.users);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r3.page, " / ", ctx_r3.data == null ? null : ctx_r3.data.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.page >= ((ctx_r3.data == null ? null : ctx_r3.data.pages) ?? 1));
  }
}
var SaUsersComponent = class _SaUsersComponent {
  sa;
  data = null;
  loading = true;
  q = "";
  page = 1;
  filterRole = "";
  actionLoading = "";
  platformRoles = ["superadmin", "platform_admin", "support"];
  constructor(sa) {
    this.sa = sa;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.sa.getUsers({ q: this.q, page: this.page, platformRole: this.filterRole }).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
        if (d.pages > 0 && this.page > d.pages) {
          this.page = d.pages;
          this.load();
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  search() {
    this.page = 1;
    this.load();
  }
  setRole(u, role) {
    const nom = `${u.prenom} ${u.nom}`;
    const message = role === "superadmin" ? `Donner les pleins pouvoirs superadmin \xE0 "${nom}" ? Cette personne pourra tout g\xE9rer sur la plateforme, y compris supprimer des familles et des comptes.` : role ? `Attribuer le r\xF4le "${role}" \xE0 "${nom}" ?` : `Retirer le r\xF4le plateforme de "${nom}" ?`;
    if (!confirm(message))
      return;
    this.actionLoading = u.id;
    this.sa.patchUser(u.id, { platformRole: role }).subscribe({
      next: (updated) => {
        u.platformRole = updated.platformRole;
        this.actionLoading = "";
      },
      error: () => {
        this.actionLoading = "";
      }
    });
  }
  toggleSuspend(u) {
    const nom = `${u.prenom} ${u.nom}`;
    const message = u.suspended ? `R\xE9activer le compte de "${nom}" ?` : `Suspendre le compte de "${nom}" ? La personne perdra imm\xE9diatement l'acc\xE8s \xE0 la plateforme.`;
    if (!confirm(message))
      return;
    this.actionLoading = u.id;
    this.sa.patchUser(u.id, { suspended: !u.suspended }).subscribe({
      next: (updated) => {
        u.suspended = updated.suspended;
        this.actionLoading = "";
      },
      error: () => {
        this.actionLoading = "";
      }
    });
  }
  delete(u) {
    if (!confirm(`Supprimer "${u.prenom} ${u.nom}" ? Irr\xE9versible.`))
      return;
    this.actionLoading = u.id;
    this.sa.deleteUser(u.id).subscribe({
      next: () => {
        this.load();
      },
      error: () => {
        this.actionLoading = "";
      }
    });
  }
  exportCsv() {
    this.sa.exportCsv("users");
  }
  static \u0275fac = function SaUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaUsersComponent)(\u0275\u0275directiveInject(SuperAdminService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaUsersComponent, selectors: [["sa-users"]], standalone: false, decls: 30, vars: 4, consts: [[1, "sa-page"], [1, "sa-page-header"], [1, "sa-header-row"], [1, "sa-export-btn", 3, "click"], [1, "material-icons-round"], [1, "sa-toolbar"], [1, "sa-search"], ["type", "text", "placeholder", "Email, nom, t\xE9l\xE9phone...", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "superadmin"], ["value", "platform_admin"], ["value", "support"], ["value", "none"], [1, "sa-loading"], [1, "sa-table-wrap"], [1, "sa-table"], [3, "suspended"], [1, "sa-pagination"], [3, "click", "disabled"], [1, "sa-badge", "purple", "ml"], [1, "sa-role-select", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], [1, "sa-badge"], [1, "sa-actions"], [1, "sa-act-btn", 3, "click", "disabled", "title"], [1, "sa-act-btn", "danger", 3, "click", "disabled"]], template: function SaUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function SaUsersComponent_Template_button_click_8_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Export CSV ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "span", 4);
      \u0275\u0275text(15, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function SaUsersComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.q, $event) || (ctx.q = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function SaUsersComponent_Template_input_keyup_enter_16_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function SaUsersComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterRole, $event) || (ctx.filterRole = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SaUsersComponent_Template_select_change_17_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(18, "option", 9);
      \u0275\u0275text(19, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 10);
      \u0275\u0275text(21, "Superadmin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 11);
      \u0275\u0275text(23, "Platform admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 12);
      \u0275\u0275text(25, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 13);
      \u0275\u0275text(27, "Sans r\xF4le plateforme");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(28, SaUsersComponent_Conditional_28_Template, 2, 0, "div", 14)(29, SaUsersComponent_Conditional_29_Template, 28, 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", (ctx.data == null ? null : ctx.data.total) ?? "...", " comptes");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.q);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterRole);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.loading ? 28 : 29);
    }
  }, dependencies: [NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.sa-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n.sa-export-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  flex-shrink: 0;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sa-export-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sa-export-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.sa-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading[_ngcontent-%COMP%] {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  align-items: center;\n}\n.sa-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  color: #374151;\n}\n.sa-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 360px;\n}\n.sa-search[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #94A3B8;\n  font-size: 18px;\n}\n.sa-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-size: 14px;\n  flex: 1;\n}\n.sa-table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.sa-table[_ngcontent-%COMP%]   tr.suspended[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.sa-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #6366F1;\n}\n.sa-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sa-badge.green[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.sa-badge.red[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #DC2626;\n}\n.sa-badge.purple[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.sa-badge.grey[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.sa-badge.plan[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sa-badge.ml[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.sa-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.sa-act-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748B;\n  transition: all 0.15s;\n}\n.sa-act-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sa-act-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n  background: #F5F3FF;\n}\n.sa-act-btn.danger[_ngcontent-%COMP%]:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n  background: #FEF2F2;\n}\n.sa-act-btn.green[_ngcontent-%COMP%]:hover {\n  border-color: #10B981;\n  color: #10B981;\n  background: #ECFDF5;\n}\n.sa-act-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px;\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-role-select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  font-size: 12px;\n  background: #fff;\n  color: #374151;\n}\n/*# sourceMappingURL=sa-users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaUsersComponent, [{
    type: Component,
    args: [{ selector: "sa-users", standalone: false, template: `<div class="sa-page">\r
  <div class="sa-page-header">\r
    <div class="sa-header-row">\r
      <div>\r
        <h1>Utilisateurs</h1>\r
        <p>{{ data?.total ?? '...' }} comptes</p>\r
      </div>\r
      <button class="sa-export-btn" (click)="exportCsv()">\r
        <span class="material-icons-round">download</span> Export CSV\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="sa-toolbar">\r
    <div class="sa-search">\r
      <span class="material-icons-round">search</span>\r
      <input type="text" [(ngModel)]="q" (keyup.enter)="search()" placeholder="Email, nom, t\xE9l\xE9phone..."/>\r
    </div>\r
    <select [(ngModel)]="filterRole" (change)="search()">\r
      <option value="">Tous</option>\r
      <option value="superadmin">Superadmin</option>\r
      <option value="platform_admin">Platform admin</option>\r
      <option value="support">Support</option>\r
      <option value="none">Sans r\xF4le plateforme</option>\r
    </select>\r
  </div>\r
\r
  @if (loading) {\r
    <div class="sa-loading">Chargement...</div>\r
  } @else {\r
    <div class="sa-table-wrap">\r
      <table class="sa-table">\r
        <thead>\r
          <tr>\r
            <th>Utilisateur</th>\r
            <th>Contact</th>\r
            <th>Familles</th>\r
            <th>R\xF4le plateforme</th>\r
            <th>Statut</th>\r
            <th>Cr\xE9\xE9</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (u of data?.users; track u.id) {\r
            <tr [class.suspended]="u.suspended">\r
              <td>\r
                <strong>{{ u.prenom }} {{ u.nom }}</strong>\r
                @if (u.platformRole) {\r
                  <span class="sa-badge purple ml">{{ u.platformRole }}</span>\r
                }\r
              </td>\r
              <td>{{ u.email || u.telephone }}</td>\r
              <td>{{ u._count.familleMembres }}</td>\r
              <td>\r
                <select class="sa-role-select" [ngModel]="u.platformRole" (ngModelChange)="setRole(u, $event || null)"\r
                        [disabled]="actionLoading === u.id">\r
                  <option value="">\u2014 Aucun \u2014</option>\r
                  @for (r of platformRoles; track r) {\r
                    <option [value]="r">{{ r }}</option>\r
                  }\r
                </select>\r
              </td>\r
              <td>\r
                <span class="sa-badge" [class.green]="!u.suspended" [class.red]="u.suspended">\r
                  {{ u.suspended ? 'suspendu' : 'actif' }}\r
                </span>\r
              </td>\r
              <td>{{ u.createdAt | date:'dd/MM/yy' }}</td>\r
              <td>\r
                <div class="sa-actions">\r
                  <button class="sa-act-btn" (click)="toggleSuspend(u)" [disabled]="actionLoading === u.id"\r
                          [title]="u.suspended ? 'R\xE9activer' : 'Suspendre'">\r
                    <span class="material-icons-round">{{ u.suspended ? 'lock_open' : 'lock' }}</span>\r
                  </button>\r
                  <button class="sa-act-btn danger" (click)="delete(u)" [disabled]="actionLoading === u.id">\r
                    <span class="material-icons-round">delete</span>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="sa-pagination">\r
      <button [disabled]="page <= 1" (click)="page = page - 1; load()">&#8249; Pr\xE9c\xE9dent</button>\r
      <span>Page {{ page }} / {{ data?.pages }}</span>\r
      <button [disabled]="page >= (data?.pages ?? 1)" (click)="page = page + 1; load()">Suivant &#8250;</button>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/superadmin/pages/users/sa-users.component.scss */\n.sa-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n.sa-export-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  flex-shrink: 0;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #374151;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.sa-export-btn .material-icons-round {\n  font-size: 16px;\n}\n.sa-export-btn:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-page-header {\n  margin-bottom: 24px;\n}\n.sa-page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header p {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-toolbar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  align-items: center;\n}\n.sa-toolbar select {\n  padding: 8px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  color: #374151;\n}\n.sa-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  padding: 0 12px;\n  flex: 1;\n  max-width: 360px;\n}\n.sa-search .material-icons-round {\n  color: #94A3B8;\n  font-size: 18px;\n}\n.sa-search input {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-size: 14px;\n  flex: 1;\n}\n.sa-table-wrap {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table tr:last-child td {\n  border-bottom: none;\n}\n.sa-table tr.suspended td {\n  opacity: 0.5;\n}\n.sa-table code {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #6366F1;\n}\n.sa-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sa-badge.green {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.sa-badge.red {\n  background: #FEE2E2;\n  color: #DC2626;\n}\n.sa-badge.purple {\n  background: #F5F3FF;\n  color: #7C3AED;\n}\n.sa-badge.grey {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.sa-badge.plan {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sa-badge.ml {\n  margin-left: 6px;\n}\n.sa-actions {\n  display: flex;\n  gap: 6px;\n}\n.sa-act-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748B;\n  transition: all 0.15s;\n}\n.sa-act-btn .material-icons-round {\n  font-size: 16px;\n}\n.sa-act-btn:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n  background: #F5F3FF;\n}\n.sa-act-btn.danger:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n  background: #FEF2F2;\n}\n.sa-act-btn.green:hover {\n  border-color: #10B981;\n  color: #10B981;\n  background: #ECFDF5;\n}\n.sa-act-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px;\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-pagination button {\n  padding: 6px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.sa-pagination button:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-pagination button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-role-select {\n  padding: 4px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  font-size: 12px;\n  background: #fff;\n  color: #374151;\n}\n/*# sourceMappingURL=sa-users.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaUsersComponent, { className: "SaUsersComponent", filePath: "src/app/superadmin/pages/users/sa-users.component.ts", lineNumber: 11 });
})();

// src/app/superadmin/pages/subscriptions/sa-subscriptions.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function SaSubscriptionsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SaSubscriptionsComponent_Conditional_17_For_18_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(1, 2, s_r2.paiements[0].montant), " FCFA \xB7 ", \u0275\u0275pipeBind2(2, 4, s_r2.paiements[0].createdAt, "dd/MM/yy"), " ");
  }
}
function SaSubscriptionsComponent_Conditional_17_For_18_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function SaSubscriptionsComponent_Conditional_17_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275conditionalCreate(20, SaSubscriptionsComponent_Conditional_17_For_18_Conditional_20_Template, 3, 7)(21, SaSubscriptionsComponent_Conditional_17_For_18_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.famille.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.famille.codeUnique);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.plan.label);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("green", s_r2.statut === "actif")("red", s_r2.statut !== "actif");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2.statut, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 11, s_r2.dateDebut, "dd/MM/yy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.dateFin ? \u0275\u0275pipeBind2(18, 14, s_r2.dateFin, "dd/MM/yy") : "\u221E");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(s_r2.paiements[0] ? 20 : 21);
  }
}
function SaSubscriptionsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Dernier paiement");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SaSubscriptionsComponent_Conditional_17_For_18_Template, 22, 17, "tr", null, _forTrack05);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 11)(20, "button", 12);
    \u0275\u0275listener("click", function SaSubscriptionsComponent_Conditional_17_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.page = ctx_r2.page - 1;
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(21, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 12);
    \u0275\u0275listener("click", function SaSubscriptionsComponent_Conditional_17_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.page = ctx_r2.page + 1;
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(25, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.data == null ? null : ctx_r2.data.subscriptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.page, " / ", ctx_r2.data == null ? null : ctx_r2.data.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.page >= ((ctx_r2.data == null ? null : ctx_r2.data.pages) ?? 1));
  }
}
var SaSubscriptionsComponent = class _SaSubscriptionsComponent {
  sa;
  data = null;
  loading = true;
  page = 1;
  statut = "";
  constructor(sa) {
    this.sa = sa;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.sa.getSubscriptions({ page: this.page, statut: this.statut }).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function SaSubscriptionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaSubscriptionsComponent)(\u0275\u0275directiveInject(SuperAdminService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaSubscriptionsComponent, selectors: [["sa-subscriptions"]], standalone: false, decls: 18, vars: 3, consts: [[1, "sa-page"], [1, "sa-page-header"], [1, "sa-toolbar"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "actif"], ["value", "expire"], ["value", "annule"], [1, "sa-loading"], [1, "sa-table-wrap"], [1, "sa-table"], [1, "sa-pagination"], [3, "click", "disabled"], [1, "sa-badge", "plan"], [1, "sa-badge"]], template: function SaSubscriptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Abonnements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function SaSubscriptionsComponent_Template_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statut, $event) || (ctx.statut = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SaSubscriptionsComponent_Template_select_change_7_listener() {
        ctx.page = 1;
        return ctx.load();
      });
      \u0275\u0275elementStart(8, "option", 4);
      \u0275\u0275text(9, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "option", 5);
      \u0275\u0275text(11, "Actifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "option", 6);
      \u0275\u0275text(13, "Expir\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 7);
      \u0275\u0275text(15, "Annul\xE9s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, SaSubscriptionsComponent_Conditional_16_Template, 2, 0, "div", 8)(17, SaSubscriptionsComponent_Conditional_17_Template, 26, 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", (ctx.data == null ? null : ctx.data.total) ?? "...", " abonnements");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.statut);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading ? 16 : 17);
    }
  }, dependencies: [NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n\n.sa-page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.sa-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading[_ngcontent-%COMP%] {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  align-items: center;\n}\n.sa-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  color: #374151;\n}\n.sa-table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.sa-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #6366F1;\n}\n.sa-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sa-badge.green[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.sa-badge.red[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #DC2626;\n}\n.sa-badge.plan[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sa-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px;\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=sa-subscriptions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaSubscriptionsComponent, [{
    type: Component,
    args: [{ selector: "sa-subscriptions", standalone: false, template: `<div class="sa-page">\r
  <div class="sa-page-header">\r
    <h1>Abonnements</h1>\r
    <p>{{ data?.total ?? '...' }} abonnements</p>\r
  </div>\r
\r
  <div class="sa-toolbar">\r
    <select [(ngModel)]="statut" (change)="page = 1; load()">\r
      <option value="">Tous</option>\r
      <option value="actif">Actifs</option>\r
      <option value="expire">Expir\xE9s</option>\r
      <option value="annule">Annul\xE9s</option>\r
    </select>\r
  </div>\r
\r
  @if (loading) {\r
    <div class="sa-loading">Chargement...</div>\r
  } @else {\r
    <div class="sa-table-wrap">\r
      <table class="sa-table">\r
        <thead>\r
          <tr>\r
            <th>Famille</th>\r
            <th>Plan</th>\r
            <th>Statut</th>\r
            <th>D\xE9but</th>\r
            <th>Fin</th>\r
            <th>Dernier paiement</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (s of data?.subscriptions; track s.id) {\r
            <tr>\r
              <td>\r
                <strong>{{ s.famille.nom }}</strong><br/>\r
                <code>{{ s.famille.codeUnique }}</code>\r
              </td>\r
              <td><span class="sa-badge plan">{{ s.plan.label }}</span></td>\r
              <td>\r
                <span class="sa-badge" [class.green]="s.statut === 'actif'" [class.red]="s.statut !== 'actif'">\r
                  {{ s.statut }}\r
                </span>\r
              </td>\r
              <td>{{ s.dateDebut | date:'dd/MM/yy' }}</td>\r
              <td>{{ s.dateFin ? (s.dateFin | date:'dd/MM/yy') : '\u221E' }}</td>\r
              <td>\r
                @if (s.paiements[0]) {\r
                  {{ s.paiements[0].montant | number }} FCFA \xB7 {{ s.paiements[0].createdAt | date:'dd/MM/yy' }}\r
                } @else {\r
                  \u2014\r
                }\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="sa-pagination">\r
      <button [disabled]="page <= 1" (click)="page = page - 1; load()">&#8249;</button>\r
      <span>Page {{ page }} / {{ data?.pages }}</span>\r
      <button [disabled]="page >= (data?.pages ?? 1)" (click)="page = page + 1; load()">&#8250;</button>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/superadmin/pages/subscriptions/sa-subscriptions.component.scss */\n.sa-page-header {\n  margin-bottom: 24px;\n}\n.sa-page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header p {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-toolbar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  align-items: center;\n}\n.sa-toolbar select {\n  padding: 8px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 14px;\n  color: #374151;\n}\n.sa-table-wrap {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table tr:last-child td {\n  border-bottom: none;\n}\n.sa-table code {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #6366F1;\n}\n.sa-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sa-badge.green {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.sa-badge.red {\n  background: #FEE2E2;\n  color: #DC2626;\n}\n.sa-badge.plan {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sa-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px;\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-pagination button {\n  padding: 6px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.sa-pagination button:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-pagination button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=sa-subscriptions.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaSubscriptionsComponent, { className: "SaSubscriptionsComponent", filePath: "src/app/superadmin/pages/subscriptions/sa-subscriptions.component.ts", lineNumber: 11 });
})();

// src/app/superadmin/pages/settings/sa-settings.component.ts
var _forTrack06 = ($index, $item) => $item.key;
function SaSettingsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function SaSettingsComponent_For_10_Template_button_click_0_listener() {
      const d_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyDefault(d_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.hasDefault(d_r2.key))("title", "Ajouter " + d_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", d_r2.label, " ");
  }
}
function SaSettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SaSettingsComponent_Conditional_12_For_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SaSettingsComponent_Conditional_12_For_14_Conditional_7_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const s_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(s_r6.editValue, $event) || (s_r6.editValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", s_r6.editValue);
  }
}
function SaSettingsComponent_Conditional_12_For_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("bool-true", s_r6.value === "true")("bool-false", s_r6.value === "false");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r6.value, " ");
  }
}
function SaSettingsComponent_Conditional_12_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function SaSettingsComponent_Conditional_12_For_14_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const s_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save(s_r6));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function SaSettingsComponent_Conditional_12_For_14_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const s_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelEdit(s_r6));
    });
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("disabled", s_r6.saving);
  }
}
function SaSettingsComponent_Conditional_12_For_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SaSettingsComponent_Conditional_12_For_14_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const s_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startEdit(s_r6));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function SaSettingsComponent_Conditional_12_For_14_Conditional_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const s_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSetting(s_r6));
    });
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, "delete");
    \u0275\u0275elementEnd()();
  }
}
function SaSettingsComponent_Conditional_12_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, SaSettingsComponent_Conditional_12_For_14_Conditional_7_Template, 1, 1, "input", 25)(8, SaSettingsComponent_Conditional_12_For_14_Conditional_8_Template, 2, 5, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 27);
    \u0275\u0275conditionalCreate(11, SaSettingsComponent_Conditional_12_For_14_Conditional_11_Template, 6, 1)(12, SaSettingsComponent_Conditional_12_For_14_Conditional_12_Template, 6, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.label || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(s_r6.editing ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(s_r6.editing ? 11 : 12);
  }
}
function SaSettingsComponent_Conditional_12_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 15);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.broadcastDone, " ");
  }
}
function SaSettingsComponent_Conditional_12_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function SaSettingsComponent_Conditional_12_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Envoyer \xE0 tous ");
  }
}
function SaSettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Cl\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, SaSettingsComponent_Conditional_12_For_14_Template, 13, 4, "tr", null, _forTrack06);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 9)(16, "h3");
    \u0275\u0275text(17, "Ajouter un param\xE8tre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10)(19, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function SaSettingsComponent_Conditional_12_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newKey, $event) || (ctx_r2.newKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function SaSettingsComponent_Conditional_12_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newLabel, $event) || (ctx_r2.newLabel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SaSettingsComponent_Conditional_12_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newValue, $event) || (ctx_r2.newValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 14);
    \u0275\u0275listener("click", function SaSettingsComponent_Conditional_12_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addSetting());
    });
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "Ajouter ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 17)(28, "span", 15);
    \u0275\u0275text(29, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "h3");
    \u0275\u0275text(31, "Notification globale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 18);
    \u0275\u0275text(33, "Envoy\xE9e \xE0 tous les membres de toutes les familles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 19)(35, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function SaSettingsComponent_Conditional_12_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.broadcastTitre, $event) || (ctx_r2.broadcastTitre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function SaSettingsComponent_Conditional_12_Template_textarea_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.broadcastMsg, $event) || (ctx_r2.broadcastMsg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(37, SaSettingsComponent_Conditional_12_Conditional_37_Template, 4, 1, "div", 22);
    \u0275\u0275elementStart(38, "button", 23);
    \u0275\u0275listener("click", function SaSettingsComponent_Conditional_12_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendBroadcast());
    });
    \u0275\u0275conditionalCreate(39, SaSettingsComponent_Conditional_12_Conditional_39_Template, 1, 0, "span", 24)(40, SaSettingsComponent_Conditional_12_Conditional_40_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.settings);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newKey);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLabel);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newValue);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newKey || !ctx_r2.newValue || ctx_r2.adding);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.broadcastTitre);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.broadcastMsg);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.broadcastDone ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.broadcastTitre || !ctx_r2.broadcastMsg || ctx_r2.broadcasting);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.broadcasting ? 39 : 40);
  }
}
var SaSettingsComponent = class _SaSettingsComponent {
  sa;
  settings = [];
  loading = true;
  newKey = "";
  newValue = "";
  newLabel = "";
  adding = false;
  defaults = [
    { key: "inscription_ouverte", value: "true", label: "Inscriptions ouvertes" },
    { key: "maintenance", value: "false", label: "Mode maintenance" },
    { key: "max_personnes_gratuit", value: "50", label: "Max personnes (plan gratuit)" },
    { key: "contact_email", value: "support@mam-buudu.com", label: "Email contact" }
  ];
  constructor(sa) {
    this.sa = sa;
  }
  ngOnInit() {
    this.sa.getSettings().subscribe({
      next: (s) => {
        this.settings = s;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  startEdit(s) {
    s.editValue = s.value;
    s.editing = true;
  }
  cancelEdit(s) {
    s.editing = false;
  }
  save(s) {
    s.saving = true;
    this.sa.patchSetting(s.key, s.editValue, s.label).subscribe({
      next: (updated) => {
        s.value = updated.value;
        s.editing = false;
        s.saving = false;
      },
      error: () => {
        s.saving = false;
      }
    });
  }
  addSetting() {
    if (!this.newKey || !this.newValue)
      return;
    this.adding = true;
    this.sa.patchSetting(this.newKey, this.newValue, this.newLabel).subscribe({
      next: (s) => {
        this.settings.push(s);
        this.newKey = "";
        this.newValue = "";
        this.newLabel = "";
        this.adding = false;
      },
      error: () => {
        this.adding = false;
      }
    });
  }
  deleteSetting(s) {
    if (!confirm(`Supprimer le param\xE8tre "${s.key}" ?`))
      return;
    this.sa.deleteSetting(s.key).subscribe({
      next: () => {
        this.settings = this.settings.filter((x) => x.key !== s.key);
      }
    });
  }
  applyDefault(d) {
    const exists = this.settings.find((s) => s.key === d.key);
    if (exists)
      return;
    this.sa.patchSetting(d.key, d.value, d.label).subscribe({
      next: (s) => {
        this.settings.push(s);
      }
    });
  }
  hasDefault(key) {
    return !!this.settings.find((s) => s.key === key);
  }
  // Broadcast
  broadcastTitre = "";
  broadcastMsg = "";
  broadcasting = false;
  broadcastDone = "";
  sendBroadcast() {
    if (!this.broadcastTitre || !this.broadcastMsg)
      return;
    if (!confirm(`Envoyer cette notification \xE0 TOUS les utilisateurs de la plateforme ?`))
      return;
    this.broadcasting = true;
    this.sa.broadcast(this.broadcastTitre, this.broadcastMsg).subscribe({
      next: (r) => {
        this.broadcastDone = `Envoy\xE9 \xE0 ${r.sent} membres`;
        this.broadcastTitre = "";
        this.broadcastMsg = "";
        this.broadcasting = false;
        setTimeout(() => this.broadcastDone = "", 5e3);
      },
      error: () => this.broadcasting = false
    });
  }
  static \u0275fac = function SaSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaSettingsComponent)(\u0275\u0275directiveInject(SuperAdminService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaSettingsComponent, selectors: [["sa-settings"]], standalone: false, decls: 13, vars: 1, consts: [[1, "sa-page"], [1, "sa-page-header"], [1, "sa-defaults-bar"], [1, "sa-defaults-label"], [1, "sa-default-chip", 3, "disabled", "title"], [1, "sa-loading"], [1, "sa-default-chip", 3, "click", "disabled", "title"], [1, "sa-table-wrap"], [1, "sa-table"], [1, "sa-add-setting"], [1, "sa-add-row"], ["placeholder", "cl\xE9 (ex: max_upload_mb)", 1, "sa-add-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Label (optionnel)", 1, "sa-add-input", 3, "ngModelChange", "ngModel"], ["placeholder", "valeur", 1, "sa-add-input", 3, "ngModelChange", "ngModel"], [1, "sa-btn-add", 3, "click", "disabled"], [1, "material-icons-round"], [1, "sa-broadcast-card"], [1, "sa-broadcast-header"], [1, "sa-broadcast-warn"], [1, "sa-broadcast-fields"], ["placeholder", "Titre de la notification", 1, "sa-add-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Message...", "rows", "3", 1, "sa-textarea", 3, "ngModelChange", "ngModel"], [1, "sa-broadcast-success"], [1, "sa-btn-broadcast", 3, "click", "disabled"], [1, "sa-spinner-sm"], [1, "sa-inline-input", 3, "ngModel"], [1, "sa-setting-val", 3, "bool-true", "bool-false"], [1, "sa-actions"], [1, "sa-inline-input", 3, "ngModelChange", "ngModel"], [1, "sa-setting-val"], [1, "sa-act-btn", "green", 3, "click", "disabled"], [1, "sa-act-btn", 3, "click"], ["title", "Modifier", 1, "sa-act-btn", 3, "click"], ["title", "Supprimer", 1, "sa-act-btn", "danger", 3, "click"]], template: function SaSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Param\xE8tres plateforme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Configuration globale de Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "span", 3);
      \u0275\u0275text(8, "Param\xE8tres sugg\xE9r\xE9s :");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(9, SaSettingsComponent_For_10_Template, 2, 3, "button", 4, _forTrack06);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, SaSettingsComponent_Conditional_11_Template, 2, 0, "div", 5)(12, SaSettingsComponent_Conditional_12_Template, 41, 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.defaults);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 11 : 12);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.sa-page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.sa-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading[_ngcontent-%COMP%] {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.sa-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #6366F1;\n}\n.sa-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.sa-act-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748B;\n  transition: all 0.15s;\n}\n.sa-act-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sa-act-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n  background: #F5F3FF;\n}\n.sa-act-btn.danger[_ngcontent-%COMP%]:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n  background: #FEF2F2;\n}\n.sa-act-btn.green[_ngcontent-%COMP%]:hover {\n  border-color: #10B981;\n  color: #10B981;\n  background: #ECFDF5;\n}\n.sa-act-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-defaults-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.sa-defaults-bar[_ngcontent-%COMP%]   .sa-defaults-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-default-chip[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px dashed #CBD5E1;\n  border-radius: 20px;\n  background: #fff;\n  font-size: 12px;\n  color: #64748B;\n  cursor: pointer;\n}\n.sa-default-chip[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-default-chip[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-add-setting[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-add-setting[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0 0 16px;\n}\n.sa-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.sa-add-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 150px;\n  padding: 9px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #374151;\n  outline: none;\n}\n.sa-add-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366F1;\n}\n.sa-btn-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: #6366F1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.sa-btn-add[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sa-btn-add[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-inline-input[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #6366F1;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  width: 200px;\n}\n.sa-setting-val.bool-true[_ngcontent-%COMP%] {\n  color: #16A34A;\n  font-weight: 600;\n}\n.sa-setting-val.bool-false[_ngcontent-%COMP%] {\n  color: #DC2626;\n  font-weight: 600;\n}\n.sa-broadcast-card[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border-left: 3px solid #EF4444;\n}\n.sa-broadcast-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.sa-broadcast-header[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #EF4444;\n  font-size: 22px;\n}\n.sa-broadcast-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0;\n}\n.sa-broadcast-warn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #EF4444;\n  background: #FEF2F2;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.sa-broadcast-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.sa-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #374151;\n  outline: none;\n  resize: vertical;\n  font-family: inherit;\n}\n.sa-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #EF4444;\n}\n.sa-broadcast-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #DCFCE7;\n  color: #16A34A;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.sa-broadcast-success[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sa-btn-broadcast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: #EF4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sa-btn-broadcast[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.sa-btn-broadcast[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #DC2626;\n}\n.sa-btn-broadcast[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=sa-settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaSettingsComponent, [{
    type: Component,
    args: [{ selector: "sa-settings", standalone: false, template: `<div class="sa-page">\r
  <div class="sa-page-header">\r
    <h1>Param\xE8tres plateforme</h1>\r
    <p>Configuration globale de Mam Buudu</p>\r
  </div>\r
\r
  <div class="sa-defaults-bar">\r
    <span class="sa-defaults-label">Param\xE8tres sugg\xE9r\xE9s :</span>\r
    @for (d of defaults; track d.key) {\r
      <button class="sa-default-chip" (click)="applyDefault(d)"\r
              [disabled]="hasDefault(d.key)"\r
              [title]="'Ajouter ' + d.key">\r
        + {{ d.label }}\r
      </button>\r
    }\r
  </div>\r
\r
  @if (loading) {\r
    <div class="sa-loading">Chargement...</div>\r
  } @else {\r
    <div class="sa-table-wrap">\r
      <table class="sa-table">\r
        <thead>\r
          <tr>\r
            <th>Cl\xE9</th>\r
            <th>Label</th>\r
            <th>Valeur</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (s of settings; track s.key) {\r
            <tr>\r
              <td><code>{{ s.key }}</code></td>\r
              <td>{{ s.label || '\u2014' }}</td>\r
              <td>\r
                @if (s.editing) {\r
                  <input class="sa-inline-input" [(ngModel)]="s.editValue"/>\r
                } @else {\r
                  <span class="sa-setting-val"\r
                        [class.bool-true]="s.value === 'true'"\r
                        [class.bool-false]="s.value === 'false'">\r
                    {{ s.value }}\r
                  </span>\r
                }\r
              </td>\r
              <td>\r
                <div class="sa-actions">\r
                  @if (s.editing) {\r
                    <button class="sa-act-btn green" (click)="save(s)" [disabled]="s.saving">\r
                      <span class="material-icons-round">check</span>\r
                    </button>\r
                    <button class="sa-act-btn" (click)="cancelEdit(s)">\r
                      <span class="material-icons-round">close</span>\r
                    </button>\r
                  } @else {\r
                    <button class="sa-act-btn" (click)="startEdit(s)" title="Modifier">\r
                      <span class="material-icons-round">edit</span>\r
                    </button>\r
                    <button class="sa-act-btn danger" (click)="deleteSetting(s)" title="Supprimer">\r
                      <span class="material-icons-round">delete</span>\r
                    </button>\r
                  }\r
                </div>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="sa-add-setting">\r
      <h3>Ajouter un param\xE8tre</h3>\r
      <div class="sa-add-row">\r
        <input class="sa-add-input" [(ngModel)]="newKey" placeholder="cl\xE9 (ex: max_upload_mb)"/>\r
        <input class="sa-add-input" [(ngModel)]="newLabel" placeholder="Label (optionnel)"/>\r
        <input class="sa-add-input" [(ngModel)]="newValue" placeholder="valeur"/>\r
        <button class="sa-btn-add" (click)="addSetting()" [disabled]="!newKey || !newValue || adding">\r
          <span class="material-icons-round">add</span>Ajouter\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Broadcast section -->\r
    <div class="sa-broadcast-card">\r
      <div class="sa-broadcast-header">\r
        <span class="material-icons-round">campaign</span>\r
        <h3>Notification globale</h3>\r
        <span class="sa-broadcast-warn">Envoy\xE9e \xE0 tous les membres de toutes les familles</span>\r
      </div>\r
      <div class="sa-broadcast-fields">\r
        <input [(ngModel)]="broadcastTitre" placeholder="Titre de la notification" class="sa-add-input"/>\r
        <textarea [(ngModel)]="broadcastMsg" placeholder="Message..." rows="3" class="sa-textarea"></textarea>\r
      </div>\r
      @if (broadcastDone) {\r
        <div class="sa-broadcast-success">\r
          <span class="material-icons-round">check_circle</span> {{ broadcastDone }}\r
        </div>\r
      }\r
      <button class="sa-btn-broadcast" (click)="sendBroadcast()" [disabled]="!broadcastTitre || !broadcastMsg || broadcasting">\r
        @if (broadcasting) { <span class="sa-spinner-sm"></span> } @else {\r
          <span class="material-icons-round">send</span> Envoyer \xE0 tous\r
        }\r
      </button>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/superadmin/pages/settings/sa-settings.component.scss */\n.sa-page-header {\n  margin-bottom: 24px;\n}\n.sa-page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header p {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-table-wrap {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table tr:last-child td {\n  border-bottom: none;\n}\n.sa-table code {\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #6366F1;\n}\n.sa-actions {\n  display: flex;\n  gap: 6px;\n}\n.sa-act-btn {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748B;\n  transition: all 0.15s;\n}\n.sa-act-btn .material-icons-round {\n  font-size: 16px;\n}\n.sa-act-btn:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n  background: #F5F3FF;\n}\n.sa-act-btn.danger:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n  background: #FEF2F2;\n}\n.sa-act-btn.green:hover {\n  border-color: #10B981;\n  color: #10B981;\n  background: #ECFDF5;\n}\n.sa-act-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-defaults-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.sa-defaults-bar .sa-defaults-label {\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-default-chip {\n  padding: 4px 12px;\n  border: 1px dashed #CBD5E1;\n  border-radius: 20px;\n  background: #fff;\n  font-size: 12px;\n  color: #64748B;\n  cursor: pointer;\n}\n.sa-default-chip:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-default-chip:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.sa-add-setting {\n  margin-top: 24px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-add-setting h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0 0 16px;\n}\n.sa-add-row {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.sa-add-input {\n  flex: 1;\n  min-width: 150px;\n  padding: 9px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #374151;\n  outline: none;\n}\n.sa-add-input:focus {\n  border-color: #6366F1;\n}\n.sa-btn-add {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: #6366F1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.sa-btn-add .material-icons-round {\n  font-size: 16px;\n}\n.sa-btn-add:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-inline-input {\n  padding: 4px 8px;\n  border: 1px solid #6366F1;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  width: 200px;\n}\n.sa-setting-val.bool-true {\n  color: #16A34A;\n  font-weight: 600;\n}\n.sa-setting-val.bool-false {\n  color: #DC2626;\n  font-weight: 600;\n}\n.sa-broadcast-card {\n  margin-top: 24px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border-left: 3px solid #EF4444;\n}\n.sa-broadcast-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.sa-broadcast-header .material-icons-round {\n  color: #EF4444;\n  font-size: 22px;\n}\n.sa-broadcast-header h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0;\n}\n.sa-broadcast-warn {\n  font-size: 12px;\n  color: #EF4444;\n  background: #FEF2F2;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.sa-broadcast-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.sa-textarea {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #374151;\n  outline: none;\n  resize: vertical;\n  font-family: inherit;\n}\n.sa-textarea:focus {\n  border-color: #EF4444;\n}\n.sa-broadcast-success {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #DCFCE7;\n  color: #16A34A;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.sa-broadcast-success .material-icons-round {\n  font-size: 18px;\n}\n.sa-btn-broadcast {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: #EF4444;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sa-btn-broadcast .material-icons-round {\n  font-size: 16px;\n}\n.sa-btn-broadcast:hover:not(:disabled) {\n  background: #DC2626;\n}\n.sa-btn-broadcast:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-spinner-sm {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=sa-settings.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaSettingsComponent, { className: "SaSettingsComponent", filePath: "src/app/superadmin/pages/settings/sa-settings.component.ts", lineNumber: 19 });
})();

// src/app/superadmin/pages/plans/sa-plans.component.ts
var _forTrack07 = ($index, $item) => $item.id;
function SaPlansComponent_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Requis, lettres minuscules/chiffres/tiret bas uniquement");
    \u0275\u0275elementEnd();
  }
}
function SaPlansComponent_Conditional_12_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function SaPlansComponent_Conditional_12_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cr\xE9er le plan ");
  }
}
function SaPlansComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h3");
    \u0275\u0275text(2, "Cr\xE9er un nouveau plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 8);
    \u0275\u0275listener("ngSubmit", function SaPlansComponent_Conditional_12_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCreate());
    });
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10)(6, "label");
    \u0275\u0275text(7, "ID (slug unique)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 11);
    \u0275\u0275conditionalCreate(9, SaPlansComponent_Conditional_12_Conditional_9_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10)(11, "label");
    \u0275\u0275text(12, "Nom technique");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "label");
    \u0275\u0275text(16, "Label affich\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10)(19, "label");
    \u0275\u0275text(20, "Prix (FCFA/mois)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 10)(23, "label");
    \u0275\u0275text(24, "Max personnes (vide = illimit\xE9)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "label");
    \u0275\u0275text(28, "Fonctionnalit\xE9s (s\xE9par\xE9es par virgule)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 19)(31, "button", 20);
    \u0275\u0275conditionalCreate(32, SaPlansComponent_Conditional_12_Conditional_32_Template, 1, 0, "span", 21)(33, SaPlansComponent_Conditional_12_Conditional_33_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.createForm);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.createForm.get("id").invalid && ctx_r1.createForm.get("id").touched ? 9 : -1);
    \u0275\u0275advance(22);
    \u0275\u0275property("disabled", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.creating ? 32 : 33);
  }
}
function SaPlansComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SaPlansComponent_Conditional_14_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "/mois");
    \u0275\u0275elementEnd();
  }
}
function SaPlansComponent_Conditional_14_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Max ", p_r3.maxPersonnes, " pers.");
  }
}
function SaPlansComponent_Conditional_14_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Illimit\xE9");
    \u0275\u0275elementEnd();
  }
}
function SaPlansComponent_Conditional_14_For_2_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5);
  }
}
function SaPlansComponent_Conditional_14_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 32);
    \u0275\u0275repeaterCreate(1, SaPlansComponent_Conditional_14_For_2_Conditional_16_For_2_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "button", 34);
    \u0275\u0275listener("click", function SaPlansComponent_Conditional_14_For_2_Conditional_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(p_r3));
    });
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 35);
    \u0275\u0275listener("click", function SaPlansComponent_Conditional_14_For_2_Conditional_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deletePlan(p_r3));
    });
    \u0275\u0275elementStart(9, "span", 4);
    \u0275\u0275text(10, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r3.features);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.actionLoading === p_r3.id);
  }
}
function SaPlansComponent_Conditional_14_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "label");
    \u0275\u0275text(2, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SaPlansComponent_Conditional_14_For_2_Conditional_17_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(p_r3._editLabel, $event) || (p_r3._editLabel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Prix (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function SaPlansComponent_Conditional_14_For_2_Conditional_17_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(p_r3._editPrix, $event) || (p_r3._editPrix = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Max personnes (vide = illimit\xE9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SaPlansComponent_Conditional_14_For_2_Conditional_17_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(p_r3._editMax, $event) || (p_r3._editMax = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Fonctionnalit\xE9s (virgule)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SaPlansComponent_Conditional_14_For_2_Conditional_17_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(p_r3._editFeats, $event) || (p_r3._editFeats = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 33)(14, "button", 40);
    \u0275\u0275listener("click", function SaPlansComponent_Conditional_14_For_2_Conditional_17_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveEdit(p_r3));
    });
    \u0275\u0275elementStart(15, "span", 4);
    \u0275\u0275text(16, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Enregistrer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 41);
    \u0275\u0275listener("click", function SaPlansComponent_Conditional_14_For_2_Conditional_17_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit(p_r3));
    });
    \u0275\u0275text(19, "Annuler");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", p_r3._editLabel);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", p_r3._editPrix);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", p_r3._editMax);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", p_r3._editFeats);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.actionLoading === p_r3.id);
  }
}
function SaPlansComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div")(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275conditionalCreate(10, SaPlansComponent_Conditional_14_For_2_Conditional_10_Template, 2, 0, "small");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 28)(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, SaPlansComponent_Conditional_14_For_2_Conditional_14_Template, 2, 1, "span", 30)(15, SaPlansComponent_Conditional_14_For_2_Conditional_15_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, SaPlansComponent_Conditional_14_For_2_Conditional_16_Template, 11, 1)(17, SaPlansComponent_Conditional_14_For_2_Conditional_17_Template, 20, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275classProp("sa-plan-free", p_r3.prix === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r3.prix === 0 ? "Gratuit" : \u0275\u0275pipeBind1(9, 9, p_r3.prix) + " FCFA", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r3.prix > 0 ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (p_r3._count == null ? null : p_r3._count.subscriptions) ?? 0, " abonn\xE9s");
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r3.maxPersonnes ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!p_r3._editing ? 16 : 17);
  }
}
function SaPlansComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, SaPlansComponent_Conditional_14_For_2_Template, 18, 11, "div", 22, _forTrack07);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.plans);
  }
}
var SaPlansComponent = class _SaPlansComponent {
  sa;
  fb;
  plans = [];
  loading = true;
  showCreateForm = false;
  createForm;
  creating = false;
  editingId = null;
  actionLoading = "";
  constructor(sa, fb) {
    this.sa = sa;
    this.fb = fb;
  }
  ngOnInit() {
    this.createForm = this.fb.group({
      id: ["", [Validators.required, Validators.pattern(/^[a-z0-9_]+$/)]],
      nom: ["", Validators.required],
      label: ["", Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
      maxPersonnes: [null],
      featuresRaw: [""]
    });
    this.load();
  }
  load() {
    this.loading = true;
    this.sa.getPlans().subscribe({ next: (p) => {
      this.plans = p;
      this.loading = false;
    }, error: () => this.loading = false });
  }
  startEdit(p) {
    p._editing = true;
    p._editLabel = p.label;
    p._editPrix = p.prix;
    p._editMax = p.maxPersonnes;
    p._editFeats = (p.features ?? []).join(", ");
  }
  cancelEdit(p) {
    p._editing = false;
  }
  saveEdit(p) {
    this.actionLoading = p.id;
    const features = p._editFeats.split(",").map((s) => s.trim()).filter(Boolean);
    this.sa.patchPlan(p.id, { label: p._editLabel, prix: +(p._editPrix ?? p.prix), maxPersonnes: p._editMax ? +p._editMax : null, features }).subscribe({
      next: (updated) => {
        Object.assign(p, updated);
        p._editing = false;
        this.actionLoading = "";
      },
      error: () => this.actionLoading = ""
    });
  }
  deletePlan(p) {
    if (!confirm(`Supprimer le plan "${p.label}" ? Les abonnements existants seront affect\xE9s.`))
      return;
    this.actionLoading = p.id;
    this.sa.deletePlan(p.id).subscribe({
      next: () => {
        this.plans = this.plans.filter((x) => x.id !== p.id);
        this.actionLoading = "";
      },
      error: () => this.actionLoading = ""
    });
  }
  submitCreate() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid)
      return;
    this.creating = true;
    const v = this.createForm.value;
    const features = v.featuresRaw.split(",").map((s) => s.trim()).filter(Boolean);
    this.sa.createPlan({ id: v.id, nom: v.nom, label: v.label, prix: +v.prix, maxPersonnes: v.maxPersonnes ? +v.maxPersonnes : null, features }).subscribe({
      next: (p) => {
        this.plans.push(p);
        this.showCreateForm = false;
        this.createForm.reset({ prix: 0 });
        this.creating = false;
      },
      error: () => this.creating = false
    });
  }
  static \u0275fac = function SaPlansComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaPlansComponent)(\u0275\u0275directiveInject(SuperAdminService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaPlansComponent, selectors: [["sa-plans"]], standalone: false, decls: 15, vars: 4, consts: [[1, "sa-page"], [1, "sa-page-header"], [1, "sa-header-row"], [1, "sa-btn-primary", 3, "click"], [1, "material-icons-round"], [1, "sa-create-card"], [1, "sa-loading"], [1, "sa-plans-grid"], [3, "ngSubmit", "formGroup"], [1, "sa-form-grid"], [1, "sa-field"], ["formControlName", "id", "placeholder", "ex: plan_premium"], [1, "sa-ferr"], ["formControlName", "nom", "placeholder", "ex: premium"], ["formControlName", "label", "placeholder", "ex: Premium"], ["type", "number", "formControlName", "prix", "min", "0"], ["type", "number", "formControlName", "maxPersonnes", "placeholder", "illimit\xE9"], [1, "sa-field", "sa-field-full"], ["formControlName", "featuresRaw", "placeholder", "Arbre illimit\xE9, Albums photos, Stories..."], [1, "sa-create-actions"], ["type", "submit", 1, "sa-btn-primary", 3, "disabled"], [1, "sa-spinner-sm"], [1, "sa-plan-card", 3, "sa-plan-free"], [1, "sa-plan-card"], [1, "sa-plan-head"], [1, "sa-plan-label"], [1, "sa-plan-id"], [1, "sa-plan-prix"], [1, "sa-plan-meta"], [1, "sa-badge", "blue"], [1, "sa-badge", "grey"], [1, "sa-badge", "green"], [1, "sa-plan-features"], [1, "sa-plan-actions"], ["title", "Modifier", 1, "sa-act-btn", 3, "click"], ["title", "Supprimer", 1, "sa-act-btn", "danger", 3, "click", "disabled"], [1, "sa-plan-edit"], [3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", 3, "ngModelChange", "ngModel"], [1, "sa-act-btn", "green", 3, "click", "disabled"], [1, "sa-act-btn", 3, "click"]], template: function SaPlansComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Plans d'abonnement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "G\xE9rer les plans de la plateforme");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function SaPlansComponent_Template_button_click_8_listener() {
        return ctx.showCreateForm = !ctx.showCreateForm;
      });
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(12, SaPlansComponent_Conditional_12_Template, 34, 4, "div", 5);
      \u0275\u0275conditionalCreate(13, SaPlansComponent_Conditional_13_Template, 2, 0, "div", 6)(14, SaPlansComponent_Conditional_14_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.showCreateForm ? "close" : "add");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showCreateForm ? "Annuler" : "Nouveau plan", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCreateForm ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 13 : 14);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, NgModel, DecimalPipe], styles: ["\n\n.sa-page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.sa-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.sa-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-loading[_ngcontent-%COMP%] {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: #6366F1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sa-btn-primary[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.sa-btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4F46E5;\n}\n.sa-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-create-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  border-left: 3px solid #6366F1;\n}\n.sa-create-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0 0 16px;\n}\n.sa-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.sa-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sa-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  font-weight: 500;\n}\n.sa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n}\n.sa-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #6366F1;\n}\n.sa-field.sa-field-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.sa-ferr[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #EF4444;\n}\n.sa-create-actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.sa-spinner-sm[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sa-plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.sa-plan-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border-top: 3px solid #6366F1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sa-plan-card.sa-plan-free[_ngcontent-%COMP%] {\n  border-top-color: #94A3B8;\n}\n.sa-plan-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.sa-plan-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.sa-plan-id[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94A3B8;\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.sa-plan-prix[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #6366F1;\n  white-space: nowrap;\n}\n.sa-plan-prix[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n  font-weight: 400;\n}\n.sa-plan-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sa-plan-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n.sa-plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #374151;\n  padding: 3px 0;\n}\n.sa-plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #10B981;\n}\n.sa-plan-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.sa-plan-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sa-plan-edit[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.sa-plan-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n}\n.sa-plan-edit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #6366F1;\n}\n.sa-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sa-badge.blue[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sa-badge.green[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.sa-badge.grey[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.sa-act-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748B;\n  font-size: 12px;\n  transition: all 0.15s;\n}\n.sa-act-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sa-act-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n  background: #F5F3FF;\n}\n.sa-act-btn.danger[_ngcontent-%COMP%]:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n  background: #FEF2F2;\n}\n.sa-act-btn.green[_ngcontent-%COMP%]:hover {\n  border-color: #10B981;\n  color: #10B981;\n  background: #ECFDF5;\n}\n.sa-act-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=sa-plans.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaPlansComponent, [{
    type: Component,
    args: [{ selector: "sa-plans", standalone: false, template: `<div class="sa-page">\r
  <div class="sa-page-header">\r
    <div class="sa-header-row">\r
      <div>\r
        <h1>Plans d'abonnement</h1>\r
        <p>G\xE9rer les plans de la plateforme</p>\r
      </div>\r
      <button class="sa-btn-primary" (click)="showCreateForm = !showCreateForm">\r
        <span class="material-icons-round">{{ showCreateForm ? 'close' : 'add' }}</span>\r
        {{ showCreateForm ? 'Annuler' : 'Nouveau plan' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Create form -->\r
  @if (showCreateForm) {\r
    <div class="sa-create-card">\r
      <h3>Cr\xE9er un nouveau plan</h3>\r
      <form [formGroup]="createForm" (ngSubmit)="submitCreate()">\r
        <div class="sa-form-grid">\r
          <div class="sa-field">\r
            <label>ID (slug unique)</label>\r
            <input formControlName="id" placeholder="ex: plan_premium"/>\r
            @if (createForm.get('id')!.invalid && createForm.get('id')!.touched) {\r
              <span class="sa-ferr">Requis, lettres minuscules/chiffres/tiret bas uniquement</span>\r
            }\r
          </div>\r
          <div class="sa-field">\r
            <label>Nom technique</label>\r
            <input formControlName="nom" placeholder="ex: premium"/>\r
          </div>\r
          <div class="sa-field">\r
            <label>Label affich\xE9</label>\r
            <input formControlName="label" placeholder="ex: Premium"/>\r
          </div>\r
          <div class="sa-field">\r
            <label>Prix (FCFA/mois)</label>\r
            <input type="number" formControlName="prix" min="0"/>\r
          </div>\r
          <div class="sa-field">\r
            <label>Max personnes (vide = illimit\xE9)</label>\r
            <input type="number" formControlName="maxPersonnes" placeholder="illimit\xE9"/>\r
          </div>\r
          <div class="sa-field sa-field-full">\r
            <label>Fonctionnalit\xE9s (s\xE9par\xE9es par virgule)</label>\r
            <input formControlName="featuresRaw" placeholder="Arbre illimit\xE9, Albums photos, Stories..."/>\r
          </div>\r
        </div>\r
        <div class="sa-create-actions">\r
          <button type="submit" class="sa-btn-primary" [disabled]="creating">\r
            @if (creating) { <span class="sa-spinner-sm"></span> } @else { Cr\xE9er le plan }\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  }\r
\r
  @if (loading) {\r
    <div class="sa-loading">Chargement...</div>\r
  } @else {\r
    <div class="sa-plans-grid">\r
      @for (p of plans; track p.id) {\r
        <div class="sa-plan-card" [class.sa-plan-free]="p.prix === 0">\r
          <div class="sa-plan-head">\r
            <div>\r
              <div class="sa-plan-label">{{ p.label }}</div>\r
              <code class="sa-plan-id">{{ p.id }}</code>\r
            </div>\r
            <div class="sa-plan-prix">\r
              {{ p.prix === 0 ? 'Gratuit' : (p.prix | number) + ' FCFA' }}\r
              @if (p.prix > 0) { <small>/mois</small> }\r
            </div>\r
          </div>\r
\r
          <div class="sa-plan-meta">\r
            <span class="sa-badge blue">{{ p._count?.subscriptions ?? 0 }} abonn\xE9s</span>\r
            @if (p.maxPersonnes) {\r
              <span class="sa-badge grey">Max {{ p.maxPersonnes }} pers.</span>\r
            } @else {\r
              <span class="sa-badge green">Illimit\xE9</span>\r
            }\r
          </div>\r
\r
          @if (!p._editing) {\r
            <ul class="sa-plan-features">\r
              @for (f of p.features; track f) {\r
                <li><span class="material-icons-round">check_circle</span>{{ f }}</li>\r
              }\r
            </ul>\r
            <div class="sa-plan-actions">\r
              <button class="sa-act-btn" (click)="startEdit(p)" title="Modifier">\r
                <span class="material-icons-round">edit</span> Modifier\r
              </button>\r
              <button class="sa-act-btn danger" (click)="deletePlan(p)" [disabled]="actionLoading === p.id" title="Supprimer">\r
                <span class="material-icons-round">delete</span>\r
              </button>\r
            </div>\r
          } @else {\r
            <!-- Inline edit -->\r
            <div class="sa-plan-edit">\r
              <label>Label</label>\r
              <input [(ngModel)]="p._editLabel"/>\r
              <label>Prix (FCFA)</label>\r
              <input type="number" [(ngModel)]="p._editPrix" min="0"/>\r
              <label>Max personnes (vide = illimit\xE9)</label>\r
              <input type="number" [(ngModel)]="p._editMax"/>\r
              <label>Fonctionnalit\xE9s (virgule)</label>\r
              <input [(ngModel)]="p._editFeats"/>\r
            </div>\r
            <div class="sa-plan-actions">\r
              <button class="sa-act-btn green" (click)="saveEdit(p)" [disabled]="actionLoading === p.id">\r
                <span class="material-icons-round">check</span> Enregistrer\r
              </button>\r
              <button class="sa-act-btn" (click)="cancelEdit(p)">Annuler</button>\r
            </div>\r
          }\r
        </div>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/superadmin/pages/plans/sa-plans.component.scss */\n.sa-page-header {\n  margin-bottom: 24px;\n}\n.sa-page-header p {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.sa-page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-loading {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: #6366F1;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sa-btn-primary .material-icons-round {\n  font-size: 18px;\n}\n.sa-btn-primary:hover {\n  background: #4F46E5;\n}\n.sa-btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.sa-create-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  margin-bottom: 24px;\n  border-left: 3px solid #6366F1;\n}\n.sa-create-card h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n  margin: 0 0 16px;\n}\n.sa-form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.sa-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sa-field label {\n  font-size: 12px;\n  color: #64748B;\n  font-weight: 500;\n}\n.sa-field input {\n  padding: 8px 10px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n}\n.sa-field input:focus {\n  border-color: #6366F1;\n}\n.sa-field.sa-field-full {\n  grid-column: 1/-1;\n}\n.sa-ferr {\n  font-size: 11px;\n  color: #EF4444;\n}\n.sa-create-actions {\n  margin-top: 16px;\n}\n.sa-spinner-sm {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sa-plans-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n.sa-plan-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border-top: 3px solid #6366F1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sa-plan-card.sa-plan-free {\n  border-top-color: #94A3B8;\n}\n.sa-plan-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.sa-plan-label {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.sa-plan-id {\n  font-size: 11px;\n  color: #94A3B8;\n  background: #F1F5F9;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.sa-plan-prix {\n  font-size: 20px;\n  font-weight: 700;\n  color: #6366F1;\n  white-space: nowrap;\n}\n.sa-plan-prix small {\n  font-size: 12px;\n  color: #94A3B8;\n  font-weight: 400;\n}\n.sa-plan-meta {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.sa-plan-features {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n.sa-plan-features li {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #374151;\n  padding: 3px 0;\n}\n.sa-plan-features li .material-icons-round {\n  font-size: 16px;\n  color: #10B981;\n}\n.sa-plan-actions {\n  display: flex;\n  gap: 8px;\n}\n.sa-plan-edit {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sa-plan-edit label {\n  font-size: 11px;\n  color: #64748B;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.sa-plan-edit input {\n  padding: 6px 8px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n}\n.sa-plan-edit input:focus {\n  border-color: #6366F1;\n}\n.sa-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.sa-badge.blue {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.sa-badge.green {\n  background: #DCFCE7;\n  color: #16A34A;\n}\n.sa-badge.grey {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.sa-act-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  color: #64748B;\n  font-size: 12px;\n  transition: all 0.15s;\n}\n.sa-act-btn .material-icons-round {\n  font-size: 14px;\n}\n.sa-act-btn:hover {\n  border-color: #6366F1;\n  color: #6366F1;\n  background: #F5F3FF;\n}\n.sa-act-btn.danger:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n  background: #FEF2F2;\n}\n.sa-act-btn.green:hover {\n  border-color: #10B981;\n  color: #10B981;\n  background: #ECFDF5;\n}\n.sa-act-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=sa-plans.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaPlansComponent, { className: "SaPlansComponent", filePath: "src/app/superadmin/pages/plans/sa-plans.component.ts", lineNumber: 15 });
})();

// src/app/superadmin/pages/audit/sa-audit.component.ts
var _forTrack08 = ($index, $item) => $item.id;
function SaAuditComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("value", a_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r1.prenom, " ", a_r1.nom);
  }
}
function SaAuditComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", k_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getMeta(k_r2).label);
  }
}
function SaAuditComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function SaAuditComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " R\xE9initialiser ");
    \u0275\u0275elementEnd();
  }
}
function SaAuditComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SaAuditComponent_Conditional_21_For_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", log_r6.admin.prenom, " ", log_r6.admin.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r6.admin.email);
  }
}
function SaAuditComponent_Conditional_21_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SaAuditComponent_Conditional_21_For_16_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(2, 1, log_r6.targetId, 0, 8), "...");
  }
}
function SaAuditComponent_Conditional_21_For_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SaAuditComponent_Conditional_21_For_16_Conditional_10_Conditional_2_Template, 3, 5, "code");
  }
  if (rf & 2) {
    const log_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r6.targetType);
    \u0275\u0275advance();
    \u0275\u0275conditional(log_r6.targetId ? 2 : -1);
  }
}
function SaAuditComponent_Conditional_21_For_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SaAuditComponent_Conditional_21_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 16)(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, SaAuditComponent_Conditional_21_For_16_Conditional_7_Template, 4, 3)(8, SaAuditComponent_Conditional_21_For_16_Conditional_8_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275conditionalCreate(10, SaAuditComponent_Conditional_21_For_16_Conditional_10_Template, 3, 2)(11, SaAuditComponent_Conditional_21_For_16_Conditional_11_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.getMeta(log_r6.action).color + "18")("color", ctx_r2.getMeta(log_r6.action).color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getMeta(log_r6.action).icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getMeta(log_r6.action).label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(log_r6.admin ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(log_r6.targetType ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDetails(log_r6.details));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(log_r6.createdAt));
  }
}
function SaAuditComponent_Conditional_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "Aucune action enregistr\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function SaAuditComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Administrateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Cible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "D\xE9tails");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, SaAuditComponent_Conditional_21_For_16_Template, 16, 10, "tr", null, _forTrack08);
    \u0275\u0275conditionalCreate(17, SaAuditComponent_Conditional_21_Conditional_17_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 14)(19, "button", 15);
    \u0275\u0275listener("click", function SaAuditComponent_Conditional_21_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.page = ctx_r2.page - 1;
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(20, "\u2039 Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 15);
    \u0275\u0275listener("click", function SaAuditComponent_Conditional_21_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.page = ctx_r2.page + 1;
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(24, "Suivant \u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.data == null ? null : ctx_r2.data.logs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(ctx_r2.data == null ? null : ctx_r2.data.logs == null ? null : ctx_r2.data.logs.length) ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.page, " / ", ctx_r2.data == null ? null : ctx_r2.data.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.page >= ((ctx_r2.data == null ? null : ctx_r2.data.pages) ?? 1));
  }
}
var SaAuditComponent = class _SaAuditComponent {
  sa;
  data = null;
  loading = true;
  page = 1;
  filterAdminId = "";
  filterAction = "";
  filterDateDebut = "";
  filterDateFin = "";
  actionLabels = {
    assign_plan: { label: "Plan assign\xE9", color: "#3B82F6", icon: "workspace_premium" },
    suspend_famille: { label: "Famille suspendue", color: "#F59E0B", icon: "pause_circle" },
    delete_famille: { label: "Famille supprim\xE9e", color: "#EF4444", icon: "delete" },
    delete_user: { label: "Utilisateur supprim\xE9", color: "#EF4444", icon: "person_remove" },
    change_role: { label: "R\xF4le modifi\xE9", color: "#8B5CF6", icon: "manage_accounts" },
    broadcast: { label: "Broadcast envoy\xE9", color: "#10B981", icon: "campaign" },
    change_setting: { label: "Param\xE8tre modifi\xE9", color: "#6366F1", icon: "settings" },
    delete_plan: { label: "Plan supprim\xE9", color: "#EF4444", icon: "delete" },
    edit_plan: { label: "Plan modifi\xE9", color: "#6366F1", icon: "workspace_premium" },
    delete_setting: { label: "Param\xE8tre supprim\xE9", color: "#EF4444", icon: "settings" }
  };
  actionKeys = Object.keys(this.actionLabels);
  constructor(sa) {
    this.sa = sa;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const params = { page: this.page };
    if (this.filterAdminId)
      params["adminId"] = this.filterAdminId;
    if (this.filterAction)
      params["action"] = this.filterAction;
    if (this.filterDateDebut)
      params["dateDebut"] = this.filterDateDebut;
    if (this.filterDateFin)
      params["dateFin"] = this.filterDateFin;
    this.sa.getAudit(params).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
        if (d.pages > 0 && this.page > d.pages) {
          this.page = d.pages;
          this.load();
        }
      },
      error: () => this.loading = false
    });
  }
  applyFilters() {
    this.page = 1;
    this.load();
  }
  resetFilters() {
    this.filterAdminId = "";
    this.filterAction = "";
    this.filterDateDebut = "";
    this.filterDateFin = "";
    this.page = 1;
    this.load();
  }
  getMeta(action) {
    return this.actionLabels[action] ?? { label: action, color: "#94A3B8", icon: "info" };
  }
  formatDate(d) {
    return new Date(d).toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" });
  }
  formatDetails(details) {
    if (!details)
      return "\u2014";
    return Object.entries(details).map(([k, v]) => `${k}: ${v}`).join(" \xB7 ");
  }
  static \u0275fac = function SaAuditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaAuditComponent)(\u0275\u0275directiveInject(SuperAdminService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaAuditComponent, selectors: [["sa-audit"]], standalone: false, decls: 22, vars: 6, consts: [[1, "sa-page"], [1, "sa-page-header"], [1, "sa-toolbar", "sa-audit-filters"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], ["type", "date", "title", "Depuis le", 3, "ngModelChange", "change", "ngModel"], ["type", "date", "title", "Jusqu'au", 3, "ngModelChange", "change", "ngModel"], [1, "sa-filter-reset"], [1, "sa-loading"], [1, "sa-filter-reset", 3, "click"], [1, "material-icons-round"], [1, "sa-table-wrap"], [1, "sa-table"], [1, "sa-pagination"], [3, "click", "disabled"], [1, "sa-action-badge"], [1, "sa-muted"], [1, "sa-details-cell"], [1, "sa-date-cell"], [1, "sa-sub"], [1, "sa-target-type"], ["colspan", "5", 1, "sa-empty-row"]], template: function SaAuditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Journal d'audit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Toutes les actions effectu\xE9es par les administrateurs plateforme");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function SaAuditComponent_Template_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterAdminId, $event) || (ctx.filterAdminId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SaAuditComponent_Template_select_change_7_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(8, "option", 4);
      \u0275\u0275text(9, "Tous les administrateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(10, SaAuditComponent_For_11_Template, 2, 3, "option", 5, _forTrack08);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function SaAuditComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterAction, $event) || (ctx.filterAction = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SaAuditComponent_Template_select_change_12_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(13, "option", 4);
      \u0275\u0275text(14, "Toutes les actions");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(15, SaAuditComponent_For_16_Template, 2, 2, "option", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function SaAuditComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterDateDebut, $event) || (ctx.filterDateDebut = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SaAuditComponent_Template_input_change_17_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function SaAuditComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterDateFin, $event) || (ctx.filterDateFin = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SaAuditComponent_Template_input_change_18_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, SaAuditComponent_Conditional_19_Template, 4, 0, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, SaAuditComponent_Conditional_20_Template, 2, 0, "div", 9)(21, SaAuditComponent_Conditional_21_Template, 25, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterAdminId);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.data == null ? null : ctx.data.admins);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterAction);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.actionKeys);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDateDebut);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDateFin);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.filterAdminId || ctx.filterAction || ctx.filterDateDebut || ctx.filterDateFin ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 20 : 21);
    }
  }, dependencies: [NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe], styles: ["\n\n.sa-page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.sa-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading[_ngcontent-%COMP%] {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-audit-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.sa-audit-filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.sa-audit-filters[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #374151;\n}\n.sa-filter-reset[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  color: #64748B;\n  font-size: 13px;\n  cursor: pointer;\n}\n.sa-filter-reset[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sa-filter-reset[_ngcontent-%COMP%]:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n}\n.sa-table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.sa-table[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  padding: 2px 5px;\n  border-radius: 4px;\n  font-size: 11px;\n  color: #64748B;\n  margin-left: 4px;\n}\n.sa-action-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sa-action-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sa-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94A3B8;\n  margin-top: 2px;\n}\n.sa-muted[_ngcontent-%COMP%] {\n  color: #94A3B8;\n}\n.sa-target-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #F1F5F9;\n  color: #6366F1;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-right: 4px;\n}\n.sa-details-cell[_ngcontent-%COMP%] {\n  max-width: 260px;\n  color: #64748B;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sa-date-cell[_ngcontent-%COMP%] {\n  color: #94A3B8;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.sa-empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94A3B8;\n  padding: 40px !important;\n}\n.sa-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px;\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=sa-audit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaAuditComponent, [{
    type: Component,
    args: [{ selector: "sa-audit", standalone: false, template: `<div class="sa-page">\r
  <div class="sa-page-header">\r
    <h1>Journal d'audit</h1>\r
    <p>Toutes les actions effectu\xE9es par les administrateurs plateforme</p>\r
  </div>\r
\r
  <div class="sa-toolbar sa-audit-filters">\r
    <select [(ngModel)]="filterAdminId" (change)="applyFilters()">\r
      <option value="">Tous les administrateurs</option>\r
      @for (a of data?.admins; track a.id) {\r
        <option [value]="a.id">{{ a.prenom }} {{ a.nom }}</option>\r
      }\r
    </select>\r
    <select [(ngModel)]="filterAction" (change)="applyFilters()">\r
      <option value="">Toutes les actions</option>\r
      @for (k of actionKeys; track k) {\r
        <option [value]="k">{{ getMeta(k).label }}</option>\r
      }\r
    </select>\r
    <input type="date" [(ngModel)]="filterDateDebut" (change)="applyFilters()" title="Depuis le" />\r
    <input type="date" [(ngModel)]="filterDateFin" (change)="applyFilters()" title="Jusqu'au" />\r
    @if (filterAdminId || filterAction || filterDateDebut || filterDateFin) {\r
      <button class="sa-filter-reset" (click)="resetFilters()">\r
        <span class="material-icons-round">close</span> R\xE9initialiser\r
      </button>\r
    }\r
  </div>\r
\r
  @if (loading) {\r
    <div class="sa-loading">Chargement...</div>\r
  } @else {\r
    <div class="sa-table-wrap">\r
      <table class="sa-table">\r
        <thead>\r
          <tr>\r
            <th>Action</th>\r
            <th>Administrateur</th>\r
            <th>Cible</th>\r
            <th>D\xE9tails</th>\r
            <th>Date</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (log of data?.logs; track log.id) {\r
            <tr>\r
              <td>\r
                <div class="sa-action-badge" [style.background]="getMeta(log.action).color + '18'"\r
                     [style.color]="getMeta(log.action).color">\r
                  <span class="material-icons-round">{{ getMeta(log.action).icon }}</span>\r
                  {{ getMeta(log.action).label }}\r
                </div>\r
              </td>\r
              <td>\r
                @if (log.admin) {\r
                  <strong>{{ log.admin.prenom }} {{ log.admin.nom }}</strong>\r
                  <div class="sa-sub">{{ log.admin.email }}</div>\r
                } @else {\r
                  <span class="sa-muted">\u2014</span>\r
                }\r
              </td>\r
              <td>\r
                @if (log.targetType) {\r
                  <span class="sa-target-type">{{ log.targetType }}</span>\r
                  @if (log.targetId) { <code>{{ log.targetId | slice:0:8 }}...</code> }\r
                } @else { <span class="sa-muted">\u2014</span> }\r
              </td>\r
              <td class="sa-details-cell">{{ formatDetails(log.details) }}</td>\r
              <td class="sa-date-cell">{{ formatDate(log.createdAt) }}</td>\r
            </tr>\r
          }\r
          @if (!data?.logs?.length) {\r
            <tr><td colspan="5" class="sa-empty-row">Aucune action enregistr\xE9e</td></tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="sa-pagination">\r
      <button [disabled]="page <= 1" (click)="page = page - 1; load()">\u2039 Pr\xE9c\xE9dent</button>\r
      <span>Page {{ page }} / {{ data?.pages }}</span>\r
      <button [disabled]="page >= (data?.pages ?? 1)" (click)="page = page + 1; load()">Suivant \u203A</button>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/superadmin/pages/audit/sa-audit.component.scss */\n.sa-page-header {\n  margin-bottom: 24px;\n}\n.sa-page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 4px;\n}\n.sa-page-header p {\n  color: #64748B;\n  font-size: 14px;\n  margin: 0;\n}\n.sa-loading {\n  color: #64748B;\n  padding: 40px;\n  text-align: center;\n}\n.sa-audit-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.sa-audit-filters select,\n.sa-audit-filters input[type=date] {\n  padding: 8px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #374151;\n}\n.sa-filter-reset {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 7px 12px;\n  border: 1px solid #E2E8F0;\n  border-radius: 8px;\n  background: #fff;\n  color: #64748B;\n  font-size: 13px;\n  cursor: pointer;\n}\n.sa-filter-reset .material-icons-round {\n  font-size: 15px;\n}\n.sa-filter-reset:hover {\n  border-color: #EF4444;\n  color: #EF4444;\n}\n.sa-table-wrap {\n  background: #fff;\n  border-radius: 12px;\n  overflow: auto;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.sa-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.sa-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid #F1F5F9;\n}\n.sa-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid #F8FAFC;\n  color: #374151;\n  vertical-align: middle;\n}\n.sa-table tr:last-child td {\n  border-bottom: none;\n}\n.sa-table code {\n  background: #F1F5F9;\n  padding: 2px 5px;\n  border-radius: 4px;\n  font-size: 11px;\n  color: #64748B;\n  margin-left: 4px;\n}\n.sa-action-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.sa-action-badge .material-icons-round {\n  font-size: 14px;\n}\n.sa-sub {\n  font-size: 11px;\n  color: #94A3B8;\n  margin-top: 2px;\n}\n.sa-muted {\n  color: #94A3B8;\n}\n.sa-target-type {\n  display: inline-block;\n  background: #F1F5F9;\n  color: #6366F1;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-right: 4px;\n}\n.sa-details-cell {\n  max-width: 260px;\n  color: #64748B;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sa-date-cell {\n  color: #94A3B8;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.sa-empty-row {\n  text-align: center;\n  color: #94A3B8;\n  padding: 40px !important;\n}\n.sa-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 16px;\n  font-size: 13px;\n  color: #64748B;\n}\n.sa-pagination button {\n  padding: 6px 14px;\n  border: 1px solid #E2E8F0;\n  border-radius: 6px;\n  background: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n.sa-pagination button:hover:not(:disabled) {\n  border-color: #6366F1;\n  color: #6366F1;\n}\n.sa-pagination button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=sa-audit.component.css.map */\n"] }]
  }], () => [{ type: SuperAdminService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaAuditComponent, { className: "SaAuditComponent", filePath: "src/app/superadmin/pages/audit/sa-audit.component.ts", lineNumber: 6 });
})();

// src/app/superadmin/superadmin-routing.module.ts
var routes = [
  { path: "login", component: SaLoginComponent },
  {
    path: "",
    component: SaShellComponent,
    canActivate: [superAdminGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: SaDashboardComponent },
      { path: "familles", component: SaFamillesComponent },
      { path: "users", component: SaUsersComponent },
      { path: "subscriptions", component: SaSubscriptionsComponent },
      { path: "plans", component: SaPlansComponent },
      { path: "settings", component: SaSettingsComponent },
      { path: "audit", component: SaAuditComponent }
    ]
  }
];
var SuperAdminRoutingModule = class _SuperAdminRoutingModule {
  static \u0275fac = function SuperAdminRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SuperAdminRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/superadmin/superadmin.module.ts
var SuperAdminModule = class _SuperAdminModule {
  static \u0275fac = function SuperAdminModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SuperAdminModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, SuperAdminRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminModule, [{
    type: NgModule,
    args: [{
      declarations: [
        SaShellComponent,
        SaLoginComponent,
        SaDashboardComponent,
        SaFamillesComponent,
        SaUsersComponent,
        SaSubscriptionsComponent,
        SaSettingsComponent,
        SaPlansComponent,
        SaAuditComponent
      ],
      imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, SuperAdminRoutingModule]
    }]
  }], null, null);
})();
export {
  SuperAdminModule
};
//# sourceMappingURL=chunk-SWAO5CSK.js.map
