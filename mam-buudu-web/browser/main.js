import {
  LoadingService,
  ThemeService
} from "./chunk-RJJTJRSQ.js";
import {
  AuthService,
  BrowserModule,
  Component,
  NavigationEnd,
  NgForOf,
  NgIf,
  NgModule,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  filter,
  finalize,
  inject,
  platformBrowser,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UCCPUYZ5.js";
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
function LandingComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 111)(2, "span", 2);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Espace Famille ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 112)(6, "span", 2);
    \u0275\u0275text(7, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Administration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function LandingComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 113)(2, "span", 2);
    \u0275\u0275text(3, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mon espace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 114);
    \u0275\u0275listener("click", function LandingComponent_ng_container_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(6, "span", 2);
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
function LandingComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275listener("click", function LandingComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function LandingComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 116);
    \u0275\u0275listener("click", function LandingComponent_ng_container_44_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Espace Famille ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 117);
    \u0275\u0275listener("click", function LandingComponent_ng_container_44_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Administration ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function LandingComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 118);
    \u0275\u0275listener("click", function LandingComponent_ng_container_45_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Mon espace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 119);
    \u0275\u0275listener("click", function LandingComponent_ng_container_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.logout();
      return \u0275\u0275resetView(ctx_r1.navOpen = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
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
function LandingComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 120)(2, "div", 121)(3, "span", 2);
    \u0275\u0275text(4, "family_restroom");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 122)(6, "strong");
    \u0275\u0275text(7, "Espace Famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Pour les membres de la famille");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 123);
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 124)(13, "div", 125)(14, "span", 2);
    \u0275\u0275text(15, "admin_panel_settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 122)(17, "strong");
    \u0275\u0275text(18, "Espace Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Pour les gestionnaires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 123);
    \u0275\u0275text(22, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function LandingComponent_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 126)(2, "div", 121)(3, "span", 2);
    \u0275\u0275text(4, "dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 122)(6, "strong");
    \u0275\u0275text(7, "Retour \xE0 mon espace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 123);
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 127);
    \u0275\u0275listener("click", function LandingComponent_ng_container_104_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(13, "div", 128)(14, "span", 2);
    \u0275\u0275text(15, "logout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 122)(17, "strong");
    \u0275\u0275text(18, "Se d\xE9connecter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Quitter la session");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 123);
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
function LandingComponent_div_212_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "div", 130)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", f_r7.color + "18")("color", f_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r7.icon);
  }
}
function LandingComponent_div_223_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132)(2, "div", 133);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 134)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 135)(8, "span", 2);
    \u0275\u0275text(9, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 136)(12, "div", 137)(13, "span", 138);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 139);
    \u0275\u0275text(16, "Membres");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 140);
    \u0275\u0275elementStart(18, "div", 137)(19, "span", 138);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 139);
    \u0275\u0275text(22, "G\xE9n\xE9rations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 140);
    \u0275\u0275elementStart(24, "div", 137)(25, "span", 138);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 139);
    \u0275\u0275text(28, "Unions");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "linear-gradient(135deg," + f_r8.color + "22 0%, " + f_r8.color + "0a 100%)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", f_r8.color + "22")("color", f_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r8.initiale, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Famille ", f_r8.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", f_r8.origine);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", f_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.membres);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", f_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.generations);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", f_r8.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.unions);
  }
}
function LandingComponent_div_235_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "div", 142)(2, "div", 143)(3, "span", 144);
    \u0275\u0275text(4, "format_quote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 145)(8, "div", 146);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r9.texte);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", t_r9.color + "22")("color", t_r9.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r9.initiale, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r9.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9.role);
  }
}
function LandingComponent_button_241_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 147);
    \u0275\u0275listener("click", function LandingComponent_button_241_Template_button_click_0_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToSlide(i_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r11 === ctx_r1.currentSlide);
  }
}
var LandingComponent = class _LandingComponent {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
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
    return new (__ngFactoryType__ || _LandingComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], standalone: false, decls: 287, vars: 20, consts: [[1, "landing-nav"], ["routerLink", "/", 1, "nav-logo"], [1, "material-icons-round"], [1, "nav-links"], ["href", "#features", 1, "nav-link"], ["href", "#familles", 1, "nav-link"], ["href", "#temoignages", 1, "nav-link"], [1, "nav-actions"], [4, "ngIf"], ["aria-label", "Menu", 1, "nav-hamburger", 3, "click"], ["class", "nav-mobile-overlay", 3, "click", 4, "ngIf"], [1, "nav-mobile-sheet"], [1, "nms-header"], [1, "nav-logo", "nms-logo"], [1, "nms-close", 3, "click"], [1, "nms-links"], ["href", "#features", 1, "nms-link", 3, "click"], ["href", "#familles", 1, "nms-link", 3, "click"], ["href", "#temoignages", 1, "nms-link", 3, "click"], [1, "nms-actions"], [1, "hero"], [1, "hero-blue"], [1, "hb-bg"], [1, "blob", "blob-1"], [1, "blob", "blob-2"], [1, "blob", "blob-3"], [1, "dots-grid"], [1, "fn-group"], [1, "float-node", "fn-1"], [1, "fn-disc", "fn-disc-blue"], [1, "fn-lbl"], [1, "float-node", "fn-2"], [1, "fn-disc", "fn-disc-pink"], [1, "float-node", "fn-3"], [1, "fn-disc", "fn-disc-green"], [1, "float-node", "fn-4"], [1, "fn-disc", "fn-disc-violet"], [1, "float-node", "fn-5"], [1, "fn-disc", "fn-disc-cyan"], [1, "hero-wave"], ["viewBox", "0 0 1440 90", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "none"], ["d", "M0,45 C360,90 1080,0 1440,45 L1440,90 L0,90 Z", "fill", "#ffffff"], [1, "hero-white"], [1, "hero-badge"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "hero-entries"], [1, "stats-section"], [1, "container"], [1, "stats-grid"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "stat-icon-bg"], [1, "solution-section"], [1, "sol-floats"], [1, "sf-node"], [1, "sf-disc", "sf-glass-blue"], [1, "sf-node", "sf-main"], [1, "sf-disc", "sf-white"], [1, "sf-disc", "sf-glass-dark"], [1, "sol-arrow-indicator"], [1, "sol-arrow-label"], [1, "section-header-landing", "light"], [1, "section-tag", "light-tag"], [1, "sol-cards"], [1, "sol-card"], [1, "sc-icon"], ["id", "features", 1, "features-section"], [1, "features-layout"], [1, "fl-left"], [1, "welcome-badge"], [1, "wb-chevron", "material-icons-round"], [1, "fl-sub"], [1, "fl-evolving"], [1, "fl-right"], [1, "fl-mission"], [1, "fl-feat-icons"], ["class", "ffi-card", 4, "ngFor", "ngForOf"], ["id", "familles", 1, "showcase-section"], [1, "section-header-landing"], [1, "section-tag"], [1, "familles-carousel"], ["class", "famille-card", 4, "ngFor", "ngForOf"], ["id", "temoignages", 1, "testimonials-section"], [1, "testimonial-carousel"], [1, "testimonial-track"], ["class", "testimonial-slide", 4, "ngFor", "ngForOf"], [1, "carousel-controls"], [1, "carousel-btn", 3, "click"], [1, "carousel-dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "cta-section"], [1, "cta-content"], [1, "cta-badge"], [1, "cta-actions"], ["routerLink", "/famille/login", 1, "cta-btn", "cta-btn-famille"], ["routerLink", "/auth/login", 1, "cta-btn", "cta-btn-admin"], [1, "cta-deco"], [1, "cta-blob"], [1, "landing-footer"], [1, "container", "footer-inner"], [1, "footer-brand"], [1, "footer-sep"], [1, "footer-by"], [1, "footer-links"], ["routerLink", "/famille/login"], ["routerLink", "/auth/login"], ["routerLink", "/auth/register"], [1, "footer-copy"], ["routerLink", "/famille/login", 1, "btn-nav-famille"], ["routerLink", "/auth/login", 1, "btn-nav-admin"], [1, "btn-nav-famille", 3, "routerLink"], [1, "btn-nav-logout", 3, "click"], [1, "nav-mobile-overlay", 3, "click"], ["routerLink", "/famille/login", 1, "nms-btn", "nms-btn-famille", 3, "click"], ["routerLink", "/auth/login", 1, "nms-btn", "nms-btn-admin", 3, "click"], [1, "nms-btn", "nms-btn-famille", 3, "click", "routerLink"], [1, "nms-btn", "nms-btn-logout", 3, "click"], ["routerLink", "/famille/login", 1, "entry-card", "entry-famille"], [1, "entry-icon-wrap", "famille-icon"], [1, "entry-info"], [1, "material-icons-round", "entry-arrow"], ["routerLink", "/auth/login", 1, "entry-card", "entry-admin"], [1, "entry-icon-wrap", "admin-icon"], [1, "entry-card", "entry-famille", 3, "routerLink"], [1, "entry-card", "entry-logout", 3, "click"], [1, "entry-icon-wrap", "logout-icon"], [1, "ffi-card"], [1, "ffi-icon"], [1, "famille-card"], [1, "fc-header"], [1, "fc-avatar"], [1, "fc-identity"], [1, "fc-origine"], [1, "fc-stats"], [1, "fc-stat"], [1, "fc-stat-val"], [1, "fc-stat-label"], [1, "fc-divider"], [1, "testimonial-slide"], [1, "testimonial-card"], [1, "testi-quote"], [1, "material-icons-round", "quote-icon"], [1, "testi-author"], [1, "testi-avatar"], [1, "dot", 3, "click"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1)(2, "span", 2);
      \u0275\u0275text(3, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "a", 4);
      \u0275\u0275text(8, "Fonctionnalit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 5);
      \u0275\u0275text(10, "Familles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 6);
      \u0275\u0275text(12, "T\xE9moignages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275template(14, LandingComponent_ng_container_14_Template, 9, 0, "ng-container", 8)(15, LandingComponent_ng_container_15_Template, 9, 1, "ng-container", 8);
      \u0275\u0275elementStart(16, "button", 9);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_16_listener() {
        return ctx.navOpen = !ctx.navOpen;
      });
      \u0275\u0275elementStart(17, "span", 2);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(19, LandingComponent_div_19_Template, 1, 0, "div", 10);
      \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "div", 13)(23, "span", 2);
      \u0275\u0275text(24, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "button", 14);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_27_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(28, "span", 2);
      \u0275\u0275text(29, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 15)(31, "a", 16);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_31_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(32, "span", 2);
      \u0275\u0275text(33, "star");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, "Fonctionnalit\xE9s ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 17);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_35_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(36, "span", 2);
      \u0275\u0275text(37, "family_restroom");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, "Familles ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 18);
      \u0275\u0275listener("click", function LandingComponent_Template_a_click_39_listener() {
        return ctx.navOpen = false;
      });
      \u0275\u0275elementStart(40, "span", 2);
      \u0275\u0275text(41, "format_quote");
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, "T\xE9moignages ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 19);
      \u0275\u0275template(44, LandingComponent_ng_container_44_Template, 9, 0, "ng-container", 8)(45, LandingComponent_ng_container_45_Template, 9, 1, "ng-container", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "section", 20)(47, "div", 21)(48, "div", 22);
      \u0275\u0275element(49, "div", 23)(50, "div", 24)(51, "div", 25)(52, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 27)(54, "div", 28)(55, "div", 29)(56, "span", 2);
      \u0275\u0275text(57, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "span", 30);
      \u0275\u0275text(59, "Arbre");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 31)(61, "div", 32)(62, "span", 2);
      \u0275\u0275text(63, "favorite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "span", 30);
      \u0275\u0275text(65, "Unions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 33)(67, "div", 34)(68, "span", 2);
      \u0275\u0275text(69, "family_restroom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "span", 30);
      \u0275\u0275text(71, "Famille");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 35)(73, "div", 36)(74, "span", 2);
      \u0275\u0275text(75, "auto_stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "span", 30);
      \u0275\u0275text(77, "Stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 37)(79, "div", 38)(80, "span", 2);
      \u0275\u0275text(81, "people");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "span", 30);
      \u0275\u0275text(83, "Membres");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "div", 39);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(85, "svg", 40);
      \u0275\u0275element(86, "path", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(87, "div", 42)(88, "div", 43)(89, "span", 2);
      \u0275\u0275text(90, "auto_awesome");
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, " Application g\xE9n\xE9alogique africaine ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "h1", 44);
      \u0275\u0275text(93, " L'histoire de votre");
      \u0275\u0275element(94, "br");
      \u0275\u0275elementStart(95, "span", 45);
      \u0275\u0275text(96, "famille");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, ",");
      \u0275\u0275element(98, "br");
      \u0275\u0275text(99, " pr\xE9serv\xE9e pour toujours ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 46);
      \u0275\u0275text(101, " Construisez l'arbre g\xE9n\xE9alogique de votre famille, partagez vos stories et connectez les g\xE9n\xE9rations \xE0 travers le temps. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 47);
      \u0275\u0275template(103, LandingComponent_ng_container_103_Template, 23, 0, "ng-container", 8)(104, LandingComponent_ng_container_104_Template, 23, 2, "ng-container", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "section", 48)(106, "div", 49)(107, "div", 50)(108, "div", 51)(109, "span", 52);
      \u0275\u0275text(110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "span", 53);
      \u0275\u0275text(112, "Familles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "span", 54)(114, "span", 2);
      \u0275\u0275text(115, "family_restroom");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div", 51)(117, "span", 52);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "span", 53);
      \u0275\u0275text(120, "Membres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "span", 54)(122, "span", 2);
      \u0275\u0275text(123, "people");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 51)(125, "span", 52);
      \u0275\u0275text(126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "span", 53);
      \u0275\u0275text(128, "Unions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "span", 54)(130, "span", 2);
      \u0275\u0275text(131, "favorite");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 51)(133, "span", 52);
      \u0275\u0275text(134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "span", 53);
      \u0275\u0275text(136, "Stories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "span", 54)(138, "span", 2);
      \u0275\u0275text(139, "auto_stories");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(140, "section", 55)(141, "div", 49)(142, "div", 56)(143, "div", 57)(144, "div", 58)(145, "span", 2);
      \u0275\u0275text(146, "account_tree");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 59)(148, "div", 60)(149, "span", 2);
      \u0275\u0275text(150, "people");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "div", 57)(152, "div", 61)(153, "span", 2);
      \u0275\u0275text(154, "auto_stories");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(155, "div", 62)(156, "span", 2);
      \u0275\u0275text(157, "arrow_upward");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "span", 63);
      \u0275\u0275text(159, "Notre Solution");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 64)(161, "span", 65);
      \u0275\u0275text(162, "Notre Solution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "h2");
      \u0275\u0275text(164, "Mam Buudu simplifie la g\xE9n\xE9alogie,");
      \u0275\u0275element(165, "br");
      \u0275\u0275text(166, "pour toutes les familles.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p");
      \u0275\u0275text(168, "De la cr\xE9ation de l'arbre au partage des stories \u2014 une solution compl\xE8te, accessible en ligne ou hors ligne.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 66)(170, "div", 67)(171, "div", 68)(172, "span", 2);
      \u0275\u0275text(173, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "h3");
      \u0275\u0275text(175, "Sans code, sans effort");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "p");
      \u0275\u0275text(177, "Construisez votre arbre g\xE9n\xE9alogique facilement, sans aucune comp\xE9tence technique. En ligne ou hors ligne.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 67)(179, "div", 68)(180, "span", 2);
      \u0275\u0275text(181, "share");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "h3");
      \u0275\u0275text(183, "Partage en famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "p");
      \u0275\u0275text(185, "Invitez les membres, partagez les stories et connectez les g\xE9n\xE9rations en temps r\xE9el, depuis n'importe o\xF9.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(186, "section", 69)(187, "div", 49)(188, "div", 70)(189, "div", 71)(190, "span", 72)(191, "span", 2);
      \u0275\u0275text(192, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275text(193, " Bienvenue sur Mam Buudu ");
      \u0275\u0275elementStart(194, "span", 73);
      \u0275\u0275text(195, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "h2");
      \u0275\u0275text(197, "G\xE9n\xE9alogie nouvelle");
      \u0275\u0275element(198, "br");
      \u0275\u0275text(199, "g\xE9n\xE9ration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "p", 74);
      \u0275\u0275text(201, "Construite pour \xE9quiper chaque famille d'outils modernes pour pr\xE9server et partager leur histoire.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 75)(203, "h3");
      \u0275\u0275text(204, "\xC9voluer au-del\xE0 des m\xE9thodes traditionnelles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "p");
      \u0275\u0275text(206, "Nous r\xE9pondons aux d\xE9fis de la pr\xE9servation familiale en rempla\xE7ant les albums \xE9parpill\xE9s et la m\xE9moire orale par une plateforme num\xE9rique s\xE9curis\xE9e, accessible \xE0 toute la famille.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(207, "div", 76)(208, "div", 77)(209, "p");
      \u0275\u0275text(210, "Notre mission est d'\xE9quiper les familles africaines d'outils modernes pour rester connect\xE9es et pr\xE9server leur patrimoine \xE0 travers les g\xE9n\xE9rations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 78);
      \u0275\u0275template(212, LandingComponent_div_212_Template, 4, 5, "div", 79);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(213, "section", 80)(214, "div", 49)(215, "div", 81)(216, "span", 82);
      \u0275\u0275text(217, "Familles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "h2");
      \u0275\u0275text(219, "Des familles qui nous font confiance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "p");
      \u0275\u0275text(221, "Rejoignez des centaines de familles qui ont choisi Mam Buudu pour pr\xE9server leur patrimoine.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 83);
      \u0275\u0275template(223, LandingComponent_div_223_Template, 29, 18, "div", 84);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(224, "section", 85)(225, "div", 49)(226, "div", 64)(227, "span", 65);
      \u0275\u0275text(228, "T\xE9moignages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "h2");
      \u0275\u0275text(230, "Ce que disent nos utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "p");
      \u0275\u0275text(232, "Ils ont choisi Mam Buudu pour connecter leur famille \xE0 travers les g\xE9n\xE9rations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 86)(234, "div", 87);
      \u0275\u0275template(235, LandingComponent_div_235_Template, 15, 8, "div", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "div", 89)(237, "button", 90);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_237_listener() {
        return ctx.prevSlide();
      });
      \u0275\u0275elementStart(238, "span", 2);
      \u0275\u0275text(239, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "div", 91);
      \u0275\u0275template(241, LandingComponent_button_241_Template, 1, 2, "button", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "button", 90);
      \u0275\u0275listener("click", function LandingComponent_Template_button_click_242_listener() {
        return ctx.nextSlide();
      });
      \u0275\u0275elementStart(243, "span", 2);
      \u0275\u0275text(244, "chevron_right");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(245, "section", 93)(246, "div", 49)(247, "div", 94)(248, "div", 95)(249, "span", 2);
      \u0275\u0275text(250, "rocket_launch");
      \u0275\u0275elementEnd();
      \u0275\u0275text(251, " Commencez maintenant \u2014 C'est gratuit ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "h2");
      \u0275\u0275text(253, "Pr\xEAt \xE0 connecter votre famille ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "p");
      \u0275\u0275text(255, "Rejoignez des milliers de familles qui pr\xE9servent leur histoire avec Mam Buudu.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "div", 96)(257, "a", 97)(258, "span", 2);
      \u0275\u0275text(259, "family_restroom");
      \u0275\u0275elementEnd();
      \u0275\u0275text(260, " Acc\xE9der \xE0 mon espace famille ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "a", 98)(262, "span", 2);
      \u0275\u0275text(263, "admin_panel_settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(264, " Espace administrateur ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(265, "div", 99);
      \u0275\u0275element(266, "div", 100);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "footer", 101)(268, "div", 102)(269, "div", 103)(270, "span", 2);
      \u0275\u0275text(271, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "span");
      \u0275\u0275text(273, "Mam Buudu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "span", 104);
      \u0275\u0275text(275, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "span", 105);
      \u0275\u0275text(277, "par Sahelys");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "div", 106)(279, "a", 107);
      \u0275\u0275text(280, "Espace Famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "a", 108);
      \u0275\u0275text(282, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "a", 109);
      \u0275\u0275text(284, "Cr\xE9er un espace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 110);
      \u0275\u0275text(286, "\xA9 2025 Sahelys. Tous droits r\xE9serv\xE9s.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.navOpen ? "close" : "menu");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.navOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.navOpen);
      \u0275\u0275advance(24);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(58);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.familles), "+");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.membres), "+");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.unions), "+");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.formatStat(ctx.stats.stories), "+");
      \u0275\u0275advance(78);
      \u0275\u0275property("ngForOf", ctx.features);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.familles);
      \u0275\u0275advance(11);
      \u0275\u0275styleProp("transform", "translateX(-" + ctx.currentSlide * 100 + "%)");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.testimonials);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.testimonials);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  overflow-x: hidden;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.landing-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n  height: 64px;\n  background: rgba(10, 31, 168, 0.88);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.3px;\n  text-decoration: none;\n}\n.nav-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  color: #93C5FD;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.btn-nav-famille[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 30px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.btn-nav-famille[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.btn-nav-famille[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  text-decoration: none;\n}\n.btn-nav-admin[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #ffffff;\n  border-radius: 30px;\n  color: #1445F5;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: all 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-nav-admin[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.btn-nav-admin[_ngcontent-%COMP%]:hover {\n  background: #F0F7FF;\n  text-decoration: none;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.btn-nav-logout[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.35);\n  border-radius: 30px;\n  color: #FCA5A5;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-nav-logout[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.btn-nav-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.28);\n  color: #fff;\n}\n.nav-hamburger[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  color: #fff;\n  cursor: pointer;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.nav-hamburger[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n}\n.nav-hamburger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n}\n.nav-mobile-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 299;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.nav-mobile-sheet[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border-radius: 24px 24px 0 0;\n  z-index: 300;\n  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.15);\n  transform: translateY(100%);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.nav-mobile-sheet.open[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.nms-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px 14px;\n  border-bottom: 1px solid #F0F4FF;\n}\n.nms-logo[_ngcontent-%COMP%] {\n  color: #0A1FA8 !important;\n}\n.nms-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #1445F5 !important;\n}\n.nms-close[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  color: #6B7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nms-close[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.nms-links[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nms-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  color: #374151;\n  font-size: 15px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.nms-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: #9CA3AF;\n}\n.nms-link[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n  text-decoration: none;\n}\n.nms-actions[_ngcontent-%COMP%] {\n  padding: 12px 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-top: 1px solid #F0F4FF;\n}\n.nms-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  border: none;\n  width: 100%;\n  text-align: left;\n  transition: all 0.2s;\n}\n.nms-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.nms-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  opacity: 0.9;\n}\n.nms-btn-famille[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.1),\n      rgba(139, 92, 246, 0.1));\n  color: #7C3AED;\n  border: 1px solid rgba(139, 92, 246, 0.2) !important;\n}\n.nms-btn-admin[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EFF6FF,\n      #E0E7FF);\n  color: #1445F5;\n  border: 1px solid rgba(20, 69, 245, 0.15) !important;\n}\n.nms-btn-logout[_ngcontent-%COMP%] {\n  background: #FFF5F5;\n  color: #EF4444;\n  border: 1px solid rgba(239, 68, 68, 0.2) !important;\n}\n.hero[_ngcontent-%COMP%] {\n  background: #ffffff;\n  overflow: hidden;\n}\n.hero-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  min-height: 420px;\n  padding-top: 64px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hb-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.2;\n}\n.blob-1[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  background: #3B82F6;\n  top: -120px;\n  left: -80px;\n  animation: _ngcontent-%COMP%_blobFloat 8s ease-in-out infinite;\n}\n.blob-2[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 360px;\n  background: #8B5CF6;\n  bottom: -80px;\n  right: 180px;\n  animation: _ngcontent-%COMP%_blobFloat 10s ease-in-out infinite reverse;\n}\n.blob-3[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  background: #06B6D4;\n  top: 120px;\n  right: -60px;\n  animation: _ngcontent-%COMP%_blobFloat 7s ease-in-out infinite 2s;\n}\n.dots-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.07) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n}\n.fn-group[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 300px;\n}\n.float-node[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.fn-disc[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.2);\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n}\n.fn-disc[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\n.fn-disc-blue[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #60A5FA,\n      #2563EB);\n  color: #fff;\n}\n.fn-disc-pink[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  background:\n    linear-gradient(\n      135deg,\n      #F472B6,\n      #DB2777);\n  color: #fff;\n}\n.fn-disc-green[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      #34D399,\n      #059669);\n  color: #fff;\n}\n.fn-disc-green[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 34px !important;\n}\n.fn-disc-violet[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      #A78BFA,\n      #7C3AED);\n  color: #fff;\n}\n.fn-disc-violet[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n.fn-disc-cyan[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 74px;\n  background:\n    linear-gradient(\n      135deg,\n      #22D3EE,\n      #0891B2);\n  color: #fff;\n}\n.fn-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.75);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.fn-1[_ngcontent-%COMP%] {\n  top: 40px;\n  left: 12%;\n  animation: _ngcontent-%COMP%_float 5s ease-in-out infinite;\n}\n.fn-2[_ngcontent-%COMP%] {\n  top: 28px;\n  right: 16%;\n  animation: _ngcontent-%COMP%_float 6.5s ease-in-out infinite 1s;\n}\n.fn-3[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_floatCenter 4.5s ease-in-out infinite 0.5s;\n}\n.fn-4[_ngcontent-%COMP%] {\n  bottom: 32px;\n  right: 22%;\n  animation: _ngcontent-%COMP%_float 7s ease-in-out infinite 2s;\n}\n.fn-5[_ngcontent-%COMP%] {\n  bottom: 24px;\n  left: 18%;\n  animation: _ngcontent-%COMP%_float 5.5s ease-in-out infinite 1.5s;\n}\n.hero-wave[_ngcontent-%COMP%] {\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  position: relative;\n  overflow: hidden;\n}\n.hero-wave[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.hero-white[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 64px 24px 80px;\n  text-align: center;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease both;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  border-radius: 30px;\n  color: #1445F5;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n.hero-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 800;\n  line-height: 1.12;\n  color: #0F172A;\n  margin-bottom: 20px;\n  letter-spacing: -1.5px;\n}\n.gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1445F5,\n      #8B5CF6,\n      #EC4899);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6B7280;\n  line-height: 1.7;\n  margin-bottom: 40px;\n  max-width: 560px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.hero-entries[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.entry-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-decoration: none;\n  transition: all 0.25s;\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.entry-famille[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.07) 0%,\n      rgba(139, 92, 246, 0.07) 100%);\n  border: 1.5px solid rgba(236, 72, 153, 0.2);\n}\n.entry-famille[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.14) 0%,\n      rgba(139, 92, 246, 0.14) 100%);\n  border-color: rgba(236, 72, 153, 0.4);\n  transform: translateX(6px);\n  text-decoration: none;\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.12);\n}\n.entry-admin[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 69, 245, 0.06) 0%,\n      rgba(6, 182, 212, 0.06) 100%);\n  border: 1.5px solid rgba(20, 69, 245, 0.15);\n}\n.entry-admin[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 69, 245, 0.12) 0%,\n      rgba(6, 182, 212, 0.12) 100%);\n  border-color: rgba(20, 69, 245, 0.3);\n  transform: translateX(6px);\n  text-decoration: none;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.1);\n}\n.entry-logout[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.07) 0%,\n      rgba(220, 38, 38, 0.05) 100%);\n  border: 1.5px solid rgba(239, 68, 68, 0.2);\n  width: 100%;\n  text-align: left;\n}\n.entry-logout[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.14) 0%,\n      rgba(220, 38, 38, 0.1) 100%);\n  border-color: rgba(239, 68, 68, 0.4);\n  transform: translateX(6px);\n}\n.entry-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.entry-icon-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n.famille-icon[_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.12);\n  color: #EC4899;\n}\n.admin-icon[_ngcontent-%COMP%] {\n  background: rgba(20, 69, 245, 0.12);\n  color: #1445F5;\n}\n.logout-icon[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #EF4444;\n}\n.entry-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.entry-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n}\n.entry-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n}\n.entry-arrow[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: #CBD5E1;\n}\n.stats-section[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: #ffffff;\n  border-top: 1px solid #E2E8F0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 32px 20px;\n  border-radius: 16px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n.stat-item[_ngcontent-%COMP%]:hover {\n  border-color: #BFDBFE;\n  box-shadow: 0 4px 24px rgba(20, 69, 245, 0.08);\n  transform: translateY(-2px);\n}\n.stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 42px;\n  font-weight: 800;\n  color: #0F172A;\n  line-height: 1;\n  margin-bottom: 8px;\n  letter-spacing: -1px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6B7280;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n.stat-icon-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  opacity: 0.05;\n}\n.stat-icon-bg[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 72px !important;\n  color: #1445F5;\n}\n.solution-section[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n}\n.solution-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.sol-floats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  position: relative;\n  z-index: 2;\n}\n.sf-node[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sf-main[_ngcontent-%COMP%]   .sf-disc[_ngcontent-%COMP%] {\n  width: 80px !important;\n  height: 80px !important;\n}\n.sf-main[_ngcontent-%COMP%]   .sf-disc[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 32px !important;\n}\n.sf-disc[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n}\n.sf-disc[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 26px !important;\n}\n.sf-glass-blue[_ngcontent-%COMP%] {\n  background: rgba(96, 165, 250, 0.7);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n}\n.sf-white[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #1445F5;\n  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.sf-glass-dark[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.8);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.85);\n}\n.sol-arrow-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 40px;\n  position: relative;\n  z-index: 2;\n}\n.sol-arrow-indicator[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.sol-arrow-label[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.sol-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  max-width: 720px;\n  margin: 40px auto 0;\n  position: relative;\n  z-index: 2;\n}\n.sol-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n  padding: 28px 24px;\n  text-align: left;\n  transition: all 0.2s;\n}\n.sol-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-4px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);\n}\n.sol-card[_ngcontent-%COMP%]   .sc-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.sol-card[_ngcontent-%COMP%]   .sc-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n  color: #fff;\n}\n.sol-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.sol-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.65;\n}\n.section-header-landing[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n  position: relative;\n  z-index: 2;\n}\n.section-header-landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 12px 0 16px;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n}\n.section-header-landing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6B7280;\n  max-width: 520px;\n  margin: 0 auto;\n  line-height: 1.7;\n}\n.section-header-landing.light[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.section-header-landing.light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n}\n.section-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 14px;\n  background: #EFF6FF;\n  color: #1445F5;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n.section-tag.light-tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: rgba(255, 255, 255, 0.85);\n}\n.features-section[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.features-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: flex-start;\n}\n.welcome-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px 5px 8px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 20px;\n}\n.welcome-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: #1445F5;\n}\n.welcome-badge[_ngcontent-%COMP%]   .wb-chevron[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: #3B82F6;\n}\n.fl-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 800;\n  color: #0F172A;\n  letter-spacing: -0.5px;\n  line-height: 1.15;\n  margin-bottom: 16px;\n}\n.fl-left[_ngcontent-%COMP%]   .fl-sub[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6B7280;\n  line-height: 1.7;\n  margin-bottom: 48px;\n}\n.fl-evolving[_ngcontent-%COMP%] {\n  padding: 28px 0 0;\n  border-top: 1px solid #E2E8F0;\n}\n.fl-evolving[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  margin-bottom: 12px;\n  line-height: 1.3;\n}\n.fl-evolving[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.75;\n}\n.fl-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 52px;\n}\n.fl-mission[_ngcontent-%COMP%] {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 16px;\n  padding: 20px 22px;\n}\n.fl-mission[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n  line-height: 1.75;\n}\n.fl-feat-icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ffi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: #ffffff;\n  border: 1px solid #E2E8F0;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  transition: all 0.2s;\n  cursor: default;\n}\n.ffi-card[_ngcontent-%COMP%]:nth-child(1) {\n  align-self: flex-end;\n}\n.ffi-card[_ngcontent-%COMP%]:nth-child(2) {\n  align-self: flex-end;\n  margin-right: 60px;\n}\n.ffi-card[_ngcontent-%COMP%]:nth-child(3) {\n  align-self: flex-end;\n  margin-right: 20px;\n}\n.ffi-card[_ngcontent-%COMP%]:nth-child(4) {\n  align-self: flex-end;\n  margin-right: 80px;\n}\n.ffi-card[_ngcontent-%COMP%]:nth-child(5) {\n  align-self: flex-end;\n  margin-right: 40px;\n}\n.ffi-card[_ngcontent-%COMP%]:nth-child(6) {\n  align-self: flex-end;\n}\n.ffi-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08) translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.ffi-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ffi-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.showcase-section[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background: #F8FAFC;\n  border-top: 1px solid #E2E8F0;\n}\n.familles-carousel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n.famille-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid #E2E8F0;\n  overflow: hidden;\n  background: #ffffff;\n  transition: all 0.25s;\n}\n.famille-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transform: translateY(-4px);\n  border-color: #BFDBFE;\n}\n.fc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n}\n.fc-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.fc-identity[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 3px;\n}\n.fc-origine[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  color: #6B7280;\n}\n.fc-origine[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n.fc-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 20px;\n  border-top: 1px solid #E2E8F0;\n}\n.fc-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fc-stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.fc-stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.fc-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #E2E8F0;\n}\n.testimonials-section[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8 0%,\n      #1445F5 60%,\n      #1E40AF 100%);\n  overflow: hidden;\n}\n.testimonial-carousel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 24px;\n}\n.testimonial-track[_ngcontent-%COMP%] {\n  display: flex;\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.testimonial-slide[_ngcontent-%COMP%] {\n  min-width: 100%;\n  padding: 0 20px;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 24px;\n  padding: 40px 48px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.testi-quote[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 28px;\n}\n.testi-quote[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n  color: rgba(147, 197, 253, 0.35);\n  position: absolute;\n  top: -12px;\n  left: -8px;\n}\n.testi-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.85);\n  line-height: 1.8;\n  font-style: italic;\n  padding-left: 32px;\n}\n.testi-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.testi-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.testi-author[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.testi-author[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #fff;\n}\n.testi-author[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.carousel-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 32px;\n}\n.carousel-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.carousel-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.carousel-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dot.active[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 24px;\n  border-radius: 4px;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #EFF6FF 0%,\n      #F5F3FF 100%);\n  overflow: hidden;\n  position: relative;\n}\n.cta-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n}\n.cta-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  border-radius: 30px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1445F5;\n  margin-bottom: 20px;\n}\n.cta-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 800;\n  color: #0F172A;\n  margin-bottom: 14px;\n  letter-spacing: -0.5px;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6B7280;\n  margin-bottom: 40px;\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 28px;\n  border-radius: 16px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.25s;\n}\n.cta-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  transform: translateY(-2px);\n}\n.cta-btn-famille[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #8B5CF6);\n  color: #fff;\n  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.35);\n}\n.cta-btn-famille[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(236, 72, 153, 0.45);\n}\n.cta-btn-admin[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0F172A;\n  border: 1.5px solid #E5E7EB;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.cta-btn-admin[_ngcontent-%COMP%]:hover {\n  border-color: #BFDBFE;\n  color: #1445F5;\n}\n.cta-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #BFDBFE,\n      #DDD6FE);\n  opacity: 0.3;\n  right: -200px;\n  top: -200px;\n  filter: blur(80px);\n  pointer-events: none;\n}\n.landing-footer[_ngcontent-%COMP%] {\n  background: #0A1FA8;\n  padding: 28px 0;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 600;\n  font-size: 15px;\n}\n.footer-brand[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: #93C5FD;\n}\n.footer-sep[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n.footer-by[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 12px;\n  font-weight: 400;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 13px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n}\n.footer-copy[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 12px;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_blobFloat {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(20px, -30px) scale(1.05);\n  }\n  66% {\n    transform: translate(-15px, 15px) scale(0.95);\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatCenter {\n  0%, 100% {\n    transform: translate(-50%, -50%) translateY(0);\n  }\n  50% {\n    transform: translate(-50%, -50%) translateY(-12px);\n  }\n}\n@media (max-width: 1024px) {\n  .features-layout[_ngcontent-%COMP%] {\n    gap: 48px;\n  }\n  .fl-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n}\n@media (max-width: 900px) {\n  .features-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .fl-right[_ngcontent-%COMP%] {\n    padding-top: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .fl-feat-icons[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .ffi-card[_ngcontent-%COMP%] {\n    align-self: auto !important;\n    margin-right: 0 !important;\n  }\n  .familles-carousel[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .sol-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 400px;\n  }\n  .fn-1[_ngcontent-%COMP%], \n   .fn-2[_ngcontent-%COMP%], \n   .fn-4[_ngcontent-%COMP%], \n   .fn-5[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .fn-3[_ngcontent-%COMP%] {\n    top: 50%;\n    left: 50%;\n  }\n}\n@media (max-width: 640px) {\n  .hero-blue[_ngcontent-%COMP%] {\n    min-height: 280px;\n  }\n  .hero-white[_ngcontent-%COMP%] {\n    padding: 48px 20px 60px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    letter-spacing: -0.5px;\n  }\n  .features-section[_ngcontent-%COMP%], \n   .showcase-section[_ngcontent-%COMP%], \n   .testimonials-section[_ngcontent-%COMP%], \n   .cta-section[_ngcontent-%COMP%], \n   .solution-section[_ngcontent-%COMP%] {\n    padding: 64px 0;\n  }\n  .familles-carousel[_ngcontent-%COMP%], \n   .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .landing-nav[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .btn-nav-admin[_ngcontent-%COMP%], \n   .btn-nav-famille[_ngcontent-%COMP%], \n   .btn-nav-logout[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .footer-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .section-header-landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .fl-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .sol-floats[_ngcontent-%COMP%]   .sf-node[_ngcontent-%COMP%]:not(.sf-main) {\n    display: none;\n  }\n  .testimonial-card[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n  .testi-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: false, template: `<!-- ===== NAVBAR ===== -->
<nav class="landing-nav">
  <a routerLink="/" class="nav-logo">
    <span class="material-icons-round">account_tree</span>
    <span>Mam Buudu</span>
  </a>
  <div class="nav-links">
    <a href="#features" class="nav-link">Fonctionnalit\xE9s</a>
    <a href="#familles" class="nav-link">Familles</a>
    <a href="#temoignages" class="nav-link">T\xE9moignages</a>
  </div>
  <div class="nav-actions">
    <ng-container *ngIf="!isLoggedIn">
      <a routerLink="/famille/login" class="btn-nav-famille">
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
      <span class="material-icons-round">account_tree</span>
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
    <a href="#temoignages" class="nms-link" (click)="navOpen=false">
      <span class="material-icons-round">format_quote</span>T\xE9moignages
    </a>
  </div>
  <div class="nms-actions">
    <ng-container *ngIf="!isLoggedIn">
      <a routerLink="/famille/login" class="nms-btn nms-btn-famille" (click)="navOpen=false">
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

  <!-- Zone bleue : \xE9l\xE9ments flottants -->
  <div class="hero-blue">
    <div class="hb-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="dots-grid"></div>
    </div>
    <div class="fn-group">
      <div class="float-node fn-1">
        <div class="fn-disc fn-disc-blue"><span class="material-icons-round">account_tree</span></div>
        <span class="fn-lbl">Arbre</span>
      </div>
      <div class="float-node fn-2">
        <div class="fn-disc fn-disc-pink"><span class="material-icons-round">favorite</span></div>
        <span class="fn-lbl">Unions</span>
      </div>
      <div class="float-node fn-3">
        <div class="fn-disc fn-disc-green"><span class="material-icons-round">family_restroom</span></div>
        <span class="fn-lbl">Famille</span>
      </div>
      <div class="float-node fn-4">
        <div class="fn-disc fn-disc-violet"><span class="material-icons-round">auto_stories</span></div>
        <span class="fn-lbl">Stories</span>
      </div>
      <div class="float-node fn-5">
        <div class="fn-disc fn-disc-cyan"><span class="material-icons-round">people</span></div>
        <span class="fn-lbl">Membres</span>
      </div>
    </div>
  </div>

  <!-- Vague bleu \u2192 blanc -->
  <div class="hero-wave">
    <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,45 C360,90 1080,0 1440,45 L1440,90 L0,90 Z" fill="#ffffff"/>
    </svg>
  </div>

  <!-- Zone blanche : contenu principal -->
  <div class="hero-white">
    <div class="hero-badge">
      <span class="material-icons-round">auto_awesome</span>
      Application g\xE9n\xE9alogique africaine
    </div>
    <h1 class="hero-title">
      L'histoire de votre<br/>
      <span class="gradient-text">famille</span>,<br/>
      pr\xE9serv\xE9e pour toujours
    </h1>
    <p class="hero-subtitle">
      Construisez l'arbre g\xE9n\xE9alogique de votre famille, partagez vos stories et connectez les g\xE9n\xE9rations \xE0 travers le temps.
    </p>
    <div class="hero-entries">
      <ng-container *ngIf="!isLoggedIn">
        <a routerLink="/famille/login" class="entry-card entry-famille">
          <div class="entry-icon-wrap famille-icon">
            <span class="material-icons-round">family_restroom</span>
          </div>
          <div class="entry-info">
            <strong>Espace Famille</strong>
            <span>Pour les membres de la famille</span>
          </div>
          <span class="material-icons-round entry-arrow">arrow_forward</span>
        </a>
        <a routerLink="/auth/login" class="entry-card entry-admin">
          <div class="entry-icon-wrap admin-icon">
            <span class="material-icons-round">admin_panel_settings</span>
          </div>
          <div class="entry-info">
            <strong>Espace Admin</strong>
            <span>Pour les gestionnaires</span>
          </div>
          <span class="material-icons-round entry-arrow">arrow_forward</span>
        </a>
      </ng-container>
      <ng-container *ngIf="isLoggedIn">
        <a [routerLink]="dashboardRoute" class="entry-card entry-famille">
          <div class="entry-icon-wrap famille-icon">
            <span class="material-icons-round">dashboard</span>
          </div>
          <div class="entry-info">
            <strong>Retour \xE0 mon espace</strong>
            <span>{{ userName }}</span>
          </div>
          <span class="material-icons-round entry-arrow">arrow_forward</span>
        </a>
        <button class="entry-card entry-logout" (click)="logout()">
          <div class="entry-icon-wrap logout-icon">
            <span class="material-icons-round">logout</span>
          </div>
          <div class="entry-info">
            <strong>Se d\xE9connecter</strong>
            <span>Quitter la session</span>
          </div>
          <span class="material-icons-round entry-arrow">arrow_forward</span>
        </button>
      </ng-container>
    </div>
  </div>

</section>

<!-- ===== STATS ===== -->
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number">{{ formatStat(stats.familles) }}+</span>
        <span class="stat-label">Familles</span>
        <span class="stat-icon-bg"><span class="material-icons-round">family_restroom</span></span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ formatStat(stats.membres) }}+</span>
        <span class="stat-label">Membres</span>
        <span class="stat-icon-bg"><span class="material-icons-round">people</span></span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ formatStat(stats.unions) }}+</span>
        <span class="stat-label">Unions</span>
        <span class="stat-icon-bg"><span class="material-icons-round">favorite</span></span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ formatStat(stats.stories) }}+</span>
        <span class="stat-label">Stories</span>
        <span class="stat-icon-bg"><span class="material-icons-round">auto_stories</span></span>
      </div>
    </div>
  </div>
</section>

<!-- ===== SOLUTION (section bleue, inspir\xE9e Image 1) ===== -->
<section class="solution-section">
  <div class="container">
    <!-- Noeuds 3D flottants -->
    <div class="sol-floats">
      <div class="sf-node">
        <div class="sf-disc sf-glass-blue"><span class="material-icons-round">account_tree</span></div>
      </div>
      <div class="sf-node sf-main">
        <div class="sf-disc sf-white"><span class="material-icons-round">people</span></div>
      </div>
      <div class="sf-node">
        <div class="sf-disc sf-glass-dark"><span class="material-icons-round">auto_stories</span></div>
      </div>
    </div>
    <div class="sol-arrow-indicator">
      <span class="material-icons-round">arrow_upward</span>
      <span class="sol-arrow-label">Notre Solution</span>
    </div>

    <div class="section-header-landing light">
      <span class="section-tag light-tag">Notre Solution</span>
      <h2>Mam Buudu simplifie la g\xE9n\xE9alogie,<br/>pour toutes les familles.</h2>
      <p>De la cr\xE9ation de l'arbre au partage des stories \u2014 une solution compl\xE8te, accessible en ligne ou hors ligne.</p>
    </div>

    <div class="sol-cards">
      <div class="sol-card">
        <div class="sc-icon"><span class="material-icons-round">account_tree</span></div>
        <h3>Sans code, sans effort</h3>
        <p>Construisez votre arbre g\xE9n\xE9alogique facilement, sans aucune comp\xE9tence technique. En ligne ou hors ligne.</p>
      </div>
      <div class="sol-card">
        <div class="sc-icon"><span class="material-icons-round">share</span></div>
        <h3>Partage en famille</h3>
        <p>Invitez les membres, partagez les stories et connectez les g\xE9n\xE9rations en temps r\xE9el, depuis n'importe o\xF9.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== FEATURES (redesign, inspir\xE9e Image 2) ===== -->
<section class="features-section" id="features">
  <div class="container">

    <div class="features-layout">

      <!-- Colonne gauche : texte + \xE9voluer -->
      <div class="fl-left">
        <span class="welcome-badge">
          <span class="material-icons-round">account_tree</span>
          Bienvenue sur Mam Buudu
          <span class="wb-chevron material-icons-round">chevron_right</span>
        </span>
        <h2>G\xE9n\xE9alogie nouvelle<br/>g\xE9n\xE9ration</h2>
        <p class="fl-sub">Construite pour \xE9quiper chaque famille d'outils modernes pour pr\xE9server et partager leur histoire.</p>

        <div class="fl-evolving">
          <h3>\xC9voluer au-del\xE0 des m\xE9thodes traditionnelles</h3>
          <p>Nous r\xE9pondons aux d\xE9fis de la pr\xE9servation familiale en rempla\xE7ant les albums \xE9parpill\xE9s et la m\xE9moire orale par une plateforme num\xE9rique s\xE9curis\xE9e, accessible \xE0 toute la famille.</p>
        </div>
      </div>

      <!-- Colonne droite : carte mission + ic\xF4nes features -->
      <div class="fl-right">
        <div class="fl-mission">
          <p>Notre mission est d'\xE9quiper les familles africaines d'outils modernes pour rester connect\xE9es et pr\xE9server leur patrimoine \xE0 travers les g\xE9n\xE9rations.</p>
        </div>
        <div class="fl-feat-icons">
          <div class="ffi-card" *ngFor="let f of features">
            <div class="ffi-icon" [style.background]="f.color + '18'" [style.color]="f.color">
              <span class="material-icons-round">{{ f.icon }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- ===== FAMILLES SHOWCASE ===== -->
<section class="showcase-section" id="familles">
  <div class="container">
    <div class="section-header-landing">
      <span class="section-tag">Familles</span>
      <h2>Des familles qui nous font confiance</h2>
      <p>Rejoignez des centaines de familles qui ont choisi Mam Buudu pour pr\xE9server leur patrimoine.</p>
    </div>
    <div class="familles-carousel">
      <div class="famille-card" *ngFor="let f of familles">
        <div class="fc-header" [style.background]="'linear-gradient(135deg,' + f.color + '22 0%, ' + f.color + '0a 100%)'">
          <div class="fc-avatar" [style.background]="f.color + '22'" [style.color]="f.color">
            {{ f.initiale }}
          </div>
          <div class="fc-identity">
            <h3>Famille {{ f.nom }}</h3>
            <span class="fc-origine"><span class="material-icons-round">place</span> {{ f.origine }}</span>
          </div>
        </div>
        <div class="fc-stats">
          <div class="fc-stat">
            <span class="fc-stat-val" [style.color]="f.color">{{ f.membres }}</span>
            <span class="fc-stat-label">Membres</span>
          </div>
          <div class="fc-divider"></div>
          <div class="fc-stat">
            <span class="fc-stat-val" [style.color]="f.color">{{ f.generations }}</span>
            <span class="fc-stat-label">G\xE9n\xE9rations</span>
          </div>
          <div class="fc-divider"></div>
          <div class="fc-stat">
            <span class="fc-stat-val" [style.color]="f.color">{{ f.unions }}</span>
            <span class="fc-stat-label">Unions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="testimonials-section" id="temoignages">
  <div class="container">
    <div class="section-header-landing light">
      <span class="section-tag light-tag">T\xE9moignages</span>
      <h2>Ce que disent nos utilisateurs</h2>
      <p>Ils ont choisi Mam Buudu pour connecter leur famille \xE0 travers les g\xE9n\xE9rations.</p>
    </div>

    <div class="testimonial-carousel">
      <div class="testimonial-track" [style.transform]="'translateX(-' + (currentSlide * 100) + '%)'">
        <div class="testimonial-slide" *ngFor="let t of testimonials">
          <div class="testimonial-card">
            <div class="testi-quote">
              <span class="material-icons-round quote-icon">format_quote</span>
              <p>{{ t.texte }}</p>
            </div>
            <div class="testi-author">
              <div class="testi-avatar" [style.background]="t.color + '22'" [style.color]="t.color">
                {{ t.initiale }}
              </div>
              <div>
                <strong>{{ t.nom }}</strong>
                <span>{{ t.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-controls">
        <button class="carousel-btn" (click)="prevSlide()">
          <span class="material-icons-round">chevron_left</span>
        </button>
        <div class="carousel-dots">
          <button class="dot" *ngFor="let t of testimonials; let i = index"
                  [class.active]="i === currentSlide"
                  (click)="goToSlide(i)"></button>
        </div>
        <button class="carousel-btn" (click)="nextSlide()">
          <span class="material-icons-round">chevron_right</span>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- ===== CTA FINAL ===== -->
<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <div class="cta-badge">
        <span class="material-icons-round">rocket_launch</span>
        Commencez maintenant \u2014 C'est gratuit
      </div>
      <h2>Pr\xEAt \xE0 connecter votre famille ?</h2>
      <p>Rejoignez des milliers de familles qui pr\xE9servent leur histoire avec Mam Buudu.</p>
      <div class="cta-actions">
        <a routerLink="/famille/login" class="cta-btn cta-btn-famille">
          <span class="material-icons-round">family_restroom</span>
          Acc\xE9der \xE0 mon espace famille
        </a>
        <a routerLink="/auth/login" class="cta-btn cta-btn-admin">
          <span class="material-icons-round">admin_panel_settings</span>
          Espace administrateur
        </a>
      </div>
    </div>
    <div class="cta-deco">
      <div class="cta-blob"></div>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="landing-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <span class="material-icons-round">account_tree</span>
      <span>Mam Buudu</span>
      <span class="footer-sep">\xB7</span>
      <span class="footer-by">par Sahelys</span>
    </div>
    <div class="footer-links">
      <a routerLink="/famille/login">Espace Famille</a>
      <a routerLink="/auth/login">Administration</a>
      <a routerLink="/auth/register">Cr\xE9er un espace</a>
    </div>
    <div class="footer-copy">\xA9 2025 Sahelys. Tous droits r\xE9serv\xE9s.</div>
  </div>
</footer>
`, styles: ['@charset "UTF-8";\n\n/* src/app/landing/landing.component.scss */\n:host {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  overflow-x: hidden;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.landing-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 40px;\n  height: 64px;\n  background: rgba(10, 31, 168, 0.88);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.nav-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.3px;\n  text-decoration: none;\n}\n.nav-logo .material-icons-round {\n  font-size: 24px !important;\n  color: #93C5FD;\n}\n.nav-links {\n  display: flex;\n  gap: 28px;\n}\n.nav-link {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.nav-link:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.nav-actions {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.btn-nav-famille {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 30px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.btn-nav-famille .material-icons-round {\n  font-size: 16px !important;\n}\n.btn-nav-famille:hover {\n  background: rgba(255, 255, 255, 0.22);\n  text-decoration: none;\n}\n.btn-nav-admin {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #ffffff;\n  border-radius: 30px;\n  color: #1445F5;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: all 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-nav-admin .material-icons-round {\n  font-size: 16px !important;\n}\n.btn-nav-admin:hover {\n  background: #F0F7FF;\n  text-decoration: none;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.btn-nav-logout {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.35);\n  border-radius: 30px;\n  color: #FCA5A5;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-nav-logout .material-icons-round {\n  font-size: 16px !important;\n}\n.btn-nav-logout:hover {\n  background: rgba(239, 68, 68, 0.28);\n  color: #fff;\n}\n.nav-hamburger {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  color: #fff;\n  cursor: pointer;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.nav-hamburger .material-icons-round {\n  font-size: 22px !important;\n}\n.nav-hamburger:hover {\n  background: rgba(255, 255, 255, 0.22);\n}\n.nav-mobile-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 299;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.nav-mobile-sheet {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border-radius: 24px 24px 0 0;\n  z-index: 300;\n  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.15);\n  transform: translateY(100%);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.nav-mobile-sheet.open {\n  transform: translateY(0);\n}\n.nms-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px 14px;\n  border-bottom: 1px solid #F0F4FF;\n}\n.nms-logo {\n  color: #0A1FA8 !important;\n}\n.nms-logo .material-icons-round {\n  color: #1445F5 !important;\n}\n.nms-close {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  color: #6B7280;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nms-close .material-icons-round {\n  font-size: 20px !important;\n}\n.nms-links {\n  padding: 10px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nms-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  color: #374151;\n  font-size: 15px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.nms-link .material-icons-round {\n  font-size: 20px !important;\n  color: #9CA3AF;\n}\n.nms-link:hover {\n  background: #F8FAFC;\n  text-decoration: none;\n}\n.nms-actions {\n  padding: 12px 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-top: 1px solid #F0F4FF;\n}\n.nms-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-radius: 14px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  border: none;\n  width: 100%;\n  text-align: left;\n  transition: all 0.2s;\n}\n.nms-btn .material-icons-round {\n  font-size: 20px !important;\n}\n.nms-btn:hover {\n  text-decoration: none;\n  opacity: 0.9;\n}\n.nms-btn-famille {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.1),\n      rgba(139, 92, 246, 0.1));\n  color: #7C3AED;\n  border: 1px solid rgba(139, 92, 246, 0.2) !important;\n}\n.nms-btn-admin {\n  background:\n    linear-gradient(\n      135deg,\n      #EFF6FF,\n      #E0E7FF);\n  color: #1445F5;\n  border: 1px solid rgba(20, 69, 245, 0.15) !important;\n}\n.nms-btn-logout {\n  background: #FFF5F5;\n  color: #EF4444;\n  border: 1px solid rgba(239, 68, 68, 0.2) !important;\n}\n.hero {\n  background: #ffffff;\n  overflow: hidden;\n}\n.hero-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  min-height: 420px;\n  padding-top: 64px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hb-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.2;\n}\n.blob-1 {\n  width: 480px;\n  height: 480px;\n  background: #3B82F6;\n  top: -120px;\n  left: -80px;\n  animation: blobFloat 8s ease-in-out infinite;\n}\n.blob-2 {\n  width: 360px;\n  height: 360px;\n  background: #8B5CF6;\n  bottom: -80px;\n  right: 180px;\n  animation: blobFloat 10s ease-in-out infinite reverse;\n}\n.blob-3 {\n  width: 280px;\n  height: 280px;\n  background: #06B6D4;\n  top: 120px;\n  right: -60px;\n  animation: blobFloat 7s ease-in-out infinite 2s;\n}\n.dots-grid {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.07) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n}\n.fn-group {\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  height: 300px;\n}\n.float-node {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.fn-disc {\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.2);\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n}\n.fn-disc .material-icons-round {\n  font-size: 28px !important;\n}\n.fn-disc-blue {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #60A5FA,\n      #2563EB);\n  color: #fff;\n}\n.fn-disc-pink {\n  width: 68px;\n  height: 68px;\n  background:\n    linear-gradient(\n      135deg,\n      #F472B6,\n      #DB2777);\n  color: #fff;\n}\n.fn-disc-green {\n  width: 90px;\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      #34D399,\n      #059669);\n  color: #fff;\n}\n.fn-disc-green .material-icons-round {\n  font-size: 34px !important;\n}\n.fn-disc-violet {\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      #A78BFA,\n      #7C3AED);\n  color: #fff;\n}\n.fn-disc-violet .material-icons-round {\n  font-size: 24px !important;\n}\n.fn-disc-cyan {\n  width: 74px;\n  height: 74px;\n  background:\n    linear-gradient(\n      135deg,\n      #22D3EE,\n      #0891B2);\n  color: #fff;\n}\n.fn-lbl {\n  font-size: 10px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.75);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.fn-1 {\n  top: 40px;\n  left: 12%;\n  animation: float 5s ease-in-out infinite;\n}\n.fn-2 {\n  top: 28px;\n  right: 16%;\n  animation: float 6.5s ease-in-out infinite 1s;\n}\n.fn-3 {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: floatCenter 4.5s ease-in-out infinite 0.5s;\n}\n.fn-4 {\n  bottom: 32px;\n  right: 22%;\n  animation: float 7s ease-in-out infinite 2s;\n}\n.fn-5 {\n  bottom: 24px;\n  left: 18%;\n  animation: float 5.5s ease-in-out infinite 1.5s;\n}\n.hero-wave {\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  position: relative;\n  overflow: hidden;\n}\n.hero-wave svg {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.hero-white {\n  background: #ffffff;\n  padding: 64px 24px 80px;\n  text-align: center;\n  animation: fadeInUp 0.8s ease both;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  border-radius: 30px;\n  color: #1445F5;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 24px;\n}\n.hero-badge .material-icons-round {\n  font-size: 14px !important;\n}\n.hero-title {\n  font-size: 52px;\n  font-weight: 800;\n  line-height: 1.12;\n  color: #0F172A;\n  margin-bottom: 20px;\n  letter-spacing: -1.5px;\n}\n.gradient-text {\n  background:\n    linear-gradient(\n      90deg,\n      #1445F5,\n      #8B5CF6,\n      #EC4899);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle {\n  font-size: 16px;\n  color: #6B7280;\n  line-height: 1.7;\n  margin-bottom: 40px;\n  max-width: 560px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.hero-entries {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.entry-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-decoration: none;\n  transition: all 0.25s;\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n.entry-famille {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.07) 0%,\n      rgba(139, 92, 246, 0.07) 100%);\n  border: 1.5px solid rgba(236, 72, 153, 0.2);\n}\n.entry-famille:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.14) 0%,\n      rgba(139, 92, 246, 0.14) 100%);\n  border-color: rgba(236, 72, 153, 0.4);\n  transform: translateX(6px);\n  text-decoration: none;\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.12);\n}\n.entry-admin {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 69, 245, 0.06) 0%,\n      rgba(6, 182, 212, 0.06) 100%);\n  border: 1.5px solid rgba(20, 69, 245, 0.15);\n}\n.entry-admin:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 69, 245, 0.12) 0%,\n      rgba(6, 182, 212, 0.12) 100%);\n  border-color: rgba(20, 69, 245, 0.3);\n  transform: translateX(6px);\n  text-decoration: none;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.1);\n}\n.entry-logout {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.07) 0%,\n      rgba(220, 38, 38, 0.05) 100%);\n  border: 1.5px solid rgba(239, 68, 68, 0.2);\n  width: 100%;\n  text-align: left;\n}\n.entry-logout:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.14) 0%,\n      rgba(220, 38, 38, 0.1) 100%);\n  border-color: rgba(239, 68, 68, 0.4);\n  transform: translateX(6px);\n}\n.entry-icon-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.entry-icon-wrap .material-icons-round {\n  font-size: 24px !important;\n}\n.famille-icon {\n  background: rgba(236, 72, 153, 0.12);\n  color: #EC4899;\n}\n.admin-icon {\n  background: rgba(20, 69, 245, 0.12);\n  color: #1445F5;\n}\n.logout-icon {\n  background: rgba(239, 68, 68, 0.12);\n  color: #EF4444;\n}\n.entry-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.entry-info strong {\n  font-size: 15px;\n  font-weight: 600;\n  color: #0F172A;\n}\n.entry-info span {\n  font-size: 12px;\n  color: #6B7280;\n}\n.entry-arrow {\n  font-size: 20px !important;\n  color: #CBD5E1;\n}\n.stats-section {\n  padding: 60px 0;\n  background: #ffffff;\n  border-top: 1px solid #E2E8F0;\n  border-bottom: 1px solid #E2E8F0;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.stat-item {\n  position: relative;\n  text-align: center;\n  padding: 32px 20px;\n  border-radius: 16px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n.stat-item:hover {\n  border-color: #BFDBFE;\n  box-shadow: 0 4px 24px rgba(20, 69, 245, 0.08);\n  transform: translateY(-2px);\n}\n.stat-number {\n  display: block;\n  font-size: 42px;\n  font-weight: 800;\n  color: #0F172A;\n  line-height: 1;\n  margin-bottom: 8px;\n  letter-spacing: -1px;\n}\n.stat-label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6B7280;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n.stat-icon-bg {\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  opacity: 0.05;\n}\n.stat-icon-bg .material-icons-round {\n  font-size: 72px !important;\n  color: #1445F5;\n}\n.solution-section {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n}\n.solution-section::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.sol-floats {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  position: relative;\n  z-index: 2;\n}\n.sf-node {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sf-main .sf-disc {\n  width: 80px !important;\n  height: 80px !important;\n}\n.sf-main .sf-disc .material-icons-round {\n  font-size: 32px !important;\n}\n.sf-disc {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n}\n.sf-disc .material-icons-round {\n  font-size: 26px !important;\n}\n.sf-glass-blue {\n  background: rgba(96, 165, 250, 0.7);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.3);\n  color: #fff;\n}\n.sf-white {\n  background: #ffffff;\n  color: #1445F5;\n  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.sf-glass-dark {\n  background: rgba(15, 23, 42, 0.8);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.85);\n}\n.sol-arrow-indicator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 40px;\n  position: relative;\n  z-index: 2;\n}\n.sol-arrow-indicator .material-icons-round {\n  font-size: 18px !important;\n}\n.sol-arrow-label {\n  padding: 3px 10px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.sol-cards {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n  max-width: 720px;\n  margin: 40px auto 0;\n  position: relative;\n  z-index: 2;\n}\n.sol-card {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n  padding: 28px 24px;\n  text-align: left;\n  transition: all 0.2s;\n}\n.sol-card:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-4px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);\n}\n.sol-card .sc-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.sol-card .sc-icon .material-icons-round {\n  font-size: 22px !important;\n  color: #fff;\n}\n.sol-card h3 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.sol-card p {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.65;\n}\n.section-header-landing {\n  text-align: center;\n  margin-bottom: 60px;\n  position: relative;\n  z-index: 2;\n}\n.section-header-landing h2 {\n  font-size: 36px;\n  font-weight: 800;\n  color: #0F172A;\n  margin: 12px 0 16px;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n}\n.section-header-landing p {\n  font-size: 16px;\n  color: #6B7280;\n  max-width: 520px;\n  margin: 0 auto;\n  line-height: 1.7;\n}\n.section-header-landing.light h2 {\n  color: #fff;\n}\n.section-header-landing.light p {\n  color: rgba(255, 255, 255, 0.65);\n}\n.section-tag {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 14px;\n  background: #EFF6FF;\n  color: #1445F5;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n.section-tag.light-tag {\n  background: rgba(255, 255, 255, 0.15);\n  color: rgba(255, 255, 255, 0.85);\n}\n.features-section {\n  padding: 100px 0;\n  background: #ffffff;\n}\n.features-layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: flex-start;\n}\n.welcome-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 10px 5px 8px;\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #475569;\n  margin-bottom: 20px;\n}\n.welcome-badge .material-icons-round {\n  font-size: 14px !important;\n  color: #1445F5;\n}\n.welcome-badge .wb-chevron {\n  font-size: 14px !important;\n  color: #3B82F6;\n}\n.fl-left h2 {\n  font-size: 40px;\n  font-weight: 800;\n  color: #0F172A;\n  letter-spacing: -0.5px;\n  line-height: 1.15;\n  margin-bottom: 16px;\n}\n.fl-left .fl-sub {\n  font-size: 16px;\n  color: #6B7280;\n  line-height: 1.7;\n  margin-bottom: 48px;\n}\n.fl-evolving {\n  padding: 28px 0 0;\n  border-top: 1px solid #E2E8F0;\n}\n.fl-evolving h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0F172A;\n  margin-bottom: 12px;\n  line-height: 1.3;\n}\n.fl-evolving p {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.75;\n}\n.fl-right {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 52px;\n}\n.fl-mission {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 16px;\n  padding: 20px 22px;\n}\n.fl-mission p {\n  font-size: 14px;\n  font-weight: 500;\n  color: #374151;\n  line-height: 1.75;\n}\n.fl-feat-icons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ffi-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: #ffffff;\n  border: 1px solid #E2E8F0;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  transition: all 0.2s;\n  cursor: default;\n}\n.ffi-card:nth-child(1) {\n  align-self: flex-end;\n}\n.ffi-card:nth-child(2) {\n  align-self: flex-end;\n  margin-right: 60px;\n}\n.ffi-card:nth-child(3) {\n  align-self: flex-end;\n  margin-right: 20px;\n}\n.ffi-card:nth-child(4) {\n  align-self: flex-end;\n  margin-right: 80px;\n}\n.ffi-card:nth-child(5) {\n  align-self: flex-end;\n  margin-right: 40px;\n}\n.ffi-card:nth-child(6) {\n  align-self: flex-end;\n}\n.ffi-card:hover {\n  transform: scale(1.08) translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n.ffi-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ffi-icon .material-icons-round {\n  font-size: 20px !important;\n}\n.showcase-section {\n  padding: 100px 0;\n  background: #F8FAFC;\n  border-top: 1px solid #E2E8F0;\n}\n.familles-carousel {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n.famille-card {\n  border-radius: 20px;\n  border: 1px solid #E2E8F0;\n  overflow: hidden;\n  background: #ffffff;\n  transition: all 0.25s;\n}\n.famille-card:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  transform: translateY(-4px);\n  border-color: #BFDBFE;\n}\n.fc-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n}\n.fc-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.fc-identity h3 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 3px;\n}\n.fc-origine {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  color: #6B7280;\n}\n.fc-origine .material-icons-round {\n  font-size: 13px !important;\n}\n.fc-stats {\n  display: flex;\n  align-items: center;\n  padding: 16px 20px;\n  border-top: 1px solid #E2E8F0;\n}\n.fc-stat {\n  flex: 1;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fc-stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.fc-stat-label {\n  font-size: 10px;\n  font-weight: 500;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.fc-divider {\n  width: 1px;\n  height: 32px;\n  background: #E2E8F0;\n}\n.testimonials-section {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8 0%,\n      #1445F5 60%,\n      #1E40AF 100%);\n  overflow: hidden;\n}\n.testimonial-carousel {\n  overflow: hidden;\n  border-radius: 24px;\n}\n.testimonial-track {\n  display: flex;\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.testimonial-slide {\n  min-width: 100%;\n  padding: 0 20px;\n}\n.testimonial-card {\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 24px;\n  padding: 40px 48px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.testi-quote {\n  position: relative;\n  margin-bottom: 28px;\n}\n.testi-quote .quote-icon {\n  font-size: 48px !important;\n  color: rgba(147, 197, 253, 0.35);\n  position: absolute;\n  top: -12px;\n  left: -8px;\n}\n.testi-quote p {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.85);\n  line-height: 1.8;\n  font-style: italic;\n  padding-left: 32px;\n}\n.testi-author {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.testi-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.testi-author div:last-child {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.testi-author div:last-child strong {\n  font-size: 15px;\n  font-weight: 600;\n  color: #fff;\n}\n.testi-author div:last-child span {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.carousel-controls {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 32px;\n}\n.carousel-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.carousel-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.carousel-dots {\n  display: flex;\n  gap: 8px;\n}\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dot.active {\n  background: #fff;\n  width: 24px;\n  border-radius: 4px;\n}\n.cta-section {\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #EFF6FF 0%,\n      #F5F3FF 100%);\n  overflow: hidden;\n  position: relative;\n}\n.cta-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n}\n.cta-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  border-radius: 30px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1445F5;\n  margin-bottom: 20px;\n}\n.cta-badge .material-icons-round {\n  font-size: 15px !important;\n}\n.cta-content h2 {\n  font-size: 42px;\n  font-weight: 800;\n  color: #0F172A;\n  margin-bottom: 14px;\n  letter-spacing: -0.5px;\n}\n.cta-content p {\n  font-size: 16px;\n  color: #6B7280;\n  margin-bottom: 40px;\n}\n.cta-actions {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 28px;\n  border-radius: 16px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.25s;\n}\n.cta-btn .material-icons-round {\n  font-size: 20px !important;\n}\n.cta-btn:hover {\n  text-decoration: none;\n  transform: translateY(-2px);\n}\n.cta-btn-famille {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #8B5CF6);\n  color: #fff;\n  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.35);\n}\n.cta-btn-famille:hover {\n  box-shadow: 0 8px 32px rgba(236, 72, 153, 0.45);\n}\n.cta-btn-admin {\n  background: #ffffff;\n  color: #0F172A;\n  border: 1.5px solid #E5E7EB;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.cta-btn-admin:hover {\n  border-color: #BFDBFE;\n  color: #1445F5;\n}\n.cta-blob {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #BFDBFE,\n      #DDD6FE);\n  opacity: 0.3;\n  right: -200px;\n  top: -200px;\n  filter: blur(80px);\n  pointer-events: none;\n}\n.landing-footer {\n  background: #0A1FA8;\n  padding: 28px 0;\n}\n.footer-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.footer-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 600;\n  font-size: 15px;\n}\n.footer-brand .material-icons-round {\n  font-size: 20px !important;\n  color: #93C5FD;\n}\n.footer-sep {\n  color: rgba(255, 255, 255, 0.3);\n}\n.footer-by {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 12px;\n  font-weight: 400;\n}\n.footer-links {\n  display: flex;\n  gap: 24px;\n}\n.footer-links a {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 13px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.footer-links a:hover {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n}\n.footer-copy {\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 12px;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes blobFloat {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(20px, -30px) scale(1.05);\n  }\n  66% {\n    transform: translate(-15px, 15px) scale(0.95);\n  }\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes floatCenter {\n  0%, 100% {\n    transform: translate(-50%, -50%) translateY(0);\n  }\n  50% {\n    transform: translate(-50%, -50%) translateY(-12px);\n  }\n}\n@media (max-width: 1024px) {\n  .features-layout {\n    gap: 48px;\n  }\n  .fl-left h2 {\n    font-size: 34px;\n  }\n}\n@media (max-width: 900px) {\n  .features-layout {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .fl-right {\n    padding-top: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .fl-feat-icons {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .ffi-card {\n    align-self: auto !important;\n    margin-right: 0 !important;\n  }\n  .familles-carousel {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .nav-links {\n    display: none;\n  }\n  .hero-title {\n    font-size: 40px;\n  }\n  .sol-cards {\n    grid-template-columns: 1fr;\n    max-width: 400px;\n  }\n  .fn-1,\n  .fn-2,\n  .fn-4,\n  .fn-5 {\n    display: none;\n  }\n  .fn-3 {\n    top: 50%;\n    left: 50%;\n  }\n}\n@media (max-width: 640px) {\n  .hero-blue {\n    min-height: 280px;\n  }\n  .hero-white {\n    padding: 48px 20px 60px;\n  }\n  .hero-title {\n    font-size: 30px;\n    letter-spacing: -0.5px;\n  }\n  .features-section,\n  .showcase-section,\n  .testimonials-section,\n  .cta-section,\n  .solution-section {\n    padding: 64px 0;\n  }\n  .familles-carousel,\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .landing-nav {\n    padding: 0 20px;\n  }\n  .btn-nav-admin,\n  .btn-nav-famille,\n  .btn-nav-logout {\n    display: none;\n  }\n  .nav-hamburger {\n    display: flex;\n  }\n  .footer-inner {\n    flex-direction: column;\n    text-align: center;\n  }\n  .cta-content h2 {\n    font-size: 28px;\n  }\n  .section-header-landing h2 {\n    font-size: 26px;\n  }\n  .fl-left h2 {\n    font-size: 28px;\n  }\n  .sol-floats .sf-node:not(.sf-main) {\n    display: none;\n  }\n  .testimonial-card {\n    padding: 28px 24px;\n  }\n  .testi-quote p {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/landing/landing.component.ts", lineNumber: 29 });
})();

// src/app/app-routing-module.ts
var routes = [
  { path: "", component: LandingComponent, pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import("./chunk-H2CPJEKY.js").then((m) => m.AuthModule)
  },
  {
    path: "app",
    canActivate: [authGuard],
    loadChildren: () => import("./chunk-4KOZY6C6.js").then((m) => m.ShellModule)
  },
  {
    path: "famille",
    loadChildren: () => import("./chunk-CRPZEVJ5.js").then((m) => m.FamilleModule)
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], standalone: false, decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: "<router-outlet></router-outlet>\n" }]
  }], () => [{ type: Router }, { type: Renderer2 }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/app/core/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
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

// src/app/app-module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [App] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor]))
  ], imports: [BrowserModule, AppRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [App, LandingComponent],
      imports: [BrowserModule, AppRoutingModule],
      providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withInterceptors([jwtInterceptor, loadingInterceptor]))
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
