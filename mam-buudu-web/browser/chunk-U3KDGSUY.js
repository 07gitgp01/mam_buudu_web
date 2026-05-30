import {
  require_html2canvas
} from "./chunk-J7MNQZVK.js";
import {
  E
} from "./chunk-AIO5OERH.js";
import "./chunk-7YWLATDR.js";
import {
  ApiService,
  estVivant,
  extractAnnee,
  getAgeLabel,
  getInitiales,
  getNomComplet,
  getPhotoUrl
} from "./chunk-ICIYOYFR.js";
import {
  ThemeService
} from "./chunk-FXQQZUJZ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-2GNQ7GWJ.js";
import {
  API_BASE_URL,
  ActivatedRoute,
  AuthService,
  CommonModule,
  Component,
  DecimalPipe,
  ElementRef,
  EventEmitter,
  HostListener,
  HttpClient,
  Input,
  NavigationEnd,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Output,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  ViewChild,
  filter,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-3JURVHRC.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-YP43Q66R.js";

// src/app/shell/sidebar/sidebar.component.ts
function SidebarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "span", 4);
    \u0275\u0275text(3, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "Mam Buudu");
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_a_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function SidebarComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function SidebarComponent_a_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mobileClose.emit());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SidebarComponent_a_7_span_3_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r3.route)("title", !ctx_r1.isExpanded ? item_r3.label : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isExpanded);
  }
}
function SidebarComponent_div_9_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function SidebarComponent_div_9_button_4_Template_button_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.themeService.applyColor(t_r5.name));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", t_r5.color);
    \u0275\u0275classProp("active", ctx_r1.themeService.current === t_r5.name);
    \u0275\u0275property("title", t_r5.label);
  }
}
function SidebarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2, "Th\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275template(4, SidebarComponent_div_9_button_4_Template, 1, 5, "button", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.themeService.themes);
  }
}
function SidebarComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Page d'accueil");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Administration");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "D\xE9connexion");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.user == null ? null : ctx_r1.user.prenom, " ", ctx_r1.user == null ? null : ctx_r1.user.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.user == null ? null : ctx_r1.user.role);
  }
}
function SidebarComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
var SidebarComponent = class _SidebarComponent {
  auth;
  router;
  themeService;
  isExpanded = true;
  mobileOpen = false;
  mobileClose = new EventEmitter();
  navItems = [
    { icon: "home", label: "Accueil", route: "/app/home" },
    { icon: "account_tree", label: "Arbre familial", route: "/app/tree" },
    { icon: "people", label: "Personnes", route: "/app/personnes" },
    { icon: "favorite", label: "Unions", route: "/app/unions" },
    { icon: "collections_bookmark", label: "Stories", route: "/app/stories" },
    { icon: "timeline", label: "Timeline", route: "/app/timeline" },
    { icon: "sports_esports", label: "Jeux", route: "/app/jeux" },
    { icon: "group_add", label: "Inviter", route: "/app/inviter" }
  ];
  constructor(auth, router, themeService) {
    this.auth = auth;
    this.router = router;
    this.themeService = themeService;
  }
  get user() {
    return this.auth.getUser();
  }
  get initiales() {
    const u = this.user;
    if (!u)
      return "MB";
    return `${u.prenom.charAt(0)}${u.nom.charAt(0)}`.toUpperCase();
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { mobileOpen: "mobileOpen" }, outputs: { mobileClose: "mobileClose" }, standalone: false, decls: 29, vars: 20, consts: [[1, "sidebar"], [1, "sidebar-header"], ["class", "brand", 4, "ngIf"], [1, "toggle-btn", 3, "click", "title"], [1, "material-icons-round"], [1, "nav-section"], ["routerLinkActive", "active", "class", "nav-item", 3, "routerLink", "title", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-spacer"], ["class", "theme-picker", 4, "ngIf"], [1, "separator"], ["routerLink", "/", 1, "nav-item", "nav-home-link", 3, "click", "title"], [1, "nav-icon", "material-icons-round"], ["class", "nav-label", 4, "ngIf"], ["routerLink", "/app/admin", "routerLinkActive", "active", 1, "nav-item", 3, "click", "title"], [1, "nav-item", "nav-btn", "logout-btn", 3, "click", "title"], ["routerLink", "/app/profil", "title", "Mon profil", 1, "user-section", 3, "click"], [1, "avatar", "avatar-sm"], ["class", "user-info", 4, "ngIf"], ["class", "material-icons-round user-profile-arrow", 4, "ngIf"], [1, "brand"], [1, "brand-icon-wrap"], [1, "brand-text"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink", "title"], [1, "nav-label"], [1, "theme-picker"], [1, "theme-picker-label"], [1, "theme-dots"], ["class", "theme-dot", 3, "background", "active", "title", "click", 4, "ngFor", "ngForOf"], [1, "theme-dot", 3, "click", "title"], [1, "user-info"], [1, "user-name"], [1, "user-role", "badge", "badge-primary"], [1, "material-icons-round", "user-profile-arrow"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1);
      \u0275\u0275template(2, SidebarComponent_div_2_Template, 6, 0, "div", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_3_listener() {
        return ctx.toggle();
      });
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, SidebarComponent_a_7_Template, 4, 4, "a", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "div", 7);
      \u0275\u0275template(9, SidebarComponent_div_9_Template, 5, 1, "div", 8);
      \u0275\u0275element(10, "div", 9);
      \u0275\u0275elementStart(11, "div", 5)(12, "a", 10);
      \u0275\u0275listener("click", function SidebarComponent_Template_a_click_12_listener() {
        return ctx.mobileClose.emit();
      });
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14, "language");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, SidebarComponent_span_15_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 13);
      \u0275\u0275listener("click", function SidebarComponent_Template_a_click_16_listener() {
        return ctx.mobileClose.emit();
      });
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18, "admin_panel_settings");
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, SidebarComponent_span_19_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 14);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_20_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(21, "span", 11);
      \u0275\u0275text(22, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, SidebarComponent_span_23_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "a", 15);
      \u0275\u0275listener("click", function SidebarComponent_Template_a_click_24_listener() {
        return ctx.mobileClose.emit();
      });
      \u0275\u0275elementStart(25, "div", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, SidebarComponent_div_27_Template, 5, 3, "div", 17)(28, SidebarComponent_span_28_Template, 2, 0, "span", 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("expanded", ctx.isExpanded)("mobile-open", ctx.mobileOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isExpanded);
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.isExpanded ? "R\xE9duire" : "Agrandir");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isExpanded ? "menu_open" : "menu");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.navItems);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isExpanded);
      \u0275\u0275advance(3);
      \u0275\u0275property("title", !ctx.isExpanded ? "Page d'accueil" : "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isExpanded);
      \u0275\u0275advance();
      \u0275\u0275property("title", !ctx.isExpanded ? "Admin" : "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isExpanded);
      \u0275\u0275advance();
      \u0275\u0275property("title", !ctx.isExpanded ? "D\xE9connexion" : "");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isExpanded);
      \u0275\u0275advance();
      \u0275\u0275classProp("collapsed", !ctx.isExpanded);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.initiales);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isExpanded);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isExpanded);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-collapsed);\n  height: 100vh;\n  background: var(--sb-bg, #F8FAFC);\n  border-right: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  transition: width var(--transition-slow);\n  overflow: hidden;\n  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.08);\n  position: relative;\n  z-index: 100;\n}\n.sidebar.expanded[_ngcontent-%COMP%] {\n  width: var(--sidebar-expanded);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 10px 14px 12px;\n  min-height: 64px;\n  border-bottom: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  flex-shrink: 0;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n  flex: 1;\n}\n.brand-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: var(--sb-icon-wrap, rgba(0, 0, 0, 0.07));\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.brand-icon-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 18px !important;\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--sb-text-hi, #1E293B);\n  white-space: nowrap;\n  letter-spacing: -0.2px;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: var(--sb-toggle-color, #64748B);\n  transition: var(--transition);\n  flex-shrink: 0;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n  color: var(--sb-text-hi, #1E293B);\n}\n.toggle-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.sidebar[_ngcontent-%COMP%]:not(.expanded)   .sidebar-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 14px 0;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  color: var(--sb-text-mid, #475569);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  text-decoration: none;\n  transition: background var(--transition), color var(--transition);\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  width: 100%;\n  text-align: left;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  flex-shrink: 0;\n  opacity: 0.7;\n  transition: opacity var(--transition);\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n  color: var(--sb-text-hi, #1E293B);\n  text-decoration: none;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sb-active-bg, rgba(0, 0, 0, 0.07));\n  color: var(--sb-text-hi, #1E293B);\n  font-weight: 600;\n  box-shadow: inset 3px 0 0 var(--sb-active-mark, var(--primary));\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--sb-active-mark, var(--primary));\n}\n.sidebar[_ngcontent-%COMP%]:not(.expanded)   .nav-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 10px 0;\n}\n.nav-home-link[_ngcontent-%COMP%] {\n  color: var(--sb-text-lo, #94A3B8) !important;\n}\n.nav-home-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  color: var(--sb-text-lo, #94A3B8) !important;\n}\n.nav-home-link[_ngcontent-%COMP%]:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05)) !important;\n  color: var(--sb-text-mid, #475569) !important;\n}\n.nav-home-link[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--sb-text-mid, #475569) !important;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sb-logout-hover-bg, rgba(239, 68, 68, 0.1)) !important;\n  color: var(--sb-logout-hover-text, #DC2626) !important;\n}\n.logout-btn[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--sb-logout-hover-text, #DC2626) !important;\n  opacity: 1;\n}\n.theme-picker[_ngcontent-%COMP%] {\n  padding: 10px 16px 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.theme-picker-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--sb-text-lo, #94A3B8);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.theme-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.theme-dot[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2.5px solid transparent;\n  cursor: pointer;\n  transition: transform 0.15s, border-color 0.15s;\n  flex-shrink: 0;\n  padding: 0;\n}\n.theme-dot[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.theme-dot.active[_ngcontent-%COMP%] {\n  border-color: var(--sb-text-hi, #1E293B);\n  transform: scale(1.15);\n  box-shadow: 0 0 0 2px var(--sb-divider, rgba(0, 0, 0, 0.08));\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.separator[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--sb-divider, rgba(0, 0, 0, 0.08));\n  margin: 4px 10px 8px;\n  flex-shrink: 0;\n}\n.user-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-top: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  flex-shrink: 0;\n  min-height: 60px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: background 0.15s;\n  border-radius: 0 0 var(--radius-lg, 12px) var(--radius-lg, 12px);\n}\n.user-section[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n}\n.user-section.collapsed[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 12px 0;\n}\n.user-profile-arrow[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--sb-text-muted, #94A3B8);\n  flex-shrink: 0;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.user-section[_ngcontent-%COMP%]:hover   .user-profile-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  flex: 1;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--sb-text-hi, #1E293B);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  align-self: flex-start;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 260px !important;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    z-index: 300;\n    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.18);\n  }\n  .sidebar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n    padding: 12px 16px !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    justify-content: space-between !important;\n    padding: 14px 12px !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .theme-picker[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .sidebar[_ngcontent-%COMP%]   .user-section[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n    padding: 12px 14px !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: false, template: `<nav class="sidebar" [class.expanded]="isExpanded" [class.mobile-open]="mobileOpen">

  <!-- ===== EN-T\xCATE ===== -->
  <div class="sidebar-header">
    <div class="brand" *ngIf="isExpanded">
      <div class="brand-icon-wrap">
        <span class="material-icons-round">account_tree</span>
      </div>
      <span class="brand-text">Mam Buudu</span>
    </div>
    <button class="toggle-btn" (click)="toggle()" [title]="isExpanded ? 'R\xE9duire' : 'Agrandir'">
      <span class="material-icons-round">{{ isExpanded ? 'menu_open' : 'menu' }}</span>
    </button>
  </div>

  <!-- ===== NAVIGATION PRINCIPALE ===== -->
  <div class="nav-section">
    <a
      *ngFor="let item of navItems"
      [routerLink]="item.route"
      routerLinkActive="active"
      class="nav-item"
      [title]="!isExpanded ? item.label : ''"
      (click)="mobileClose.emit()"
    >
      <span class="nav-icon material-icons-round">{{ item.icon }}</span>
      <span class="nav-label" *ngIf="isExpanded">{{ item.label }}</span>
    </a>
  </div>

  <!-- ===== S\xC9PARATEUR ===== -->
  <div class="sidebar-spacer"></div>

  <!-- ===== S\xC9LECTEUR DE TH\xC8ME ===== -->
  <div class="theme-picker" *ngIf="isExpanded">
    <span class="theme-picker-label">Th\xE8me</span>
    <div class="theme-dots">
      <button
        class="theme-dot"
        *ngFor="let t of themeService.themes"
        [style.background]="t.color"
        [class.active]="themeService.current === t.name"
        (click)="themeService.applyColor(t.name)"
        [title]="t.label"
      ></button>
    </div>
  </div>

  <div class="separator"></div>

  <!-- ===== SECTION ADMIN / D\xC9CONNEXION ===== -->
  <div class="nav-section">
    <a
      routerLink="/"
      class="nav-item nav-home-link"
      [title]="!isExpanded ? 'Page d\\'accueil' : ''"
      (click)="mobileClose.emit()"
    >
      <span class="nav-icon material-icons-round">language</span>
      <span class="nav-label" *ngIf="isExpanded">Page d'accueil</span>
    </a>

    <a
      routerLink="/app/admin"
      routerLinkActive="active"
      class="nav-item"
      [title]="!isExpanded ? 'Admin' : ''"
      (click)="mobileClose.emit()"
    >
      <span class="nav-icon material-icons-round">admin_panel_settings</span>
      <span class="nav-label" *ngIf="isExpanded">Administration</span>
    </a>

    <button class="nav-item nav-btn logout-btn" (click)="logout()" [title]="!isExpanded ? 'D\xE9connexion' : ''">
      <span class="nav-icon material-icons-round">logout</span>
      <span class="nav-label" *ngIf="isExpanded">D\xE9connexion</span>
    </button>
  </div>

  <!-- ===== PROFIL UTILISATEUR ===== -->
  <a class="user-section" [class.collapsed]="!isExpanded" routerLink="/app/profil" (click)="mobileClose.emit()" title="Mon profil">
    <div class="avatar avatar-sm">{{ initiales }}</div>
    <div class="user-info" *ngIf="isExpanded">
      <span class="user-name">{{ user?.prenom }} {{ user?.nom }}</span>
      <span class="user-role badge badge-primary">{{ user?.role }}</span>
    </div>
    <span class="material-icons-round user-profile-arrow" *ngIf="isExpanded">chevron_right</span>
  </a>

</nav>
`, styles: ['@charset "UTF-8";\n\n/* src/app/shell/sidebar/sidebar.component.scss */\n.sidebar {\n  width: var(--sidebar-collapsed);\n  height: 100vh;\n  background: var(--sb-bg, #F8FAFC);\n  border-right: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  transition: width var(--transition-slow);\n  overflow: hidden;\n  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.08);\n  position: relative;\n  z-index: 100;\n}\n.sidebar.expanded {\n  width: var(--sidebar-expanded);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 10px 14px 12px;\n  min-height: 64px;\n  border-bottom: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  flex-shrink: 0;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n  flex: 1;\n}\n.brand-icon-wrap {\n  width: 32px;\n  height: 32px;\n  background: var(--sb-icon-wrap, rgba(0, 0, 0, 0.07));\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.brand-icon-wrap .material-icons-round {\n  color: var(--primary);\n  font-size: 18px !important;\n}\n.brand-text {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--sb-text-hi, #1E293B);\n  white-space: nowrap;\n  letter-spacing: -0.2px;\n}\n.toggle-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: var(--sb-toggle-color, #64748B);\n  transition: var(--transition);\n  flex-shrink: 0;\n}\n.toggle-btn:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n  color: var(--sb-text-hi, #1E293B);\n}\n.toggle-btn .material-icons-round {\n  font-size: 20px !important;\n}\n.sidebar:not(.expanded) .sidebar-header {\n  justify-content: center;\n  padding: 14px 0;\n}\n.nav-section {\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  color: var(--sb-text-mid, #475569);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  text-decoration: none;\n  transition: background var(--transition), color var(--transition);\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  width: 100%;\n  text-align: left;\n}\n.nav-item .nav-icon {\n  font-size: 20px !important;\n  flex-shrink: 0;\n  opacity: 0.7;\n  transition: opacity var(--transition);\n}\n.nav-item .nav-label {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-item:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n  color: var(--sb-text-hi, #1E293B);\n  text-decoration: none;\n}\n.nav-item:hover .nav-icon {\n  opacity: 1;\n}\n.nav-item.active {\n  background: var(--sb-active-bg, rgba(0, 0, 0, 0.07));\n  color: var(--sb-text-hi, #1E293B);\n  font-weight: 600;\n  box-shadow: inset 3px 0 0 var(--sb-active-mark, var(--primary));\n}\n.nav-item.active .nav-icon {\n  opacity: 1;\n  color: var(--sb-active-mark, var(--primary));\n}\n.sidebar:not(.expanded) .nav-item {\n  justify-content: center;\n  padding: 10px 0;\n}\n.nav-home-link {\n  color: var(--sb-text-lo, #94A3B8) !important;\n}\n.nav-home-link .nav-icon {\n  opacity: 1 !important;\n  color: var(--sb-text-lo, #94A3B8) !important;\n}\n.nav-home-link:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05)) !important;\n  color: var(--sb-text-mid, #475569) !important;\n}\n.nav-home-link:hover .nav-icon {\n  color: var(--sb-text-mid, #475569) !important;\n}\n.logout-btn:hover {\n  background: var(--sb-logout-hover-bg, rgba(239, 68, 68, 0.1)) !important;\n  color: var(--sb-logout-hover-text, #DC2626) !important;\n}\n.logout-btn:hover .nav-icon {\n  color: var(--sb-logout-hover-text, #DC2626) !important;\n  opacity: 1;\n}\n.theme-picker {\n  padding: 10px 16px 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.theme-picker-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--sb-text-lo, #94A3B8);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.theme-dots {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.theme-dot {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2.5px solid transparent;\n  cursor: pointer;\n  transition: transform 0.15s, border-color 0.15s;\n  flex-shrink: 0;\n  padding: 0;\n}\n.theme-dot:hover {\n  transform: scale(1.2);\n}\n.theme-dot.active {\n  border-color: var(--sb-text-hi, #1E293B);\n  transform: scale(1.15);\n  box-shadow: 0 0 0 2px var(--sb-divider, rgba(0, 0, 0, 0.08));\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.separator {\n  height: 1px;\n  background: var(--sb-divider, rgba(0, 0, 0, 0.08));\n  margin: 4px 10px 8px;\n  flex-shrink: 0;\n}\n.user-section {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-top: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  flex-shrink: 0;\n  min-height: 60px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: background 0.15s;\n  border-radius: 0 0 var(--radius-lg, 12px) var(--radius-lg, 12px);\n}\n.user-section:hover {\n  background: rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n}\n.user-section.collapsed {\n  justify-content: center;\n  padding: 12px 0;\n}\n.user-profile-arrow {\n  font-size: 16px !important;\n  color: var(--sb-text-muted, #94A3B8);\n  flex-shrink: 0;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.user-section:hover .user-profile-arrow {\n  opacity: 1;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  overflow: hidden;\n  flex: 1;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--sb-text-hi, #1E293B);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role {\n  font-size: 10px;\n  align-self: flex-start;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 260px !important;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    z-index: 300;\n    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.18);\n  }\n  .sidebar .brand {\n    display: flex;\n  }\n  .sidebar .nav-label {\n    display: block !important;\n  }\n  .sidebar .nav-item {\n    justify-content: flex-start !important;\n    padding: 12px 16px !important;\n  }\n  .sidebar .sidebar-header {\n    justify-content: space-between !important;\n    padding: 14px 12px !important;\n  }\n  .sidebar .theme-picker {\n    display: flex;\n  }\n  .sidebar .user-section {\n    justify-content: flex-start !important;\n    padding: 12px 14px !important;\n  }\n  .sidebar .user-info {\n    display: flex;\n  }\n  .sidebar.mobile-open {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ThemeService }], { mobileOpen: [{
    type: Input
  }], mobileClose: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shell/sidebar/sidebar.component.ts", lineNumber: 18 });
})();

// src/app/shell/topbar/topbar.component.ts
function TopbarComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 21);
    \u0275\u0275elementStart(10, "a", 22)(11, "span", 2);
    \u0275\u0275text(12, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Mon profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 23)(15, "span", 2);
    \u0275\u0275text(16, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Page d'accueil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 24)(19, "span", 2);
    \u0275\u0275text(20, "admin_panel_settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Administration ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "div", 21);
    \u0275\u0275elementStart(23, "button", 25);
    \u0275\u0275listener("click", function TopbarComponent_Conditional_29_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(24, "span", 2);
    \u0275\u0275text(25, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " D\xE9connexion ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.initiales);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.user == null ? null : ctx_r1.user.prenom, " ", ctx_r1.user == null ? null : ctx_r1.user.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.user == null ? null : ctx_r1.user.email);
  }
}
var PAGE_LABELS = {
  "/app/home": { label: "Accueil", icon: "home" },
  "/app/tree": { label: "Arbre familial", icon: "account_tree" },
  "/app/personnes": { label: "Personnes", icon: "people" },
  "/app/unions": { label: "Unions", icon: "favorite" },
  "/app/stories": { label: "Stories", icon: "collections_bookmark" },
  "/app/timeline": { label: "Timeline", icon: "timeline" },
  "/app/jeux": { label: "Jeux familiaux", icon: "sports_esports" },
  "/app/admin": { label: "Administration", icon: "admin_panel_settings" },
  "/app/profil": { label: "Mon profil", icon: "account_circle" },
  "/app/inviter": { label: "Inviter", icon: "group_add" }
};
var TopbarComponent = class _TopbarComponent {
  router;
  auth;
  el;
  currentPage = PAGE_LABELS["/app/home"];
  showUserMenu = false;
  menuToggle = new EventEmitter();
  onDocumentClick(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showUserMenu = false;
    }
  }
  constructor(router, auth, el) {
    this.router = router;
    this.auth = auth;
    this.el = el;
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const base = "/" + e.urlAfterRedirects.split("/").slice(1, 3).join("/");
      this.currentPage = PAGE_LABELS[base] ?? { label: "Mam Buudu", icon: "account_tree" };
    });
  }
  get user() {
    return this.auth.getUser();
  }
  get initiales() {
    const u = this.user;
    if (!u)
      return "MB";
    return `${u.prenom.charAt(0)}${u.nom.charAt(0)}`.toUpperCase();
  }
  refresh() {
    const url = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => this.router.navigateByUrl(url));
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["app-topbar"]], hostBindings: function TopbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TopbarComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, outputs: { menuToggle: "menuToggle" }, standalone: false, decls: 30, vars: 7, consts: [[1, "topbar"], ["title", "Menu", 1, "btn-icon", "btn-menu", 3, "click"], [1, "material-icons-round"], [1, "page-title"], [1, "material-icons-round", "page-icon"], [1, "topbar-actions"], ["title", "Actualiser les donn\xE9es", 1, "btn-icon", "btn-refresh", 3, "click"], [1, "btn-icon", "notif-btn"], [1, "notif-badge"], [1, "user-menu-wrap", 3, "click"], [1, "user-btn"], [1, "avatar", "avatar-sm"], [1, "user-btn-info"], [1, "user-btn-name"], [1, "user-btn-role"], [1, "material-icons-round", "chevron"], [1, "user-dropdown"], [1, "dropdown-header"], [1, "avatar", "avatar-md"], [1, "dd-name"], [1, "dd-email"], [1, "dropdown-divider"], ["routerLink", "/app/profil", 1, "dropdown-item"], ["routerLink", "/", 1, "dropdown-item"], ["routerLink", "/app/admin", 1, "dropdown-item"], [1, "dropdown-item", "danger", 3, "click"]], template: function TopbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "button", 1);
      \u0275\u0275listener("click", function TopbarComponent_Template_button_click_1_listener() {
        return ctx.menuToggle.emit();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h3");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
      \u0275\u0275listener("click", function TopbarComponent_Template_button_click_10_listener() {
        return ctx.refresh();
      });
      \u0275\u0275elementStart(11, "span", 2);
      \u0275\u0275text(12, "sync");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7)(14, "span", 2);
      \u0275\u0275text(15, "notifications_none");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 8);
      \u0275\u0275text(17, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275listener("click", function TopbarComponent_Template_div_click_18_listener() {
        return ctx.showUserMenu = !ctx.showUserMenu;
      });
      \u0275\u0275elementStart(19, "button", 10)(20, "div", 11);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12)(23, "span", 13);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 14);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "span", 15);
      \u0275\u0275text(28, "expand_more");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, TopbarComponent_Conditional_29_Template, 27, 4, "div", 16);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.currentPage.icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentPage.label);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.initiales);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.user == null ? null : ctx.user.prenom, " ", ctx.user == null ? null : ctx.user.nom);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.role);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showUserMenu ? 29 : -1);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  height: 60px;\n  background: var(--sidebar-bg, var(--white));\n  border-bottom: 1px solid var(--primary-border);\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  gap: 12px;\n}\n.btn-menu[_ngcontent-%COMP%] {\n  display: none;\n  flex-shrink: 0;\n  color: var(--text-primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.page-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.page-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 20px !important;\n  flex-shrink: 0;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.notif-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 16px;\n  height: 16px;\n  background: var(--error);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n  pointer-events: none;\n}\n.user-menu-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-full);\n  background: var(--white);\n  cursor: pointer;\n  font-family: inherit;\n  transition: var(--transition);\n}\n.user-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border);\n  background: var(--primary-bg);\n}\n.user-btn-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0;\n}\n.user-btn-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.user-btn-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-transform: capitalize;\n}\n.chevron[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--text-muted);\n}\n.user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 240px;\n  background: var(--white);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  z-index: 200;\n  animation: _ngcontent-%COMP%_dropIn 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  background: var(--bg-muted);\n}\n.dd-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.dd-email[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  cursor: pointer;\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-family: inherit;\n  transition: var(--transition);\n}\n.dropdown-item[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-muted);\n  color: var(--text-primary);\n  text-decoration: none;\n}\n.dropdown-item.danger[_ngcontent-%COMP%]:hover {\n  background: var(--error-bg);\n  color: var(--error);\n}\n@media (max-width: 768px) {\n  .topbar[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .btn-menu[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .user-btn-info[_ngcontent-%COMP%], \n   .chevron[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-btn[_ngcontent-%COMP%] {\n    padding: 4px;\n    border: none;\n    background: transparent;\n    gap: 0;\n  }\n  .btn-refresh[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=topbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarComponent, [{
    type: Component,
    args: [{ selector: "app-topbar", standalone: false, template: `<header class="topbar">

  <!-- Bouton hamburger (mobile seulement) -->
  <button class="btn-icon btn-menu" (click)="menuToggle.emit()" title="Menu">
    <span class="material-icons-round">menu</span>
  </button>

  <!-- Titre de la page -->
  <div class="page-title">
    <span class="material-icons-round page-icon">{{ currentPage.icon }}</span>
    <h3>{{ currentPage.label }}</h3>
  </div>

  <!-- Actions \xE0 droite -->
  <div class="topbar-actions">

    <!-- Bouton actualiser -->
    <button class="btn-icon btn-refresh" (click)="refresh()" title="Actualiser les donn\xE9es">
      <span class="material-icons-round">sync</span>
    </button>

    <!-- Bouton notifications -->
    <button class="btn-icon notif-btn">
      <span class="material-icons-round">notifications_none</span>
      <span class="notif-badge">3</span>
    </button>

    <!-- Avatar + menu user -->
    <div class="user-menu-wrap" (click)="showUserMenu = !showUserMenu">
      <button class="user-btn">
        <div class="avatar avatar-sm">{{ initiales }}</div>
        <div class="user-btn-info">
          <span class="user-btn-name">{{ user?.prenom }} {{ user?.nom }}</span>
          <span class="user-btn-role">{{ user?.role }}</span>
        </div>
        <span class="material-icons-round chevron">expand_more</span>
      </button>

      @if (showUserMenu) {
        <div class="user-dropdown">
          <div class="dropdown-header">
            <div class="avatar avatar-md">{{ initiales }}</div>
            <div>
              <span class="dd-name">{{ user?.prenom }} {{ user?.nom }}</span>
              <span class="dd-email">{{ user?.email }}</span>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" routerLink="/app/profil">
            <span class="material-icons-round">account_circle</span>
            Mon profil
          </a>
          <a class="dropdown-item" routerLink="/">
            <span class="material-icons-round">language</span>
            Page d'accueil
          </a>
          <a class="dropdown-item" routerLink="/app/admin">
            <span class="material-icons-round">admin_panel_settings</span>
            Administration
          </a>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item danger" (click)="logout()">
            <span class="material-icons-round">logout</span>
            D\xE9connexion
          </button>
        </div>
      }
    </div>

  </div>
</header>
`, styles: ['@charset "UTF-8";\n\n/* src/app/shell/topbar/topbar.component.scss */\n.topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  height: 60px;\n  background: var(--sidebar-bg, var(--white));\n  border-bottom: 1px solid var(--primary-border);\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  gap: 12px;\n}\n.btn-menu {\n  display: none;\n  flex-shrink: 0;\n  color: var(--text-primary);\n}\n.page-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.page-title h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.page-icon {\n  color: var(--primary);\n  font-size: 20px !important;\n  flex-shrink: 0;\n}\n.topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.notif-btn {\n  position: relative;\n}\n.notif-badge {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 16px;\n  height: 16px;\n  background: var(--error);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n  pointer-events: none;\n}\n.user-menu-wrap {\n  position: relative;\n}\n.user-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-full);\n  background: var(--white);\n  cursor: pointer;\n  font-family: inherit;\n  transition: var(--transition);\n}\n.user-btn:hover {\n  border-color: var(--primary-border);\n  background: var(--primary-bg);\n}\n.user-btn-info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0;\n}\n.user-btn-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.user-btn-role {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-transform: capitalize;\n}\n.chevron {\n  font-size: 16px !important;\n  color: var(--text-muted);\n}\n.user-dropdown {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 240px;\n  background: var(--white);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  z-index: 200;\n  animation: dropIn 0.15s ease;\n}\n@keyframes dropIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  background: var(--bg-muted);\n}\n.dd-name {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.dd-email {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n}\n.dropdown-divider {\n  height: 1px;\n  background: var(--border);\n}\n.dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  cursor: pointer;\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  width: 100%;\n  font-family: inherit;\n  transition: var(--transition);\n}\n.dropdown-item .material-icons-round {\n  font-size: 18px !important;\n}\n.dropdown-item:hover {\n  background: var(--bg-muted);\n  color: var(--text-primary);\n  text-decoration: none;\n}\n.dropdown-item.danger:hover {\n  background: var(--error-bg);\n  color: var(--error);\n}\n@media (max-width: 768px) {\n  .topbar {\n    padding: 0 16px;\n  }\n  .btn-menu {\n    display: flex;\n  }\n  .user-btn-info,\n  .chevron {\n    display: none;\n  }\n  .user-btn {\n    padding: 4px;\n    border: none;\n    background: transparent;\n    gap: 0;\n  }\n  .btn-refresh {\n    display: none;\n  }\n}\n/*# sourceMappingURL=topbar.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: ElementRef }], { menuToggle: [{
    type: Output
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "src/app/shell/topbar/topbar.component.ts", lineNumber: 25 });
})();

// src/app/shell/shell.component.ts
function ShellComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function ShellComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var ShellComponent = class _ShellComponent {
  sidebarOpen = false;
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: false, decls: 7, vars: 4, consts: [[1, "shell"], ["class", "mob-backdrop", 3, "click", 4, "ngIf"], [3, "mobileClose", "mobileOpen"], [1, "shell-right"], [3, "menuToggle"], [1, "shell-main"], [1, "mob-backdrop", 3, "click"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ShellComponent_div_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "app-sidebar", 2);
      \u0275\u0275listener("mobileClose", function ShellComponent_Template_app_sidebar_mobileClose_2_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "app-topbar", 4);
      \u0275\u0275listener("menuToggle", function ShellComponent_Template_app_topbar_menuToggle_4_listener() {
        return ctx.sidebarOpen = !ctx.sidebarOpen;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "main", 5);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("sidebar-open", ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275property("mobileOpen", ctx.sidebarOpen);
    }
  }, dependencies: [NgIf, RouterOutlet, SidebarComponent, TopbarComponent], styles: ["\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg-app);\n}\n.shell-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n.shell-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 28px 32px;\n}\n.mob-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 250;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n@media (max-width: 768px) {\n  .mob-backdrop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .shell-main[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellComponent, [{
    type: Component,
    args: [{ selector: "app-shell", standalone: false, template: '<div class="shell" [class.sidebar-open]="sidebarOpen">\n  <div class="mob-backdrop" *ngIf="sidebarOpen" (click)="sidebarOpen=false"></div>\n  <app-sidebar [mobileOpen]="sidebarOpen" (mobileClose)="sidebarOpen=false"></app-sidebar>\n  <div class="shell-right">\n    <app-topbar (menuToggle)="sidebarOpen = !sidebarOpen"></app-topbar>\n    <main class="shell-main">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n', styles: ["/* src/app/shell/shell.component.scss */\n.shell {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg-app);\n}\n.shell-right {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n.shell-main {\n  flex: 1;\n  overflow-y: auto;\n  padding: 28px 32px;\n}\n.mob-backdrop {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 250;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n@media (max-width: 768px) {\n  .mob-backdrop {\n    display: block;\n  }\n  .shell-main {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/shell/shell.component.ts", lineNumber: 9 });
})();

// src/app/pages/home/home.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => ["/app/personnes"];
var _c2 = (a0) => ({ id: a0 });
function HomeComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Bienvenue dans l'espace familial ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.nomFamille);
  }
}
function HomeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 23)(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("stat-card--" + s_r2.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.loading ? "\u2026" : s_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.label);
  }
}
function HomeComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 8);
    \u0275\u0275text(3, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Compl\xE9tion des profils ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8, "\u2014 dates & lieux renseign\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 29);
    \u0275\u0275element(10, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.completionScore, "%");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r0.completionScore, "%");
  }
}
function HomeComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275classMap("quick-action--" + a_r3.color);
    \u0275\u0275property("routerLink", a_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.label);
  }
}
function HomeComponent_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38)(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("male", b_r4.p.sexe === "M")("female", b_r4.p.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitiales(b_r4.p), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getNomComplet(b_r4.p));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.dateStr);
    \u0275\u0275advance();
    \u0275\u0275classProp("soon", b_r4.jours <= 7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r4.jours === 0 ? "Aujourd'hui !" : b_r4.jours === 1 ? "Demain !" : b_r4.jours + "j", " ");
  }
}
function HomeComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 12)(2, "h3")(3, "span", 33);
    \u0275\u0275text(4, "cake");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Anniversaires \xE0 venir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275template(7, HomeComponent_div_23_div_7_Template, 10, 10, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.anniversairesProches);
  }
}
function HomeComponent_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "div", 49);
    \u0275\u0275elementStart(2, "div", 50);
    \u0275\u0275element(3, "div", 51)(4, "div", 45)(5, "div", 52);
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275element(2, "div", 44)(3, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46);
    \u0275\u0275template(5, HomeComponent_div_24_div_5_Template, 6, 0, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function HomeComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Membres r\xE9cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 53)(4, "div", 54)(5, "button", 55);
    \u0275\u0275listener("click", function HomeComponent_div_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewMode = "cards");
    });
    \u0275\u0275elementStart(6, "span", 8);
    \u0275\u0275text(7, "grid_view");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 56);
    \u0275\u0275listener("click", function HomeComponent_div_25_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewMode = "list");
    });
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "view_list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "a", 57);
    \u0275\u0275text(12, "Voir tous");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r0.viewMode === "cards");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.viewMode === "list");
  }
}
function HomeComponent_div_26_div_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 77);
    \u0275\u0275listener("error", function HomeComponent_div_26_div_1_img_5_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPhotoError(p_r7.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getPhotoUrl(p_r7), \u0275\u0275sanitizeUrl)("alt", ctx_r0.getNomComplet(p_r7));
  }
}
function HomeComponent_div_26_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitiales(p_r7), " ");
  }
}
function HomeComponent_div_26_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 8);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r7.lieuNaissance, " ");
  }
}
function HomeComponent_div_26_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_26_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275element(2, "div", 62)(3, "span", 63);
    \u0275\u0275elementStart(4, "div", 64);
    \u0275\u0275template(5, HomeComponent_div_26_div_1_img_5_Template, 1, 2, "img", 65)(6, HomeComponent_div_26_div_1_div_6_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 67)(8, "h4", 68);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 69);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, HomeComponent_div_26_div_1_div_12_Template, 4, 1, "div", 70);
    \u0275\u0275elementStart(13, "div", 71);
    \u0275\u0275template(14, HomeComponent_div_26_div_1_span_14_Template, 2, 0, "span", 72)(15, HomeComponent_div_26_div_1_span_15_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 74)(17, "button", 75)(18, "span", 8);
    \u0275\u0275text(19, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "Like ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 76)(22, "span", 8);
    \u0275\u0275text(23, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "Voir ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pc-male", p_r7.sexe === "M")("pc-female", p_r7.sexe === "F");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("color-1", i_r8 % 3 === 0)("color-2", i_r8 % 3 === 1)("color-3", i_r8 % 3 === 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("alive", ctx_r0.estVivant(p_r7))("dead", !ctx_r0.estVivant(p_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getPhotoUrl(p_r7) && !ctx_r0.failedPhotos.has(p_r7.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getPhotoUrl(p_r7) || ctx_r0.failedPhotos.has(p_r7.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getNomComplet(p_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("pc-age-unknown", !ctx_r0.getAgeLabel(p_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAgeLabel(p_r7) || "Naissance inconnue", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.estVivant(p_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.estVivant(p_r7));
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c1))("queryParams", \u0275\u0275pureFunction1(26, _c2, p_r7.id));
  }
}
function HomeComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, HomeComponent_div_26_div_1_Template, 25, 28, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.recentPersonnes);
  }
}
function HomeComponent_div_27_div_12_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 107);
    \u0275\u0275listener("error", function HomeComponent_div_27_div_12_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r9);
      const p_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPhotoError(p_r10.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getPhotoUrl(p_r10), \u0275\u0275sanitizeUrl)("alt", ctx_r0.getNomComplet(p_r10));
  }
}
function HomeComponent_div_27_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", p_r10.sexe === "M")("female", p_r10.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getInitiales(p_r10));
  }
}
function HomeComponent_div_27_div_12_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109)(1, "span", 8);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r10.lieuNaissance, " ");
  }
}
function HomeComponent_div_27_div_12_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_27_div_12_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_27_div_12_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_27_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 92);
    \u0275\u0275template(3, HomeComponent_div_27_div_12_img_3_Template, 1, 2, "img", 93)(4, HomeComponent_div_27_div_12_div_4_Template, 2, 5, "div", 94);
    \u0275\u0275element(5, "span", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 96)(7, "span", 97);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 98);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 99)(12, "span", 100);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 101);
    \u0275\u0275template(15, HomeComponent_div_27_div_12_span_15_Template, 4, 1, "span", 102)(16, HomeComponent_div_27_div_12_span_16_Template, 2, 0, "span", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 104);
    \u0275\u0275template(18, HomeComponent_div_27_div_12_span_18_Template, 2, 0, "span", 72)(19, HomeComponent_div_27_div_12_span_19_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 105)(21, "a", 106)(22, "span", 8);
    \u0275\u0275text(23, "visibility");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.getPhotoUrl(p_r10) && !ctx_r0.failedPhotos.has(p_r10.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getPhotoUrl(p_r10) || ctx_r0.failedPhotos.has(p_r10.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("alive", ctx_r0.estVivant(p_r10))("dead", !ctx_r0.estVivant(p_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getNomComplet(p_r10));
    \u0275\u0275advance();
    \u0275\u0275classProp("pc-age-unknown", !ctx_r0.getAgeLabel(p_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAgeLabel(p_r10) || "Naissance inconnue", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pc-badge-m", p_r10.sexe === "M")("pc-badge-f", p_r10.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r10.sexe === "M" ? "Homme" : p_r10.sexe === "F" ? "Femme" : "Autre", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r10.lieuNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r10.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.estVivant(p_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.estVivant(p_r10));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c1))("queryParams", \u0275\u0275pureFunction1(22, _c2, p_r10.id));
  }
}
function HomeComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "span", 84);
    \u0275\u0275text(3, "Personne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 85);
    \u0275\u0275text(5, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 86);
    \u0275\u0275text(7, "Lieu de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 87);
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 88);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, HomeComponent_div_27_div_12_Template, 24, 24, "div", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.recentPersonnes);
  }
}
function HomeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "span", 8);
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucun membre encore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Commencez par ajouter des personnes \xE0 votre famille.");
    \u0275\u0275elementEnd()();
  }
}
var HomeComponent = class _HomeComponent {
  api;
  auth;
  router;
  getInitiales = getInitiales;
  estVivant = estVivant;
  extractAnnee = extractAnnee;
  getAgeLabel = getAgeLabel;
  getNomComplet = getNomComplet;
  getPhotoUrl = getPhotoUrl;
  nomFamille = "";
  familleCode = "";
  loading = true;
  stats = [
    { icon: "people", label: "Membres", value: 0, color: "blue" },
    { icon: "account_tree", label: "G\xE9n\xE9rations", value: 0, color: "indigo" },
    { icon: "favorite", label: "Unions", value: 0, color: "pink" },
    { icon: "collections_bookmark", label: "Stories", value: 0, color: "green" }
  ];
  toutes = [];
  recentPersonnes = [];
  failedPhotos = /* @__PURE__ */ new Set();
  viewMode = "cards";
  onPhotoError(id) {
    this.failedPhotos.add(id);
  }
  quickActions = [
    { icon: "person_add", label: "Ajouter un membre", route: "/app/personnes", color: "blue" },
    { icon: "account_tree", label: "Voir l'arbre", route: "/app/tree", color: "indigo" },
    { icon: "favorite", label: "Voir les unions", route: "/app/unions", color: "pink" },
    { icon: "sports_esports", label: "Jouer", route: "/app/jeux", color: "green" }
  ];
  constructor(api, auth, router) {
    this.api = api;
    this.auth = auth;
    this.router = router;
  }
  ngOnInit() {
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions: this.api.getUnions(),
      famille: this.api.getCurrentFamille()
    }).subscribe({
      next: ({ personnes, unions, famille }) => {
        const f = famille.famille ?? famille;
        this.nomFamille = f.nom ?? "";
        this.familleCode = f.code ?? f.codeUnique ?? "";
        this.toutes = personnes;
        this.stats[0].value = personnes.length;
        this.stats[2].value = unions.length;
        const annees = personnes.map((p) => extractAnnee(p.dateNaissance)).filter((a) => a !== null);
        if (annees.length > 0) {
          const min = Math.min(...annees);
          const max = Math.max(...annees);
          this.stats[1].value = Math.max(1, Math.round((max - min) / 25));
        }
        this.recentPersonnes = [...personnes].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 8);
        this.failedPhotos.clear();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  get completionScore() {
    if (!this.toutes.length)
      return 0;
    const withDate = this.toutes.filter((p) => !!p.dateNaissance).length;
    const withLieu = this.toutes.filter((p) => !!p.lieuNaissance).length;
    return Math.round((withDate + withLieu) / (this.toutes.length * 2) * 100);
  }
  get anniversairesProches() {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return this.toutes.filter((p) => estVivant(p) && p.dateNaissance && /\d{4}-\d{2}-\d{2}/.test(p.dateNaissance)).map((p) => {
      const match = p.dateNaissance.match(/\d{4}-(\d{2})-(\d{2})/);
      if (!match)
        return null;
      const month = parseInt(match[1]) - 1;
      const day = parseInt(match[2]);
      const yr = today.getFullYear();
      let next = new Date(yr, month, day);
      if (next < today)
        next = new Date(yr + 1, month, day);
      const jours = Math.round((next.getTime() - today.getTime()) / 864e5);
      const dateStr = next.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
      return { p, jours, dateStr };
    }).filter((x) => x !== null && x.jours <= 60).sort((a, b) => a.jours - b.jours).slice(0, 5);
  }
  shareWhatsApp() {
    const msg = `Rejoignez l'arbre familial de la famille *${this.nomFamille}* sur Mam Buudu
Code : *${this.familleCode}*`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: false, decls: 29, vars: 10, consts: [[1, "page-header"], [1, "header-row"], [4, "ngIf"], [1, "header-actions"], ["routerLink", "/app/inviter", "title", "Inviter des membres", 1, "btn-invite"], ["viewBox", "0 0 24 24", "fill", "currentColor", 2, "width", "15px", "height", "15px", "flex-shrink", "0"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"], ["routerLink", "/app/personnes", 1, "btn-primary"], [1, "material-icons-round"], [1, "stats-grid", "mb-16"], ["class", "stat-card", 3, "class", 4, "ngFor", "ngForOf"], ["class", "completion-bar-wrap mb-32", 4, "ngIf"], [1, "section-header", "mb-16"], [1, "quick-actions", "mb-32"], ["class", "quick-action", 3, "routerLink", "class", 4, "ngFor", "ngForOf"], ["class", "mb-32", 4, "ngIf"], ["class", "skeleton-section mb-32", 4, "ngIf"], ["class", "section-header mb-16", 4, "ngIf"], ["class", "pc-grid", 4, "ngIf"], ["class", "pl-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "stat-card"], [1, "stat-icon-wrap"], [1, "stat-body"], [1, "stat-value"], [1, "stat-label"], [1, "completion-bar-wrap", "mb-32"], [1, "completion-label"], [1, "completion-hint"], [1, "completion-track"], [1, "completion-fill"], [1, "quick-action", 3, "routerLink"], [1, "mb-32"], [1, "material-icons-round", 2, "vertical-align", "middle", "color", "#DB2777", "font-size", "20px!important"], [1, "bday-row"], ["class", "bday-card", 4, "ngFor", "ngForOf"], [1, "bday-card"], [1, "bday-avatar"], [1, "bday-info"], [1, "bday-name"], [1, "bday-date"], [1, "bday-badge"], [1, "skeleton-section", "mb-32"], [1, "skeleton-header"], [1, "skeleton-bar", "skeleton-bar-title"], [1, "skeleton-bar", "skeleton-bar-sm"], [1, "skeleton-grid"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "skeleton-card-top"], [1, "skeleton-card-body"], [1, "skeleton-bar"], [1, "skeleton-bar", "skeleton-bar-xs"], [1, "section-actions"], [1, "view-toggle"], ["title", "Vue cartes", 1, "vt-btn", 3, "click"], ["title", "Vue liste", 1, "vt-btn", 3, "click"], ["routerLink", "/app/personnes", 1, "btn-secondary", "btn-sm"], [1, "pc-grid"], ["class", "pc-card", 3, "pc-male", "pc-female", 4, "ngFor", "ngForOf"], [1, "pc-card"], [1, "pc-card-banner"], [1, "pc-colorband"], [1, "pc-live-dot"], [1, "pc-avatar-ring"], ["class", "pc-avatar pc-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], ["class", "pc-avatar pc-avatar-initials", 4, "ngIf"], [1, "pc-card-body"], [1, "pc-name"], [1, "pc-age"], ["class", "pc-loc", 4, "ngIf"], [1, "pc-badges"], ["class", "pc-badge pc-badge-alive", 4, "ngIf"], ["class", "pc-badge pc-badge-dead", 4, "ngIf"], [1, "pc-card-actions"], [1, "pc-act"], [1, "pc-act", 3, "routerLink", "queryParams"], [1, "pc-avatar", "pc-avatar-photo", 3, "error", "src", "alt"], [1, "pc-avatar", "pc-avatar-initials"], [1, "pc-loc"], [1, "pc-badge", "pc-badge-alive"], [1, "pc-badge", "pc-badge-dead"], [1, "pl-table"], [1, "pl-thead"], [1, "pl-th", "pl-th-person"], [1, "pl-th", "pl-th-genre"], [1, "pl-th", "pl-th-lieu"], [1, "pl-th", "pl-th-statut"], [1, "pl-th", "pl-th-actions"], ["class", "pl-row", 4, "ngFor", "ngForOf"], [1, "pl-row"], [1, "pl-cell", "pl-cell-person"], [1, "pl-avatar-wrap"], ["class", "pl-avatar pl-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], ["class", "pl-avatar pl-avatar-initials", 3, "male", "female", 4, "ngIf"], [1, "pl-status-dot"], [1, "pl-person-info"], [1, "pl-person-name"], [1, "pl-person-age"], [1, "pl-cell", "pl-cell-genre"], [1, "pc-badge"], [1, "pl-cell", "pl-cell-lieu"], ["class", "pl-lieu", 4, "ngIf"], ["class", "pl-empty", 4, "ngIf"], [1, "pl-cell", "pl-cell-statut"], [1, "pl-cell", "pl-cell-actions"], ["title", "Voir", 1, "btn-icon", 3, "routerLink", "queryParams"], [1, "pl-avatar", "pl-avatar-photo", 3, "error", "src", "alt"], [1, "pl-avatar", "pl-avatar-initials"], [1, "pl-lieu"], [1, "pl-empty"], [1, "empty-state"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275text(4, "Bonjour \u{1F44B}");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, HomeComponent_p_5_Template, 4, 1, "p", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "button", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Inviter ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "button", 7)(12, "span", 8);
      \u0275\u0275text(13, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Ajouter un membre ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275template(16, HomeComponent_div_16_Template, 9, 5, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, HomeComponent_div_17_Template, 11, 3, "div", 11);
      \u0275\u0275elementStart(18, "div", 12)(19, "h3");
      \u0275\u0275text(20, "Actions rapides");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 13);
      \u0275\u0275template(22, HomeComponent_a_22_Template, 5, 5, "a", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, HomeComponent_div_23_Template, 8, 1, "div", 15)(24, HomeComponent_div_24_Template, 6, 2, "div", 16)(25, HomeComponent_div_25_Template, 13, 4, "div", 17)(26, HomeComponent_div_26_Template, 2, 1, "div", 18)(27, HomeComponent_div_27_Template, 13, 1, "div", 19)(28, HomeComponent_div_28_Template, 7, 0, "div", 20);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.nomFamille);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.toutes.length > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.quickActions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.anniversairesProches.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.recentPersonnes.length > 0 && ctx.viewMode === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.recentPersonnes.length > 0 && ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.recentPersonnes.length === 0);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink], styles: ["\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.header-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.header-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-light);\n  box-shadow: var(--shadow-sm);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: box-shadow var(--transition), transform var(--transition);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n.stat-card--blue[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n}\n.stat-card--blue[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.stat-card--indigo[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] {\n  background: var(--accent-bg);\n}\n.stat-card--indigo[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.stat-card--pink[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] {\n  background: var(--pink-bg);\n}\n.stat-card--pink[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--pink);\n}\n.stat-card--green[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n}\n.stat-card--green[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  font-weight: 500;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.quick-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: var(--radius-full);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: var(--transition);\n}\n.quick-action[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.quick-action--blue[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary-dark);\n}\n.quick-action--blue[_ngcontent-%COMP%]:hover {\n  background: var(--primary-border);\n  text-decoration: none;\n}\n.quick-action--indigo[_ngcontent-%COMP%] {\n  background: var(--accent-bg);\n  color: var(--accent);\n}\n.quick-action--indigo[_ngcontent-%COMP%]:hover {\n  background: #DDD6FE;\n  text-decoration: none;\n}\n.quick-action--pink[_ngcontent-%COMP%] {\n  background: var(--pink-bg);\n  color: var(--pink);\n}\n.quick-action--pink[_ngcontent-%COMP%]:hover {\n  background: #FBCFE8;\n  text-decoration: none;\n}\n.quick-action--green[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.quick-action--green[_ngcontent-%COMP%]:hover {\n  background: #A7F3D0;\n  text-decoration: none;\n}\n.section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-invite[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 16px;\n  border-radius: var(--radius-md);\n  border: 1.5px solid #86EFAC;\n  background: #DCFCE7;\n  color: #15803D;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.btn-invite[_ngcontent-%COMP%]:hover {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n  text-decoration: none;\n}\n.completion-bar-wrap[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 14px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.completion-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.completion-label[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--primary);\n}\n.completion-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 700;\n}\n.completion-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.completion-track[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 99px;\n  background: var(--border-light);\n  overflow: hidden;\n}\n.completion-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      #A78BFA);\n  transition: width 0.8s ease;\n}\n.bday-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  scrollbar-width: none;\n}\n.bday-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.bday-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: var(--white);\n  border: 1px solid #FBE8F3;\n  border-radius: var(--radius-lg);\n  min-width: 200px;\n  flex-shrink: 0;\n  transition: box-shadow var(--transition);\n}\n.bday-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(219, 39, 119, 0.12);\n}\n.bday-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.bday-avatar.male[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #60A5FA,\n      #3B82F6);\n}\n.bday-avatar.female[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F472B6,\n      #EC4899);\n}\n.bday-avatar[_ngcontent-%COMP%]:not(.male):not(.female) {\n  background:\n    linear-gradient(\n      135deg,\n      #A78BFA,\n      var(--primary));\n}\n.bday-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.bday-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bday-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.bday-badge[_ngcontent-%COMP%] {\n  background: #FDF2F8;\n  color: #DB2777;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 7px;\n  white-space: nowrap;\n}\n.bday-badge.soon[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #B45309;\n  animation: _ngcontent-%COMP%_pulse-bday 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-bday {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.06);\n  }\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.skeleton-bar[_ngcontent-%COMP%], \n.skeleton-card-top[_ngcontent-%COMP%], \n.skeleton-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #F3F4F6 25%,\n      #E5E7EB 50%,\n      #F3F4F6 75%);\n  background-size: 800px 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.4s infinite;\n  border-radius: 8px;\n}\n.skeleton-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.skeleton-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.skeleton-bar[_ngcontent-%COMP%] {\n  height: 16px;\n}\n.skeleton-bar-title[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 20px;\n}\n.skeleton-bar-sm[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 14px;\n}\n.skeleton-bar-xs[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 12px;\n}\n.skeleton-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--border-light);\n}\n.skeleton-card-top[_ngcontent-%COMP%] {\n  height: 90px;\n  border-radius: 0;\n  border-bottom: 1px solid var(--border-light);\n}\n.skeleton-card-body[_ngcontent-%COMP%] {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n@media (max-width: 1200px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .header-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .header-row[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .quick-action[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 360px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: false, template: `<!-- ===== EN-T\xCATE ===== -->
<div class="page-header">
  <div class="header-row">
    <div>
      <h2>Bonjour \u{1F44B}</h2>
      <p *ngIf="nomFamille">Bienvenue dans l'espace familial <strong>{{ nomFamille }}</strong></p>
    </div>
    <div class="header-actions">
      <button class="btn-invite" routerLink="/app/inviter" title="Inviter des membres">
        <svg style="width:15px;height:15px;flex-shrink:0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Inviter
      </button>
      <button class="btn-primary" routerLink="/app/personnes">
        <span class="material-icons-round">person_add</span>
        Ajouter un membre
      </button>
    </div>
  </div>
</div>

<!-- ===== STATS ===== -->
<div class="stats-grid mb-16">
  <div class="stat-card" *ngFor="let s of stats" [class]="'stat-card--' + s.color">
    <div class="stat-icon-wrap">
      <span class="material-icons-round">{{ s.icon }}</span>
    </div>
    <div class="stat-body">
      <span class="stat-value">{{ loading ? '\u2026' : s.value }}</span>
      <span class="stat-label">{{ s.label }}</span>
    </div>
  </div>
</div>

<!-- ===== COMPL\xC9TION ===== -->
<div class="completion-bar-wrap mb-32" *ngIf="!loading && toutes.length > 0">
  <div class="completion-label">
    <span class="material-icons-round">bar_chart</span>
    Compl\xE9tion des profils
    <strong>{{ completionScore }}%</strong>
    <span class="completion-hint">\u2014 dates &amp; lieux renseign\xE9s</span>
  </div>
  <div class="completion-track">
    <div class="completion-fill" [style.width.%]="completionScore"></div>
  </div>
</div>

<!-- ===== ACTIONS RAPIDES ===== -->
<div class="section-header mb-16">
  <h3>Actions rapides</h3>
</div>

<div class="quick-actions mb-32">
  <a *ngFor="let a of quickActions" [routerLink]="a.route" class="quick-action" [class]="'quick-action--' + a.color">
    <span class="material-icons-round">{{ a.icon }}</span>
    <span>{{ a.label }}</span>
  </a>
</div>

<!-- ===== ANNIVERSAIRES ===== -->
<div *ngIf="anniversairesProches.length > 0" class="mb-32">
  <div class="section-header mb-16">
    <h3><span class="material-icons-round" style="vertical-align:middle;color:#DB2777;font-size:20px!important">cake</span> Anniversaires \xE0 venir</h3>
  </div>
  <div class="bday-row">
    <div class="bday-card" *ngFor="let b of anniversairesProches">
      <div class="bday-avatar" [class.male]="b.p.sexe === 'M'" [class.female]="b.p.sexe === 'F'">
        {{ getInitiales(b.p) }}
      </div>
      <div class="bday-info">
        <span class="bday-name">{{ getNomComplet(b.p) }}</span>
        <span class="bday-date">{{ b.dateStr }}</span>
      </div>
      <span class="bday-badge" [class.soon]="b.jours <= 7">
        {{ b.jours === 0 ? "Aujourd'hui !" : b.jours === 1 ? 'Demain !' : b.jours + 'j' }}
      </span>
    </div>
  </div>
</div>

<!-- ===== SKELETON CHARGEMENT MEMBRES ===== -->
<div *ngIf="loading" class="skeleton-section mb-32">
  <div class="skeleton-header">
    <div class="skeleton-bar skeleton-bar-title"></div>
    <div class="skeleton-bar skeleton-bar-sm"></div>
  </div>
  <div class="skeleton-grid">
    <div class="skeleton-card" *ngFor="let _ of [1,2,3,4]">
      <div class="skeleton-card-top"></div>
      <div class="skeleton-card-body">
        <div class="skeleton-bar"></div>
        <div class="skeleton-bar skeleton-bar-sm"></div>
        <div class="skeleton-bar skeleton-bar-xs"></div>
      </div>
    </div>
  </div>
</div>

<!-- ===== DERNIERS MEMBRES ===== -->
<div class="section-header mb-16" *ngIf="!loading">
  <h3>Membres r\xE9cents</h3>
  <div class="section-actions">
    <div class="view-toggle">
      <button class="vt-btn" [class.active]="viewMode === 'cards'" (click)="viewMode = 'cards'" title="Vue cartes">
        <span class="material-icons-round">grid_view</span>
      </button>
      <button class="vt-btn" [class.active]="viewMode === 'list'" (click)="viewMode = 'list'" title="Vue liste">
        <span class="material-icons-round">view_list</span>
      </button>
    </div>
    <a routerLink="/app/personnes" class="btn-secondary btn-sm">Voir tous</a>
  </div>
</div>

<!-- ===== VUE CARTES ===== -->
<div class="pc-grid" *ngIf="!loading && recentPersonnes.length > 0 && viewMode === 'cards'">
  <div class="pc-card" *ngFor="let p of recentPersonnes; let i = index"
       [class.pc-male]="p.sexe === 'M'" [class.pc-female]="p.sexe === 'F'">
    <div class="pc-card-banner">
      <div class="pc-colorband"
           [class.color-1]="i % 3 === 0"
           [class.color-2]="i % 3 === 1"
           [class.color-3]="i % 3 === 2"></div>
      <span class="pc-live-dot" [class.alive]="estVivant(p)" [class.dead]="!estVivant(p)"></span>
      <div class="pc-avatar-ring">
        <img *ngIf="getPhotoUrl(p) && !failedPhotos.has(p.id)"
             [src]="getPhotoUrl(p)" class="pc-avatar pc-avatar-photo"
             [alt]="getNomComplet(p)" (error)="onPhotoError(p.id)" />
        <div *ngIf="!getPhotoUrl(p) || failedPhotos.has(p.id)" class="pc-avatar pc-avatar-initials">
          {{ getInitiales(p) }}
        </div>
      </div>
    </div>
    <div class="pc-card-body">
      <h4 class="pc-name">{{ getNomComplet(p) }}</h4>
      <span class="pc-age" [class.pc-age-unknown]="!getAgeLabel(p)">
        {{ getAgeLabel(p) || 'Naissance inconnue' }}
      </span>
      <div class="pc-loc" *ngIf="p.lieuNaissance">
        <span class="material-icons-round">place</span>{{ p.lieuNaissance }}
      </div>
      <div class="pc-badges">
        <span class="pc-badge pc-badge-alive" *ngIf="estVivant(p)">Vivant(e)</span>
        <span class="pc-badge pc-badge-dead"  *ngIf="!estVivant(p)">D\xE9c\xE9d\xE9(e)</span>
      </div>
    </div>
    <div class="pc-card-actions">
      <button class="pc-act">
        <span class="material-icons-round">favorite_border</span>Like
      </button>
      <a class="pc-act" [routerLink]="['/app/personnes']" [queryParams]="{ id: p.id }">
        <span class="material-icons-round">visibility</span>Voir
      </a>
    </div>
  </div>
</div>

<!-- ===== VUE LISTE ===== -->
<div class="pl-table" *ngIf="!loading && recentPersonnes.length > 0 && viewMode === 'list'">
  <div class="pl-thead">
    <span class="pl-th pl-th-person">Personne</span>
    <span class="pl-th pl-th-genre">Genre</span>
    <span class="pl-th pl-th-lieu">Lieu de naissance</span>
    <span class="pl-th pl-th-statut">Statut</span>
    <span class="pl-th pl-th-actions">Actions</span>
  </div>
  <div class="pl-row" *ngFor="let p of recentPersonnes">
    <div class="pl-cell pl-cell-person">
      <div class="pl-avatar-wrap">
        <img *ngIf="getPhotoUrl(p) && !failedPhotos.has(p.id)"
             [src]="getPhotoUrl(p)" class="pl-avatar pl-avatar-photo"
             [alt]="getNomComplet(p)" (error)="onPhotoError(p.id)" />
        <div *ngIf="!getPhotoUrl(p) || failedPhotos.has(p.id)" class="pl-avatar pl-avatar-initials"
             [class.male]="p.sexe === 'M'" [class.female]="p.sexe === 'F'">{{ getInitiales(p) }}</div>
        <span class="pl-status-dot" [class.alive]="estVivant(p)" [class.dead]="!estVivant(p)"></span>
      </div>
      <div class="pl-person-info">
        <span class="pl-person-name">{{ getNomComplet(p) }}</span>
        <span class="pl-person-age" [class.pc-age-unknown]="!getAgeLabel(p)">
          {{ getAgeLabel(p) || 'Naissance inconnue' }}
        </span>
      </div>
    </div>
    <div class="pl-cell pl-cell-genre">
      <span class="pc-badge" [class.pc-badge-m]="p.sexe === 'M'" [class.pc-badge-f]="p.sexe === 'F'">
        {{ p.sexe === 'M' ? 'Homme' : p.sexe === 'F' ? 'Femme' : 'Autre' }}
      </span>
    </div>
    <div class="pl-cell pl-cell-lieu">
      <span *ngIf="p.lieuNaissance" class="pl-lieu">
        <span class="material-icons-round">place</span>{{ p.lieuNaissance }}
      </span>
      <span *ngIf="!p.lieuNaissance" class="pl-empty">\u2014</span>
    </div>
    <div class="pl-cell pl-cell-statut">
      <span class="pc-badge pc-badge-alive" *ngIf="estVivant(p)">Vivant(e)</span>
      <span class="pc-badge pc-badge-dead"  *ngIf="!estVivant(p)">D\xE9c\xE9d\xE9(e)</span>
    </div>
    <div class="pl-cell pl-cell-actions">
      <a class="btn-icon" title="Voir" [routerLink]="['/app/personnes']" [queryParams]="{ id: p.id }">
        <span class="material-icons-round">visibility</span>
      </a>
    </div>
  </div>
</div>

<div class="empty-state" *ngIf="!loading && recentPersonnes.length === 0">
  <span class="material-icons-round">people</span>
  <h3>Aucun membre encore</h3>
  <p>Commencez par ajouter des personnes \xE0 votre famille.</p>
</div>
`, styles: ["/* src/app/pages/home/home.component.scss */\n.header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.header-row h2 {\n  margin-bottom: 4px;\n}\n.header-row p {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.header-row strong {\n  color: var(--text-primary);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-card {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-light);\n  box-shadow: var(--shadow-sm);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: box-shadow var(--transition), transform var(--transition);\n}\n.stat-card:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.stat-icon-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon-wrap .material-icons-round {\n  font-size: 24px !important;\n}\n.stat-card--blue .stat-icon-wrap {\n  background: var(--primary-bg);\n}\n.stat-card--blue .stat-icon-wrap .material-icons-round {\n  color: var(--primary);\n}\n.stat-card--indigo .stat-icon-wrap {\n  background: var(--accent-bg);\n}\n.stat-card--indigo .stat-icon-wrap .material-icons-round {\n  color: var(--accent);\n}\n.stat-card--pink .stat-icon-wrap {\n  background: var(--pink-bg);\n}\n.stat-card--pink .stat-icon-wrap .material-icons-round {\n  color: var(--pink);\n}\n.stat-card--green .stat-icon-wrap {\n  background: var(--success-bg);\n}\n.stat-card--green .stat-icon-wrap .material-icons-round {\n  color: var(--success);\n}\n.stat-body {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.stat-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  font-weight: 500;\n}\n.quick-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.quick-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: var(--radius-full);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  text-decoration: none;\n  transition: var(--transition);\n}\n.quick-action .material-icons-round {\n  font-size: 18px !important;\n}\n.quick-action--blue {\n  background: var(--primary-bg);\n  color: var(--primary-dark);\n}\n.quick-action--blue:hover {\n  background: var(--primary-border);\n  text-decoration: none;\n}\n.quick-action--indigo {\n  background: var(--accent-bg);\n  color: var(--accent);\n}\n.quick-action--indigo:hover {\n  background: #DDD6FE;\n  text-decoration: none;\n}\n.quick-action--pink {\n  background: var(--pink-bg);\n  color: var(--pink);\n}\n.quick-action--pink:hover {\n  background: #FBCFE8;\n  text-decoration: none;\n}\n.quick-action--green {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.quick-action--green:hover {\n  background: #A7F3D0;\n  text-decoration: none;\n}\n.section-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.btn-invite {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 16px;\n  border-radius: var(--radius-md);\n  border: 1.5px solid #86EFAC;\n  background: #DCFCE7;\n  color: #15803D;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  text-decoration: none;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.btn-invite:hover {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n  text-decoration: none;\n}\n.completion-bar-wrap {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 14px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.completion-label {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.completion-label .material-icons-round {\n  font-size: 16px !important;\n  color: var(--primary);\n}\n.completion-label strong {\n  color: var(--text-primary);\n  font-weight: 700;\n}\n.completion-hint {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.completion-track {\n  height: 6px;\n  border-radius: 99px;\n  background: var(--border-light);\n  overflow: hidden;\n}\n.completion-fill {\n  height: 100%;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      #A78BFA);\n  transition: width 0.8s ease;\n}\n.bday-row {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  scrollbar-width: none;\n}\n.bday-row::-webkit-scrollbar {\n  display: none;\n}\n.bday-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: var(--white);\n  border: 1px solid #FBE8F3;\n  border-radius: var(--radius-lg);\n  min-width: 200px;\n  flex-shrink: 0;\n  transition: box-shadow var(--transition);\n}\n.bday-card:hover {\n  box-shadow: 0 4px 14px rgba(219, 39, 119, 0.12);\n}\n.bday-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.bday-avatar.male {\n  background:\n    linear-gradient(\n      135deg,\n      #60A5FA,\n      #3B82F6);\n}\n.bday-avatar.female {\n  background:\n    linear-gradient(\n      135deg,\n      #F472B6,\n      #EC4899);\n}\n.bday-avatar:not(.male):not(.female) {\n  background:\n    linear-gradient(\n      135deg,\n      #A78BFA,\n      var(--primary));\n}\n.bday-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.bday-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bday-date {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.bday-badge {\n  background: #FDF2F8;\n  color: #DB2777;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 7px;\n  white-space: nowrap;\n}\n.bday-badge.soon {\n  background: #FEF3C7;\n  color: #B45309;\n  animation: pulse-bday 1.5s infinite;\n}\n@keyframes pulse-bday {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.06);\n  }\n}\n@keyframes skeleton-shimmer {\n  0% {\n    background-position: -400px 0;\n  }\n  100% {\n    background-position: 400px 0;\n  }\n}\n.skeleton-bar,\n.skeleton-card-top,\n.skeleton-card {\n  background:\n    linear-gradient(\n      90deg,\n      #F3F4F6 25%,\n      #E5E7EB 50%,\n      #F3F4F6 75%);\n  background-size: 800px 100%;\n  animation: skeleton-shimmer 1.4s infinite;\n  border-radius: 8px;\n}\n.skeleton-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.skeleton-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.skeleton-bar {\n  height: 16px;\n}\n.skeleton-bar-title {\n  width: 160px;\n  height: 20px;\n}\n.skeleton-bar-sm {\n  width: 100px;\n  height: 14px;\n}\n.skeleton-bar-xs {\n  width: 70px;\n  height: 12px;\n}\n.skeleton-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.skeleton-card {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--border-light);\n}\n.skeleton-card-top {\n  height: 90px;\n  border-radius: 0;\n  border-bottom: 1px solid var(--border-light);\n}\n.skeleton-card-body {\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n@media (max-width: 1200px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .stats-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .stat-card {\n    padding: 14px;\n  }\n  .stat-value {\n    font-size: 22px;\n  }\n  .header-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .header-row .btn-primary {\n    width: 100%;\n    justify-content: center;\n  }\n  .quick-actions {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .quick-action {\n    justify-content: center;\n  }\n}\n@media (max-width: 360px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 14 });
})();

// src/app/pages/personnes/personnes.component.ts
function PersonnesComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function PersonnesComponent_button_18_Template_button_click_0_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filtreActif = f_r3.key);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.filtreActif === f_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r3.label, " ");
  }
}
function PersonnesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 72);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.erreur, " ");
  }
}
function PersonnesComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 6);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune personne trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Essayez un autre terme de recherche ou ajoutez un nouveau membre.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function PersonnesComponent_div_28_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openCreate());
    });
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Nouveau membre ");
    \u0275\u0275elementEnd()();
  }
}
function PersonnesComponent_div_29_div_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 95);
    \u0275\u0275listener("error", function PersonnesComponent_div_29_div_1_img_5_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onPhotoError(p_r7.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.getPhotoUrl(p_r7), \u0275\u0275sanitizeUrl)("alt", ctx_r3.getNomComplet(p_r7));
  }
}
function PersonnesComponent_div_29_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getInitiales(p_r7), " ");
  }
}
function PersonnesComponent_div_29_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 6);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r7.lieuNaissance, " ");
  }
}
function PersonnesComponent_div_29_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_div_29_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function PersonnesComponent_div_29_div_1_Template_div_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openDetail(p_r7));
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275element(2, "div", 79)(3, "span", 80);
    \u0275\u0275elementStart(4, "div", 81);
    \u0275\u0275template(5, PersonnesComponent_div_29_div_1_img_5_Template, 1, 2, "img", 82)(6, PersonnesComponent_div_29_div_1_div_6_Template, 2, 1, "div", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 84)(8, "h4", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 86);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PersonnesComponent_div_29_div_1_div_12_Template, 4, 1, "div", 87);
    \u0275\u0275elementStart(13, "div", 88)(14, "span", 89);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PersonnesComponent_div_29_div_1_span_16_Template, 2, 0, "span", 90)(17, PersonnesComponent_div_29_div_1_span_17_Template, 2, 0, "span", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 92)(19, "button", 93);
    \u0275\u0275listener("click", function PersonnesComponent_div_29_div_1_Template_button_click_19_listener($event) {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.openDetail(p_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(20, "span", 6);
    \u0275\u0275text(21, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "Voir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 93);
    \u0275\u0275listener("click", function PersonnesComponent_div_29_div_1_Template_button_click_23_listener($event) {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEdit(p_r7, $event));
    });
    \u0275\u0275elementStart(24, "span", 6);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\xC9diter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 94);
    \u0275\u0275listener("click", function PersonnesComponent_div_29_div_1_Template_button_click_27_listener($event) {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDelete(p_r7, $event));
    });
    \u0275\u0275elementStart(28, "span", 6);
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pc-male", p_r7.sexe === "M")("pc-female", p_r7.sexe === "F");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("color-1", i_r9 % 3 === 0)("color-2", i_r9 % 3 === 1)("color-3", i_r9 % 3 === 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("alive", ctx_r3.estVivant(p_r7))("dead", !ctx_r3.estVivant(p_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.getPhotoUrl(p_r7) && !ctx_r3.failedPhotos.has(p_r7.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getPhotoUrl(p_r7) || ctx_r3.failedPhotos.has(p_r7.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getNomComplet(p_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("pc-age-unknown", !ctx_r3.getAgeLabel(p_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getAgeLabel(p_r7) || "Naissance inconnue", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pc-badge-m", p_r7.sexe === "M")("pc-badge-f", p_r7.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getSexeLabel(p_r7.sexe), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.estVivant(p_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.estVivant(p_r7));
  }
}
function PersonnesComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, PersonnesComponent_div_29_div_1_Template, 30, 28, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.personnesFiltrees);
  }
}
function PersonnesComponent_div_30_div_12_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 125);
    \u0275\u0275listener("error", function PersonnesComponent_div_30_div_12_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r12);
      const p_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onPhotoError(p_r11.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.getPhotoUrl(p_r11), \u0275\u0275sanitizeUrl)("alt", ctx_r3.getNomComplet(p_r11));
  }
}
function PersonnesComponent_div_30_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", p_r11.sexe === "M")("female", p_r11.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getInitiales(p_r11), " ");
  }
}
function PersonnesComponent_div_30_div_12_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127)(1, "span", 6);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r11.lieuNaissance, " ");
  }
}
function PersonnesComponent_div_30_div_12_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_div_30_div_12_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_div_30_div_12_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_div_30_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function PersonnesComponent_div_30_div_12_Template_div_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openDetail(p_r11));
    });
    \u0275\u0275elementStart(1, "div", 109)(2, "div", 110);
    \u0275\u0275template(3, PersonnesComponent_div_30_div_12_img_3_Template, 1, 2, "img", 111)(4, PersonnesComponent_div_30_div_12_div_4_Template, 2, 5, "div", 112);
    \u0275\u0275element(5, "span", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 114)(7, "span", 115);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 117)(12, "span", 89);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 118);
    \u0275\u0275template(15, PersonnesComponent_div_30_div_12_span_15_Template, 4, 1, "span", 119)(16, PersonnesComponent_div_30_div_12_span_16_Template, 2, 0, "span", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 121);
    \u0275\u0275template(18, PersonnesComponent_div_30_div_12_span_18_Template, 2, 0, "span", 90)(19, PersonnesComponent_div_30_div_12_span_19_Template, 2, 0, "span", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 122);
    \u0275\u0275listener("click", function PersonnesComponent_div_30_div_12_Template_div_click_20_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(21, "button", 123);
    \u0275\u0275listener("click", function PersonnesComponent_div_30_div_12_Template_button_click_21_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openDetail(p_r11));
    });
    \u0275\u0275elementStart(22, "span", 6);
    \u0275\u0275text(23, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 66);
    \u0275\u0275listener("click", function PersonnesComponent_div_30_div_12_Template_button_click_24_listener($event) {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEdit(p_r11, $event));
    });
    \u0275\u0275elementStart(25, "span", 6);
    \u0275\u0275text(26, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 124);
    \u0275\u0275listener("click", function PersonnesComponent_div_30_div_12_Template_button_click_27_listener($event) {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.confirmDelete(p_r11, $event));
    });
    \u0275\u0275elementStart(28, "span", 6);
    \u0275\u0275text(29, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.getPhotoUrl(p_r11) && !ctx_r3.failedPhotos.has(p_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getPhotoUrl(p_r11) || ctx_r3.failedPhotos.has(p_r11.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("alive", ctx_r3.estVivant(p_r11))("dead", !ctx_r3.estVivant(p_r11));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getNomComplet(p_r11));
    \u0275\u0275advance();
    \u0275\u0275classProp("pc-age-unknown", !ctx_r3.getAgeLabel(p_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getAgeLabel(p_r11) || "Naissance inconnue", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pc-badge-m", p_r11.sexe === "M")("pc-badge-f", p_r11.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getSexeLabel(p_r11.sexe), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r11.lieuNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r11.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.estVivant(p_r11));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.estVivant(p_r11));
  }
}
function PersonnesComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "span", 102);
    \u0275\u0275text(3, "Personne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 103);
    \u0275\u0275text(5, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 104);
    \u0275\u0275text(7, "Lieu de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 105);
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 106);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, PersonnesComponent_div_30_div_12_Template, 30, 19, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r3.personnesFiltrees);
  }
}
function PersonnesComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275listener("click", function PersonnesComponent_div_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAll());
    });
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getNomComplet(ctx_r3.editTarget));
  }
}
function PersonnesComponent_img_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 131);
    \u0275\u0275listener("error", function PersonnesComponent_img_49_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.photoPreview = null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r3.photoPreview, \u0275\u0275sanitizeUrl);
  }
}
function PersonnesComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("male", ctx_r3.form.sexe === "M")("female", ctx_r3.form.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.form.prenoms.charAt(0) || "") + (ctx_r3.form.nomNaissance.charAt(0) || "") || "MB", " ");
  }
}
function PersonnesComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 133);
    \u0275\u0275listener("click", function PersonnesComponent_button_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSelectedPhoto());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PersonnesComponent_label_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 134)(1, "input", 135);
    \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_label_82_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.sexe, $event) || (ctx_r3.form.sexe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r3.form.sexe === s_r17.val);
    \u0275\u0275advance();
    \u0275\u0275property("name", "sexe")("value", s_r17.val);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.sexe);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r17.label, " ");
  }
}
function PersonnesComponent_option_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    \u0275\u0275property("value", m_r18.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r18.label);
  }
}
function PersonnesComponent_div_114_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r20 = ctx.$implicit;
    \u0275\u0275property("value", m_r20.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r20.label);
  }
}
function PersonnesComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 46)(2, "div", 38)(3, "label");
    \u0275\u0275text(4, "Ann\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_div_114_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.deces_annee, $event) || (ctx_r3.form.deces_annee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "label");
    \u0275\u0275text(8, "Mois");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 138);
    \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_div_114_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.deces_mois, $event) || (ctx_r3.form.deces_mois = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 49);
    \u0275\u0275text(11, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PersonnesComponent_div_114_option_12_Template, 2, 2, "option", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 38)(14, "label");
    \u0275\u0275text(15, "Jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_div_114_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.deces_jour, $event) || (ctx_r3.form.deces_jour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 38)(18, "label");
    \u0275\u0275text(19, "Lieu de d\xE9c\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_div_114_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.lieuDeces, $event) || (ctx_r3.form.lieuDeces = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.deces_annee);
    \u0275\u0275property("max", ctx_r3.currentYear);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.deces_mois);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.mois);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.deces_jour);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.lieuDeces);
  }
}
function PersonnesComponent_span_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 130);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getNomComplet(ctx_r3.detailTarget));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getAgeLabel(ctx_r3.detailTarget));
  }
}
function PersonnesComponent_div_142_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 151);
    \u0275\u0275listener("error", function PersonnesComponent_div_142_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r21);
      const p_r22 = \u0275\u0275nextContext().ngIf;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPhotoError(p_r22.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r3.getPhotoUrl(p_r22), \u0275\u0275sanitizeUrl)("alt", ctx_r3.getNomComplet(p_r22));
  }
}
function PersonnesComponent_div_142_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("female", p_r22.sexe === "F")("male", p_r22.sexe === "M");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getInitiales(p_r22), " ");
  }
}
function PersonnesComponent_div_142_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2, "Nom de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.nomNaissance);
  }
}
function PersonnesComponent_div_142_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2, "Nom d'usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.nomUsage);
  }
}
function PersonnesComponent_div_142_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.dateNaissance);
  }
}
function PersonnesComponent_div_142_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2, "Lieu de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.lieuNaissance);
  }
}
function PersonnesComponent_div_142_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2, "Date de d\xE9c\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.dateDeces);
  }
}
function PersonnesComponent_div_142_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2, "Lieu de d\xE9c\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.lieuDeces);
  }
}
function PersonnesComponent_div_142_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 28);
    \u0275\u0275text(2, "Biographie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 156);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.biographie);
  }
}
function PersonnesComponent_div_142_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 28);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 156);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r22.notes);
  }
}
function PersonnesComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 141);
    \u0275\u0275template(2, PersonnesComponent_div_142_img_2_Template, 1, 2, "img", 142)(3, PersonnesComponent_div_142_div_3_Template, 2, 5, "div", 143);
    \u0275\u0275elementStart(4, "div", 144)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 145)(8, "span", 146);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 146);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 147)(13, "div", 28);
    \u0275\u0275text(14, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 148);
    \u0275\u0275template(16, PersonnesComponent_div_142_div_16_Template, 5, 1, "div", 149)(17, PersonnesComponent_div_142_div_17_Template, 5, 1, "div", 149)(18, PersonnesComponent_div_142_div_18_Template, 5, 1, "div", 149)(19, PersonnesComponent_div_142_div_19_Template, 5, 1, "div", 149)(20, PersonnesComponent_div_142_div_20_Template, 5, 1, "div", 149)(21, PersonnesComponent_div_142_div_21_Template, 5, 1, "div", 149);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, PersonnesComponent_div_142_div_22_Template, 5, 1, "div", 150)(23, PersonnesComponent_div_142_div_23_Template, 5, 1, "div", 150);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r22 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.getPhotoUrl(p_r22) && !ctx_r3.failedPhotos.has(p_r22.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getPhotoUrl(p_r22) || ctx_r3.failedPhotos.has(p_r22.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getNomComplet(p_r22));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-primary", p_r22.sexe === "M")("badge-pink", p_r22.sexe === "F")("badge-gray", !p_r22.sexe);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getSexeLabel(p_r22.sexe), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-success", ctx_r3.estVivant(p_r22))("badge-gray", !ctx_r3.estVivant(p_r22));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.estVivant(p_r22) ? "Vivant(e)" : "D\xE9c\xE9d\xE9(e)", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", p_r22.nomNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r22.nomUsage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r22.dateNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r22.lieuNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r22.dateDeces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r22.lieuDeces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r22.biographie);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r22.notes);
  }
}
function PersonnesComponent_div_150_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function PersonnesComponent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "div", 159)(3, "span", 6);
    \u0275\u0275text(4, "delete_forever");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Cette action est irr\xE9versible. Toutes les relations associ\xE9es seront \xE9galement supprim\xE9es.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 160)(10, "button", 61);
    \u0275\u0275listener("click", function PersonnesComponent_div_150_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAll());
    });
    \u0275\u0275text(11, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 161);
    \u0275\u0275listener("click", function PersonnesComponent_div_150_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deletePersonne());
    });
    \u0275\u0275template(13, PersonnesComponent_div_150_span_13_Template, 2, 0, "span", 63);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Supprimer ", ctx_r3.deleteTarget ? ctx_r3.getNomComplet(ctx_r3.deleteTarget) : "ce membre", " ?");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r3.deleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.deleting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.deleting ? "Suppression..." : "Supprimer", " ");
  }
}
var MOIS = [
  { val: "01", label: "Janvier" },
  { val: "02", label: "F\xE9vrier" },
  { val: "03", label: "Mars" },
  { val: "04", label: "Avril" },
  { val: "05", label: "Mai" },
  { val: "06", label: "Juin" },
  { val: "07", label: "Juillet" },
  { val: "08", label: "Ao\xFBt" },
  { val: "09", label: "Septembre" },
  { val: "10", label: "Octobre" },
  { val: "11", label: "Novembre" },
  { val: "12", label: "D\xE9cembre" }
];
var SEXE_OPTIONS = [
  { val: "M", label: "Homme" },
  { val: "F", label: "Femme" },
  { val: "autre", label: "Autre" }
];
var PersonnesComponent = class _PersonnesComponent {
  api;
  route;
  ngZone;
  /* ---- Liste ---- */
  toutes = [];
  loading = true;
  erreur = null;
  searchQuery = "";
  filtreActif = "tous";
  filtres = [
    { key: "tous", label: "Tous" },
    { key: "hommes", label: "Hommes" },
    { key: "femmes", label: "Femmes" },
    { key: "vivants", label: "Vivants" },
    { key: "decedes", label: "D\xE9c\xE9d\xE9s" }
  ];
  /* ---- Formulaire ---- */
  showForm = false;
  editTarget = null;
  form = this.emptyForm();
  saving = false;
  /* ---- Photo ---- */
  selectedFile = null;
  photoPreview = null;
  photoToDelete = false;
  failedPhotos = /* @__PURE__ */ new Set();
  onPhotoError(id) {
    this.failedPhotos.add(id);
  }
  /* ---- Détail ---- */
  showDetail = false;
  detailTarget = null;
  /* ---- Vue ---- */
  viewMode = "cards";
  /* ---- Suppression ---- */
  showDeleteConfirm = false;
  deleteTarget = null;
  deleting = false;
  /* ---- Constantes exposées au template ---- */
  mois = MOIS;
  sexeOptions = SEXE_OPTIONS;
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  /* ---- Helpers ---- */
  getInitiales = getInitiales;
  getAgeLabel = getAgeLabel;
  estVivant = estVivant;
  getNomComplet = getNomComplet;
  getPhotoUrl = getPhotoUrl;
  extractAnnee = extractAnnee;
  constructor(api, route, ngZone) {
    this.api = api;
    this.route = route;
    this.ngZone = ngZone;
  }
  ngOnInit() {
    this.loadPersonnes();
  }
  loadPersonnes() {
    this.loading = true;
    this.failedPhotos.clear();
    this.api.getPersonnes().subscribe({
      next: (data) => {
        this.toutes = data;
        this.loading = false;
        const id = this.route.snapshot.queryParams["id"];
        if (id) {
          const found = this.toutes.find((p) => String(p.id) === String(id));
          if (found)
            this.openDetail(found);
        }
      },
      error: () => {
        this.erreur = "Impossible de charger les membres.";
        this.loading = false;
      }
    });
  }
  get personnesFiltrees() {
    return this.toutes.filter((p) => {
      const q = this.searchQuery.toLowerCase();
      const nom = `${p.prenoms ?? ""} ${p.nomUsage ?? p.nomNaissance ?? ""}`.toLowerCase();
      const matchSearch = !q || nom.includes(q) || (p.lieuNaissance ?? "").toLowerCase().includes(q);
      const matchFiltre = this.filtreActif === "tous" ? true : this.filtreActif === "hommes" ? p.sexe === "M" : this.filtreActif === "femmes" ? p.sexe === "F" : this.filtreActif === "vivants" ? estVivant(p) : this.filtreActif === "decedes" ? !estVivant(p) : true;
      return matchSearch && matchFiltre;
    });
  }
  /* ===== Formulaire ===== */
  emptyForm() {
    return {
      prenoms: "",
      nomNaissance: "",
      nomUsage: "",
      sexe: "M",
      nais_annee: "",
      nais_mois: "",
      nais_jour: "",
      lieuNaissance: "",
      estDecede: false,
      deces_annee: "",
      deces_mois: "",
      deces_jour: "",
      lieuDeces: "",
      biographie: "",
      notes: ""
    };
  }
  openCreate() {
    this.editTarget = null;
    this.form = this.emptyForm();
    this.selectedFile = null;
    this.photoPreview = null;
    this.photoToDelete = false;
    this.showForm = true;
  }
  openEdit(p, event) {
    event?.stopPropagation();
    this.editTarget = p;
    const [ny, nm, nd] = this.splitDate(p.dateNaissance);
    const [dy, dm, dd] = this.splitDate(p.dateDeces);
    this.form = {
      prenoms: p.prenoms ?? "",
      nomNaissance: p.nomNaissance ?? "",
      nomUsage: p.nomUsage ?? "",
      sexe: p.sexe ?? "M",
      nais_annee: ny,
      nais_mois: nm,
      nais_jour: nd,
      lieuNaissance: p.lieuNaissance ?? "",
      estDecede: !!p.dateDeces,
      deces_annee: dy,
      deces_mois: dm,
      deces_jour: dd,
      lieuDeces: p.lieuDeces ?? "",
      biographie: p.biographie ?? "",
      notes: p.notes ?? ""
    };
    this.selectedFile = null;
    this.photoPreview = p.photoUrl;
    this.photoToDelete = false;
    this.showForm = true;
  }
  onFileSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    this.selectedFile = file;
    this.photoToDelete = false;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.ngZone.run(() => {
        this.photoPreview = e.target?.result;
      });
    };
    reader.readAsDataURL(file);
    input.value = "";
  }
  removeSelectedPhoto() {
    this.selectedFile = null;
    this.photoPreview = null;
    this.photoToDelete = !!this.editTarget?.photoUrl;
  }
  openDetail(p) {
    this.detailTarget = p;
    this.showDetail = true;
  }
  confirmDelete(p, event) {
    event?.stopPropagation();
    this.deleteTarget = p;
    this.showDeleteConfirm = true;
  }
  closeAll() {
    this.showForm = false;
    this.showDetail = false;
    this.showDeleteConfirm = false;
    this.editTarget = null;
    this.detailTarget = null;
    this.deleteTarget = null;
  }
  savePersonne() {
    if (this.saving)
      return;
    this.saving = true;
    const body = {
      prenoms: this.form.prenoms || null,
      nomNaissance: this.form.nomNaissance || null,
      nomUsage: this.form.nomUsage || null,
      sexe: this.form.sexe || null,
      dateNaissance: this.buildDateStr(this.form.nais_annee, this.form.nais_mois, this.form.nais_jour),
      lieuNaissance: this.form.lieuNaissance || null,
      dateDeces: this.form.estDecede ? this.buildDateStr(this.form.deces_annee, this.form.deces_mois, this.form.deces_jour) : null,
      lieuDeces: this.form.estDecede ? this.form.lieuDeces || null : null,
      biographie: this.form.biographie || null,
      notes: this.form.notes || null
    };
    const obs = this.editTarget ? this.api.updatePersonne(this.editTarget.id, body) : this.api.createPersonne(body);
    obs.subscribe({
      next: (saved) => {
        const finish = () => {
          this.saving = false;
          this.closeAll();
          this.loadPersonnes();
        };
        if (this.selectedFile) {
          this.api.uploadPhoto(saved.id, this.selectedFile).subscribe({ next: finish, error: finish });
        } else if (this.photoToDelete) {
          this.api.deletePhoto(saved.id).subscribe({ next: finish, error: finish });
        } else {
          finish();
        }
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  deletePersonne() {
    if (!this.deleteTarget || this.deleting)
      return;
    this.deleting = true;
    this.api.deletePersonne(this.deleteTarget.id).subscribe({
      next: () => {
        this.toutes = this.toutes.filter((p) => p.id !== this.deleteTarget.id);
        this.deleting = false;
        this.closeAll();
      },
      error: () => {
        this.deleting = false;
      }
    });
  }
  /* ===== Utils ===== */
  buildDateStr(annee, mois, jour) {
    if (!annee)
      return null;
    if (!mois)
      return annee;
    if (!jour)
      return `${annee}-${mois}`;
    return `${annee}-${mois}-${jour}`;
  }
  splitDate(dateStr) {
    if (!dateStr)
      return ["", "", ""];
    const parts = dateStr.split("-");
    return [parts[0] ?? "", parts[1] ?? "", parts[2] ?? ""];
  }
  getSexeLabel(sexe) {
    if (sexe === "M")
      return "Homme";
    if (sexe === "F")
      return "Femme";
    if (sexe === "autre")
      return "Autre";
    return "N/A";
  }
  static \u0275fac = function PersonnesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonnesComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonnesComponent, selectors: [["app-personnes"]], standalone: false, decls: 151, vars: 46, consts: [["personneForm", "ngForm"], [1, "personnes-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-primary", 3, "click"], [1, "material-icons-round"], [1, "toolbar"], [1, "search-bar"], ["type", "text", "placeholder", "Rechercher par nom, pr\xE9nom, lieu...", 3, "ngModelChange", "ngModel"], [1, "toolbar-right"], [1, "chip-group"], ["class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "view-toggle"], ["title", "Vue cartes", 1, "vt-btn", 3, "click"], ["title", "Vue liste", 1, "vt-btn", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pc-grid", 4, "ngIf"], ["class", "pl-table", 4, "ngIf"], ["class", "panel-overlay", 3, "click", 4, "ngIf"], [1, "slide-panel"], [1, "panel-header"], ["class", "panel-header-sub", 4, "ngIf"], [1, "btn-icon", 3, "click"], [1, "panel-body"], [1, "form-section"], [1, "section-title"], [1, "photo-upload-area"], [1, "photo-preview-wrap"], ["class", "photo-preview-img", "alt", "Aper\xE7u", 3, "src", "error", 4, "ngIf"], ["class", "photo-placeholder", 3, "male", "female", 4, "ngIf"], ["class", "photo-remove-btn", "type", "button", "title", "Supprimer la photo", 3, "click", 4, "ngIf"], [1, "photo-actions"], ["for", "photoInput", 1, "btn-photo-pick"], ["id", "photoInput", "type", "file", "accept", "image/jpeg,image/png,image/webp", 2, "display", "none", 3, "change"], [1, "photo-hint"], [1, "form-group"], ["type", "text", "name", "prenoms", "placeholder", "Jean-Baptiste, Marie...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row-2"], ["type", "text", "name", "nomNaissance", "placeholder", "Dupont", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "optional"], ["type", "text", "name", "nomUsage", "placeholder", "Nom apr\xE8s mariage...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "radio-group"], ["class", "radio-option", 3, "selected", 4, "ngFor", "ngForOf"], [1, "form-row"], ["type", "number", "name", "nais_annee", "placeholder", "1960", "min", "1850", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], ["name", "nais_mois", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "name", "nais_jour", "placeholder", "1", "min", "1", "max", "31", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lieuNaissance", "placeholder", "Ville, pays...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "toggle-wrap"], ["type", "checkbox", "name", "estDecede", 3, "ngModelChange", "ngModel"], [1, "toggle"], [1, "toggle-label"], [4, "ngIf"], ["name", "biographie", "rows", "4", "placeholder", "Parcours de vie, anecdotes...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "notes", "rows", "2", "placeholder", "Notes compl\xE9mentaires...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "panel-footer"], [1, "btn-ghost", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], ["class", "material-icons-round spin", 4, "ngIf"], [1, "slide-panel", "slide-panel-wide"], [1, "panel-header-actions"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["class", "panel-body", 4, "ngIf"], [1, "btn-danger", 3, "click"], ["class", "confirm-dialog", 4, "ngIf"], [1, "chip", 3, "click"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "error-state"], [1, "empty-state"], [1, "pc-grid"], ["class", "pc-card", 3, "pc-male", "pc-female", "click", 4, "ngFor", "ngForOf"], [1, "pc-card", 3, "click"], [1, "pc-card-banner"], [1, "pc-colorband"], [1, "pc-live-dot"], [1, "pc-avatar-ring"], ["class", "pc-avatar pc-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], ["class", "pc-avatar pc-avatar-initials", 4, "ngIf"], [1, "pc-card-body"], [1, "pc-name"], [1, "pc-age"], ["class", "pc-loc", 4, "ngIf"], [1, "pc-badges"], [1, "pc-badge"], ["class", "pc-badge pc-badge-alive", 4, "ngIf"], ["class", "pc-badge pc-badge-dead", 4, "ngIf"], [1, "pc-card-actions"], [1, "pc-act", 3, "click"], [1, "pc-act", "pc-act-danger", 3, "click"], [1, "pc-avatar", "pc-avatar-photo", 3, "error", "src", "alt"], [1, "pc-avatar", "pc-avatar-initials"], [1, "pc-loc"], [1, "pc-badge", "pc-badge-alive"], [1, "pc-badge", "pc-badge-dead"], [1, "pl-table"], [1, "pl-thead"], [1, "pl-th", "pl-th-person"], [1, "pl-th", "pl-th-genre"], [1, "pl-th", "pl-th-lieu"], [1, "pl-th", "pl-th-statut"], [1, "pl-th", "pl-th-actions"], ["class", "pl-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "pl-row", 3, "click"], [1, "pl-cell", "pl-cell-person"], [1, "pl-avatar-wrap"], ["class", "pl-avatar pl-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], ["class", "pl-avatar pl-avatar-initials", 3, "male", "female", 4, "ngIf"], [1, "pl-status-dot"], [1, "pl-person-info"], [1, "pl-person-name"], [1, "pl-person-age"], [1, "pl-cell", "pl-cell-genre"], [1, "pl-cell", "pl-cell-lieu"], ["class", "pl-lieu", 4, "ngIf"], ["class", "pl-empty", 4, "ngIf"], [1, "pl-cell", "pl-cell-statut"], [1, "pl-cell", "pl-cell-actions", 3, "click"], ["title", "Voir", 1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger", 3, "click"], [1, "pl-avatar", "pl-avatar-photo", 3, "error", "src", "alt"], [1, "pl-avatar", "pl-avatar-initials"], [1, "pl-lieu"], [1, "pl-empty"], [1, "panel-overlay", 3, "click"], [1, "panel-header-sub"], ["alt", "Aper\xE7u", 1, "photo-preview-img", 3, "error", "src"], [1, "photo-placeholder"], ["type", "button", "title", "Supprimer la photo", 1, "photo-remove-btn", 3, "click"], [1, "radio-option"], ["type", "radio", 3, "ngModelChange", "name", "value", "ngModel"], [3, "value"], ["type", "number", "name", "deces_annee", "placeholder", "2020", "min", "1850", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], ["name", "deces_mois", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "deces_jour", "placeholder", "1", "min", "1", "max", "31", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lieuDeces", "placeholder", "Ville, pays...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "detail-hero"], ["class", "avatar avatar-xl photo-avatar", 3, "src", "alt", "error", 4, "ngIf"], ["class", "avatar avatar-xl", 3, "female", "male", 4, "ngIf"], [1, "detail-hero-info"], [1, "detail-badges"], [1, "badge"], [1, "detail-section"], [1, "detail-grid"], ["class", "detail-item", 4, "ngIf"], ["class", "detail-section", 4, "ngIf"], [1, "avatar", "avatar-xl", "photo-avatar", 3, "error", "src", "alt"], [1, "avatar", "avatar-xl"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "detail-bio"], [1, "confirm-dialog"], [1, "confirm-box"], [1, "confirm-icon"], [1, "confirm-actions"], [1, "btn-danger", 3, "click", "disabled"]], template: function PersonnesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
      \u0275\u0275text(4, "Membres de la famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreate());
      });
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouveau membre ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "span", 6);
      \u0275\u0275text(14, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11);
      \u0275\u0275template(18, PersonnesComponent_button_18_Template, 2, 3, "button", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "button", 14);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode = "cards");
      });
      \u0275\u0275elementStart(21, "span", 6);
      \u0275\u0275text(22, "grid_view");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 15);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode = "list");
      });
      \u0275\u0275elementStart(24, "span", 6);
      \u0275\u0275text(25, "view_list");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(26, PersonnesComponent_div_26_Template, 4, 0, "div", 16)(27, PersonnesComponent_div_27_Template, 4, 1, "div", 17)(28, PersonnesComponent_div_28_Template, 11, 0, "div", 18)(29, PersonnesComponent_div_29_Template, 2, 1, "div", 19)(30, PersonnesComponent_div_30_Template, 13, 1, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, PersonnesComponent_div_31_Template, 1, 0, "div", 21);
      \u0275\u0275elementStart(32, "div", 22)(33, "div", 23)(34, "div")(35, "h3");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, PersonnesComponent_p_37_Template, 2, 1, "p", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 25);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAll());
      });
      \u0275\u0275elementStart(39, "span", 6);
      \u0275\u0275text(40, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 26)(42, "form", null, 0)(44, "div", 27)(45, "div", 28);
      \u0275\u0275text(46, "Photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 29)(48, "div", 30);
      \u0275\u0275template(49, PersonnesComponent_img_49_Template, 1, 1, "img", 31)(50, PersonnesComponent_div_50_Template, 2, 5, "div", 32)(51, PersonnesComponent_button_51_Template, 3, 0, "button", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 34)(53, "label", 35)(54, "span", 6);
      \u0275\u0275text(55, "add_photo_alternate");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "input", 36);
      \u0275\u0275listener("change", function PersonnesComponent_Template_input_change_57_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 37);
      \u0275\u0275text(59, "JPG, PNG ou WebP \xB7 max 5 Mo");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 27)(61, "div", 28);
      \u0275\u0275text(62, "Identit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 38)(64, "label");
      \u0275\u0275text(65, "Pr\xE9nom(s)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_input_ngModelChange_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.prenoms, $event) || (ctx.form.prenoms = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 40)(68, "div", 38)(69, "label");
      \u0275\u0275text(70, "Nom de naissance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "input", 41);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.nomNaissance, $event) || (ctx.form.nomNaissance = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 38)(73, "label");
      \u0275\u0275text(74, "Nom d'usage ");
      \u0275\u0275elementStart(75, "span", 42);
      \u0275\u0275text(76, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_input_ngModelChange_77_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.nomUsage, $event) || (ctx.form.nomUsage = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 38)(79, "label");
      \u0275\u0275text(80, "Sexe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 44);
      \u0275\u0275template(82, PersonnesComponent_label_82_Template, 3, 6, "label", 45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 27)(84, "div", 28);
      \u0275\u0275text(85, "Naissance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 46)(87, "div", 38)(88, "label");
      \u0275\u0275text(89, "Ann\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "input", 47);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_input_ngModelChange_90_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.nais_annee, $event) || (ctx.form.nais_annee = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 38)(92, "label");
      \u0275\u0275text(93, "Mois");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "select", 48);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_select_ngModelChange_94_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.nais_mois, $event) || (ctx.form.nais_mois = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(95, "option", 49);
      \u0275\u0275text(96, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275template(97, PersonnesComponent_option_97_Template, 2, 2, "option", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 38)(99, "label");
      \u0275\u0275text(100, "Jour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "input", 51);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_input_ngModelChange_101_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.nais_jour, $event) || (ctx.form.nais_jour = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 38)(103, "label");
      \u0275\u0275text(104, "Lieu de naissance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "input", 52);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_input_ngModelChange_105_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.lieuNaissance, $event) || (ctx.form.lieuNaissance = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 27)(107, "div", 28);
      \u0275\u0275text(108, " D\xE9c\xE8s ");
      \u0275\u0275elementStart(109, "label", 53)(110, "input", 54);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_input_ngModelChange_110_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.estDecede, $event) || (ctx.form.estDecede = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "span", 55);
      \u0275\u0275elementStart(112, "span", 56);
      \u0275\u0275text(113);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(114, PersonnesComponent_div_114_Template, 21, 6, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 27)(116, "div", 28);
      \u0275\u0275text(117, "Biographie ");
      \u0275\u0275elementStart(118, "span", 42);
      \u0275\u0275text(119, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 38)(121, "textarea", 58);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_textarea_ngModelChange_121_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.biographie, $event) || (ctx.form.biographie = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 38)(123, "label");
      \u0275\u0275text(124, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "textarea", 59);
      \u0275\u0275twoWayListener("ngModelChange", function PersonnesComponent_Template_textarea_ngModelChange_125_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.notes, $event) || (ctx.form.notes = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(126, "div", 60)(127, "button", 61);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_127_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAll());
      });
      \u0275\u0275text(128, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "button", 62);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_129_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePersonne());
      });
      \u0275\u0275template(130, PersonnesComponent_span_130_Template, 2, 0, "span", 63);
      \u0275\u0275text(131);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 64)(133, "div", 23);
      \u0275\u0275template(134, PersonnesComponent_div_134_Template, 5, 2, "div", 57);
      \u0275\u0275elementStart(135, "div", 65)(136, "button", 66);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_136_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.openEdit(ctx.detailTarget);
        return \u0275\u0275resetView(ctx.showDetail = false);
      });
      \u0275\u0275elementStart(137, "span", 6);
      \u0275\u0275text(138, "edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "button", 25);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_139_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAll());
      });
      \u0275\u0275elementStart(140, "span", 6);
      \u0275\u0275text(141, "close");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(142, PersonnesComponent_div_142_Template, 24, 23, "div", 67);
      \u0275\u0275elementStart(143, "div", 60)(144, "button", 68);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_144_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.confirmDelete(ctx.detailTarget, void 0);
        return \u0275\u0275resetView(ctx.showDetail = false);
      });
      \u0275\u0275elementStart(145, "span", 6);
      \u0275\u0275text(146, "delete");
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, " Supprimer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "button", 61);
      \u0275\u0275listener("click", function PersonnesComponent_Template_button_click_148_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAll());
      });
      \u0275\u0275text(149, "Fermer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(150, PersonnesComponent_div_150_Template, 15, 4, "div", 69);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate3("", ctx.personnesFiltrees.length, " personne", ctx.personnesFiltrees.length > 1 ? "s" : "", " affich\xE9e", ctx.personnesFiltrees.length > 1 ? "s" : "");
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.filtres);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode === "cards");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.viewMode === "list");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.erreur && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.personnesFiltrees.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.personnesFiltrees.length > 0 && ctx.viewMode === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.personnesFiltrees.length > 0 && ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm || ctx.showDetail || ctx.showDeleteConfirm);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.editTarget ? "Modifier le membre" : "Nouveau membre");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editTarget);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.photoPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.photoPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.photoPreview);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.photoPreview ? "Changer la photo" : "Ajouter une photo", " ");
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.prenoms);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nomNaissance);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nomUsage);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.sexeOptions);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nais_annee);
      \u0275\u0275property("max", ctx.currentYear);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nais_mois);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.mois);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nais_jour);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.lieuNaissance);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.estDecede);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.form.estDecede ? "D\xE9c\xE9d\xE9(e)" : "Vivant(e)");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.estDecede);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.biographie);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.notes);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? "Sauvegarde..." : ctx.editTarget ? "Enregistrer" : "Cr\xE9er le membre", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showDetail);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.detailTarget);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.detailTarget);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.showDeleteConfirm);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n.personnes-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.toolbar[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.panel-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.slide-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 480px;\n  height: 100vh;\n  background: var(--white);\n  box-shadow: var(--shadow-xl);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.slide-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.slide-panel.slide-panel-wide[_ngcontent-%COMP%] {\n  width: 540px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.panel-header-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.panel-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n  background: var(--white);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  font-size: 14px;\n  color: var(--text-primary);\n  background: var(--white);\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n  font-family: inherit;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px var(--primary-bg);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr;\n  gap: 12px;\n}\n.form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.radio-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  font-size: 14px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  color: var(--primary);\n  font-weight: 500;\n}\n.radio-option[_ngcontent-%COMP%]:hover:not(.selected) {\n  border-color: var(--primary-border);\n  background: var(--bg-muted);\n}\n.toggle-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  text-transform: none;\n  letter-spacing: 0;\n}\n.toggle-wrap[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 10px;\n  background: var(--border);\n  position: relative;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: white;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle[_ngcontent-%COMP%] {\n  background: var(--error, #ef4444);\n}\n.toggle-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle[_ngcontent-%COMP%]::after {\n  transform: translateX(16px);\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.detail-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 8px 0 24px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 24px;\n}\n.detail-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px;\n}\n.detail-hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.detail-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 24px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.detail-bio[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin: 0;\n  white-space: pre-wrap;\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n}\n.confirm-box[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  width: 400px;\n  max-width: 90vw;\n  box-shadow: var(--shadow-xl);\n  text-align: center;\n}\n.confirm-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 12px 0 8px;\n}\n.confirm-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #fef2f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 4px;\n}\n.confirm-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n  color: var(--error, #ef4444);\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: var(--bg-muted);\n  color: var(--text-muted);\n  border-color: var(--border);\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: #bbf7d0;\n}\n.avatar.female[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #db2777;\n}\n.avatar.male[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.avatar-xl[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  font-size: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  background: var(--primary-bg);\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.avatar-xl.photo-avatar[_ngcontent-%COMP%] {\n  display: block;\n}\n.photo-avatar[_ngcontent-%COMP%] {\n  object-fit: cover;\n  object-position: center;\n  background: var(--border-light);\n}\n.photo-upload-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.photo-preview-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.photo-preview-img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  object-fit: cover;\n  object-position: center;\n  border: 2px solid var(--border);\n  display: block;\n}\n.photo-placeholder[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 2px dashed var(--border);\n  text-transform: uppercase;\n}\n.photo-placeholder.male[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.photo-placeholder.female[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #db2777;\n  border-color: #fbcfe8;\n}\n.photo-remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #ef4444;\n  border: 2px solid #fff;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: background 0.15s;\n}\n.photo-remove-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n.photo-remove-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.photo-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.btn-photo-pick[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 16px;\n  border: 1.5px solid var(--primary-border);\n  border-radius: var(--radius-md);\n  background: var(--primary-bg);\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.btn-photo-pick[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.btn-photo-pick[_ngcontent-%COMP%]:hover {\n  background: var(--primary-border);\n}\n.photo-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .page-header[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .toolbar[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n  .toolbar-right[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .slide-panel[_ngcontent-%COMP%], \n   .slide-panel.slide-panel-wide[_ngcontent-%COMP%] {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 92vh;\n    transform: translateY(100%);\n  }\n  .slide-panel.open[_ngcontent-%COMP%], \n   .slide-panel.slide-panel-wide.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .panel-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .panel-footer[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%], \n   .panel-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=personnes.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonnesComponent, [{
    type: Component,
    args: [{ selector: "app-personnes", standalone: false, template: `<div class="personnes-page">

  <!-- En-t\xEAte -->
  <div class="page-header">
    <div>
      <h2 class="page-title">Membres de la famille</h2>
      <p class="page-subtitle">{{ personnesFiltrees.length }} personne{{ personnesFiltrees.length > 1 ? 's' : '' }} affich\xE9e{{ personnesFiltrees.length > 1 ? 's' : '' }}</p>
    </div>
    <button class="btn-primary" (click)="openCreate()">
      <span class="material-icons-round">person_add</span>
      Nouveau membre
    </button>
  </div>

  <!-- Barre de recherche + filtres + toggle vue -->
  <div class="toolbar">
    <div class="search-bar">
      <span class="material-icons-round">search</span>
      <input type="text" [(ngModel)]="searchQuery" placeholder="Rechercher par nom, pr\xE9nom, lieu..." />
    </div>
    <div class="toolbar-right">
      <div class="chip-group">
        <button *ngFor="let f of filtres" class="chip" [class.active]="filtreActif === f.key" (click)="filtreActif = f.key">
          {{ f.label }}
        </button>
      </div>
      <div class="view-toggle">
        <button class="vt-btn" [class.active]="viewMode === 'cards'" (click)="viewMode = 'cards'" title="Vue cartes">
          <span class="material-icons-round">grid_view</span>
        </button>
        <button class="vt-btn" [class.active]="viewMode === 'list'" (click)="viewMode = 'list'" title="Vue liste">
          <span class="material-icons-round">view_list</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Chargement -->
  <div class="loading-state" *ngIf="loading">
    <span class="material-icons-round spin">sync</span> Chargement...
  </div>

  <!-- Erreur -->
  <div class="error-state" *ngIf="erreur && !loading">
    <span class="material-icons-round">error_outline</span> {{ erreur }}
  </div>

  <!-- \xC9tat vide -->
  <div class="empty-state" *ngIf="!loading && !erreur && personnesFiltrees.length === 0">
    <span class="material-icons-round">person_search</span>
    <h3>Aucune personne trouv\xE9e</h3>
    <p>Essayez un autre terme de recherche ou ajoutez un nouveau membre.</p>
    <button class="btn-primary" (click)="openCreate()">
      <span class="material-icons-round">person_add</span> Nouveau membre
    </button>
  </div>

  <!-- ===== VUE CARTES ===== -->
  <div class="pc-grid" *ngIf="!loading && !erreur && personnesFiltrees.length > 0 && viewMode === 'cards'">
    <div class="pc-card" *ngFor="let p of personnesFiltrees; let i = index"
         [class.pc-male]="p.sexe === 'M'" [class.pc-female]="p.sexe === 'F'"
         (click)="openDetail(p)">

      <!-- Zone photo + d\xE9grad\xE9 -->
      <div class="pc-card-banner">
        <div class="pc-colorband"
             [class.color-1]="i % 3 === 0"
             [class.color-2]="i % 3 === 1"
             [class.color-3]="i % 3 === 2"></div>
        <span class="pc-live-dot" [class.alive]="estVivant(p)" [class.dead]="!estVivant(p)"></span>
        <div class="pc-avatar-ring">
          <img *ngIf="getPhotoUrl(p) && !failedPhotos.has(p.id)"
               [src]="getPhotoUrl(p)" class="pc-avatar pc-avatar-photo"
               [alt]="getNomComplet(p)" (error)="onPhotoError(p.id)" />
          <div *ngIf="!getPhotoUrl(p) || failedPhotos.has(p.id)" class="pc-avatar pc-avatar-initials">
            {{ getInitiales(p) }}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div class="pc-card-body">
        <h4 class="pc-name">{{ getNomComplet(p) }}</h4>
        <span class="pc-age" [class.pc-age-unknown]="!getAgeLabel(p)">
          {{ getAgeLabel(p) || 'Naissance inconnue' }}
        </span>
        <div class="pc-loc" *ngIf="p.lieuNaissance">
          <span class="material-icons-round">place</span>{{ p.lieuNaissance }}
        </div>
        <div class="pc-badges">
          <span class="pc-badge" [class.pc-badge-m]="p.sexe === 'M'" [class.pc-badge-f]="p.sexe === 'F'">
            {{ getSexeLabel(p.sexe) }}
          </span>
          <span class="pc-badge pc-badge-alive" *ngIf="estVivant(p)">Vivant(e)</span>
          <span class="pc-badge pc-badge-dead" *ngIf="!estVivant(p)">D\xE9c\xE9d\xE9(e)</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="pc-card-actions">
        <button class="pc-act" (click)="openDetail(p); $event.stopPropagation()">
          <span class="material-icons-round">visibility</span>Voir
        </button>
        <button class="pc-act" (click)="openEdit(p, $event)">
          <span class="material-icons-round">edit</span>\xC9diter
        </button>
        <button class="pc-act pc-act-danger" (click)="confirmDelete(p, $event)">
          <span class="material-icons-round">delete</span>
        </button>
      </div>

    </div>
  </div>

  <!-- ===== VUE LISTE ===== -->
  <div class="pl-table" *ngIf="!loading && !erreur && personnesFiltrees.length > 0 && viewMode === 'list'">
    <!-- Header -->
    <div class="pl-thead">
      <span class="pl-th pl-th-person">Personne</span>
      <span class="pl-th pl-th-genre">Genre</span>
      <span class="pl-th pl-th-lieu">Lieu de naissance</span>
      <span class="pl-th pl-th-statut">Statut</span>
      <span class="pl-th pl-th-actions">Actions</span>
    </div>
    <!-- Rows -->
    <div class="pl-row" *ngFor="let p of personnesFiltrees" (click)="openDetail(p)">
      <!-- Avatar + nom -->
      <div class="pl-cell pl-cell-person">
        <div class="pl-avatar-wrap">
          <img *ngIf="getPhotoUrl(p) && !failedPhotos.has(p.id)"
               [src]="getPhotoUrl(p)" class="pl-avatar pl-avatar-photo"
               [alt]="getNomComplet(p)" (error)="onPhotoError(p.id)" />
          <div *ngIf="!getPhotoUrl(p) || failedPhotos.has(p.id)"
               class="pl-avatar pl-avatar-initials"
               [class.male]="p.sexe === 'M'" [class.female]="p.sexe === 'F'">
            {{ getInitiales(p) }}
          </div>
          <span class="pl-status-dot" [class.alive]="estVivant(p)" [class.dead]="!estVivant(p)"></span>
        </div>
        <div class="pl-person-info">
          <span class="pl-person-name">{{ getNomComplet(p) }}</span>
          <span class="pl-person-age" [class.pc-age-unknown]="!getAgeLabel(p)">
            {{ getAgeLabel(p) || 'Naissance inconnue' }}
          </span>
        </div>
      </div>
      <!-- Genre -->
      <div class="pl-cell pl-cell-genre">
        <span class="pc-badge" [class.pc-badge-m]="p.sexe === 'M'" [class.pc-badge-f]="p.sexe === 'F'">
          {{ getSexeLabel(p.sexe) }}
        </span>
      </div>
      <!-- Lieu -->
      <div class="pl-cell pl-cell-lieu">
        <span *ngIf="p.lieuNaissance" class="pl-lieu">
          <span class="material-icons-round">place</span>{{ p.lieuNaissance }}
        </span>
        <span *ngIf="!p.lieuNaissance" class="pl-empty">\u2014</span>
      </div>
      <!-- Statut -->
      <div class="pl-cell pl-cell-statut">
        <span class="pc-badge pc-badge-alive" *ngIf="estVivant(p)">Vivant(e)</span>
        <span class="pc-badge pc-badge-dead" *ngIf="!estVivant(p)">D\xE9c\xE9d\xE9(e)</span>
      </div>
      <!-- Actions -->
      <div class="pl-cell pl-cell-actions" (click)="$event.stopPropagation()">
        <button class="btn-icon" title="Voir" (click)="openDetail(p)">
          <span class="material-icons-round">visibility</span>
        </button>
        <button class="btn-icon" title="Modifier" (click)="openEdit(p, $event)">
          <span class="material-icons-round">edit</span>
        </button>
        <button class="btn-icon btn-icon-danger" title="Supprimer" (click)="confirmDelete(p, $event)">
          <span class="material-icons-round">delete</span>
        </button>
      </div>
    </div>
  </div>

</div>

<!-- ===== OVERLAY ===== -->
<div class="panel-overlay" *ngIf="showForm || showDetail || showDeleteConfirm" (click)="closeAll()"></div>

<!-- ===== PANNEAU FORMULAIRE ===== -->
<div class="slide-panel" [class.open]="showForm">
  <div class="panel-header">
    <div>
      <h3>{{ editTarget ? 'Modifier le membre' : 'Nouveau membre' }}</h3>
      <p class="panel-header-sub" *ngIf="editTarget">{{ getNomComplet(editTarget) }}</p>
    </div>
    <button class="btn-icon" (click)="closeAll()">
      <span class="material-icons-round">close</span>
    </button>
  </div>

  <div class="panel-body">
    <form #personneForm="ngForm">

      <!-- Section: Photo -->
      <div class="form-section">
        <div class="section-title">Photo</div>
        <div class="photo-upload-area">
          <div class="photo-preview-wrap">
            <img *ngIf="photoPreview" [src]="photoPreview" class="photo-preview-img" alt="Aper\xE7u"
                 (error)="photoPreview = null" />
            <div *ngIf="!photoPreview" class="photo-placeholder"
                 [class.male]="form.sexe === 'M'" [class.female]="form.sexe === 'F'">
              {{ (form.prenoms.charAt(0) || '') + (form.nomNaissance.charAt(0) || '') || 'MB' }}
            </div>
            <button *ngIf="photoPreview" class="photo-remove-btn" type="button"
                    (click)="removeSelectedPhoto()" title="Supprimer la photo">
              <span class="material-icons-round">close</span>
            </button>
          </div>
          <div class="photo-actions">
            <label class="btn-photo-pick" for="photoInput">
              <span class="material-icons-round">add_photo_alternate</span>
              {{ photoPreview ? 'Changer la photo' : 'Ajouter une photo' }}
            </label>
            <input id="photoInput" type="file" accept="image/jpeg,image/png,image/webp"
                   style="display:none" (change)="onFileSelect($event)" />
            <p class="photo-hint">JPG, PNG ou WebP \xB7 max 5 Mo</p>
          </div>
        </div>
      </div>

      <!-- Section: Identit\xE9 -->
      <div class="form-section">
        <div class="section-title">Identit\xE9</div>

        <div class="form-group">
          <label>Pr\xE9nom(s)</label>
          <input type="text" name="prenoms" [(ngModel)]="form.prenoms" placeholder="Jean-Baptiste, Marie..." class="form-control" />
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label>Nom de naissance</label>
            <input type="text" name="nomNaissance" [(ngModel)]="form.nomNaissance" placeholder="Dupont" class="form-control" />
          </div>
          <div class="form-group">
            <label>Nom d'usage <span class="optional">(optionnel)</span></label>
            <input type="text" name="nomUsage" [(ngModel)]="form.nomUsage" placeholder="Nom apr\xE8s mariage..." class="form-control" />
          </div>
        </div>

        <div class="form-group">
          <label>Sexe</label>
          <div class="radio-group">
            <label class="radio-option" *ngFor="let s of sexeOptions" [class.selected]="form.sexe === s.val">
              <input type="radio" [name]="'sexe'" [value]="s.val" [(ngModel)]="form.sexe" />
              {{ s.label }}
            </label>
          </div>
        </div>
      </div>

      <!-- Section: Naissance -->
      <div class="form-section">
        <div class="section-title">Naissance</div>
        <div class="form-row">
          <div class="form-group">
            <label>Ann\xE9e</label>
            <input type="number" name="nais_annee" [(ngModel)]="form.nais_annee" placeholder="1960" min="1850" [max]="currentYear" class="form-control" />
          </div>
          <div class="form-group">
            <label>Mois</label>
            <select name="nais_mois" [(ngModel)]="form.nais_mois" class="form-control">
              <option value="">\u2014</option>
              <option *ngFor="let m of mois" [value]="m.val">{{ m.label }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Jour</label>
            <input type="number" name="nais_jour" [(ngModel)]="form.nais_jour" placeholder="1" min="1" max="31" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label>Lieu de naissance</label>
          <input type="text" name="lieuNaissance" [(ngModel)]="form.lieuNaissance" placeholder="Ville, pays..." class="form-control" />
        </div>
      </div>

      <!-- Section: D\xE9c\xE8s -->
      <div class="form-section">
        <div class="section-title">
          D\xE9c\xE8s
          <label class="toggle-wrap">
            <input type="checkbox" name="estDecede" [(ngModel)]="form.estDecede" />
            <span class="toggle"></span>
            <span class="toggle-label">{{ form.estDecede ? 'D\xE9c\xE9d\xE9(e)' : 'Vivant(e)' }}</span>
          </label>
        </div>

        <div *ngIf="form.estDecede">
          <div class="form-row">
            <div class="form-group">
              <label>Ann\xE9e</label>
              <input type="number" name="deces_annee" [(ngModel)]="form.deces_annee" placeholder="2020" min="1850" [max]="currentYear" class="form-control" />
            </div>
            <div class="form-group">
              <label>Mois</label>
              <select name="deces_mois" [(ngModel)]="form.deces_mois" class="form-control">
                <option value="">\u2014</option>
                <option *ngFor="let m of mois" [value]="m.val">{{ m.label }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Jour</label>
              <input type="number" name="deces_jour" [(ngModel)]="form.deces_jour" placeholder="1" min="1" max="31" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label>Lieu de d\xE9c\xE8s</label>
            <input type="text" name="lieuDeces" [(ngModel)]="form.lieuDeces" placeholder="Ville, pays..." class="form-control" />
          </div>
        </div>
      </div>

      <!-- Section: Biographie -->
      <div class="form-section">
        <div class="section-title">Biographie <span class="optional">(optionnel)</span></div>
        <div class="form-group">
          <textarea name="biographie" [(ngModel)]="form.biographie" rows="4" placeholder="Parcours de vie, anecdotes..." class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label>Notes</label>
          <textarea name="notes" [(ngModel)]="form.notes" rows="2" placeholder="Notes compl\xE9mentaires..." class="form-control"></textarea>
        </div>
      </div>

    </form>
  </div>

  <div class="panel-footer">
    <button class="btn-ghost" (click)="closeAll()">Annuler</button>
    <button class="btn-primary" (click)="savePersonne()" [disabled]="saving">
      <span class="material-icons-round spin" *ngIf="saving">sync</span>
      {{ saving ? 'Sauvegarde...' : (editTarget ? 'Enregistrer' : 'Cr\xE9er le membre') }}
    </button>
  </div>
</div>

<!-- ===== PANNEAU D\xC9TAIL ===== -->
<div class="slide-panel slide-panel-wide" [class.open]="showDetail">
  <div class="panel-header">
    <div *ngIf="detailTarget">
      <h3>{{ getNomComplet(detailTarget) }}</h3>
      <p class="panel-header-sub">{{ getAgeLabel(detailTarget) }}</p>
    </div>
    <div class="panel-header-actions">
      <button class="btn-icon" title="Modifier" (click)="openEdit(detailTarget!); showDetail = false">
        <span class="material-icons-round">edit</span>
      </button>
      <button class="btn-icon" (click)="closeAll()">
        <span class="material-icons-round">close</span>
      </button>
    </div>
  </div>

  <div class="panel-body" *ngIf="detailTarget as p">

    <!-- Avatar + statut -->
    <div class="detail-hero">
      <img *ngIf="getPhotoUrl(p) && !failedPhotos.has(p.id)"
           [src]="getPhotoUrl(p)"
           class="avatar avatar-xl photo-avatar"
           [alt]="getNomComplet(p)"
           (error)="onPhotoError(p.id)" />
      <div *ngIf="!getPhotoUrl(p) || failedPhotos.has(p.id)"
           class="avatar avatar-xl"
           [class.female]="p.sexe === 'F'" [class.male]="p.sexe === 'M'">
        {{ getInitiales(p) }}
      </div>
      <div class="detail-hero-info">
        <h2>{{ getNomComplet(p) }}</h2>
        <div class="detail-badges">
          <span class="badge" [class.badge-primary]="p.sexe === 'M'" [class.badge-pink]="p.sexe === 'F'" [class.badge-gray]="!p.sexe">
            {{ getSexeLabel(p.sexe) }}
          </span>
          <span class="badge" [class.badge-success]="estVivant(p)" [class.badge-gray]="!estVivant(p)">
            {{ estVivant(p) ? 'Vivant(e)' : 'D\xE9c\xE9d\xE9(e)' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Infos structur\xE9es -->
    <div class="detail-section">
      <div class="section-title">Informations</div>
      <div class="detail-grid">
        <div class="detail-item" *ngIf="p.nomNaissance">
          <span class="detail-label">Nom de naissance</span>
          <span class="detail-value">{{ p.nomNaissance }}</span>
        </div>
        <div class="detail-item" *ngIf="p.nomUsage">
          <span class="detail-label">Nom d'usage</span>
          <span class="detail-value">{{ p.nomUsage }}</span>
        </div>
        <div class="detail-item" *ngIf="p.dateNaissance">
          <span class="detail-label">Date de naissance</span>
          <span class="detail-value">{{ p.dateNaissance }}</span>
        </div>
        <div class="detail-item" *ngIf="p.lieuNaissance">
          <span class="detail-label">Lieu de naissance</span>
          <span class="detail-value">{{ p.lieuNaissance }}</span>
        </div>
        <div class="detail-item" *ngIf="p.dateDeces">
          <span class="detail-label">Date de d\xE9c\xE8s</span>
          <span class="detail-value">{{ p.dateDeces }}</span>
        </div>
        <div class="detail-item" *ngIf="p.lieuDeces">
          <span class="detail-label">Lieu de d\xE9c\xE8s</span>
          <span class="detail-value">{{ p.lieuDeces }}</span>
        </div>
      </div>
    </div>

    <!-- Biographie -->
    <div class="detail-section" *ngIf="p.biographie">
      <div class="section-title">Biographie</div>
      <p class="detail-bio">{{ p.biographie }}</p>
    </div>

    <!-- Notes -->
    <div class="detail-section" *ngIf="p.notes">
      <div class="section-title">Notes</div>
      <p class="detail-bio">{{ p.notes }}</p>
    </div>

  </div>

  <div class="panel-footer">
    <button class="btn-danger" (click)="confirmDelete(detailTarget!, undefined); showDetail = false">
      <span class="material-icons-round">delete</span>
      Supprimer
    </button>
    <button class="btn-ghost" (click)="closeAll()">Fermer</button>
  </div>
</div>

<!-- ===== DIALOG SUPPRESSION ===== -->
<div class="confirm-dialog" *ngIf="showDeleteConfirm">
  <div class="confirm-box">
    <div class="confirm-icon">
      <span class="material-icons-round">delete_forever</span>
    </div>
    <h4>Supprimer {{ deleteTarget ? getNomComplet(deleteTarget) : 'ce membre' }} ?</h4>
    <p>Cette action est irr\xE9versible. Toutes les relations associ\xE9es seront \xE9galement supprim\xE9es.</p>
    <div class="confirm-actions">
      <button class="btn-ghost" (click)="closeAll()">Annuler</button>
      <button class="btn-danger" (click)="deletePersonne()" [disabled]="deleting">
        <span class="material-icons-round spin" *ngIf="deleting">sync</span>
        {{ deleting ? 'Suppression...' : 'Supprimer' }}
      </button>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/personnes/personnes.component.scss */\n.personnes-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.toolbar .search-bar {\n  flex: 1;\n  min-width: 220px;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.panel-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.slide-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 480px;\n  height: 100vh;\n  background: var(--white);\n  box-shadow: var(--shadow-xl);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.slide-panel.open {\n  transform: translateX(0);\n}\n.slide-panel.slide-panel-wide {\n  width: 540px;\n}\n.panel-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.panel-header h3 {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.panel-header-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.panel-header-actions {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.panel-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.panel-footer {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n  background: var(--white);\n}\n.form-section {\n  margin-bottom: 24px;\n}\n.section-title {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.optional {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  font-size: 14px;\n  color: var(--text-primary);\n  background: var(--white);\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n  font-family: inherit;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px var(--primary-bg);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr;\n  gap: 12px;\n}\n.form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.radio-group {\n  display: flex;\n  gap: 8px;\n}\n.radio-option {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  font-size: 14px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.radio-option input[type=radio] {\n  display: none;\n}\n.radio-option.selected {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  color: var(--primary);\n  font-weight: 500;\n}\n.radio-option:hover:not(.selected) {\n  border-color: var(--primary-border);\n  background: var(--bg-muted);\n}\n.toggle-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  text-transform: none;\n  letter-spacing: 0;\n}\n.toggle-wrap input[type=checkbox] {\n  display: none;\n}\n.toggle {\n  width: 36px;\n  height: 20px;\n  border-radius: 10px;\n  background: var(--border);\n  position: relative;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.toggle::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: white;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle-wrap input:checked + .toggle {\n  background: var(--error, #ef4444);\n}\n.toggle-wrap input:checked + .toggle::after {\n  transform: translateX(16px);\n}\n.toggle-label {\n  font-size: 12px;\n  font-weight: 500;\n}\n.detail-hero {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 8px 0 24px;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 24px;\n}\n.detail-hero h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px;\n}\n.detail-hero-info {\n  flex: 1;\n}\n.detail-badges {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.detail-section {\n  margin-bottom: 24px;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px 24px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n.detail-value {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.detail-bio {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin: 0;\n  white-space: pre-wrap;\n}\n.confirm-dialog {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n}\n.confirm-box {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  width: 400px;\n  max-width: 90vw;\n  box-shadow: var(--shadow-xl);\n  text-align: center;\n}\n.confirm-box h4 {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 12px 0 8px;\n}\n.confirm-box p {\n  font-size: 14px;\n  color: var(--text-muted);\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n.confirm-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #fef2f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 4px;\n}\n.confirm-icon .material-icons-round {\n  font-size: 28px !important;\n  color: var(--error, #ef4444);\n}\n.confirm-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.badge-gray {\n  background: var(--bg-muted);\n  color: var(--text-muted);\n  border-color: var(--border);\n}\n.badge-success {\n  background: #f0fdf4;\n  color: #16a34a;\n  border-color: #bbf7d0;\n}\n.avatar.female {\n  background: #fce7f3;\n  color: #db2777;\n}\n.avatar.male {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.avatar-xl {\n  width: 72px;\n  height: 72px;\n  font-size: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  background: var(--primary-bg);\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.avatar-xl.photo-avatar {\n  display: block;\n}\n.photo-avatar {\n  object-fit: cover;\n  object-position: center;\n  background: var(--border-light);\n}\n.photo-upload-area {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.photo-preview-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.photo-preview-img {\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  object-fit: cover;\n  object-position: center;\n  border: 2px solid var(--border);\n  display: block;\n}\n.photo-placeholder {\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 2px dashed var(--border);\n  text-transform: uppercase;\n}\n.photo-placeholder.male {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.photo-placeholder.female {\n  background: #fce7f3;\n  color: #db2777;\n  border-color: #fbcfe8;\n}\n.photo-remove-btn {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #ef4444;\n  border: 2px solid #fff;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  transition: background 0.15s;\n}\n.photo-remove-btn .material-icons-round {\n  font-size: 13px !important;\n}\n.photo-remove-btn:hover {\n  background: #dc2626;\n}\n.photo-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.btn-photo-pick {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 16px;\n  border: 1.5px solid var(--primary-border);\n  border-radius: var(--radius-md);\n  background: var(--primary-bg);\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.btn-photo-pick .material-icons-round {\n  font-size: 18px !important;\n}\n.btn-photo-pick:hover {\n  background: var(--primary-border);\n}\n.photo-hint {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin: 0;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .page-header .btn-primary {\n    width: 100%;\n    justify-content: center;\n  }\n  .toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .toolbar .search-bar {\n    min-width: unset;\n  }\n  .toolbar-right {\n    justify-content: space-between;\n  }\n  .slide-panel,\n  .slide-panel.slide-panel-wide {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 92vh;\n    transform: translateY(100%);\n  }\n  .slide-panel.open,\n  .slide-panel.slide-panel-wide.open {\n    transform: translateY(0);\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .form-row-2 {\n    grid-template-columns: 1fr;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .panel-footer {\n    flex-direction: column-reverse;\n  }\n  .panel-footer .btn-primary,\n  .panel-footer .btn-ghost,\n  .panel-footer .btn-danger {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=personnes.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: ActivatedRoute }, { type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonnesComponent, { className: "PersonnesComponent", filePath: "src/app/pages/personnes/personnes.component.ts", lineNumber: 53 });
})();

// src/app/pages/tree/tree.component.ts
var import_html2canvas = __toESM(require_html2canvas());
var _c02 = ["treeVisual"];
var _c12 = ["treeCanvas"];
var _c22 = (a0) => ({ node: a0 });
var _c3 = () => ["/app/personnes"];
var _c4 = (a0) => ({ id: a0 });
function TreeComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r1.totalPersonnes, " membres \xB7 ", ctx_r1.totalGenerations, " g\xE9n\xE9ration", ctx_r1.totalGenerations > 1 ? "s" : "", " ");
  }
}
function TreeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 10);
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function TreeComponent_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRoot(null));
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.rootPersonName);
  }
}
function TreeComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Racine");
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_37_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function TreeComponent_div_37_button_10_Template_button_click_0_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRoot(p_r6));
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.rootPersonId === p_r6.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("male", p_r6.sexe === "M")("female", p_r6.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitiales(p_r6), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getNomComplet(p_r6));
  }
}
function TreeComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function TreeComponent_div_37_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "span", 10);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function TreeComponent_div_37_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rootSearchQuery, $event) || (ctx_r1.rootSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 41)(6, "button", 42);
    \u0275\u0275listener("click", function TreeComponent_div_37_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setRoot(null));
    });
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "Arbre complet ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TreeComponent_div_37_button_10_Template, 5, 8, "button", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rootSearchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", !ctx_r1.rootPersonId);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.rootCandidates);
  }
}
function TreeComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function TreeComponent_div_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRootPicker = false);
    });
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement de l'arbre... ");
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.erreur, " ");
  }
}
function TreeComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 10);
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Arbre vide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Ajoutez des membres et des unions pour construire l'arbre familial.");
    \u0275\u0275elementEnd()();
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 65);
    \u0275\u0275listener("error", function TreeComponent_div_44_ng_template_2_ng_container_1_img_4_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r11);
      const node_r10 = \u0275\u0275nextContext(2).node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(node_r10.p1.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(2).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(node_r10.p1), \u0275\u0275sanitizeUrl)("alt", ctx_r1.getInitiales(node_r10.p1));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(2).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitiales(node_r10.p1));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 10);
    \u0275\u0275text(2, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 67);
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_div_11_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 65);
    \u0275\u0275listener("error", function TreeComponent_div_44_ng_template_2_ng_container_1_div_11_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r13);
      const node_r10 = \u0275\u0275nextContext(3).node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(node_r10.p2.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(3).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(node_r10.p2), \u0275\u0275sanitizeUrl)("alt", ctx_r1.getInitiales(node_r10.p2));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_div_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(3).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitiales(node_r10.p2));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("mouseenter", function TreeComponent_div_44_ng_template_2_ng_container_1_div_11_Template_div_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const node_r10 = \u0275\u0275nextContext(2).node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTooltip(node_r10.p2, $event));
    })("mousemove", function TreeComponent_div_44_ng_template_2_ng_container_1_div_11_Template_div_mousemove_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.moveTooltip($event));
    })("mouseleave", function TreeComponent_div_44_ng_template_2_ng_container_1_div_11_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideTooltip());
    })("click", function TreeComponent_div_44_ng_template_2_ng_container_1_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const node_r10 = \u0275\u0275nextContext(2).node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(node_r10.p2));
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275template(2, TreeComponent_div_44_ng_template_2_ng_container_1_div_11_img_2_Template, 1, 2, "img", 59)(3, TreeComponent_div_44_ng_template_2_ng_container_1_div_11_span_3_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(2).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", node_r10.p2.sexe === "M")("female", node_r10.p2.sexe === "F")("ts-active", (ctx_r1.selectedPerson == null ? null : ctx_r1.selectedPerson.id) === node_r10.p2.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("male", node_r10.p2.sexe === "M")("female", node_r10.p2.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPhotoUrl(node_r10.p2) && !ctx_r1.failedPhotos.has(node_r10.p2.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getPhotoUrl(node_r10.p2) || ctx_r1.failedPhotos.has(node_r10.p2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", node_r10.p2.prenoms, " ", node_r10.p2.nomUsage ?? node_r10.p2.nomNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.yearLabel(node_r10.p2));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_div_12_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(3).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.extractAnnee(node_r10.union.dateDebut));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 10);
    \u0275\u0275text(2, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, TreeComponent_div_44_ng_template_2_ng_container_1_div_12_ng_container_4_Template, 2, 1, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(2).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeLabel(node_r10.union.type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r10.union.dateDebut);
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 56)(2, "div", 57);
    \u0275\u0275listener("mouseenter", function TreeComponent_div_44_ng_template_2_ng_container_1_Template_div_mouseenter_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const node_r10 = \u0275\u0275nextContext().node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTooltip(node_r10.p1, $event));
    })("mousemove", function TreeComponent_div_44_ng_template_2_ng_container_1_Template_div_mousemove_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.moveTooltip($event));
    })("mouseleave", function TreeComponent_div_44_ng_template_2_ng_container_1_Template_div_mouseleave_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.hideTooltip());
    })("click", function TreeComponent_div_44_ng_template_2_ng_container_1_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const node_r10 = \u0275\u0275nextContext().node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(node_r10.p1));
    });
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275template(4, TreeComponent_div_44_ng_template_2_ng_container_1_img_4_Template, 1, 2, "img", 59)(5, TreeComponent_div_44_ng_template_2_ng_container_1_span_5_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, TreeComponent_div_44_ng_template_2_ng_container_1_div_10_Template, 4, 0, "div", 62)(11, TreeComponent_div_44_ng_template_2_ng_container_1_div_11_Template, 8, 15, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, TreeComponent_div_44_ng_template_2_ng_container_1_div_12_Template, 5, 2, "div", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext().node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ts-root", node_r10.isRoot)("ts-selected", ctx_r1.selectedPerson && (ctx_r1.selectedPerson.id === node_r10.p1.id || ctx_r1.selectedPerson.id === (node_r10.p2 == null ? null : node_r10.p2.id)));
    \u0275\u0275advance();
    \u0275\u0275classProp("male", node_r10.p1.sexe === "M")("female", node_r10.p1.sexe === "F")("ts-active", (ctx_r1.selectedPerson == null ? null : ctx_r1.selectedPerson.id) === node_r10.p1.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("male", node_r10.p1.sexe === "M")("female", node_r10.p1.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPhotoUrl(node_r10.p1) && !ctx_r1.failedPhotos.has(node_r10.p1.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getPhotoUrl(node_r10.p1) || ctx_r1.failedPhotos.has(node_r10.p1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", node_r10.p1.prenoms, " ", node_r10.p1.nomUsage ?? node_r10.p1.nomNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.yearLabel(node_r10.p1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r10.p2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r10.p2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r10.union == null ? null : node_r10.union.type);
  }
}
function TreeComponent_div_44_ng_template_2_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 65);
    \u0275\u0275listener("error", function TreeComponent_div_44_ng_template_2_div_2_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r15);
      const node_r10 = \u0275\u0275nextContext(2).node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(node_r10.p1.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(2).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(node_r10.p1), \u0275\u0275sanitizeUrl)("alt", ctx_r1.getInitiales(node_r10.p1));
  }
}
function TreeComponent_div_44_ng_template_2_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(2).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitiales(node_r10.p1));
  }
}
function TreeComponent_div_44_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("mouseenter", function TreeComponent_div_44_ng_template_2_div_2_Template_div_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const node_r10 = \u0275\u0275nextContext().node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showTooltip(node_r10.p1, $event));
    })("mousemove", function TreeComponent_div_44_ng_template_2_div_2_Template_div_mousemove_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.moveTooltip($event));
    })("mouseleave", function TreeComponent_div_44_ng_template_2_div_2_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.hideTooltip());
    })("click", function TreeComponent_div_44_ng_template_2_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const node_r10 = \u0275\u0275nextContext().node;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(node_r10.p1));
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275template(2, TreeComponent_div_44_ng_template_2_div_2_img_2_Template, 1, 2, "img", 59)(3, TreeComponent_div_44_ng_template_2_div_2_span_3_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext().node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ts-root", node_r10.isRoot)("male", node_r10.p1.sexe === "M")("female", node_r10.p1.sexe === "F")("ts-active", (ctx_r1.selectedPerson == null ? null : ctx_r1.selectedPerson.id) === node_r10.p1.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("male", node_r10.p1.sexe === "M")("female", node_r10.p1.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPhotoUrl(node_r10.p1) && !ctx_r1.failedPhotos.has(node_r10.p1.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getPhotoUrl(node_r10.p1) || ctx_r1.failedPhotos.has(node_r10.p1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", node_r10.p1.prenoms, " ", node_r10.p1.nomUsage ?? node_r10.p1.nomNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.yearLabel(node_r10.p1));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementContainer(1, 72);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(2).node;
    \u0275\u0275nextContext();
    const nodeRef_r16 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", nodeRef_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, node_r10.children[0]));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_3_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "div", 78);
    \u0275\u0275elementContainer(2, 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r17 = ctx.$implicit;
    \u0275\u0275nextContext(4);
    const nodeRef_r16 = \u0275\u0275reference(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", nodeRef_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, child_r17));
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "div", 74);
    \u0275\u0275elementStart(2, "div", 75);
    \u0275\u0275template(3, TreeComponent_div_44_ng_template_2_ng_container_3_div_3_div_3_Template, 3, 4, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext(2).node;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-left", ctx_r1.barInset(node_r10.children[0]), "px")("margin-right", ctx_r1.barInset(node_r10.children[node_r10.children.length - 1]), "px");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", node_r10.children);
  }
}
function TreeComponent_div_44_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275template(2, TreeComponent_div_44_ng_template_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 19)(3, TreeComponent_div_44_ng_template_2_ng_container_3_div_3_Template, 4, 5, "div", 71);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const node_r10 = \u0275\u0275nextContext().node;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", node_r10.children.length === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r10.children.length > 1);
  }
}
function TreeComponent_div_44_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, TreeComponent_div_44_ng_template_2_ng_container_1_Template, 13, 22, "ng-container", 19)(2, TreeComponent_div_44_ng_template_2_div_2_Template, 8, 17, "div", 55)(3, TreeComponent_div_44_ng_template_2_ng_container_3_Template, 4, 2, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r10 = ctx.node;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r10.type === "union");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r10.type === "solo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", node_r10.children.length > 0);
  }
}
function TreeComponent_div_44_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementContainer(1, 72);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const root_r18 = ctx.$implicit;
    \u0275\u0275nextContext();
    const nodeRef_r16 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", nodeRef_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, root_r18));
  }
}
function TreeComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51, 1);
    \u0275\u0275listener("pointerdown", function TreeComponent_div_44_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startDrag($event));
    })("pointermove", function TreeComponent_div_44_Template_div_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drag($event));
    })("pointerup", function TreeComponent_div_44_Template_div_pointerup_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.endDrag($event));
    })("pointercancel", function TreeComponent_div_44_Template_div_pointercancel_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.endDrag($event));
    });
    \u0275\u0275template(2, TreeComponent_div_44_ng_template_2_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "div", 52);
    \u0275\u0275template(5, TreeComponent_div_44_ng_container_5_Template, 2, 4, "ng-container", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", ctx_r1.treeTransform);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.treeRoots);
  }
}
function TreeComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 10);
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ctrl + molette pour zoomer \xB7 Glisser pour naviguer \xB7 Clic pour la fiche ");
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_46_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 92);
    \u0275\u0275listener("error", function TreeComponent_div_46_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(ctx_r1.hoveredPerson.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(ctx_r1.hoveredPerson), \u0275\u0275sanitizeUrl);
  }
}
function TreeComponent_div_46_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitiales(ctx_r1.hoveredPerson));
  }
}
function TreeComponent_div_46_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93)(1, "span", 10);
    \u0275\u0275text(2, "hourglass_bottom");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.tooltipAge(ctx_r1.hoveredPerson), " ");
  }
}
function TreeComponent_div_46_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94)(1, "span", 10);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.hoveredPerson.lieuNaissance, " ");
  }
}
function TreeComponent_div_46_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_46_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275template(2, TreeComponent_div_46_img_2_Template, 1, 1, "img", 82)(3, TreeComponent_div_46_span_3_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 83)(5, "span", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TreeComponent_div_46_span_7_Template, 4, 1, "span", 85)(8, TreeComponent_div_46_span_8_Template, 4, 1, "span", 86);
    \u0275\u0275elementStart(9, "div", 87)(10, "span", 88);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, TreeComponent_div_46_span_12_Template, 2, 0, "span", 89)(13, TreeComponent_div_46_span_13_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 91);
    \u0275\u0275text(15, "Clic pour la fiche compl\xE8te");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.tooltipX, "px")("top", ctx_r1.tooltipY, "px");
    \u0275\u0275advance();
    \u0275\u0275classProp("male", ctx_r1.hoveredPerson.sexe === "M")("female", ctx_r1.hoveredPerson.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPhotoUrl(ctx_r1.hoveredPerson) && !ctx_r1.failedPhotos.has(ctx_r1.hoveredPerson.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getPhotoUrl(ctx_r1.hoveredPerson) || ctx_r1.failedPhotos.has(ctx_r1.hoveredPerson.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getNomComplet(ctx_r1.hoveredPerson));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tooltipAge(ctx_r1.hoveredPerson));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hoveredPerson.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tt-m", ctx_r1.hoveredPerson.sexe === "M")("tt-f", ctx_r1.hoveredPerson.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.hoveredPerson.sexe === "M" ? "Homme" : ctx_r1.hoveredPerson.sexe === "F" ? "Femme" : "Autre", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estVivant(ctx_r1.hoveredPerson));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estVivant(ctx_r1.hoveredPerson));
  }
}
function TreeComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275listener("click", function TreeComponent_div_47_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_55_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 110);
    \u0275\u0275listener("error", function TreeComponent_div_55_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(ctx_r1.selectedPerson.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(ctx_r1.selectedPerson), \u0275\u0275sanitizeUrl);
  }
}
function TreeComponent_div_55_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitiales(ctx_r1.selectedPerson));
  }
}
function TreeComponent_div_55_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_55_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function TreeComponent_div_55_div_13_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedPerson.lieuNaissance);
  }
}
function TreeComponent_div_55_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span", 10);
    \u0275\u0275text(2, "cake");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 114)(4, "span", 115);
    \u0275\u0275text(5, "Naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 116);
    \u0275\u0275text(7);
    \u0275\u0275template(8, TreeComponent_div_55_div_13_span_8_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedPerson.dateNaissance ?? "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPerson.lieuNaissance);
  }
}
function TreeComponent_div_55_div_14_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.selectedPerson.lieuDeces);
  }
}
function TreeComponent_div_55_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span", 10);
    \u0275\u0275text(2, "sentiment_very_dissatisfied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 114)(4, "span", 115);
    \u0275\u0275text(5, "D\xE9c\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 116);
    \u0275\u0275text(7);
    \u0275\u0275template(8, TreeComponent_div_55_div_14_span_8_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedPerson.dateDeces ?? "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPerson.lieuDeces);
  }
}
function TreeComponent_div_55_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "span", 10);
    \u0275\u0275text(2, "hourglass_bottom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 114)(4, "span", 115);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.estVivant(ctx_r1.selectedPerson) ? "\xC2ge" : "Dur\xE9e de vie");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getAgeLabel(ctx_r1.selectedPerson));
  }
}
function TreeComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "div", 100);
    \u0275\u0275template(3, TreeComponent_div_55_img_3_Template, 1, 1, "img", 101)(4, TreeComponent_div_55_span_4_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 102);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 103)(8, "span", 104);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TreeComponent_div_55_span_10_Template, 2, 0, "span", 105)(11, TreeComponent_div_55_span_11_Template, 2, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 107);
    \u0275\u0275template(13, TreeComponent_div_55_div_13_Template, 9, 2, "div", 108)(14, TreeComponent_div_55_div_14_Template, 9, 2, "div", 108)(15, TreeComponent_div_55_div_15_Template, 8, 2, "div", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 109);
    \u0275\u0275listener("click", function TreeComponent_div_55_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementStart(17, "span", 10);
    \u0275\u0275text(18, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "Voir le profil complet ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("male", ctx_r1.selectedPerson.sexe === "M")("female", ctx_r1.selectedPerson.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPhotoUrl(ctx_r1.selectedPerson) && !ctx_r1.failedPhotos.has(ctx_r1.selectedPerson.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getPhotoUrl(ctx_r1.selectedPerson) || ctx_r1.failedPhotos.has(ctx_r1.selectedPerson.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getNomComplet(ctx_r1.selectedPerson));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pc-badge-m", ctx_r1.selectedPerson.sexe === "M")("pc-badge-f", ctx_r1.selectedPerson.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedPerson.sexe === "M" ? "Homme" : ctx_r1.selectedPerson.sexe === "F" ? "Femme" : "Autre", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estVivant(ctx_r1.selectedPerson));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estVivant(ctx_r1.selectedPerson));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedPerson.dateNaissance || ctx_r1.selectedPerson.lieuNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estVivant(ctx_r1.selectedPerson));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getAgeLabel(ctx_r1.selectedPerson));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c3))("queryParams", \u0275\u0275pureFunction1(20, _c4, ctx_r1.selectedPerson.id));
  }
}
var TreeComponent = class _TreeComponent {
  api;
  loading = true;
  erreur = null;
  treeRoots = [];
  treeVisual;
  treeCanvas;
  getInitiales = getInitiales;
  extractAnnee = extractAnnee;
  estVivant = estVivant;
  getNomComplet = getNomComplet;
  getAgeLabel = getAgeLabel;
  getPhotoUrl = getPhotoUrl;
  // ── Données brutes ───────────────────────────────────────────────────────
  allPersonnes = [];
  allUnions = [];
  // ── Stats ────────────────────────────────────────────────────────────────
  get totalPersonnes() {
    return this.allPersonnes.length;
  }
  get totalGenerations() {
    return this.treeDepth(this.treeRoots);
  }
  treeDepth(nodes) {
    if (!nodes.length)
      return 0;
    return 1 + Math.max(...nodes.map((n) => this.treeDepth(n.children)));
  }
  // ── Sélection de racine ──────────────────────────────────────────────────
  rootPersonId = "";
  rootPersonName = "";
  showRootPicker = false;
  rootSearchQuery = "";
  get rootCandidates() {
    const q = this.rootSearchQuery.toLowerCase().trim();
    const list = q ? this.allPersonnes.filter((p) => getNomComplet(p).toLowerCase().includes(q)) : this.allPersonnes;
    return list.slice(0, 30);
  }
  // ── Canvas transform ─────────────────────────────────────────────────────
  scale = 1;
  minScale = 0.3;
  maxScale = 2.5;
  translateX = 0;
  translateY = 0;
  isDragging = false;
  dragMoved = false;
  dragOrigin = { x: 0, y: 0 };
  startTranslate = { x: 0, y: 0 };
  captureTarget = null;
  captureId = 0;
  // ── Panneau détail ───────────────────────────────────────────────────────
  selectedPerson = null;
  showDetail = false;
  failedPhotos = /* @__PURE__ */ new Set();
  // ── Mode kiosque ─────────────────────────────────────────────────────────
  isKiosk = false;
  exporting = false;
  // ── Tooltip ──────────────────────────────────────────────────────────────
  hoveredPerson = null;
  tooltipX = 0;
  tooltipY = 0;
  tooltipHideTimer = null;
  onDocPointerOver = (e) => {
    if (!this.hoveredPerson)
      return;
    if (!e.target.closest(".ts-person, .ts-solo-card")) {
      this.clearTooltip();
    }
  };
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    document.addEventListener("pointerover", this.onDocPointerOver, { passive: true });
    forkJoin({ personnes: this.api.getPersonnes(), unions: this.api.getUnions() }).subscribe({
      next: ({ personnes, unions }) => {
        this.allPersonnes = personnes;
        this.allUnions = unions;
        this.treeRoots = this.buildTree(personnes, unions);
        this.loading = false;
      },
      error: () => {
        this.erreur = "Impossible de charger l'arbre.";
        this.loading = false;
      }
    });
  }
  ngOnDestroy() {
    document.removeEventListener("pointerover", this.onDocPointerOver);
    clearTimeout(this.tooltipHideTimer);
  }
  // ══════════════════════════════════════════════════════════════════════════
  // Construction récursive de l'arbre
  // ══════════════════════════════════════════════════════════════════════════
  buildTree(personnes, unions) {
    const childIds = new Set(unions.flatMap((u) => u.filiations.map((f) => f.enfantId)));
    const placedPersons = /* @__PURE__ */ new Set();
    const placedUnions = /* @__PURE__ */ new Set();
    const buildNode = (pid) => {
      if (placedPersons.has(pid))
        return null;
      const person = personnes.find((p) => p.id === pid);
      if (!person)
        return null;
      placedPersons.add(pid);
      const myUnion = unions.find((u) => !placedUnions.has(u.id) && u.participants.some((pt) => pt.personneId === pid));
      if (!myUnion) {
        return { type: "solo", p1: person, isRoot: !childIds.has(pid), children: [] };
      }
      placedUnions.add(myUnion.id);
      const partnerPart = myUnion.participants.filter((pt) => pt.personneId !== pid).sort((a, b) => (a.ordre ?? 1) - (b.ordre ?? 1))[0];
      let partner;
      if (partnerPart && !placedPersons.has(partnerPart.personneId)) {
        partner = personnes.find((p) => p.id === partnerPart.personneId);
        if (partner)
          placedPersons.add(partner.id);
      }
      const children = myUnion.filiations.map((f) => buildNode(f.enfantId)).filter((n) => n !== null);
      return {
        type: "union",
        p1: person,
        p2: partner,
        union: myUnion,
        isRoot: !childIds.has(pid),
        children
      };
    };
    const rootCandidates = personnes.filter((p) => {
      if (childIds.has(p.id))
        return false;
      const hasChildPartner = unions.some((u) => u.participants.some((pt) => pt.personneId === p.id) && u.participants.some((pt) => pt.personneId !== p.id && childIds.has(pt.personneId)));
      return !hasChildPartner;
    });
    const roots = [];
    for (const p of rootCandidates) {
      if (placedPersons.has(p.id))
        continue;
      const node = buildNode(p.id);
      if (node)
        roots.push(node);
    }
    return roots;
  }
  // ══════════════════════════════════════════════════════════════════════════
  // Sélection de racine
  // ══════════════════════════════════════════════════════════════════════════
  setRoot(p) {
    this.rootPersonId = p?.id ?? "";
    this.rootPersonName = p ? getNomComplet(p) : "";
    this.showRootPicker = false;
    this.rootSearchQuery = "";
    this.resetView();
    if (!p) {
      this.treeRoots = this.buildTree(this.allPersonnes, this.allUnions);
    } else {
      const sub = this.extractSubtree(p.id);
      this.treeRoots = this.buildTree(sub.personnes, sub.unions);
    }
  }
  extractSubtree(personId) {
    const inclPersonIds = /* @__PURE__ */ new Set();
    const inclUnionIds = /* @__PURE__ */ new Set();
    const queue = [personId];
    while (queue.length) {
      const pid = queue.pop();
      if (inclPersonIds.has(pid))
        continue;
      inclPersonIds.add(pid);
      for (const union of this.allUnions) {
        if (inclUnionIds.has(union.id))
          continue;
        if (!union.participants.some((p) => p.personneId === pid))
          continue;
        inclUnionIds.add(union.id);
        union.participants.forEach((p) => inclPersonIds.add(p.personneId));
        union.filiations.forEach((f) => {
          if (!inclPersonIds.has(f.enfantId))
            queue.push(f.enfantId);
        });
      }
    }
    return {
      personnes: this.allPersonnes.filter((p) => inclPersonIds.has(p.id)),
      unions: this.allUnions.filter((u) => inclUnionIds.has(u.id))
    };
  }
  // ══════════════════════════════════════════════════════════════════════════
  // Helpers template
  // ══════════════════════════════════════════════════════════════════════════
  get treeTransform() {
    return `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
  }
  typeLabel(type) {
    const map = {
      mariage: "Mariage",
      pacs: "PACS",
      union_libre: "Union libre",
      fiancailles: "Fian\xE7ailles",
      adoption: "Adoption",
      polygamie: "Polygamie"
    };
    return map[type ?? ""] ?? type ?? "";
  }
  yearLabel(p) {
    const n = extractAnnee(p.dateNaissance);
    if (!n)
      return "";
    if (!estVivant(p))
      return `${n} \u2013 ${extractAnnee(p.dateDeces) ?? "?"}`;
    return `${n} \u2013 pr\xE9sent`;
  }
  /** Demi-largeur approximative d'un nœud pour le calcul de la barre horizontale. */
  barInset(node) {
    return node.type === "union" ? 155 : 70;
  }
  // ══════════════════════════════════════════════════════════════════════════
  // Détail & tooltip
  // ══════════════════════════════════════════════════════════════════════════
  openDetail(p) {
    if (this.dragMoved)
      return;
    this.selectedPerson = p;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
    this.selectedPerson = null;
  }
  onPhotoError(id) {
    this.failedPhotos.add(id);
  }
  showTooltip(p, event) {
    if (this.isDragging || this.dragMoved)
      return;
    clearTimeout(this.tooltipHideTimer);
    this.hoveredPerson = p;
    this.repositionTooltip(event);
  }
  moveTooltip(event) {
    if (!this.hoveredPerson || this.isDragging || this.dragMoved)
      return;
    this.repositionTooltip(event);
  }
  hideTooltip() {
    this.tooltipHideTimer = setTimeout(() => {
      this.hoveredPerson = null;
    }, 80);
  }
  clearTooltip() {
    clearTimeout(this.tooltipHideTimer);
    this.hoveredPerson = null;
  }
  repositionTooltip(event) {
    const tw = 240;
    this.tooltipX = event.clientX + 14 + tw > window.innerWidth ? event.clientX - tw - 14 : event.clientX + 14;
    this.tooltipY = event.clientY - 10;
  }
  tooltipAge(p) {
    const n = extractAnnee(p.dateNaissance);
    if (!n)
      return "";
    if (!estVivant(p)) {
      const d = extractAnnee(p.dateDeces);
      return `${n} \u2013 ${d ?? "?"}${d ? "  (" + (d - n) + " ans)" : ""}`;
    }
    return `${n} \u2013 pr\xE9sent  (${(/* @__PURE__ */ new Date()).getFullYear() - n} ans)`;
  }
  // ══════════════════════════════════════════════════════════════════════════
  // Zoom / Drag / Kiosque / Export
  // ══════════════════════════════════════════════════════════════════════════
  zoomIn() {
    this.zoomAtCenter(this.scale + 0.15);
  }
  zoomOut() {
    this.zoomAtCenter(this.scale - 0.15);
  }
  resetView() {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
  }
  zoomAtCenter(newScale) {
    const canvas = this.treeCanvas?.nativeElement;
    if (!canvas) {
      this.updateScale(newScale);
      return;
    }
    const rect = canvas.getBoundingClientRect();
    this.applyZoom(newScale, rect.width / 2, rect.height / 2);
  }
  applyZoom(newScale, originX, originY) {
    const clamped = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
    const ratio = clamped / this.scale;
    this.translateX = originX - ratio * (originX - this.translateX);
    this.translateY = originY - ratio * (originY - this.translateY);
    this.scale = clamped;
  }
  updateScale(newScale) {
    this.scale = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
  }
  onWheel(event) {
    if (!event.ctrlKey)
      return;
    event.preventDefault();
    const canvas = this.treeCanvas?.nativeElement;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      this.applyZoom(this.scale - event.deltaY * 1e-3, event.clientX - rect.left, event.clientY - rect.top);
    } else {
      this.updateScale(this.scale - event.deltaY * 1e-3);
    }
  }
  startDrag(event) {
    if (event.button !== 0)
      return;
    this.clearTooltip();
    this.isDragging = true;
    this.dragMoved = false;
    this.dragOrigin = { x: event.clientX, y: event.clientY };
    this.startTranslate = { x: this.translateX, y: this.translateY };
    this.captureTarget = event.currentTarget;
    this.captureId = event.pointerId;
  }
  drag(event) {
    if (!this.isDragging)
      return;
    const dx = event.clientX - this.dragOrigin.x;
    const dy = event.clientY - this.dragOrigin.y;
    if (!this.dragMoved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
      this.dragMoved = true;
      try {
        this.captureTarget?.setPointerCapture(this.captureId);
      } catch {
      }
    }
    this.translateX = this.startTranslate.x + dx;
    this.translateY = this.startTranslate.y + dy;
  }
  endDrag(event) {
    if (!this.isDragging)
      return;
    this.isDragging = false;
    if (this.dragMoved) {
      try {
        this.captureTarget?.releasePointerCapture(this.captureId);
      } catch {
      }
    }
    this.captureTarget = null;
    setTimeout(() => {
      this.dragMoved = false;
    }, 50);
  }
  toggleKiosk() {
    if (!this.isKiosk) {
      document.documentElement.requestFullscreen?.().catch(() => {
      });
      this.isKiosk = true;
    } else {
      document.exitFullscreen?.().catch(() => {
      });
      this.isKiosk = false;
    }
  }
  exportTree() {
    return __async(this, null, function* () {
      if (!this.treeVisual || this.exporting)
        return;
      this.exporting = true;
      try {
        const canvas = yield (0, import_html2canvas.default)(this.treeVisual.nativeElement, {
          backgroundColor: "#F0F4FF",
          scale: 2,
          useCORS: true,
          logging: false
        });
        canvas.toBlob((blob) => {
          if (!blob)
            return;
          const url = URL.createObjectURL(blob);
          Object.assign(document.createElement("a"), { href: url, download: "arbre-familial.png" }).click();
          URL.revokeObjectURL(url);
        }, "image/png");
      } finally {
        this.exporting = false;
      }
    });
  }
  exportTreePdf() {
    return __async(this, null, function* () {
      if (!this.treeVisual || this.exporting)
        return;
      this.exporting = true;
      try {
        const canvas = yield (0, import_html2canvas.default)(this.treeVisual.nativeElement, { backgroundColor: "#F0F4FF", scale: 2, useCORS: true, logging: false });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new E({ orientation: "landscape", unit: "mm", format: "a4" });
        const pw = pdf.internal.pageSize.getWidth();
        const ph = pdf.internal.pageSize.getHeight();
        const m = 10;
        const pdfW = pw - m * 2;
        const pdfH = Math.min(pdf.getImageProperties(imgData).height * pdfW / pdf.getImageProperties(imgData).width, ph - m * 2);
        pdf.addImage(imgData, "PNG", m, m, pdfW, pdfH);
        pdf.save("arbre-familial.pdf");
      } finally {
        this.exporting = false;
      }
    });
  }
  static \u0275fac = function TreeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreeComponent, selectors: [["app-tree"]], viewQuery: function TreeComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeVisual = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeCanvas = _t.first);
    }
  }, standalone: false, decls: 56, vars: 27, consts: [["treeCanvas", ""], ["treeVisual", ""], ["nodeRef", ""], [1, "tree-page"], [1, "tree-toolbar"], [1, "toolbar-left"], ["class", "badge badge-primary", 4, "ngIf"], ["class", "root-badge", 4, "ngIf"], [1, "toolbar-right"], ["title", "D\xE9zoomer", 1, "btn-ghost", "btn-sm", 3, "click"], [1, "material-icons-round"], [1, "zoom-level"], ["title", "Zoomer", 1, "btn-ghost", "btn-sm", 3, "click"], ["title", "R\xE9initialiser", 1, "btn-ghost", "btn-sm", 3, "click"], [1, "btn-outline", "btn-sm", 3, "click", "disabled"], [2, "width", "1px", "height", "20px", "background", "var(--border)", "margin", "0 2px"], [1, "btn-ghost", "btn-sm", "tree-kiosk-btn", 3, "click", "title"], [1, "root-picker-wrap"], [1, "btn-ghost", "btn-sm", "root-pick-btn", 3, "click"], [4, "ngIf"], ["class", "root-dropdown", 3, "click", 4, "ngIf"], ["class", "root-overlay", 3, "click", 4, "ngIf"], [1, "tree-canvas", 3, "wheel", "mouseleave"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "tree-visual", 3, "transform", "pointerdown", "pointermove", "pointerup", "pointercancel", 4, "ngIf"], ["class", "zoom-hint", 4, "ngIf"], ["class", "tree-tooltip", 3, "left", "top", 4, "ngIf"], ["class", "panel-overlay", 3, "click", 4, "ngIf"], [1, "detail-panel"], [1, "dp-header"], [1, "btn-icon", 3, "click"], ["class", "dp-body", 4, "ngIf"], [1, "badge", "badge-primary"], [1, "root-badge"], [1, "root-badge-name"], [1, "root-badge-clear", 3, "click"], [1, "root-dropdown", 3, "click"], [1, "root-search-bar"], ["type", "text", "placeholder", "Rechercher\u2026", 1, "root-search-input", 3, "ngModelChange", "ngModel"], [1, "root-list"], [1, "root-list-item", "root-list-all", 3, "click"], ["class", "root-list-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "root-list-item", 3, "click"], [1, "root-list-avatar"], [1, "root-overlay", 3, "click"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "error-state"], [1, "empty-state"], [1, "tree-visual", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], [1, "ts-roots"], [4, "ngFor", "ngForOf"], [1, "ts-subtree"], ["class", "ts-solo-card", 3, "ts-root", "male", "female", "ts-active", "mouseenter", "mousemove", "mouseleave", "click", 4, "ngIf"], [1, "ts-couple"], [1, "ts-person", 3, "mouseenter", "mousemove", "mouseleave", "click"], [1, "ts-avatar"], ["class", "ts-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], [1, "ts-name"], [1, "ts-year"], ["class", "ts-heart", 4, "ngIf"], ["class", "ts-person", 3, "male", "female", "ts-active", "mouseenter", "mousemove", "mouseleave", "click", 4, "ngIf"], ["class", "ts-union-badge", 4, "ngIf"], [1, "ts-avatar-photo", 3, "error", "src", "alt"], [1, "ts-heart"], [1, "ts-hline"], [1, "ts-union-badge"], [1, "ts-solo-card", 3, "mouseenter", "mousemove", "mouseleave", "click"], [1, "ts-down"], ["class", "ts-branch", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ts-branch"], [1, "ts-hbar"], [1, "ts-children-row"], ["class", "ts-child-col", 4, "ngFor", "ngForOf"], [1, "ts-child-col"], [1, "ts-up"], [1, "zoom-hint"], [1, "tree-tooltip"], [1, "tt-avatar"], ["class", "tt-avatar-photo", 3, "src", "error", 4, "ngIf"], [1, "tt-content"], [1, "tt-name"], ["class", "tt-dates", 4, "ngIf"], ["class", "tt-lieu", 4, "ngIf"], [1, "tt-badges"], [1, "tt-badge"], ["class", "tt-badge tt-alive", 4, "ngIf"], ["class", "tt-badge tt-dead", 4, "ngIf"], [1, "tt-hint"], [1, "tt-avatar-photo", 3, "error", "src"], [1, "tt-dates"], [1, "tt-lieu"], [1, "tt-badge", "tt-alive"], [1, "tt-badge", "tt-dead"], [1, "panel-overlay", 3, "click"], [1, "dp-body"], [1, "dp-avatar-wrap"], [1, "dp-avatar"], ["class", "dp-avatar-photo", 3, "src", "error", 4, "ngIf"], [1, "dp-name"], [1, "dp-badges"], [1, "pc-badge"], ["class", "pc-badge pc-badge-alive", 4, "ngIf"], ["class", "pc-badge pc-badge-dead", 4, "ngIf"], [1, "dp-info-list"], ["class", "dp-info-item", 4, "ngIf"], [1, "btn-primary", "dp-link", 3, "click", "routerLink", "queryParams"], [1, "dp-avatar-photo", 3, "error", "src"], [1, "pc-badge", "pc-badge-alive"], [1, "pc-badge", "pc-badge-dead"], [1, "dp-info-item"], [1, "dp-info-text"], [1, "dp-info-label"], [1, "dp-info-value"]], template: function TreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h2");
      \u0275\u0275text(4, "Arbre familial");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, TreeComponent_span_5_Template, 2, 3, "span", 6)(6, TreeComponent_div_6_Template, 8, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 8)(8, "button", 9);
      \u0275\u0275listener("click", function TreeComponent_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275elementStart(9, "span", 10);
      \u0275\u0275text(10, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "span", 11);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275listener("click", function TreeComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275elementStart(15, "span", 10);
      \u0275\u0275text(16, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 13);
      \u0275\u0275listener("click", function TreeComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetView());
      });
      \u0275\u0275elementStart(18, "span", 10);
      \u0275\u0275text(19, "refresh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 14);
      \u0275\u0275listener("click", function TreeComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportTree());
      });
      \u0275\u0275elementStart(21, "span", 10);
      \u0275\u0275text(22, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, "PNG ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 14);
      \u0275\u0275listener("click", function TreeComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportTreePdf());
      });
      \u0275\u0275elementStart(25, "span", 10);
      \u0275\u0275text(26, "picture_as_pdf");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, "PDF ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "div", 15);
      \u0275\u0275elementStart(29, "button", 16);
      \u0275\u0275listener("click", function TreeComponent_Template_button_click_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleKiosk());
      });
      \u0275\u0275elementStart(30, "span", 10);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 17)(33, "button", 18);
      \u0275\u0275listener("click", function TreeComponent_Template_button_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        ctx.showRootPicker = !ctx.showRootPicker;
        return \u0275\u0275resetView(ctx.rootSearchQuery = "");
      });
      \u0275\u0275elementStart(34, "span", 10);
      \u0275\u0275text(35, "my_location");
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, TreeComponent_span_36_Template, 2, 0, "span", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, TreeComponent_div_37_Template, 11, 4, "div", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(38, TreeComponent_div_38_Template, 1, 0, "div", 21);
      \u0275\u0275elementStart(39, "div", 22, 0);
      \u0275\u0275listener("wheel", function TreeComponent_Template_div_wheel_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWheel($event));
      })("mouseleave", function TreeComponent_Template_div_mouseleave_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearTooltip());
      });
      \u0275\u0275template(41, TreeComponent_div_41_Template, 4, 0, "div", 23)(42, TreeComponent_div_42_Template, 4, 1, "div", 24)(43, TreeComponent_div_43_Template, 7, 0, "div", 25)(44, TreeComponent_div_44_Template, 6, 3, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, TreeComponent_div_45_Template, 4, 0, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, TreeComponent_div_46_Template, 16, 20, "div", 28)(47, TreeComponent_div_47_Template, 1, 0, "div", 29);
      \u0275\u0275elementStart(48, "div", 30)(49, "div", 31)(50, "h3");
      \u0275\u0275text(51, "Fiche membre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 32);
      \u0275\u0275listener("click", function TreeComponent_Template_button_click_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDetail());
      });
      \u0275\u0275elementStart(53, "span", 10);
      \u0275\u0275text(54, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(55, TreeComponent_div_55_Template, 20, 22, "div", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("tree-kiosk", ctx.isKiosk);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.rootPersonId);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 24, ctx.scale * 100, "1.0-0"), "%");
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.exporting);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.exporting);
      \u0275\u0275advance(5);
      \u0275\u0275property("title", ctx.isKiosk ? "Quitter" : "Plein \xE9cran");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isKiosk ? "fullscreen_exit" : "fullscreen");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.showRootPicker);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.rootPersonId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRootPicker);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRootPicker);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.erreur && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.treeRoots.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.treeRoots.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.treeRoots.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hoveredPerson);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetail);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showDetail);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.selectedPerson);
    }
  }, dependencies: [NgForOf, NgIf, NgTemplateOutlet, RouterLink, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n\n.tree-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: -28px -32px;\n}\n.tree-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 24px;\n  background: var(--white);\n  border-bottom: 1px solid var(--border);\n  gap: 16px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.tree-toolbar[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tree-toolbar[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  white-space: nowrap;\n}\n.tree-toolbar[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.tree-kiosk-btn[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n}\n.root-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: var(--primary-bg);\n  border: 1.5px solid var(--primary-border);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n}\n.root-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.root-badge-name[_ngcontent-%COMP%] {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.root-badge-clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: none;\n  background: var(--primary-border);\n  cursor: pointer;\n  padding: 0;\n}\n.root-badge-clear[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: var(--primary);\n}\n.root-badge-clear[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n}\n.root-badge-clear[_ngcontent-%COMP%]:hover   .material-icons-round[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.root-picker-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.root-pick-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.root-pick-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.root-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 299;\n}\n.root-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 280px;\n  background: var(--white);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);\n  z-index: 300;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_root-drop-in 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_root-drop-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.root-search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-muted);\n}\n.root-search-bar[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.root-search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--text-primary);\n  font-family: inherit;\n}\n.root-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.root-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.root-list[_ngcontent-%COMP%] {\n  max-height: 280px;\n  overflow-y: auto;\n  padding: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.root-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 10px;\n  border-radius: 9px;\n  border: none;\n  background: transparent;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.12s;\n}\n.root-list-item[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.root-list-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-muted);\n}\n.root-list-item.active[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n  font-weight: 700;\n}\n.root-list-all[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  border-radius: 0;\n  margin-bottom: 4px;\n  padding-bottom: 10px;\n}\n.root-list-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.root-list-avatar.male[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.root-list-avatar.female[_ngcontent-%COMP%] {\n  background: var(--pink, #EC4899);\n}\n.root-list-avatar[_ngcontent-%COMP%]:not(.male):not(.female) {\n  background: var(--text-muted);\n}\n.root-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.tree-kiosk[_ngcontent-%COMP%]   .tree-toolbar[_ngcontent-%COMP%] {\n  display: none;\n}\n.tree-kiosk[_ngcontent-%COMP%]   .tree-canvas[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.tree-kiosk[_ngcontent-%COMP%]:hover   .tree-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  animation: _ngcontent-%COMP%_tree-slide-down 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_tree-slide-down {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.zoom-level[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  min-width: 38px;\n  text-align: center;\n}\n.tree-canvas[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #F0F4FF;\n  background-image:\n    radial-gradient(\n      circle,\n      #BFDBFE 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 24px;\n  position: relative;\n}\n.tree-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n  min-width: 500px;\n  transition: transform 0.15s ease;\n  transform-origin: top center;\n  cursor: grab;\n  touch-action: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.tree-visual[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.generation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.gen-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: var(--white);\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border);\n}\n.gen-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 80px;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n.gen-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.group-stem[_ngcontent-%COMP%] {\n  width: 2px;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--primary-border),\n      var(--primary));\n}\n.group-stem.stem-single[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.group-stem.stem-multi[_ngcontent-%COMP%] {\n  height: 20px;\n}\n.group-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  position: relative;\n}\n.group-items.multi[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: var(--bar-l, 55px);\n  right: var(--bar-r, 55px);\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      var(--primary-border),\n      var(--primary),\n      var(--primary-border));\n  border-radius: 2px;\n}\n.group-items.multi[_ngcontent-%COMP%] {\n  background: rgba(219, 234, 254, 0.28);\n  border-radius: 14px;\n  padding-bottom: 8px;\n}\n.group-child-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.group-child-drop[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  background: var(--primary);\n  border-radius: 2px;\n}\n.down-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--primary-border),\n      var(--primary));\n  margin-top: 2px;\n  border-radius: 2px;\n}\n.generation[_ngcontent-%COMP%]    + .generation[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.union-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n}\n.solo-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.couple-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  background: var(--white);\n  border: 2px solid var(--primary-border);\n  border-radius: 20px;\n  padding: 10px 14px;\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);\n  transition: var(--transition);\n}\n.couple-wrap.root[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.2);\n}\n.couple-wrap.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n}\n.couple-wrap[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.union-heart-connector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2px;\n  align-self: center;\n  gap: 4px;\n}\n.union-heart-connector[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #f43f5e;\n}\n.union-heart-connector[_ngcontent-%COMP%]   .union-hline[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      #BFDBFE,\n      #f43f5e,\n      #BFDBFE);\n  border-radius: 2px;\n}\n.union-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--white);\n  border: 1px solid var(--primary-border);\n  border-radius: var(--radius-full);\n  padding: 2px 10px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--primary);\n  margin-top: 6px;\n  box-shadow: var(--shadow-xs);\n}\n.union-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #f43f5e;\n}\n.tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 12px;\n  width: 110px;\n  cursor: pointer;\n  transition: var(--transition);\n  border-radius: 12px;\n}\n.tree-node[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.06);\n}\n.tree-node.active[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n}\n.tree-node.solo[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n}\n.tree-node.solo.root[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n}\n.tree-node.solo[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.tree-node.solo.active[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n}\n.node-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  color: #fff;\n  background: var(--primary);\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.node-avatar.male[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.node-avatar.female[_ngcontent-%COMP%] {\n  background: var(--pink);\n}\n.node-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.node-avatar-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  border-radius: 50%;\n  z-index: 2;\n}\n.node-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n  line-height: 1.3;\n  word-break: break-word;\n}\n.node-year[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-align: center;\n}\n.zoom-hint[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(15, 23, 42, 0.7);\n  color: #fff;\n  font-size: 12px;\n  padding: 6px 14px;\n  border-radius: var(--radius-full);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  pointer-events: none;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 10;\n}\n.zoom-hint[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.tree-tooltip[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 500;\n  pointer-events: none;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: var(--white);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 12px 14px;\n  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.14), 0 2px 8px rgba(15, 23, 42, 0.08);\n  min-width: 220px;\n  max-width: 280px;\n  animation: _ngcontent-%COMP%_tt-in 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_tt-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tt-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.tt-avatar.male[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.tt-avatar.female[_ngcontent-%COMP%] {\n  background: var(--pink);\n}\n.tt-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.tt-avatar-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  z-index: 2;\n}\n.tt-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n  flex: 1;\n}\n.tt-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.3;\n  word-break: break-word;\n}\n.tt-dates[_ngcontent-%COMP%], \n.tt-lieu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n.tt-dates[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%], \n.tt-lieu[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.tt-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  margin-top: 2px;\n}\n.tt-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 1px 7px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  background: var(--bg-muted);\n  color: var(--text-muted);\n}\n.tt-badge.tt-m[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: var(--primary);\n}\n.tt-badge.tt-f[_ngcontent-%COMP%] {\n  background: #fdf2f8;\n  color: var(--pink);\n}\n.tt-badge.tt-alive[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.tt-badge.tt-dead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.tt-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  font-style: italic;\n}\n.panel-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.detail-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 340px;\n  height: 100vh;\n  background: var(--white);\n  box-shadow: var(--shadow-xl);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.detail-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.dp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.dp-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.dp-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 28px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.dp-avatar-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.dp-avatar[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  background: var(--primary);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);\n}\n.dp-avatar.male[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.dp-avatar.female[_ngcontent-%COMP%] {\n  background: var(--pink);\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.25);\n}\n.dp-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.dp-avatar-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  z-index: 2;\n}\n.dp-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-align: center;\n  margin: 0;\n  line-height: 1.3;\n}\n.dp-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.dp-info-list[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  margin-top: 4px;\n}\n.dp-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n}\n.dp-info-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dp-info-item[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: var(--primary);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.dp-info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dp-info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-muted);\n}\n.dp-info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.dp-link[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-decoration: none;\n  margin-top: 8px;\n}\n@media (max-width: 640px) {\n  .tree-toolbar[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .toolbar-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .detail-panel[_ngcontent-%COMP%] {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 85vh;\n    transform: translateY(100%);\n  }\n  .detail-panel.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .zoom-hint[_ngcontent-%COMP%] {\n    bottom: 8px;\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n}\n.ts-roots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 60px;\n  padding: 40px;\n}\n.ts-subtree[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n}\n.ts-couple[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  background: var(--white);\n  border: 2px solid var(--primary-border);\n  border-radius: 20px;\n  padding: 10px 14px;\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);\n  transition: var(--transition);\n}\n.ts-couple.ts-root[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.18);\n}\n.ts-couple.ts-selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.22);\n}\n.ts-couple[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.ts-solo-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 12px;\n  width: 110px;\n  background: var(--white);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.ts-solo-card.ts-root[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n}\n.ts-solo-card.ts-active[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.22);\n}\n.ts-solo-card.male[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.ts-solo-card.female[_ngcontent-%COMP%]:hover {\n  border-color: var(--pink);\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.ts-person[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 12px;\n  width: 110px;\n  cursor: pointer;\n  border-radius: 12px;\n  transition: var(--transition);\n}\n.ts-person[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.06);\n}\n.ts-person.ts-active[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n}\n.ts-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  color: #fff;\n  background: var(--primary);\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ts-avatar.male[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.ts-avatar.female[_ngcontent-%COMP%] {\n  background: var(--pink, #EC4899);\n}\n.ts-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.ts-avatar-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  border-radius: 50%;\n  z-index: 2;\n}\n.ts-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n  line-height: 1.3;\n  max-width: 110px;\n  word-break: break-word;\n}\n.ts-year[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-align: center;\n  white-space: nowrap;\n}\n.ts-heart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2px;\n  align-self: center;\n  gap: 4px;\n}\n.ts-heart[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #f43f5e;\n}\n.ts-hline[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      #BFDBFE,\n      #f43f5e,\n      #BFDBFE);\n  border-radius: 2px;\n}\n.ts-union-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--white);\n  border: 1px solid var(--primary-border);\n  border-radius: var(--radius-full);\n  padding: 2px 10px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--primary);\n  margin-top: 6px;\n  box-shadow: var(--shadow-xs);\n}\n.ts-union-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #f43f5e;\n}\n.ts-down[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--primary-border),\n      var(--primary));\n  border-radius: 2px;\n  margin-top: 2px;\n}\n.ts-branch[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.ts-hbar[_ngcontent-%COMP%] {\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      var(--primary-border),\n      var(--primary),\n      var(--primary-border));\n  border-radius: 2px;\n}\n.ts-children-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 40px;\n}\n.ts-child-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.ts-up[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  background: var(--primary);\n  border-radius: 2px;\n}\n/*# sourceMappingURL=tree.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeComponent, [{
    type: Component,
    args: [{ selector: "app-tree", standalone: false, template: `<div class="tree-page" [class.tree-kiosk]="isKiosk">

  <!-- ===== TOOLBAR ===== -->
  <div class="tree-toolbar">
    <div class="toolbar-left">
      <h2>Arbre familial</h2>
      <span class="badge badge-primary" *ngIf="!loading">
        {{ totalPersonnes }} membres \xB7 {{ totalGenerations }} g\xE9n\xE9ration{{ totalGenerations > 1 ? 's' : '' }}
      </span>
      <div class="root-badge" *ngIf="rootPersonId">
        <span class="material-icons-round">account_tree</span>
        <span class="root-badge-name">{{ rootPersonName }}</span>
        <button class="root-badge-clear" (click)="setRoot(null)">
          <span class="material-icons-round">close</span>
        </button>
      </div>
    </div>
    <div class="toolbar-right">
      <button class="btn-ghost btn-sm" (click)="zoomOut()" title="D\xE9zoomer">
        <span class="material-icons-round">zoom_out</span>
      </button>
      <span class="zoom-level">{{ (scale * 100) | number:'1.0-0' }}%</span>
      <button class="btn-ghost btn-sm" (click)="zoomIn()" title="Zoomer">
        <span class="material-icons-round">zoom_in</span>
      </button>
      <button class="btn-ghost btn-sm" (click)="resetView()" title="R\xE9initialiser">
        <span class="material-icons-round">refresh</span>
      </button>
      <button class="btn-outline btn-sm" (click)="exportTree()" [disabled]="exporting">
        <span class="material-icons-round">download</span>PNG
      </button>
      <button class="btn-outline btn-sm" (click)="exportTreePdf()" [disabled]="exporting">
        <span class="material-icons-round">picture_as_pdf</span>PDF
      </button>
      <div style="width:1px;height:20px;background:var(--border);margin:0 2px"></div>
      <button class="btn-ghost btn-sm tree-kiosk-btn" (click)="toggleKiosk()"
              [title]="isKiosk ? 'Quitter' : 'Plein \xE9cran'">
        <span class="material-icons-round">{{ isKiosk ? 'fullscreen_exit' : 'fullscreen' }}</span>
      </button>

      <!-- S\xE9lecteur de racine -->
      <div class="root-picker-wrap">
        <button class="btn-ghost btn-sm root-pick-btn" [class.active]="showRootPicker"
                (click)="showRootPicker = !showRootPicker; rootSearchQuery = ''">
          <span class="material-icons-round">my_location</span>
          <span *ngIf="!rootPersonId">Racine</span>
        </button>
        <div class="root-dropdown" *ngIf="showRootPicker" (click)="$event.stopPropagation()">
          <div class="root-search-bar">
            <span class="material-icons-round">search</span>
            <input type="text" [(ngModel)]="rootSearchQuery" placeholder="Rechercher\u2026" class="root-search-input" />
          </div>
          <div class="root-list">
            <button class="root-list-item root-list-all" [class.active]="!rootPersonId" (click)="setRoot(null)">
              <span class="material-icons-round">account_tree</span>Arbre complet
            </button>
            <button class="root-list-item" *ngFor="let p of rootCandidates"
                    [class.active]="rootPersonId === p.id" (click)="setRoot(p)">
              <div class="root-list-avatar" [class.male]="p.sexe==='M'" [class.female]="p.sexe==='F'">
                {{ getInitiales(p) }}
              </div>
              <span>{{ getNomComplet(p) }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="root-overlay" *ngIf="showRootPicker" (click)="showRootPicker=false"></div>

  <!-- ===== CANVAS ===== -->
  <div class="tree-canvas" #treeCanvas (wheel)="onWheel($event)" (mouseleave)="clearTooltip()">

    <div class="loading-state" *ngIf="loading">
      <span class="material-icons-round spin">sync</span> Chargement de l'arbre...
    </div>
    <div class="error-state" *ngIf="erreur && !loading">
      <span class="material-icons-round">error_outline</span>{{ erreur }}
    </div>
    <div class="empty-state" *ngIf="!loading && !erreur && treeRoots.length === 0">
      <span class="material-icons-round">account_tree</span>
      <h3>Arbre vide</h3>
      <p>Ajoutez des membres et des unions pour construire l'arbre familial.</p>
    </div>

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         ARBRE R\xC9CURSIF
         Pour chaque n\u0153ud : affiche la carte \u2192 si enfants \u2192 les affiche dessous
         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="tree-visual"
         #treeVisual
         *ngIf="!loading && !erreur && treeRoots.length > 0"
         [style.transform]="treeTransform"
         (pointerdown)="startDrag($event)"
         (pointermove)="drag($event)"
         (pointerup)="endDrag($event)"
         (pointercancel)="endDrag($event)">

      <!-- Template r\xE9cursif -->
      <ng-template #nodeRef let-node="node">
        <div class="ts-subtree">

          <!-- \u2500\u2500 Carte couple \u2500\u2500 -->
          <ng-container *ngIf="node.type === 'union'">
            <div class="ts-couple" [class.ts-root]="node.isRoot"
                 [class.ts-selected]="selectedPerson && (selectedPerson.id===node.p1.id || selectedPerson.id===node.p2?.id)">

              <!-- Personne 1 -->
              <div class="ts-person"
                   [class.male]="node.p1.sexe==='M'" [class.female]="node.p1.sexe==='F'"
                   [class.ts-active]="selectedPerson?.id===node.p1.id"
                   (mouseenter)="showTooltip(node.p1,$event)"
                   (mousemove)="moveTooltip($event)"
                   (mouseleave)="hideTooltip()"
                   (click)="openDetail(node.p1)">
                <div class="ts-avatar" [class.male]="node.p1.sexe==='M'" [class.female]="node.p1.sexe==='F'">
                  <img *ngIf="getPhotoUrl(node.p1) && !failedPhotos.has(node.p1.id)"
                       [src]="getPhotoUrl(node.p1)!" class="ts-avatar-photo"
                       [alt]="getInitiales(node.p1)" (error)="onPhotoError(node.p1.id)" />
                  <span *ngIf="!getPhotoUrl(node.p1) || failedPhotos.has(node.p1.id)">{{ getInitiales(node.p1) }}</span>
                </div>
                <span class="ts-name">{{ node.p1.prenoms }} {{ node.p1.nomUsage ?? node.p1.nomNaissance }}</span>
                <span class="ts-year">{{ yearLabel(node.p1) }}</span>
              </div>

              <!-- C\u0153ur -->
              <div class="ts-heart" *ngIf="node.p2">
                <span class="material-icons-round">favorite</span>
                <span class="ts-hline"></span>
              </div>

              <!-- Personne 2 -->
              <div class="ts-person" *ngIf="node.p2"
                   [class.male]="node.p2!.sexe==='M'" [class.female]="node.p2!.sexe==='F'"
                   [class.ts-active]="selectedPerson?.id===node.p2!.id"
                   (mouseenter)="showTooltip(node.p2!,$event)"
                   (mousemove)="moveTooltip($event)"
                   (mouseleave)="hideTooltip()"
                   (click)="openDetail(node.p2!)">
                <div class="ts-avatar" [class.male]="node.p2!.sexe==='M'" [class.female]="node.p2!.sexe==='F'">
                  <img *ngIf="getPhotoUrl(node.p2!) && !failedPhotos.has(node.p2!.id)"
                       [src]="getPhotoUrl(node.p2!)!" class="ts-avatar-photo"
                       [alt]="getInitiales(node.p2!)" (error)="onPhotoError(node.p2!.id)" />
                  <span *ngIf="!getPhotoUrl(node.p2!) || failedPhotos.has(node.p2!.id)">{{ getInitiales(node.p2!) }}</span>
                </div>
                <span class="ts-name">{{ node.p2!.prenoms }} {{ node.p2!.nomUsage ?? node.p2!.nomNaissance }}</span>
                <span class="ts-year">{{ yearLabel(node.p2!) }}</span>
              </div>
            </div>

            <!-- Badge type union -->
            <div class="ts-union-badge" *ngIf="node.union?.type">
              <span class="material-icons-round">favorite_border</span>
              {{ typeLabel(node.union!.type) }}
              <ng-container *ngIf="node.union!.dateDebut"> \xB7 {{ extractAnnee(node.union!.dateDebut) }}</ng-container>
            </div>
          </ng-container>

          <!-- \u2500\u2500 Carte solo \u2500\u2500 -->
          <div class="ts-solo-card" *ngIf="node.type === 'solo'"
               [class.ts-root]="node.isRoot"
               [class.male]="node.p1.sexe==='M'" [class.female]="node.p1.sexe==='F'"
               [class.ts-active]="selectedPerson?.id===node.p1.id"
               (mouseenter)="showTooltip(node.p1,$event)"
               (mousemove)="moveTooltip($event)"
               (mouseleave)="hideTooltip()"
               (click)="openDetail(node.p1)">
            <div class="ts-avatar" [class.male]="node.p1.sexe==='M'" [class.female]="node.p1.sexe==='F'">
              <img *ngIf="getPhotoUrl(node.p1) && !failedPhotos.has(node.p1.id)"
                   [src]="getPhotoUrl(node.p1)!" class="ts-avatar-photo"
                   [alt]="getInitiales(node.p1)" (error)="onPhotoError(node.p1.id)" />
              <span *ngIf="!getPhotoUrl(node.p1) || failedPhotos.has(node.p1.id)">{{ getInitiales(node.p1) }}</span>
            </div>
            <span class="ts-name">{{ node.p1.prenoms }} {{ node.p1.nomUsage ?? node.p1.nomNaissance }}</span>
            <span class="ts-year">{{ yearLabel(node.p1) }}</span>
          </div>

          <!-- \u2500\u2500 Enfants (r\xE9cursif) \u2500\u2500 -->
          <ng-container *ngIf="node.children.length > 0">
            <!-- Tige descendante -->
            <div class="ts-down"></div>

            <!-- Enfant unique : pas de barre horizontale -->
            <ng-container *ngIf="node.children.length === 1">
              <ng-container [ngTemplateOutlet]="nodeRef"
                            [ngTemplateOutletContext]="{ node: node.children[0] }">
              </ng-container>
            </ng-container>

            <!-- Plusieurs enfants : barre + chutes + sous-arbres -->
            <div class="ts-branch" *ngIf="node.children.length > 1">
              <!-- Barre horizontale (du centre du 1er au centre du dernier) -->
              <div class="ts-hbar"
                   [style.marginLeft.px]="barInset(node.children[0])"
                   [style.marginRight.px]="barInset(node.children[node.children.length-1])">
              </div>
              <!-- Rang\xE9e d'enfants -->
              <div class="ts-children-row">
                <div class="ts-child-col" *ngFor="let child of node.children">
                  <div class="ts-up"></div>
                  <ng-container [ngTemplateOutlet]="nodeRef"
                                [ngTemplateOutletContext]="{ node: child }">
                  </ng-container>
                </div>
              </div>
            </div>

          </ng-container>

        </div>
      </ng-template>

      <!-- Racines de l'arbre -->
      <div class="ts-roots">
        <ng-container *ngFor="let root of treeRoots">
          <ng-container [ngTemplateOutlet]="nodeRef"
                        [ngTemplateOutletContext]="{ node: root }">
          </ng-container>
        </ng-container>
      </div>

    </div>
  </div>

  <div class="zoom-hint" *ngIf="!loading && treeRoots.length > 0">
    <span class="material-icons-round">info_outline</span>
    Ctrl + molette pour zoomer \xB7 Glisser pour naviguer \xB7 Clic pour la fiche
  </div>
</div>

<!-- ===== TOOLTIP ===== -->
<div class="tree-tooltip" *ngIf="hoveredPerson"
     [style.left.px]="tooltipX" [style.top.px]="tooltipY">
  <div class="tt-avatar" [class.male]="hoveredPerson.sexe==='M'" [class.female]="hoveredPerson.sexe==='F'">
    <img *ngIf="getPhotoUrl(hoveredPerson) && !failedPhotos.has(hoveredPerson.id)"
         [src]="getPhotoUrl(hoveredPerson)!" class="tt-avatar-photo" (error)="onPhotoError(hoveredPerson.id)" />
    <span *ngIf="!getPhotoUrl(hoveredPerson) || failedPhotos.has(hoveredPerson.id)">{{ getInitiales(hoveredPerson) }}</span>
  </div>
  <div class="tt-content">
    <span class="tt-name">{{ getNomComplet(hoveredPerson) }}</span>
    <span class="tt-dates" *ngIf="tooltipAge(hoveredPerson)">
      <span class="material-icons-round">hourglass_bottom</span>{{ tooltipAge(hoveredPerson) }}
    </span>
    <span class="tt-lieu" *ngIf="hoveredPerson.lieuNaissance">
      <span class="material-icons-round">place</span>{{ hoveredPerson.lieuNaissance }}
    </span>
    <div class="tt-badges">
      <span class="tt-badge" [class.tt-m]="hoveredPerson.sexe==='M'" [class.tt-f]="hoveredPerson.sexe==='F'">
        {{ hoveredPerson.sexe==='M' ? 'Homme' : hoveredPerson.sexe==='F' ? 'Femme' : 'Autre' }}
      </span>
      <span class="tt-badge tt-alive" *ngIf="estVivant(hoveredPerson)">Vivant(e)</span>
      <span class="tt-badge tt-dead"  *ngIf="!estVivant(hoveredPerson)">D\xE9c\xE9d\xE9(e)</span>
    </div>
    <span class="tt-hint">Clic pour la fiche compl\xE8te</span>
  </div>
</div>

<!-- ===== OVERLAY + DETAIL ===== -->
<div class="panel-overlay" *ngIf="showDetail" (click)="closeDetail()"></div>
<div class="detail-panel" [class.open]="showDetail">
  <div class="dp-header">
    <h3>Fiche membre</h3>
    <button class="btn-icon" (click)="closeDetail()">
      <span class="material-icons-round">close</span>
    </button>
  </div>
  <div class="dp-body" *ngIf="selectedPerson">
    <div class="dp-avatar-wrap">
      <div class="dp-avatar" [class.male]="selectedPerson.sexe==='M'" [class.female]="selectedPerson.sexe==='F'">
        <img *ngIf="getPhotoUrl(selectedPerson) && !failedPhotos.has(selectedPerson.id)"
             [src]="getPhotoUrl(selectedPerson)!" class="dp-avatar-photo" (error)="onPhotoError(selectedPerson.id)" />
        <span *ngIf="!getPhotoUrl(selectedPerson) || failedPhotos.has(selectedPerson.id)">{{ getInitiales(selectedPerson) }}</span>
      </div>
    </div>
    <h2 class="dp-name">{{ getNomComplet(selectedPerson) }}</h2>
    <div class="dp-badges">
      <span class="pc-badge" [class.pc-badge-m]="selectedPerson.sexe==='M'" [class.pc-badge-f]="selectedPerson.sexe==='F'">
        {{ selectedPerson.sexe==='M' ? 'Homme' : selectedPerson.sexe==='F' ? 'Femme' : 'Autre' }}
      </span>
      <span class="pc-badge pc-badge-alive" *ngIf="estVivant(selectedPerson)">Vivant(e)</span>
      <span class="pc-badge pc-badge-dead"  *ngIf="!estVivant(selectedPerson)">D\xE9c\xE9d\xE9(e)</span>
    </div>
    <div class="dp-info-list">
      <div class="dp-info-item" *ngIf="selectedPerson.dateNaissance || selectedPerson.lieuNaissance">
        <span class="material-icons-round">cake</span>
        <div class="dp-info-text">
          <span class="dp-info-label">Naissance</span>
          <span class="dp-info-value">
            {{ selectedPerson.dateNaissance ?? '\u2014' }}
            <span *ngIf="selectedPerson.lieuNaissance"> \xB7 {{ selectedPerson.lieuNaissance }}</span>
          </span>
        </div>
      </div>
      <div class="dp-info-item" *ngIf="!estVivant(selectedPerson)">
        <span class="material-icons-round">sentiment_very_dissatisfied</span>
        <div class="dp-info-text">
          <span class="dp-info-label">D\xE9c\xE8s</span>
          <span class="dp-info-value">{{ selectedPerson.dateDeces ?? '\u2014' }}<span *ngIf="selectedPerson.lieuDeces"> \xB7 {{ selectedPerson.lieuDeces }}</span></span>
        </div>
      </div>
      <div class="dp-info-item" *ngIf="getAgeLabel(selectedPerson)">
        <span class="material-icons-round">hourglass_bottom</span>
        <div class="dp-info-text">
          <span class="dp-info-label">{{ estVivant(selectedPerson) ? '\xC2ge' : 'Dur\xE9e de vie' }}</span>
          <span class="dp-info-value">{{ getAgeLabel(selectedPerson) }}</span>
        </div>
      </div>
    </div>
    <a class="btn-primary dp-link" [routerLink]="['/app/personnes']" [queryParams]="{ id: selectedPerson.id }" (click)="closeDetail()">
      <span class="material-icons-round">person</span>Voir le profil complet
    </a>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/tree/tree.component.scss */\n.tree-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: -28px -32px;\n}\n.tree-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 24px;\n  background: var(--white);\n  border-bottom: 1px solid var(--border);\n  gap: 16px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.tree-toolbar .toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tree-toolbar .toolbar-left h2 {\n  font-size: 18px;\n  margin: 0;\n  white-space: nowrap;\n}\n.tree-toolbar .toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.tree-kiosk-btn {\n  color: var(--primary) !important;\n}\n.root-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  background: var(--primary-bg);\n  border: 1.5px solid var(--primary-border);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n}\n.root-badge .material-icons-round {\n  font-size: 15px !important;\n}\n.root-badge-name {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.root-badge-clear {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: none;\n  background: var(--primary-border);\n  cursor: pointer;\n  padding: 0;\n}\n.root-badge-clear .material-icons-round {\n  font-size: 12px !important;\n  color: var(--primary);\n}\n.root-badge-clear:hover {\n  background: var(--primary);\n}\n.root-badge-clear:hover .material-icons-round {\n  color: #fff;\n}\n.root-picker-wrap {\n  position: relative;\n}\n.root-pick-btn.active {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.root-pick-btn .material-icons-round {\n  font-size: 18px !important;\n}\n.root-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 299;\n}\n.root-dropdown {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 280px;\n  background: var(--white);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);\n  z-index: 300;\n  overflow: hidden;\n  animation: root-drop-in 0.15s ease;\n}\n@keyframes root-drop-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.root-search-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-muted);\n}\n.root-search-bar .material-icons-round {\n  font-size: 17px !important;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.root-search-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--text-primary);\n  font-family: inherit;\n}\n.root-search-input:focus {\n  outline: none;\n}\n.root-search-input::placeholder {\n  color: var(--text-muted);\n}\n.root-list {\n  max-height: 280px;\n  overflow-y: auto;\n  padding: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.root-list-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 10px;\n  border-radius: 9px;\n  border: none;\n  background: transparent;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.12s;\n}\n.root-list-item .material-icons-round {\n  font-size: 17px !important;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.root-list-item:hover {\n  background: var(--bg-muted);\n}\n.root-list-item.active {\n  background: var(--primary-bg);\n  color: var(--primary);\n  font-weight: 700;\n}\n.root-list-all {\n  border-bottom: 1px solid var(--border);\n  border-radius: 0;\n  margin-bottom: 4px;\n  padding-bottom: 10px;\n}\n.root-list-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.root-list-avatar.male {\n  background: var(--primary);\n}\n.root-list-avatar.female {\n  background: var(--pink, #EC4899);\n}\n.root-list-avatar:not(.male):not(.female) {\n  background: var(--text-muted);\n}\n.root-empty {\n  text-align: center;\n  padding: 20px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.tree-kiosk .tree-toolbar {\n  display: none;\n}\n.tree-kiosk .tree-canvas {\n  padding: 0;\n}\n.tree-kiosk:hover .tree-toolbar {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  animation: tree-slide-down 0.2s ease;\n}\n@keyframes tree-slide-down {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.zoom-level {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  min-width: 38px;\n  text-align: center;\n}\n.tree-canvas {\n  flex: 1;\n  background: #F0F4FF;\n  background-image:\n    radial-gradient(\n      circle,\n      #BFDBFE 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 24px;\n  position: relative;\n}\n.tree-visual {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n  min-width: 500px;\n  transition: transform 0.15s ease;\n  transform-origin: top center;\n  cursor: grab;\n  touch-action: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.tree-visual:active {\n  cursor: grabbing;\n}\n.generation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.gen-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: var(--white);\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border);\n}\n.gen-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 80px;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n.gen-group {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.group-stem {\n  width: 2px;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--primary-border),\n      var(--primary));\n}\n.group-stem.stem-single {\n  height: 40px;\n}\n.group-stem.stem-multi {\n  height: 20px;\n}\n.group-items {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  position: relative;\n}\n.group-items.multi::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: var(--bar-l, 55px);\n  right: var(--bar-r, 55px);\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      var(--primary-border),\n      var(--primary),\n      var(--primary-border));\n  border-radius: 2px;\n}\n.group-items.multi {\n  background: rgba(219, 234, 254, 0.28);\n  border-radius: 14px;\n  padding-bottom: 8px;\n}\n.group-child-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.group-child-drop {\n  width: 2px;\n  height: 20px;\n  background: var(--primary);\n  border-radius: 2px;\n}\n.down-connector {\n  width: 2px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--primary-border),\n      var(--primary));\n  margin-top: 2px;\n  border-radius: 2px;\n}\n.generation + .generation {\n  margin-top: 4px;\n}\n.union-group {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n}\n.solo-group {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.couple-wrap {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  background: var(--white);\n  border: 2px solid var(--primary-border);\n  border-radius: 20px;\n  padding: 10px 14px;\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);\n  transition: var(--transition);\n}\n.couple-wrap.root {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.2);\n}\n.couple-wrap.selected {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n}\n.couple-wrap:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.union-heart-connector {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2px;\n  align-self: center;\n  gap: 4px;\n}\n.union-heart-connector .material-icons-round {\n  font-size: 18px !important;\n  color: #f43f5e;\n}\n.union-heart-connector .union-hline {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      #BFDBFE,\n      #f43f5e,\n      #BFDBFE);\n  border-radius: 2px;\n}\n.union-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--white);\n  border: 1px solid var(--primary-border);\n  border-radius: var(--radius-full);\n  padding: 2px 10px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--primary);\n  margin-top: 6px;\n  box-shadow: var(--shadow-xs);\n}\n.union-badge .material-icons-round {\n  font-size: 12px !important;\n  color: #f43f5e;\n}\n.tree-node {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 12px;\n  width: 110px;\n  cursor: pointer;\n  transition: var(--transition);\n  border-radius: 12px;\n}\n.tree-node:hover {\n  background: rgba(59, 130, 246, 0.06);\n}\n.tree-node.active {\n  background: var(--primary-bg);\n}\n.tree-node.solo {\n  background: var(--white);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n}\n.tree-node.solo.root {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n}\n.tree-node.solo:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.tree-node.solo.active {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n}\n.node-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  color: #fff;\n  background: var(--primary);\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.node-avatar.male {\n  background: var(--primary);\n}\n.node-avatar.female {\n  background: var(--pink);\n}\n.node-avatar span {\n  position: relative;\n  z-index: 1;\n}\n.node-avatar-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  border-radius: 50%;\n  z-index: 2;\n}\n.node-name {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n  line-height: 1.3;\n  word-break: break-word;\n}\n.node-year {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-align: center;\n}\n.zoom-hint {\n  position: fixed;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(15, 23, 42, 0.7);\n  color: #fff;\n  font-size: 12px;\n  padding: 6px 14px;\n  border-radius: var(--radius-full);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  pointer-events: none;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 10;\n}\n.zoom-hint .material-icons-round {\n  font-size: 14px !important;\n}\n.tree-tooltip {\n  position: fixed;\n  z-index: 500;\n  pointer-events: none;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: var(--white);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 12px 14px;\n  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.14), 0 2px 8px rgba(15, 23, 42, 0.08);\n  min-width: 220px;\n  max-width: 280px;\n  animation: tt-in 0.15s ease;\n}\n@keyframes tt-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tt-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.tt-avatar.male {\n  background: var(--primary);\n}\n.tt-avatar.female {\n  background: var(--pink);\n}\n.tt-avatar span {\n  position: relative;\n  z-index: 1;\n}\n.tt-avatar-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  z-index: 2;\n}\n.tt-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n  flex: 1;\n}\n.tt-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.3;\n  word-break: break-word;\n}\n.tt-dates,\n.tt-lieu {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: var(--text-secondary);\n}\n.tt-dates .material-icons-round,\n.tt-lieu .material-icons-round {\n  font-size: 13px !important;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.tt-badges {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  margin-top: 2px;\n}\n.tt-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 1px 7px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  background: var(--bg-muted);\n  color: var(--text-muted);\n}\n.tt-badge.tt-m {\n  background: #eff6ff;\n  color: var(--primary);\n}\n.tt-badge.tt-f {\n  background: #fdf2f8;\n  color: var(--pink);\n}\n.tt-badge.tt-alive {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.tt-badge.tt-dead {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.tt-hint {\n  font-size: 10px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  font-style: italic;\n}\n.panel-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.detail-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 340px;\n  height: 100vh;\n  background: var(--white);\n  box-shadow: var(--shadow-xl);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.detail-panel.open {\n  transform: translateX(0);\n}\n.dp-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.dp-header h3 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.dp-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 28px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.dp-avatar-wrap {\n  margin-bottom: 4px;\n}\n.dp-avatar {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  background: var(--primary);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);\n}\n.dp-avatar.male {\n  background: var(--primary);\n}\n.dp-avatar.female {\n  background: var(--pink);\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.25);\n}\n.dp-avatar span {\n  position: relative;\n  z-index: 1;\n}\n.dp-avatar-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  z-index: 2;\n}\n.dp-name {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-align: center;\n  margin: 0;\n  line-height: 1.3;\n}\n.dp-badges {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.dp-info-list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  margin-top: 4px;\n}\n.dp-info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border);\n}\n.dp-info-item:last-child {\n  border-bottom: none;\n}\n.dp-info-item .material-icons-round {\n  font-size: 18px !important;\n  color: var(--primary);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.dp-info-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dp-info-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-muted);\n}\n.dp-info-value {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.dp-link {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-decoration: none;\n  margin-top: 8px;\n}\n@media (max-width: 640px) {\n  .tree-toolbar {\n    padding: 12px 16px;\n  }\n  .toolbar-right button {\n    min-width: 0;\n  }\n  .detail-panel {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 85vh;\n    transform: translateY(100%);\n  }\n  .detail-panel.open {\n    transform: translateY(0);\n  }\n  .zoom-hint {\n    bottom: 8px;\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n}\n.ts-roots {\n  display: flex;\n  align-items: flex-start;\n  gap: 60px;\n  padding: 40px;\n}\n.ts-subtree {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n}\n.ts-couple {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  background: var(--white);\n  border: 2px solid var(--primary-border);\n  border-radius: 20px;\n  padding: 10px 14px;\n  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);\n  transition: var(--transition);\n}\n.ts-couple.ts-root {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.18);\n}\n.ts-couple.ts-selected {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.22);\n}\n.ts-couple:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.ts-solo-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 12px;\n  width: 110px;\n  background: var(--white);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.ts-solo-card.ts-root {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n}\n.ts-solo-card.ts-active {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.22);\n}\n.ts-solo-card.male:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.ts-solo-card.female:hover {\n  border-color: var(--pink);\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.ts-person {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 12px;\n  width: 110px;\n  cursor: pointer;\n  border-radius: 12px;\n  transition: var(--transition);\n}\n.ts-person:hover {\n  background: rgba(59, 130, 246, 0.06);\n}\n.ts-person.ts-active {\n  background: var(--primary-bg);\n}\n.ts-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 13px;\n  color: #fff;\n  background: var(--primary);\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.ts-avatar.male {\n  background: var(--primary);\n}\n.ts-avatar.female {\n  background: var(--pink, #EC4899);\n}\n.ts-avatar span {\n  position: relative;\n  z-index: 1;\n}\n.ts-avatar-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  border-radius: 50%;\n  z-index: 2;\n}\n.ts-name {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n  line-height: 1.3;\n  max-width: 110px;\n  word-break: break-word;\n}\n.ts-year {\n  font-size: 10px;\n  color: var(--text-muted);\n  text-align: center;\n  white-space: nowrap;\n}\n.ts-heart {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2px;\n  align-self: center;\n  gap: 4px;\n}\n.ts-heart .material-icons-round {\n  font-size: 18px !important;\n  color: #f43f5e;\n}\n.ts-hline {\n  display: block;\n  width: 20px;\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      #BFDBFE,\n      #f43f5e,\n      #BFDBFE);\n  border-radius: 2px;\n}\n.ts-union-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--white);\n  border: 1px solid var(--primary-border);\n  border-radius: var(--radius-full);\n  padding: 2px 10px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--primary);\n  margin-top: 6px;\n  box-shadow: var(--shadow-xs);\n}\n.ts-union-badge .material-icons-round {\n  font-size: 12px !important;\n  color: #f43f5e;\n}\n.ts-down {\n  width: 2px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--primary-border),\n      var(--primary));\n  border-radius: 2px;\n  margin-top: 2px;\n}\n.ts-branch {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.ts-hbar {\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      var(--primary-border),\n      var(--primary),\n      var(--primary-border));\n  border-radius: 2px;\n}\n.ts-children-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 40px;\n}\n.ts-child-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.ts-up {\n  width: 2px;\n  height: 20px;\n  background: var(--primary);\n  border-radius: 2px;\n}\n/*# sourceMappingURL=tree.component.css.map */\n'] }]
  }], () => [{ type: ApiService }], { treeVisual: [{
    type: ViewChild,
    args: ["treeVisual", { static: false }]
  }], treeCanvas: [{
    type: ViewChild,
    args: ["treeCanvas", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreeComponent, { className: "TreeComponent", filePath: "src/app/pages/tree/tree.component.ts", lineNumber: 28 });
})();

// src/app/pages/stories/stories.component.ts
function StoriesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("female", s_r1.genre === "F")("male", s_r1.genre === "M");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r1.initiales, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.auteur.split(" ")[0]);
  }
}
function StoriesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20)(13, "h4");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 21)(18, "button", 22)(19, "span", 3);
    \u0275\u0275text(20, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 22)(23, "span", 3);
    \u0275\u0275text(24, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 22)(27, "span", 3);
    \u0275\u0275text(28, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Partager ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("female", s_r2.genre === "F")("male", s_r2.genre === "M");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2.initiales, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.auteur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.date);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getTagClass(s_r2.tag));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.tag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.contenu);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", s_r2.likes, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", s_r2.commentaires, " ");
  }
}
var StoriesComponent = class _StoriesComponent {
  stories = [
    { id: "1", auteur: "Ibrahim Diallo", initiales: "ID", genre: "M", titre: "Photo de famille 1985", contenu: "Je viens de retrouver cette magnifique photo de la f\xEAte de l'A\xEFd en 1985. Grand-p\xE8re Moussa \xE9tait si fier ce jour-l\xE0...", date: "Il y a 2h", likes: 14, commentaires: 5, tag: "Souvenir" },
    { id: "2", auteur: "Fatoumata Diallo", initiales: "FD", genre: "F", titre: "Mariage de oncle Oumar", contenu: "Les pr\xE9paratifs du mariage de oncle Oumar avancent bien. Toute la famille sera r\xE9unie le mois prochain \xE0 Conakry.", date: "Il y a 5h", likes: 28, commentaires: 11, tag: "\xC9v\xE9nement" },
    { id: "3", auteur: "Aminata Diallo", initiales: "AD", genre: "F", titre: "Recette de la grand-m\xE8re", contenu: "Grand-m\xE8re Aminata nous a partag\xE9 sa recette secr\xE8te du tiguad\xE8gu\xE8. Une tradition familiale que nous devons pr\xE9server.", date: "Hier", likes: 41, commentaires: 16, tag: "Culture" },
    { id: "4", auteur: "Seydou Diallo", initiales: "SD", genre: "M", titre: "Succ\xE8s acad\xE9mique", contenu: "Fier d'annoncer que je viens d'obtenir mon Master en Informatique. Merci \xE0 toute la famille pour votre soutien constant !", date: "Il y a 2j", likes: 56, commentaires: 23, tag: "Succ\xE8s" },
    { id: "5", auteur: "Mariam Coulibaly", initiales: "MC", genre: "F", titre: "Village ancestral", contenu: "J'ai visit\xE9 notre village ancestral \xE0 Lab\xE9. Les anciens m'ont racont\xE9 des histoires incroyables sur nos origines.", date: "Il y a 3j", likes: 33, commentaires: 9, tag: "Patrimoine" },
    { id: "6", auteur: "Oumar Diallo", initiales: "OD", genre: "M", titre: "Naissance de Kadiatou", contenu: "C'est avec une immense joie que nous accueillons la petite Kadiatou dans notre famille. Elle p\xE8se 3,2kg et se porte tr\xE8s bien.", date: "Il y a 1sem", likes: 72, commentaires: 31, tag: "Naissance" }
  ];
  tagColors = {
    Souvenir: "primary",
    \u00C9v\u00E9nement: "accent",
    Culture: "pink",
    Succ\u00E8s: "success",
    Patrimoine: "warning",
    Naissance: "pink"
  };
  getTagClass(tag) {
    return `badge-${this.tagColors[tag] ?? "gray"}`;
  }
  static \u0275fac = function StoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoriesComponent, selectors: [["app-stories"]], standalone: false, decls: 21, vars: 2, consts: [[1, "page-header"], [1, "header-row"], [1, "btn-primary"], [1, "material-icons-round"], [1, "stories-circles", "mb-32"], [1, "story-circle", "add-story"], [1, "story-avatar", "add"], [1, "story-author"], ["class", "story-circle", 4, "ngFor", "ngForOf"], [1, "stories-feed"], ["class", "story-card", 4, "ngFor", "ngForOf"], [1, "story-circle"], [1, "story-avatar"], [1, "story-card"], [1, "story-card-header"], [1, "story-meta"], [1, "avatar", "avatar-md"], [1, "story-name"], [1, "story-date"], [1, "badge"], [1, "story-card-body"], [1, "story-card-footer"], [1, "reaction-btn"]], template: function StoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275text(4, "Stories familiales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Partagez des moments forts avec votre famille");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2)(8, "span", 3);
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvelle story ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 4)(12, "div", 5)(13, "div", 6)(14, "span", 3);
      \u0275\u0275text(15, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "span", 7);
      \u0275\u0275text(17, "Ma story");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, StoriesComponent_div_18_Template, 5, 6, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 9);
      \u0275\u0275template(20, StoriesComponent_div_20_Template, 30, 14, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.stories);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.stories);
    }
  }, dependencies: [NgForOf], styles: ["\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.header-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.stories-circles[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n}\n.stories-circles[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 3px;\n}\n.story-circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.story-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n  color: #fff;\n  border: 2.5px solid var(--primary);\n  transition: var(--transition);\n}\n.story-avatar.male[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.story-avatar.female[_ngcontent-%COMP%] {\n  background: var(--pink);\n}\n.story-avatar.add[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 2px dashed var(--primary-border);\n}\n.story-avatar.add[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n.story-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.story-author[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  max-width: 60px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.stories-feed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 680px;\n}\n.story-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  transition: box-shadow var(--transition);\n}\n.story-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n.story-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 16px 12px;\n  border-bottom: 1px solid var(--border-light);\n}\n.story-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.story-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.story-date[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.story-card-body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n}\n.story-card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.story-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.story-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 10px 12px;\n  border-top: 1px solid var(--border-light);\n}\n.reaction-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: none;\n  background: transparent;\n  border-radius: var(--radius-full);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: var(--transition);\n  font-family: inherit;\n}\n.reaction-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n}\n.reaction-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-muted);\n  color: var(--primary);\n}\n/*# sourceMappingURL=stories.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoriesComponent, [{
    type: Component,
    args: [{ selector: "app-stories", standalone: false, template: `<div class="page-header">
  <div class="header-row">
    <div>
      <h2>Stories familiales</h2>
      <p>Partagez des moments forts avec votre famille</p>
    </div>
    <button class="btn-primary">
      <span class="material-icons-round">add</span>
      Nouvelle story
    </button>
  </div>
</div>

<!-- STORIES CIRCLES (style Instagram) -->
<div class="stories-circles mb-32">
  <div class="story-circle add-story">
    <div class="story-avatar add">
      <span class="material-icons-round">add</span>
    </div>
    <span class="story-author">Ma story</span>
  </div>
  <div class="story-circle" *ngFor="let s of stories">
    <div class="story-avatar" [class.female]="s.genre === 'F'" [class.male]="s.genre === 'M'">
      {{ s.initiales }}
    </div>
    <span class="story-author">{{ s.auteur.split(' ')[0] }}</span>
  </div>
</div>

<!-- FEED DES STORIES -->
<div class="stories-feed">
  <div class="story-card" *ngFor="let s of stories">

    <div class="story-card-header">
      <div class="story-meta">
        <div class="avatar avatar-md" [class.female]="s.genre === 'F'" [class.male]="s.genre === 'M'">
          {{ s.initiales }}
        </div>
        <div>
          <span class="story-name">{{ s.auteur }}</span>
          <span class="story-date">{{ s.date }}</span>
        </div>
      </div>
      <span class="badge" [class]="getTagClass(s.tag)">{{ s.tag }}</span>
    </div>

    <div class="story-card-body">
      <h4>{{ s.titre }}</h4>
      <p>{{ s.contenu }}</p>
    </div>

    <div class="story-card-footer">
      <button class="reaction-btn">
        <span class="material-icons-round">favorite_border</span>
        {{ s.likes }}
      </button>
      <button class="reaction-btn">
        <span class="material-icons-round">chat_bubble_outline</span>
        {{ s.commentaires }}
      </button>
      <button class="reaction-btn">
        <span class="material-icons-round">share</span>
        Partager
      </button>
    </div>

  </div>
</div>
`, styles: ["/* src/app/pages/stories/stories.component.scss */\n.header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-row h2 {\n  margin-bottom: 4px;\n}\n.header-row p {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.stories-circles {\n  display: flex;\n  gap: 20px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n}\n.stories-circles::-webkit-scrollbar {\n  height: 3px;\n}\n.story-circle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.story-avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n  color: #fff;\n  border: 2.5px solid var(--primary);\n  transition: var(--transition);\n}\n.story-avatar.male {\n  background: var(--primary);\n}\n.story-avatar.female {\n  background: var(--pink);\n}\n.story-avatar.add {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 2px dashed var(--primary-border);\n}\n.story-avatar.add .material-icons-round {\n  font-size: 24px !important;\n}\n.story-avatar:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.story-author {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  max-width: 60px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.stories-feed {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 680px;\n}\n.story-card {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  transition: box-shadow var(--transition);\n}\n.story-card:hover {\n  box-shadow: var(--shadow-md);\n}\n.story-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 16px 12px;\n  border-bottom: 1px solid var(--border-light);\n}\n.story-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.story-name {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.story-date {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.story-card-body {\n  padding: 14px 16px;\n}\n.story-card-body h4 {\n  font-size: 15px;\n  margin-bottom: 8px;\n}\n.story-card-body p {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.story-card-footer {\n  display: flex;\n  gap: 4px;\n  padding: 10px 12px;\n  border-top: 1px solid var(--border-light);\n}\n.reaction-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: none;\n  background: transparent;\n  border-radius: var(--radius-full);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: var(--transition);\n  font-family: inherit;\n}\n.reaction-btn .material-icons-round {\n  font-size: 17px !important;\n}\n.reaction-btn:hover {\n  background: var(--bg-muted);\n  color: var(--primary);\n}\n/*# sourceMappingURL=stories.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoriesComponent, { className: "StoriesComponent", filePath: "src/app/pages/stories/stories.component.ts", lineNumber: 22 });
})();

// src/app/pages/timeline/timeline.component.ts
function TimelineComponent_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function TimelineComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9)(6, "span", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, TimelineComponent_div_12_div_8_Template, 1, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "h4");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 15)(18, "span", 3);
    \u0275\u0275text(19, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "span", 16);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ev_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ev_r1.annee);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("dot-" + ctx_r2.getConfig(ev_r1.type).color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getConfig(ev_r1.type).icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r2 < ctx_r2.events.length - 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ev_r1.titre);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-" + ctx_r2.getConfig(ev_r1.type).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ev_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r1.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ev_r1.personne, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", ev_r1.date);
  }
}
var TimelineComponent = class _TimelineComponent {
  events = [
    { id: "1", annee: 1948, date: "1948", type: "naissance", titre: "Naissance de Moussa Diallo", description: "Moussa Diallo na\xEEt \xE0 Conakry, premier enfant de la famille.", personne: "Moussa Diallo" },
    { id: "2", annee: 1953, date: "1953", type: "naissance", titre: "Naissance d'Aminata", description: "Aminata vient au monde \xE0 Conakry dans le quartier Kaloum.", personne: "Aminata Diallo" },
    { id: "3", annee: 1972, date: "Juin 1972", type: "mariage", titre: "Mariage de Moussa et Aminata", description: "C\xE9r\xE9monie de mariage traditionnelle \xE0 Conakry, r\xE9unissant deux grandes familles.", personne: "Moussa & Aminata" },
    { id: "4", annee: 1975, date: "1975", type: "naissance", titre: "Naissance d'Ibrahim", description: "Ibrahim, premier fils du couple, voit le jour.", personne: "Ibrahim Diallo" },
    { id: "5", annee: 1985, date: "1985", type: "voyage", titre: "D\xE9m\xE9nagement \xE0 Dakar", description: "La famille s'installe \xE0 Dakar pour de nouvelles opportunit\xE9s professionnelles.", personne: "Famille Diallo" },
    { id: "6", annee: 1999, date: "1999", type: "succes", titre: "Dipl\xF4me de Fatoumata", description: "Fatoumata obtient son baccalaur\xE9at avec mention Tr\xE8s Bien.", personne: "Fatoumata Diallo" },
    { id: "7", annee: 2001, date: "2001", type: "naissance", titre: "Naissance de Seydou", description: "Seydou est n\xE9 \xE0 Paris lors d'un s\xE9jour en France.", personne: "Seydou Diallo" },
    { id: "8", annee: 2010, date: "Mars 2010", type: "deces", titre: "D\xE9c\xE8s de Moussa Diallo", description: "Le patriarche nous quitte apr\xE8s une longue vie bien remplie. Il avait 62 ans.", personne: "Moussa Diallo" },
    { id: "9", annee: 2024, date: "Jan 2024", type: "succes", titre: "Master d'Ibrahim", description: "Ibrahim obtient son doctorat en m\xE9decine, devenant le premier m\xE9decin de la famille.", personne: "Ibrahim Diallo" }
  ];
  typeConfig = {
    naissance: { icon: "child_care", color: "success" },
    mariage: { icon: "favorite", color: "pink" },
    deces: { icon: "local_florist", color: "gray" },
    succes: { icon: "emoji_events", color: "warning" },
    voyage: { icon: "flight", color: "accent" },
    autre: { icon: "star", color: "primary" }
  };
  getConfig(type) {
    return this.typeConfig[type] ?? this.typeConfig["autre"];
  }
  static \u0275fac = function TimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineComponent, selectors: [["app-timeline"]], standalone: false, decls: 13, vars: 1, consts: [[1, "page-header"], [1, "header-row"], [1, "btn-primary"], [1, "material-icons-round"], [1, "timeline-container"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-year"], [1, "timeline-axis"], [1, "axis-dot"], ["class", "axis-line", 4, "ngIf"], [1, "timeline-card"], [1, "ev-header"], [1, "badge"], [1, "ev-desc"], [1, "ev-footer"], [1, "ev-date"], [1, "axis-line"]], template: function TimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275text(4, "Timeline familiale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "L'histoire de votre famille, chronologiquement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2)(8, "span", 3);
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Ajouter un \xE9v\xE9nement ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 4);
      \u0275\u0275template(12, TimelineComponent_div_12_Template, 23, 12, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.events);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.header-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.timeline-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 760px;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72px 40px 1fr;\n  gap: 0 16px;\n  min-height: 80px;\n}\n.timeline-year[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding-top: 14px;\n  justify-content: flex-end;\n}\n.timeline-year[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.timeline-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.axis-dot[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 6px;\n}\n.axis-dot[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #fff;\n}\n.axis-dot.dot-success[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.axis-dot.dot-pink[_ngcontent-%COMP%] {\n  background: var(--pink);\n}\n.axis-dot.dot-gray[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n}\n.axis-dot.dot-warning[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.axis-dot.dot-accent[_ngcontent-%COMP%] {\n  background: var(--accent);\n}\n.axis-dot.dot-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.axis-line[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 2px;\n  background: var(--border);\n  margin: 6px 0;\n}\n.timeline-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 14px 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--shadow-sm);\n  transition: box-shadow var(--transition), border-color var(--transition);\n}\n.timeline-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border);\n  box-shadow: var(--shadow-md);\n}\n.ev-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.ev-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.ev-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 10px;\n}\n.ev-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.ev-footer[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.ev-date[_ngcontent-%COMP%] {\n  color: var(--text-disabled);\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: var(--bg-muted);\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=timeline.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineComponent, [{
    type: Component,
    args: [{ selector: "app-timeline", standalone: false, template: `<div class="page-header">
  <div class="header-row">
    <div>
      <h2>Timeline familiale</h2>
      <p>L'histoire de votre famille, chronologiquement</p>
    </div>
    <button class="btn-primary">
      <span class="material-icons-round">add</span>
      Ajouter un \xE9v\xE9nement
    </button>
  </div>
</div>

<div class="timeline-container">

  <div class="timeline-item" *ngFor="let ev of events; let i = index">

    <!-- Ann\xE9e -->
    <div class="timeline-year">
      <span>{{ ev.annee }}</span>
    </div>

    <!-- Ligne + Dot -->
    <div class="timeline-axis">
      <div class="axis-dot" [class]="'dot-' + getConfig(ev.type).color">
        <span class="material-icons-round">{{ getConfig(ev.type).icon }}</span>
      </div>
      <div class="axis-line" *ngIf="i < events.length - 1"></div>
    </div>

    <!-- Carte \xE9v\xE9nement -->
    <div class="timeline-card">
      <div class="ev-header">
        <h4>{{ ev.titre }}</h4>
        <span class="badge" [class]="'badge-' + getConfig(ev.type).color">{{ ev.type }}</span>
      </div>
      <p class="ev-desc">{{ ev.description }}</p>
      <div class="ev-footer">
        <span class="material-icons-round">person</span>
        {{ ev.personne }}
        <span class="ev-date">\xB7 {{ ev.date }}</span>
      </div>
    </div>

  </div>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/timeline/timeline.component.scss */\n.header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-row h2 {\n  margin-bottom: 4px;\n}\n.header-row p {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.timeline-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 760px;\n}\n.timeline-item {\n  display: grid;\n  grid-template-columns: 72px 40px 1fr;\n  gap: 0 16px;\n  min-height: 80px;\n}\n.timeline-year {\n  display: flex;\n  align-items: flex-start;\n  padding-top: 14px;\n  justify-content: flex-end;\n}\n.timeline-year span {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.timeline-axis {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.axis-dot {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 6px;\n}\n.axis-dot .material-icons-round {\n  font-size: 18px !important;\n  color: #fff;\n}\n.axis-dot.dot-success {\n  background: var(--success);\n}\n.axis-dot.dot-pink {\n  background: var(--pink);\n}\n.axis-dot.dot-gray {\n  background: var(--text-muted);\n}\n.axis-dot.dot-warning {\n  background: var(--warning);\n}\n.axis-dot.dot-accent {\n  background: var(--accent);\n}\n.axis-dot.dot-primary {\n  background: var(--primary);\n}\n.axis-line {\n  flex: 1;\n  width: 2px;\n  background: var(--border);\n  margin: 6px 0;\n}\n.timeline-card {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 14px 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--shadow-sm);\n  transition: box-shadow var(--transition), border-color var(--transition);\n}\n.timeline-card:hover {\n  border-color: var(--primary-border);\n  box-shadow: var(--shadow-md);\n}\n.ev-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n.ev-header h4 {\n  font-size: 14px;\n  margin: 0;\n}\n.ev-desc {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  margin-bottom: 10px;\n}\n.ev-footer {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.ev-footer .material-icons-round {\n  font-size: 14px !important;\n}\n.ev-date {\n  color: var(--text-disabled);\n}\n.badge-gray {\n  background: var(--bg-muted);\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=timeline.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineComponent, { className: "TimelineComponent", filePath: "src/app/pages/timeline/timeline.component.ts", lineNumber: 19 });
})();

// src/app/pages/jeux/jeux.component.ts
function JeuxComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275classMap("player-stat--" + s_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function JeuxComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16)(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 18)(14, "span", 9);
    \u0275\u0275text(15, "stars");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 19)(18, "span", 9);
    \u0275\u0275text(19, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275text(22, "Jouer");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const j_r2 = ctx.$implicit;
    \u0275\u0275classMap("jeu-card--" + j_r2.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(j_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(j_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(j_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(j_r2.difficulte === "Facile" ? "badge-success" : j_r2.difficulte === "Moyen" ? "badge-warning" : "badge-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", j_r2.difficulte, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", j_r2.points, " pts ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", j_r2.joueurs, " ");
  }
}
var JeuxComponent = class _JeuxComponent {
  jeux = [
    { id: "1", titre: "Quiz Familial", description: "Testez vos connaissances sur votre histoire familiale.", icon: "quiz", color: "blue", points: 50, difficulte: "Moyen", joueurs: 12 },
    { id: "2", titre: "M\xE9moire", description: "Retrouvez les paires de membres de la famille.", icon: "grid_view", color: "pink", points: 30, difficulte: "Facile", joueurs: 8 },
    { id: "3", titre: "Qui est qui ?", description: "Devinez quel membre de la famille est sur la photo.", icon: "person_search", color: "indigo", points: 40, difficulte: "Moyen", joueurs: 15 },
    { id: "4", titre: "Timeline Challenge", description: "Remettez les \xE9v\xE9nements familiaux dans l'ordre chronologique.", icon: "timeline", color: "green", points: 60, difficulte: "Difficile", joueurs: 6 },
    { id: "5", titre: "Arbre Express", description: "Reconstituez l'arbre g\xE9n\xE9alogique le plus vite possible.", icon: "account_tree", color: "orange", points: 70, difficulte: "Difficile", joueurs: 4 },
    { id: "6", titre: "Tournoi Famille", description: "Affrontez les membres de votre famille en temps r\xE9el.", icon: "emoji_events", color: "yellow", points: 100, difficulte: "Moyen", joueurs: 24 }
  ];
  stats = [
    { icon: "emoji_events", label: "Mon score", value: "2 450 pts", color: "yellow" },
    { icon: "military_tech", label: "Mon niveau", value: "Niveau 3", color: "blue" },
    { icon: "local_fire_department", label: "S\xE9rie", value: "7 jours", color: "orange" }
  ];
  static \u0275fac = function JeuxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JeuxComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JeuxComponent, selectors: [["app-jeux"]], standalone: false, decls: 16, vars: 3, consts: [[1, "page-header"], [1, "header-row"], [1, "player-stats", "mb-32"], ["class", "player-stat", 3, "class", 4, "ngFor", "ngForOf"], [1, "section-header", "mb-16"], [1, "badge", "badge-primary"], [1, "jeux-grid"], ["class", "jeu-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "player-stat"], [1, "material-icons-round"], [1, "stat-val"], [1, "stat-lbl"], [1, "jeu-card"], [1, "jeu-icon"], [1, "jeu-body"], [1, "jeu-meta"], [1, "jeu-info"], [1, "badge"], [1, "jeu-points"], [1, "jeu-joueurs"], [1, "btn-primary", "btn-sm"]], template: function JeuxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275text(4, "Jeux familiaux");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Apprenez l'histoire de votre famille en vous amusant");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "div", 2);
      \u0275\u0275template(8, JeuxComponent_div_8_Template, 8, 5, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4)(10, "h3");
      \u0275\u0275text(11, "Choisir un jeu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 5);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 6);
      \u0275\u0275template(15, JeuxComponent_div_15_Template, 23, 10, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.jeux.length, " jeux disponibles");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.jeux);
    }
  }, dependencies: [NgForOf], styles: ["\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.header-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.player-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.player-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 16px 20px;\n  flex: 1;\n  min-width: 160px;\n  box-shadow: var(--shadow-sm);\n}\n.player-stat[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\n.player-stat--blue[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.player-stat--yellow[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.player-stat--orange[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #F97316;\n}\n.stat-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.jeux-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.jeu-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  cursor: pointer;\n  transition:\n    box-shadow var(--transition),\n    transform var(--transition),\n    border-color var(--transition);\n  box-shadow: var(--shadow-sm);\n}\n.jeu-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.jeu-card--blue[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--primary);\n}\n.jeu-card--blue[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n}\n.jeu-card--blue[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.jeu-card--pink[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--pink);\n}\n.jeu-card--pink[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%] {\n  background: var(--pink-bg);\n}\n.jeu-card--pink[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--pink);\n}\n.jeu-card--indigo[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--accent);\n}\n.jeu-card--indigo[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%] {\n  background: var(--accent-bg);\n}\n.jeu-card--indigo[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.jeu-card--green[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--success);\n}\n.jeu-card--green[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n}\n.jeu-card--green[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.jeu-card--orange[_ngcontent-%COMP%] {\n  border-top: 3px solid #F97316;\n}\n.jeu-card--orange[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n}\n.jeu-card--orange[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #F97316;\n}\n.jeu-card--yellow[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--warning);\n}\n.jeu-card--yellow[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n}\n.jeu-card--yellow[_ngcontent-%COMP%]   .jeu-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.jeu-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.jeu-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 26px !important;\n}\n.jeu-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.jeu-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-bottom: 6px;\n}\n.jeu-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.jeu-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-light);\n}\n.jeu-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.jeu-points[_ngcontent-%COMP%], \n.jeu-joueurs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.jeu-points[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%], \n.jeu-joueurs[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=jeux.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JeuxComponent, [{
    type: Component,
    args: [{ selector: "app-jeux", standalone: false, template: `<div class="page-header">
  <div class="header-row">
    <div>
      <h2>Jeux familiaux</h2>
      <p>Apprenez l'histoire de votre famille en vous amusant</p>
    </div>
  </div>
</div>

<!-- STATS JOUEUR -->
<div class="player-stats mb-32">
  <div class="player-stat" *ngFor="let s of stats" [class]="'player-stat--' + s.color">
    <span class="material-icons-round">{{ s.icon }}</span>
    <div>
      <span class="stat-val">{{ s.value }}</span>
      <span class="stat-lbl">{{ s.label }}</span>
    </div>
  </div>
</div>

<!-- GRILLE DES JEUX -->
<div class="section-header mb-16">
  <h3>Choisir un jeu</h3>
  <span class="badge badge-primary">{{ jeux.length }} jeux disponibles</span>
</div>

<div class="jeux-grid">
  <div class="jeu-card" *ngFor="let j of jeux" [class]="'jeu-card--' + j.color">

    <div class="jeu-icon">
      <span class="material-icons-round">{{ j.icon }}</span>
    </div>

    <div class="jeu-body">
      <h4>{{ j.titre }}</h4>
      <p>{{ j.description }}</p>
    </div>

    <div class="jeu-meta">
      <div class="jeu-info">
        <span class="badge" [class]="j.difficulte === 'Facile' ? 'badge-success' : j.difficulte === 'Moyen' ? 'badge-warning' : 'badge-error'">
          {{ j.difficulte }}
        </span>
        <span class="jeu-points">
          <span class="material-icons-round">stars</span>
          {{ j.points }} pts
        </span>
        <span class="jeu-joueurs">
          <span class="material-icons-round">people</span>
          {{ j.joueurs }}
        </span>
      </div>
      <button class="btn-primary btn-sm">Jouer</button>
    </div>

  </div>
</div>
`, styles: ["/* src/app/pages/jeux/jeux.component.scss */\n.header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-row h2 {\n  margin-bottom: 4px;\n}\n.header-row p {\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.player-stats {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.player-stat {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 16px 20px;\n  flex: 1;\n  min-width: 160px;\n  box-shadow: var(--shadow-sm);\n}\n.player-stat .material-icons-round {\n  font-size: 28px !important;\n}\n.player-stat--blue .material-icons-round {\n  color: var(--primary);\n}\n.player-stat--yellow .material-icons-round {\n  color: var(--warning);\n}\n.player-stat--orange .material-icons-round {\n  color: #F97316;\n}\n.stat-val {\n  display: block;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.stat-lbl {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.jeux-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.jeu-card {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  cursor: pointer;\n  transition:\n    box-shadow var(--transition),\n    transform var(--transition),\n    border-color var(--transition);\n  box-shadow: var(--shadow-sm);\n}\n.jeu-card:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.jeu-card--blue {\n  border-top: 3px solid var(--primary);\n}\n.jeu-card--blue .jeu-icon {\n  background: var(--primary-bg);\n}\n.jeu-card--blue .jeu-icon .material-icons-round {\n  color: var(--primary);\n}\n.jeu-card--pink {\n  border-top: 3px solid var(--pink);\n}\n.jeu-card--pink .jeu-icon {\n  background: var(--pink-bg);\n}\n.jeu-card--pink .jeu-icon .material-icons-round {\n  color: var(--pink);\n}\n.jeu-card--indigo {\n  border-top: 3px solid var(--accent);\n}\n.jeu-card--indigo .jeu-icon {\n  background: var(--accent-bg);\n}\n.jeu-card--indigo .jeu-icon .material-icons-round {\n  color: var(--accent);\n}\n.jeu-card--green {\n  border-top: 3px solid var(--success);\n}\n.jeu-card--green .jeu-icon {\n  background: var(--success-bg);\n}\n.jeu-card--green .jeu-icon .material-icons-round {\n  color: var(--success);\n}\n.jeu-card--orange {\n  border-top: 3px solid #F97316;\n}\n.jeu-card--orange .jeu-icon {\n  background: #FFF7ED;\n}\n.jeu-card--orange .jeu-icon .material-icons-round {\n  color: #F97316;\n}\n.jeu-card--yellow {\n  border-top: 3px solid var(--warning);\n}\n.jeu-card--yellow .jeu-icon {\n  background: var(--warning-bg);\n}\n.jeu-card--yellow .jeu-icon .material-icons-round {\n  color: var(--warning);\n}\n.jeu-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.jeu-icon .material-icons-round {\n  font-size: 26px !important;\n}\n.jeu-body {\n  flex: 1;\n}\n.jeu-body h4 {\n  font-size: 15px;\n  margin-bottom: 6px;\n}\n.jeu-body p {\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.jeu-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-light);\n}\n.jeu-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.jeu-points,\n.jeu-joueurs {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.jeu-points .material-icons-round,\n.jeu-joueurs .material-icons-round {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=jeux.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JeuxComponent, { className: "JeuxComponent", filePath: "src/app/pages/jeux/jeux.component.ts", lineNumber: 20 });
})();

// src/app/pages/unions/unions.component.ts
function UnionsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.erreur, " ");
  }
}
function UnionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 6);
    \u0275\u0275text(2, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune union enregistr\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Ajoutez la premi\xE8re union de votre famille.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function UnionsComponent_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Nouvelle union ");
    \u0275\u0275elementEnd()();
  }
}
function UnionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "button", 55);
    \u0275\u0275listener("click", function UnionsComponent_div_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "cards");
    });
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4, "grid_view");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 56);
    \u0275\u0275listener("click", function UnionsComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "list");
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "view_list");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "cards");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "list");
  }
}
function UnionsComponent_div_15_div_1_img_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 78);
    \u0275\u0275listener("error", function UnionsComponent_div_15_div_1_img_10_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const u_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(ctx_r1.getConjoint1(u_r7).id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.photoOf(ctx_r1.getConjoint1(u_r7)), \u0275\u0275sanitizeUrl)("alt", ctx_r1.nomComplet(ctx_r1.getConjoint1(u_r7)));
  }
}
function UnionsComponent_div_15_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const u_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", ((tmp_6_0 = ctx_r1.getConjoint1(u_r7)) == null ? null : tmp_6_0.sexe) === "M")("female", ((tmp_7_0 = ctx_r1.getConjoint1(u_r7)) == null ? null : tmp_7_0.sexe) === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initiales(ctx_r1.getConjoint1(u_r7)), " ");
  }
}
function UnionsComponent_div_15_div_1_img_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 78);
    \u0275\u0275listener("error", function UnionsComponent_div_15_div_1_img_19_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r8);
      const u_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(ctx_r1.getConjoint2(u_r7).id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.photoOf(ctx_r1.getConjoint2(u_r7)), \u0275\u0275sanitizeUrl)("alt", ctx_r1.nomComplet(ctx_r1.getConjoint2(u_r7)));
  }
}
function UnionsComponent_div_15_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const u_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", ((tmp_6_0 = ctx_r1.getConjoint2(u_r7)) == null ? null : tmp_6_0.sexe) === "M")("female", ((tmp_7_0 = ctx_r1.getConjoint2(u_r7)) == null ? null : tmp_7_0.sexe) === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initiales(ctx_r1.getConjoint2(u_r7)), " ");
  }
}
function UnionsComponent_div_15_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 6);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.annee(u_r7.dateDebut) ?? u_r7.dateDebut);
  }
}
function UnionsComponent_div_15_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 6);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r7.lieuDebut);
  }
}
function UnionsComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "div", 60);
    \u0275\u0275elementStart(2, "div", 61)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 62)(8, "div", 63)(9, "div", 64);
    \u0275\u0275template(10, UnionsComponent_div_15_div_1_img_10_Template, 1, 2, "img", 65)(11, UnionsComponent_div_15_div_1_div_11_Template, 2, 5, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 67)(13, "span", 68);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "span", 69);
    \u0275\u0275text(16, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 63)(18, "div", 64);
    \u0275\u0275template(19, UnionsComponent_div_15_div_1_img_19_Template, 1, 2, "img", 65)(20, UnionsComponent_div_15_div_1_div_20_Template, 2, 5, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 67)(22, "span", 68);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 71);
    \u0275\u0275template(25, UnionsComponent_div_15_div_1_div_25_Template, 5, 1, "div", 72)(26, UnionsComponent_div_15_div_1_div_26_Template, 5, 1, "div", 72);
    \u0275\u0275elementStart(27, "div", 73)(28, "span", 6);
    \u0275\u0275text(29, "child_care");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 74)(33, "button", 75);
    \u0275\u0275listener("click", function UnionsComponent_div_15_div_1_Template_button_click_33_listener() {
      const u_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEnfantPanel(u_r7));
    });
    \u0275\u0275elementStart(34, "span", 6);
    \u0275\u0275text(35, "people_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 76);
    \u0275\u0275listener("click", function UnionsComponent_div_15_div_1_Template_button_click_36_listener() {
      const u_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(u_r7));
    });
    \u0275\u0275elementStart(37, "span", 6);
    \u0275\u0275text(38, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 77);
    \u0275\u0275listener("click", function UnionsComponent_div_15_div_1_Template_button_click_39_listener() {
      const u_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(u_r7));
    });
    \u0275\u0275elementStart(40, "span", 6);
    \u0275\u0275text(41, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_15_0;
    const u_r7 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("color-1", i_r9 % 3 === 0)("color-2", i_r9 % 3 === 1)("color-3", i_r9 % 3 === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getTypeColor(u_r7.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeIcon(u_r7.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(u_r7.type));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.photoOf(ctx_r1.getConjoint1(u_r7)) && !ctx_r1.failedPhotos.has(ctx_r1.getConjoint1(u_r7).id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoOf(ctx_r1.getConjoint1(u_r7)) || ctx_r1.failedPhotos.has(((tmp_12_0 = ctx_r1.getConjoint1(u_r7)) == null ? null : tmp_12_0.id) ?? ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.nomComplet(ctx_r1.getConjoint1(u_r7)));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.photoOf(ctx_r1.getConjoint2(u_r7)) && !ctx_r1.failedPhotos.has(ctx_r1.getConjoint2(u_r7).id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoOf(ctx_r1.getConjoint2(u_r7)) || ctx_r1.failedPhotos.has(((tmp_15_0 = ctx_r1.getConjoint2(u_r7)) == null ? null : tmp_15_0.id) ?? ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.nomComplet(ctx_r1.getConjoint2(u_r7)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r7.dateDebut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r7.lieuDebut);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", u_r7.filiations.length, " enfant", u_r7.filiations.length > 1 ? "s" : "");
  }
}
function UnionsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, UnionsComponent_div_15_div_1_Template, 42, 19, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.unions);
  }
}
function UnionsComponent_div_16_div_12_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 106);
    \u0275\u0275listener("error", function UnionsComponent_div_16_div_12_img_4_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r11);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(ctx_r1.getConjoint1(u_r12).id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.photoOf(ctx_r1.getConjoint1(u_r12)), \u0275\u0275sanitizeUrl)("alt", ctx_r1.nomComplet(ctx_r1.getConjoint1(u_r12)));
  }
}
function UnionsComponent_div_16_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const u_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", ((tmp_5_0 = ctx_r1.getConjoint1(u_r12)) == null ? null : tmp_5_0.sexe) === "M")("female", ((tmp_6_0 = ctx_r1.getConjoint1(u_r12)) == null ? null : tmp_6_0.sexe) === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initiales(ctx_r1.getConjoint1(u_r12)), " ");
  }
}
function UnionsComponent_div_16_div_12_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 106);
    \u0275\u0275listener("error", function UnionsComponent_div_16_div_12_img_9_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r13);
      const u_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(ctx_r1.getConjoint2(u_r12).id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.photoOf(ctx_r1.getConjoint2(u_r12)), \u0275\u0275sanitizeUrl)("alt", ctx_r1.nomComplet(ctx_r1.getConjoint2(u_r12)));
  }
}
function UnionsComponent_div_16_div_12_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const u_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", ((tmp_5_0 = ctx_r1.getConjoint2(u_r12)) == null ? null : tmp_5_0.sexe) === "M")("female", ((tmp_6_0 = ctx_r1.getConjoint2(u_r12)) == null ? null : tmp_6_0.sexe) === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initiales(ctx_r1.getConjoint2(u_r12)), " ");
  }
}
function UnionsComponent_div_16_div_12_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.annee(u_r12.dateDebut) ?? u_r12.dateDebut);
  }
}
function UnionsComponent_div_16_div_12_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91)(3, "div", 64);
    \u0275\u0275template(4, UnionsComponent_div_16_div_12_img_4_Template, 1, 2, "img", 92)(5, UnionsComponent_div_16_div_12_div_5_Template, 2, 5, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 94);
    \u0275\u0275text(7, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 64);
    \u0275\u0275template(9, UnionsComponent_div_16_div_12_img_9_Template, 1, 2, "img", 92)(10, UnionsComponent_div_16_div_12_div_10_Template, 2, 5, "div", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 95)(12, "span", 96);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 97);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 98)(17, "span", 99)(18, "span", 6);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 100);
    \u0275\u0275template(22, UnionsComponent_div_16_div_12_span_22_Template, 2, 1, "span", 101)(23, UnionsComponent_div_16_div_12_span_23_Template, 2, 0, "span", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 103)(25, "span", 104)(26, "span", 6);
    \u0275\u0275text(27, "child_care");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 105);
    \u0275\u0275listener("click", function UnionsComponent_div_16_div_12_Template_div_click_29_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(30, "button", 75);
    \u0275\u0275listener("click", function UnionsComponent_div_16_div_12_Template_button_click_30_listener() {
      const u_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEnfantPanel(u_r12));
    });
    \u0275\u0275elementStart(31, "span", 6);
    \u0275\u0275text(32, "people_add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 76);
    \u0275\u0275listener("click", function UnionsComponent_div_16_div_12_Template_button_click_33_listener() {
      const u_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(u_r12));
    });
    \u0275\u0275elementStart(34, "span", 6);
    \u0275\u0275text(35, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 77);
    \u0275\u0275listener("click", function UnionsComponent_div_16_div_12_Template_button_click_36_listener() {
      const u_r12 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(u_r12));
    });
    \u0275\u0275elementStart(37, "span", 6);
    \u0275\u0275text(38, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const u_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.photoOf(ctx_r1.getConjoint1(u_r12)) && !ctx_r1.failedPhotos.has(ctx_r1.getConjoint1(u_r12).id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoOf(ctx_r1.getConjoint1(u_r12)) || ctx_r1.failedPhotos.has(((tmp_5_0 = ctx_r1.getConjoint1(u_r12)) == null ? null : tmp_5_0.id) ?? ""));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.photoOf(ctx_r1.getConjoint2(u_r12)) && !ctx_r1.failedPhotos.has(ctx_r1.getConjoint2(u_r12).id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoOf(ctx_r1.getConjoint2(u_r12)) || ctx_r1.failedPhotos.has(((tmp_7_0 = ctx_r1.getConjoint2(u_r12)) == null ? null : tmp_7_0.id) ?? ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.nomComplet(ctx_r1.getConjoint1(u_r12)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("& ", ctx_r1.nomComplet(ctx_r1.getConjoint2(u_r12)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getTypeColor(u_r12.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeIcon(u_r12.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(u_r12.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", u_r12.dateDebut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !u_r12.dateDebut);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", u_r12.filiations.length, " ");
  }
}
function UnionsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3, "Couple");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 84);
    \u0275\u0275text(5, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 85);
    \u0275\u0275text(7, "Depuis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 86);
    \u0275\u0275text(9, "Enfants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 87);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, UnionsComponent_div_16_div_12_Template, 39, 12, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.unions);
  }
}
function UnionsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275listener("click", function UnionsComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAll());
    });
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275property("value", t_r15.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15.label);
  }
}
function UnionsComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "span", 6);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Plus de 2 participants s\xE9lectionn\xE9s ");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 115);
    \u0275\u0275listener("click", function UnionsComponent_div_40_span_1_Template_button_click_2_listener() {
      const pid_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleParticipant(pid_r17));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pid_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.nomComplet(ctx_r1.getPersonneById(pid_r17)), " ");
  }
}
function UnionsComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275template(1, UnionsComponent_div_40_span_1_Template, 4, 1, "span", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.form.participantIds);
  }
}
function UnionsComponent_div_42_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 106);
    \u0275\u0275listener("error", function UnionsComponent_div_42_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r20);
      const p_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPhotoError(p_r19.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.photoOf(p_r19), \u0275\u0275sanitizeUrl)("alt", ctx_r1.nomComplet(p_r19));
  }
}
function UnionsComponent_div_42_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("male", p_r19.sexe === "M")("female", p_r19.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initiales(p_r19), " ");
  }
}
function UnionsComponent_div_42_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275listener("click", function UnionsComponent_div_42_Template_div_click_0_listener() {
      const p_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleParticipant(p_r19.id));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275template(2, UnionsComponent_div_42_img_2_Template, 1, 2, "img", 92)(3, UnionsComponent_div_42_div_3_Template, 2, 5, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UnionsComponent_div_42_span_6_Template, 2, 0, "span", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.isParticipant(p_r19.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.photoOf(p_r19) && !ctx_r1.failedPhotos.has(p_r19.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoOf(p_r19) || ctx_r1.failedPhotos.has(p_r19.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.nomComplet(p_r19));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isParticipant(p_r19.id));
  }
}
function UnionsComponent_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r21 = ctx.$implicit;
    \u0275\u0275property("value", m_r21.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r21.label);
  }
}
function UnionsComponent_option_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r22 = ctx.$implicit;
    \u0275\u0275property("value", m_r22.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r22.label);
  }
}
function UnionsComponent_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_117_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 106);
    \u0275\u0275listener("error", function UnionsComponent_div_117_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r25);
      const p_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPhotoError(p_r24.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.photoOf(p_r24), \u0275\u0275sanitizeUrl)("alt", ctx_r1.nomComplet(p_r24));
  }
}
function UnionsComponent_div_117_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("male", p_r24.sexe === "M")("female", p_r24.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initiales(p_r24), " ");
  }
}
function UnionsComponent_div_117_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275listener("click", function UnionsComponent_div_117_Template_div_click_0_listener() {
      const p_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEnfantSelection(p_r24.id));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275template(2, UnionsComponent_div_117_img_2_Template, 1, 2, "img", 92)(3, UnionsComponent_div_117_div_3_Template, 2, 5, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UnionsComponent_div_117_span_6_Template, 2, 0, "span", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.isEnfantSelected(p_r24.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.photoOf(p_r24) && !ctx_r1.failedPhotos.has(p_r24.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoOf(p_r24) || ctx_r1.failedPhotos.has(p_r24.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.nomComplet(p_r24));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEnfantSelected(p_r24.id));
  }
}
function UnionsComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275text(1, " Aucune personne disponible ");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_119_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 106);
    \u0275\u0275listener("error", function UnionsComponent_div_119_div_3_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r27);
      const f_r28 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(f_r28.enfant && ctx_r1.onPhotoError(f_r28.enfant.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r28 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.photoOf(f_r28.enfant), \u0275\u0275sanitizeUrl)("alt", ctx_r1.nomComplet(f_r28.enfant));
  }
}
function UnionsComponent_div_119_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r28 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", f_r28.enfant.sexe === "M")("female", f_r28.enfant.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.initiales(f_r28.enfant), " ");
  }
}
function UnionsComponent_div_119_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 64);
    \u0275\u0275template(2, UnionsComponent_div_119_div_3_img_2_Template, 1, 2, "img", 92)(3, UnionsComponent_div_119_div_3_div_3_Template, 2, 5, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 125);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 126);
    \u0275\u0275listener("click", function UnionsComponent_div_119_div_3_Template_button_click_6_listener() {
      const f_r28 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.retirerEnfant(ctx_r1.enfantUnionTarget.id, f_r28.enfantId));
    });
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275text(8, "remove_circle_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.photoOf(f_r28.enfant) && !ctx_r1.failedPhotos.has((f_r28.enfant == null ? null : f_r28.enfant.id) ?? ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.photoOf(f_r28.enfant) || ctx_r1.failedPhotos.has((f_r28.enfant == null ? null : f_r28.enfant.id) ?? ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.nomComplet(f_r28.enfant));
  }
}
function UnionsComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275text(2, "Enfants actuels");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UnionsComponent_div_119_div_3_Template, 9, 3, "div", 123);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.enfantUnionTarget.filiations);
  }
}
function UnionsComponent_span_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_126_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function UnionsComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 128)(2, "div", 129)(3, "span", 6);
    \u0275\u0275text(4, "delete_forever");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Supprimer cette union ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Cette action est irr\xE9versible. Tous les liens de parent\xE9 associ\xE9s seront supprim\xE9s.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 130)(10, "button", 40);
    \u0275\u0275listener("click", function UnionsComponent_div_126_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAll());
    });
    \u0275\u0275text(11, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 131);
    \u0275\u0275listener("click", function UnionsComponent_div_126_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteUnion());
    });
    \u0275\u0275template(13, UnionsComponent_div_126_span_13_Template, 2, 0, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.deleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.deleting ? "Suppression..." : "Supprimer", " ");
  }
}
var MOIS2 = [
  { val: "01", label: "Janvier" },
  { val: "02", label: "F\xE9vrier" },
  { val: "03", label: "Mars" },
  { val: "04", label: "Avril" },
  { val: "05", label: "Mai" },
  { val: "06", label: "Juin" },
  { val: "07", label: "Juillet" },
  { val: "08", label: "Ao\xFBt" },
  { val: "09", label: "Septembre" },
  { val: "10", label: "Octobre" },
  { val: "11", label: "Novembre" },
  { val: "12", label: "D\xE9cembre" }
];
var TYPE_UNION = [
  { val: "mariage", label: "Mariage" },
  { val: "pacs", label: "PACS" },
  { val: "union_libre", label: "Union libre" },
  { val: "fiancailles", label: "Fian\xE7ailles" },
  { val: "adoption", label: "Adoption" },
  { val: "polygamie", label: "Polygamie" }
];
var UnionsComponent = class _UnionsComponent {
  api;
  unions = [];
  personnes = [];
  loading = true;
  erreur = null;
  viewMode = "cards";
  getPhotoUrl = getPhotoUrl;
  failedPhotos = /* @__PURE__ */ new Set();
  onPhotoError(id) {
    this.failedPhotos.add(id);
  }
  photoOf(p) {
    return p ? getPhotoUrl(p) : null;
  }
  // Panel form
  showForm = false;
  editTarget = null;
  // Panel suppression
  showDeleteConfirm = false;
  deleteTarget = null;
  // Panel enfants
  showEnfantPanel = false;
  enfantUnionTarget = null;
  enfantsSelectionnes = [];
  searchEnfant = "";
  // Flags
  saving = false;
  deleting = false;
  addingEnfant = false;
  // Constantes exposées au template
  mois = MOIS2;
  typeUnion = TYPE_UNION;
  // Formulaire
  form = this.emptyForm();
  typeLabel = {
    mariage: "Mariage",
    pacs: "PACS",
    union_libre: "Union libre",
    fiancailles: "Fian\xE7ailles",
    adoption: "Adoption",
    polygamie: "Polygamie"
  };
  typeColorMap = {
    mariage: "pink",
    pacs: "accent",
    union_libre: "primary",
    fiancailles: "gold",
    adoption: "green",
    polygamie: "purple"
  };
  typeIconMap = {
    mariage: "favorite",
    pacs: "handshake",
    union_libre: "people",
    fiancailles: "ring_volume",
    adoption: "child_care",
    polygamie: "group"
  };
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this.loading = true;
    forkJoin({
      unions: this.api.getUnions(),
      personnes: this.api.getPersonnes()
    }).subscribe({
      next: ({ unions, personnes }) => {
        this.unions = unions;
        this.personnes = personnes;
        this.loading = false;
      },
      error: () => {
        this.erreur = "Impossible de charger les donn\xE9es.";
        this.loading = false;
      }
    });
  }
  refreshUnions() {
    this.api.getUnions().subscribe({
      next: (data) => {
        this.unions = data;
      }
    });
  }
  /* ===== Helpers ===== */
  getConjoint1(u) {
    return u.participants.find((p) => p.ordre === 0)?.personne ?? null;
  }
  getConjoint2(u) {
    return u.participants.find((p) => p.ordre === 1)?.personne ?? null;
  }
  initiales(p) {
    if (!p)
      return "?";
    return getInitiales(p);
  }
  nomComplet(p) {
    if (!p)
      return "\u2014";
    return getNomComplet(p);
  }
  annee(dateStr) {
    return extractAnnee(dateStr);
  }
  getPersonneById(id) {
    return this.personnes.find((p) => p.id === id) ?? null;
  }
  getTypeLabel(type) {
    return this.typeLabel[type ?? ""] ?? type ?? "Union";
  }
  getTypeColor(type) {
    return "banner-" + (this.typeColorMap[type ?? ""] ?? "primary");
  }
  getTypeIcon(type) {
    return this.typeIconMap[type ?? ""] ?? "favorite";
  }
  emptyForm() {
    return {
      type: "mariage",
      debut_annee: "",
      debut_mois: "",
      debut_jour: "",
      lieuDebut: "",
      fin_annee: "",
      fin_mois: "",
      fin_jour: "",
      lieuFin: "",
      notes: "",
      participantIds: []
    };
  }
  /* ===== Form CRUD ===== */
  openCreate() {
    this.editTarget = null;
    this.form = this.emptyForm();
    this.showForm = true;
  }
  openEdit(u) {
    this.editTarget = u;
    const [dy, dm, dd] = this.splitDate(u.dateDebut);
    const [fy, fm, fd] = this.splitDate(u.dateFin);
    this.form = {
      type: u.type ?? "mariage",
      debut_annee: dy,
      debut_mois: dm,
      debut_jour: dd,
      lieuDebut: u.lieuDebut ?? "",
      fin_annee: fy,
      fin_mois: fm,
      fin_jour: fd,
      lieuFin: u.lieuFin ?? "",
      notes: u.notes ?? "",
      participantIds: u.participants.map((p) => p.personneId)
    };
    this.showForm = true;
  }
  closeAll() {
    this.showForm = false;
    this.showDeleteConfirm = false;
    this.showEnfantPanel = false;
    this.editTarget = null;
    this.deleteTarget = null;
    this.enfantUnionTarget = null;
    this.enfantsSelectionnes = [];
  }
  splitDate(dateStr) {
    if (!dateStr)
      return ["", "", ""];
    const parts = dateStr.split("-");
    return [parts[0] ?? "", parts[1] ?? "", parts[2] ?? ""];
  }
  buildDateStr(annee, mois, jour) {
    if (!annee)
      return null;
    if (!mois)
      return annee;
    if (!jour)
      return `${annee}-${mois}`;
    return `${annee}-${mois}-${jour}`;
  }
  toggleParticipant(id) {
    const idx = this.form.participantIds.indexOf(id);
    if (idx >= 0) {
      this.form.participantIds.splice(idx, 1);
    } else {
      this.form.participantIds.push(id);
    }
  }
  isParticipant(id) {
    return this.form.participantIds.includes(id);
  }
  saveUnion() {
    if (this.saving)
      return;
    this.saving = true;
    const body = {
      type: this.form.type,
      dateDebut: this.buildDateStr(this.form.debut_annee, this.form.debut_mois, this.form.debut_jour),
      lieuDebut: this.form.lieuDebut || null,
      dateFin: this.buildDateStr(this.form.fin_annee, this.form.fin_mois, this.form.fin_jour),
      lieuFin: this.form.lieuFin || null,
      notes: this.form.notes || null,
      parentIds: this.form.participantIds
    };
    const obs = this.editTarget ? this.api.updateUnion(this.editTarget.id, body) : this.api.createUnion(body);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeAll();
        this.refreshUnions();
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  /* ===== Suppression ===== */
  confirmDelete(u) {
    this.deleteTarget = u;
    this.showDeleteConfirm = true;
  }
  deleteUnion() {
    if (!this.deleteTarget || this.deleting)
      return;
    this.deleting = true;
    this.api.deleteUnion(this.deleteTarget.id).subscribe({
      next: () => {
        this.deleting = false;
        this.unions = this.unions.filter((u) => u.id !== this.deleteTarget.id);
        this.closeAll();
      },
      error: () => {
        this.deleting = false;
      }
    });
  }
  /* ===== Enfants ===== */
  openEnfantPanel(u) {
    this.enfantUnionTarget = u;
    this.enfantsSelectionnes = [];
    this.searchEnfant = "";
    this.showEnfantPanel = true;
  }
  closeEnfantPanel() {
    this.showEnfantPanel = false;
    this.enfantUnionTarget = null;
    this.enfantsSelectionnes = [];
  }
  get personnesDisponibles() {
    if (!this.enfantUnionTarget)
      return [];
    const participantIds = this.enfantUnionTarget.participants.map((p) => p.personneId);
    const enfantIds = this.enfantUnionTarget.filiations.map((f) => f.enfantId);
    const exclus = /* @__PURE__ */ new Set([...participantIds, ...enfantIds]);
    const q = this.searchEnfant.toLowerCase();
    return this.personnes.filter((p) => {
      if (exclus.has(p.id))
        return false;
      if (!q)
        return true;
      const nom = getNomComplet(p).toLowerCase();
      return nom.includes(q);
    });
  }
  toggleEnfantSelection(id) {
    const idx = this.enfantsSelectionnes.indexOf(id);
    if (idx >= 0) {
      this.enfantsSelectionnes.splice(idx, 1);
    } else {
      this.enfantsSelectionnes.push(id);
    }
  }
  isEnfantSelected(id) {
    return this.enfantsSelectionnes.includes(id);
  }
  ajouterEnfants() {
    if (!this.enfantUnionTarget || this.addingEnfant || this.enfantsSelectionnes.length === 0)
      return;
    this.addingEnfant = true;
    const unionId = this.enfantUnionTarget.id;
    const ids = [...this.enfantsSelectionnes];
    let completed = 0;
    ids.forEach((enfantId) => {
      this.api.addEnfantToUnion(unionId, enfantId).subscribe({
        next: () => {
          completed++;
          if (completed === ids.length) {
            this.addingEnfant = false;
            this.closeEnfantPanel();
            this.refreshUnions();
          }
        },
        error: () => {
          completed++;
          if (completed === ids.length) {
            this.addingEnfant = false;
            this.refreshUnions();
          }
        }
      });
    });
  }
  retirerEnfant(unionId, enfantId) {
    this.api.removeEnfantFromUnion(unionId, enfantId).subscribe({
      next: () => {
        this.refreshUnions();
        if (this.enfantUnionTarget?.id === unionId) {
          this.api.getUnions().subscribe((data) => {
            this.unions = data;
            const updated = data.find((u) => u.id === unionId);
            if (updated)
              this.enfantUnionTarget = updated;
          });
        }
      }
    });
  }
  static \u0275fac = function UnionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnionsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnionsComponent, selectors: [["app-unions"]], standalone: false, decls: 127, vars: 43, consts: [["unionForm", "ngForm"], [1, "unions-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-primary", 3, "click"], [1, "material-icons-round"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "toolbar-right", 4, "ngIf"], ["class", "unions-grid", 4, "ngIf"], ["class", "ul-table", 4, "ngIf"], ["class", "panel-overlay", 3, "click", 4, "ngIf"], [1, "slide-panel"], [1, "panel-header"], [1, "btn-icon", 3, "click"], [1, "panel-body"], [1, "form-section"], [1, "section-title"], [1, "form-group"], ["name", "type", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "warning-msg", 4, "ngIf"], ["class", "participant-chips", 4, "ngIf"], [1, "person-select-list"], ["class", "person-select-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "form-row"], ["type", "number", "name", "debut_annee", "placeholder", "2000", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "debut_mois", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["type", "number", "name", "debut_jour", "placeholder", "1", "min", "1", "max", "31", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lieuDebut", "placeholder", "Ville, pays...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "optional"], ["type", "number", "name", "fin_annee", "placeholder", "2020", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "fin_mois", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "fin_jour", "placeholder", "1", "min", "1", "max", "31", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lieuFin", "placeholder", "Ville, pays...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "notes", "rows", "3", "placeholder", "Notes compl\xE9mentaires...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "panel-footer"], [1, "btn-ghost", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], ["class", "material-icons-round spin", 4, "ngIf"], [1, "panel-subtitle"], [1, "search-bar", 2, "margin-bottom", "12px"], ["type", "text", "name", "searchEnfant", "placeholder", "Rechercher une personne...", 3, "ngModelChange", "ngModel"], ["class", "empty-list-msg", 4, "ngIf"], ["class", "current-children", 4, "ngIf"], ["class", "confirm-dialog", 4, "ngIf"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "error-state"], [1, "empty-state"], [1, "toolbar-right"], [1, "view-toggle"], ["title", "Vue cartes", 1, "vt-btn", 3, "click"], ["title", "Vue liste", 1, "vt-btn", 3, "click"], [1, "unions-grid"], ["class", "union-card", 4, "ngFor", "ngForOf"], [1, "union-card"], [1, "pc-colorband"], [1, "union-type-banner", 3, "ngClass"], [1, "couple-row"], [1, "person-chip"], [1, "u-avatar-wrap"], ["class", "u-avatar-photo avatar avatar-md", 3, "src", "alt", "error", 4, "ngIf"], ["class", "avatar avatar-md", 3, "male", "female", 4, "ngIf"], [1, "person-info"], [1, "person-name"], [1, "material-icons-round", "link-icon"], ["class", "avatar avatar-md accent", 3, "male", "female", 4, "ngIf"], [1, "union-details"], ["class", "detail-item", 4, "ngIf"], [1, "detail-item"], [1, "card-actions"], ["title", "G\xE9rer les enfants", 1, "btn-icon", 3, "click"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger", 3, "click"], [1, "u-avatar-photo", "avatar", "avatar-md", 3, "error", "src", "alt"], [1, "avatar", "avatar-md"], [1, "avatar", "avatar-md", "accent"], [1, "ul-table"], [1, "ul-thead"], [1, "pl-th"], [1, "pl-th", "ul-th-type"], [1, "pl-th", "ul-th-date"], [1, "pl-th", "ul-th-enfants"], [1, "pl-th", "ul-th-actions"], ["class", "ul-row", 4, "ngFor", "ngForOf"], [1, "ul-row"], [1, "ul-cell", "ul-cell-couple"], [1, "ul-avatars"], ["class", "u-avatar-photo avatar avatar-sm", 3, "src", "alt", "error", 4, "ngIf"], ["class", "avatar avatar-sm", 3, "male", "female", 4, "ngIf"], [1, "material-icons-round", "ul-heart"], [1, "ul-names"], [1, "ul-name-primary"], [1, "ul-name-secondary"], [1, "ul-cell", "ul-cell-type"], [1, "union-type-badge", 3, "ngClass"], [1, "ul-cell", "ul-cell-date"], [4, "ngIf"], ["class", "pl-empty", 4, "ngIf"], [1, "ul-cell", "ul-cell-enfants"], [1, "ul-enfant-count"], [1, "ul-cell", "ul-cell-actions", 3, "click"], [1, "u-avatar-photo", "avatar", "avatar-sm", 3, "error", "src", "alt"], [1, "avatar", "avatar-sm"], [1, "pl-empty"], [1, "panel-overlay", 3, "click"], [3, "value"], [1, "warning-msg"], [1, "participant-chips"], ["class", "participant-chip", 4, "ngFor", "ngForOf"], [1, "participant-chip"], ["type", "button", 1, "chip-remove", 3, "click"], [1, "person-select-item", 3, "click"], [1, "person-select-name"], ["class", "material-icons-round check-icon", 4, "ngIf"], [1, "material-icons-round", "check-icon"], [1, "empty-list-msg"], [1, "current-children"], [1, "section-title", 2, "margin-top", "20px"], ["class", "child-item", 4, "ngFor", "ngForOf"], [1, "child-item"], [1, "child-name"], ["title", "Retirer", 1, "btn-icon", "btn-icon-danger", 3, "click"], [1, "confirm-dialog"], [1, "confirm-box"], [1, "confirm-icon"], [1, "confirm-actions"], [1, "btn-danger", 3, "click", "disabled"]], template: function UnionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
      \u0275\u0275text(4, "Unions familiales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function UnionsComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreate());
      });
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvelle union ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, UnionsComponent_div_11_Template, 4, 0, "div", 7)(12, UnionsComponent_div_12_Template, 4, 1, "div", 8)(13, UnionsComponent_div_13_Template, 11, 0, "div", 9)(14, UnionsComponent_div_14_Template, 8, 4, "div", 10)(15, UnionsComponent_div_15_Template, 2, 1, "div", 11)(16, UnionsComponent_div_16_Template, 13, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, UnionsComponent_div_17_Template, 1, 0, "div", 13);
      \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "h3");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 16);
      \u0275\u0275listener("click", function UnionsComponent_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAll());
      });
      \u0275\u0275elementStart(23, "span", 6);
      \u0275\u0275text(24, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 17)(26, "form", null, 0)(28, "div", 18)(29, "div", 19);
      \u0275\u0275text(30, "Type et participants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 20)(32, "label");
      \u0275\u0275text(33, "Type d'union");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_select_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.type, $event) || (ctx.form.type = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(35, UnionsComponent_option_35_Template, 2, 2, "option", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 20)(37, "label");
      \u0275\u0275text(38, "Participants");
      \u0275\u0275elementEnd();
      \u0275\u0275template(39, UnionsComponent_div_39_Template, 4, 0, "div", 23)(40, UnionsComponent_div_40_Template, 2, 1, "div", 24);
      \u0275\u0275elementStart(41, "div", 25);
      \u0275\u0275template(42, UnionsComponent_div_42_Template, 7, 6, "div", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 18)(44, "div", 19);
      \u0275\u0275text(45, "D\xE9but de l'union");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 27)(47, "div", 20)(48, "label");
      \u0275\u0275text(49, "Ann\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.debut_annee, $event) || (ctx.form.debut_annee = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 20)(52, "label");
      \u0275\u0275text(53, "Mois");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "select", 29);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_select_ngModelChange_54_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.debut_mois, $event) || (ctx.form.debut_mois = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(55, "option", 30);
      \u0275\u0275text(56, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, UnionsComponent_option_57_Template, 2, 2, "option", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 20)(59, "label");
      \u0275\u0275text(60, "Jour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_input_ngModelChange_61_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.debut_jour, $event) || (ctx.form.debut_jour = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 20)(63, "label");
      \u0275\u0275text(64, "Lieu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_input_ngModelChange_65_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.lieuDebut, $event) || (ctx.form.lieuDebut = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 18)(67, "div", 19);
      \u0275\u0275text(68, "Fin de l'union ");
      \u0275\u0275elementStart(69, "span", 33);
      \u0275\u0275text(70, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 27)(72, "div", 20)(73, "label");
      \u0275\u0275text(74, "Ann\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_input_ngModelChange_75_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.fin_annee, $event) || (ctx.form.fin_annee = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 20)(77, "label");
      \u0275\u0275text(78, "Mois");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "select", 35);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_select_ngModelChange_79_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.fin_mois, $event) || (ctx.form.fin_mois = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(80, "option", 30);
      \u0275\u0275text(81, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275template(82, UnionsComponent_option_82_Template, 2, 2, "option", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 20)(84, "label");
      \u0275\u0275text(85, "Jour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.fin_jour, $event) || (ctx.form.fin_jour = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 20)(88, "label");
      \u0275\u0275text(89, "Lieu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_input_ngModelChange_90_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.lieuFin, $event) || (ctx.form.lieuFin = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 18)(92, "div", 19);
      \u0275\u0275text(93, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 20)(95, "textarea", 38);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_textarea_ngModelChange_95_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.notes, $event) || (ctx.form.notes = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(96, "div", 39)(97, "button", 40);
      \u0275\u0275listener("click", function UnionsComponent_Template_button_click_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAll());
      });
      \u0275\u0275text(98, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "button", 41);
      \u0275\u0275listener("click", function UnionsComponent_Template_button_click_99_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveUnion());
      });
      \u0275\u0275template(100, UnionsComponent_span_100_Template, 2, 0, "span", 42);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 14)(103, "div", 15)(104, "h3");
      \u0275\u0275text(105, "Ajouter des enfants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "button", 16);
      \u0275\u0275listener("click", function UnionsComponent_Template_button_click_106_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeEnfantPanel());
      });
      \u0275\u0275elementStart(107, "span", 6);
      \u0275\u0275text(108, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "div", 17)(110, "p", 43);
      \u0275\u0275text(111, "S\xE9lectionnez des membres existants de la famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 44)(113, "span", 6);
      \u0275\u0275text(114, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function UnionsComponent_Template_input_ngModelChange_115_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEnfant, $event) || (ctx.searchEnfant = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 25);
      \u0275\u0275template(117, UnionsComponent_div_117_Template, 7, 6, "div", 26)(118, UnionsComponent_div_118_Template, 2, 0, "div", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275template(119, UnionsComponent_div_119_Template, 4, 1, "div", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 39)(121, "button", 40);
      \u0275\u0275listener("click", function UnionsComponent_Template_button_click_121_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeEnfantPanel());
      });
      \u0275\u0275text(122, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "button", 41);
      \u0275\u0275listener("click", function UnionsComponent_Template_button_click_123_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.ajouterEnfants());
      });
      \u0275\u0275template(124, UnionsComponent_span_124_Template, 2, 0, "span", 42);
      \u0275\u0275text(125);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(126, UnionsComponent_div_126_Template, 15, 3, "div", 48);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate3("", ctx.unions.length, " union", ctx.unions.length > 1 ? "s" : "", " enregistr\xE9e", ctx.unions.length > 1 ? "s" : "");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.erreur && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.unions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.unions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.unions.length > 0 && ctx.viewMode === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.unions.length > 0 && ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm || ctx.showDeleteConfirm || ctx.showEnfantPanel);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editTarget ? "Modifier l'union" : "Nouvelle union");
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.typeUnion);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.form.participantIds.length > 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.participantIds.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.personnes);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.debut_annee);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.debut_mois);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.mois);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.debut_jour);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.lieuDebut);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.fin_annee);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.fin_mois);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.mois);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.fin_jour);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.lieuFin);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.notes);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? "Sauvegarde..." : "Sauvegarder", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showEnfantPanel);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEnfant);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.personnesDisponibles);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.personnesDisponibles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.enfantUnionTarget && ctx.enfantUnionTarget.filiations.length > 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.addingEnfant || ctx.enfantsSelectionnes.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.addingEnfant);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2(" Ajouter (", ctx.enfantsSelectionnes.length, " s\xE9lectionn\xE9", ctx.enfantsSelectionnes.length > 1 ? "s" : "", ") ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteConfirm);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n.unions-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.u-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.u-avatar-photo[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n.unions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.union-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition: var(--transition);\n}\n.union-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);\n  transform: translateY(-2px);\n}\n.union-type-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.union-type-banner[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.union-type-banner.banner-pink[_ngcontent-%COMP%] {\n  background: #fdf2f8;\n  color: #db2777;\n}\n.union-type-banner.banner-accent[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: var(--accent);\n}\n.union-type-banner.banner-primary[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.union-type-banner.banner-gold[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #b45309;\n}\n.union-type-banner.banner-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.union-type-banner.banner-purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  color: #7c3aed;\n}\n.couple-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  gap: 8px;\n}\n.person-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.person-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.person-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.link-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #f43f5e;\n  flex-shrink: 0;\n}\n.avatar.accent[_ngcontent-%COMP%] {\n  background: var(--accent);\n}\n.union-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 16px;\n  padding: 12px 16px 16px;\n  border-top: 1px solid var(--border);\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.detail-item[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: var(--text-muted);\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: flex-end;\n  padding: 8px 12px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-muted);\n}\n.btn-icon-danger[_ngcontent-%COMP%] {\n  color: var(--error) !important;\n}\n.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2 !important;\n}\n.panel-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.slide-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 480px;\n  height: 100vh;\n  background: var(--white);\n  box-shadow: var(--shadow-xl);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.slide-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.panel-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0 0 16px;\n}\n.panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n  background: var(--white);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border);\n}\n.optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  font-size: 14px;\n  color: var(--text-primary);\n  background: var(--white);\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px var(--primary-bg);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr;\n  gap: 12px;\n}\n.person-select-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  padding: 4px;\n}\n.person-select-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.person-select-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-muted);\n}\n.person-select-item.selected[_ngcontent-%COMP%] {\n  background: var(--primary-bg, #eff6ff);\n  border: 1px solid var(--primary-border, #bfdbfe);\n}\n.person-select-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.check-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: var(--primary);\n}\n.participant-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.participant-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  background: var(--primary-bg, #eff6ff);\n  border: 1px solid var(--primary-border, #bfdbfe);\n  border-radius: 20px;\n  font-size: 13px;\n  color: var(--primary);\n  font-weight: 500;\n}\n.chip-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  color: var(--primary);\n  padding: 0;\n  opacity: 0.7;\n}\n.chip-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.warning-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #fffbeb;\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #92400e;\n  margin-bottom: 8px;\n}\n.warning-msg[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.current-children[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.child-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.child-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.child-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.empty-list-msg[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.confirm-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n}\n.confirm-box[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  width: 400px;\n  max-width: 90vw;\n  box-shadow: var(--shadow-xl);\n  text-align: center;\n}\n.confirm-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 12px 0 8px;\n}\n.confirm-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #fef2f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 4px;\n}\n.confirm-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n  color: var(--error);\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.union-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n}\n.union-type-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n.union-type-badge.banner-pink[_ngcontent-%COMP%] {\n  background: #fdf2f8;\n  color: #db2777;\n}\n.union-type-badge.banner-accent[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: var(--accent);\n}\n.union-type-badge.banner-primary[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.union-type-badge.banner-gold[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #b45309;\n}\n.union-type-badge.banner-green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.union-type-badge.banner-purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  color: #7c3aed;\n}\n.ul-table[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n  overflow: hidden;\n}\n.ul-thead[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 100px 80px 120px;\n  padding: 10px 16px;\n  background: var(--bg-muted, #f8fafc);\n  border-bottom: 1px solid var(--border);\n}\n.ul-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 100px 80px 120px;\n  padding: 12px 16px;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  transition: background 0.12s;\n}\n.ul-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ul-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-muted, #f8fafc);\n}\n.ul-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.ul-cell-couple[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.ul-avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.ul-heart[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: #f43f5e;\n}\n.ul-names[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.ul-name-primary[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ul-name-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ul-cell-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.ul-enfant-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.ul-enfant-count[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  color: var(--text-muted);\n}\n.ul-cell-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  justify-content: flex-end;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .page-header[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .unions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ul-thead[_ngcontent-%COMP%], \n   .ul-row[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 60px 80px;\n  }\n  .ul-th-type[_ngcontent-%COMP%], \n   .ul-th-date[_ngcontent-%COMP%], \n   .ul-cell-type[_ngcontent-%COMP%], \n   .ul-cell-date[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .slide-panel[_ngcontent-%COMP%] {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 92vh;\n    transform: translateY(100%);\n  }\n  .slide-panel.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .panel-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .ul-thead[_ngcontent-%COMP%], \n   .ul-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 80px;\n  }\n  .ul-th-type[_ngcontent-%COMP%], \n   .ul-th-date[_ngcontent-%COMP%], \n   .ul-th-enfants[_ngcontent-%COMP%], \n   .ul-cell-type[_ngcontent-%COMP%], \n   .ul-cell-date[_ngcontent-%COMP%], \n   .ul-cell-enfants[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=unions.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnionsComponent, [{
    type: Component,
    args: [{ selector: "app-unions", standalone: false, template: `<div class="unions-page">

  <!-- En-t\xEAte -->
  <div class="page-header">
    <div>
      <h2 class="page-title">Unions familiales</h2>
      <p class="page-subtitle">{{ unions.length }} union{{ unions.length > 1 ? 's' : '' }} enregistr\xE9e{{ unions.length > 1 ? 's' : '' }}</p>
    </div>
    <button class="btn-primary" (click)="openCreate()">
      <span class="material-icons-round">add</span>
      Nouvelle union
    </button>
  </div>

  <!-- Chargement -->
  <div class="loading-state" *ngIf="loading">
    <span class="material-icons-round spin">sync</span>
    Chargement...
  </div>

  <!-- Erreur -->
  <div class="error-state" *ngIf="erreur && !loading">
    <span class="material-icons-round">error_outline</span>
    {{ erreur }}
  </div>

  <!-- \xC9tat vide -->
  <div class="empty-state" *ngIf="!loading && !erreur && unions.length === 0">
    <span class="material-icons-round">favorite_border</span>
    <h3>Aucune union enregistr\xE9e</h3>
    <p>Ajoutez la premi\xE8re union de votre famille.</p>
    <button class="btn-primary" (click)="openCreate()">
      <span class="material-icons-round">add</span>
      Nouvelle union
    </button>
  </div>

  <!-- Toolbar toggle vue -->
  <div class="toolbar-right" *ngIf="!loading && !erreur && unions.length > 0">
    <div class="view-toggle">
      <button class="vt-btn" [class.active]="viewMode === 'cards'" (click)="viewMode = 'cards'" title="Vue cartes">
        <span class="material-icons-round">grid_view</span>
      </button>
      <button class="vt-btn" [class.active]="viewMode === 'list'" (click)="viewMode = 'list'" title="Vue liste">
        <span class="material-icons-round">view_list</span>
      </button>
    </div>
  </div>

  <!-- ===== VUE CARTES ===== -->
  <div class="unions-grid" *ngIf="!loading && !erreur && unions.length > 0 && viewMode === 'cards'">
    <div class="union-card" *ngFor="let u of unions; let i = index">

      <!-- Colorband style home -->
      <div class="pc-colorband"
           [class.color-1]="i % 3 === 0"
           [class.color-2]="i % 3 === 1"
           [class.color-3]="i % 3 === 2"></div>

      <!-- Bandeau type -->
      <div class="union-type-banner" [ngClass]="getTypeColor(u.type)">
        <span class="material-icons-round">{{ getTypeIcon(u.type) }}</span>
        <span>{{ getTypeLabel(u.type) }}</span>
      </div>

      <!-- Couple -->
      <div class="couple-row">
        <div class="person-chip">
          <div class="u-avatar-wrap">
            <img *ngIf="photoOf(getConjoint1(u)) && !failedPhotos.has(getConjoint1(u)!.id)"
                 [src]="photoOf(getConjoint1(u))" class="u-avatar-photo avatar avatar-md"
                 [alt]="nomComplet(getConjoint1(u))"
                 (error)="onPhotoError(getConjoint1(u)!.id)" />
            <div *ngIf="!photoOf(getConjoint1(u)) || failedPhotos.has(getConjoint1(u)?.id ?? '')"
                 class="avatar avatar-md"
                 [class.male]="getConjoint1(u)?.sexe === 'M'"
                 [class.female]="getConjoint1(u)?.sexe === 'F'">
              {{ initiales(getConjoint1(u)) }}
            </div>
          </div>
          <div class="person-info">
            <span class="person-name">{{ nomComplet(getConjoint1(u)) }}</span>
          </div>
        </div>
        <span class="material-icons-round link-icon">favorite</span>
        <div class="person-chip">
          <div class="u-avatar-wrap">
            <img *ngIf="photoOf(getConjoint2(u)) && !failedPhotos.has(getConjoint2(u)!.id)"
                 [src]="photoOf(getConjoint2(u))" class="u-avatar-photo avatar avatar-md"
                 [alt]="nomComplet(getConjoint2(u))"
                 (error)="onPhotoError(getConjoint2(u)!.id)" />
            <div *ngIf="!photoOf(getConjoint2(u)) || failedPhotos.has(getConjoint2(u)?.id ?? '')"
                 class="avatar avatar-md accent"
                 [class.male]="getConjoint2(u)?.sexe === 'M'"
                 [class.female]="getConjoint2(u)?.sexe === 'F'">
              {{ initiales(getConjoint2(u)) }}
            </div>
          </div>
          <div class="person-info">
            <span class="person-name">{{ nomComplet(getConjoint2(u)) }}</span>
          </div>
        </div>
      </div>

      <!-- D\xE9tails -->
      <div class="union-details">
        <div class="detail-item" *ngIf="u.dateDebut">
          <span class="material-icons-round">calendar_today</span>
          <span>{{ annee(u.dateDebut) ?? u.dateDebut }}</span>
        </div>
        <div class="detail-item" *ngIf="u.lieuDebut">
          <span class="material-icons-round">location_on</span>
          <span>{{ u.lieuDebut }}</span>
        </div>
        <div class="detail-item">
          <span class="material-icons-round">child_care</span>
          <span>{{ u.filiations.length }} enfant{{ u.filiations.length > 1 ? 's' : '' }}</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="card-actions">
        <button class="btn-icon" title="G\xE9rer les enfants" (click)="openEnfantPanel(u)">
          <span class="material-icons-round">people_add</span>
        </button>
        <button class="btn-icon" title="Modifier" (click)="openEdit(u)">
          <span class="material-icons-round">edit</span>
        </button>
        <button class="btn-icon btn-icon-danger" title="Supprimer" (click)="confirmDelete(u)">
          <span class="material-icons-round">delete</span>
        </button>
      </div>

    </div>
  </div>

  <!-- ===== VUE LISTE ===== -->
  <div class="ul-table" *ngIf="!loading && !erreur && unions.length > 0 && viewMode === 'list'">
    <!-- En-t\xEAte -->
    <div class="ul-thead">
      <span class="pl-th">Couple</span>
      <span class="pl-th ul-th-type">Type</span>
      <span class="pl-th ul-th-date">Depuis</span>
      <span class="pl-th ul-th-enfants">Enfants</span>
      <span class="pl-th ul-th-actions">Actions</span>
    </div>
    <!-- Lignes -->
    <div class="ul-row" *ngFor="let u of unions">
      <!-- Couple -->
      <div class="ul-cell ul-cell-couple">
        <div class="ul-avatars">
          <div class="u-avatar-wrap">
            <img *ngIf="photoOf(getConjoint1(u)) && !failedPhotos.has(getConjoint1(u)!.id)"
                 [src]="photoOf(getConjoint1(u))" class="u-avatar-photo avatar avatar-sm"
                 [alt]="nomComplet(getConjoint1(u))"
                 (error)="onPhotoError(getConjoint1(u)!.id)" />
            <div *ngIf="!photoOf(getConjoint1(u)) || failedPhotos.has(getConjoint1(u)?.id ?? '')"
                 class="avatar avatar-sm"
                 [class.male]="getConjoint1(u)?.sexe === 'M'" [class.female]="getConjoint1(u)?.sexe === 'F'">
              {{ initiales(getConjoint1(u)) }}
            </div>
          </div>
          <span class="material-icons-round ul-heart">favorite</span>
          <div class="u-avatar-wrap">
            <img *ngIf="photoOf(getConjoint2(u)) && !failedPhotos.has(getConjoint2(u)!.id)"
                 [src]="photoOf(getConjoint2(u))" class="u-avatar-photo avatar avatar-sm"
                 [alt]="nomComplet(getConjoint2(u))"
                 (error)="onPhotoError(getConjoint2(u)!.id)" />
            <div *ngIf="!photoOf(getConjoint2(u)) || failedPhotos.has(getConjoint2(u)?.id ?? '')"
                 class="avatar avatar-sm"
                 [class.male]="getConjoint2(u)?.sexe === 'M'" [class.female]="getConjoint2(u)?.sexe === 'F'">
              {{ initiales(getConjoint2(u)) }}
            </div>
          </div>
        </div>
        <div class="ul-names">
          <span class="ul-name-primary">{{ nomComplet(getConjoint1(u)) }}</span>
          <span class="ul-name-secondary">& {{ nomComplet(getConjoint2(u)) }}</span>
        </div>
      </div>
      <!-- Type -->
      <div class="ul-cell ul-cell-type">
        <span class="union-type-badge" [ngClass]="getTypeColor(u.type)">
          <span class="material-icons-round">{{ getTypeIcon(u.type) }}</span>
          {{ getTypeLabel(u.type) }}
        </span>
      </div>
      <!-- Date -->
      <div class="ul-cell ul-cell-date">
        <span *ngIf="u.dateDebut">{{ annee(u.dateDebut) ?? u.dateDebut }}</span>
        <span *ngIf="!u.dateDebut" class="pl-empty">\u2014</span>
      </div>
      <!-- Enfants -->
      <div class="ul-cell ul-cell-enfants">
        <span class="ul-enfant-count">
          <span class="material-icons-round">child_care</span>
          {{ u.filiations.length }}
        </span>
      </div>
      <!-- Actions -->
      <div class="ul-cell ul-cell-actions" (click)="$event.stopPropagation()">
        <button class="btn-icon" title="G\xE9rer les enfants" (click)="openEnfantPanel(u)">
          <span class="material-icons-round">people_add</span>
        </button>
        <button class="btn-icon" title="Modifier" (click)="openEdit(u)">
          <span class="material-icons-round">edit</span>
        </button>
        <button class="btn-icon btn-icon-danger" title="Supprimer" (click)="confirmDelete(u)">
          <span class="material-icons-round">delete</span>
        </button>
      </div>
    </div>
  </div>

</div>

<!-- ===== OVERLAY ===== -->
<div class="panel-overlay" *ngIf="showForm || showDeleteConfirm || showEnfantPanel" (click)="closeAll()"></div>

<!-- ===== PANNEAU FORMULAIRE ===== -->
<div class="slide-panel" [class.open]="showForm">
  <div class="panel-header">
    <h3>{{ editTarget ? 'Modifier l\\'union' : 'Nouvelle union' }}</h3>
    <button class="btn-icon" (click)="closeAll()">
      <span class="material-icons-round">close</span>
    </button>
  </div>

  <div class="panel-body">
    <form #unionForm="ngForm">

      <!-- Section: Type et participants -->
      <div class="form-section">
        <div class="section-title">Type et participants</div>

        <div class="form-group">
          <label>Type d'union</label>
          <select name="type" [(ngModel)]="form.type" class="form-control">
            <option *ngFor="let t of typeUnion" [value]="t.val">{{ t.label }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Participants</label>
          <div class="warning-msg" *ngIf="form.participantIds.length > 2">
            <span class="material-icons-round">warning</span>
            Plus de 2 participants s\xE9lectionn\xE9s
          </div>
          <div class="participant-chips" *ngIf="form.participantIds.length > 0">
            <span class="participant-chip" *ngFor="let pid of form.participantIds">
              {{ nomComplet(getPersonneById(pid)) }}
              <button type="button" class="chip-remove" (click)="toggleParticipant(pid)">\xD7</button>
            </span>
          </div>
          <div class="person-select-list">
            <div class="person-select-item"
                 *ngFor="let p of personnes"
                 [class.selected]="isParticipant(p.id)"
                 (click)="toggleParticipant(p.id)">
              <div class="u-avatar-wrap">
                <img *ngIf="photoOf(p) && !failedPhotos.has(p.id)"
                     [src]="photoOf(p)" class="u-avatar-photo avatar avatar-sm"
                     [alt]="nomComplet(p)" (error)="onPhotoError(p.id)" />
                <div *ngIf="!photoOf(p) || failedPhotos.has(p.id)"
                     class="avatar avatar-sm"
                     [class.male]="p.sexe === 'M'" [class.female]="p.sexe === 'F'">
                  {{ initiales(p) }}
                </div>
              </div>
              <span class="person-select-name">{{ nomComplet(p) }}</span>
              <span class="material-icons-round check-icon" *ngIf="isParticipant(p.id)">check_circle</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section: D\xE9but -->
      <div class="form-section">
        <div class="section-title">D\xE9but de l'union</div>
        <div class="form-row">
          <div class="form-group">
            <label>Ann\xE9e</label>
            <input type="number" name="debut_annee" [(ngModel)]="form.debut_annee"
                   placeholder="2000" class="form-control" />
          </div>
          <div class="form-group">
            <label>Mois</label>
            <select name="debut_mois" [(ngModel)]="form.debut_mois" class="form-control">
              <option value="">\u2014</option>
              <option *ngFor="let m of mois" [value]="m.val">{{ m.label }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Jour</label>
            <input type="number" name="debut_jour" [(ngModel)]="form.debut_jour"
                   placeholder="1" min="1" max="31" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label>Lieu</label>
          <input type="text" name="lieuDebut" [(ngModel)]="form.lieuDebut"
                 placeholder="Ville, pays..." class="form-control" />
        </div>
      </div>

      <!-- Section: Fin -->
      <div class="form-section">
        <div class="section-title">Fin de l'union <span class="optional">(optionnel)</span></div>
        <div class="form-row">
          <div class="form-group">
            <label>Ann\xE9e</label>
            <input type="number" name="fin_annee" [(ngModel)]="form.fin_annee"
                   placeholder="2020" class="form-control" />
          </div>
          <div class="form-group">
            <label>Mois</label>
            <select name="fin_mois" [(ngModel)]="form.fin_mois" class="form-control">
              <option value="">\u2014</option>
              <option *ngFor="let m of mois" [value]="m.val">{{ m.label }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Jour</label>
            <input type="number" name="fin_jour" [(ngModel)]="form.fin_jour"
                   placeholder="1" min="1" max="31" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label>Lieu</label>
          <input type="text" name="lieuFin" [(ngModel)]="form.lieuFin"
                 placeholder="Ville, pays..." class="form-control" />
        </div>
      </div>

      <!-- Section: Notes -->
      <div class="form-section">
        <div class="section-title">Notes</div>
        <div class="form-group">
          <textarea name="notes" [(ngModel)]="form.notes"
                    rows="3" placeholder="Notes compl\xE9mentaires..."
                    class="form-control"></textarea>
        </div>
      </div>

    </form>
  </div>

  <div class="panel-footer">
    <button class="btn-ghost" (click)="closeAll()">Annuler</button>
    <button class="btn-primary" (click)="saveUnion()" [disabled]="saving">
      <span class="material-icons-round spin" *ngIf="saving">sync</span>
      {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
    </button>
  </div>
</div>

<!-- ===== PANNEAU ENFANTS ===== -->
<div class="slide-panel" [class.open]="showEnfantPanel">
  <div class="panel-header">
    <h3>Ajouter des enfants</h3>
    <button class="btn-icon" (click)="closeEnfantPanel()">
      <span class="material-icons-round">close</span>
    </button>
  </div>

  <div class="panel-body">
    <p class="panel-subtitle">S\xE9lectionnez des membres existants de la famille</p>

    <!-- Recherche -->
    <div class="search-bar" style="margin-bottom: 12px;">
      <span class="material-icons-round">search</span>
      <input type="text" name="searchEnfant" [(ngModel)]="searchEnfant"
             placeholder="Rechercher une personne..." />
    </div>

    <!-- Liste personnes disponibles -->
    <div class="person-select-list">
      <div class="person-select-item"
           *ngFor="let p of personnesDisponibles"
           [class.selected]="isEnfantSelected(p.id)"
           (click)="toggleEnfantSelection(p.id)">
        <div class="u-avatar-wrap">
          <img *ngIf="photoOf(p) && !failedPhotos.has(p.id)"
               [src]="photoOf(p)" class="u-avatar-photo avatar avatar-sm"
               [alt]="nomComplet(p)" (error)="onPhotoError(p.id)" />
          <div *ngIf="!photoOf(p) || failedPhotos.has(p.id)"
               class="avatar avatar-sm"
               [class.male]="p.sexe === 'M'" [class.female]="p.sexe === 'F'">
            {{ initiales(p) }}
          </div>
        </div>
        <span class="person-select-name">{{ nomComplet(p) }}</span>
        <span class="material-icons-round check-icon" *ngIf="isEnfantSelected(p.id)">check_circle</span>
      </div>
      <div class="empty-list-msg" *ngIf="personnesDisponibles.length === 0">
        Aucune personne disponible
      </div>
    </div>

    <!-- Enfants actuels -->
    <div class="current-children" *ngIf="enfantUnionTarget && enfantUnionTarget.filiations.length > 0">
      <div class="section-title" style="margin-top: 20px;">Enfants actuels</div>
      <div class="child-item" *ngFor="let f of enfantUnionTarget.filiations">
        <div class="u-avatar-wrap">
          <img *ngIf="photoOf(f.enfant) && !failedPhotos.has(f.enfant?.id ?? '')"
               [src]="photoOf(f.enfant)" class="u-avatar-photo avatar avatar-sm"
               [alt]="nomComplet(f.enfant)" (error)="f.enfant && onPhotoError(f.enfant.id)" />
          <div *ngIf="!photoOf(f.enfant) || failedPhotos.has(f.enfant?.id ?? '')"
               class="avatar avatar-sm"
               [class.male]="f.enfant.sexe === 'M'" [class.female]="f.enfant.sexe === 'F'">
            {{ initiales(f.enfant) }}
          </div>
        </div>
        <span class="child-name">{{ nomComplet(f.enfant) }}</span>
        <button class="btn-icon btn-icon-danger" title="Retirer"
                (click)="retirerEnfant(enfantUnionTarget!.id, f.enfantId)">
          <span class="material-icons-round">remove_circle_outline</span>
        </button>
      </div>
    </div>
  </div>

  <div class="panel-footer">
    <button class="btn-ghost" (click)="closeEnfantPanel()">Annuler</button>
    <button class="btn-primary" (click)="ajouterEnfants()"
            [disabled]="addingEnfant || enfantsSelectionnes.length === 0">
      <span class="material-icons-round spin" *ngIf="addingEnfant">sync</span>
      Ajouter ({{ enfantsSelectionnes.length }} s\xE9lectionn\xE9{{ enfantsSelectionnes.length > 1 ? 's' : '' }})
    </button>
  </div>
</div>

<!-- ===== DIALOG SUPPRESSION ===== -->
<div class="confirm-dialog" *ngIf="showDeleteConfirm">
  <div class="confirm-box">
    <div class="confirm-icon">
      <span class="material-icons-round">delete_forever</span>
    </div>
    <h4>Supprimer cette union ?</h4>
    <p>Cette action est irr\xE9versible. Tous les liens de parent\xE9 associ\xE9s seront supprim\xE9s.</p>
    <div class="confirm-actions">
      <button class="btn-ghost" (click)="closeAll()">Annuler</button>
      <button class="btn-danger" (click)="deleteUnion()" [disabled]="deleting">
        <span class="material-icons-round spin" *ngIf="deleting">sync</span>
        {{ deleting ? 'Suppression...' : 'Supprimer' }}
      </button>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/unions/unions.component.scss */\n.unions-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.u-avatar-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.u-avatar-photo {\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n.unions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n}\n.toolbar-right {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.union-card {\n  position: relative;\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);\n  overflow: hidden;\n  transition: var(--transition);\n}\n.union-card:hover {\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);\n  transform: translateY(-2px);\n}\n.union-type-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.union-type-banner .material-icons-round {\n  font-size: 16px !important;\n}\n.union-type-banner.banner-pink {\n  background: #fdf2f8;\n  color: #db2777;\n}\n.union-type-banner.banner-accent {\n  background: #eef2ff;\n  color: var(--accent);\n}\n.union-type-banner.banner-primary {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.union-type-banner.banner-gold {\n  background: #fffbeb;\n  color: #b45309;\n}\n.union-type-banner.banner-green {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.union-type-banner.banner-purple {\n  background: #faf5ff;\n  color: #7c3aed;\n}\n.couple-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  gap: 8px;\n}\n.person-chip {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.person-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.person-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.link-icon {\n  font-size: 18px !important;\n  color: #f43f5e;\n  flex-shrink: 0;\n}\n.avatar.accent {\n  background: var(--accent);\n}\n.union-details {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 16px;\n  padding: 12px 16px 16px;\n  border-top: 1px solid var(--border);\n}\n.detail-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.detail-item .material-icons-round {\n  font-size: 14px !important;\n  color: var(--text-muted);\n}\n.card-actions {\n  display: flex;\n  gap: 4px;\n  justify-content: flex-end;\n  padding: 8px 12px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-muted);\n}\n.btn-icon-danger {\n  color: var(--error) !important;\n}\n.btn-icon-danger:hover {\n  background: #fef2f2 !important;\n}\n.panel-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.slide-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 480px;\n  height: 100vh;\n  background: var(--white);\n  box-shadow: var(--shadow-xl);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.slide-panel.open {\n  transform: translateX(0);\n}\n.panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.panel-header h3 {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.panel-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0 0 16px;\n}\n.panel-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.panel-footer {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n  background: var(--white);\n}\n.form-section {\n  margin-bottom: 24px;\n}\n.section-title {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border);\n}\n.optional {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  font-size: 14px;\n  color: var(--text-primary);\n  background: var(--white);\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px var(--primary-bg);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 2fr 2fr 1fr;\n  gap: 12px;\n}\n.person-select-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  padding: 4px;\n}\n.person-select-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.person-select-item:hover {\n  background: var(--bg-muted);\n}\n.person-select-item.selected {\n  background: var(--primary-bg, #eff6ff);\n  border: 1px solid var(--primary-border, #bfdbfe);\n}\n.person-select-name {\n  flex: 1;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.check-icon {\n  font-size: 18px !important;\n  color: var(--primary);\n}\n.participant-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.participant-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  background: var(--primary-bg, #eff6ff);\n  border: 1px solid var(--primary-border, #bfdbfe);\n  border-radius: 20px;\n  font-size: 13px;\n  color: var(--primary);\n  font-weight: 500;\n}\n.chip-remove {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  color: var(--primary);\n  padding: 0;\n  opacity: 0.7;\n}\n.chip-remove:hover {\n  opacity: 1;\n}\n.warning-msg {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #fffbeb;\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #92400e;\n  margin-bottom: 8px;\n}\n.warning-msg .material-icons-round {\n  font-size: 16px !important;\n}\n.current-children {\n  margin-top: 20px;\n}\n.child-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.child-item:last-child {\n  border-bottom: none;\n}\n.child-name {\n  flex: 1;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.empty-list-msg {\n  padding: 20px;\n  text-align: center;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.confirm-dialog {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n}\n.confirm-box {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  width: 400px;\n  max-width: 90vw;\n  box-shadow: var(--shadow-xl);\n  text-align: center;\n}\n.confirm-box h4 {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 12px 0 8px;\n}\n.confirm-box p {\n  font-size: 14px;\n  color: var(--text-muted);\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n.confirm-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #fef2f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 4px;\n}\n.confirm-icon .material-icons-round {\n  font-size: 28px !important;\n  color: var(--error);\n}\n.confirm-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.union-type-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n}\n.union-type-badge .material-icons-round {\n  font-size: 13px !important;\n}\n.union-type-badge.banner-pink {\n  background: #fdf2f8;\n  color: #db2777;\n}\n.union-type-badge.banner-accent {\n  background: #eef2ff;\n  color: var(--accent);\n}\n.union-type-badge.banner-primary {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.union-type-badge.banner-gold {\n  background: #fffbeb;\n  color: #b45309;\n}\n.union-type-badge.banner-green {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.union-type-badge.banner-purple {\n  background: #faf5ff;\n  color: #7c3aed;\n}\n.ul-table {\n  background: var(--white);\n  border-radius: var(--radius-lg);\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);\n  overflow: hidden;\n}\n.ul-thead {\n  display: grid;\n  grid-template-columns: 2fr 1fr 100px 80px 120px;\n  padding: 10px 16px;\n  background: var(--bg-muted, #f8fafc);\n  border-bottom: 1px solid var(--border);\n}\n.ul-row {\n  display: grid;\n  grid-template-columns: 2fr 1fr 100px 80px 120px;\n  padding: 12px 16px;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  transition: background 0.12s;\n}\n.ul-row:last-child {\n  border-bottom: none;\n}\n.ul-row:hover {\n  background: var(--bg-muted, #f8fafc);\n}\n.ul-cell {\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.ul-cell-couple {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.ul-avatars {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.ul-heart {\n  font-size: 14px !important;\n  color: #f43f5e;\n}\n.ul-names {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.ul-name-primary {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ul-name-secondary {\n  font-size: 12px;\n  color: var(--text-muted);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ul-cell-date {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.ul-enfant-count {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.ul-enfant-count .material-icons-round {\n  font-size: 15px !important;\n  color: var(--text-muted);\n}\n.ul-cell-actions {\n  display: flex;\n  gap: 2px;\n  justify-content: flex-end;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .page-header .btn-primary {\n    width: 100%;\n    justify-content: center;\n  }\n  .unions-grid {\n    grid-template-columns: 1fr;\n  }\n  .ul-thead,\n  .ul-row {\n    grid-template-columns: 2fr 60px 80px;\n  }\n  .ul-th-type,\n  .ul-th-date,\n  .ul-cell-type,\n  .ul-cell-date {\n    display: none;\n  }\n  .slide-panel {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 92vh;\n    transform: translateY(100%);\n  }\n  .slide-panel.open {\n    transform: translateY(0);\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .panel-footer {\n    flex-direction: column-reverse;\n  }\n  .panel-footer button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .ul-thead,\n  .ul-row {\n    grid-template-columns: 1fr 80px;\n  }\n  .ul-th-type,\n  .ul-th-date,\n  .ul-th-enfants,\n  .ul-cell-type,\n  .ul-cell-date,\n  .ul-cell-enfants {\n    display: none;\n  }\n}\n/*# sourceMappingURL=unions.component.css.map */\n'] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnionsComponent, { className: "UnionsComponent", filePath: "src/app/pages/unions/unions.component.ts", lineNumber: 51 });
})();

// src/app/pages/admin/admin.component.ts
function AdminComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 7);
    \u0275\u0275text(2, "key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 48);
    \u0275\u0275listener("click", function AdminComponent_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyFamilleCode());
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.famille.code);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.viewonlyCopied === "familleCode" ? "Copi\xE9 !" : "Copier le code");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.viewonlyCopied === "familleCode" ? "check" : "content_copy");
  }
}
function AdminComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 7);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.erreur, " ");
  }
}
function AdminComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 7);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.saveSuccess, " ");
  }
}
function AdminComponent_ng_container_41_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.searchQuery = "");
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_41_button_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.countRole(f_r6.key));
  }
}
function AdminComponent_ng_container_41_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_button_20_Template_button_click_0_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.roleFilter = f_r6.key);
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, AdminComponent_ng_container_41_button_20_span_4_Template, 2, 1, "span", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.roleFilter === f_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r6.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r6.key !== "tous");
  }
}
function AdminComponent_ng_container_41_div_22_div_10_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275property("value", r_r9.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.label);
  }
}
function AdminComponent_ng_container_41_div_22_div_10_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_ng_container_41_div_22_div_10_ng_container_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_ng_container_41_div_22_div_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 97);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_div_22_div_10_ng_container_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const m_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRoleChange(m_r8.user == null ? null : m_r8.user.id));
    });
    \u0275\u0275template(2, AdminComponent_ng_container_41_div_22_div_10_ng_container_3_span_2_Template, 2, 0, "span", 44)(3, AdminComponent_ng_container_41_div_22_div_10_ng_container_3_span_3_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 98);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_div_22_div_10_ng_container_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const m_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelRoleChange(m_r8.user == null ? null : m_r8.user.id));
    });
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const m_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.roleChanging === (m_r8.user == null ? null : m_r8.user.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.roleChanging === (m_r8.user == null ? null : m_r8.user.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.roleChanging !== (m_r8.user == null ? null : m_r8.user.id));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.roleChanging === (m_r8.user == null ? null : m_r8.user.id));
  }
}
function AdminComponent_ng_container_41_div_22_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_41_div_22_div_10_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const m_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editingRole[m_r8.user == null ? null : m_r8.user.id], $event) || (ctx_r1.editingRole[m_r8.user == null ? null : m_r8.user.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(2, AdminComponent_ng_container_41_div_22_div_10_option_2_Template, 2, 2, "option", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminComponent_ng_container_41_div_22_div_10_ng_container_3_Template, 7, 4, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("role-" + ctx_r1.editingRole[m_r8.user == null ? null : m_r8.user.id]);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editingRole[m_r8.user == null ? null : m_r8.user.id]);
    \u0275\u0275property("disabled", ctx_r1.roleChanging === (m_r8.user == null ? null : m_r8.user.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasRoleChanged(m_r8.user == null ? null : m_r8.user.id));
  }
}
function AdminComponent_ng_container_41_div_22_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "span", 7);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Administrateur ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_ng_container_41_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 89)(5, "span", 90);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 91);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 92);
    \u0275\u0275template(10, AdminComponent_ng_container_41_div_22_div_10_Template, 4, 6, "div", 93)(11, AdminComponent_ng_container_41_div_22_ng_template_11_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const adminBadge_r11 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("adm-avatar--" + ctx_r1.getRoleColor(m_r8.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.userInitiales(m_r8.user), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", m_r8.user == null ? null : m_r8.user.prenom, " ", m_r8.user == null ? null : m_r8.user.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((m_r8.user == null ? null : m_r8.user.email) || (m_r8.user == null ? null : m_r8.user.telephone) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", m_r8.role !== "admin")("ngIfElse", adminBadge_r11);
  }
}
function AdminComponent_ng_container_41_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 7);
    \u0275\u0275text(2, "manage_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun membre trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_ng_container_41_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 55)(2, "div", 56)(3, "span", 7);
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Acc\xE8s lecture seule ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 102);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_div_25_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showViewonlyPassword = !ctx_r1.showViewonlyPassword);
    });
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 103);
    \u0275\u0275text(10, " Partagez ces identifiants pour un acc\xE8s en consultation uniquement, sans compte personnel. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 104);
    \u0275\u0275element(12, "img", 105);
    \u0275\u0275elementStart(13, "div", 106)(14, "div", 107)(15, "span", 108);
    \u0275\u0275text(16, "Code famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 109);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 110);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_div_25_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyViewonly("code"));
    });
    \u0275\u0275elementStart(20, "span", 7);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 107)(23, "span", 108);
    \u0275\u0275text(24, "Identifiant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 109);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 110);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_div_25_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyViewonly("username"));
    });
    \u0275\u0275elementStart(28, "span", 7);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 107)(31, "span", 108);
    \u0275\u0275text(32, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 109);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 110);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_div_25_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyViewonly("password"));
    });
    \u0275\u0275elementStart(36, "span", 7);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "div", 111)(39, "button", 112);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_div_25_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareViewonlyWhatsApp());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 113);
    \u0275\u0275element(41, "path", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "button", 115);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_div_25_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareViewonly());
    });
    \u0275\u0275elementStart(44, "span", 7);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", ctx_r1.showViewonlyPassword ? "Masquer" : "Afficher");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showViewonlyPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.viewonlyQrUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.viewonlyCreds.familleCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.viewonlyCopied === "code" ? "check" : "content_copy");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.viewonlyCreds.viewonlyUsername);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.viewonlyCopied === "username" ? "check" : "content_copy");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.showViewonlyPassword ? ctx_r1.viewonlyCreds.viewonlyPassword : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.viewonlyCopied === "password" ? "check" : "content_copy");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.viewonlyCopied === "share" ? "check" : "share");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.viewonlyCopied === "share" ? "Copi\xE9 !" : "Partager", " ");
  }
}
function AdminComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53)(2, "div", 54)(3, "div", 55)(4, "div", 56)(5, "span", 7);
    \u0275\u0275text(6, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Comptes membres ");
    \u0275\u0275elementStart(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 58);
    \u0275\u0275listener("click", function AdminComponent_ng_container_41_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateForm = true);
    });
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Nouveau ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 59)(15, "span", 60);
    \u0275\u0275text(16, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_ng_container_41_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AdminComponent_ng_container_41_button_18_Template, 3, 0, "button", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 63);
    \u0275\u0275template(20, AdminComponent_ng_container_41_button_20_Template, 5, 5, "button", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 65);
    \u0275\u0275template(22, AdminComponent_ng_container_41_div_22_Template, 13, 8, "div", 66)(23, AdminComponent_ng_container_41_div_23_Template, 5, 0, "div", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 68);
    \u0275\u0275template(25, AdminComponent_ng_container_41_div_25_Template, 47, 11, "div", 69);
    \u0275\u0275elementStart(26, "div", 70)(27, "div", 55)(28, "div", 56)(29, "span", 7);
    \u0275\u0275text(30, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Informations famille ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 71)(33, "div", 72)(34, "span", 73);
    \u0275\u0275text(35, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 74);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 72)(39, "span", 73);
    \u0275\u0275text(40, "Code d'acc\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 75);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 72)(44, "span", 73);
    \u0275\u0275text(45, "Total membres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 74);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 72)(49, "span", 73);
    \u0275\u0275text(50, "Profils arbre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 74);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(53, "div", 76)(54, "div", 55)(55, "div", 77)(56, "span", 7);
    \u0275\u0275text(57, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Zone de danger ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 78)(60, "div")(61, "span", 79);
    \u0275\u0275text(62, "R\xE9initialiser l'acc\xE8s lecture seule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 80);
    \u0275\u0275text(64, "G\xE9n\xE8re de nouveaux identifiants \u2014 les anciens ne fonctionneront plus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "button", 81)(66, "span", 7);
    \u0275\u0275text(67, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "R\xE9initialiser ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.filteredMembres.length, "/", ctx_r1.membres.length);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.roleFilters);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredMembres)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredMembres.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.viewonlyCreds);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r1.famille == null ? null : ctx_r1.famille.nom) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.famille == null ? null : ctx_r1.famille.code) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.membres.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.personnes.length);
  }
}
function AdminComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275listener("click", function AdminComponent_div_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateForm = false);
    });
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_option_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    \u0275\u0275property("value", r_r14.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r14.label);
  }
}
function AdminComponent_option_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    \u0275\u0275property("value", p_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r15.prenoms, " ", p_r15.nomUsage ?? p_r15.nomNaissance, " ");
  }
}
function AdminComponent_span_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
  }
}
var ROLE_LABELS = {
  admin: "Administrateur",
  gestionnaire: "Gestionnaire",
  membre: "Membre",
  viewonly: "Lecture seule"
};
var ROLE_ORDER = ["admin", "gestionnaire", "membre", "viewonly"];
var AdminComponent = class _AdminComponent {
  api;
  famille = null;
  membres = [];
  personnes = [];
  loading = true;
  erreur = null;
  saveSuccess = "";
  viewonlyCreds = null;
  showViewonlyPassword = false;
  viewonlyCopied = null;
  showCreateForm = false;
  saving = false;
  roleChanging = null;
  // Recherche et filtre membres
  searchQuery = "";
  roleFilter = "tous";
  roleFilters = [
    { key: "tous", label: "Tous", icon: "people" },
    { key: "admin", label: "Admins", icon: "shield" },
    { key: "gestionnaire", label: "Gestionnaires", icon: "manage_accounts" },
    { key: "membre", label: "Membres", icon: "person" },
    { key: "viewonly", label: "Lecture seule", icon: "visibility" }
  ];
  // Sélecteur de rôle par membre (userId → role en cours d'édition)
  editingRole = {};
  createForm = {
    telephone: "",
    email: "",
    password: "",
    nom: "",
    prenom: "",
    role: "membre",
    personneId: ""
  };
  roles = [
    { val: "admin", label: "Administrateur" },
    { val: "gestionnaire", label: "Gestionnaire" },
    { val: "membre", label: "Membre" },
    { val: "viewonly", label: "Lecture seule" }
  ];
  ROLE_ORDER = ROLE_ORDER;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this.loading = true;
    forkJoin({
      famille: this.api.getFamilleDetails(),
      personnes: this.api.getPersonnes(),
      creds: this.api.getViewonlyCredentials()
    }).subscribe({
      next: ({ famille, personnes, creds }) => {
        this.famille = famille.famille ?? famille;
        this.membres = famille.membres ?? [];
        this.personnes = personnes;
        this.viewonlyCreds = creds;
        this.initEditingRoles();
        this.loading = false;
      },
      error: () => {
        this.erreur = "Impossible de charger les donn\xE9es.";
        this.loading = false;
      }
    });
  }
  initEditingRoles() {
    this.editingRole = {};
    for (const m of this.membres) {
      if (m.user?.id)
        this.editingRole[m.user.id] = m.role;
    }
  }
  // ── Membres filtrés ─────────────────────────────────
  get filteredMembres() {
    const q = this.searchQuery.toLowerCase().trim();
    return this.membres.filter((m) => {
      const name = `${m.user?.prenom ?? ""} ${m.user?.nom ?? ""}`.toLowerCase();
      const contact = (m.user?.email ?? m.user?.telephone ?? "").toLowerCase();
      const matchSearch = !q || name.includes(q) || contact.includes(q);
      const matchRole = this.roleFilter === "tous" || m.role === this.roleFilter;
      return matchSearch && matchRole;
    });
  }
  // ── Changement de rôle ──────────────────────────────
  hasRoleChanged(userId) {
    const m = this.membres.find((x) => x.user?.id === userId);
    return !!m && this.editingRole[userId] !== m.role;
  }
  confirmRoleChange(userId) {
    if (this.roleChanging)
      return;
    const newRole = this.editingRole[userId];
    this.roleChanging = userId;
    this.api.changeMemberRole(userId, newRole).subscribe({
      next: () => {
        const m = this.membres.find((x) => x.user?.id === userId);
        if (m)
          m.role = newRole;
        this.roleChanging = null;
        this.saveSuccess = "R\xF4le modifi\xE9 avec succ\xE8s";
        setTimeout(() => this.saveSuccess = "", 3e3);
      },
      error: () => {
        this.cancelRoleChange(userId);
        this.roleChanging = null;
      }
    });
  }
  cancelRoleChange(userId) {
    const m = this.membres.find((x) => x.user?.id === userId);
    if (m)
      this.editingRole[userId] = m.role;
  }
  // ── Création membre ──────────────────────────────────
  createMember() {
    if (this.saving)
      return;
    this.saving = true;
    const data = {
      nom: this.createForm.nom,
      prenom: this.createForm.prenom,
      password: this.createForm.password,
      role: this.createForm.role
    };
    if (this.createForm.email)
      data.email = this.createForm.email;
    if (this.createForm.telephone)
      data.telephone = this.createForm.telephone;
    if (this.createForm.personneId)
      data.personneId = this.createForm.personneId;
    this.api.createMemberAccount(data).subscribe({
      next: () => {
        this.saving = false;
        this.showCreateForm = false;
        this.resetCreateForm();
        this.refreshMembres();
        this.saveSuccess = "Compte cr\xE9\xE9 avec succ\xE8s";
        setTimeout(() => this.saveSuccess = "", 3e3);
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  refreshMembres() {
    this.api.getFamilleDetails().subscribe({
      next: (data) => {
        this.famille = data.famille ?? data;
        this.membres = data.membres ?? [];
        this.initEditingRoles();
      }
    });
  }
  resetCreateForm() {
    this.createForm = {
      telephone: "",
      email: "",
      password: "",
      nom: "",
      prenom: "",
      role: "membre",
      personneId: ""
    };
  }
  // ── Viewonly ─────────────────────────────────────────
  get viewonlyQrUrl() {
    if (!this.viewonlyCreds?.familleCode)
      return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(this.viewonlyCreds.familleCode)}&bgcolor=eff6ff&color=2563eb&format=png&margin=8`;
  }
  copyViewonly(field) {
    const c = this.viewonlyCreds;
    if (!c)
      return;
    const val = field === "code" ? c.familleCode : field === "username" ? c.viewonlyUsername : c.viewonlyPassword;
    navigator.clipboard.writeText(val).then(() => {
      this.viewonlyCopied = field;
      setTimeout(() => {
        this.viewonlyCopied = null;
      }, 1500);
    });
  }
  shareViewonly() {
    if (!this.viewonlyCreds)
      return;
    const { familleCode, viewonlyUsername, viewonlyPassword } = this.viewonlyCreds;
    const famNom = this.famille?.nom ?? "Famille";
    const text = `\u{1F3E0} Acc\xE8s consultation \u2014 ${famNom}

Connectez-vous sur Mam Buudu :

\u2022 Code famille : ${familleCode}
\u2022 Identifiant  : ${viewonlyUsername}
\u2022 Mot de passe : ${viewonlyPassword}

\u26A0\uFE0F Acc\xE8s lecture seule uniquement.`;
    if (navigator.share) {
      navigator.share({ title: "Acc\xE8s consultation Mam Buudu", text });
    } else {
      navigator.clipboard.writeText(text);
      this.viewonlyCopied = "share";
      setTimeout(() => {
        this.viewonlyCopied = null;
      }, 2e3);
    }
  }
  shareViewonlyWhatsApp() {
    if (!this.viewonlyCreds)
      return;
    const { familleCode, viewonlyUsername, viewonlyPassword } = this.viewonlyCreds;
    const msg = `\u{1F3E0} Acc\xE8s consultation famille *${this.famille?.nom ?? ""}* sur Mam Buudu

\u2022 Code : *${familleCode}*
\u2022 Login : *${viewonlyUsername}*
\u2022 Mot de passe : *${viewonlyPassword}*

_Acc\xE8s lecture seule uniquement_`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  }
  copyFamilleCode() {
    if (!this.famille?.code)
      return;
    navigator.clipboard.writeText(this.famille.code).then(() => {
      this.viewonlyCopied = "familleCode";
      setTimeout(() => {
        this.viewonlyCopied = null;
      }, 1500);
    });
  }
  // ── Helpers ──────────────────────────────────────────
  countRole(role) {
    return this.membres.filter((m) => m.role === role).length;
  }
  getRoleLabel(role) {
    return ROLE_LABELS[role] ?? role;
  }
  userInitiales(user) {
    const p = (user?.prenom ?? "").charAt(0);
    const n = (user?.nom ?? "").charAt(0);
    return `${p}${n}`.toUpperCase() || "MB";
  }
  getRoleColor(role) {
    return { admin: "red", gestionnaire: "blue", membre: "green", viewonly: "gray" }[role] ?? "gray";
  }
  trackById(_, item) {
    return item.user?.id;
  }
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: false, decls: 111, vars: 26, consts: [["adminBadge", ""], [1, "admin-page"], [1, "adm-hero"], [1, "adm-hero-bg"], [1, "adm-hero-content"], [1, "adm-hero-left"], [1, "adm-hero-icon"], [1, "material-icons-round"], [1, "adm-hero-eyebrow"], [1, "adm-hero-title"], ["class", "adm-hero-code", 4, "ngIf"], [1, "adm-hero-stats"], [1, "adm-hstat"], [1, "adm-hstat-val"], [1, "adm-hstat-lbl"], [1, "adm-hstat-sep"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "adm-toast", 4, "ngIf"], [4, "ngIf"], ["class", "panel-overlay", 3, "click", 4, "ngIf"], [1, "slide-panel"], [1, "panel-header"], [1, "panel-header-title"], [1, "btn-icon", 3, "click"], [1, "panel-body"], [1, "form-section"], [1, "section-title"], [1, "form-row-2"], [1, "form-group"], [1, "required"], ["type", "text", "name", "prenom", "required", "", "placeholder", "Pr\xE9nom", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "nom", "required", "", "placeholder", "Nom de famille", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "exemple@email.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "telephone", "placeholder", "+221 77 000 00 00", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "placeholder", "Mot de passe", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "role", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "optional"], ["name", "personneId", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "panel-footer"], [1, "btn-ghost", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], ["class", "material-icons-round spin", 4, "ngIf"], ["class", "material-icons-round", 4, "ngIf"], [1, "adm-hero-code"], [1, "adm-code-val"], [1, "adm-copy-code", 3, "click", "title"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "error-state"], [1, "adm-toast"], [1, "adm-main-grid"], [1, "adm-card", "adm-card-members"], [1, "adm-card-head"], [1, "adm-card-title"], [1, "adm-count-badge"], [1, "btn-primary", "btn-sm", 3, "click"], [1, "adm-search-bar"], [1, "material-icons-round", "adm-search-icon"], ["type", "text", "placeholder", "Rechercher un membre\u2026", 1, "adm-search-input", 3, "ngModelChange", "ngModel"], ["class", "adm-search-clear", 3, "click", 4, "ngIf"], [1, "adm-role-filters"], ["class", "adm-filter-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "adm-members-list"], ["class", "adm-member-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "adm-empty", 4, "ngIf"], [1, "adm-right-col"], ["class", "adm-card adm-card-viewonly", 4, "ngIf"], [1, "adm-card", "adm-card-info"], [1, "adm-info-rows"], [1, "adm-info-row"], [1, "adm-info-label"], [1, "adm-info-val"], [1, "adm-info-val", "adm-info-code"], [1, "adm-card", "adm-danger-card"], [1, "adm-card-title", "adm-danger-title"], [1, "adm-danger-row"], [1, "adm-danger-label"], [1, "adm-danger-sub"], ["disabled", "", "title", "Bient\xF4t disponible", 1, "adm-danger-btn"], [1, "adm-search-clear", 3, "click"], [1, "adm-filter-btn", 3, "click"], ["class", "adm-filter-count", 4, "ngIf"], [1, "adm-filter-count"], [1, "adm-member-row"], [1, "adm-member-left"], [1, "adm-avatar"], [1, "adm-member-info"], [1, "adm-member-name"], [1, "adm-member-contact"], [1, "adm-role-cell"], ["class", "adm-role-select-wrap", 4, "ngIf", "ngIfElse"], [1, "adm-role-select-wrap"], [1, "adm-role-select", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["title", "Confirmer le changement", 1, "adm-confirm-btn", "adm-confirm-yes", 3, "click", "disabled"], ["title", "Annuler", 1, "adm-confirm-btn", "adm-confirm-no", 3, "click", "disabled"], [1, "adm-admin-badge"], [1, "adm-empty"], [1, "adm-card", "adm-card-viewonly"], [1, "btn-icon", 3, "click", "title"], [1, "adm-viewonly-desc"], [1, "adm-viewonly-body"], ["alt", "QR code", 1, "adm-viewonly-qr", 3, "src"], [1, "adm-cred-rows"], [1, "adm-cred-row"], [1, "adm-cred-label"], [1, "adm-cred-val"], [1, "adm-cred-copy", 3, "click"], [1, "adm-share-btns"], [1, "adm-share-wa", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor", 2, "width", "16px", "height", "16px", "flex-shrink", "0"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"], [1, "adm-share-copy", 3, "click"], [1, "panel-overlay", 3, "click"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "div", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "span", 7);
      \u0275\u0275text(7, "admin_panel_settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div")(9, "p", 8);
      \u0275\u0275text(10, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h1", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, AdminComponent_div_13_Template, 8, 3, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "span", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 14);
      \u0275\u0275text(19, "Membres");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "div", 15);
      \u0275\u0275elementStart(21, "div", 12)(22, "span", 13);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 14);
      \u0275\u0275text(25, "Admins");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "div", 15);
      \u0275\u0275elementStart(27, "div", 12)(28, "span", 13);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 14);
      \u0275\u0275text(31, "Gestionnaires");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "div", 15);
      \u0275\u0275elementStart(33, "div", 12)(34, "span", 13);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 14);
      \u0275\u0275text(37, "Lecture seule");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(38, AdminComponent_div_38_Template, 4, 0, "div", 16)(39, AdminComponent_div_39_Template, 4, 1, "div", 17)(40, AdminComponent_div_40_Template, 4, 1, "div", 18)(41, AdminComponent_ng_container_41_Template, 69, 13, "ng-container", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, AdminComponent_div_42_Template, 1, 0, "div", 20);
      \u0275\u0275elementStart(43, "div", 21)(44, "div", 22)(45, "div", 23)(46, "span", 7);
      \u0275\u0275text(47, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "h3");
      \u0275\u0275text(49, "Nouveau compte membre");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "button", 24);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_50_listener() {
        return ctx.showCreateForm = false;
      });
      \u0275\u0275elementStart(51, "span", 7);
      \u0275\u0275text(52, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 25)(54, "div", 26)(55, "div", 27);
      \u0275\u0275text(56, "Identit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 28)(58, "div", 29)(59, "label");
      \u0275\u0275text(60, "Pr\xE9nom ");
      \u0275\u0275elementStart(61, "span", 30);
      \u0275\u0275text(62, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.createForm.prenom, $event) || (ctx.createForm.prenom = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 29)(65, "label");
      \u0275\u0275text(66, "Nom ");
      \u0275\u0275elementStart(67, "span", 30);
      \u0275\u0275text(68, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_input_ngModelChange_69_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.createForm.nom, $event) || (ctx.createForm.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "div", 26)(71, "div", 27);
      \u0275\u0275text(72, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 29)(74, "label");
      \u0275\u0275text(75, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.createForm.email, $event) || (ctx.createForm.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 29)(78, "label");
      \u0275\u0275text(79, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_input_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.createForm.telephone, $event) || (ctx.createForm.telephone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 29)(82, "label");
      \u0275\u0275text(83, "Mot de passe ");
      \u0275\u0275elementStart(84, "span", 30);
      \u0275\u0275text(85, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.createForm.password, $event) || (ctx.createForm.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 26)(88, "div", 27);
      \u0275\u0275text(89, "R\xF4le et association");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 29)(91, "label");
      \u0275\u0275text(92, "R\xF4le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "select", 36);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_select_ngModelChange_93_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.createForm.role, $event) || (ctx.createForm.role = $event);
        return $event;
      });
      \u0275\u0275template(94, AdminComponent_option_94_Template, 2, 2, "option", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 29)(96, "label");
      \u0275\u0275text(97, "Associer \xE0 une personne ");
      \u0275\u0275elementStart(98, "span", 38);
      \u0275\u0275text(99, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "select", 39);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_select_ngModelChange_100_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.createForm.personneId, $event) || (ctx.createForm.personneId = $event);
        return $event;
      });
      \u0275\u0275elementStart(101, "option", 40);
      \u0275\u0275text(102, "\u2014 Aucune association \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275template(103, AdminComponent_option_103_Template, 2, 3, "option", 37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(104, "div", 41)(105, "button", 42);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_105_listener() {
        return ctx.showCreateForm = false;
      });
      \u0275\u0275text(106, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "button", 43);
      \u0275\u0275listener("click", function AdminComponent_Template_button_click_107_listener() {
        return ctx.createMember();
      });
      \u0275\u0275template(108, AdminComponent_span_108_Template, 2, 0, "span", 44)(109, AdminComponent_span_109_Template, 2, 0, "span", 45);
      \u0275\u0275text(110);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate((ctx.famille == null ? null : ctx.famille.nom) || "Famille");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.famille == null ? null : ctx.famille.code);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.membres.length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countRole("admin"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countRole("gestionnaire"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.countRole("viewonly"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.erreur && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saveSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCreateForm);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showCreateForm);
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.createForm.prenom);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.createForm.nom);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.createForm.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.createForm.telephone);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.createForm.password);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.createForm.role);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.createForm.personneId);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.personnes);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? "Cr\xE9ation\u2026" : "Cr\xE9er le compte", " ");
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.admin-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.adm-hero[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e3a8a 55%,\n      var(--primary, #2563EB) 100%);\n  padding: 32px 36px;\n  color: #fff;\n}\n.adm-hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n  pointer-events: none;\n}\n.adm-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.adm-hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.adm-hero-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.adm-hero-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n  color: #fff;\n}\n.adm-hero-eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.55);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin: 0 0 4px;\n}\n.adm-hero-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0 0 8px;\n  letter-spacing: -0.3px;\n}\n.adm-hero-code[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  padding: 5px 12px;\n}\n.adm-hero-code[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: rgba(255, 255, 255, 0.7);\n}\n.adm-code-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  font-family: monospace;\n  color: #fff;\n  letter-spacing: 2px;\n}\n.adm-copy-code[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n}\n.adm-copy-code[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.adm-copy-code[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.adm-hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 16px 24px;\n  flex-shrink: 0;\n}\n.adm-hstat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.adm-hstat-val[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1;\n}\n.adm-hstat-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.55);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.adm-hstat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.2);\n}\n.adm-toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  border-radius: 12px;\n  background: #ECFDF5;\n  color: #065F46;\n  border: 1px solid #A7F3D0;\n  font-size: 13px;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_toast-in 0.2s ease;\n}\n.adm-toast[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n@keyframes _ngcontent-%COMP%_toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.adm-main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  align-items: start;\n}\n.adm-right-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.adm-card[_ngcontent-%COMP%] {\n  background: var(--white, #fff);\n  border: 1px solid var(--border, #E5E7EB);\n  border-radius: 18px;\n  overflow: hidden;\n}\n.adm-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n  gap: 12px;\n}\n.adm-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary, #1F2937);\n}\n.adm-card-title[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n  color: var(--primary, #2563EB);\n}\n.adm-count-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--primary-bg, #EFF6FF);\n  color: var(--primary, #2563EB);\n  border: 1px solid var(--primary-border, #BFDBFE);\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.adm-search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n  background: var(--bg-muted, #F9FAFB);\n}\n.adm-search-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: var(--text-muted, #9CA3AF);\n}\n.adm-search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: var(--text-primary, #1F2937);\n  font-family: inherit;\n}\n.adm-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.adm-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted, #9CA3AF);\n}\n.adm-search-clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: none;\n  background: var(--border, #E5E7EB);\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.adm-search-clear[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.adm-search-clear[_ngcontent-%COMP%]:hover {\n  background: var(--text-muted);\n  color: #fff;\n}\n.adm-role-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.adm-role-filters[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.adm-filter-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  border: 1.5px solid var(--border, #E5E7EB);\n  background: var(--white, #fff);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: inherit;\n  transition: all 0.15s;\n}\n.adm-filter-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.adm-filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-bg, #EFF6FF);\n  border-color: var(--primary, #2563EB);\n  color: var(--primary, #2563EB);\n}\n.adm-filter-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  border-color: var(--primary, #2563EB);\n}\n.adm-filter-count[_ngcontent-%COMP%] {\n  background: var(--border, #E5E7EB);\n  color: var(--text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 0 5px;\n  border-radius: 10px;\n  min-width: 16px;\n  text-align: center;\n}\n.active[_ngcontent-%COMP%]   .adm-filter-count[_ngcontent-%COMP%] {\n  background: var(--primary, #2563EB);\n  color: #fff;\n}\n.adm-members-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.adm-member-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 13px 22px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n  transition: background 0.12s;\n}\n.adm-member-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.adm-member-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-muted, #F9FAFB);\n}\n.adm-member-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.adm-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.adm-avatar--red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F87171,\n      #DC2626);\n}\n.adm-avatar--blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #60A5FA,\n      #2563EB);\n}\n.adm-avatar--green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34D399,\n      #059669);\n}\n.adm-avatar--gray[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9CA3AF,\n      #6B7280);\n}\n.adm-member-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.adm-member-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary, #1F2937);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adm-member-contact[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted, #9CA3AF);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adm-role-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.adm-role-select-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.adm-role-select[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-radius: 8px;\n  border: 1.5px solid var(--border);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n  background: var(--white);\n  cursor: pointer;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.adm-role-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.adm-role-select.role-admin[_ngcontent-%COMP%] {\n  border-color: #FECACA;\n  color: #DC2626;\n  background: #FEF2F2;\n}\n.adm-role-select.role-gestionnaire[_ngcontent-%COMP%] {\n  border-color: var(--primary-border);\n  color: var(--primary);\n  background: var(--primary-bg);\n}\n.adm-role-select.role-membre[_ngcontent-%COMP%] {\n  border-color: #A7F3D0;\n  color: #059669;\n  background: #ECFDF5;\n}\n.adm-role-select.role-viewonly[_ngcontent-%COMP%] {\n  border-color: #E5E7EB;\n  color: #6B7280;\n  background: #F3F4F6;\n}\n.adm-confirm-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.adm-confirm-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.adm-confirm-btn.adm-confirm-yes[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.adm-confirm-btn.adm-confirm-yes[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  color: #fff;\n}\n.adm-confirm-btn.adm-confirm-yes[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.adm-confirm-btn.adm-confirm-no[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.adm-confirm-btn.adm-confirm-no[_ngcontent-%COMP%]:hover {\n  background: #DC2626;\n  color: #fff;\n}\n.adm-confirm-btn.adm-confirm-no[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.adm-admin-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #D97706;\n  background: #FFFBEB;\n  border: 1px solid #FDE68A;\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.adm-admin-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.adm-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 40px 24px;\n  color: var(--text-muted);\n}\n.adm-empty[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 36px !important;\n  opacity: 0.3;\n}\n.adm-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n}\n.adm-card-viewonly[_ngcontent-%COMP%] {\n  border-color: #BFDBFE;\n  background:\n    linear-gradient(\n      180deg,\n      #EFF6FF 0%,\n      #fff 40%);\n}\n.adm-viewonly-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin: 0;\n  padding: 0 22px 14px;\n  line-height: 1.5;\n}\n.adm-viewonly-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  padding: 0 22px 16px;\n}\n.adm-viewonly-qr[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 10px;\n  border: 1.5px solid var(--primary-border, #BFDBFE);\n  flex-shrink: 0;\n}\n.adm-cred-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.adm-cred-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 7px 10px;\n}\n.adm-cred-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-muted);\n  min-width: 68px;\n}\n.adm-cred-val[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-family: monospace;\n  letter-spacing: 0.3px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.adm-cred-copy[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.adm-cred-copy[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.adm-cred-copy[_ngcontent-%COMP%]:hover {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.adm-share-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 0 22px 20px;\n}\n.adm-share-wa[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1.5px solid #86EFAC;\n  background: #DCFCE7;\n  color: #15803D;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n  justify-content: center;\n}\n.adm-share-wa[_ngcontent-%COMP%]:hover {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.adm-share-copy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--white);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n  justify-content: center;\n}\n.adm-share-copy[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.adm-share-copy[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.adm-info-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.adm-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 11px 22px;\n  border-bottom: 1px solid var(--border);\n}\n.adm-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.adm-info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  min-width: 110px;\n}\n.adm-info-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.adm-info-val.adm-info-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: 1px;\n}\n.adm-danger-card[_ngcontent-%COMP%] {\n  border-color: #FECACA;\n  background: #FFFBFB;\n}\n.adm-danger-title[_ngcontent-%COMP%] {\n  color: #DC2626 !important;\n}\n.adm-danger-title[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #DC2626 !important;\n}\n.adm-danger-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  flex-wrap: wrap;\n}\n.adm-danger-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.adm-danger-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.adm-danger-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #FECACA;\n  background: #FEF2F2;\n  color: #DC2626;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.adm-danger-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.adm-danger-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #DC2626;\n  color: #fff;\n  border-color: #DC2626;\n}\n.adm-danger-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.panel-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.slide-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 480px;\n  height: 100vh;\n  background: var(--white);\n  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.slide-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.panel-header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.panel-header-title[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: var(--primary);\n}\n.panel-header-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n}\n.panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n  background: var(--white);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  font-size: 13px;\n  color: var(--text-primary);\n  background: var(--white);\n  box-sizing: border-box;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px var(--primary-bg);\n}\n.form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--error, #EF4444);\n}\n.optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n}\n@media (max-width: 900px) {\n  .adm-main-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .adm-right-col[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n}\n@media (max-width: 640px) {\n  .adm-hero[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .adm-hero-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .adm-hero-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .adm-hero-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-around;\n    padding: 12px 16px;\n    gap: 12px;\n  }\n  .adm-hstat-val[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .adm-right-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .adm-member-row[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    gap: 10px;\n  }\n  .adm-member-contact[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .adm-viewonly-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .adm-viewonly-qr[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .adm-danger-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .adm-danger-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .slide-panel[_ngcontent-%COMP%] {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 92vh;\n    transform: translateY(100%);\n  }\n  .slide-panel.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .form-row-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .panel-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminComponent, [{
    type: Component,
    args: [{ selector: "app-admin", standalone: false, template: `<div class="admin-page">

  <!-- ===== HERO ===== -->
  <div class="adm-hero">
    <div class="adm-hero-bg"></div>
    <div class="adm-hero-content">
      <div class="adm-hero-left">
        <div class="adm-hero-icon">
          <span class="material-icons-round">admin_panel_settings</span>
        </div>
        <div>
          <p class="adm-hero-eyebrow">Administration</p>
          <h1 class="adm-hero-title">{{ famille?.nom || 'Famille' }}</h1>
          <div class="adm-hero-code" *ngIf="famille?.code">
            <span class="material-icons-round">key</span>
            <span class="adm-code-val">{{ famille.code }}</span>
            <button class="adm-copy-code" (click)="copyFamilleCode()" [title]="viewonlyCopied === 'familleCode' ? 'Copi\xE9 !' : 'Copier le code'">
              <span class="material-icons-round">{{ viewonlyCopied === 'familleCode' ? 'check' : 'content_copy' }}</span>
            </button>
          </div>
        </div>
      </div>
      <div class="adm-hero-stats">
        <div class="adm-hstat">
          <span class="adm-hstat-val">{{ membres.length }}</span>
          <span class="adm-hstat-lbl">Membres</span>
        </div>
        <div class="adm-hstat-sep"></div>
        <div class="adm-hstat">
          <span class="adm-hstat-val">{{ countRole('admin') }}</span>
          <span class="adm-hstat-lbl">Admins</span>
        </div>
        <div class="adm-hstat-sep"></div>
        <div class="adm-hstat">
          <span class="adm-hstat-val">{{ countRole('gestionnaire') }}</span>
          <span class="adm-hstat-lbl">Gestionnaires</span>
        </div>
        <div class="adm-hstat-sep"></div>
        <div class="adm-hstat">
          <span class="adm-hstat-val">{{ countRole('viewonly') }}</span>
          <span class="adm-hstat-lbl">Lecture seule</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Chargement / Erreur -->
  <div class="loading-state" *ngIf="loading">
    <span class="material-icons-round spin">sync</span> Chargement...
  </div>
  <div class="error-state" *ngIf="erreur && !loading">
    <span class="material-icons-round">error_outline</span>{{ erreur }}
  </div>

  <!-- Toast succ\xE8s -->
  <div class="adm-toast" *ngIf="saveSuccess">
    <span class="material-icons-round">check_circle</span>{{ saveSuccess }}
  </div>

  <ng-container *ngIf="!loading && !erreur">

    <!-- ===== GRILLE PRINCIPALE ===== -->
    <div class="adm-main-grid">

      <!-- \u2500\u2500 COLONNE MEMBRES \u2500\u2500 -->
      <div class="adm-card adm-card-members">

        <!-- En-t\xEAte -->
        <div class="adm-card-head">
          <div class="adm-card-title">
            <span class="material-icons-round">group</span>
            Comptes membres
            <span class="adm-count-badge">{{ filteredMembres.length }}/{{ membres.length }}</span>
          </div>
          <button class="btn-primary btn-sm" (click)="showCreateForm = true">
            <span class="material-icons-round">person_add</span>
            Nouveau
          </button>
        </div>

        <!-- Barre de recherche -->
        <div class="adm-search-bar">
          <span class="material-icons-round adm-search-icon">search</span>
          <input type="text" [(ngModel)]="searchQuery" placeholder="Rechercher un membre\u2026" class="adm-search-input" />
          <button class="adm-search-clear" *ngIf="searchQuery" (click)="searchQuery = ''">
            <span class="material-icons-round">close</span>
          </button>
        </div>

        <!-- Filtres r\xF4le -->
        <div class="adm-role-filters">
          <button class="adm-filter-btn" *ngFor="let f of roleFilters"
                  [class.active]="roleFilter === f.key"
                  (click)="roleFilter = f.key">
            <span class="material-icons-round">{{ f.icon }}</span>
            {{ f.label }}
            <span class="adm-filter-count" *ngIf="f.key !== 'tous'">{{ countRole(f.key) }}</span>
          </button>
        </div>

        <!-- Liste membres -->
        <div class="adm-members-list">

          <div class="adm-member-row" *ngFor="let m of filteredMembres; trackBy: trackById">

            <!-- Avatar + Infos -->
            <div class="adm-member-left">
              <div class="adm-avatar" [class]="'adm-avatar--' + getRoleColor(m.role)">
                {{ userInitiales(m.user) }}
              </div>
              <div class="adm-member-info">
                <span class="adm-member-name">{{ m.user?.prenom }} {{ m.user?.nom }}</span>
                <span class="adm-member-contact">{{ m.user?.email || m.user?.telephone || '\u2014' }}</span>
              </div>
            </div>

            <!-- S\xE9lecteur de r\xF4le -->
            <div class="adm-role-cell">
              <div class="adm-role-select-wrap" *ngIf="m.role !== 'admin'; else adminBadge">
                <select class="adm-role-select"
                        [(ngModel)]="editingRole[m.user?.id]"
                        [disabled]="roleChanging === m.user?.id"
                        [class]="'role-' + editingRole[m.user?.id]">
                  <option *ngFor="let r of roles" [value]="r.val">{{ r.label }}</option>
                </select>

                <!-- Confirmation inline -->
                <ng-container *ngIf="hasRoleChanged(m.user?.id)">
                  <button class="adm-confirm-btn adm-confirm-yes"
                          [disabled]="roleChanging === m.user?.id"
                          (click)="confirmRoleChange(m.user?.id)"
                          title="Confirmer le changement">
                    <span class="material-icons-round spin" *ngIf="roleChanging === m.user?.id">sync</span>
                    <span class="material-icons-round" *ngIf="roleChanging !== m.user?.id">check</span>
                  </button>
                  <button class="adm-confirm-btn adm-confirm-no"
                          [disabled]="roleChanging === m.user?.id"
                          (click)="cancelRoleChange(m.user?.id)"
                          title="Annuler">
                    <span class="material-icons-round">close</span>
                  </button>
                </ng-container>
              </div>

              <ng-template #adminBadge>
                <div class="adm-admin-badge">
                  <span class="material-icons-round">verified</span>
                  Administrateur
                </div>
              </ng-template>
            </div>

          </div>

          <!-- Vide -->
          <div class="adm-empty" *ngIf="filteredMembres.length === 0">
            <span class="material-icons-round">manage_search</span>
            <p>Aucun membre trouv\xE9</p>
          </div>

        </div>
      </div>

      <!-- \u2500\u2500 COLONNE DROITE \u2500\u2500 -->
      <div class="adm-right-col">

        <!-- Acc\xE8s consultation -->
        <div class="adm-card adm-card-viewonly" *ngIf="viewonlyCreds">
          <div class="adm-card-head">
            <div class="adm-card-title">
              <span class="material-icons-round">visibility</span>
              Acc\xE8s lecture seule
            </div>
            <button class="btn-icon" (click)="showViewonlyPassword = !showViewonlyPassword"
                    [title]="showViewonlyPassword ? 'Masquer' : 'Afficher'">
              <span class="material-icons-round">{{ showViewonlyPassword ? 'visibility_off' : 'visibility' }}</span>
            </button>
          </div>

          <p class="adm-viewonly-desc">
            Partagez ces identifiants pour un acc\xE8s en consultation uniquement, sans compte personnel.
          </p>

          <!-- QR + Identifiants -->
          <div class="adm-viewonly-body">
            <img [src]="viewonlyQrUrl" alt="QR code" class="adm-viewonly-qr" />
            <div class="adm-cred-rows">
              <div class="adm-cred-row">
                <span class="adm-cred-label">Code famille</span>
                <span class="adm-cred-val">{{ viewonlyCreds.familleCode }}</span>
                <button class="adm-cred-copy" (click)="copyViewonly('code')">
                  <span class="material-icons-round">{{ viewonlyCopied === 'code' ? 'check' : 'content_copy' }}</span>
                </button>
              </div>
              <div class="adm-cred-row">
                <span class="adm-cred-label">Identifiant</span>
                <span class="adm-cred-val">{{ viewonlyCreds.viewonlyUsername }}</span>
                <button class="adm-cred-copy" (click)="copyViewonly('username')">
                  <span class="material-icons-round">{{ viewonlyCopied === 'username' ? 'check' : 'content_copy' }}</span>
                </button>
              </div>
              <div class="adm-cred-row">
                <span class="adm-cred-label">Mot de passe</span>
                <span class="adm-cred-val">{{ showViewonlyPassword ? viewonlyCreds.viewonlyPassword : '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022' }}</span>
                <button class="adm-cred-copy" (click)="copyViewonly('password')">
                  <span class="material-icons-round">{{ viewonlyCopied === 'password' ? 'check' : 'content_copy' }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Partage -->
          <div class="adm-share-btns">
            <button class="adm-share-wa" (click)="shareViewonlyWhatsApp()">
              <svg style="width:16px;height:16px;flex-shrink:0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </button>
            <button class="adm-share-copy" (click)="shareViewonly()">
              <span class="material-icons-round">{{ viewonlyCopied === 'share' ? 'check' : 'share' }}</span>
              {{ viewonlyCopied === 'share' ? 'Copi\xE9 !' : 'Partager' }}
            </button>
          </div>
        </div>

        <!-- Infos famille -->
        <div class="adm-card adm-card-info">
          <div class="adm-card-head">
            <div class="adm-card-title">
              <span class="material-icons-round">info</span>
              Informations famille
            </div>
          </div>
          <div class="adm-info-rows">
            <div class="adm-info-row">
              <span class="adm-info-label">Nom</span>
              <span class="adm-info-val">{{ famille?.nom || '\u2014' }}</span>
            </div>
            <div class="adm-info-row">
              <span class="adm-info-label">Code d'acc\xE8s</span>
              <span class="adm-info-val adm-info-code">{{ famille?.code || '\u2014' }}</span>
            </div>
            <div class="adm-info-row">
              <span class="adm-info-label">Total membres</span>
              <span class="adm-info-val">{{ membres.length }}</span>
            </div>
            <div class="adm-info-row">
              <span class="adm-info-label">Profils arbre</span>
              <span class="adm-info-val">{{ personnes.length }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- ===== ZONE DANGER ===== -->
    <div class="adm-card adm-danger-card">
      <div class="adm-card-head">
        <div class="adm-card-title adm-danger-title">
          <span class="material-icons-round">warning</span>
          Zone de danger
        </div>
      </div>
      <div class="adm-danger-row">
        <div>
          <span class="adm-danger-label">R\xE9initialiser l'acc\xE8s lecture seule</span>
          <span class="adm-danger-sub">G\xE9n\xE8re de nouveaux identifiants \u2014 les anciens ne fonctionneront plus</span>
        </div>
        <button class="adm-danger-btn" disabled title="Bient\xF4t disponible">
          <span class="material-icons-round">refresh</span>R\xE9initialiser
        </button>
      </div>
    </div>

  </ng-container>
</div>

<!-- ===== OVERLAY ===== -->
<div class="panel-overlay" *ngIf="showCreateForm" (click)="showCreateForm = false"></div>

<!-- ===== PANNEAU CR\xC9ATION ===== -->
<div class="slide-panel" [class.open]="showCreateForm">
  <div class="panel-header">
    <div class="panel-header-title">
      <span class="material-icons-round">person_add</span>
      <h3>Nouveau compte membre</h3>
    </div>
    <button class="btn-icon" (click)="showCreateForm = false">
      <span class="material-icons-round">close</span>
    </button>
  </div>

  <div class="panel-body">

    <div class="form-section">
      <div class="section-title">Identit\xE9</div>
      <div class="form-row-2">
        <div class="form-group">
          <label>Pr\xE9nom <span class="required">*</span></label>
          <input type="text" name="prenom" [(ngModel)]="createForm.prenom"
                 required placeholder="Pr\xE9nom" class="form-control" />
        </div>
        <div class="form-group">
          <label>Nom <span class="required">*</span></label>
          <input type="text" name="nom" [(ngModel)]="createForm.nom"
                 required placeholder="Nom de famille" class="form-control" />
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="section-title">Connexion</div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" [(ngModel)]="createForm.email"
               placeholder="exemple@email.com" class="form-control" />
      </div>
      <div class="form-group">
        <label>T\xE9l\xE9phone</label>
        <input type="tel" name="telephone" [(ngModel)]="createForm.telephone"
               placeholder="+221 77 000 00 00" class="form-control" />
      </div>
      <div class="form-group">
        <label>Mot de passe <span class="required">*</span></label>
        <input type="password" name="password" [(ngModel)]="createForm.password"
               required placeholder="Mot de passe" class="form-control" />
      </div>
    </div>

    <div class="form-section">
      <div class="section-title">R\xF4le et association</div>
      <div class="form-group">
        <label>R\xF4le</label>
        <select name="role" [(ngModel)]="createForm.role" class="form-control">
          <option *ngFor="let r of roles" [value]="r.val">{{ r.label }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Associer \xE0 une personne <span class="optional">(optionnel)</span></label>
        <select name="personneId" [(ngModel)]="createForm.personneId" class="form-control">
          <option value="">\u2014 Aucune association \u2014</option>
          <option *ngFor="let p of personnes" [value]="p.id">
            {{ p.prenoms }} {{ p.nomUsage ?? p.nomNaissance }}
          </option>
        </select>
      </div>
    </div>

  </div>

  <div class="panel-footer">
    <button class="btn-ghost" (click)="showCreateForm = false">Annuler</button>
    <button class="btn-primary" (click)="createMember()" [disabled]="saving">
      <span class="material-icons-round spin" *ngIf="saving">sync</span>
      <span class="material-icons-round" *ngIf="!saving">person_add</span>
      {{ saving ? 'Cr\xE9ation\u2026' : 'Cr\xE9er le compte' }}
    </button>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/admin/admin.component.scss */\n.admin-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.adm-hero {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e3a8a 55%,\n      var(--primary, #2563EB) 100%);\n  padding: 32px 36px;\n  color: #fff;\n}\n.adm-hero-bg {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n  pointer-events: none;\n}\n.adm-hero-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.adm-hero-left {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.adm-hero-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.adm-hero-icon .material-icons-round {\n  font-size: 32px !important;\n  color: #fff;\n}\n.adm-hero-eyebrow {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.55);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin: 0 0 4px;\n}\n.adm-hero-title {\n  font-size: 26px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0 0 8px;\n  letter-spacing: -0.3px;\n}\n.adm-hero-code {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  padding: 5px 12px;\n}\n.adm-hero-code .material-icons-round {\n  font-size: 14px !important;\n  color: rgba(255, 255, 255, 0.7);\n}\n.adm-code-val {\n  font-size: 13px;\n  font-weight: 700;\n  font-family: monospace;\n  color: #fff;\n  letter-spacing: 2px;\n}\n.adm-copy-code {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n}\n.adm-copy-code .material-icons-round {\n  font-size: 14px !important;\n}\n.adm-copy-code:hover {\n  color: #fff;\n}\n.adm-hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 16px 24px;\n  flex-shrink: 0;\n}\n.adm-hstat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.adm-hstat-val {\n  font-size: 26px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1;\n}\n.adm-hstat-lbl {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.55);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.adm-hstat-sep {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.2);\n}\n.adm-toast {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  border-radius: 12px;\n  background: #ECFDF5;\n  color: #065F46;\n  border: 1px solid #A7F3D0;\n  font-size: 13px;\n  font-weight: 500;\n  animation: toast-in 0.2s ease;\n}\n.adm-toast .material-icons-round {\n  font-size: 18px !important;\n}\n@keyframes toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.adm-main-grid {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 20px;\n  align-items: start;\n}\n.adm-right-col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.adm-card {\n  background: var(--white, #fff);\n  border: 1px solid var(--border, #E5E7EB);\n  border-radius: 18px;\n  overflow: hidden;\n}\n.adm-card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n  gap: 12px;\n}\n.adm-card-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary, #1F2937);\n}\n.adm-card-title .material-icons-round {\n  font-size: 19px !important;\n  color: var(--primary, #2563EB);\n}\n.adm-count-badge {\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--primary-bg, #EFF6FF);\n  color: var(--primary, #2563EB);\n  border: 1px solid var(--primary-border, #BFDBFE);\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.adm-search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n  background: var(--bg-muted, #F9FAFB);\n}\n.adm-search-icon {\n  font-size: 18px !important;\n  color: var(--text-muted, #9CA3AF);\n}\n.adm-search-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: var(--text-primary, #1F2937);\n  font-family: inherit;\n}\n.adm-search-input:focus {\n  outline: none;\n}\n.adm-search-input::placeholder {\n  color: var(--text-muted, #9CA3AF);\n}\n.adm-search-clear {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: none;\n  background: var(--border, #E5E7EB);\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.adm-search-clear .material-icons-round {\n  font-size: 14px !important;\n}\n.adm-search-clear:hover {\n  background: var(--text-muted);\n  color: #fff;\n}\n.adm-role-filters {\n  display: flex;\n  gap: 6px;\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.adm-role-filters::-webkit-scrollbar {\n  display: none;\n}\n.adm-filter-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  border: 1.5px solid var(--border, #E5E7EB);\n  background: var(--white, #fff);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: inherit;\n  transition: all 0.15s;\n}\n.adm-filter-btn .material-icons-round {\n  font-size: 14px !important;\n}\n.adm-filter-btn.active {\n  background: var(--primary-bg, #EFF6FF);\n  border-color: var(--primary, #2563EB);\n  color: var(--primary, #2563EB);\n}\n.adm-filter-btn:hover:not(.active) {\n  border-color: var(--primary, #2563EB);\n}\n.adm-filter-count {\n  background: var(--border, #E5E7EB);\n  color: var(--text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n  padding: 0 5px;\n  border-radius: 10px;\n  min-width: 16px;\n  text-align: center;\n}\n.active .adm-filter-count {\n  background: var(--primary, #2563EB);\n  color: #fff;\n}\n.adm-members-list {\n  display: flex;\n  flex-direction: column;\n}\n.adm-member-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 13px 22px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n  transition: background 0.12s;\n}\n.adm-member-row:last-child {\n  border-bottom: none;\n}\n.adm-member-row:hover {\n  background: var(--bg-muted, #F9FAFB);\n}\n.adm-member-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  min-width: 0;\n}\n.adm-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.adm-avatar--red {\n  background:\n    linear-gradient(\n      135deg,\n      #F87171,\n      #DC2626);\n}\n.adm-avatar--blue {\n  background:\n    linear-gradient(\n      135deg,\n      #60A5FA,\n      #2563EB);\n}\n.adm-avatar--green {\n  background:\n    linear-gradient(\n      135deg,\n      #34D399,\n      #059669);\n}\n.adm-avatar--gray {\n  background:\n    linear-gradient(\n      135deg,\n      #9CA3AF,\n      #6B7280);\n}\n.adm-member-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.adm-member-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary, #1F2937);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adm-member-contact {\n  font-size: 11px;\n  color: var(--text-muted, #9CA3AF);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adm-role-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.adm-role-select-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.adm-role-select {\n  padding: 5px 8px;\n  border-radius: 8px;\n  border: 1.5px solid var(--border);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n  background: var(--white);\n  cursor: pointer;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.adm-role-select:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.adm-role-select.role-admin {\n  border-color: #FECACA;\n  color: #DC2626;\n  background: #FEF2F2;\n}\n.adm-role-select.role-gestionnaire {\n  border-color: var(--primary-border);\n  color: var(--primary);\n  background: var(--primary-bg);\n}\n.adm-role-select.role-membre {\n  border-color: #A7F3D0;\n  color: #059669;\n  background: #ECFDF5;\n}\n.adm-role-select.role-viewonly {\n  border-color: #E5E7EB;\n  color: #6B7280;\n  background: #F3F4F6;\n}\n.adm-confirm-btn {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.adm-confirm-btn .material-icons-round {\n  font-size: 15px !important;\n}\n.adm-confirm-btn.adm-confirm-yes {\n  background: #ECFDF5;\n  color: #059669;\n}\n.adm-confirm-btn.adm-confirm-yes:hover {\n  background: #059669;\n  color: #fff;\n}\n.adm-confirm-btn.adm-confirm-yes:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.adm-confirm-btn.adm-confirm-no {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.adm-confirm-btn.adm-confirm-no:hover {\n  background: #DC2626;\n  color: #fff;\n}\n.adm-confirm-btn.adm-confirm-no:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.adm-admin-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #D97706;\n  background: #FFFBEB;\n  border: 1px solid #FDE68A;\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.adm-admin-badge .material-icons-round {\n  font-size: 14px !important;\n}\n.adm-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 40px 24px;\n  color: var(--text-muted);\n}\n.adm-empty .material-icons-round {\n  font-size: 36px !important;\n  opacity: 0.3;\n}\n.adm-empty p {\n  font-size: 14px;\n  margin: 0;\n}\n.adm-card-viewonly {\n  border-color: #BFDBFE;\n  background:\n    linear-gradient(\n      180deg,\n      #EFF6FF 0%,\n      #fff 40%);\n}\n.adm-viewonly-desc {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin: 0;\n  padding: 0 22px 14px;\n  line-height: 1.5;\n}\n.adm-viewonly-body {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n  padding: 0 22px 16px;\n}\n.adm-viewonly-qr {\n  width: 80px;\n  height: 80px;\n  border-radius: 10px;\n  border: 1.5px solid var(--primary-border, #BFDBFE);\n  flex-shrink: 0;\n}\n.adm-cred-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.adm-cred-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 7px 10px;\n}\n.adm-cred-label {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-muted);\n  min-width: 68px;\n}\n.adm-cred-val {\n  flex: 1;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-family: monospace;\n  letter-spacing: 0.3px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.adm-cred-copy {\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.adm-cred-copy .material-icons-round {\n  font-size: 14px !important;\n}\n.adm-cred-copy:hover {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.adm-share-btns {\n  display: flex;\n  gap: 8px;\n  padding: 0 22px 20px;\n}\n.adm-share-wa {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1.5px solid #86EFAC;\n  background: #DCFCE7;\n  color: #15803D;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n  justify-content: center;\n}\n.adm-share-wa:hover {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.adm-share-copy {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 1.5px solid var(--border);\n  background: var(--white);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n  justify-content: center;\n}\n.adm-share-copy .material-icons-round {\n  font-size: 16px !important;\n}\n.adm-share-copy:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.adm-info-rows {\n  display: flex;\n  flex-direction: column;\n}\n.adm-info-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 11px 22px;\n  border-bottom: 1px solid var(--border);\n}\n.adm-info-row:last-child {\n  border-bottom: none;\n}\n.adm-info-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  min-width: 110px;\n}\n.adm-info-val {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.adm-info-val.adm-info-code {\n  font-family: monospace;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: 1px;\n}\n.adm-danger-card {\n  border-color: #FECACA;\n  background: #FFFBFB;\n}\n.adm-danger-title {\n  color: #DC2626 !important;\n}\n.adm-danger-title .material-icons-round {\n  color: #DC2626 !important;\n}\n.adm-danger-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 22px;\n  flex-wrap: wrap;\n}\n.adm-danger-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.adm-danger-sub {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.adm-danger-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #FECACA;\n  background: #FEF2F2;\n  color: #DC2626;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.adm-danger-btn .material-icons-round {\n  font-size: 16px !important;\n}\n.adm-danger-btn:hover:not(:disabled) {\n  background: #DC2626;\n  color: #fff;\n  border-color: #DC2626;\n}\n.adm-danger-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.panel-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.slide-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 480px;\n  height: 100vh;\n  background: var(--white);\n  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.slide-panel.open {\n  transform: translateX(0);\n}\n.panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.panel-header-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.panel-header-title .material-icons-round {\n  font-size: 20px !important;\n  color: var(--primary);\n}\n.panel-header-title h3 {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.panel-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n}\n.panel-footer {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n  background: var(--white);\n}\n.form-section {\n  margin-bottom: 24px;\n}\n.section-title {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border);\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.form-control {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md, 8px);\n  font-size: 13px;\n  color: var(--text-primary);\n  background: var(--white);\n  box-sizing: border-box;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px var(--primary-bg);\n}\n.form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.required {\n  color: var(--error, #EF4444);\n}\n.optional {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 11px;\n}\n@media (max-width: 900px) {\n  .adm-main-grid {\n    grid-template-columns: 1fr;\n  }\n  .adm-right-col {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n}\n@media (max-width: 640px) {\n  .adm-hero {\n    padding: 24px 20px;\n  }\n  .adm-hero-content {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .adm-hero-title {\n    font-size: 20px;\n  }\n  .adm-hero-stats {\n    width: 100%;\n    justify-content: space-around;\n    padding: 12px 16px;\n    gap: 12px;\n  }\n  .adm-hstat-val {\n    font-size: 20px;\n  }\n  .adm-right-col {\n    grid-template-columns: 1fr;\n  }\n  .adm-member-row {\n    padding: 12px 16px;\n    gap: 10px;\n  }\n  .adm-member-contact {\n    display: none;\n  }\n  .adm-viewonly-body {\n    flex-direction: column;\n  }\n  .adm-viewonly-qr {\n    display: none;\n  }\n  .adm-danger-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .adm-danger-btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .slide-panel {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 92vh;\n    transform: translateY(100%);\n  }\n  .slide-panel.open {\n    transform: translateY(0);\n  }\n  .form-row-2 {\n    grid-template-columns: 1fr;\n  }\n  .panel-footer {\n    flex-direction: column-reverse;\n  }\n  .panel-footer button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */\n'] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/pages/admin/admin.component.ts", lineNumber: 21 });
})();

// src/app/pages/profil/profil.component.ts
function ProfilComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50)(1, "span", 23);
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.user.email, " ");
  }
}
function ProfilComponent_ng_container_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50)(1, "span", 23);
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.user.telephone, " ");
  }
}
function ProfilComponent_ng_container_2_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit());
    });
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Modifier ");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 23);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Profil mis \xE0 jour avec succ\xE8s ! ");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 23);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mot de passe chang\xE9 avec succ\xE8s ! ");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit());
    });
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Modifier ");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 55)(7, "span", 56);
    \u0275\u0275text(8, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 55)(12, "span", 56);
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 55)(17, "span", 56);
    \u0275\u0275text(18, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 57);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 55)(22, "span", 56);
    \u0275\u0275text(23, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user.prenom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user.email || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user.telephone || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.roleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
  }
}
function ProfilComponent_ng_container_2_div_29_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 23);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.editError, " ");
  }
}
function ProfilComponent_ng_container_2_div_29_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_div_29_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "label");
    \u0275\u0275text(4, "Pr\xE9nom ");
    \u0275\u0275elementStart(5, "span", 61);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilComponent_ng_container_2_div_29_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.prenom, $event) || (ctx_r1.editForm.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 60)(9, "label");
    \u0275\u0275text(10, "Nom ");
    \u0275\u0275elementStart(11, "span", 61);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilComponent_ng_container_2_div_29_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.nom, $event) || (ctx_r1.editForm.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 59)(15, "div", 60)(16, "label");
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilComponent_ng_container_2_div_29_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.email, $event) || (ctx_r1.editForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 60)(20, "label");
    \u0275\u0275text(21, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilComponent_ng_container_2_div_29_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.telephone, $event) || (ctx_r1.editForm.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, ProfilComponent_ng_container_2_div_29_div_23_Template, 4, 1, "div", 66);
    \u0275\u0275elementStart(24, "div", 67)(25, "button", 68);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_div_29_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(26, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 69);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_div_29_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveProfile());
    });
    \u0275\u0275template(28, ProfilComponent_ng_container_2_div_29_span_28_Template, 2, 0, "span", 70)(29, ProfilComponent_ng_container_2_div_29_span_29_Template, 2, 0, "span", 71);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.prenom);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.nom);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.telephone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.editSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.editSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editSaving ? "Sauvegarde\u2026" : "Enregistrer", " ");
  }
}
function ProfilComponent_ng_container_2_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 21)(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Ma famille ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 73)(7, "div", 74)(8, "span", 23);
    \u0275\u0275text(9, "account_tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "h3", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 76)(14, "span", 77);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 78);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_div_30_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyCode());
    });
    \u0275\u0275elementStart(17, "span", 23);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "p", 79);
    \u0275\u0275text(20, "Partagez ce code pour inviter des membres");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 80)(22, "div", 81)(23, "span", 82);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 83);
    \u0275\u0275text(26, "Membres");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "div", 84);
    \u0275\u0275elementStart(28, "div", 81)(29, "span", 82);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 83);
    \u0275\u0275text(32, "Unions");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 84);
    \u0275\u0275elementStart(34, "div", 81)(35, "span", 14);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 83);
    \u0275\u0275text(38, "Mon r\xF4le");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.famille.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.famille.code);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.codeCopied ? "Copi\xE9 !" : "Copier le code");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.codeCopied ? "check" : "content_copy");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.famille.totalMembres);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.famille.totalUnions);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.roleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
  }
}
function ProfilComponent_ng_container_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "div", 87)(3, "span", 88);
    \u0275\u0275text(4, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 89);
    \u0275\u0275text(7, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 90);
    \u0275\u0275text(9, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 51);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_div_37_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPwSection = true);
    });
    \u0275\u0275text(11, "Changer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 86)(13, "div", 87)(14, "span", 88);
    \u0275\u0275text(15, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "span", 89);
    \u0275\u0275text(18, "Compte actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 91);
    \u0275\u0275text(20, "Connect\xE9");
    \u0275\u0275elementEnd()()()()();
  }
}
function ProfilComponent_ng_container_2_div_38_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 23);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.pwError, " ");
  }
}
function ProfilComponent_ng_container_2_div_38_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_div_38_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 60)(2, "label");
    \u0275\u0275text(3, "Mot de passe actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilComponent_ng_container_2_div_38_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pwForm.ancien, $event) || (ctx_r1.pwForm.ancien = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 60)(6, "label");
    \u0275\u0275text(7, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilComponent_ng_container_2_div_38_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pwForm.nouveau, $event) || (ctx_r1.pwForm.nouveau = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 60)(10, "label");
    \u0275\u0275text(11, "Confirmer le nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ProfilComponent_ng_container_2_div_38_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pwForm.confirm, $event) || (ctx_r1.pwForm.confirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ProfilComponent_ng_container_2_div_38_div_13_Template, 4, 1, "div", 66);
    \u0275\u0275elementStart(14, "div", 67)(15, "button", 68);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_div_38_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.showPwSection = false;
      return \u0275\u0275resetView(ctx_r1.pwError = "");
    });
    \u0275\u0275text(16, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 69);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_div_38_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.savePassword());
    });
    \u0275\u0275template(18, ProfilComponent_ng_container_2_div_38_span_18_Template, 2, 0, "span", 70)(19, ProfilComponent_ng_container_2_div_38_span_19_Template, 2, 0, "span", 71);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pwForm.ancien);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pwForm.nouveau);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pwForm.confirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pwError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pwSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.pwSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.pwSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pwSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pwSaving ? "En cours\u2026" : "Changer", " ");
  }
}
function ProfilComponent_ng_container_2_a_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 96)(1, "span", 33);
    \u0275\u0275text(2, "admin_panel_settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Administration");
    \u0275\u0275elementEnd()();
  }
}
function ProfilComponent_ng_container_2_button_84_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ProfilComponent_ng_container_2_button_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_button_84_Template_button_click_0_listener() {
      const t_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.theme.applyColor(t_r10.name));
    });
    \u0275\u0275template(1, ProfilComponent_ng_container_2_button_84_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", t_r10.color);
    \u0275\u0275classProp("active", ctx_r1.theme.current === t_r10.name);
    \u0275\u0275property("title", t_r10.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.theme.current === t_r10.name);
  }
}
function ProfilComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275element(2, "div", 6);
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "h1", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13)(12, "span", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ProfilComponent_ng_container_2_span_14_Template, 4, 1, "span", 15)(15, ProfilComponent_ng_container_2_span_15_Template, 4, 1, "span", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16);
    \u0275\u0275template(17, ProfilComponent_ng_container_2_button_17_Template, 4, 0, "button", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, ProfilComponent_ng_container_2_div_18_Template, 4, 0, "div", 18)(19, ProfilComponent_ng_container_2_div_19_Template, 4, 0, "div", 18);
    \u0275\u0275elementStart(20, "div", 19)(21, "div", 20)(22, "div", 21)(23, "div", 22)(24, "span", 23);
    \u0275\u0275text(25, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Informations personnelles ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ProfilComponent_ng_container_2_button_27_Template, 4, 0, "button", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ProfilComponent_ng_container_2_div_28_Template, 26, 7, "div", 25)(29, ProfilComponent_ng_container_2_div_29_Template, 31, 10, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ProfilComponent_ng_container_2_div_30_Template, 39, 9, "div", 27);
    \u0275\u0275elementStart(31, "div", 28)(32, "div", 21)(33, "div", 22)(34, "span", 23);
    \u0275\u0275text(35, "security");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " S\xE9curit\xE9 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, ProfilComponent_ng_container_2_div_37_Template, 21, 0, "div", 29)(38, ProfilComponent_ng_container_2_div_38_Template, 21, 9, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 28)(40, "div", 21)(41, "div", 22)(42, "span", 23);
    \u0275\u0275text(43, "apps");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Navigation rapide ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 31)(46, "a", 32)(47, "span", 33);
    \u0275\u0275text(48, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Accueil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "a", 34)(52, "span", 33);
    \u0275\u0275text(53, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Arbre familial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "a", 35)(57, "span", 33);
    \u0275\u0275text(58, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Membres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "a", 36)(62, "span", 33);
    \u0275\u0275text(63, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65, "Unions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "a", 37)(67, "span", 33);
    \u0275\u0275text(68, "collections_bookmark");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span");
    \u0275\u0275text(70, "Stories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "a", 38)(72, "span", 33);
    \u0275\u0275text(73, "timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span");
    \u0275\u0275text(75, "Timeline");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(76, ProfilComponent_ng_container_2_a_76_Template, 5, 0, "a", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 28)(78, "div", 21)(79, "div", 22)(80, "span", 23);
    \u0275\u0275text(81, "palette");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, " Th\xE8me de couleur ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 40);
    \u0275\u0275template(84, ProfilComponent_ng_container_2_button_84_Template, 2, 6, "button", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 42);
    \u0275\u0275text(86, "Choisissez la couleur principale de l'interface");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 43)(88, "div", 21)(89, "div", 44)(90, "span", 23);
    \u0275\u0275text(91, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " Zone de danger ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 45)(94, "div", 46)(95, "div")(96, "span", 47);
    \u0275\u0275text(97, "Se d\xE9connecter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span", 48);
    \u0275\u0275text(99, "Vous serez redirig\xE9 vers la page de connexion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "button", 49);
    \u0275\u0275listener("click", function ProfilComponent_ng_container_2_Template_button_click_100_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(101, "span", 23);
    \u0275\u0275text(102, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103, "D\xE9connexion ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.initiales);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.user.prenom, " ", ctx_r1.user.nom);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.roleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.telephone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.editMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pwSuccess);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.editMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.famille);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.showPwSection);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPwSection);
    \u0275\u0275advance(38);
    \u0275\u0275property("ngIf", ctx_r1.user.role === "admin" || ctx_r1.user.role === "gestionnaire");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.theme.themes);
  }
}
var ProfilComponent = class _ProfilComponent {
  auth;
  api;
  theme;
  router;
  http;
  user = null;
  famille = null;
  loading = true;
  // Formulaire modification profil
  editMode = false;
  editForm = { prenom: "", nom: "", email: "", telephone: "" };
  editSaving = false;
  editSuccess = false;
  editError = "";
  // Formulaire changement de mot de passe
  pwForm = { ancien: "", nouveau: "", confirm: "" };
  pwSaving = false;
  pwSuccess = false;
  pwError = "";
  showPwSection = false;
  constructor(auth, api, theme, router, http) {
    this.auth = auth;
    this.api = api;
    this.theme = theme;
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    this.user = this.auth.getUser();
    if (this.user) {
      this.editForm = {
        prenom: this.user.prenom,
        nom: this.user.nom,
        email: this.user.email ?? "",
        telephone: this.user.telephone ?? ""
      };
    }
    forkJoin({
      famille: this.api.getCurrentFamille(),
      personnes: this.api.getPersonnes(),
      unions: this.api.getUnions()
    }).subscribe({
      next: ({ famille, personnes, unions }) => {
        const f = famille.famille ?? famille;
        this.famille = {
          id: f.id,
          nom: f.nom,
          code: f.code ?? f.codeUnique ?? "\u2014",
          totalMembres: personnes.length,
          totalUnions: unions.length,
          role: this.user?.role ?? "\u2014"
        };
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get initiales() {
    if (!this.user)
      return "MB";
    return `${this.user.prenom.charAt(0)}${this.user.nom.charAt(0)}`.toUpperCase();
  }
  get roleLabel() {
    const map = {
      admin: "Administrateur",
      gestionnaire: "Gestionnaire",
      membre: "Membre",
      viewonly: "Lecture seule"
    };
    return map[this.user?.role ?? ""] ?? this.user?.role ?? "\u2014";
  }
  get roleClass() {
    const map = {
      admin: "role-admin",
      gestionnaire: "role-gestionnaire",
      membre: "role-membre",
      viewonly: "role-viewonly"
    };
    return map[this.user?.role ?? ""] ?? "";
  }
  openEdit() {
    this.editError = "";
    this.editSuccess = false;
    this.editMode = true;
  }
  cancelEdit() {
    this.editMode = false;
    if (this.user) {
      this.editForm = {
        prenom: this.user.prenom,
        nom: this.user.nom,
        email: this.user.email ?? "",
        telephone: this.user.telephone ?? ""
      };
    }
  }
  saveProfile() {
    if (!this.editForm.prenom.trim() || !this.editForm.nom.trim()) {
      this.editError = "Le pr\xE9nom et le nom sont requis.";
      return;
    }
    this.editSaving = true;
    this.editError = "";
    this.http.patch(`${API_BASE_URL}/api/auth/me`, this.editForm).subscribe({
      next: (res) => {
        const updated = __spreadProps(__spreadValues({}, this.user), {
          prenom: this.editForm.prenom,
          nom: this.editForm.nom,
          email: this.editForm.email || void 0,
          telephone: this.editForm.telephone || void 0
        });
        this.auth.save(localStorage.getItem("mb_token"), updated);
        this.user = updated;
        this.editSaving = false;
        this.editSuccess = true;
        this.editMode = false;
        setTimeout(() => this.editSuccess = false, 3e3);
      },
      error: (err) => {
        this.editError = err?.error?.message ?? "Erreur lors de la sauvegarde.";
        this.editSaving = false;
      }
    });
  }
  savePassword() {
    if (!this.pwForm.ancien || !this.pwForm.nouveau) {
      this.pwError = "Tous les champs sont requis.";
      return;
    }
    if (this.pwForm.nouveau !== this.pwForm.confirm) {
      this.pwError = "Les mots de passe ne correspondent pas.";
      return;
    }
    if (this.pwForm.nouveau.length < 6) {
      this.pwError = "Le mot de passe doit faire au moins 6 caract\xE8res.";
      return;
    }
    this.pwSaving = true;
    this.pwError = "";
    this.http.post(`${API_BASE_URL}/api/auth/change-password`, {
      ancienPassword: this.pwForm.ancien,
      nouveauPassword: this.pwForm.nouveau
    }).subscribe({
      next: () => {
        this.pwSaving = false;
        this.pwSuccess = true;
        this.pwForm = { ancien: "", nouveau: "", confirm: "" };
        this.showPwSection = false;
        setTimeout(() => this.pwSuccess = false, 4e3);
      },
      error: (err) => {
        this.pwError = err?.error?.message ?? "Erreur lors du changement de mot de passe.";
        this.pwSaving = false;
      }
    });
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/auth/login"]);
  }
  copyCode() {
    if (this.famille?.code) {
      navigator.clipboard.writeText(this.famille.code).then(() => {
        this.codeCopied = true;
        setTimeout(() => this.codeCopied = false, 2e3);
      });
    }
  }
  codeCopied = false;
  static \u0275fac = function ProfilComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfilComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilComponent, selectors: [["app-profil"]], standalone: false, decls: 3, vars: 2, consts: [[1, "profil-page"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "profil-hero"], [1, "hero-bg"], [1, "hero-content"], [1, "hero-avatar-wrap"], [1, "hero-avatar"], [1, "hero-status-dot"], [1, "hero-info"], [1, "hero-name"], [1, "hero-meta"], [1, "role-badge"], ["class", "hero-contact", 4, "ngIf"], [1, "hero-actions"], ["class", "btn-outline btn-sm", 3, "click", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "profil-grid"], [1, "profil-card", "span-2"], [1, "card-header"], [1, "card-title"], [1, "material-icons-round"], ["class", "btn-ghost btn-sm", 3, "click", 4, "ngIf"], ["class", "info-grid", 4, "ngIf"], ["class", "edit-form", 4, "ngIf"], ["class", "profil-card", 4, "ngIf"], [1, "profil-card"], ["class", "security-items", 4, "ngIf"], ["class", "pw-form", 4, "ngIf"], [1, "quick-nav"], ["routerLink", "/app/home", 1, "qnav-item"], [1, "qnav-icon", "material-icons-round"], ["routerLink", "/app/tree", 1, "qnav-item"], ["routerLink", "/app/personnes", 1, "qnav-item"], ["routerLink", "/app/unions", 1, "qnav-item"], ["routerLink", "/app/stories", 1, "qnav-item"], ["routerLink", "/app/timeline", 1, "qnav-item"], ["class", "qnav-item qnav-admin", "routerLink", "/app/admin", 4, "ngIf"], [1, "theme-grid"], ["class", "theme-btn", 3, "active", "background", "title", "click", 4, "ngFor", "ngForOf"], [1, "theme-hint"], [1, "profil-card", "danger-card", "span-2"], [1, "card-title", "danger-title"], [1, "danger-actions"], [1, "danger-item"], [1, "danger-label"], [1, "danger-sub"], [1, "btn-danger", 3, "click"], [1, "hero-contact"], [1, "btn-outline", "btn-sm", 3, "click"], [1, "alert", "alert-success"], [1, "btn-ghost", "btn-sm", 3, "click"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "edit-form"], [1, "form-row"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Pr\xE9nom", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nom", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "votre@email.com", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+221 77 000 00 00", 3, "ngModelChange", "ngModel"], ["class", "alert alert-error", 4, "ngIf"], [1, "form-actions"], [1, "btn-ghost", "btn-sm", 3, "click", "disabled"], [1, "btn-primary", "btn-sm", 3, "click", "disabled"], ["class", "material-icons-round", 4, "ngIf"], ["class", "material-icons-round spin", 4, "ngIf"], [1, "alert", "alert-error"], [1, "famille-hero"], [1, "famille-icon"], [1, "famille-nom"], [1, "famille-code-wrap"], [1, "famille-code"], [1, "btn-icon", "copy-btn", 3, "click", "title"], [1, "famille-hint"], [1, "famille-stats"], [1, "fstat"], [1, "fstat-val"], [1, "fstat-lbl"], [1, "fstat-divider"], [1, "security-items"], [1, "security-item"], [1, "security-item-left"], [1, "security-icon", "material-icons-round"], [1, "security-label"], [1, "security-sub"], [1, "security-sub", "security-ok"], [1, "pw-form"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Minimum 6 caract\xE8res", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "R\xE9p\xE9tez le mot de passe", 3, "ngModelChange", "ngModel"], ["routerLink", "/app/admin", 1, "qnav-item", "qnav-admin"], [1, "theme-btn", 3, "click", "title"]], template: function ProfilComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ProfilComponent_div_1_Template, 4, 0, "div", 1)(2, ProfilComponent_ng_container_2_Template, 104, 19, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.user);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.profil-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.profil-hero[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 24px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a0533 0%,\n      #2d1b69 50%,\n      var(--primary, #3B82F6) 100%);\n  padding: 36px 40px;\n  color: #fff;\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 30px 30px;\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.hero-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.hero-avatar[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.25),\n      rgba(255, 255, 255, 0.1));\n  border: 3px solid rgba(255, 255, 255, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -1px;\n}\n.hero-status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 14px;\n  height: 14px;\n  background: #10B981;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n}\n.hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.hero-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0 0 10px;\n  letter-spacing: -0.3px;\n}\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.hero-contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-contact[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.4);\n  color: #fff;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.role-badge.role-admin[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n  border-color: #FECACA;\n}\n.role-badge.role-gestionnaire[_ngcontent-%COMP%] {\n  background: var(--primary-bg, #EFF6FF);\n  color: var(--primary, #2563EB);\n  border-color: var(--primary-border, #BFDBFE);\n}\n.role-badge.role-membre[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n  border-color: #A7F3D0;\n}\n.role-badge.role-viewonly[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #6B7280;\n  border-color: #E5E7EB;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.alert[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  flex-shrink: 0;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #065F46;\n  border: 1px solid #A7F3D0;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n  border: 1px solid #FECACA;\n}\n.profil-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.profil-card[_ngcontent-%COMP%] {\n  background: var(--white, #fff);\n  border: 1px solid var(--border, #E5E7EB);\n  border-radius: 18px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profil-card.span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary, #1F2937);\n}\n.card-title[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: var(--primary, #3B82F6);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted, #9CA3AF);\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary, #1F2937);\n  font-weight: 500;\n}\n.edit-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary, #6B7280);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1.5px solid var(--border, #E5E7EB);\n  border-radius: 10px;\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--text-primary, #1F2937);\n  background: var(--white, #fff);\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary, #3B82F6);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.famille-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: var(--primary-bg, #EFF6FF);\n  border-radius: 14px;\n  border: 1px solid var(--primary-border, #BFDBFE);\n}\n.famille-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: var(--primary, #3B82F6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.famille-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 26px !important;\n  color: #fff;\n}\n.famille-nom[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary, #1F2937);\n  margin: 0 0 6px;\n}\n.famille-code-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.famille-code[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  font-family: monospace;\n  color: var(--primary, #3B82F6);\n  background: rgba(59, 130, 246, 0.1);\n  padding: 2px 10px;\n  border-radius: 8px;\n  letter-spacing: 1px;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n}\n.copy-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.famille-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted, #9CA3AF);\n  margin: 0;\n}\n.famille-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: var(--bg-muted, #F9FAFB);\n  border-radius: 14px;\n  border: 1px solid var(--border, #E5E7EB);\n  padding: 16px 20px;\n  gap: 20px;\n}\n.fstat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n}\n.fstat-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--text-primary, #1F2937);\n  line-height: 1;\n}\n.fstat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted, #9CA3AF);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.fstat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: var(--border, #E5E7EB);\n  flex-shrink: 0;\n}\n.security-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid var(--border, #E5E7EB);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.security-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n}\n.security-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.security-item-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.security-icon[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: var(--text-muted, #9CA3AF);\n}\n.security-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary, #1F2937);\n}\n.security-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted, #9CA3AF);\n}\n.security-sub.security-ok[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.pw-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.quick-nav[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.qnav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1px solid var(--border, #E5E7EB);\n  background: var(--white, #fff);\n  color: var(--text-primary, #1F2937);\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.qnav-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #3B82F6);\n  background: var(--primary-bg, #EFF6FF);\n  color: var(--primary, #3B82F6);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.12);\n  text-decoration: none;\n}\n.qnav-item.qnav-admin[_ngcontent-%COMP%] {\n  border-color: #FECACA;\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.qnav-item.qnav-admin[_ngcontent-%COMP%]:hover {\n  background: #FEE2E2;\n  border-color: #FCA5A5;\n}\n.qnav-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: var(--primary, #3B82F6);\n}\n.qnav-admin[_ngcontent-%COMP%]   .qnav-icon[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.theme-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.theme-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.theme-btn.active[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(0, 0, 0, 0.2);\n}\n.theme-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.theme-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #fff;\n}\n.theme-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted, #9CA3AF);\n  margin: 0;\n}\n.danger-card[_ngcontent-%COMP%] {\n  border-color: #FECACA;\n  background: #FFFBFB;\n}\n.danger-title[_ngcontent-%COMP%] {\n  color: #DC2626 !important;\n}\n.danger-title[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #DC2626 !important;\n}\n.danger-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid #FECACA;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.danger-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #FECACA;\n}\n.danger-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.danger-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary, #1F2937);\n  margin-bottom: 3px;\n}\n.danger-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted, #9CA3AF);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 10px;\n  border: 1.5px solid #FECACA;\n  background: #FEF2F2;\n  color: #DC2626;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.btn-danger[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #DC2626;\n  color: #fff;\n  border-color: #DC2626;\n}\n@media (max-width: 768px) {\n  .profil-page[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .profil-hero[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 16px;\n  }\n  .hero-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .hero-avatar[_ngcontent-%COMP%] {\n    width: 72px;\n    height: 72px;\n    font-size: 24px;\n  }\n  .hero-name[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .hero-meta[_ngcontent-%COMP%] {\n    gap: 8px;\n    flex-wrap: wrap;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .hero-actions[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .profil-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .profil-card[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .profil-card.span-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .quick-nav[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .famille-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .famille-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n    padding: 14px;\n  }\n  .fstat[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n  .fstat-val[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .danger-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .btn-danger[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .profil-hero[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .hero-name[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .hero-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .hero-contact[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .profil-card[_ngcontent-%COMP%] {\n    padding: 14px;\n    gap: 14px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .quick-nav[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .theme-grid[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .theme-btn[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .famille-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .fstat[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0;\n    border-bottom: 1px solid var(--border, #E5E7EB);\n  }\n  .fstat[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .fstat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .fstat-val[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=profil.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilComponent, [{
    type: Component,
    args: [{ selector: "app-profil", standalone: false, template: `<div class="profil-page">

  <div class="loading-state" *ngIf="loading">
    <span class="material-icons-round spin">sync</span> Chargement...
  </div>

  <ng-container *ngIf="!loading && user">

    <!-- ===== HERO ===== -->
    <div class="profil-hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-avatar-wrap">
          <div class="hero-avatar">{{ initiales }}</div>
          <span class="hero-status-dot"></span>
        </div>
        <div class="hero-info">
          <h1 class="hero-name">{{ user.prenom }} {{ user.nom }}</h1>
          <div class="hero-meta">
            <span class="role-badge" [class]="roleClass">{{ roleLabel }}</span>
            <span class="hero-contact" *ngIf="user.email">
              <span class="material-icons-round">mail</span>{{ user.email }}
            </span>
            <span class="hero-contact" *ngIf="user.telephone">
              <span class="material-icons-round">phone</span>{{ user.telephone }}
            </span>
          </div>
        </div>
        <div class="hero-actions">
          <button class="btn-outline btn-sm" (click)="openEdit()" *ngIf="!editMode">
            <span class="material-icons-round">edit</span>Modifier
          </button>
        </div>
      </div>
    </div>

    <!-- ===== SUCC\xC8S GLOBAL ===== -->
    <div class="alert alert-success" *ngIf="editSuccess">
      <span class="material-icons-round">check_circle</span>
      Profil mis \xE0 jour avec succ\xE8s !
    </div>
    <div class="alert alert-success" *ngIf="pwSuccess">
      <span class="material-icons-round">lock</span>
      Mot de passe chang\xE9 avec succ\xE8s !
    </div>

    <div class="profil-grid">

      <!-- ===== INFORMATIONS PERSONNELLES ===== -->
      <div class="profil-card span-2">
        <div class="card-header">
          <div class="card-title">
            <span class="material-icons-round">person</span>
            Informations personnelles
          </div>
          <button class="btn-ghost btn-sm" (click)="openEdit()" *ngIf="!editMode">
            <span class="material-icons-round">edit</span>Modifier
          </button>
        </div>

        <!-- Affichage -->
        <div class="info-grid" *ngIf="!editMode">
          <div class="info-item">
            <span class="info-label">Pr\xE9nom</span>
            <span class="info-value">{{ user.prenom }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Nom</span>
            <span class="info-value">{{ user.nom }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Email</span>
            <span class="info-value">{{ user.email || '\u2014' }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">T\xE9l\xE9phone</span>
            <span class="info-value">{{ user.telephone || '\u2014' }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">R\xF4le</span>
            <span class="role-badge" [class]="roleClass">{{ roleLabel }}</span>
          </div>
        </div>

        <!-- Formulaire d'\xE9dition -->
        <div class="edit-form" *ngIf="editMode">
          <div class="form-row">
            <div class="form-group">
              <label>Pr\xE9nom <span class="required">*</span></label>
              <input type="text" [(ngModel)]="editForm.prenom" placeholder="Pr\xE9nom" />
            </div>
            <div class="form-group">
              <label>Nom <span class="required">*</span></label>
              <input type="text" [(ngModel)]="editForm.nom" placeholder="Nom" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Email</label>
              <input type="email" [(ngModel)]="editForm.email" placeholder="votre@email.com" />
            </div>
            <div class="form-group">
              <label>T\xE9l\xE9phone</label>
              <input type="tel" [(ngModel)]="editForm.telephone" placeholder="+221 77 000 00 00" />
            </div>
          </div>
          <div class="alert alert-error" *ngIf="editError">
            <span class="material-icons-round">error_outline</span>{{ editError }}
          </div>
          <div class="form-actions">
            <button class="btn-ghost btn-sm" (click)="cancelEdit()" [disabled]="editSaving">Annuler</button>
            <button class="btn-primary btn-sm" (click)="saveProfile()" [disabled]="editSaving">
              <span class="material-icons-round" *ngIf="!editSaving">save</span>
              <span class="material-icons-round spin" *ngIf="editSaving">sync</span>
              {{ editSaving ? 'Sauvegarde\u2026' : 'Enregistrer' }}
            </button>
          </div>
        </div>
      </div>

      <!-- ===== MA FAMILLE ===== -->
      <div class="profil-card" *ngIf="famille">
        <div class="card-header">
          <div class="card-title">
            <span class="material-icons-round">groups</span>
            Ma famille
          </div>
        </div>
        <div class="famille-hero">
          <div class="famille-icon">
            <span class="material-icons-round">account_tree</span>
          </div>
          <div>
            <h3 class="famille-nom">{{ famille.nom }}</h3>
            <div class="famille-code-wrap">
              <span class="famille-code">{{ famille.code }}</span>
              <button class="btn-icon copy-btn" (click)="copyCode()" [title]="codeCopied ? 'Copi\xE9 !' : 'Copier le code'">
                <span class="material-icons-round">{{ codeCopied ? 'check' : 'content_copy' }}</span>
              </button>
            </div>
            <p class="famille-hint">Partagez ce code pour inviter des membres</p>
          </div>
        </div>
        <div class="famille-stats">
          <div class="fstat">
            <span class="fstat-val">{{ famille.totalMembres }}</span>
            <span class="fstat-lbl">Membres</span>
          </div>
          <div class="fstat-divider"></div>
          <div class="fstat">
            <span class="fstat-val">{{ famille.totalUnions }}</span>
            <span class="fstat-lbl">Unions</span>
          </div>
          <div class="fstat-divider"></div>
          <div class="fstat">
            <span class="role-badge" [class]="roleClass">{{ roleLabel }}</span>
            <span class="fstat-lbl">Mon r\xF4le</span>
          </div>
        </div>
      </div>

      <!-- ===== S\xC9CURIT\xC9 ===== -->
      <div class="profil-card">
        <div class="card-header">
          <div class="card-title">
            <span class="material-icons-round">security</span>
            S\xE9curit\xE9
          </div>
        </div>

        <div class="security-items" *ngIf="!showPwSection">
          <div class="security-item">
            <div class="security-item-left">
              <span class="security-icon material-icons-round">lock</span>
              <div>
                <span class="security-label">Mot de passe</span>
                <span class="security-sub">\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022</span>
              </div>
            </div>
            <button class="btn-outline btn-sm" (click)="showPwSection = true">Changer</button>
          </div>
          <div class="security-item">
            <div class="security-item-left">
              <span class="security-icon material-icons-round">verified_user</span>
              <div>
                <span class="security-label">Compte actif</span>
                <span class="security-sub security-ok">Connect\xE9</span>
              </div>
            </div>
          </div>
        </div>

        <div class="pw-form" *ngIf="showPwSection">
          <div class="form-group">
            <label>Mot de passe actuel</label>
            <input type="password" [(ngModel)]="pwForm.ancien" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
          </div>
          <div class="form-group">
            <label>Nouveau mot de passe</label>
            <input type="password" [(ngModel)]="pwForm.nouveau" placeholder="Minimum 6 caract\xE8res" />
          </div>
          <div class="form-group">
            <label>Confirmer le nouveau mot de passe</label>
            <input type="password" [(ngModel)]="pwForm.confirm" placeholder="R\xE9p\xE9tez le mot de passe" />
          </div>
          <div class="alert alert-error" *ngIf="pwError">
            <span class="material-icons-round">error_outline</span>{{ pwError }}
          </div>
          <div class="form-actions">
            <button class="btn-ghost btn-sm" (click)="showPwSection = false; pwError = ''" [disabled]="pwSaving">Annuler</button>
            <button class="btn-primary btn-sm" (click)="savePassword()" [disabled]="pwSaving">
              <span class="material-icons-round" *ngIf="!pwSaving">lock</span>
              <span class="material-icons-round spin" *ngIf="pwSaving">sync</span>
              {{ pwSaving ? 'En cours\u2026' : 'Changer' }}
            </button>
          </div>
        </div>
      </div>

      <!-- ===== NAVIGATION RAPIDE ===== -->
      <div class="profil-card">
        <div class="card-header">
          <div class="card-title">
            <span class="material-icons-round">apps</span>
            Navigation rapide
          </div>
        </div>
        <div class="quick-nav">
          <a class="qnav-item" routerLink="/app/home">
            <span class="qnav-icon material-icons-round">home</span>
            <span>Accueil</span>
          </a>
          <a class="qnav-item" routerLink="/app/tree">
            <span class="qnav-icon material-icons-round">account_tree</span>
            <span>Arbre familial</span>
          </a>
          <a class="qnav-item" routerLink="/app/personnes">
            <span class="qnav-icon material-icons-round">people</span>
            <span>Membres</span>
          </a>
          <a class="qnav-item" routerLink="/app/unions">
            <span class="qnav-icon material-icons-round">favorite</span>
            <span>Unions</span>
          </a>
          <a class="qnav-item" routerLink="/app/stories">
            <span class="qnav-icon material-icons-round">collections_bookmark</span>
            <span>Stories</span>
          </a>
          <a class="qnav-item" routerLink="/app/timeline">
            <span class="qnav-icon material-icons-round">timeline</span>
            <span>Timeline</span>
          </a>
          <a class="qnav-item qnav-admin" routerLink="/app/admin" *ngIf="user.role === 'admin' || user.role === 'gestionnaire'">
            <span class="qnav-icon material-icons-round">admin_panel_settings</span>
            <span>Administration</span>
          </a>
        </div>
      </div>

      <!-- ===== TH\xC8ME ===== -->
      <div class="profil-card">
        <div class="card-header">
          <div class="card-title">
            <span class="material-icons-round">palette</span>
            Th\xE8me de couleur
          </div>
        </div>
        <div class="theme-grid">
          <button
            class="theme-btn"
            *ngFor="let t of theme.themes"
            [class.active]="theme.current === t.name"
            [style.background]="t.color"
            (click)="theme.applyColor(t.name)"
            [title]="t.label">
            <span class="material-icons-round" *ngIf="theme.current === t.name">check</span>
          </button>
        </div>
        <p class="theme-hint">Choisissez la couleur principale de l'interface</p>
      </div>

      <!-- ===== ZONE DANGER ===== -->
      <div class="profil-card danger-card span-2">
        <div class="card-header">
          <div class="card-title danger-title">
            <span class="material-icons-round">warning</span>
            Zone de danger
          </div>
        </div>
        <div class="danger-actions">
          <div class="danger-item">
            <div>
              <span class="danger-label">Se d\xE9connecter</span>
              <span class="danger-sub">Vous serez redirig\xE9 vers la page de connexion</span>
            </div>
            <button class="btn-danger" (click)="logout()">
              <span class="material-icons-round">logout</span>D\xE9connexion
            </button>
          </div>
        </div>
      </div>

    </div>
  </ng-container>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/profil/profil.component.scss */\n.profil-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.profil-hero {\n  position: relative;\n  border-radius: 24px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a0533 0%,\n      #2d1b69 50%,\n      var(--primary, #3B82F6) 100%);\n  padding: 36px 40px;\n  color: #fff;\n}\n.hero-bg {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 30px 30px;\n  pointer-events: none;\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.hero-avatar-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.hero-avatar {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.25),\n      rgba(255, 255, 255, 0.1));\n  border: 3px solid rgba(255, 255, 255, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -1px;\n}\n.hero-status-dot {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 14px;\n  height: 14px;\n  background: #10B981;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n}\n.hero-info {\n  flex: 1;\n  min-width: 0;\n}\n.hero-name {\n  font-size: 28px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0 0 10px;\n  letter-spacing: -0.3px;\n}\n.hero-meta {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.hero-contact {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero-contact .material-icons-round {\n  font-size: 15px !important;\n}\n.hero-actions {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.hero-actions .btn-outline {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.4);\n  color: #fff;\n}\n.hero-actions .btn-outline:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.role-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.role-badge.role-admin {\n  background: #FEF2F2;\n  color: #DC2626;\n  border-color: #FECACA;\n}\n.role-badge.role-gestionnaire {\n  background: var(--primary-bg, #EFF6FF);\n  color: var(--primary, #2563EB);\n  border-color: var(--primary-border, #BFDBFE);\n}\n.role-badge.role-membre {\n  background: #ECFDF5;\n  color: #059669;\n  border-color: #A7F3D0;\n}\n.role-badge.role-viewonly {\n  background: #F3F4F6;\n  color: #6B7280;\n  border-color: #E5E7EB;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.alert .material-icons-round {\n  font-size: 18px !important;\n  flex-shrink: 0;\n}\n.alert.alert-success {\n  background: #ECFDF5;\n  color: #065F46;\n  border: 1px solid #A7F3D0;\n}\n.alert.alert-error {\n  background: #FEF2F2;\n  color: #991B1B;\n  border: 1px solid #FECACA;\n}\n.profil-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.profil-card {\n  background: var(--white, #fff);\n  border: 1px solid var(--border, #E5E7EB);\n  border-radius: 18px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profil-card.span-2 {\n  grid-column: span 2;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary, #1F2937);\n}\n.card-title .material-icons-round {\n  font-size: 20px !important;\n  color: var(--primary, #3B82F6);\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted, #9CA3AF);\n}\n.info-value {\n  font-size: 14px;\n  color: var(--text-primary, #1F2937);\n  font-weight: 500;\n}\n.edit-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary, #6B7280);\n}\n.form-group label .required {\n  color: #EF4444;\n}\n.form-group input {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1.5px solid var(--border, #E5E7EB);\n  border-radius: 10px;\n  font-size: 13px;\n  font-family: inherit;\n  color: var(--text-primary, #1F2937);\n  background: var(--white, #fff);\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: var(--primary, #3B82F6);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.famille-hero {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: var(--primary-bg, #EFF6FF);\n  border-radius: 14px;\n  border: 1px solid var(--primary-border, #BFDBFE);\n}\n.famille-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: var(--primary, #3B82F6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.famille-icon .material-icons-round {\n  font-size: 26px !important;\n  color: #fff;\n}\n.famille-nom {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary, #1F2937);\n  margin: 0 0 6px;\n}\n.famille-code-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.famille-code {\n  font-size: 13px;\n  font-weight: 700;\n  font-family: monospace;\n  color: var(--primary, #3B82F6);\n  background: rgba(59, 130, 246, 0.1);\n  padding: 2px 10px;\n  border-radius: 8px;\n  letter-spacing: 1px;\n}\n.copy-btn {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n}\n.copy-btn .material-icons-round {\n  font-size: 15px !important;\n}\n.famille-hint {\n  font-size: 11px;\n  color: var(--text-muted, #9CA3AF);\n  margin: 0;\n}\n.famille-stats {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: var(--bg-muted, #F9FAFB);\n  border-radius: 14px;\n  border: 1px solid var(--border, #E5E7EB);\n  padding: 16px 20px;\n  gap: 20px;\n}\n.fstat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex: 1;\n}\n.fstat-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--text-primary, #1F2937);\n  line-height: 1;\n}\n.fstat-lbl {\n  font-size: 11px;\n  color: var(--text-muted, #9CA3AF);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.fstat-divider {\n  width: 1px;\n  height: 36px;\n  background: var(--border, #E5E7EB);\n  flex-shrink: 0;\n}\n.security-items {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid var(--border, #E5E7EB);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.security-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--border, #E5E7EB);\n}\n.security-item:last-child {\n  border-bottom: none;\n}\n.security-item-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.security-icon {\n  font-size: 20px !important;\n  color: var(--text-muted, #9CA3AF);\n}\n.security-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary, #1F2937);\n}\n.security-sub {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted, #9CA3AF);\n}\n.security-sub.security-ok {\n  color: #10B981;\n}\n.pw-form {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.quick-nav {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.qnav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  border: 1px solid var(--border, #E5E7EB);\n  background: var(--white, #fff);\n  color: var(--text-primary, #1F2937);\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s;\n}\n.qnav-item:hover {\n  border-color: var(--primary, #3B82F6);\n  background: var(--primary-bg, #EFF6FF);\n  color: var(--primary, #3B82F6);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.12);\n  text-decoration: none;\n}\n.qnav-item.qnav-admin {\n  border-color: #FECACA;\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.qnav-item.qnav-admin:hover {\n  background: #FEE2E2;\n  border-color: #FCA5A5;\n}\n.qnav-icon {\n  font-size: 18px !important;\n  color: var(--primary, #3B82F6);\n}\n.qnav-admin .qnav-icon {\n  color: #DC2626;\n}\n.theme-grid {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.theme-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.theme-btn.active {\n  border-color: rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(0, 0, 0, 0.2);\n}\n.theme-btn:hover {\n  transform: scale(1.15);\n}\n.theme-btn .material-icons-round {\n  font-size: 16px !important;\n  color: #fff;\n}\n.theme-hint {\n  font-size: 12px;\n  color: var(--text-muted, #9CA3AF);\n  margin: 0;\n}\n.danger-card {\n  border-color: #FECACA;\n  background: #FFFBFB;\n}\n.danger-title {\n  color: #DC2626 !important;\n}\n.danger-title .material-icons-round {\n  color: #DC2626 !important;\n}\n.danger-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid #FECACA;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.danger-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 20px;\n  border-bottom: 1px solid #FECACA;\n}\n.danger-item:last-child {\n  border-bottom: none;\n}\n.danger-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary, #1F2937);\n  margin-bottom: 3px;\n}\n.danger-sub {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted, #9CA3AF);\n}\n.btn-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 10px;\n  border: 1.5px solid #FECACA;\n  background: #FEF2F2;\n  color: #DC2626;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.btn-danger .material-icons-round {\n  font-size: 17px !important;\n}\n.btn-danger:hover {\n  background: #DC2626;\n  color: #fff;\n  border-color: #DC2626;\n}\n@media (max-width: 768px) {\n  .profil-page {\n    gap: 16px;\n  }\n  .profil-hero {\n    padding: 24px 20px;\n    border-radius: 16px;\n  }\n  .hero-content {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .hero-avatar {\n    width: 72px;\n    height: 72px;\n    font-size: 24px;\n  }\n  .hero-name {\n    font-size: 20px;\n  }\n  .hero-meta {\n    gap: 8px;\n    flex-wrap: wrap;\n  }\n  .hero-actions {\n    width: 100%;\n  }\n  .hero-actions .btn-outline {\n    flex: 1;\n    justify-content: center;\n  }\n  .profil-grid {\n    grid-template-columns: 1fr;\n  }\n  .profil-card {\n    padding: 18px;\n  }\n  .profil-card.span-2 {\n    grid-column: span 1;\n  }\n  .info-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .quick-nav {\n    grid-template-columns: 1fr 1fr;\n  }\n  .famille-hero {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .famille-stats {\n    flex-wrap: wrap;\n    gap: 12px;\n    padding: 14px;\n  }\n  .fstat {\n    flex: 0 0 auto;\n  }\n  .fstat-val {\n    font-size: 20px;\n  }\n  .danger-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .btn-danger {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .profil-hero {\n    padding: 20px 16px;\n  }\n  .hero-name {\n    font-size: 18px;\n  }\n  .hero-meta {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .hero-contact {\n    font-size: 12px;\n  }\n  .profil-card {\n    padding: 14px;\n    gap: 14px;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .quick-nav {\n    grid-template-columns: 1fr;\n  }\n  .theme-grid {\n    gap: 8px;\n  }\n  .theme-btn {\n    width: 32px;\n    height: 32px;\n  }\n  .famille-stats {\n    flex-direction: column;\n    gap: 0;\n  }\n  .fstat {\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0;\n    border-bottom: 1px solid var(--border, #E5E7EB);\n  }\n  .fstat:last-child {\n    border-bottom: none;\n  }\n  .fstat-divider {\n    display: none;\n  }\n  .fstat-val {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=profil.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: ApiService }, { type: ThemeService }, { type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilComponent, { className: "ProfilComponent", filePath: "src/app/pages/profil/profil.component.ts", lineNumber: 25 });
})();

// src/app/pages/inviter/inviter.component.ts
function InviterComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...\n");
    \u0275\u0275elementEnd();
  }
}
function InviterComponent_div_10_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.qrUrl, \u0275\u0275sanitizeUrl);
  }
}
function InviterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275template(3, InviterComponent_div_10_img_3_Template, 1, 1, "img", 9);
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Scanner avec l'appareil photo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "span");
    \u0275\u0275text(8, "ou entrer le code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "p", 13);
    \u0275\u0275text(11, "Code d'acc\xE8s famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "span", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275listener("click", function InviterComponent_div_10_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyCode());
    });
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "p", 18);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 19)(21, "h3", 20)(22, "span", 17);
    \u0275\u0275text(23, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Partager l'invitation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 21);
    \u0275\u0275text(26, "Envoyez directement \xE0 vos contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 22)(28, "button", 23);
    \u0275\u0275listener("click", function InviterComponent_div_10_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareWhatsApp());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 24);
    \u0275\u0275element(30, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 26);
    \u0275\u0275listener("click", function InviterComponent_div_10_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareNative());
    });
    \u0275\u0275elementStart(33, "span", 17);
    \u0275\u0275text(34, "ios_share");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Partager via\u2026 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 27);
    \u0275\u0275listener("click", function InviterComponent_div_10_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyMessage());
    });
    \u0275\u0275elementStart(37, "span", 17);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 19)(41, "h3", 20)(42, "span", 17);
    \u0275\u0275text(43, "help_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Comment rejoindre ? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "ol", 28)(46, "li", 29)(47, "div", 30);
    \u0275\u0275text(48, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div")(50, "strong");
    \u0275\u0275text(51, "T\xE9l\xE9chargez");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " l'application Mam Buudu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "li", 29)(54, "div", 30);
    \u0275\u0275text(55, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "strong");
    \u0275\u0275text(58, "Cr\xE9ez");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, " votre compte avec nom et num\xE9ro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "li", 29)(61, "div", 30);
    \u0275\u0275text(62, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div");
    \u0275\u0275text(64, "Entrez le code ");
    \u0275\u0275elementStart(65, "span", 31);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "li", 29)(68, "div", 30);
    \u0275\u0275text(69, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div")(71, "strong");
    \u0275\u0275text(72, "Bienvenue");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.familleCode);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.familleCode);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.codeCopied ? "Copi\xE9 !" : "Copier");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.codeCopied ? "check" : "content_copy");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.codeCopied ? "#059669" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.codeCopied ? "Code copi\xE9 !" : "\xC0 entrer dans l'app lors de l'inscription", " ");
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx_r1.messageCopied ? "check" : "content_copy");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.messageCopied ? "Copi\xE9 !" : "Copier le message", " ");
    \u0275\u0275advance(27);
    \u0275\u0275textInterpolate(ctx_r1.familleCode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" dans la famille ", ctx_r1.familleNom, " !");
  }
}
var InviterComponent = class _InviterComponent {
  api;
  familleNom = "";
  familleCode = "";
  loading = true;
  codeCopied = false;
  messageCopied = false;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getCurrentFamille().subscribe({
      next: (f) => {
        const famille = f.famille ?? f;
        this.familleNom = famille.nom ?? "";
        this.familleCode = famille.code ?? famille.codeUnique ?? "";
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get qrUrl() {
    if (!this.familleCode)
      return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(this.familleCode)}&bgcolor=eff6ff&color=2563eb&format=png&margin=10`;
  }
  get whatsappMsg() {
    return `Rejoignez l'arbre familial de la famille *${this.familleNom}* sur Mam Buudu \u{1F333}

Code d'acc\xE8s : *${this.familleCode}*

1. T\xE9l\xE9chargez l'app Mam Buudu
2. Cr\xE9ez votre compte
3. Entrez ce code pour rejoindre la famille`;
  }
  copyCode() {
    navigator.clipboard.writeText(this.familleCode).then(() => {
      this.codeCopied = true;
      setTimeout(() => this.codeCopied = false, 2e3);
    });
  }
  copyMessage() {
    navigator.clipboard.writeText(this.whatsappMsg).then(() => {
      this.messageCopied = true;
      setTimeout(() => this.messageCopied = false, 2500);
    });
  }
  shareWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.whatsappMsg)}`, "_blank");
  }
  shareNative() {
    if (navigator.share) {
      navigator.share({
        title: `Famille ${this.familleNom} \u2014 Mam Buudu`,
        text: this.whatsappMsg
      }).catch(() => {
      });
    } else {
      this.shareWhatsApp();
    }
  }
  static \u0275fac = function InviterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InviterComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviterComponent, selectors: [["app-inviter"]], standalone: false, decls: 11, vars: 3, consts: [[1, "page-header"], [1, "header-row"], ["class", "loading-state", 4, "ngIf"], ["class", "inv-grid", 4, "ngIf"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "inv-grid"], [1, "inv-card", "inv-card-qr"], [1, "inv-qr-frame"], ["alt", "QR code famille", "class", "inv-qr", 3, "src", 4, "ngIf"], [1, "inv-qr-caption"], [1, "inv-or"], [1, "inv-code-section"], [1, "inv-label"], [1, "inv-code-row"], [1, "inv-code"], [1, "inv-icon-btn", 3, "click", "title"], [1, "material-icons-round"], [1, "inv-hint"], [1, "inv-card"], [1, "inv-card-title"], [1, "inv-card-sub"], [1, "inv-share-list"], [1, "inv-share-btn", "inv-wa", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor", 2, "width", "20px", "height", "20px", "flex-shrink", "0"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"], [1, "inv-share-btn", "inv-native", 3, "click"], [1, "inv-share-btn", "inv-copy", 3, "click"], [1, "inv-steps"], [1, "inv-step"], [1, "inv-step-num"], [1, "inv-inline-code"], ["alt", "QR code famille", 1, "inv-qr", 3, "src"]], template: function InviterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275text(4, "Inviter des membres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Partagez le code ou le QR code pour inviter vos proches \xE0 rejoindre ");
      \u0275\u0275elementStart(7, "strong");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(9, InviterComponent_div_9_Template, 4, 0, "div", 2)(10, InviterComponent_div_10_Template, 74, 11, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.familleNom);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [NgIf], styles: ['\n\n.inv-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n  margin-top: 24px;\n}\n.inv-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: var(--shadow-sm);\n}\n.inv-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.inv-card-title[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n  color: var(--primary);\n}\n.inv-card-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: -8px 0 0;\n}\n.inv-card-qr[_ngcontent-%COMP%] {\n  align-items: center;\n  min-width: 260px;\n}\n.inv-qr-frame[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 16px;\n  background: var(--primary-bg);\n  border-radius: var(--radius-lg);\n  border: 1.5px dashed var(--primary-border);\n  width: 100%;\n}\n.inv-qr[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  border-radius: 10px;\n  display: block;\n}\n.inv-qr-caption[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-align: center;\n  margin: 0;\n}\n.inv-or[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.inv-or[_ngcontent-%COMP%]::before, \n.inv-or[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border);\n}\n.inv-code-section[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: center;\n}\n.inv-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  margin: 0;\n}\n.inv-code-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.inv-code[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  font-family: monospace;\n  color: var(--primary);\n  letter-spacing: 3px;\n  background: var(--primary-bg);\n  padding: 8px 16px;\n  border-radius: var(--radius-md);\n}\n.inv-icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-md);\n  border: 1.5px solid var(--primary-border);\n  background: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.inv-icon-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  color: var(--primary);\n}\n.inv-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-bg);\n}\n.inv-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin: 0;\n  text-align: center;\n}\n.inv-share-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.inv-share-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  border: 1.5px solid;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n}\n.inv-wa[_ngcontent-%COMP%] {\n  background: #DCFCE7;\n  border-color: #86EFAC;\n  color: #15803D;\n}\n.inv-wa[_ngcontent-%COMP%]:hover {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.inv-native[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  border-color: var(--primary-border);\n  color: var(--primary);\n}\n.inv-native[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n}\n.inv-native[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: #fff;\n}\n.inv-copy[_ngcontent-%COMP%] {\n  background: var(--white);\n  border-color: var(--border);\n  color: var(--text-secondary);\n}\n.inv-copy[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n}\n.inv-copy[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.inv-steps[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.inv-step[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.inv-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.inv-step-num[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.inv-inline-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  background: var(--primary-bg);\n  padding: 1px 8px;\n  border-radius: 6px;\n}\n@media (max-width: 900px) {\n  .inv-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .inv-card-qr[_ngcontent-%COMP%] {\n    grid-column: span 2;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 24px;\n    align-items: flex-start;\n  }\n  .inv-qr-frame[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .inv-code-section[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 640px) {\n  .inv-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .inv-card-qr[_ngcontent-%COMP%] {\n    grid-column: span 1;\n    flex-direction: column;\n    align-items: center;\n  }\n  .inv-code-section[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=inviter.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviterComponent, [{
    type: Component,
    args: [{ selector: "app-inviter", standalone: false, template: `<div class="page-header">
  <div class="header-row">
    <div>
      <h2>Inviter des membres</h2>
      <p>Partagez le code ou le QR code pour inviter vos proches \xE0 rejoindre <strong>{{ familleNom }}</strong></p>
    </div>
  </div>
</div>

<div class="loading-state" *ngIf="loading">
  <span class="material-icons-round spin">sync</span> Chargement...
</div>

<div class="inv-grid" *ngIf="!loading">

  <!-- QR + CODE -->
  <div class="inv-card inv-card-qr">
    <div class="inv-qr-frame">
      <img [src]="qrUrl" alt="QR code famille" class="inv-qr" *ngIf="familleCode" />
      <p class="inv-qr-caption">Scanner avec l'appareil photo</p>
    </div>
    <div class="inv-or"><span>ou entrer le code</span></div>
    <div class="inv-code-section">
      <p class="inv-label">Code d'acc\xE8s famille</p>
      <div class="inv-code-row">
        <span class="inv-code">{{ familleCode }}</span>
        <button class="inv-icon-btn" (click)="copyCode()" [title]="codeCopied ? 'Copi\xE9 !' : 'Copier'">
          <span class="material-icons-round">{{ codeCopied ? 'check' : 'content_copy' }}</span>
        </button>
      </div>
      <p class="inv-hint" [style.color]="codeCopied ? '#059669' : null">
        {{ codeCopied ? 'Code copi\xE9 !' : '\xC0 entrer dans l\\'app lors de l\\'inscription' }}
      </p>
    </div>
  </div>

  <!-- PARTAGE -->
  <div class="inv-card">
    <h3 class="inv-card-title">
      <span class="material-icons-round">share</span>
      Partager l'invitation
    </h3>
    <p class="inv-card-sub">Envoyez directement \xE0 vos contacts</p>
    <div class="inv-share-list">
      <button class="inv-share-btn inv-wa" (click)="shareWhatsApp()">
        <svg style="width:20px;height:20px;flex-shrink:0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        WhatsApp
      </button>
      <button class="inv-share-btn inv-native" (click)="shareNative()">
        <span class="material-icons-round">ios_share</span>
        Partager via\u2026
      </button>
      <button class="inv-share-btn inv-copy" (click)="copyMessage()">
        <span class="material-icons-round">{{ messageCopied ? 'check' : 'content_copy' }}</span>
        {{ messageCopied ? 'Copi\xE9 !' : 'Copier le message' }}
      </button>
    </div>
  </div>

  <!-- INSTRUCTIONS -->
  <div class="inv-card">
    <h3 class="inv-card-title">
      <span class="material-icons-round">help_outline</span>
      Comment rejoindre ?
    </h3>
    <ol class="inv-steps">
      <li class="inv-step">
        <div class="inv-step-num">1</div>
        <div><strong>T\xE9l\xE9chargez</strong> l'application Mam Buudu</div>
      </li>
      <li class="inv-step">
        <div class="inv-step-num">2</div>
        <div><strong>Cr\xE9ez</strong> votre compte avec nom et num\xE9ro</div>
      </li>
      <li class="inv-step">
        <div class="inv-step-num">3</div>
        <div>Entrez le code <span class="inv-inline-code">{{ familleCode }}</span></div>
      </li>
      <li class="inv-step">
        <div class="inv-step-num">4</div>
        <div><strong>Bienvenue</strong> dans la famille {{ familleNom }} !</div>
      </li>
    </ol>
  </div>

</div>
`, styles: ['/* src/app/pages/inviter/inviter.component.scss */\n.inv-grid {\n  display: grid;\n  grid-template-columns: auto 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n  margin-top: 24px;\n}\n.inv-card {\n  background: var(--white);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: var(--shadow-sm);\n}\n.inv-card-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.inv-card-title .material-icons-round {\n  font-size: 19px !important;\n  color: var(--primary);\n}\n.inv-card-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: -8px 0 0;\n}\n.inv-card-qr {\n  align-items: center;\n  min-width: 260px;\n}\n.inv-qr-frame {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 16px;\n  background: var(--primary-bg);\n  border-radius: var(--radius-lg);\n  border: 1.5px dashed var(--primary-border);\n  width: 100%;\n}\n.inv-qr {\n  width: 180px;\n  height: 180px;\n  border-radius: 10px;\n  display: block;\n}\n.inv-qr-caption {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-align: center;\n  margin: 0;\n}\n.inv-or {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.inv-or::before,\n.inv-or::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border);\n}\n.inv-code-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: center;\n}\n.inv-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n  margin: 0;\n}\n.inv-code-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.inv-code {\n  font-size: 22px;\n  font-weight: 800;\n  font-family: monospace;\n  color: var(--primary);\n  letter-spacing: 3px;\n  background: var(--primary-bg);\n  padding: 8px 16px;\n  border-radius: var(--radius-md);\n}\n.inv-icon-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-md);\n  border: 1.5px solid var(--primary-border);\n  background: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.inv-icon-btn .material-icons-round {\n  font-size: 17px !important;\n  color: var(--primary);\n}\n.inv-icon-btn:hover {\n  background: var(--primary-bg);\n}\n.inv-hint {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin: 0;\n  text-align: center;\n}\n.inv-share-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.inv-share-btn {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  border: 1.5px solid;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.15s;\n}\n.inv-wa {\n  background: #DCFCE7;\n  border-color: #86EFAC;\n  color: #15803D;\n}\n.inv-wa:hover {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.inv-native {\n  background: var(--primary-bg);\n  border-color: var(--primary-border);\n  color: var(--primary);\n}\n.inv-native .material-icons-round {\n  font-size: 19px !important;\n}\n.inv-native:hover {\n  background: var(--primary);\n  color: #fff;\n}\n.inv-copy {\n  background: var(--white);\n  border-color: var(--border);\n  color: var(--text-secondary);\n}\n.inv-copy .material-icons-round {\n  font-size: 19px !important;\n}\n.inv-copy:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.inv-steps {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.inv-step {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.inv-step strong {\n  color: var(--text-primary);\n}\n.inv-step-num {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.inv-inline-code {\n  font-family: monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  background: var(--primary-bg);\n  padding: 1px 8px;\n  border-radius: 6px;\n}\n@media (max-width: 900px) {\n  .inv-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .inv-card-qr {\n    grid-column: span 2;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 24px;\n    align-items: flex-start;\n  }\n  .inv-qr-frame {\n    width: auto;\n  }\n  .inv-code-section {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 640px) {\n  .inv-grid {\n    grid-template-columns: 1fr;\n  }\n  .inv-card-qr {\n    grid-column: span 1;\n    flex-direction: column;\n    align-items: center;\n  }\n  .inv-code-section {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=inviter.component.css.map */\n'] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviterComponent, { className: "InviterComponent", filePath: "src/app/pages/inviter/inviter.component.ts", lineNumber: 10 });
})();

// src/app/shell/shell-routing.module.ts
var routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "personnes", component: PersonnesComponent },
      { path: "tree", component: TreeComponent },
      { path: "stories", component: StoriesComponent },
      { path: "timeline", component: TimelineComponent },
      { path: "jeux", component: JeuxComponent },
      { path: "unions", component: UnionsComponent },
      { path: "admin", component: AdminComponent },
      { path: "profil", component: ProfilComponent },
      { path: "inviter", component: InviterComponent }
    ]
  }
];
var ShellRoutingModule = class _ShellRoutingModule {
  static \u0275fac = function ShellRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ShellRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/shell/shell.module.ts
var ShellModule = class _ShellModule {
  static \u0275fac = function ShellModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ShellModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule, FormsModule, ShellRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellModule, [{
    type: NgModule,
    args: [{
      declarations: [
        ShellComponent,
        SidebarComponent,
        TopbarComponent,
        HomeComponent,
        PersonnesComponent,
        TreeComponent,
        StoriesComponent,
        TimelineComponent,
        JeuxComponent,
        UnionsComponent,
        AdminComponent,
        ProfilComponent,
        InviterComponent
      ],
      imports: [CommonModule, RouterModule, FormsModule, ShellRoutingModule]
    }]
  }], null, null);
})();
export {
  ShellModule
};
//# sourceMappingURL=chunk-U3KDGSUY.js.map
