import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-ESHQL2TU.js";
import {
  AuthService
} from "./chunk-VLIH72YP.js";
import {
  Component,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WU2I6PFW.js";

// src/app/auth/login/login.component.ts
function LoginComponent_span_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, " Le code famille est requis ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.tabIcon);
    \u0275\u0275advance();
    \u0275\u0275classProp("input-error", ctx_r0.f["identifiant"].invalid && ctx_r0.f["identifiant"].touched);
    \u0275\u0275property("placeholder", ctx_r0.tabPlaceholder);
  }
}
function LoginComponent_div_123_div_9_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function LoginComponent_div_123_div_9_button_6_Template_button_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectCountry(c_r5));
    });
    \u0275\u0275element(1, "img", 77);
    \u0275\u0275elementStart(2, "span", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", "https://flagcdn.com/20x15/" + c_r5.iso + ".png", \u0275\u0275sanitizeUrl)("alt", c_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.dial);
  }
}
function LoginComponent_div_123_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("click", function LoginComponent_div_123_div_9_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 83)(2, "span", 37);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 84);
    \u0275\u0275listener("input", function LoginComponent_div_123_div_9_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.countrySearch = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 85);
    \u0275\u0275template(6, LoginComponent_div_123_div_9_button_6_Template, 6, 4, "button", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.countrySearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredCountries);
  }
}
function LoginComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "button", 76);
    \u0275\u0275listener("click", function LoginComponent_div_123_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.showCountryPicker = !ctx_r0.showCountryPicker;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(3, "img", 77);
    \u0275\u0275elementStart(4, "span", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 79);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 80);
    \u0275\u0275listener("input", function LoginComponent_div_123_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.localPhone = $event.target.value;
      return \u0275\u0275resetView(ctx_r0.updatePhoneIdentifiant());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, LoginComponent_div_123_div_9_Template, 7, 2, "div", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", "https://flagcdn.com/20x15/" + ctx_r0.selectedCountry.iso + ".png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.selectedCountry.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedCountry.dial);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r0.showCountryPicker);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("input-error", ctx_r0.f["identifiant"].invalid && ctx_r0.f["identifiant"].touched);
    \u0275\u0275property("value", ctx_r0.localPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showCountryPicker);
  }
}
function LoginComponent_span_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, " L'identifiant est requis ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, " Mot de passe requis (6 caract\xE8res minimum) ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 37);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function LoginComponent_span_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function LoginComponent_ng_container_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275text(2, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Se connecter ");
    \u0275\u0275elementContainerEnd();
  }
}
var COUNTRIES = [
  { iso: "bf", name: "Burkina Faso", dial: "+226" },
  { iso: "ml", name: "Mali", dial: "+223" },
  { iso: "ne", name: "Niger", dial: "+227" },
  { iso: "ga", name: "Gabon", dial: "+241" },
  { iso: "ca", name: "Canada", dial: "+1" }
];
var LoginComponent = class _LoginComponent {
  fb;
  auth;
  router;
  form;
  loading = false;
  errorMsg = "";
  showPassword = false;
  activeTab = "email";
  countries = COUNTRIES;
  selectedCountry = COUNTRIES[0];
  showCountryPicker = false;
  countrySearch = "";
  localPhone = "";
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.form = this.fb.group({
      familleCode: ["", Validators.required],
      identifiant: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.form.controls;
  }
  get filteredCountries() {
    const q = this.countrySearch.toLowerCase();
    return q ? this.countries.filter((c) => c.name.toLowerCase().includes(q) || c.dial.includes(q)) : this.countries;
  }
  selectCountry(c) {
    this.selectedCountry = c;
    this.showCountryPicker = false;
    this.countrySearch = "";
    this.updatePhoneIdentifiant();
  }
  updatePhoneIdentifiant() {
    const full = `${this.selectedCountry.dial}${this.localPhone.replace(/^0/, "")}`;
    this.form.patchValue({ identifiant: full });
  }
  setTab(tab) {
    this.activeTab = tab;
    this.form.patchValue({ identifiant: "" });
    this.localPhone = "";
  }
  get tabPlaceholder() {
    return this.activeTab === "email" ? "exemple@email.com" : this.activeTab === "username" ? "ex : diallo.ibrahim" : "";
  }
  get tabIcon() {
    return this.activeTab === "email" ? "email" : this.activeTab === "username" ? "badge" : "phone";
  }
  submit() {
    if (this.activeTab === "telephone") {
      this.updatePhoneIdentifiant();
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    this.auth.login(this.form.value).subscribe({
      next: () => {
        const role = this.auth.getUser()?.role ?? "";
        if (role === "admin" || role === "gestionnaire") {
          this.router.navigate(["/app/home"]);
        } else {
          this.router.navigate(["/famille"]);
        }
      },
      error: (err) => {
        this.errorMsg = err?.error?.error ?? "Identifiants incorrects.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: false, decls: 160, vars: 22, consts: [[1, "auth-page"], [1, "auth-left"], [1, "al-bg"], ["width", "420", "height", "520", "viewBox", "0 0 420 520", "fill", "none", 1, "al-tree"], ["d", "M210 500 L 210 380", "stroke", "#8B4513", "stroke-width", "7", "stroke-linecap", "round"], ["d", "M210 380 C 180 360, 150 345, 120 320", "stroke", "#8B4513", "stroke-width", "5", "fill", "none", "stroke-linecap", "round"], ["d", "M210 380 C 240 360, 270 345, 300 320", "stroke", "#8B4513", "stroke-width", "5", "fill", "none", "stroke-linecap", "round"], ["d", "M210 380 L 210 310", "stroke", "#8B4513", "stroke-width", "5", "stroke-linecap", "round"], ["d", "M120 320 C 100 295, 88 280, 92 255", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round"], ["d", "M300 320 C 320 295, 332 280, 328 255", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round"], ["d", "M210 310 C 195 285, 195 270, 205 245", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round"], ["cx", "92", "cy", "250", "r", "15", "fill", "#2E7D32"], ["cx", "205", "cy", "240", "r", "16", "fill", "#81C784"], ["cx", "328", "cy", "250", "r", "15", "fill", "#2E7D32"], ["cx", "120", "cy", "320", "r", "9", "fill", "#3B82F6", "opacity", "0.75"], ["cx", "300", "cy", "320", "r", "9", "fill", "#EC4899", "opacity", "0.75"], [1, "al-sparks"], [1, "al-spark", 2, "left", "18%", "animation-delay", "0s"], [1, "al-spark", 2, "left", "52%", "animation-delay", "1.8s"], [1, "al-spark", 2, "left", "76%", "animation-delay", "3.2s"], [1, "al-dots"], [1, "al-content"], [1, "al-brand"], [1, "al-brand-icon"], ["width", "22", "height", "22", "viewBox", "0 0 120 120", "fill", "none"], ["x", "50", "y", "60", "width", "20", "height", "40", "fill", "#8B4513", "rx", "2"], ["d", "M60 60 L40 40", "stroke", "#8B4513", "stroke-width", "7", "stroke-linecap", "round"], ["d", "M60 60 L80 40", "stroke", "#8B4513", "stroke-width", "7", "stroke-linecap", "round"], ["cx", "35", "cy", "35", "r", "11", "fill", "#2E7D32"], ["cx", "85", "cy", "35", "r", "11", "fill", "#2E7D32"], ["cx", "60", "cy", "24", "r", "11", "fill", "#81C784"], [1, "al-brand-name"], [1, "al-title"], [1, "al-subtitle"], [1, "al-features"], [1, "al-feat"], [1, "al-feat-icon"], [1, "material-icons-round"], [1, "al-stats"], [1, "al-stat"], [1, "al-stat-num"], [1, "al-stat-label"], [1, "al-stat-sep"], [1, "auth-right"], [1, "auth-card"], [1, "auth-card-header"], [1, "auth-card-icon"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "field-label-row"], [1, "field-hint-tag"], [1, "input-wrapper"], ["type", "text", "formControlName", "familleCode", "placeholder", "Ex : DIALLO-2024"], ["class", "field-error", 4, "ngIf"], [1, "id-tabs"], ["type", "button", 1, "id-tab", 3, "click"], ["class", "input-wrapper", 4, "ngIf"], ["class", "phone-field-wrap", 4, "ngIf"], ["routerLink", "/auth/forgot-password", 1, "forgot-link"], ["formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type"], [1, "input-suffix"], ["type", "button", 1, "btn-icon-eye", 3, "click"], ["class", "alert-error-box", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "btn-spinner", 4, "ngIf"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/register"], [1, "footer-links"], ["routerLink", "/famille/login", 1, "footer-link"], [1, "footer-sep"], ["routerLink", "/", 1, "footer-link"], [1, "field-error"], ["type", "text", "formControlName", "identifiant", 3, "placeholder"], [1, "phone-field-wrap"], [1, "phone-input-row"], ["type", "button", 1, "country-selector", 3, "click"], [1, "country-flag-img", 3, "src", "alt"], [1, "country-dial"], [1, "material-icons-round", "country-chevron"], ["type", "tel", "placeholder", "620 00 00 00", 1, "phone-number-input", 3, "input", "value"], ["class", "country-dropdown", 3, "click", 4, "ngIf"], [1, "country-dropdown", 3, "click"], [1, "dropdown-search-wrap"], ["type", "text", "placeholder", "Rechercher un pays...", 1, "country-search", 3, "input", "value"], [1, "country-list"], ["type", "button", "class", "country-option", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "country-option", 3, "click"], [1, "country-name"], [1, "country-dial-sm"], [1, "alert-error-box"], [1, "btn-spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "circle", 11)(12, "circle", 12)(13, "circle", 13)(14, "circle", 14)(15, "circle", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 16);
      \u0275\u0275element(17, "div", 17)(18, "div", 18)(19, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 21)(22, "div", 22)(23, "div", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 24);
      \u0275\u0275element(25, "rect", 25)(26, "path", 26)(27, "path", 27)(28, "circle", 28)(29, "circle", 29)(30, "circle", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "span", 31);
      \u0275\u0275text(32, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "h1", 32);
      \u0275\u0275text(34, "Votre histoire familiale,");
      \u0275\u0275element(35, "br");
      \u0275\u0275text(36, "pr\xE9serv\xE9e pour toujours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 33);
      \u0275\u0275text(38, "Cr\xE9ez, g\xE9rez et partagez l'arbre g\xE9n\xE9alogique de votre famille.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 34)(40, "div", 35)(41, "div", 36)(42, "span", 37);
      \u0275\u0275text(43, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Arbre g\xE9n\xE9alogique interactif");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 35)(47, "div", 36)(48, "span", 37);
      \u0275\u0275text(49, "auto_stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "Stories et photos de famille");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 35)(53, "div", 36)(54, "span", 37);
      \u0275\u0275text(55, "emoji_events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "Gamification et r\xE9compenses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 35)(59, "div", 36)(60, "span", 37);
      \u0275\u0275text(61, "cloud_sync");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "Synchronisation multi-appareils");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 38)(65, "div", 39)(66, "span", 40);
      \u0275\u0275text(67, "420+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 41);
      \u0275\u0275text(69, "Familles");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(70, "div", 42);
      \u0275\u0275elementStart(71, "div", 39)(72, "span", 40);
      \u0275\u0275text(73, "18 500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 41);
      \u0275\u0275text(75, "Membres");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(76, "div", 42);
      \u0275\u0275elementStart(77, "div", 39)(78, "span", 40);
      \u0275\u0275text(79, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 41);
      \u0275\u0275text(81, "G\xE9n\xE9rations");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(82, "main", 43)(83, "div", 44)(84, "div", 45)(85, "div", 46)(86, "span", 37);
      \u0275\u0275text(87, "login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "h2");
      \u0275\u0275text(89, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p");
      \u0275\u0275text(91, "Acc\xE9dez \xE0 l'espace de votre famille");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "form", 47);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_92_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(93, "div", 48)(94, "div", 49)(95, "label");
      \u0275\u0275text(96, "Code famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span", 50)(98, "span", 37);
      \u0275\u0275text(99, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, " Fourni par votre admin ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 51)(102, "span", 37);
      \u0275\u0275text(103, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "input", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275template(105, LoginComponent_span_105_Template, 2, 0, "span", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 48)(107, "label");
      \u0275\u0275text(108, "Identifiant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 54)(110, "button", 55);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_110_listener() {
        return ctx.setTab("email");
      });
      \u0275\u0275elementStart(111, "span", 37);
      \u0275\u0275text(112, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275text(113, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "button", 55);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_114_listener() {
        return ctx.setTab("telephone");
      });
      \u0275\u0275elementStart(115, "span", 37);
      \u0275\u0275text(116, "phone");
      \u0275\u0275elementEnd();
      \u0275\u0275text(117, " T\xE9l\xE9phone ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "button", 55);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_118_listener() {
        return ctx.setTab("username");
      });
      \u0275\u0275elementStart(119, "span", 37);
      \u0275\u0275text(120, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275text(121, " Username ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(122, LoginComponent_div_122_Template, 4, 4, "div", 56)(123, LoginComponent_div_123_Template, 10, 9, "div", 57)(124, LoginComponent_span_124_Template, 2, 0, "span", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 48)(126, "div", 49)(127, "label");
      \u0275\u0275text(128, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "a", 58);
      \u0275\u0275text(130, "Mot de passe oubli\xE9 ?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 51)(132, "span", 37);
      \u0275\u0275text(133, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(134, "input", 59);
      \u0275\u0275elementStart(135, "div", 60)(136, "button", 61);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_136_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275elementStart(137, "span", 37);
      \u0275\u0275text(138);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(139, LoginComponent_span_139_Template, 2, 0, "span", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275template(140, LoginComponent_div_140_Template, 4, 1, "div", 62);
      \u0275\u0275elementStart(141, "button", 63);
      \u0275\u0275template(142, LoginComponent_span_142_Template, 1, 0, "span", 64)(143, LoginComponent_ng_container_143_Template, 4, 0, "ng-container", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 66)(145, "p");
      \u0275\u0275text(146, "Pas encore de compte ? ");
      \u0275\u0275elementStart(147, "a", 67);
      \u0275\u0275text(148, "Cr\xE9er un espace familial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 68)(150, "a", 69)(151, "span", 37);
      \u0275\u0275text(152, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275text(153, " Espace famille ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "span", 70);
      \u0275\u0275text(155, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "a", 71)(157, "span", 37);
      \u0275\u0275text(158, "home");
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, " Accueil ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(92);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("input-error", ctx.f["familleCode"].invalid && ctx.f["familleCode"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["familleCode"].invalid && ctx.f["familleCode"].touched);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeTab === "email");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "telephone");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab === "username");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeTab !== "telephone");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "telephone");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["identifiant"].invalid && ctx.f["identifiant"].touched);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("input-error", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.showPassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-left[_ngcontent-%COMP%] {\n  width: 44%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      160deg,\n      #0A1020 0%,\n      #0E2417 55%,\n      #123B27 100%);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.al-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.al-tree[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -60px;\n  bottom: -30px;\n  opacity: 0.4;\n}\n.al-sparks[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n.al-spark[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #A6E3AF;\n  box-shadow: 0 0 8px 2px rgba(166, 227, 175, 0.7);\n  animation: _ngcontent-%COMP%_sparkRise 5.5s ease-in infinite;\n}\n.al-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 36px 36px;\n}\n.al-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 52px 44px;\n  width: 100%;\n}\n.al-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 40px;\n}\n.al-brand-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.al-brand-name[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n}\n.al-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.3;\n  margin-bottom: 12px;\n  max-width: 340px;\n}\n.al-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.68);\n  line-height: 1.65;\n  margin-bottom: 36px;\n  max-width: 320px;\n}\n.al-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 36px;\n}\n.al-feat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.11);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.88);\n  transition: background 0.2s;\n}\n.al-feat[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.al-feat-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.al-feat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #81C784;\n}\n.al-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  padding: 16px 20px;\n}\n.al-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.al-stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.5px;\n}\n.al-stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.55);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 2px;\n}\n.al-stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.auth-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px;\n  background: #F0FDF4;\n  overflow-y: auto;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 36px 32px;\n  box-shadow: 0 8px 40px rgba(15, 42, 30, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #DCFCE7;\n  animation: _ngcontent-%COMP%_cardFadeIn 0.45s ease both;\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.auth-card-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #F0FDF4,\n      #DCFCE7);\n  border: 1px solid #BBF7D0;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.auth-card-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  color: #15803D;\n}\n.auth-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin-bottom: 4px;\n}\n.auth-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.field-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.field-label-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.field-hint-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #9CA3AF;\n  background: #F9FAFB;\n  padding: 2px 8px;\n  border-radius: 6px;\n  border: 1px solid #E5E7EB;\n}\n.field-hint-tag[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #15803D;\n  text-decoration: none;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrapper[_ngcontent-%COMP%]    > .material-icons-round[_ngcontent-%COMP%]:first-child {\n  position: absolute;\n  left: 12px;\n  color: #9CA3AF;\n  font-size: 18px !important;\n  pointer-events: none;\n  z-index: 1;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 40px !important;\n}\n.input-wrapper[_ngcontent-%COMP%]   .input-suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  display: flex;\n  align-items: center;\n}\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%], \ninput[type=password][_ngcontent-%COMP%], \ninput[type=tel][_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #111827;\n  transition: all 0.15s;\n  outline: none;\n  appearance: none;\n}\ninput[type=text][_ngcontent-%COMP%]::placeholder, \ninput[type=email][_ngcontent-%COMP%]::placeholder, \ninput[type=password][_ngcontent-%COMP%]::placeholder, \ninput[type=tel][_ngcontent-%COMP%]::placeholder, \nselect[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\ninput[type=text][_ngcontent-%COMP%]:focus, \ninput[type=email][_ngcontent-%COMP%]:focus, \ninput[type=password][_ngcontent-%COMP%]:focus, \ninput[type=tel][_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #15803D;\n  box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.1);\n}\ninput[type=text].input-error[_ngcontent-%COMP%], \ninput[type=email].input-error[_ngcontent-%COMP%], \ninput[type=password].input-error[_ngcontent-%COMP%], \ninput[type=tel].input-error[_ngcontent-%COMP%], \nselect.input-error[_ngcontent-%COMP%] {\n  border-color: #EF4444;\n  background: #FEF2F2;\n}\ninput[type=text].input-error[_ngcontent-%COMP%]:focus, \ninput[type=email].input-error[_ngcontent-%COMP%]:focus, \ninput[type=password].input-error[_ngcontent-%COMP%]:focus, \ninput[type=tel].input-error[_ngcontent-%COMP%]:focus, \nselect.input-error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.btn-icon-eye[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #9CA3AF;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-icon-eye[_ngcontent-%COMP%]:hover {\n  background: #F1F5F9;\n  color: #374151;\n}\n.btn-icon-eye[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.id-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 10px;\n  background: #F1F5F9;\n  border-radius: 10px;\n  padding: 4px;\n}\n.id-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 8px 4px;\n  border: none;\n  background: transparent;\n  border-radius: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.id-tab[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.id-tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #15803D;\n  font-weight: 600;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(21, 128, 61, 0.08);\n}\n.id-tab[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(255, 255, 255, 0.65);\n  color: #374151;\n}\n.phone-field-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.phone-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  background: #F9FAFB;\n}\n.phone-input-row[_ngcontent-%COMP%]:focus-within {\n  border-color: #15803D;\n  box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.1);\n  background: #fff;\n}\n.country-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0 12px;\n  border-right: 1px solid #E5E7EB;\n  cursor: pointer;\n  flex-shrink: 0;\n  background: transparent;\n  border-top: none;\n  border-bottom: none;\n  border-left: none;\n  transition: background 0.15s;\n}\n.country-selector[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.03);\n}\n.country-flag-img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 15px;\n  border-radius: 2px;\n  object-fit: cover;\n}\n.country-dial[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.country-chevron[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #9CA3AF;\n  transition: transform 0.2s;\n}\n.country-chevron.open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.phone-number-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 11px 14px;\n  font-size: 14px;\n  background: transparent;\n  color: #111827;\n  font-family: inherit;\n}\n.phone-number-input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.country-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 400;\n  top: calc(100% + 6px);\n  left: 0;\n  width: 290px;\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 14px;\n  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.dropdown-search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #F1F5F9;\n  background: #F9FAFB;\n}\n.dropdown-search-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #9CA3AF;\n  flex-shrink: 0;\n}\n.country-search[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  font-family: inherit;\n}\n.country-search[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.country-list[_ngcontent-%COMP%] {\n  max-height: 224px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.country-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 12px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  border-radius: 8px;\n  transition: background 0.12s;\n  font-family: inherit;\n}\n.country-option[_ngcontent-%COMP%]:hover {\n  background: #F0FDF4;\n}\n.country-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  color: #111827;\n}\n.country-dial-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6B7280;\n  font-weight: 600;\n  background: #F1F5F9;\n  padding: 2px 7px;\n  border-radius: 5px;\n}\n.alert-error-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: #FEF2F2;\n  color: #DC2626;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  border: 1px solid #FECACA;\n}\n.alert-error-box[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  flex-shrink: 0;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #15803D,\n      #166534);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(21, 128, 61, 0.35);\n  letter-spacing: -0.1px;\n}\n.btn-submit[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #166534,\n      #14532D);\n  box-shadow: 0 6px 24px rgba(21, 128, 61, 0.45);\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.65s linear infinite;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  margin-bottom: 14px;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #15803D;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.footer-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9CA3AF;\n  text-decoration: none;\n  padding: 4px 10px;\n  border-radius: 7px;\n  transition: all 0.15s;\n}\n.footer-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background: #F1F5F9;\n  text-decoration: none;\n}\n.footer-sep[_ngcontent-%COMP%] {\n  color: #D1D5DB;\n  font-size: 16px;\n}\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_sparkRise {\n  0% {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  15% {\n    opacity: 0.9;\n  }\n  85% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-90px);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  [_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@media (max-width: 960px) {\n  .auth-left[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .al-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .auth-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        160deg,\n        #0A1020 0%,\n        #0E2417 55%,\n        #123B27 100%);\n    padding: 32px 20px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n}\n@media (max-width: 480px) {\n  .auth-right[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: false, template: `<div class="auth-page">\r
\r
  <!-- \u2550\u2550\u2550 PANNEAU GAUCHE \u2550\u2550\u2550 -->\r
  <aside class="auth-left">\r
    <div class="al-bg">\r
      <svg class="al-tree" width="420" height="520" viewBox="0 0 420 520" fill="none">\r
        <path d="M210 500 L 210 380" stroke="#8B4513" stroke-width="7" stroke-linecap="round"/>\r
        <path d="M210 380 C 180 360, 150 345, 120 320" stroke="#8B4513" stroke-width="5" fill="none" stroke-linecap="round"/>\r
        <path d="M210 380 C 240 360, 270 345, 300 320" stroke="#8B4513" stroke-width="5" fill="none" stroke-linecap="round"/>\r
        <path d="M210 380 L 210 310" stroke="#8B4513" stroke-width="5" stroke-linecap="round"/>\r
        <path d="M120 320 C 100 295, 88 280, 92 255" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>\r
        <path d="M300 320 C 320 295, 332 280, 328 255" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>\r
        <path d="M210 310 C 195 285, 195 270, 205 245" stroke="#8B4513" stroke-width="3.5" fill="none" stroke-linecap="round"/>\r
        <circle cx="92" cy="250" r="15" fill="#2E7D32"/>\r
        <circle cx="205" cy="240" r="16" fill="#81C784"/>\r
        <circle cx="328" cy="250" r="15" fill="#2E7D32"/>\r
        <circle cx="120" cy="320" r="9" fill="#3B82F6" opacity="0.75"/>\r
        <circle cx="300" cy="320" r="9" fill="#EC4899" opacity="0.75"/>\r
      </svg>\r
      <div class="al-sparks">\r
        <div class="al-spark" style="left:18%; animation-delay:0s"></div>\r
        <div class="al-spark" style="left:52%; animation-delay:1.8s"></div>\r
        <div class="al-spark" style="left:76%; animation-delay:3.2s"></div>\r
      </div>\r
      <div class="al-dots"></div>\r
    </div>\r
    <div class="al-content">\r
\r
      <div class="al-brand">\r
        <div class="al-brand-icon">\r
          <svg width="22" height="22" viewBox="0 0 120 120" fill="none">\r
            <rect x="50" y="60" width="20" height="40" fill="#8B4513" rx="2"/>\r
            <path d="M60 60 L40 40" stroke="#8B4513" stroke-width="7" stroke-linecap="round"/>\r
            <path d="M60 60 L80 40" stroke="#8B4513" stroke-width="7" stroke-linecap="round"/>\r
            <circle cx="35" cy="35" r="11" fill="#2E7D32"/>\r
            <circle cx="85" cy="35" r="11" fill="#2E7D32"/>\r
            <circle cx="60" cy="24" r="11" fill="#81C784"/>\r
          </svg>\r
        </div>\r
        <span class="al-brand-name">Mam Buudu</span>\r
      </div>\r
\r
      <h1 class="al-title">Votre histoire familiale,<br/>pr\xE9serv\xE9e pour toujours</h1>\r
      <p class="al-subtitle">Cr\xE9ez, g\xE9rez et partagez l'arbre g\xE9n\xE9alogique de votre famille.</p>\r
\r
      <div class="al-features">\r
        <div class="al-feat">\r
          <div class="al-feat-icon"><span class="material-icons-round">account_tree</span></div>\r
          <span>Arbre g\xE9n\xE9alogique interactif</span>\r
        </div>\r
        <div class="al-feat">\r
          <div class="al-feat-icon"><span class="material-icons-round">auto_stories</span></div>\r
          <span>Stories et photos de famille</span>\r
        </div>\r
        <div class="al-feat">\r
          <div class="al-feat-icon"><span class="material-icons-round">emoji_events</span></div>\r
          <span>Gamification et r\xE9compenses</span>\r
        </div>\r
        <div class="al-feat">\r
          <div class="al-feat-icon"><span class="material-icons-round">cloud_sync</span></div>\r
          <span>Synchronisation multi-appareils</span>\r
        </div>\r
      </div>\r
\r
      <div class="al-stats">\r
        <div class="al-stat">\r
          <span class="al-stat-num">420+</span>\r
          <span class="al-stat-label">Familles</span>\r
        </div>\r
        <div class="al-stat-sep"></div>\r
        <div class="al-stat">\r
          <span class="al-stat-num">18 500+</span>\r
          <span class="al-stat-label">Membres</span>\r
        </div>\r
        <div class="al-stat-sep"></div>\r
        <div class="al-stat">\r
          <span class="al-stat-num">5</span>\r
          <span class="al-stat-label">G\xE9n\xE9rations</span>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </aside>\r
\r
  <!-- \u2550\u2550\u2550 PANNEAU DROIT \u2550\u2550\u2550 -->\r
  <main class="auth-right">\r
    <div class="auth-card">\r
\r
      <div class="auth-card-header">\r
        <div class="auth-card-icon">\r
          <span class="material-icons-round">login</span>\r
        </div>\r
        <h2>Connexion</h2>\r
        <p>Acc\xE9dez \xE0 l'espace de votre famille</p>\r
      </div>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()">\r
\r
        <!-- Code famille -->\r
        <div class="form-group">\r
          <div class="field-label-row">\r
            <label>Code famille</label>\r
            <span class="field-hint-tag">\r
              <span class="material-icons-round">info</span>\r
              Fourni par votre admin\r
            </span>\r
          </div>\r
          <div class="input-wrapper">\r
            <span class="material-icons-round">group</span>\r
            <input type="text" formControlName="familleCode" placeholder="Ex : DIALLO-2024"\r
                   [class.input-error]="f['familleCode'].invalid && f['familleCode'].touched" />\r
          </div>\r
          <span class="field-error" *ngIf="f['familleCode'].invalid && f['familleCode'].touched">\r
            Le code famille est requis\r
          </span>\r
        </div>\r
\r
        <!-- Onglets identifiant -->\r
        <div class="form-group">\r
          <label>Identifiant</label>\r
          <div class="id-tabs">\r
            <button type="button" class="id-tab" [class.active]="activeTab === 'email'" (click)="setTab('email')">\r
              <span class="material-icons-round">email</span> Email\r
            </button>\r
            <button type="button" class="id-tab" [class.active]="activeTab === 'telephone'" (click)="setTab('telephone')">\r
              <span class="material-icons-round">phone</span> T\xE9l\xE9phone\r
            </button>\r
            <button type="button" class="id-tab" [class.active]="activeTab === 'username'" (click)="setTab('username')">\r
              <span class="material-icons-round">badge</span> Username\r
            </button>\r
          </div>\r
\r
          <!-- Email / Username -->\r
          <div class="input-wrapper" *ngIf="activeTab !== 'telephone'">\r
            <span class="material-icons-round">{{ tabIcon }}</span>\r
            <input type="text" formControlName="identifiant" [placeholder]="tabPlaceholder"\r
                   [class.input-error]="f['identifiant'].invalid && f['identifiant'].touched" />\r
          </div>\r
\r
          <!-- T\xE9l\xE9phone -->\r
          <div class="phone-field-wrap" *ngIf="activeTab === 'telephone'">\r
            <div class="phone-input-row">\r
              <button type="button" class="country-selector" (click)="showCountryPicker = !showCountryPicker; $event.stopPropagation()">\r
                <img class="country-flag-img"\r
                     [src]="'https://flagcdn.com/20x15/' + selectedCountry.iso + '.png'"\r
                     [alt]="selectedCountry.name" />\r
                <span class="country-dial">{{ selectedCountry.dial }}</span>\r
                <span class="material-icons-round country-chevron" [class.open]="showCountryPicker">expand_more</span>\r
              </button>\r
              <input class="phone-number-input" type="tel"\r
                     [value]="localPhone"\r
                     (input)="localPhone = $any($event.target).value; updatePhoneIdentifiant()"\r
                     placeholder="620 00 00 00"\r
                     [class.input-error]="f['identifiant'].invalid && f['identifiant'].touched" />\r
            </div>\r
            <div class="country-dropdown" *ngIf="showCountryPicker" (click)="$event.stopPropagation()">\r
              <div class="dropdown-search-wrap">\r
                <span class="material-icons-round">search</span>\r
                <input class="country-search" type="text"\r
                       [value]="countrySearch"\r
                       (input)="countrySearch = $any($event.target).value"\r
                       placeholder="Rechercher un pays..." />\r
              </div>\r
              <div class="country-list">\r
                <button type="button" class="country-option"\r
                        *ngFor="let c of filteredCountries"\r
                        (click)="selectCountry(c)">\r
                  <img class="country-flag-img" [src]="'https://flagcdn.com/20x15/' + c.iso + '.png'" [alt]="c.name" />\r
                  <span class="country-name">{{ c.name }}</span>\r
                  <span class="country-dial-sm">{{ c.dial }}</span>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <span class="field-error" *ngIf="f['identifiant'].invalid && f['identifiant'].touched">\r
            L'identifiant est requis\r
          </span>\r
        </div>\r
\r
        <!-- Mot de passe -->\r
        <div class="form-group">\r
          <div class="field-label-row">\r
            <label>Mot de passe</label>\r
            <a routerLink="/auth/forgot-password" class="forgot-link">Mot de passe oubli\xE9 ?</a>\r
          </div>\r
          <div class="input-wrapper">\r
            <span class="material-icons-round">lock</span>\r
            <input [type]="showPassword ? 'text' : 'password'" formControlName="password"\r
                   placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
                   [class.input-error]="f['password'].invalid && f['password'].touched" />\r
            <div class="input-suffix">\r
              <button type="button" class="btn-icon-eye" (click)="showPassword = !showPassword">\r
                <span class="material-icons-round">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>\r
              </button>\r
            </div>\r
          </div>\r
          <span class="field-error" *ngIf="f['password'].invalid && f['password'].touched">\r
            Mot de passe requis (6 caract\xE8res minimum)\r
          </span>\r
        </div>\r
\r
        <div class="alert-error-box" *ngIf="errorMsg">\r
          <span class="material-icons-round">error_outline</span>\r
          {{ errorMsg }}\r
        </div>\r
\r
        <button type="submit" class="btn-submit" [disabled]="loading">\r
          <span class="btn-spinner" *ngIf="loading"></span>\r
          <ng-container *ngIf="!loading">\r
            <span class="material-icons-round">login</span>\r
            Se connecter\r
          </ng-container>\r
        </button>\r
\r
      </form>\r
\r
      <div class="auth-footer">\r
        <p>Pas encore de compte ? <a routerLink="/auth/register">Cr\xE9er un espace familial</a></p>\r
        <div class="footer-links">\r
          <a routerLink="/famille/login" class="footer-link">\r
            <span class="material-icons-round">people</span>\r
            Espace famille\r
          </a>\r
          <span class="footer-sep">\xB7</span>\r
          <a routerLink="/" class="footer-link">\r
            <span class="material-icons-round">home</span>\r
            Accueil\r
          </a>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </main>\r
\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/auth/login/login.component.scss */\n:host {\n  display: block;\n}\n.auth-page {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-left {\n  width: 44%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      160deg,\n      #0A1020 0%,\n      #0E2417 55%,\n      #123B27 100%);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.al-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.al-tree {\n  position: absolute;\n  right: -60px;\n  bottom: -30px;\n  opacity: 0.4;\n}\n.al-sparks {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n.al-spark {\n  position: absolute;\n  bottom: 40px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #A6E3AF;\n  box-shadow: 0 0 8px 2px rgba(166, 227, 175, 0.7);\n  animation: sparkRise 5.5s ease-in infinite;\n}\n.al-dots {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 36px 36px;\n}\n.al-content {\n  position: relative;\n  z-index: 2;\n  padding: 52px 44px;\n  width: 100%;\n}\n.al-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 40px;\n}\n.al-brand-icon {\n  width: 42px;\n  height: 42px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.al-brand-name {\n  font-size: 21px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n}\n.al-title {\n  font-size: 26px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.3;\n  margin-bottom: 12px;\n  max-width: 340px;\n}\n.al-subtitle {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.68);\n  line-height: 1.65;\n  margin-bottom: 36px;\n  max-width: 320px;\n}\n.al-features {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 36px;\n}\n.al-feat {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.11);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.88);\n  transition: background 0.2s;\n}\n.al-feat:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.al-feat-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.al-feat-icon .material-icons-round {\n  font-size: 16px !important;\n  color: #81C784;\n}\n.al-stats {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  padding: 16px 20px;\n}\n.al-stat {\n  flex: 1;\n  text-align: center;\n}\n.al-stat-num {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.5px;\n}\n.al-stat-label {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.55);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 2px;\n}\n.al-stat-sep {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.auth-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px;\n  background: #F0FDF4;\n  overflow-y: auto;\n}\n.auth-card {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 36px 32px;\n  box-shadow: 0 8px 40px rgba(15, 42, 30, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #DCFCE7;\n  animation: cardFadeIn 0.45s ease both;\n}\n.auth-card-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.auth-card-icon {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #F0FDF4,\n      #DCFCE7);\n  border: 1px solid #BBF7D0;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.auth-card-icon .material-icons-round {\n  font-size: 24px !important;\n  color: #15803D;\n}\n.auth-card-header h2 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin-bottom: 4px;\n}\n.auth-card-header p {\n  font-size: 14px;\n  color: #6B7280;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.field-label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.field-label-row label {\n  margin-bottom: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.field-hint-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #9CA3AF;\n  background: #F9FAFB;\n  padding: 2px 8px;\n  border-radius: 6px;\n  border: 1px solid #E5E7EB;\n}\n.field-hint-tag .material-icons-round {\n  font-size: 12px !important;\n}\n.forgot-link {\n  font-size: 12px;\n  font-weight: 500;\n  color: #15803D;\n  text-decoration: none;\n}\n.forgot-link:hover {\n  text-decoration: underline;\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrapper > .material-icons-round:first-child {\n  position: absolute;\n  left: 12px;\n  color: #9CA3AF;\n  font-size: 18px !important;\n  pointer-events: none;\n  z-index: 1;\n}\n.input-wrapper input,\n.input-wrapper select {\n  padding-left: 40px !important;\n}\n.input-wrapper .input-suffix {\n  position: absolute;\n  right: 6px;\n  display: flex;\n  align-items: center;\n}\ninput[type=text],\ninput[type=email],\ninput[type=password],\ninput[type=tel],\nselect {\n  width: 100%;\n  padding: 11px 14px;\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #111827;\n  transition: all 0.15s;\n  outline: none;\n  appearance: none;\n}\ninput[type=text]::placeholder,\ninput[type=email]::placeholder,\ninput[type=password]::placeholder,\ninput[type=tel]::placeholder,\nselect::placeholder {\n  color: #9CA3AF;\n}\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=password]:focus,\ninput[type=tel]:focus,\nselect:focus {\n  background: #fff;\n  border-color: #15803D;\n  box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.1);\n}\ninput[type=text].input-error,\ninput[type=email].input-error,\ninput[type=password].input-error,\ninput[type=tel].input-error,\nselect.input-error {\n  border-color: #EF4444;\n  background: #FEF2F2;\n}\ninput[type=text].input-error:focus,\ninput[type=email].input-error:focus,\ninput[type=password].input-error:focus,\ninput[type=tel].input-error:focus,\nselect.input-error:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.field-error {\n  font-size: 11px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.btn-icon-eye {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #9CA3AF;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-icon-eye:hover {\n  background: #F1F5F9;\n  color: #374151;\n}\n.btn-icon-eye .material-icons-round {\n  font-size: 18px !important;\n}\n.id-tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 10px;\n  background: #F1F5F9;\n  border-radius: 10px;\n  padding: 4px;\n}\n.id-tab {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 8px 4px;\n  border: none;\n  background: transparent;\n  border-radius: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.id-tab .material-icons-round {\n  font-size: 14px !important;\n}\n.id-tab.active {\n  background: #fff;\n  color: #15803D;\n  font-weight: 600;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(21, 128, 61, 0.08);\n}\n.id-tab:not(.active):hover {\n  background: rgba(255, 255, 255, 0.65);\n  color: #374151;\n}\n.phone-field-wrap {\n  position: relative;\n}\n.phone-input-row {\n  display: flex;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  background: #F9FAFB;\n}\n.phone-input-row:focus-within {\n  border-color: #15803D;\n  box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.1);\n  background: #fff;\n}\n.country-selector {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0 12px;\n  border-right: 1px solid #E5E7EB;\n  cursor: pointer;\n  flex-shrink: 0;\n  background: transparent;\n  border-top: none;\n  border-bottom: none;\n  border-left: none;\n  transition: background 0.15s;\n}\n.country-selector:hover {\n  background: rgba(0, 0, 0, 0.03);\n}\n.country-flag-img {\n  width: 20px;\n  height: 15px;\n  border-radius: 2px;\n  object-fit: cover;\n}\n.country-dial {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.country-chevron {\n  font-size: 16px !important;\n  color: #9CA3AF;\n  transition: transform 0.2s;\n}\n.country-chevron.open {\n  transform: rotate(180deg);\n}\n.phone-number-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 11px 14px;\n  font-size: 14px;\n  background: transparent;\n  color: #111827;\n  font-family: inherit;\n}\n.phone-number-input::placeholder {\n  color: #9CA3AF;\n}\n.country-dropdown {\n  position: absolute;\n  z-index: 400;\n  top: calc(100% + 6px);\n  left: 0;\n  width: 290px;\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 14px;\n  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.dropdown-search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #F1F5F9;\n  background: #F9FAFB;\n}\n.dropdown-search-wrap .material-icons-round {\n  font-size: 16px !important;\n  color: #9CA3AF;\n  flex-shrink: 0;\n}\n.country-search {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  font-family: inherit;\n}\n.country-search::placeholder {\n  color: #9CA3AF;\n}\n.country-list {\n  max-height: 224px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.country-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 12px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  border-radius: 8px;\n  transition: background 0.12s;\n  font-family: inherit;\n}\n.country-option:hover {\n  background: #F0FDF4;\n}\n.country-name {\n  flex: 1;\n  font-size: 13px;\n  color: #111827;\n}\n.country-dial-sm {\n  font-size: 11px;\n  color: #6B7280;\n  font-weight: 600;\n  background: #F1F5F9;\n  padding: 2px 7px;\n  border-radius: 5px;\n}\n.alert-error-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: #FEF2F2;\n  color: #DC2626;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  border: 1px solid #FECACA;\n}\n.alert-error-box .material-icons-round {\n  font-size: 17px !important;\n  flex-shrink: 0;\n}\n.btn-submit {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #15803D,\n      #166534);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(21, 128, 61, 0.35);\n  letter-spacing: -0.1px;\n}\n.btn-submit .material-icons-round {\n  font-size: 18px !important;\n}\n.btn-submit:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #166534,\n      #14532D);\n  box-shadow: 0 6px 24px rgba(21, 128, 61, 0.45);\n  transform: translateY(-1px);\n}\n.btn-submit:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-spinner {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.65s linear infinite;\n}\n.auth-footer {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-footer p {\n  font-size: 13px;\n  color: #6B7280;\n  margin-bottom: 14px;\n}\n.auth-footer p a {\n  color: #15803D;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer p a:hover {\n  text-decoration: underline;\n}\n.footer-links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.footer-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9CA3AF;\n  text-decoration: none;\n  padding: 4px 10px;\n  border-radius: 7px;\n  transition: all 0.15s;\n}\n.footer-link .material-icons-round {\n  font-size: 13px !important;\n}\n.footer-link:hover {\n  color: #374151;\n  background: #F1F5F9;\n  text-decoration: none;\n}\n.footer-sep {\n  color: #D1D5DB;\n  font-size: 16px;\n}\n@keyframes cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes sparkRise {\n  0% {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  15% {\n    opacity: 0.9;\n  }\n  85% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-90px);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :host * {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@media (max-width: 960px) {\n  .auth-left {\n    width: 40%;\n  }\n  .al-title {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .auth-left {\n    display: none;\n  }\n  .auth-right {\n    background:\n      linear-gradient(\n        160deg,\n        #0A1020 0%,\n        #0E2417 55%,\n        #123B27 100%);\n    padding: 32px 20px;\n  }\n  .auth-card {\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n}\n@media (max-width: 480px) {\n  .auth-right {\n    padding: 20px 16px;\n  }\n  .auth-card {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 24 });
})();

export {
  COUNTRIES,
  LoginComponent
};
//# sourceMappingURL=chunk-XVZM4MPD.js.map
