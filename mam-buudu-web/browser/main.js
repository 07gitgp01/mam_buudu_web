import {
  ToastService
} from "./chunk-2HWSIGP4.js";
import {
  roleGuard
} from "./chunk-4UVP2ZCS.js";
import {
  ApiService,
  LoadingService,
  ServiceWorkerModule,
  ThemeService
} from "./chunk-6LIXAG7Z.js";
import {
  AuthService
} from "./chunk-7NDXYM4W.js";
import {
  AsyncPipe,
  BrowserModule,
  Component,
  HttpErrorResponse,
  NavigationEnd,
  NgForOf,
  NgIf,
  NgModule,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  catchError,
  filter,
  finalize,
  inject,
  isDevMode,
  of,
  platformBrowser,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K4P23IOF.js";
import {
  __spreadValues
} from "./chunk-YP43Q66R.js";

// src/app/core/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  if (auth.isLoggedIn())
    return true;
  inject(Router).navigate(["/auth/login"]);
  return false;
};

// src/app/landing/landing.component.ts
var _c0 = () => ({ mode: "viewonly" });
function LandingComponent_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275listener("click", function LandingComponent_div_15_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.themeMenuOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function LandingComponent_div_15_div_8_button_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function LandingComponent_div_15_div_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 159);
    \u0275\u0275listener("click", function LandingComponent_div_15_div_8_button_1_Template_button_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectTheme(t_r5.name));
    });
    \u0275\u0275element(1, "span", 151);
    \u0275\u0275elementStart(2, "span", 160);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LandingComponent_div_15_div_8_button_1_span_4_Template, 2, 0, "span", 161);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.themeService.current === t_r5.name);
    \u0275\u0275attribute("aria-selected", ctx_r1.themeService.current === t_r5.name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.themeService.current === t_r5.name);
  }
}
function LandingComponent_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275template(1, LandingComponent_div_15_div_8_button_1_Template, 5, 7, "button", 158);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.themeService.themes);
  }
}
function LandingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "button", 150);
    \u0275\u0275listener("click", function LandingComponent_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleThemeMenu());
    });
    \u0275\u0275element(2, "span", 151);
    \u0275\u0275elementStart(3, "span", 152);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 153);
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, LandingComponent_div_15_div_7_Template, 1, 0, "div", 154)(8, LandingComponent_div_15_div_8_Template, 2, 1, "div", 155);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.themeMenuOpen);
    \u0275\u0275attribute("aria-expanded", ctx_r1.themeMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.currentThemeColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentThemeLabel);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.themeMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.themeMenuOpen);
  }
}
function LandingComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 163)(2, "span", 13);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Espace Famille ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 164)(6, "span", 13);
    \u0275\u0275text(7, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Administration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function LandingComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 165)(2, "span", 13);
    \u0275\u0275text(3, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mon espace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 166);
    \u0275\u0275listener("click", function LandingComponent_ng_container_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Se d\xE9connecter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.dashboardRoute);
  }
}
function LandingComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 167);
    \u0275\u0275listener("click", function LandingComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function LandingComponent_div_52_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 172);
    \u0275\u0275listener("click", function LandingComponent_div_52_button_4_Template_button_click_0_listener() {
      const t_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTheme(t_r9.name));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", t_r9.color);
    \u0275\u0275classProp("active", ctx_r1.themeService.current === t_r9.name);
    \u0275\u0275property("title", t_r9.label);
  }
}
function LandingComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "span", 169);
    \u0275\u0275text(2, "Th\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 170);
    \u0275\u0275template(4, LandingComponent_div_52_button_4_Template, 1, 5, "button", 171);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.themeService.themes);
  }
}
function LandingComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 173);
    \u0275\u0275listener("click", function LandingComponent_ng_container_54_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Espace Famille ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 174);
    \u0275\u0275listener("click", function LandingComponent_ng_container_54_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Administration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function LandingComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 175);
    \u0275\u0275listener("click", function LandingComponent_ng_container_55_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Mon espace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 176);
    \u0275\u0275listener("click", function LandingComponent_ng_container_55_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.logout();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Se d\xE9connecter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.dashboardRoute);
  }
}
function LandingComponent_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 177)(2, "div", 178)(3, "span", 13);
    \u0275\u0275text(4, "family_restroom");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 179)(6, "strong");
    \u0275\u0275text(7, "Espace Famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Pour les membres de la famille");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 180);
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 181)(13, "div", 182)(14, "span", 13);
    \u0275\u0275text(15, "admin_panel_settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 179)(17, "strong");
    \u0275\u0275text(18, "Espace Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Pour les gestionnaires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 180);
    \u0275\u0275text(22, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function LandingComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 183)(2, "div", 178)(3, "span", 13);
    \u0275\u0275text(4, "dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 179)(6, "strong");
    \u0275\u0275text(7, "Retour \xE0 mon espace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 180);
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 184);
    \u0275\u0275listener("click", function LandingComponent_ng_container_82_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(13, "div", 182)(14, "span", 13);
    \u0275\u0275text(15, "logout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 179)(17, "strong");
    \u0275\u0275text(18, "Se d\xE9connecter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Quitter la session");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 180);
    \u0275\u0275text(22, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.dashboardRoute);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.userName);
  }
}
function LandingComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 185)(1, "div", 186)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", f_r13.color + "18");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", f_r13.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r13.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r13.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r13.desc);
  }
}
function LandingComponent_section_193_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 199);
    \u0275\u0275text(1, "Le plus populaire");
    \u0275\u0275elementEnd();
  }
}
function LandingComponent_section_193_div_10_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 200);
    \u0275\u0275text(1, "/an");
    \u0275\u0275elementEnd();
  }
}
function LandingComponent_section_193_div_10_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 13);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", f_r14, " ");
  }
}
function LandingComponent_section_193_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190);
    \u0275\u0275template(1, LandingComponent_section_193_div_10_span_1_Template, 2, 0, "span", 191);
    \u0275\u0275elementStart(2, "h3", 192);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 193)(5, "span", 194);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LandingComponent_section_193_div_10_span_7_Template, 2, 0, "span", 195);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul", 196);
    \u0275\u0275template(9, LandingComponent_section_193_div_10_li_9_Template, 4, 1, "li", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 198);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("price-card-highlight", p_r15.nom === "premium");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r15.nom === "premium");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r15.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatPrix(p_r15));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r15.prix > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", p_r15.features);
    \u0275\u0275advance();
    \u0275\u0275classProp("price-cta-primary", p_r15.nom === "premium");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r15.prix === 0 ? "Commencer gratuitement" : "Choisir ce plan", " ");
  }
}
function LandingComponent_section_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 187)(1, "div", 83)(2, "div", 84)(3, "span", 85);
    \u0275\u0275text(4, "Tarifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Un plan pour chaque famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Commencez gratuitement, \xE9voluez quand votre arbre grandit. Sans engagement.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 188);
    \u0275\u0275template(10, LandingComponent_section_193_div_10_Template, 12, 10, "div", 189);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.plans);
  }
}
function LandingComponent_div_204_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201)(1, "div", 202)(2, "div", 203);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 204);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 205)(8, "span", 13);
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 206)(12, "div", 207)(13, "span", 208);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 209);
    \u0275\u0275text(16, "Membres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 207)(18, "span", 208);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 209);
    \u0275\u0275text(21, "G\xE9n\xE9rations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 207)(23, "span", 208);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 209);
    \u0275\u0275text(26, "Unions");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", f_r16.color + "22")("color", f_r16.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r16.initiale);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Famille ", f_r16.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r16.origine);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", f_r16.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r16.membres);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", f_r16.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r16.generations);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", f_r16.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r16.unions);
  }
}
function LandingComponent_div_214_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 220);
    \u0275\u0275listener("click", function LandingComponent_div_214_button_15_Template_button_click_0_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToSlide(i_r18));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r18 === ctx_r1.currentSlide);
  }
}
function LandingComponent_div_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 210)(1, "div", 211)(2, "span", 212);
    \u0275\u0275text(3, "format_quote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 213);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 214)(7, "div", 215);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "div", 216);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 217);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 218);
    \u0275\u0275template(15, LandingComponent_div_214_button_15_Template, 1, 2, "button", 219);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r19 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r19.texte);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", t_r19.color + "33")("color", t_r19.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r19.initiale);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r19.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r19.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.testimonials);
  }
}
function LandingComponent_div_266_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 227)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r22.reponse);
  }
}
function LandingComponent_div_266_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 221)(1, "button", 222);
    \u0275\u0275listener("click", function LandingComponent_div_266_Template_button_click_1_listener() {
      const i_r21 = \u0275\u0275restoreView(_r20).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFaq(i_r21));
    });
    \u0275\u0275elementStart(2, "span", 223);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 224);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 225);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, LandingComponent_div_266_div_8_Template, 3, 1, "div", 226);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r22 = ctx.$implicit;
    const i_r21 = ctx.index;
    \u0275\u0275classProp("open", f_r22.open);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (i_r21 + 1).toString().padStart(2, "0"), "/");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r22.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r22.open ? "remove" : "add");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r22.open);
  }
}
var LandingComponent = class _LandingComponent {
  auth;
  router;
  api;
  themeService;
  constructor(auth, router, api, themeService) {
    this.auth = auth;
    this.router = router;
    this.api = api;
    this.themeService = themeService;
  }
  /* ---- Sélecteur de thème ---- */
  themeMenuOpen = false;
  get currentThemeColor() {
    return this.themeService.themes.find((t) => t.name === this.themeService.current)?.color ?? "#15803D";
  }
  get currentThemeLabel() {
    return this.themeService.themes.find((t) => t.name === this.themeService.current)?.label ?? "Th\xE8me";
  }
  toggleThemeMenu() {
    this.themeMenuOpen = !this.themeMenuOpen;
  }
  selectTheme(name) {
    this.themeService.applyColor(name);
    this.themeMenuOpen = false;
  }
  /* ---- Stats animés ---- */
  stats = { familles: 0, membres: 0, unions: 0, stories: 0 };
  targets = { familles: 420, membres: 18500, unions: 6200, stories: 34e3 };
  interval = null;
  /* ---- Carousel témoignages ---- */
  currentSlide = 0;
  slideTimer = null;
  familles = [
    { nom: "Diallo", initiale: "D", membres: 127, generations: 5, unions: 38, origine: "Guin\xE9e", color: "#3B82F6" },
    { nom: "Konat\xE9", initiale: "K", membres: 83, generations: 4, unions: 25, origine: "Mali", color: "#8B5CF6" },
    { nom: "Bald\xE9", initiale: "B", membres: 61, generations: 3, unions: 18, origine: "S\xE9n\xE9gal", color: "#EC4899" },
    { nom: "Traor\xE9", initiale: "T", membres: 204, generations: 6, unions: 61, origine: "C\xF4te d'Ivoire", color: "#F59E0B" },
    { nom: "Coulibaly", initiale: "C", membres: 95, generations: 4, unions: 29, origine: "Burkina", color: "#10B981" },
    { nom: "Camara", initiale: "C", membres: 48, generations: 3, unions: 14, origine: "Sierra Leone", color: "#6366F1" }
  ];
  testimonials = [
    {
      nom: "Ibrahim Diallo",
      initiale: "ID",
      color: "#3B82F6",
      role: "P\xE8re de famille, Conakry",
      texte: "Mam Buudu a r\xE9volutionn\xE9 la fa\xE7on dont notre famille pr\xE9serve son histoire. En quelques clics, mes enfants peuvent explorer cinq g\xE9n\xE9rations d'anc\xEAtres. C'est un cadeau extraordinaire."
    },
    {
      nom: "Fatoumata Konat\xE9",
      initiale: "FK",
      color: "#EC4899",
      role: "Enseignante, Bamako",
      texte: "L'arbre g\xE9n\xE9alogique est tellement beau et intuitif ! Toute la famille a \xE9t\xE9 \xE9merveill\xE9e lors de notre r\xE9union annuelle. Mes tantes de 80 ans ont retrouv\xE9 des cousins perdus de vue depuis 30 ans."
    },
    {
      nom: "Oumar Bald\xE9",
      initiale: "OB",
      color: "#8B5CF6",
      role: "Ing\xE9nieur, Dakar",
      texte: "La fonctionnalit\xE9 de synchronisation est parfaite. Mon fr\xE8re \xE0 Paris, ma s\u0153ur \xE0 Montr\xE9al et moi \xE0 Dakar \u2014 on met tous \xE0 jour l'arbre en temps r\xE9el. Notre famille est plus connect\xE9e que jamais."
    },
    {
      nom: "Mariama Traor\xE9",
      initiale: "MT",
      color: "#F59E0B",
      role: "M\xE9decin, Abidjan",
      texte: "Les stories familiales sont une fonctionnalit\xE9 magnifique. Grand-m\xE8re a pu partager ses souvenirs et recettes traditionnelles. Ces moments sont d\xE9sormais pr\xE9serv\xE9s pour nos petits-enfants."
    }
  ];
  features = [
    { icon: "account_tree", title: "Arbre g\xE9n\xE9alogique", desc: "Visualisez votre famille sur plusieurs g\xE9n\xE9rations avec un arbre interactif et \xE9l\xE9gant.", color: "#3B82F6" },
    { icon: "auto_stories", title: "Stories familiales", desc: "Partagez photos, anecdotes et traditions. Vos souvenirs racont\xE9s et pr\xE9serv\xE9s pour toujours.", color: "#8B5CF6" },
    { icon: "timeline", title: "Ligne du temps", desc: "Revivez les grands moments : naissances, mariages, accomplissements. Une histoire vivante.", color: "#EC4899" },
    { icon: "lock", title: "Priv\xE9 & S\xE9curis\xE9", desc: "Vos donn\xE9es familiales sont chiffr\xE9es et accessibles uniquement aux membres invit\xE9s.", color: "#10B981" },
    { icon: "phone_android", title: "Application mobile", desc: "Disponible sur Android et iOS. Votre famille dans votre poche, o\xF9 que vous soyez.", color: "#F59E0B" },
    { icon: "group_add", title: "Multi-r\xF4les", desc: "Administrateurs, gestionnaires, membres \u2014 chaque r\xF4le adapt\xE9 \xE0 ses besoins.", color: "#6366F1" }
  ];
  /* ---- Tarifs ---- */
  plans = [];
  /* ---- FAQ ---- */
  faqs = [
    {
      question: "Qu'est-ce que Mam Buudu ?",
      reponse: "Mam Buudu est une plateforme de g\xE9n\xE9alogie familiale qui vous permet de construire l'arbre de votre famille, de partager des stories et souvenirs, et de suivre les \xE9v\xE9nements marquants \u2014 accessible en ligne comme hors ligne.",
      open: true
    },
    {
      question: "Combien de membres puis-je ajouter gratuitement ?",
      reponse: "Le plan Gratuit permet de cr\xE9er un arbre jusqu'\xE0 50 membres, avec l'ensemble des fonctionnalit\xE9s de base (stories, export, notifications d'anniversaires).",
      open: false
    },
    {
      question: "Mes donn\xE9es familiales sont-elles priv\xE9es ?",
      reponse: "Oui. L'arbre de votre famille est priv\xE9 par d\xE9faut et accessible uniquement aux membres que vous invitez. Vous g\xE9rez qui peut voir et modifier chaque information.",
      open: false
    },
    {
      question: "Puis-je inviter les membres de ma famille ?",
      reponse: "Oui, chaque famille dispose d'un code unique \xE0 partager. Les membres invit\xE9s rejoignent l'espace famille avec leur propre compte et un r\xF4le adapt\xE9 (gestionnaire ou membre).",
      open: false
    },
    {
      question: "Puis-je changer de plan \xE0 tout moment ?",
      reponse: "Oui, vous pouvez passer \xE0 un plan sup\xE9rieur d\xE8s que votre famille grandit, directement depuis votre espace administrateur.",
      open: false
    }
  ];
  get allFaqOpen() {
    return this.faqs.every((f) => f.open);
  }
  toggleFaq(i) {
    this.faqs[i].open = !this.faqs[i].open;
  }
  setAllFaq(open) {
    this.faqs.forEach((f) => f.open = open);
  }
  formatPrix(plan) {
    if (plan.prix === 0)
      return "Gratuit";
    return `${plan.prix.toLocaleString("fr-FR")} FCFA`;
  }
  navOpen = false;
  get isLoggedIn() {
    return this.auth.isLoggedIn();
  }
  get dashboardRoute() {
    const role = this.auth.getUser()?.role ?? "";
    return role === "admin" || role === "gestionnaire" ? "/app/home" : "/famille";
  }
  get userName() {
    const u = this.auth.getUser();
    return u ? `${u.prenom} ${u.nom}` : "";
  }
  logout() {
    this.auth.logout();
  }
  ngOnInit() {
    this.animateCounters();
    this.startSlideTimer();
    this.api.getPlans().pipe(catchError(() => of([]))).subscribe((plans) => this.plans = plans);
  }
  ngOnDestroy() {
    if (this.interval)
      clearInterval(this.interval);
    if (this.slideTimer)
      clearInterval(this.slideTimer);
  }
  animateCounters() {
    const duration = 2e3;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;
    this.interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      this.stats.familles = Math.round(this.targets.familles * eased);
      this.stats.membres = Math.round(this.targets.membres * eased);
      this.stats.unions = Math.round(this.targets.unions * eased);
      this.stats.stories = Math.round(this.targets.stories * eased);
      if (step >= steps) {
        this.stats = __spreadValues({}, this.targets);
        clearInterval(this.interval);
      }
    }, stepTime);
  }
  startSlideTimer() {
    this.slideTimer = setInterval(() => {
      this.nextSlide();
    }, 5e3);
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }
  goToSlide(i) {
    this.currentSlide = i;
  }
  formatStat(n) {
    if (n >= 1e3)
      return (n / 1e3).toFixed(1).replace(".0", "") + "k";
    return n.toString();
  }
  static \u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], standalone: false, decls: 308, vars: 26, consts: [[1, "landing-nav"], ["routerLink", "/", 1, "nav-logo"], ["src", "images/logobg.png", "alt", "Mam Buudu", 1, "nav-logo-img"], [1, "nav-links"], ["href", "#features", 1, "nav-link"], ["href", "#familles", 1, "nav-link"], ["href", "#tarifs", 1, "nav-link"], ["href", "#temoignages", 1, "nav-link"], ["href", "#faq", 1, "nav-link"], [1, "nav-actions"], ["class", "theme-switch", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Menu", 1, "nav-hamburger", 3, "click"], [1, "material-icons-round"], ["class", "nav-mobile-overlay", 3, "click", 4, "ngIf"], [1, "nav-mobile-sheet"], [1, "nms-header"], [1, "nav-logo", "nms-logo"], ["src", "images/favicon-192.png", "width", "24", "height", "24", "alt", "Mam Buudu"], [1, "nms-close", 3, "click"], [1, "nms-links"], ["href", "#features", 1, "nms-link", 3, "click"], ["href", "#familles", 1, "nms-link", 3, "click"], ["href", "#tarifs", 1, "nms-link", 3, "click"], ["href", "#temoignages", 1, "nms-link", 3, "click"], ["href", "#faq", 1, "nms-link", 3, "click"], ["class", "nms-theme-picker", 4, "ngIf"], [1, "nms-actions"], [1, "hero"], [1, "hero-sparks"], [1, "spark", 2, "left", "12%", "animation-delay", "0s"], [1, "spark", 2, "left", "24%", "animation-delay", "1.4s", "width", "4px", "height", "4px"], [1, "spark", 2, "left", "38%", "animation-delay", "2.6s"], [1, "spark", 2, "left", "55%", "animation-delay", "0.7s", "width", "4px", "height", "4px"], [1, "spark", 2, "left", "68%", "animation-delay", "3.4s"], [1, "spark", 2, "left", "81%", "animation-delay", "1.9s", "width", "4px", "height", "4px"], [1, "hero-inner"], [1, "hero-badge", "fade-up-1"], [1, "hero-title", "fade-up-2"], [1, "accent"], [1, "hero-sub", "fade-up-3"], [1, "hero-entries", "fade-up-4"], [1, "hero-tree-wrap"], ["width", "480", "height", "560", "viewBox", "0 0 480 560", "fill", "none"], ["d", "M240 520 C 220 500, 200 495, 175 505", "stroke", "#8B4513", "stroke-width", "3", "fill", "none", "opacity", "0.55", 1, "tree-line", "g-root"], ["d", "M240 520 C 260 500, 280 495, 305 505", "stroke", "#8B4513", "stroke-width", "3", "fill", "none", "opacity", "0.55", 1, "tree-line", "g-root"], ["d", "M240 520 L 240 545", "stroke", "#8B4513", "stroke-width", "4", "opacity", "0.55", 1, "tree-line", "g-root"], ["d", "M240 520 L 240 400", "stroke", "#8B4513", "stroke-width", "7", "stroke-linecap", "round", 1, "tree-line", "g-trunk"], ["d", "M240 400 C 210 380, 180 365, 150 340", "stroke", "#8B4513", "stroke-width", "5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-trunk"], ["d", "M240 400 C 270 380, 300 365, 330 340", "stroke", "#8B4513", "stroke-width", "5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-trunk"], ["d", "M240 400 L 240 330", "stroke", "#8B4513", "stroke-width", "5", "stroke-linecap", "round", 1, "tree-line", "g-trunk"], ["d", "M150 340 C 130 315, 115 300, 95 280", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M150 340 C 155 310, 150 290, 140 265", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M330 340 C 350 315, 365 300, 385 280", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M330 340 C 325 310, 330 290, 340 265", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M240 330 C 225 305, 225 290, 235 265", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M240 330 C 255 305, 255 290, 245 265", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-1"], ["d", "M95 280 C 85 260, 82 245, 88 225", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M140 265 C 135 245, 138 230, 148 210", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M385 280 C 395 260, 398 245, 392 225", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M340 265 C 345 245, 342 230, 332 210", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M235 265 C 225 240, 228 222, 220 200", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["d", "M245 265 C 255 240, 252 222, 260 200", "stroke", "#8B4513", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round", 1, "tree-line", "g-2"], ["cx", "88", "cy", "220", "r", "16", "fill", "#2E7D32", 1, "leaf", 2, "animation-delay", "1.4s, 1.9s"], ["cx", "148", "cy", "205", "r", "14", "fill", "#81C784", 1, "leaf", 2, "animation-delay", "1.5s, 2.1s"], ["cx", "220", "cy", "196", "r", "16", "fill", "#2E7D32", 1, "leaf", 2, "animation-delay", "1.6s, 1.7s"], ["cx", "260", "cy", "196", "r", "14", "fill", "#81C784", 1, "leaf", 2, "animation-delay", "1.65s, 2.4s"], ["cx", "332", "cy", "205", "r", "14", "fill", "#2E7D32", 1, "leaf", 2, "animation-delay", "1.55s, 2.0s"], ["cx", "392", "cy", "220", "r", "16", "fill", "#81C784", 1, "leaf", 2, "animation-delay", "1.45s, 1.85s"], ["cx", "95", "cy", "280", "r", "9", "fill", "#3B82F6", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "1.0s, 2.6s"], ["cx", "140", "cy", "265", "r", "8", "fill", "#EC4899", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "1.05s, 2.2s"], ["cx", "240", "cy", "330", "r", "9", "fill", "#F59E0B", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "0.75s, 2.8s"], ["cx", "340", "cy", "265", "r", "8", "fill", "#EC4899", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "1.05s, 2.35s"], ["cx", "385", "cy", "280", "r", "9", "fill", "#3B82F6", "opacity", "0.85", 1, "leaf", 2, "animation-delay", "1.0s, 1.95s"], ["cx", "150", "cy", "340", "r", "10", "fill", "#8B5CF6", "opacity", "0.9", 1, "leaf", 2, "animation-delay", "0.65s, 3.0s"], ["cx", "330", "cy", "340", "r", "10", "fill", "#8B5CF6", "opacity", "0.9", 1, "leaf", 2, "animation-delay", "0.65s, 2.5s"], [1, "stats-section"], [1, "container", "stats-grid"], [1, "stat-box"], [1, "stat-icon"], [1, "stat-number"], [1, "stat-label"], [1, "solution"], [1, "container"], [1, "sec-head"], [1, "sec-tag"], [1, "sol-grid"], [1, "sol-card"], [1, "sol-icon"], ["id", "features", 1, "features"], [1, "feat-layout"], [1, "feat-left"], [1, "feat-grid"], ["class", "feat-card", 4, "ngFor", "ngForOf"], ["class", "pricing", "id", "tarifs", 4, "ngIf"], ["id", "familles", 1, "familles"], [1, "fam-grid"], ["class", "fam-card", 4, "ngFor", "ngForOf"], ["id", "temoignages", 1, "testimonials"], [1, "sec-tag", "sec-tag-dark"], ["class", "testi-wrap", 4, "ngIf"], [1, "mobile-download"], [1, "container", "mobile-download-inner"], [1, "mdl-text"], [1, "mdl-badges"], [1, "store-badge", "store-badge-soon"], [1, "store-badge-text"], [1, "mdl-visual"], ["width", "220", "height", "300", "viewBox", "0 0 220 300", "fill", "none"], ["x", "10", "y", "10", "width", "200", "height", "280", "rx", "28", "fill", "#0F2A1E", "stroke", "#123B27", "stroke-width", "2"], ["x", "20", "y", "34", "width", "180", "height", "232", "rx", "10", "fill", "#F0FDF4"], ["cx", "110", "cy", "22", "r", "3", "fill", "#123B27"], ["cx", "60", "cy", "90", "r", "16", "fill", "#81C784"], ["cx", "110", "cy", "70", "r", "20", "fill", "#2E7D32"], ["cx", "160", "cy", "90", "r", "16", "fill", "#81C784"], ["d", "M60 106 L60 140 M110 90 L110 140 M160 106 L160 140", "stroke", "#8B4513", "stroke-width", "3"], ["d", "M60 140 L110 140 L160 140", "stroke", "#8B4513", "stroke-width", "3"], ["x", "40", "y", "150", "width", "140", "height", "10", "rx", "5", "fill", "#DCFCE7"], ["x", "40", "y", "170", "width", "100", "height", "10", "rx", "5", "fill", "#DCFCE7"], ["x", "40", "y", "190", "width", "120", "height", "10", "rx", "5", "fill", "#DCFCE7"], ["id", "faq", 1, "faq"], [1, "faq-head"], [1, "faq-toggle-all"], [1, "faq-toggle-btn", 3, "click"], [1, "faq-toggle-btn", 3, "click", "disabled"], [1, "faq-list"], ["class", "faq-item", 3, "open", 4, "ngFor", "ngForOf"], [1, "cta"], [1, "cta-box"], [1, "cta-actions"], ["routerLink", "/auth/login", 1, "cta-btn", "cta-btn-primary", 3, "queryParams"], ["routerLink", "/auth/login", 1, "cta-btn", "cta-btn-ghost"], [1, "landing-footer"], [1, "container", "footer-inner"], [1, "footer-brand"], ["width", "18", "height", "18", "viewBox", "0 0 120 120", "fill", "none"], ["x", "50", "y", "60", "width", "20", "height", "40", "fill", "#8B4513", "rx", "2"], ["d", "M60 60 L40 40", "stroke", "#8B4513", "stroke-width", "6", "stroke-linecap", "round"], ["d", "M60 60 L80 40", "stroke", "#8B4513", "stroke-width", "6", "stroke-linecap", "round"], ["cx", "35", "cy", "35", "r", "10", "fill", "#2E7D32"], ["cx", "85", "cy", "35", "r", "10", "fill", "#2E7D32"], ["cx", "60", "cy", "25", "r", "10", "fill", "#81C784"], [1, "footer-sep"], [1, "footer-by"], [1, "footer-links"], ["routerLink", "/auth/login", 3, "queryParams"], ["routerLink", "/auth/login"], ["routerLink", "/auth/register"], [1, "footer-copy"], [1, "theme-switch"], ["aria-haspopup", "listbox", 1, "theme-switch-btn", 3, "click"], [1, "theme-switch-dot"], [1, "theme-switch-name"], [1, "material-icons-round", "theme-switch-chevron"], ["class", "theme-switch-overlay", 3, "click", 4, "ngIf"], ["class", "theme-switch-menu", "role", "listbox", 4, "ngIf"], [1, "theme-switch-overlay", 3, "click"], ["role", "listbox", 1, "theme-switch-menu"], ["class", "theme-switch-option", "role", "option", 3, "active", "click", 4, "ngFor", "ngForOf"], ["role", "option", 1, "theme-switch-option", 3, "click"], [1, "theme-switch-label"], ["class", "material-icons-round theme-switch-check", 4, "ngIf"], [1, "material-icons-round", "theme-switch-check"], ["routerLink", "/auth/login", 1, "btn-nav-famille", 3, "queryParams"], ["routerLink", "/auth/login", 1, "btn-nav-admin"], [1, "btn-nav-famille", 3, "routerLink"], [1, "btn-nav-logout", 3, "click"], [1, "nav-mobile-overlay", 3, "click"], [1, "nms-theme-picker"], [1, "nms-theme-label"], [1, "nms-theme-dots"], ["class", "nms-theme-dot", 3, "background", "active", "title", "click", 4, "ngFor", "ngForOf"], [1, "nms-theme-dot", 3, "click", "title"], ["routerLink", "/auth/login", 1, "nms-btn", "nms-btn-famille", 3, "click", "queryParams"], ["routerLink", "/auth/login", 1, "nms-btn", "nms-btn-admin", 3, "click"], [1, "nms-btn", "nms-btn-famille", 3, "click", "routerLink"], [1, "nms-btn", "nms-btn-logout", 3, "click"], ["routerLink", "/auth/login", 1, "entry-card", 3, "queryParams"], [1, "entry-icon", "famille"], [1, "entry-info"], [1, "material-icons-round", "arrow"], ["routerLink", "/auth/login", 1, "entry-card"], [1, "entry-icon", "admin"], [1, "entry-card", 3, "routerLink"], [1, "entry-card", 3, "click"], [1, "feat-card"], [1, "feat-icon"], ["id", "tarifs", 1, "pricing"], [1, "pricing-grid"], ["class", "price-card", 3, "price-card-highlight", 4, "ngFor", "ngForOf"], [1, "price-card"], ["class", "price-badge", 4, "ngIf"], [1, "price-label"], [1, "price-value"], [1, "price-amount"], ["class", "price-period", 4, "ngIf"], [1, "price-features"], [4, "ngFor", "ngForOf"], ["routerLink", "/auth/register", 1, "price-cta"], [1, "price-badge"], [1, "price-period"], [1, "fam-card"], [1, "fam-head"], [1, "fam-avatar"], [1, "fam-name"], [1, "fam-origin"], [1, "fam-stats"], [1, "fam-stat"], [1, "fam-stat-val"], [1, "fam-stat-label"], [1, "testi-wrap"], [1, "testi-card"], [1, "material-icons-round", "testi-quote-icon"], [1, "testi-text"], [1, "testi-author"], [1, "testi-avatar"], [1, "testi-name"], [1, "testi-role"], [1, "testi-dots"], ["class", "testi-dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "testi-dot", 3, "click"], [1, "faq-item"], [1, "faq-question", 3, "click"], [1, "faq-num"], [1, "faq-question-text"], [1, "material-icons-round", "faq-icon"], ["class", "faq-answer", 4, "ngIf"], [1, "faq-answer"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "a", 4);
      \u0275\u0275text(5, "Fonctionnalit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 5);
      \u0275\u0275text(7, "Familles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 6);
      \u0275\u0275text(9, "Tarifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 7);
      \u0275\u0275text(11, "T\xE9moignages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275text(13, "FAQ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275template(15, LandingComponent_div_15_Template, 9, 8, "div", 10)(16, LandingComponent_ng_container_16_Template, 9, 2, "ng-container", 11)(17, LandingComponent_ng_container_17_Template, 9, 1, "ng-container", 11);
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_18_listener() {
        return ctx.navOpen = !ctx.navOpen;
      });
      \u0275\u0275elementStart(19, "span", 13);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, LandingComponent_div_21_Template, 1, 0, "div", 14);
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "div", 17);
      \u0275\u0275element(25, "img", 18);
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 19);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_28_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(29, "span", 13);
      \u0275\u0275text(30, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 20)(32, "a", 21);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_32_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(33, "span", 13);
      \u0275\u0275text(34, "star");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, "Fonctionnalit\xE9s ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 22);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_36_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(37, "span", 13);
      \u0275\u0275text(38, "family_restroom");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, "Familles ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 23);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_40_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(41, "span", 13);
      \u0275\u0275text(42, "sell");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, "Tarifs ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 24);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_44_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(45, "span", 13);
      \u0275\u0275text(46, "format_quote");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, "T\xE9moignages ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 25);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_48_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(49, "span", 13);
      \u0275\u0275text(50, "help_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, "FAQ ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(52, LandingComponent_div_52_Template, 5, 1, "div", 26);
      \u0275\u0275elementStart(53, "div", 27);
      \u0275\u0275template(54, LandingComponent_ng_container_54_Template, 9, 2, "ng-container", 11)(55, LandingComponent_ng_container_55_Template, 9, 1, "ng-container", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "section", 28)(57, "div", 29);
      \u0275\u0275element(58, "div", 30)(59, "div", 31)(60, "div", 32)(61, "div", 33)(62, "div", 34)(63, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 36)(65, "div")(66, "span", 37)(67, "span", 13);
      \u0275\u0275text(68, "auto_awesome");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " Application g\xE9n\xE9alogique africaine ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "h1", 38);
      \u0275\u0275text(71, " L'histoire de votre");
      \u0275\u0275element(72, "br");
      \u0275\u0275elementStart(73, "span", 39);
      \u0275\u0275text(74, "famille");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, ",");
      \u0275\u0275element(76, "br");
      \u0275\u0275text(77, " pr\xE9serv\xE9e pour toujours ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p", 40);
      \u0275\u0275text(79, " Construisez l'arbre g\xE9n\xE9alogique de votre famille, partagez vos stories et connectez les g\xE9n\xE9rations \xE0 travers le temps. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 41);
      \u0275\u0275template(81, LandingComponent_ng_container_81_Template, 23, 2, "ng-container", 11)(82, LandingComponent_ng_container_82_Template, 23, 2, "ng-container", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 42);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(84, "svg", 43);
      \u0275\u0275element(85, "path", 44)(86, "path", 45)(87, "path", 46)(88, "path", 47)(89, "path", 48)(90, "path", 49)(91, "path", 50)(92, "path", 51)(93, "path", 52)(94, "path", 53)(95, "path", 54)(96, "path", 55)(97, "path", 56)(98, "path", 57)(99, "path", 58)(100, "path", 59)(101, "path", 60)(102, "path", 61)(103, "path", 62)(104, "circle", 63)(105, "circle", 64)(106, "circle", 65)(107, "circle", 66)(108, "circle", 67)(109, "circle", 68)(110, "circle", 69)(111, "circle", 70)(112, "circle", 71)(113, "circle", 72)(114, "circle", 73)(115, "circle", 74)(116, "circle", 75);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(117, "section", 76)(118, "div", 77)(119, "div", 78)(120, "div", 79)(121, "span", 13);
      \u0275\u0275text(122, "family_restroom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div")(124, "div", 80);
      \u0275\u0275text(125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 81);
      \u0275\u0275text(127, "Familles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 78)(129, "div", 79)(130, "span", 13);
      \u0275\u0275text(131, "people");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div")(133, "div", 80);
      \u0275\u0275text(134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 81);
      \u0275\u0275text(136, "Membres");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 78)(138, "div", 79)(139, "span", 13);
      \u0275\u0275text(140, "favorite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div")(142, "div", 80);
      \u0275\u0275text(143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 81);
      \u0275\u0275text(145, "Unions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "div", 78)(147, "div", 79)(148, "span", 13);
      \u0275\u0275text(149, "auto_stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div")(151, "div", 80);
      \u0275\u0275text(152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 81);
      \u0275\u0275text(154, "Stories");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(155, "section", 82)(156, "div", 83)(157, "div", 84)(158, "span", 85);
      \u0275\u0275text(159, "Notre solution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "h2");
      \u0275\u0275text(161, "Mam Buudu simplifie la g\xE9n\xE9alogie, pour toutes les familles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p");
      \u0275\u0275text(163, "De la cr\xE9ation de l'arbre au partage des stories \u2014 une solution compl\xE8te, accessible en ligne ou hors ligne.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 86)(165, "div", 87)(166, "div", 88)(167, "span", 13);
      \u0275\u0275text(168, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "h3");
      \u0275\u0275text(170, "Sans code, sans effort");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "p");
      \u0275\u0275text(172, "Construisez votre arbre g\xE9n\xE9alogique facilement, sans aucune comp\xE9tence technique. En ligne ou hors ligne.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 87)(174, "div", 88)(175, "span", 13);
      \u0275\u0275text(176, "share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "h3");
      \u0275\u0275text(178, "Partage en famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p");
      \u0275\u0275text(180, "Invitez les membres, partagez les stories et connectez les g\xE9n\xE9rations en temps r\xE9el, depuis n'importe o\xF9.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(181, "section", 89)(182, "div", 83)(183, "div", 90)(184, "div", 91)(185, "span", 85);
      \u0275\u0275text(186, "Bienvenue sur Mam Buudu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "h2");
      \u0275\u0275text(188, "G\xE9n\xE9alogie nouvelle g\xE9n\xE9ration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p");
      \u0275\u0275text(190, "Construite pour \xE9quiper chaque famille d'outils modernes pour pr\xE9server et partager leur histoire. Nous rempla\xE7ons les albums \xE9parpill\xE9s et la m\xE9moire orale par une plateforme num\xE9rique s\xE9curis\xE9e, accessible \xE0 toute la famille.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 92);
      \u0275\u0275template(192, LandingComponent_div_192_Template, 8, 7, "div", 93);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(193, LandingComponent_section_193_Template, 11, 1, "section", 94);
      \u0275\u0275elementStart(194, "section", 95)(195, "div", 83)(196, "div", 84)(197, "span", 85);
      \u0275\u0275text(198, "Familles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "h2");
      \u0275\u0275text(200, "Des familles qui nous font confiance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "p");
      \u0275\u0275text(202, "Rejoignez des centaines de familles qui ont choisi Mam Buudu pour pr\xE9server leur patrimoine.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "div", 96);
      \u0275\u0275template(204, LandingComponent_div_204_Template, 27, 16, "div", 97);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "section", 98)(206, "div", 83)(207, "div", 84)(208, "span", 99);
      \u0275\u0275text(209, "T\xE9moignages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "h2");
      \u0275\u0275text(211, "Ce que disent nos utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "p");
      \u0275\u0275text(213, "Ils ont choisi Mam Buudu pour connecter leur famille \xE0 travers les g\xE9n\xE9rations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(214, LandingComponent_div_214_Template, 16, 9, "div", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "section", 101)(216, "div", 102)(217, "div", 103)(218, "span", 85);
      \u0275\u0275text(219, "Application mobile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "h2");
      \u0275\u0275text(221, "Emportez l'arbre de votre famille partout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "p");
      \u0275\u0275text(223, "L'application mobile Mam Buudu est en cours de finalisation pour Android et iOS \u2014 retrouvez votre arbre, vos stories et vos proches, m\xEAme hors connexion.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "div", 104)(225, "span", 105)(226, "span", 13);
      \u0275\u0275text(227, "apple");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "span", 106)(229, "small");
      \u0275\u0275text(230, "Bient\xF4t sur");
      \u0275\u0275elementEnd();
      \u0275\u0275text(231, "App Store");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "span", 105)(233, "span", 13);
      \u0275\u0275text(234, "shop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "span", 106)(236, "small");
      \u0275\u0275text(237, "Bient\xF4t sur");
      \u0275\u0275elementEnd();
      \u0275\u0275text(238, "Google Play");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(239, "div", 107);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(240, "svg", 108);
      \u0275\u0275element(241, "rect", 109)(242, "rect", 110)(243, "circle", 111)(244, "circle", 112)(245, "circle", 113)(246, "circle", 114)(247, "path", 115)(248, "path", 116)(249, "rect", 117)(250, "rect", 118)(251, "rect", 119);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(252, "section", 120)(253, "div", 83)(254, "div", 121)(255, "div")(256, "span", 85);
      \u0275\u0275text(257, "FAQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "h2");
      \u0275\u0275text(259, "Foire aux questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 122)(261, "button", 123);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_261_listener() {
        return ctx.setAllFaq(true);
      });
      \u0275\u0275text(262, "D\xE9velopper tout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "button", 124);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_263_listener() {
        return ctx.setAllFaq(false);
      });
      \u0275\u0275text(264, "R\xE9duire tout");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(265, "div", 125);
      \u0275\u0275template(266, LandingComponent_div_266_Template, 9, 6, "div", 126);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "section", 127)(268, "div", 83)(269, "div", 128)(270, "h2");
      \u0275\u0275text(271, "Pr\xEAt \xE0 connecter votre famille ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "p");
      \u0275\u0275text(273, "Rejoignez des milliers de familles qui pr\xE9servent leur histoire avec Mam Buudu.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div", 129)(275, "a", 130)(276, "span", 13);
      \u0275\u0275text(277, "family_restroom");
      \u0275\u0275elementEnd();
      \u0275\u0275text(278, " Acc\xE9der \xE0 mon espace famille ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "a", 131)(280, "span", 13);
      \u0275\u0275text(281, "admin_panel_settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(282, " Espace administrateur ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(283, "footer", 132)(284, "div", 133)(285, "div", 134);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(286, "svg", 135);
      \u0275\u0275element(287, "rect", 136)(288, "path", 137)(289, "path", 138)(290, "circle", 139)(291, "circle", 140)(292, "circle", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(293, "span");
      \u0275\u0275text(294, "Mam Buudu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "span", 142);
      \u0275\u0275text(296, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "span", 143);
      \u0275\u0275text(298, "par Pbs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "div", 144)(300, "a", 145);
      \u0275\u0275text(301, "Espace Famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "a", 146);
      \u0275\u0275text(303, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "a", 147);
      \u0275\u0275text(305, "Cr\xE9er un espace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 148);
      \u0275\u0275text(307, "\xA9 2026 Pbs. Tous droits r\xE9serv\xE9s.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.navOpen ? "close" : "menu");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.navOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.navOpen);
      \u0275\u0275advance(30);
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(26);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(43);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.familles), "+");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.membres), "+");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.unions), "+");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.stories), "+");
      \u0275\u0275advance(40);
      \u0275\u0275property("ngForOf", ctx.features);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.plans.length > 0);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.familles);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.testimonials[ctx.currentSlide]);
      \u0275\u0275advance(49);
      \u0275\u0275property("disabled", !ctx.allFaqOpen);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.faqs);
      \u0275\u0275advance(9);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(24, _c0));
      \u0275\u0275advance(25);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(25, _c0));
    }
  }, dependencies: [NgForOf, NgIf, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  overflow-x: hidden;\n  color: #0F172A;\n  background: #ffffff;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\na[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  text-wrap: balance;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_drawLine {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_leafPop {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_leafFloat {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-5px) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_sparkRise {\n  0% {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  15% {\n    opacity: 0.9;\n  }\n  85% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-90px);\n  }\n}\n@keyframes _ngcontent-%COMP%_ctaGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary-light) 40%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 8px color-mix(in srgb, var(--primary-light) 0%, transparent);\n  }\n}\n@keyframes _ngcontent-%COMP%_statPop {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  [_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n.fade-up-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease 0.05s both;\n}\n.fade-up-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease 0.18s both;\n}\n.fade-up-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease 0.3s both;\n}\n.fade-up-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease 0.42s both;\n}\n.landing-nav[_ngcontent-%COMP%] {\n  height: 76px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 60;\n  background: rgba(255, 255, 255, 0.72);\n  backdrop-filter: blur(14px) saturate(160%);\n  -webkit-backdrop-filter: blur(14px) saturate(160%);\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 17px;\n  font-weight: 800;\n  color: #0F172A;\n}\n.nav-logo-img[_ngcontent-%COMP%] {\n  height: clamp(70px, 5vw, 56px);\n  width: auto;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 36px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #4B5563;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #0F172A;\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-nav-famille[_ngcontent-%COMP%], \n.btn-nav-admin[_ngcontent-%COMP%], \n.btn-nav-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 11px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  white-space: nowrap;\n}\n.btn-nav-famille[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%], \n.btn-nav-admin[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%], \n.btn-nav-logout[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n}\n.btn-nav-famille[_ngcontent-%COMP%] {\n  background: var(--sidebar-dark);\n  color: #ffffff;\n}\n.btn-nav-famille[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n}\n.btn-nav-admin[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.btn-nav-admin[_ngcontent-%COMP%]:hover {\n  background: var(--primary-border);\n}\n.btn-nav-logout[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.btn-nav-logout[_ngcontent-%COMP%]:hover {\n  background: #FEE2E2;\n}\n.theme-switch[_ngcontent-%COMP%] {\n  position: relative;\n}\n.theme-switch-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px 8px 10px;\n  border-radius: 11px;\n  background: rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.theme-switch-btn[_ngcontent-%COMP%]:hover, \n.theme-switch-btn.open[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.07);\n  border-color: rgba(15, 23, 42, 0.14);\n}\n.theme-switch-dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.6), 0 0 0 3px rgba(15, 23, 42, 0.08);\n}\n.theme-switch-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.theme-switch-chevron[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #9CA3AF;\n  transition: transform 0.15s ease;\n}\n.theme-switch-btn.open[_ngcontent-%COMP%]   .theme-switch-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.theme-switch-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 69;\n}\n.theme-switch-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  z-index: 70;\n  width: 190px;\n  background: #ffffff;\n  border: 1px solid #EEF1F5;\n  border-radius: 14px;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.14);\n  padding: 6px;\n  animation: _ngcontent-%COMP%_fadeUp 0.15s ease both;\n}\n.theme-switch-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 9px 10px;\n  border-radius: 9px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-family: inherit;\n}\n.theme-switch-option[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.theme-switch-option.active[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n}\n.theme-switch-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #0F172A;\n}\n.theme-switch-check[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--primary);\n}\n.nms-theme-picker[_ngcontent-%COMP%] {\n  padding: 4px 20px 16px;\n  border-bottom: 1px solid #EEF1F5;\n}\n.nms-theme-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.nms-theme-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n.nms-theme-dot[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px transparent;\n  transition: box-shadow 0.15s ease;\n}\n.nms-theme-dot.active[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #0F172A;\n}\n.nav-hamburger[_ngcontent-%COMP%] {\n  display: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n  background: #F3F4F6;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #0F172A;\n}\n.nav-mobile-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 40;\n}\n.nav-mobile-sheet[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 300px;\n  max-width: 84vw;\n  background: #ffffff;\n  z-index: 50;\n  transform: translateX(100%);\n  transition: transform 0.25s ease;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.12);\n}\n.nav-mobile-sheet.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.nms-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid #EEF1F5;\n}\n.nms-logo[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.nms-close[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  border: none;\n  background: #F3F4F6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.nms-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px 10px;\n  gap: 2px;\n}\n.nms-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 12px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.nms-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n  color: #9CA3AF;\n}\n.nms-link[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n}\n.nms-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 16px;\n  border-top: 1px solid #EEF1F5;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.nms-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n.nms-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n}\n.nms-btn-famille[_ngcontent-%COMP%] {\n  background: var(--sidebar-dark);\n  color: #ffffff;\n}\n.nms-btn-admin[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.nms-btn-logout[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      160deg,\n      var(--sidebar-dark) 0%,\n      var(--primary-dark) 55%,\n      var(--primary) 100%);\n  padding: 76px 40px 0;\n}\n.hero-sparks[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.spark[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 60px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #A6E3AF;\n  box-shadow: 0 0 8px 2px rgba(166, 227, 175, 0.7);\n  animation: _ngcontent-%COMP%_sparkRise 5.5s ease-in infinite;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1160px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 480px;\n  gap: 40px;\n  align-items: center;\n  padding-bottom: 70px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  color: #C7F0D3;\n  font-size: 12.5px;\n  font-weight: 600;\n  margin-bottom: 22px;\n}\n.hero-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  color: var(--primary-light);\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 46px;\n  font-weight: 800;\n  line-height: 1.14;\n  letter-spacing: -1px;\n  color: #ffffff;\n}\n.hero-title[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-light),\n      var(--primary-bg));\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.62);\n  max-width: 46ch;\n}\n.hero-entries[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 32px;\n  max-width: 420px;\n}\n.entry-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 15px 18px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  cursor: pointer;\n  transition: transform 0.15s, background 0.15s;\n  text-align: left;\n  width: 100%;\n  font-family: inherit;\n}\n.entry-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(3px);\n  background: rgba(255, 255, 255, 0.1);\n}\n.entry-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.entry-icon.famille[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: #0B2914;\n}\n.entry-icon.admin[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: #ffffff;\n}\n.entry-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.entry-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n}\n.entry-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n}\n.entry-card[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 18px !important;\n}\n.hero-tree-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tree-line[_ngcontent-%COMP%] {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  animation: _ngcontent-%COMP%_drawLine 0.9s ease forwards;\n}\n.tree-line.g-root[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.tree-line.g-trunk[_ngcontent-%COMP%] {\n  animation-delay: 0.15s;\n}\n.tree-line.g-1[_ngcontent-%COMP%] {\n  animation-delay: 0.55s;\n}\n.tree-line.g-2[_ngcontent-%COMP%] {\n  animation-delay: 0.95s;\n}\n.leaf[_ngcontent-%COMP%] {\n  transform-box: fill-box;\n  transform-origin: center;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_leafPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both, _ngcontent-%COMP%_leafFloat 3.2s ease-in-out infinite;\n}\n.stats-section[_ngcontent-%COMP%] {\n  background: var(--sidebar-dark);\n  padding: 26px 0 30px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 4px 8px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n  font-size: 19px !important;\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.1;\n  animation: _ngcontent-%COMP%_statPop 0.5s ease both;\n  font-variant-numeric: tabular-nums;\n}\n.stat-box[_ngcontent-%COMP%]:nth-child(1)   .stat-number[_ngcontent-%COMP%] {\n  animation-delay: 0.55s;\n}\n.stat-box[_ngcontent-%COMP%]:nth-child(2)   .stat-number[_ngcontent-%COMP%] {\n  animation-delay: 0.65s;\n}\n.stat-box[_ngcontent-%COMP%]:nth-child(3)   .stat-number[_ngcontent-%COMP%] {\n  animation-delay: 0.75s;\n}\n.stat-box[_ngcontent-%COMP%]:nth-child(4)   .stat-number[_ngcontent-%COMP%] {\n  animation-delay: 0.85s;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sec-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: var(--primary-bg);\n  color: var(--primary);\n  font-size: 11.5px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.sec-tag-dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--primary-light);\n}\n.sec-head[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 620px;\n  margin: 0 auto 48px;\n}\n.sec-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  margin: 14px 0 12px;\n  color: #0F172A;\n}\n.sec-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6B7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.solution[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.sol-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin-top: 44px;\n}\n.sol-card[_ngcontent-%COMP%] {\n  padding: 34px;\n  border-radius: 22px;\n  border: 1px solid #EEF1F5;\n  background: #FAFBFC;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.sol-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(15, 42, 30, 0.08);\n  border-color: #DCE5DF;\n}\n.sol-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 15px;\n  background: var(--sidebar-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sol-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n  font-size: 24px !important;\n}\n.sol-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.sol-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.65;\n  margin: 0;\n}\n.features[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #FAFBFC;\n}\n.feat-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 60px;\n  align-items: start;\n}\n.feat-left[_ngcontent-%COMP%]   .sec-tag[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.feat-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  margin: 0 0 14px;\n}\n.feat-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  color: #6B7280;\n  line-height: 1.65;\n}\n.feat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.feat-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #EEF1F5;\n  border-radius: 18px;\n  padding: 24px 20px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.feat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);\n}\n.feat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.feat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 21px !important;\n}\n.feat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #0F172A;\n}\n.feat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #6B7280;\n  line-height: 1.55;\n  margin: 0;\n}\n.familles[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.fam-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-top: 44px;\n}\n.fam-card[_ngcontent-%COMP%] {\n  border: 1px solid #EEF1F5;\n  border-radius: 20px;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.fam-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);\n}\n.fam-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.fam-avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.fam-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0;\n}\n.fam-origin[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #6B7280;\n  margin-top: 2px;\n}\n.fam-origin[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n.fam-stats[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid #F3F4F6;\n}\n.fam-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 14px 0;\n}\n.fam-stat[_ngcontent-%COMP%]    + .fam-stat[_ngcontent-%COMP%] {\n  border-left: 1px solid #F3F4F6;\n}\n.fam-stat-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 17px;\n  font-weight: 800;\n}\n.fam-stat-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: #6B7280;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.testimonials[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: var(--sidebar-dark);\n}\n.testimonials[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.55);\n}\n.testimonials[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.testi-wrap[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.testi-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 24px;\n  padding: 40px;\n}\n.testi-quote-icon[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n  font-size: 30px !important;\n  margin-bottom: 14px;\n  display: block;\n}\n.testi-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 1.65;\n  color: rgba(255, 255, 255, 0.88);\n  margin: 0 0 26px;\n  font-weight: 300;\n}\n.testi-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.testi-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.testi-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #ffffff;\n}\n.testi-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.testi-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 26px;\n}\n.testi-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.testi-dot.active[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  width: 22px;\n  border-radius: 5px;\n}\n.pricing[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #FAFBFC;\n}\n.pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-top: 44px;\n  align-items: stretch;\n}\n.price-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #EEF1F5;\n  border-radius: 22px;\n  padding: 32px 28px;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.price-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(15, 42, 30, 0.08);\n  border-color: #DCE5DF;\n}\n.price-card-highlight[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  box-shadow: 0 14px 30px color-mix(in srgb, var(--primary) 12%, transparent);\n}\n.price-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -13px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: #ffffff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 5px 14px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.price-label[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 6px 0 14px;\n}\n.price-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 22px;\n}\n.price-amount[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #0F172A;\n  letter-spacing: -0.5px;\n}\n.price-period[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n}\n.price-features[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 26px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  flex: 1;\n}\n.price-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #374151;\n  line-height: 1.4;\n}\n.price-features[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  color: var(--primary);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.price-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 13.5px;\n  font-weight: 700;\n  text-align: center;\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 1px solid var(--primary-border);\n}\n.price-cta[_ngcontent-%COMP%]:hover {\n  background: var(--primary-border);\n  text-decoration: none;\n}\n.price-cta-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #ffffff;\n  border-color: var(--primary);\n}\n.price-cta-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.mobile-download[_ngcontent-%COMP%] {\n  padding: 90px 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark),\n      var(--primary));\n}\n.mobile-download-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  gap: 48px;\n}\n.mdl-text[_ngcontent-%COMP%]   .sec-tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--primary-light);\n  margin-bottom: 16px;\n}\n.mdl-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n  margin: 0 0 14px;\n}\n.mdl-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.65;\n  max-width: 460px;\n  margin: 0 0 26px;\n}\n.mdl-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.store-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n}\n.store-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n.store-badge-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 13.5px;\n  font-weight: 700;\n  line-height: 1.3;\n}\n.store-badge-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.55);\n  text-transform: none;\n}\n.store-badge-soon[_ngcontent-%COMP%] {\n  opacity: 0.85;\n  cursor: default;\n}\n.mdl-visual[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.mdl-visual[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.35));\n}\n.faq[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.faq-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n.faq-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  margin: 10px 0 0;\n  color: #0F172A;\n}\n.faq-toggle-all[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.faq-toggle-btn[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #EEF1F5;\n  background: #ffffff;\n  color: #374151;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.faq-toggle-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.faq-toggle-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.faq-list[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n.faq-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #EEF1F5;\n}\n.faq-question[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 22px 4px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-family: inherit;\n}\n.faq-num[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.faq-question-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15.5px;\n  font-weight: 600;\n  color: #0F172A;\n}\n.faq-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--primary-bg);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px !important;\n}\n.faq-item.open[_ngcontent-%COMP%]   .faq-icon[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #ffffff;\n}\n.faq-answer[_ngcontent-%COMP%] {\n  padding: 0 4px 24px 44px;\n  animation: _ngcontent-%COMP%_fadeUp 0.2s ease;\n}\n.faq-answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.65;\n}\n.cta[_ngcontent-%COMP%] {\n  padding: 90px 0;\n  background: #ffffff;\n}\n.cta-box[_ngcontent-%COMP%] {\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 56px;\n  border-radius: 28px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark),\n      var(--primary));\n  position: relative;\n  overflow: hidden;\n}\n.cta-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.cta-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 14px 0 30px;\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 24px;\n  border-radius: 13px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n}\n.cta-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.cta-btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: #0B2914;\n  animation: _ngcontent-%COMP%_ctaGlow 2.4s ease-in-out infinite;\n}\n.cta-btn-primary[_ngcontent-%COMP%]:hover {\n  animation: none;\n}\n.cta-btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.landing-footer[_ngcontent-%COMP%] {\n  padding: 28px 0;\n  border-top: 1px solid #EEF1F5;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.footer-sep[_ngcontent-%COMP%] {\n  color: #D1D5DB;\n}\n.footer-by[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-weight: 400;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 22px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0F172A;\n}\n.footer-copy[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n}\n@media (max-width: 900px) {\n  .landing-nav[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .nav-links[_ngcontent-%COMP%], \n   .nav-actions[_ngcontent-%COMP%]   .btn-nav-famille[_ngcontent-%COMP%], \n   .nav-actions[_ngcontent-%COMP%]   .btn-nav-admin[_ngcontent-%COMP%], \n   .nav-actions[_ngcontent-%COMP%]   .btn-nav-logout[_ngcontent-%COMP%], \n   .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 76px 20px 0;\n  }\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-bottom: 40px;\n    text-align: center;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-entries[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .hero-tree-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 280px;\n    height: auto;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sol-grid[_ngcontent-%COMP%], \n   .fam-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .feat-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .feat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .solution[_ngcontent-%COMP%], \n   .features[_ngcontent-%COMP%], \n   .familles[_ngcontent-%COMP%], \n   .testimonials[_ngcontent-%COMP%], \n   .pricing[_ngcontent-%COMP%], \n   .faq[_ngcontent-%COMP%] {\n    padding: 64px 0;\n  }\n  .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 380px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .mobile-download[_ngcontent-%COMP%] {\n    padding: 56px 0;\n  }\n  .mobile-download-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n    gap: 32px;\n  }\n  .mdl-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .mdl-badges[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .mdl-visual[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 160px;\n    height: auto;\n  }\n  .faq-question-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .faq-answer[_ngcontent-%COMP%] {\n    padding-left: 4px;\n  }\n  .cta-box[_ngcontent-%COMP%] {\n    padding: 36px 24px;\n  }\n  .footer-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: false, template: `<!-- ===== NAVBAR ===== -->
<nav class="landing-nav">
  <a routerLink="/" class="nav-logo">
    <img src="images/logobg.png" class="nav-logo-img" alt="Mam Buudu" />
  </a>
  <div class="nav-links">
    <a href="#features" class="nav-link">Fonctionnalit\xE9s</a>
    <a href="#familles" class="nav-link">Familles</a>
    <a href="#tarifs" class="nav-link">Tarifs</a>
    <a href="#temoignages" class="nav-link">T\xE9moignages</a>
    <a href="#faq" class="nav-link">FAQ</a>
  </div>
  <div class="nav-actions">
    <div class="theme-switch" *ngIf="isLoggedIn">
      <button class="theme-switch-btn" (click)="toggleThemeMenu()" [class.open]="themeMenuOpen" aria-haspopup="listbox" [attr.aria-expanded]="themeMenuOpen">
        <span class="theme-switch-dot" [style.background]="currentThemeColor"></span>
        <span class="theme-switch-name">{{ currentThemeLabel }}</span>
        <span class="material-icons-round theme-switch-chevron">expand_more</span>
      </button>
      <div class="theme-switch-overlay" *ngIf="themeMenuOpen" (click)="themeMenuOpen = false"></div>
      <div class="theme-switch-menu" *ngIf="themeMenuOpen" role="listbox">
        <button class="theme-switch-option" *ngFor="let t of themeService.themes"
                [class.active]="themeService.current === t.name"
                (click)="selectTheme(t.name)" role="option" [attr.aria-selected]="themeService.current === t.name">
          <span class="theme-switch-dot" [style.background]="t.color"></span>
          <span class="theme-switch-label">{{ t.label }}</span>
          <span class="material-icons-round theme-switch-check" *ngIf="themeService.current === t.name">check</span>
        </button>
      </div>
    </div>
    <ng-container *ngIf="!isLoggedIn">
      <a routerLink="/auth/login" [queryParams]="{mode: 'viewonly'}" class="btn-nav-famille">
        <span class="material-icons-round">people</span>
        Espace Famille
      </a>
      <a routerLink="/auth/login" class="btn-nav-admin">
        <span class="material-icons-round">manage_accounts</span>
        Administration
      </a>
    </ng-container>
    <ng-container *ngIf="isLoggedIn">
      <a [routerLink]="dashboardRoute" class="btn-nav-famille">
        <span class="material-icons-round">dashboard</span>
        Mon espace
      </a>
      <button class="btn-nav-logout" (click)="logout()">
        <span class="material-icons-round">logout</span>
        Se d\xE9connecter
      </button>
    </ng-container>
    <button class="nav-hamburger" (click)="navOpen = !navOpen" aria-label="Menu">
      <span class="material-icons-round">{{ navOpen ? 'close' : 'menu' }}</span>
    </button>
  </div>
</nav>

<!-- ===== MOBILE NAV SHEET ===== -->
<div class="nav-mobile-overlay" *ngIf="navOpen" (click)="navOpen=false"></div>
<div class="nav-mobile-sheet" [class.open]="navOpen">
  <div class="nms-header">
    <div class="nav-logo nms-logo">
      <img src="images/favicon-192.png" width="24" height="24" alt="Mam Buudu" />
      <span>Mam Buudu</span>
    </div>
    <button class="nms-close" (click)="navOpen=false">
      <span class="material-icons-round">close</span>
    </button>
  </div>
  <div class="nms-links">
    <a href="#features" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">star</span>Fonctionnalit\xE9s
    </a>
    <a href="#familles" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">family_restroom</span>Familles
    </a>
    <a href="#tarifs" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">sell</span>Tarifs
    </a>
    <a href="#temoignages" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">format_quote</span>T\xE9moignages
    </a>
    <a href="#faq" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">help_outline</span>FAQ
    </a>
  </div>
  <div class="nms-theme-picker" *ngIf="isLoggedIn">
    <span class="nms-theme-label">Th\xE8me</span>
    <div class="nms-theme-dots">
      <button class="nms-theme-dot" *ngFor="let t of themeService.themes"
              [style.background]="t.color" [class.active]="themeService.current === t.name"
              (click)="selectTheme(t.name)" [title]="t.label"></button>
    </div>
  </div>
  <div class="nms-actions">
    <ng-container *ngIf="!isLoggedIn">
      <a routerLink="/auth/login" [queryParams]="{mode: 'viewonly'}" class="nms-btn nms-btn-famille" (click)="navOpen=false">
        <span class="material-icons-round">people</span>Espace Famille
      </a>
      <a routerLink="/auth/login" class="nms-btn nms-btn-admin" (click)="navOpen=false">
        <span class="material-icons-round">manage_accounts</span>Administration
      </a>
    </ng-container>
    <ng-container *ngIf="isLoggedIn">
      <a [routerLink]="dashboardRoute" class="nms-btn nms-btn-famille" (click)="navOpen=false">
        <span class="material-icons-round">dashboard</span>Mon espace
      </a>
      <button class="nms-btn nms-btn-logout" (click)="logout(); navOpen=false">
        <span class="material-icons-round">logout</span>Se d\xE9connecter
      </button>
    </ng-container>
  </div>
</div>

<!-- ===== HERO ===== -->
<section class="hero">
  <div class="hero-sparks">
    <div class="spark" style="left:12%; animation-delay:0s"></div>
    <div class="spark" style="left:24%; animation-delay:1.4s; width:4px; height:4px;"></div>
    <div class="spark" style="left:38%; animation-delay:2.6s"></div>
    <div class="spark" style="left:55%; animation-delay:0.7s; width:4px; height:4px;"></div>
    <div class="spark" style="left:68%; animation-delay:3.4s"></div>
    <div class="spark" style="left:81%; animation-delay:1.9s; width:4px; height:4px;"></div>
  </div>

  <div class="hero-inner">
    <div>
      <span class="hero-badge fade-up-1">
        <span class="material-icons-round">auto_awesome</span>
        Application g\xE9n\xE9alogique africaine
      </span>
      <h1 class="hero-title fade-up-2">
        L'histoire de votre<br/>
        <span class="accent">famille</span>,<br/>
        pr\xE9serv\xE9e pour toujours
      </h1>
      <p class="hero-sub fade-up-3">
        Construisez l'arbre g\xE9n\xE9alogique de votre famille, partagez vos stories et connectez les g\xE9n\xE9rations \xE0 travers le temps.
      </p>

      <div class="hero-entries fade-up-4">
        <ng-container *ngIf="!isLoggedIn">
          <a routerLink="/auth/login" [queryParams]="{mode: 'viewonly'}" class="entry-card">
            <div class="entry-icon famille"><span class="material-icons-round">family_restroom</span></div>
            <div class="entry-info"><strong>Espace Famille</strong><span>Pour les membres de la famille</span></div>
            <span class="material-icons-round arrow">arrow_forward</span>
          </a>
          <a routerLink="/auth/login" class="entry-card">
            <div class="entry-icon admin"><span class="material-icons-round">admin_panel_settings</span></div>
            <div class="entry-info"><strong>Espace Admin</strong><span>Pour les gestionnaires</span></div>
            <span class="material-icons-round arrow">arrow_forward</span>
          </a>
        </ng-container>
        <ng-container *ngIf="isLoggedIn">
          <a [routerLink]="dashboardRoute" class="entry-card">
            <div class="entry-icon famille"><span class="material-icons-round">dashboard</span></div>
            <div class="entry-info"><strong>Retour \xE0 mon espace</strong><span>{{ userName }}</span></div>
            <span class="material-icons-round arrow">arrow_forward</span>
          </a>
          <button class="entry-card" (click)="logout()">
            <div class="entry-icon admin"><span class="material-icons-round">logout</span></div>
            <div class="entry-info"><strong>Se d\xE9connecter</strong><span>Quitter la session</span></div>
            <span class="material-icons-round arrow">arrow_forward</span>
          </button>
        </ng-container>
      </div>
    </div>

    <div class="hero-tree-wrap">
      <svg width="480" height="560" viewBox="0 0 480 560" fill="none">
        <!-- Racines -->
        <path class="tree-line g-root" d="M240 520 C 220 500, 200 495, 175 505" stroke="#8B4513" stroke-width="3" fill="none" opacity="0.55"/>
        <path class="tree-line g-root" d="M240 520 C 260 500, 280 495, 305 505" stroke="#8B4513" stroke-width="3" fill="none" opacity="0.55"/>
        <path class="tree-line g-root" d="M240 520 L 240 545" stroke="#8B4513" stroke-width="4" opacity="0.55"/>
        <!-- Tronc + g\xE9n\xE9ration 1 -->
        <path class="tree-line g-trunk" d="M240 520 L 240 400" stroke="#8B4513" stroke-width="7" stroke-linecap="round"/>
        <path class="tree-line g-trunk" d="M240 400 C 210 380, 180 365, 150 340" stroke="#8B4513" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-trunk" d="M240 400 C 270 380, 300 365, 330 340" stroke="#8B4513" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-trunk" d="M240 400 L 240 330" stroke="#8B4513" stroke-width="5" stroke-linecap="round"/>
        <!-- G\xE9n\xE9ration 2 -->
        <path class="tree-line g-1" d="M150 340 C 130 315, 115 300, 95 280" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M150 340 C 155 310, 150 290, 140 265" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M330 340 C 350 315, 365 300, 385 280" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M330 340 C 325 310, 330 290, 340 265" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M240 330 C 225 305, 225 290, 235 265" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-1" d="M240 330 C 255 305, 255 290, 245 265" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <!-- G\xE9n\xE9ration 3 (fines) -->
        <path class="tree-line g-2" d="M95 280 C 85 260, 82 245, 88 225" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M140 265 C 135 245, 138 230, 148 210" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M385 280 C 395 260, 398 245, 392 225" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M340 265 C 345 245, 342 230, 332 210" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M235 265 C 225 240, 228 222, 220 200" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="tree-line g-2" d="M245 265 C 255 240, 252 222, 260 200" stroke="#8B4513" stroke-width="2.5" fill="none" stroke-linecap="round"/>

        <!-- Feuillage -->
        <circle class="leaf" style="animation-delay:1.4s, 1.9s" cx="88" cy="220" r="16" fill="#2E7D32"/>
        <circle class="leaf" style="animation-delay:1.5s, 2.1s" cx="148" cy="205" r="14" fill="#81C784"/>
        <circle class="leaf" style="animation-delay:1.6s, 1.7s" cx="220" cy="196" r="16" fill="#2E7D32"/>
        <circle class="leaf" style="animation-delay:1.65s, 2.4s" cx="260" cy="196" r="14" fill="#81C784"/>
        <circle class="leaf" style="animation-delay:1.55s, 2.0s" cx="332" cy="205" r="14" fill="#2E7D32"/>
        <circle class="leaf" style="animation-delay:1.45s, 1.85s" cx="392" cy="220" r="16" fill="#81C784"/>

        <circle class="leaf" style="animation-delay:1.0s, 2.6s" cx="95" cy="280" r="9" fill="#3B82F6" opacity="0.85"/>
        <circle class="leaf" style="animation-delay:1.05s, 2.2s" cx="140" cy="265" r="8" fill="#EC4899" opacity="0.85"/>
        <circle class="leaf" style="animation-delay:0.75s, 2.8s" cx="240" cy="330" r="9" fill="#F59E0B" opacity="0.85"/>
        <circle class="leaf" style="animation-delay:1.05s, 2.35s" cx="340" cy="265" r="8" fill="#EC4899" opacity="0.85"/>
        <circle class="leaf" style="animation-delay:1.0s, 1.95s" cx="385" cy="280" r="9" fill="#3B82F6" opacity="0.85"/>

        <circle class="leaf" style="animation-delay:0.65s, 3.0s" cx="150" cy="340" r="10" fill="#8B5CF6" opacity="0.9"/>
        <circle class="leaf" style="animation-delay:0.65s, 2.5s" cx="330" cy="340" r="10" fill="#8B5CF6" opacity="0.9"/>
      </svg>
    </div>
  </div>
</section>

<!-- ===== STATS ===== -->
<section class="stats-section">
  <div class="container stats-grid">
    <div class="stat-box">
      <div class="stat-icon"><span class="material-icons-round">family_restroom</span></div>
      <div><div class="stat-number">{{ formatStat(stats.familles) }}+</div><div class="stat-label">Familles</div></div>
    </div>
    <div class="stat-box">
      <div class="stat-icon"><span class="material-icons-round">people</span></div>
      <div><div class="stat-number">{{ formatStat(stats.membres) }}+</div><div class="stat-label">Membres</div></div>
    </div>
    <div class="stat-box">
      <div class="stat-icon"><span class="material-icons-round">favorite</span></div>
      <div><div class="stat-number">{{ formatStat(stats.unions) }}+</div><div class="stat-label">Unions</div></div>
    </div>
    <div class="stat-box">
      <div class="stat-icon"><span class="material-icons-round">auto_stories</span></div>
      <div><div class="stat-number">{{ formatStat(stats.stories) }}+</div><div class="stat-label">Stories</div></div>
    </div>
  </div>
</section>

<!-- ===== SOLUTION ===== -->
<section class="solution">
  <div class="container">
    <div class="sec-head">
      <span class="sec-tag">Notre solution</span>
      <h2>Mam Buudu simplifie la g\xE9n\xE9alogie, pour toutes les familles.</h2>
      <p>De la cr\xE9ation de l'arbre au partage des stories \u2014 une solution compl\xE8te, accessible en ligne ou hors ligne.</p>
    </div>
    <div class="sol-grid">
      <div class="sol-card">
        <div class="sol-icon"><span class="material-icons-round">account_tree</span></div>
        <h3>Sans code, sans effort</h3>
        <p>Construisez votre arbre g\xE9n\xE9alogique facilement, sans aucune comp\xE9tence technique. En ligne ou hors ligne.</p>
      </div>
      <div class="sol-card">
        <div class="sol-icon"><span class="material-icons-round">share</span></div>
        <h3>Partage en famille</h3>
        <p>Invitez les membres, partagez les stories et connectez les g\xE9n\xE9rations en temps r\xE9el, depuis n'importe o\xF9.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== FEATURES ===== -->
<section class="features" id="features">
  <div class="container">
    <div class="feat-layout">
      <div class="feat-left">
        <span class="sec-tag">Bienvenue sur Mam Buudu</span>
        <h2>G\xE9n\xE9alogie nouvelle g\xE9n\xE9ration</h2>
        <p>Construite pour \xE9quiper chaque famille d'outils modernes pour pr\xE9server et partager leur histoire. Nous rempla\xE7ons les albums \xE9parpill\xE9s et la m\xE9moire orale par une plateforme num\xE9rique s\xE9curis\xE9e, accessible \xE0 toute la famille.</p>
      </div>
      <div class="feat-grid">
        <div class="feat-card" *ngFor="let f of features">
          <div class="feat-icon" [style.background]="f.color + '18'">
            <span class="material-icons-round" [style.color]="f.color">{{ f.icon }}</span>
          </div>
          <h4>{{ f.title }}</h4>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== TARIFS ===== -->
<section class="pricing" id="tarifs" *ngIf="plans.length > 0">
  <div class="container">
    <div class="sec-head">
      <span class="sec-tag">Tarifs</span>
      <h2>Un plan pour chaque famille</h2>
      <p>Commencez gratuitement, \xE9voluez quand votre arbre grandit. Sans engagement.</p>
    </div>
    <div class="pricing-grid">
      <div class="price-card" *ngFor="let p of plans" [class.price-card-highlight]="p.nom === 'premium'">
        <span class="price-badge" *ngIf="p.nom === 'premium'">Le plus populaire</span>
        <h3 class="price-label">{{ p.label }}</h3>
        <div class="price-value">
          <span class="price-amount">{{ formatPrix(p) }}</span>
          <span class="price-period" *ngIf="p.prix > 0">/an</span>
        </div>
        <ul class="price-features">
          <li *ngFor="let f of p.features">
            <span class="material-icons-round">check_circle</span>{{ f }}
          </li>
        </ul>
        <a routerLink="/auth/register" class="price-cta" [class.price-cta-primary]="p.nom === 'premium'">
          {{ p.prix === 0 ? 'Commencer gratuitement' : 'Choisir ce plan' }}
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ===== FAMILLES ===== -->
<section class="familles" id="familles">
  <div class="container">
    <div class="sec-head">
      <span class="sec-tag">Familles</span>
      <h2>Des familles qui nous font confiance</h2>
      <p>Rejoignez des centaines de familles qui ont choisi Mam Buudu pour pr\xE9server leur patrimoine.</p>
    </div>
    <div class="fam-grid">
      <div class="fam-card" *ngFor="let f of familles">
        <div class="fam-head">
          <div class="fam-avatar" [style.background]="f.color + '22'" [style.color]="f.color">{{ f.initiale }}</div>
          <div>
            <p class="fam-name">Famille {{ f.nom }}</p>
            <span class="fam-origin"><span class="material-icons-round">place</span>{{ f.origine }}</span>
          </div>
        </div>
        <div class="fam-stats">
          <div class="fam-stat"><span class="fam-stat-val" [style.color]="f.color">{{ f.membres }}</span><span class="fam-stat-label">Membres</span></div>
          <div class="fam-stat"><span class="fam-stat-val" [style.color]="f.color">{{ f.generations }}</span><span class="fam-stat-label">G\xE9n\xE9rations</span></div>
          <div class="fam-stat"><span class="fam-stat-val" [style.color]="f.color">{{ f.unions }}</span><span class="fam-stat-label">Unions</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="testimonials" id="temoignages">
  <div class="container">
    <div class="sec-head">
      <span class="sec-tag sec-tag-dark">T\xE9moignages</span>
      <h2>Ce que disent nos utilisateurs</h2>
      <p>Ils ont choisi Mam Buudu pour connecter leur famille \xE0 travers les g\xE9n\xE9rations.</p>
    </div>
    <div class="testi-wrap" *ngIf="testimonials[currentSlide] as t">
      <div class="testi-card">
        <span class="material-icons-round testi-quote-icon">format_quote</span>
        <p class="testi-text">{{ t.texte }}</p>
        <div class="testi-author">
          <div class="testi-avatar" [style.background]="t.color + '33'" [style.color]="t.color">{{ t.initiale }}</div>
          <div><div class="testi-name">{{ t.nom }}</div><div class="testi-role">{{ t.role }}</div></div>
        </div>
      </div>
      <div class="testi-dots">
        <button class="testi-dot" *ngFor="let s of testimonials; let i = index"
                [class.active]="i === currentSlide" (click)="goToSlide(i)"></button>
      </div>
    </div>
  </div>
</section>

<!-- ===== APPLICATION MOBILE ===== -->
<section class="mobile-download">
  <div class="container mobile-download-inner">
    <div class="mdl-text">
      <span class="sec-tag">Application mobile</span>
      <h2>Emportez l'arbre de votre famille partout</h2>
      <p>L'application mobile Mam Buudu est en cours de finalisation pour Android et iOS \u2014 retrouvez votre arbre, vos stories et vos proches, m\xEAme hors connexion.</p>
      <div class="mdl-badges">
        <span class="store-badge store-badge-soon">
          <span class="material-icons-round">apple</span>
          <span class="store-badge-text"><small>Bient\xF4t sur</small>App Store</span>
        </span>
        <span class="store-badge store-badge-soon">
          <span class="material-icons-round">shop</span>
          <span class="store-badge-text"><small>Bient\xF4t sur</small>Google Play</span>
        </span>
      </div>
    </div>
    <div class="mdl-visual">
      <svg width="220" height="300" viewBox="0 0 220 300" fill="none">
        <rect x="10" y="10" width="200" height="280" rx="28" fill="#0F2A1E" stroke="#123B27" stroke-width="2"/>
        <rect x="20" y="34" width="180" height="232" rx="10" fill="#F0FDF4"/>
        <circle cx="110" cy="22" r="3" fill="#123B27"/>
        <circle cx="60" cy="90" r="16" fill="#81C784"/>
        <circle cx="110" cy="70" r="20" fill="#2E7D32"/>
        <circle cx="160" cy="90" r="16" fill="#81C784"/>
        <path d="M60 106 L60 140 M110 90 L110 140 M160 106 L160 140" stroke="#8B4513" stroke-width="3"/>
        <path d="M60 140 L110 140 L160 140" stroke="#8B4513" stroke-width="3"/>
        <rect x="40" y="150" width="140" height="10" rx="5" fill="#DCFCE7"/>
        <rect x="40" y="170" width="100" height="10" rx="5" fill="#DCFCE7"/>
        <rect x="40" y="190" width="120" height="10" rx="5" fill="#DCFCE7"/>
      </svg>
    </div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="faq" id="faq">
  <div class="container">
    <div class="faq-head">
      <div>
        <span class="sec-tag">FAQ</span>
        <h2>Foire aux questions</h2>
      </div>
      <div class="faq-toggle-all">
        <button class="faq-toggle-btn" (click)="setAllFaq(true)">D\xE9velopper tout</button>
        <button class="faq-toggle-btn" [disabled]="!allFaqOpen" (click)="setAllFaq(false)">R\xE9duire tout</button>
      </div>
    </div>
    <div class="faq-list">
      <div class="faq-item" *ngFor="let f of faqs; let i = index" [class.open]="f.open">
        <button class="faq-question" (click)="toggleFaq(i)">
          <span class="faq-num">{{ (i + 1).toString().padStart(2, '0') }}/</span>
          <span class="faq-question-text">{{ f.question }}</span>
          <span class="material-icons-round faq-icon">{{ f.open ? 'remove' : 'add' }}</span>
        </button>
        <div class="faq-answer" *ngIf="f.open">
          <p>{{ f.reponse }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== CTA FINAL ===== -->
<section class="cta">
  <div class="container">
    <div class="cta-box">
      <h2>Pr\xEAt \xE0 connecter votre famille ?</h2>
      <p>Rejoignez des milliers de familles qui pr\xE9servent leur histoire avec Mam Buudu.</p>
      <div class="cta-actions">
        <a routerLink="/auth/login" [queryParams]="{mode: 'viewonly'}" class="cta-btn cta-btn-primary">
          <span class="material-icons-round">family_restroom</span>
          Acc\xE9der \xE0 mon espace famille
        </a>
        <a routerLink="/auth/login" class="cta-btn cta-btn-ghost">
          <span class="material-icons-round">admin_panel_settings</span>
          Espace administrateur
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="landing-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <svg width="18" height="18" viewBox="0 0 120 120" fill="none">
        <rect x="50" y="60" width="20" height="40" fill="#8B4513" rx="2"/>
        <path d="M60 60 L40 40" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
        <path d="M60 60 L80 40" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
        <circle cx="35" cy="35" r="10" fill="#2E7D32"/><circle cx="85" cy="35" r="10" fill="#2E7D32"/><circle cx="60" cy="25" r="10" fill="#81C784"/>
      </svg>
      <span>Mam Buudu</span>
      <span class="footer-sep">\xB7</span>
      <span class="footer-by">par Pbs</span>
    </div>
    <div class="footer-links">
      <a routerLink="/auth/login" [queryParams]="{mode: 'viewonly'}">Espace Famille</a>
      <a routerLink="/auth/login">Administration</a>
      <a routerLink="/auth/register">Cr\xE9er un espace</a>
    </div>
    <div class="footer-copy">\xA9 2026 Pbs. Tous droits r\xE9serv\xE9s.</div>
  </div>
</footer>
`, styles: ['@charset "UTF-8";\n\n/* src/app/landing/landing.component.scss */\n:host {\n  display: block;\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  overflow-x: hidden;\n  color: #0F172A;\n  background: #ffffff;\n}\n* {\n  box-sizing: border-box;\n}\na {\n  color: var(--primary);\n  text-decoration: none;\n}\nh1,\nh2,\nh3 {\n  text-wrap: balance;\n  margin: 0;\n}\n.container {\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes drawLine {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes leafPop {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes leafFloat {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n  }\n  50% {\n    transform: translateY(-5px) scale(1);\n  }\n}\n@keyframes sparkRise {\n  0% {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  15% {\n    opacity: 0.9;\n  }\n  85% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-90px);\n  }\n}\n@keyframes ctaGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--primary-light) 40%, transparent);\n  }\n  50% {\n    box-shadow: 0 0 0 8px color-mix(in srgb, var(--primary-light) 0%, transparent);\n  }\n}\n@keyframes statPop {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :host * {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n.fade-up-1 {\n  animation: fadeUp 0.6s ease 0.05s both;\n}\n.fade-up-2 {\n  animation: fadeUp 0.6s ease 0.18s both;\n}\n.fade-up-3 {\n  animation: fadeUp 0.6s ease 0.3s both;\n}\n.fade-up-4 {\n  animation: fadeUp 0.6s ease 0.42s both;\n}\n.landing-nav {\n  height: 76px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 60;\n  background: rgba(255, 255, 255, 0.72);\n  backdrop-filter: blur(14px) saturate(160%);\n  -webkit-backdrop-filter: blur(14px) saturate(160%);\n  transition: background 0.2s ease, box-shadow 0.2s ease;\n}\n.nav-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 17px;\n  font-weight: 800;\n  color: #0F172A;\n}\n.nav-logo-img {\n  height: clamp(70px, 5vw, 56px);\n  width: auto;\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 36px;\n}\n.nav-link {\n  font-size: 14px;\n  font-weight: 500;\n  color: #4B5563;\n}\n.nav-link:hover {\n  color: #0F172A;\n}\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-nav-famille,\n.btn-nav-admin,\n.btn-nav-logout {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 11px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  white-space: nowrap;\n}\n.btn-nav-famille .material-icons-round,\n.btn-nav-admin .material-icons-round,\n.btn-nav-logout .material-icons-round {\n  font-size: 17px !important;\n}\n.btn-nav-famille {\n  background: var(--sidebar-dark);\n  color: #ffffff;\n}\n.btn-nav-famille:hover {\n  background: var(--primary);\n}\n.btn-nav-admin {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.btn-nav-admin:hover {\n  background: var(--primary-border);\n}\n.btn-nav-logout {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.btn-nav-logout:hover {\n  background: #FEE2E2;\n}\n.theme-switch {\n  position: relative;\n}\n.theme-switch-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px 8px 10px;\n  border-radius: 11px;\n  background: rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.theme-switch-btn:hover,\n.theme-switch-btn.open {\n  background: rgba(15, 23, 42, 0.07);\n  border-color: rgba(15, 23, 42, 0.14);\n}\n.theme-switch-dot {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.6), 0 0 0 3px rgba(15, 23, 42, 0.08);\n}\n.theme-switch-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.theme-switch-chevron {\n  font-size: 18px !important;\n  color: #9CA3AF;\n  transition: transform 0.15s ease;\n}\n.theme-switch-btn.open .theme-switch-chevron {\n  transform: rotate(180deg);\n}\n.theme-switch-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 69;\n}\n.theme-switch-menu {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  z-index: 70;\n  width: 190px;\n  background: #ffffff;\n  border: 1px solid #EEF1F5;\n  border-radius: 14px;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.14);\n  padding: 6px;\n  animation: fadeUp 0.15s ease both;\n}\n.theme-switch-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 9px 10px;\n  border-radius: 9px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-family: inherit;\n}\n.theme-switch-option:hover {\n  background: #F9FAFB;\n}\n.theme-switch-option.active {\n  background: var(--primary-bg);\n}\n.theme-switch-label {\n  flex: 1;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: #0F172A;\n}\n.theme-switch-check {\n  font-size: 16px !important;\n  color: var(--primary);\n}\n.nms-theme-picker {\n  padding: 4px 20px 16px;\n  border-bottom: 1px solid #EEF1F5;\n}\n.nms-theme-label {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.nms-theme-dots {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n.nms-theme-dot {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px transparent;\n  transition: box-shadow 0.15s ease;\n}\n.nms-theme-dot.active {\n  box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #0F172A;\n}\n.nav-hamburger {\n  display: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n  background: #F3F4F6;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #0F172A;\n}\n.nav-mobile-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 40;\n}\n.nav-mobile-sheet {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 300px;\n  max-width: 84vw;\n  background: #ffffff;\n  z-index: 50;\n  transform: translateX(100%);\n  transition: transform 0.25s ease;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.12);\n}\n.nav-mobile-sheet.open {\n  transform: translateX(0);\n}\n.nms-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid #EEF1F5;\n}\n.nms-logo {\n  font-size: 15px;\n}\n.nms-close {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  border: none;\n  background: #F3F4F6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.nms-links {\n  display: flex;\n  flex-direction: column;\n  padding: 12px 10px;\n  gap: 2px;\n}\n.nms-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 12px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n}\n.nms-link .material-icons-round {\n  font-size: 19px !important;\n  color: #9CA3AF;\n}\n.nms-link:hover {\n  background: #F9FAFB;\n}\n.nms-actions {\n  margin-top: auto;\n  padding: 16px;\n  border-top: 1px solid #EEF1F5;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.nms-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n.nms-btn .material-icons-round {\n  font-size: 19px !important;\n}\n.nms-btn-famille {\n  background: var(--sidebar-dark);\n  color: #ffffff;\n}\n.nms-btn-admin {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.nms-btn-logout {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.hero {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      160deg,\n      var(--sidebar-dark) 0%,\n      var(--primary-dark) 55%,\n      var(--primary) 100%);\n  padding: 76px 40px 0;\n}\n.hero-sparks {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.spark {\n  position: absolute;\n  bottom: 60px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #A6E3AF;\n  box-shadow: 0 0 8px 2px rgba(166, 227, 175, 0.7);\n  animation: sparkRise 5.5s ease-in infinite;\n}\n.hero-inner {\n  position: relative;\n  max-width: 1160px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 480px;\n  gap: 40px;\n  align-items: center;\n  padding-bottom: 70px;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  color: #C7F0D3;\n  font-size: 12.5px;\n  font-weight: 600;\n  margin-bottom: 22px;\n}\n.hero-badge .material-icons-round {\n  font-size: 15px !important;\n  color: var(--primary-light);\n}\n.hero-title {\n  font-size: 46px;\n  font-weight: 800;\n  line-height: 1.14;\n  letter-spacing: -1px;\n  color: #ffffff;\n}\n.hero-title .accent {\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-light),\n      var(--primary-bg));\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-sub {\n  margin: 20px 0 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.62);\n  max-width: 46ch;\n}\n.hero-entries {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 32px;\n  max-width: 420px;\n}\n.entry-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 15px 18px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  cursor: pointer;\n  transition: transform 0.15s, background 0.15s;\n  text-align: left;\n  width: 100%;\n  font-family: inherit;\n}\n.entry-card:hover {\n  transform: translateX(3px);\n  background: rgba(255, 255, 255, 0.1);\n}\n.entry-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.entry-icon.famille {\n  background: var(--primary-light);\n  color: #0B2914;\n}\n.entry-icon.admin {\n  background: rgba(255, 255, 255, 0.12);\n  color: #ffffff;\n}\n.entry-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.entry-info strong {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 700;\n}\n.entry-info span {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n}\n.entry-card .arrow {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 18px !important;\n}\n.hero-tree-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tree-line {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  animation: drawLine 0.9s ease forwards;\n}\n.tree-line.g-root {\n  animation-delay: 0s;\n}\n.tree-line.g-trunk {\n  animation-delay: 0.15s;\n}\n.tree-line.g-1 {\n  animation-delay: 0.55s;\n}\n.tree-line.g-2 {\n  animation-delay: 0.95s;\n}\n.leaf {\n  transform-box: fill-box;\n  transform-origin: center;\n  opacity: 0;\n  animation: leafPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both, leafFloat 3.2s ease-in-out infinite;\n}\n.stats-section {\n  background: var(--sidebar-dark);\n  padding: 26px 0 30px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 4px 8px;\n}\n.stat-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon .material-icons-round {\n  color: var(--primary-light);\n  font-size: 19px !important;\n}\n.stat-number {\n  font-size: 22px;\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1.1;\n  animation: statPop 0.5s ease both;\n  font-variant-numeric: tabular-nums;\n}\n.stat-box:nth-child(1) .stat-number {\n  animation-delay: 0.55s;\n}\n.stat-box:nth-child(2) .stat-number {\n  animation-delay: 0.65s;\n}\n.stat-box:nth-child(3) .stat-number {\n  animation-delay: 0.75s;\n}\n.stat-box:nth-child(4) .stat-number {\n  animation-delay: 0.85s;\n}\n.stat-label {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sec-tag {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: var(--primary-bg);\n  color: var(--primary);\n  font-size: 11.5px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.sec-tag-dark {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--primary-light);\n}\n.sec-head {\n  text-align: center;\n  max-width: 620px;\n  margin: 0 auto 48px;\n}\n.sec-head h2 {\n  font-size: 32px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  margin: 14px 0 12px;\n  color: #0F172A;\n}\n.sec-head p {\n  font-size: 15px;\n  color: #6B7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.solution {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.sol-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  margin-top: 44px;\n}\n.sol-card {\n  padding: 34px;\n  border-radius: 22px;\n  border: 1px solid #EEF1F5;\n  background: #FAFBFC;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.sol-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(15, 42, 30, 0.08);\n  border-color: #DCE5DF;\n}\n.sol-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 15px;\n  background: var(--sidebar-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.sol-icon .material-icons-round {\n  color: var(--primary-light);\n  font-size: 24px !important;\n}\n.sol-card h3 {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.sol-card p {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.65;\n  margin: 0;\n}\n.features {\n  padding: 100px 0;\n  background: #FAFBFC;\n}\n.feat-layout {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 60px;\n  align-items: start;\n}\n.feat-left .sec-tag {\n  margin-bottom: 18px;\n}\n.feat-left h2 {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  margin: 0 0 14px;\n}\n.feat-left p {\n  font-size: 14.5px;\n  color: #6B7280;\n  line-height: 1.65;\n}\n.feat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.feat-card {\n  background: #ffffff;\n  border: 1px solid #EEF1F5;\n  border-radius: 18px;\n  padding: 24px 20px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.feat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);\n}\n.feat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.feat-icon .material-icons-round {\n  font-size: 21px !important;\n}\n.feat-card h4 {\n  font-size: 14.5px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #0F172A;\n}\n.feat-card p {\n  font-size: 12.5px;\n  color: #6B7280;\n  line-height: 1.55;\n  margin: 0;\n}\n.familles {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.fam-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-top: 44px;\n}\n.fam-card {\n  border: 1px solid #EEF1F5;\n  border-radius: 20px;\n  overflow: hidden;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.fam-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);\n}\n.fam-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.fam-avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.fam-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0;\n}\n.fam-origin {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #6B7280;\n  margin-top: 2px;\n}\n.fam-origin .material-icons-round {\n  font-size: 13px !important;\n}\n.fam-stats {\n  display: flex;\n  border-top: 1px solid #F3F4F6;\n}\n.fam-stat {\n  flex: 1;\n  text-align: center;\n  padding: 14px 0;\n}\n.fam-stat + .fam-stat {\n  border-left: 1px solid #F3F4F6;\n}\n.fam-stat-val {\n  display: block;\n  font-size: 17px;\n  font-weight: 800;\n}\n.fam-stat-label {\n  font-size: 10.5px;\n  color: #6B7280;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.testimonials {\n  padding: 100px 0;\n  background: var(--sidebar-dark);\n}\n.testimonials .sec-head p {\n  color: rgba(255, 255, 255, 0.55);\n}\n.testimonials .sec-head h2 {\n  color: #ffffff;\n}\n.testi-wrap {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.testi-card {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 24px;\n  padding: 40px;\n}\n.testi-quote-icon {\n  color: var(--primary-light);\n  font-size: 30px !important;\n  margin-bottom: 14px;\n  display: block;\n}\n.testi-text {\n  font-size: 17px;\n  line-height: 1.65;\n  color: rgba(255, 255, 255, 0.88);\n  margin: 0 0 26px;\n  font-weight: 300;\n}\n.testi-author {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.testi-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.testi-name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #ffffff;\n}\n.testi-role {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.65);\n}\n.testi-dots {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 26px;\n}\n.testi-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.testi-dot.active {\n  background: var(--primary-light);\n  width: 22px;\n  border-radius: 5px;\n}\n.pricing {\n  padding: 100px 0;\n  background: #FAFBFC;\n}\n.pricing-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-top: 44px;\n  align-items: stretch;\n}\n.price-card {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #EEF1F5;\n  border-radius: 22px;\n  padding: 32px 28px;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.price-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 30px rgba(15, 42, 30, 0.08);\n  border-color: #DCE5DF;\n}\n.price-card-highlight {\n  border-color: var(--primary);\n  box-shadow: 0 14px 30px color-mix(in srgb, var(--primary) 12%, transparent);\n}\n.price-badge {\n  position: absolute;\n  top: -13px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: #ffffff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 5px 14px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.price-label {\n  font-size: 17px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 6px 0 14px;\n}\n.price-value {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 22px;\n}\n.price-amount {\n  font-size: 30px;\n  font-weight: 800;\n  color: #0F172A;\n  letter-spacing: -0.5px;\n}\n.price-period {\n  font-size: 13px;\n  color: #6B7280;\n}\n.price-features {\n  list-style: none;\n  margin: 0 0 26px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  flex: 1;\n}\n.price-features li {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 13.5px;\n  color: #374151;\n  line-height: 1.4;\n}\n.price-features .material-icons-round {\n  font-size: 17px !important;\n  color: var(--primary);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.price-cta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 13.5px;\n  font-weight: 700;\n  text-align: center;\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 1px solid var(--primary-border);\n}\n.price-cta:hover {\n  background: var(--primary-border);\n  text-decoration: none;\n}\n.price-cta-primary {\n  background: var(--primary);\n  color: #ffffff;\n  border-color: var(--primary);\n}\n.price-cta-primary:hover {\n  background: var(--primary-dark);\n}\n.mobile-download {\n  padding: 90px 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark),\n      var(--primary));\n}\n.mobile-download-inner {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  gap: 48px;\n}\n.mdl-text .sec-tag {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--primary-light);\n  margin-bottom: 16px;\n}\n.mdl-text h2 {\n  font-size: 30px;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n  margin: 0 0 14px;\n}\n.mdl-text p {\n  font-size: 14.5px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.65;\n  max-width: 460px;\n  margin: 0 0 26px;\n}\n.mdl-badges {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.store-badge {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 18px;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n}\n.store-badge .material-icons-round {\n  font-size: 24px !important;\n}\n.store-badge-text {\n  display: flex;\n  flex-direction: column;\n  font-size: 13.5px;\n  font-weight: 700;\n  line-height: 1.3;\n}\n.store-badge-text small {\n  font-size: 10px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.55);\n  text-transform: none;\n}\n.store-badge-soon {\n  opacity: 0.85;\n  cursor: default;\n}\n.mdl-visual {\n  display: flex;\n  justify-content: center;\n}\n.mdl-visual svg {\n  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.35));\n}\n.faq {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.faq-head {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n.faq-head h2 {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  margin: 10px 0 0;\n  color: #0F172A;\n}\n.faq-toggle-all {\n  display: flex;\n  gap: 10px;\n}\n.faq-toggle-btn {\n  padding: 9px 16px;\n  border-radius: 10px;\n  border: 1.5px solid #EEF1F5;\n  background: #ffffff;\n  color: #374151;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.faq-toggle-btn:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.faq-toggle-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.faq-list {\n  max-width: 780px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n.faq-item {\n  border-bottom: 1px solid #EEF1F5;\n}\n.faq-question {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 22px 4px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-family: inherit;\n}\n.faq-num {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.faq-question-text {\n  flex: 1;\n  font-size: 15.5px;\n  font-weight: 600;\n  color: #0F172A;\n}\n.faq-icon {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--primary-bg);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px !important;\n}\n.faq-item.open .faq-icon {\n  background: var(--primary);\n  color: #ffffff;\n}\n.faq-answer {\n  padding: 0 4px 24px 44px;\n  animation: fadeUp 0.2s ease;\n}\n.faq-answer p {\n  margin: 0;\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.65;\n}\n.cta {\n  padding: 90px 0;\n  background: #ffffff;\n}\n.cta-box {\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 56px;\n  border-radius: 28px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark),\n      var(--primary));\n  position: relative;\n  overflow: hidden;\n}\n.cta-box h2 {\n  font-size: 30px;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.5px;\n}\n.cta-box p {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 14px 0 30px;\n}\n.cta-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cta-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 24px;\n  border-radius: 13px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n}\n.cta-btn .material-icons-round {\n  font-size: 18px !important;\n}\n.cta-btn-primary {\n  background: var(--primary-light);\n  color: #0B2914;\n  animation: ctaGlow 2.4s ease-in-out infinite;\n}\n.cta-btn-primary:hover {\n  animation: none;\n}\n.cta-btn-ghost {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.landing-footer {\n  padding: 28px 0;\n  border-top: 1px solid #EEF1F5;\n}\n.footer-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.footer-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  font-weight: 700;\n  color: #0F172A;\n}\n.footer-sep {\n  color: #D1D5DB;\n}\n.footer-by {\n  color: #6B7280;\n  font-weight: 400;\n}\n.footer-links {\n  display: flex;\n  gap: 22px;\n}\n.footer-links a {\n  font-size: 13px;\n  color: #6B7280;\n}\n.footer-links a:hover {\n  color: #0F172A;\n}\n.footer-copy {\n  font-size: 12px;\n  color: #6B7280;\n}\n@media (max-width: 900px) {\n  .landing-nav {\n    padding: 0 20px;\n  }\n  .nav-links,\n  .nav-actions .btn-nav-famille,\n  .nav-actions .btn-nav-admin,\n  .nav-actions .btn-nav-logout,\n  .theme-switch {\n    display: none;\n  }\n  .nav-hamburger {\n    display: flex;\n  }\n  .hero {\n    padding: 76px 20px 0;\n  }\n  .hero-inner {\n    grid-template-columns: 1fr;\n    padding-bottom: 40px;\n    text-align: center;\n  }\n  .hero-title {\n    font-size: 32px;\n  }\n  .hero-entries {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .hero-tree-wrap svg {\n    width: 280px;\n    height: auto;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sol-grid,\n  .fam-grid {\n    grid-template-columns: 1fr;\n  }\n  .feat-layout {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .feat-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .solution,\n  .features,\n  .familles,\n  .testimonials,\n  .pricing,\n  .faq {\n    padding: 64px 0;\n  }\n  .pricing-grid {\n    grid-template-columns: 1fr;\n    max-width: 380px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .mobile-download {\n    padding: 56px 0;\n  }\n  .mobile-download-inner {\n    grid-template-columns: 1fr;\n    text-align: center;\n    gap: 32px;\n  }\n  .mdl-text p {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .mdl-badges {\n    justify-content: center;\n  }\n  .mdl-visual svg {\n    width: 160px;\n    height: auto;\n  }\n  .faq-question-text {\n    font-size: 14px;\n  }\n  .faq-answer {\n    padding-left: 4px;\n  }\n  .cta-box {\n    padding: 36px 24px;\n  }\n  .footer-inner {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ApiService }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/landing/landing.component.ts", lineNumber: 33 });
})();

// src/app/app-routing-module.ts
var routes = [
  { path: "", component: LandingComponent, pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import("./chunk-3DR3YREU.js").then((m) => m.AuthModule)
  },
  {
    path: "app",
    canActivate: [authGuard, roleGuard(["admin", "gestionnaire"])],
    loadChildren: () => import("./chunk-MZZ72LBO.js").then((m) => m.ShellModule)
  },
  {
    path: "famille",
    loadChildren: () => import("./chunk-C5H4TFYH.js").then((m) => m.FamilleModule)
  },
  {
    path: "superadmin",
    loadChildren: () => import("./chunk-UMUU5U6B.js").then((m) => m.SuperAdminModule)
  },
  { path: "**", redirectTo: "" }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/core/toast-container.component.ts
function ToastContainerComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 6);
    \u0275\u0275listener("click", function ToastContainerComponent_div_0_div_1_Template_button_click_5_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dismiss(t_r2.id));
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("toast-" + t_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.iconFor(t_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
function ToastContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ToastContainerComponent_div_0_div_1_Template, 8, 4, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toasts_r4 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", toasts_r4)("ngForTrackBy", ctx_r2.trackById);
  }
}
var ToastContainerComponent = class _ToastContainerComponent {
  toastService;
  toasts$;
  constructor(toastService) {
    this.toastService = toastService;
    this.toasts$ = this.toastService.toasts$;
  }
  iconFor(type) {
    return type === "success" ? "check_circle" : type === "error" ? "error" : "info";
  }
  dismiss(id) {
    this.toastService.dismiss(id);
  }
  trackById(_, item) {
    return item.id;
  }
  static \u0275fac = function ToastContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], standalone: false, decls: 2, vars: 3, consts: [["class", "toast-stack", 4, "ngIf"], [1, "toast-stack"], ["class", "toast", 3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "toast"], [1, "material-icons-round", "toast-icon"], [1, "toast-message"], ["aria-label", "Fermer", 1, "toast-close", 3, "click"], [1, "material-icons-round"]], template: function ToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ToastContainerComponent_div_0_Template, 2, 2, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.toasts$));
    }
  }, dependencies: [NgForOf, NgIf, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 9999;\n  pointer-events: none;\n}\n.toast-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 380px;\n}\n.toast[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 14px 14px 16px;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.08);\n  border-left: 4px solid #9CA3AF;\n  animation: _ngcontent-%COMP%_toastIn 0.25s ease-out;\n  font-size: 13.5px;\n  line-height: 1.5;\n}\n@keyframes _ngcontent-%COMP%_toastIn {\n  from {\n    opacity: 0;\n    transform: translateX(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.toast-success[_ngcontent-%COMP%] {\n  border-left-color: #10B981;\n}\n.toast-success[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.toast-error[_ngcontent-%COMP%] {\n  border-left-color: #EF4444;\n}\n.toast-error[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.toast-info[_ngcontent-%COMP%] {\n  border-left-color: #3B82F6;\n}\n.toast-info[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: #3B82F6;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.toast-message[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #1F2937;\n}\n.toast-close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 6px;\n  color: #9CA3AF;\n}\n.toast-close[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  background: #F3F4F6;\n  color: #374151;\n}\n@media (max-width: 480px) {\n  [_nghost-%COMP%] {\n    top: auto;\n    bottom: 16px;\n    left: 16px;\n    right: 16px;\n  }\n  .toast-stack[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=toast-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerComponent, [{
    type: Component,
    args: [{ selector: "app-toast-container", standalone: false, template: `<div class="toast-stack" *ngIf="toasts$ | async as toasts">\r
  <div class="toast" *ngFor="let t of toasts; trackBy: trackById" [class]="'toast-' + t.type">\r
    <span class="material-icons-round toast-icon">{{ iconFor(t.type) }}</span>\r
    <span class="toast-message">{{ t.message }}</span>\r
    <button class="toast-close" (click)="dismiss(t.id)" aria-label="Fermer">\r
      <span class="material-icons-round">close</span>\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/core/toast-container.component.scss */\n:host {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 9999;\n  pointer-events: none;\n}\n.toast-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 380px;\n}\n.toast {\n  pointer-events: auto;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 14px 14px 14px 16px;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.08);\n  border-left: 4px solid #9CA3AF;\n  animation: toastIn 0.25s ease-out;\n  font-size: 13.5px;\n  line-height: 1.5;\n}\n@keyframes toastIn {\n  from {\n    opacity: 0;\n    transform: translateX(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.toast-success {\n  border-left-color: #10B981;\n}\n.toast-success .toast-icon {\n  color: #10B981;\n}\n.toast-error {\n  border-left-color: #EF4444;\n}\n.toast-error .toast-icon {\n  color: #EF4444;\n}\n.toast-info {\n  border-left-color: #3B82F6;\n}\n.toast-info .toast-icon {\n  color: #3B82F6;\n}\n.toast-icon {\n  font-size: 20px !important;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.toast-message {\n  flex: 1;\n  color: #1F2937;\n}\n.toast-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 6px;\n  color: #9CA3AF;\n}\n.toast-close .material-icons-round {\n  font-size: 16px !important;\n}\n.toast-close:hover {\n  background: #F3F4F6;\n  color: #374151;\n}\n@media (max-width: 480px) {\n  :host {\n    top: auto;\n    bottom: 16px;\n    left: 16px;\n    right: 16px;\n  }\n  .toast-stack {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=toast-container.component.css.map */\n"] }]
  }], () => [{ type: ToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src/app/core/toast-container.component.ts", lineNumber: 11 });
})();

// src/app/app.ts
var App = class _App {
  router;
  renderer;
  constructor(router, renderer, _theme) {
    this.router = router;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects;
      const theme = url.startsWith("/app") ? "gestionnaire" : url.startsWith("/famille") ? "famille" : "default";
      this.renderer.setAttribute(document.body, "data-theme", theme);
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], standalone: false, decls: 2, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toast-container");
    }
  }, dependencies: [RouterOutlet, ToastContainerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: "<router-outlet></router-outlet>\r\n<app-toast-container></app-toast-container>\r\n" }]
  }], () => [{ type: Router }, { type: Renderer2 }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/app/core/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  if (req.url.includes("/api/superadmin")) {
    return next(req);
  }
  const token = localStorage.getItem("mb_token");
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};

// src/app/core/loading.interceptor.ts
var loadingInterceptor = (req, next) => {
  const loading = inject(LoadingService);
  loading.start();
  return next(req).pipe(finalize(() => loading.stop()));
};

// src/app/core/error.interceptor.ts
var SILENT_PREFIXES = ["/api/auth/"];
var errorInterceptor = (req, next) => {
  const toast = inject(ToastService);
  return next(req).pipe(catchError((err) => {
    if (err instanceof HttpErrorResponse) {
      const isSilent = SILENT_PREFIXES.some((p) => req.url.includes(p));
      if (!isSilent) {
        const backendMessage = err.error?.error;
        const message = backendMessage || (err.status === 0 ? "Connexion au serveur impossible. V\xE9rifiez votre r\xE9seau." : "Une erreur est survenue. R\xE9essayez.");
        toast.error(message);
      }
    }
    return throwError(() => err);
  }));
};

// src/app/app-module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [App] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor, errorInterceptor]))
  ], imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    })
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [App, LandingComponent, ToastContainerComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
          enabled: !isDevMode(),
          registrationStrategy: "registerWhenStable:30000"
        })
      ],
      providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor, errorInterceptor]))
      ],
      bootstrap: [App]
    }]
  }], null, null);
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
