import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-YCYTAEQB.js";
import {
  AuthService,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UCCPUYZ5.js";

// src/app/auth/login/login.component.ts
function LoginComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " Le code famille est requis ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 51);
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
function LoginComponent_div_103_div_9_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function LoginComponent_div_103_div_9_button_6_Template_button_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectCountry(c_r5));
    });
    \u0275\u0275element(1, "img", 55);
    \u0275\u0275elementStart(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 67);
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
function LoginComponent_div_103_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function LoginComponent_div_103_div_9_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 61)(2, "span", 9);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 62);
    \u0275\u0275listener("input", function LoginComponent_div_103_div_9_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.countrySearch = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275template(6, LoginComponent_div_103_div_9_button_6_Template, 6, 4, "button", 64);
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
function LoginComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "button", 54);
    \u0275\u0275listener("click", function LoginComponent_div_103_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.showCountryPicker = !ctx_r0.showCountryPicker;
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(3, "img", 55);
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 57);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 58);
    \u0275\u0275listener("input", function LoginComponent_div_103_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.localPhone = $event.target.value;
      return \u0275\u0275resetView(ctx_r0.updatePhoneIdentifiant());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, LoginComponent_div_103_div_9_Template, 7, 2, "div", 59);
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
function LoginComponent_span_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " L'identifiant est requis ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, " Mot de passe requis (6 caract\xE8res minimum) ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 9);
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
function LoginComponent_span_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 69);
  }
}
function LoginComponent_ng_container_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 9);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: false, decls: 140, vars: 22, consts: [[1, "auth-page"], [1, "auth-left"], [1, "al-bg"], [1, "al-blob", "al-blob-1"], [1, "al-blob", "al-blob-2"], [1, "al-dots"], [1, "al-content"], [1, "al-brand"], [1, "al-brand-icon"], [1, "material-icons-round"], [1, "al-brand-name"], [1, "al-title"], [1, "al-subtitle"], [1, "al-features"], [1, "al-feat"], [1, "al-feat-icon"], [1, "al-stats"], [1, "al-stat"], [1, "al-stat-num"], [1, "al-stat-label"], [1, "al-stat-sep"], [1, "auth-right"], [1, "auth-card"], [1, "auth-card-header"], [1, "auth-card-icon"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "field-label-row"], [1, "field-hint-tag"], [1, "input-wrapper"], ["type", "text", "formControlName", "familleCode", "placeholder", "Ex : DIALLO-2024"], ["class", "field-error", 4, "ngIf"], [1, "id-tabs"], ["type", "button", 1, "id-tab", 3, "click"], ["class", "input-wrapper", 4, "ngIf"], ["class", "phone-field-wrap", 4, "ngIf"], ["routerLink", "/auth/forgot", 1, "forgot-link"], ["formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type"], [1, "input-suffix"], ["type", "button", 1, "btn-icon-eye", 3, "click"], ["class", "alert-error-box", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "btn-spinner", 4, "ngIf"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/register"], [1, "footer-links"], ["routerLink", "/famille/login", 1, "footer-link"], [1, "footer-sep"], ["routerLink", "/", 1, "footer-link"], [1, "field-error"], ["type", "text", "formControlName", "identifiant", 3, "placeholder"], [1, "phone-field-wrap"], [1, "phone-input-row"], ["type", "button", 1, "country-selector", 3, "click"], [1, "country-flag-img", 3, "src", "alt"], [1, "country-dial"], [1, "material-icons-round", "country-chevron"], ["type", "tel", "placeholder", "620 00 00 00", 1, "phone-number-input", 3, "input", "value"], ["class", "country-dropdown", 3, "click", 4, "ngIf"], [1, "country-dropdown", 3, "click"], [1, "dropdown-search-wrap"], ["type", "text", "placeholder", "Rechercher un pays...", 1, "country-search", 3, "input", "value"], [1, "country-list"], ["type", "button", "class", "country-option", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "country-option", 3, "click"], [1, "country-name"], [1, "country-dial-sm"], [1, "alert-error-box"], [1, "btn-spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "span", 9);
      \u0275\u0275text(10, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "span", 10);
      \u0275\u0275text(12, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "h1", 11);
      \u0275\u0275text(14, "Votre histoire familiale,");
      \u0275\u0275element(15, "br");
      \u0275\u0275text(16, "pr\xE9serv\xE9e pour toujours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 12);
      \u0275\u0275text(18, "Cr\xE9ez, g\xE9rez et partagez l'arbre g\xE9n\xE9alogique de votre famille.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "span", 9);
      \u0275\u0275text(23, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Arbre g\xE9n\xE9alogique interactif");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "span", 9);
      \u0275\u0275text(29, "auto_stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Stories et photos de famille");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 14)(33, "div", 15)(34, "span", 9);
      \u0275\u0275text(35, "emoji_events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "Gamification et r\xE9compenses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 14)(39, "div", 15)(40, "span", 9);
      \u0275\u0275text(41, "cloud_sync");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Synchronisation multi-appareils");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 16)(45, "div", 17)(46, "span", 18);
      \u0275\u0275text(47, "420+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 19);
      \u0275\u0275text(49, "Familles");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "div", 20);
      \u0275\u0275elementStart(51, "div", 17)(52, "span", 18);
      \u0275\u0275text(53, "18 500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 19);
      \u0275\u0275text(55, "Membres");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "div", 20);
      \u0275\u0275elementStart(57, "div", 17)(58, "span", 18);
      \u0275\u0275text(59, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 19);
      \u0275\u0275text(61, "G\xE9n\xE9rations");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(62, "main", 21)(63, "div", 22)(64, "div", 23)(65, "div", 24)(66, "span", 9);
      \u0275\u0275text(67, "login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "h2");
      \u0275\u0275text(69, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p");
      \u0275\u0275text(71, "Acc\xE9dez \xE0 l'espace de votre famille");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "form", 25);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_72_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(73, "div", 26)(74, "div", 27)(75, "label");
      \u0275\u0275text(76, "Code famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span", 28)(78, "span", 9);
      \u0275\u0275text(79, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " Fourni par votre admin ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 29)(82, "span", 9);
      \u0275\u0275text(83, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(85, LoginComponent_span_85_Template, 2, 0, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 26)(87, "label");
      \u0275\u0275text(88, "Identifiant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 32)(90, "button", 33);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_90_listener() {
        return ctx.setTab("email");
      });
      \u0275\u0275elementStart(91, "span", 9);
      \u0275\u0275text(92, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275text(93, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "button", 33);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_94_listener() {
        return ctx.setTab("telephone");
      });
      \u0275\u0275elementStart(95, "span", 9);
      \u0275\u0275text(96, "phone");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, " T\xE9l\xE9phone ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "button", 33);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_98_listener() {
        return ctx.setTab("username");
      });
      \u0275\u0275elementStart(99, "span", 9);
      \u0275\u0275text(100, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, " Username ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(102, LoginComponent_div_102_Template, 4, 4, "div", 34)(103, LoginComponent_div_103_Template, 10, 9, "div", 35)(104, LoginComponent_span_104_Template, 2, 0, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 26)(106, "div", 27)(107, "label");
      \u0275\u0275text(108, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "a", 36);
      \u0275\u0275text(110, "Mot de passe oubli\xE9 ?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 29)(112, "span", 9);
      \u0275\u0275text(113, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "input", 37);
      \u0275\u0275elementStart(115, "div", 38)(116, "button", 39);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_116_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275elementStart(117, "span", 9);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(119, LoginComponent_span_119_Template, 2, 0, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(120, LoginComponent_div_120_Template, 4, 1, "div", 40);
      \u0275\u0275elementStart(121, "button", 41);
      \u0275\u0275template(122, LoginComponent_span_122_Template, 1, 0, "span", 42)(123, LoginComponent_ng_container_123_Template, 4, 0, "ng-container", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 44)(125, "p");
      \u0275\u0275text(126, "Pas encore de compte ? ");
      \u0275\u0275elementStart(127, "a", 45);
      \u0275\u0275text(128, "Cr\xE9er un espace familial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 46)(130, "a", 47)(131, "span", 9);
      \u0275\u0275text(132, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " Espace famille ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "span", 48);
      \u0275\u0275text(135, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "a", 49)(137, "span", 9);
      \u0275\u0275text(138, "home");
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, " Accueil ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(72);
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
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-left[_ngcontent-%COMP%] {\n  width: 44%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.al-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.al-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(70px);\n  opacity: 0.22;\n}\n.al-blob-1[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  background: #3B82F6;\n  top: -120px;\n  left: -80px;\n  animation: _ngcontent-%COMP%_blobFloat 9s ease-in-out infinite;\n}\n.al-blob-2[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: #8B5CF6;\n  bottom: -80px;\n  right: -60px;\n  animation: _ngcontent-%COMP%_blobFloat 11s ease-in-out infinite reverse;\n}\n.al-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 1px,\n      transparent 1px);\n  background-size: 36px 36px;\n}\n.al-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 52px 44px;\n  width: 100%;\n}\n.al-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 40px;\n}\n.al-brand-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: rgba(255, 255, 255, 0.18);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.al-brand-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n  color: #BAE6FD;\n}\n.al-brand-name[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n}\n.al-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.3;\n  margin-bottom: 12px;\n  max-width: 340px;\n}\n.al-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.68);\n  line-height: 1.65;\n  margin-bottom: 36px;\n  max-width: 320px;\n}\n.al-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 36px;\n}\n.al-feat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.11);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.88);\n  transition: background 0.2s;\n}\n.al-feat[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.al-feat-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.14);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.al-feat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #BAE6FD;\n}\n.al-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  padding: 16px 20px;\n}\n.al-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.al-stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.5px;\n}\n.al-stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.55);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 2px;\n}\n.al-stat-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.auth-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px;\n  background: #EEF2FF;\n  overflow-y: auto;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 36px 32px;\n  box-shadow: 0 8px 40px rgba(20, 69, 245, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #E0E7FF;\n  animation: _ngcontent-%COMP%_cardFadeIn 0.45s ease both;\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.auth-card-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #EEF2FF,\n      #E0E7FF);\n  border: 1px solid #C7D2FE;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.auth-card-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  color: #1445F5;\n}\n.auth-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin-bottom: 4px;\n}\n.auth-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.field-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.field-label-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.field-hint-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #9CA3AF;\n  background: #F9FAFB;\n  padding: 2px 8px;\n  border-radius: 6px;\n  border: 1px solid #E5E7EB;\n}\n.field-hint-tag[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1445F5;\n  text-decoration: none;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrapper[_ngcontent-%COMP%]    > .material-icons-round[_ngcontent-%COMP%]:first-child {\n  position: absolute;\n  left: 12px;\n  color: #9CA3AF;\n  font-size: 18px !important;\n  pointer-events: none;\n  z-index: 1;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 40px !important;\n}\n.input-wrapper[_ngcontent-%COMP%]   .input-suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  display: flex;\n  align-items: center;\n}\ninput[type=text][_ngcontent-%COMP%], \ninput[type=email][_ngcontent-%COMP%], \ninput[type=password][_ngcontent-%COMP%], \ninput[type=tel][_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px;\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #111827;\n  transition: all 0.15s;\n  outline: none;\n  appearance: none;\n}\ninput[type=text][_ngcontent-%COMP%]::placeholder, \ninput[type=email][_ngcontent-%COMP%]::placeholder, \ninput[type=password][_ngcontent-%COMP%]::placeholder, \ninput[type=tel][_ngcontent-%COMP%]::placeholder, \nselect[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\ninput[type=text][_ngcontent-%COMP%]:focus, \ninput[type=email][_ngcontent-%COMP%]:focus, \ninput[type=password][_ngcontent-%COMP%]:focus, \ninput[type=tel][_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n}\ninput[type=text].input-error[_ngcontent-%COMP%], \ninput[type=email].input-error[_ngcontent-%COMP%], \ninput[type=password].input-error[_ngcontent-%COMP%], \ninput[type=tel].input-error[_ngcontent-%COMP%], \nselect.input-error[_ngcontent-%COMP%] {\n  border-color: #EF4444;\n  background: #FEF2F2;\n}\ninput[type=text].input-error[_ngcontent-%COMP%]:focus, \ninput[type=email].input-error[_ngcontent-%COMP%]:focus, \ninput[type=password].input-error[_ngcontent-%COMP%]:focus, \ninput[type=tel].input-error[_ngcontent-%COMP%]:focus, \nselect.input-error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.btn-icon-eye[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #9CA3AF;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-icon-eye[_ngcontent-%COMP%]:hover {\n  background: #F1F5F9;\n  color: #374151;\n}\n.btn-icon-eye[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.id-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 10px;\n  background: #F1F5F9;\n  border-radius: 10px;\n  padding: 4px;\n}\n.id-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 8px 4px;\n  border: none;\n  background: transparent;\n  border-radius: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.id-tab[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.id-tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1445F5;\n  font-weight: 600;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(20, 69, 245, 0.08);\n}\n.id-tab[_ngcontent-%COMP%]:not(.active):hover {\n  background: rgba(255, 255, 255, 0.65);\n  color: #374151;\n}\n.phone-field-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.phone-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  background: #F9FAFB;\n}\n.phone-input-row[_ngcontent-%COMP%]:focus-within {\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n  background: #fff;\n}\n.country-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0 12px;\n  border-right: 1px solid #E5E7EB;\n  cursor: pointer;\n  flex-shrink: 0;\n  background: transparent;\n  border-top: none;\n  border-bottom: none;\n  border-left: none;\n  transition: background 0.15s;\n}\n.country-selector[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.03);\n}\n.country-flag-img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 15px;\n  border-radius: 2px;\n  object-fit: cover;\n}\n.country-dial[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.country-chevron[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #9CA3AF;\n  transition: transform 0.2s;\n}\n.country-chevron.open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.phone-number-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 11px 14px;\n  font-size: 14px;\n  background: transparent;\n  color: #111827;\n  font-family: inherit;\n}\n.phone-number-input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.country-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 400;\n  top: calc(100% + 6px);\n  left: 0;\n  width: 290px;\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 14px;\n  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.dropdown-search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #F1F5F9;\n  background: #F9FAFB;\n}\n.dropdown-search-wrap[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #9CA3AF;\n  flex-shrink: 0;\n}\n.country-search[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  font-family: inherit;\n}\n.country-search[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.country-list[_ngcontent-%COMP%] {\n  max-height: 224px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.country-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 12px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  border-radius: 8px;\n  transition: background 0.12s;\n  font-family: inherit;\n}\n.country-option[_ngcontent-%COMP%]:hover {\n  background: #EEF2FF;\n}\n.country-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  color: #111827;\n}\n.country-dial-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6B7280;\n  font-weight: 600;\n  background: #F1F5F9;\n  padding: 2px 7px;\n  border-radius: 5px;\n}\n.alert-error-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: #FEF2F2;\n  color: #DC2626;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  border: 1px solid #FECACA;\n}\n.alert-error-box[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  flex-shrink: 0;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.35);\n  letter-spacing: -0.1px;\n}\n.btn-submit[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8,\n      #1445F5);\n  box-shadow: 0 6px 24px rgba(20, 69, 245, 0.45);\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.65s linear infinite;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  margin-bottom: 14px;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1445F5;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.footer-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9CA3AF;\n  text-decoration: none;\n  padding: 4px 10px;\n  border-radius: 7px;\n  transition: all 0.15s;\n}\n.footer-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background: #F1F5F9;\n  text-decoration: none;\n}\n.footer-sep[_ngcontent-%COMP%] {\n  color: #D1D5DB;\n  font-size: 16px;\n}\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_blobFloat {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(16px, -20px) scale(1.04);\n  }\n  66% {\n    transform: translate(-10px, 12px) scale(0.96);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 960px) {\n  .auth-left[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .al-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .auth-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        145deg,\n        #0A1FA8 0%,\n        #1445F5 55%,\n        #2563EB 100%);\n    padding: 32px 20px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n}\n@media (max-width: 480px) {\n  .auth-right[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: false, template: `<div class="auth-page">

  <!-- \u2550\u2550\u2550 PANNEAU GAUCHE \u2550\u2550\u2550 -->
  <aside class="auth-left">
    <div class="al-bg">
      <div class="al-blob al-blob-1"></div>
      <div class="al-blob al-blob-2"></div>
      <div class="al-dots"></div>
    </div>
    <div class="al-content">

      <div class="al-brand">
        <div class="al-brand-icon">
          <span class="material-icons-round">account_tree</span>
        </div>
        <span class="al-brand-name">Mam Buudu</span>
      </div>

      <h1 class="al-title">Votre histoire familiale,<br/>pr\xE9serv\xE9e pour toujours</h1>
      <p class="al-subtitle">Cr\xE9ez, g\xE9rez et partagez l'arbre g\xE9n\xE9alogique de votre famille.</p>

      <div class="al-features">
        <div class="al-feat">
          <div class="al-feat-icon"><span class="material-icons-round">account_tree</span></div>
          <span>Arbre g\xE9n\xE9alogique interactif</span>
        </div>
        <div class="al-feat">
          <div class="al-feat-icon"><span class="material-icons-round">auto_stories</span></div>
          <span>Stories et photos de famille</span>
        </div>
        <div class="al-feat">
          <div class="al-feat-icon"><span class="material-icons-round">emoji_events</span></div>
          <span>Gamification et r\xE9compenses</span>
        </div>
        <div class="al-feat">
          <div class="al-feat-icon"><span class="material-icons-round">cloud_sync</span></div>
          <span>Synchronisation multi-appareils</span>
        </div>
      </div>

      <div class="al-stats">
        <div class="al-stat">
          <span class="al-stat-num">420+</span>
          <span class="al-stat-label">Familles</span>
        </div>
        <div class="al-stat-sep"></div>
        <div class="al-stat">
          <span class="al-stat-num">18 500+</span>
          <span class="al-stat-label">Membres</span>
        </div>
        <div class="al-stat-sep"></div>
        <div class="al-stat">
          <span class="al-stat-num">5</span>
          <span class="al-stat-label">G\xE9n\xE9rations</span>
        </div>
      </div>

    </div>
  </aside>

  <!-- \u2550\u2550\u2550 PANNEAU DROIT \u2550\u2550\u2550 -->
  <main class="auth-right">
    <div class="auth-card">

      <div class="auth-card-header">
        <div class="auth-card-icon">
          <span class="material-icons-round">login</span>
        </div>
        <h2>Connexion</h2>
        <p>Acc\xE9dez \xE0 l'espace de votre famille</p>
      </div>

      <form [formGroup]="form" (ngSubmit)="submit()">

        <!-- Code famille -->
        <div class="form-group">
          <div class="field-label-row">
            <label>Code famille</label>
            <span class="field-hint-tag">
              <span class="material-icons-round">info</span>
              Fourni par votre admin
            </span>
          </div>
          <div class="input-wrapper">
            <span class="material-icons-round">group</span>
            <input type="text" formControlName="familleCode" placeholder="Ex : DIALLO-2024"
                   [class.input-error]="f['familleCode'].invalid && f['familleCode'].touched" />
          </div>
          <span class="field-error" *ngIf="f['familleCode'].invalid && f['familleCode'].touched">
            Le code famille est requis
          </span>
        </div>

        <!-- Onglets identifiant -->
        <div class="form-group">
          <label>Identifiant</label>
          <div class="id-tabs">
            <button type="button" class="id-tab" [class.active]="activeTab === 'email'" (click)="setTab('email')">
              <span class="material-icons-round">email</span> Email
            </button>
            <button type="button" class="id-tab" [class.active]="activeTab === 'telephone'" (click)="setTab('telephone')">
              <span class="material-icons-round">phone</span> T\xE9l\xE9phone
            </button>
            <button type="button" class="id-tab" [class.active]="activeTab === 'username'" (click)="setTab('username')">
              <span class="material-icons-round">badge</span> Username
            </button>
          </div>

          <!-- Email / Username -->
          <div class="input-wrapper" *ngIf="activeTab !== 'telephone'">
            <span class="material-icons-round">{{ tabIcon }}</span>
            <input type="text" formControlName="identifiant" [placeholder]="tabPlaceholder"
                   [class.input-error]="f['identifiant'].invalid && f['identifiant'].touched" />
          </div>

          <!-- T\xE9l\xE9phone -->
          <div class="phone-field-wrap" *ngIf="activeTab === 'telephone'">
            <div class="phone-input-row">
              <button type="button" class="country-selector" (click)="showCountryPicker = !showCountryPicker; $event.stopPropagation()">
                <img class="country-flag-img"
                     [src]="'https://flagcdn.com/20x15/' + selectedCountry.iso + '.png'"
                     [alt]="selectedCountry.name" />
                <span class="country-dial">{{ selectedCountry.dial }}</span>
                <span class="material-icons-round country-chevron" [class.open]="showCountryPicker">expand_more</span>
              </button>
              <input class="phone-number-input" type="tel"
                     [value]="localPhone"
                     (input)="localPhone = $any($event.target).value; updatePhoneIdentifiant()"
                     placeholder="620 00 00 00"
                     [class.input-error]="f['identifiant'].invalid && f['identifiant'].touched" />
            </div>
            <div class="country-dropdown" *ngIf="showCountryPicker" (click)="$event.stopPropagation()">
              <div class="dropdown-search-wrap">
                <span class="material-icons-round">search</span>
                <input class="country-search" type="text"
                       [value]="countrySearch"
                       (input)="countrySearch = $any($event.target).value"
                       placeholder="Rechercher un pays..." />
              </div>
              <div class="country-list">
                <button type="button" class="country-option"
                        *ngFor="let c of filteredCountries"
                        (click)="selectCountry(c)">
                  <img class="country-flag-img" [src]="'https://flagcdn.com/20x15/' + c.iso + '.png'" [alt]="c.name" />
                  <span class="country-name">{{ c.name }}</span>
                  <span class="country-dial-sm">{{ c.dial }}</span>
                </button>
              </div>
            </div>
          </div>

          <span class="field-error" *ngIf="f['identifiant'].invalid && f['identifiant'].touched">
            L'identifiant est requis
          </span>
        </div>

        <!-- Mot de passe -->
        <div class="form-group">
          <div class="field-label-row">
            <label>Mot de passe</label>
            <a routerLink="/auth/forgot" class="forgot-link">Mot de passe oubli\xE9 ?</a>
          </div>
          <div class="input-wrapper">
            <span class="material-icons-round">lock</span>
            <input [type]="showPassword ? 'text' : 'password'" formControlName="password"
                   placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                   [class.input-error]="f['password'].invalid && f['password'].touched" />
            <div class="input-suffix">
              <button type="button" class="btn-icon-eye" (click)="showPassword = !showPassword">
                <span class="material-icons-round">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
              </button>
            </div>
          </div>
          <span class="field-error" *ngIf="f['password'].invalid && f['password'].touched">
            Mot de passe requis (6 caract\xE8res minimum)
          </span>
        </div>

        <div class="alert-error-box" *ngIf="errorMsg">
          <span class="material-icons-round">error_outline</span>
          {{ errorMsg }}
        </div>

        <button type="submit" class="btn-submit" [disabled]="loading">
          <span class="btn-spinner" *ngIf="loading"></span>
          <ng-container *ngIf="!loading">
            <span class="material-icons-round">login</span>
            Se connecter
          </ng-container>
        </button>

      </form>

      <div class="auth-footer">
        <p>Pas encore de compte ? <a routerLink="/auth/register">Cr\xE9er un espace familial</a></p>
        <div class="footer-links">
          <a routerLink="/famille/login" class="footer-link">
            <span class="material-icons-round">people</span>
            Espace famille
          </a>
          <span class="footer-sep">\xB7</span>
          <a routerLink="/" class="footer-link">
            <span class="material-icons-round">home</span>
            Accueil
          </a>
        </div>
      </div>

    </div>
  </main>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/auth/login/login.component.scss */\n:host {\n  display: block;\n}\n.auth-page {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-left {\n  width: 44%;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.al-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.al-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(70px);\n  opacity: 0.22;\n}\n.al-blob-1 {\n  width: 380px;\n  height: 380px;\n  background: #3B82F6;\n  top: -120px;\n  left: -80px;\n  animation: blobFloat 9s ease-in-out infinite;\n}\n.al-blob-2 {\n  width: 300px;\n  height: 300px;\n  background: #8B5CF6;\n  bottom: -80px;\n  right: -60px;\n  animation: blobFloat 11s ease-in-out infinite reverse;\n}\n.al-dots {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 1px,\n      transparent 1px);\n  background-size: 36px 36px;\n}\n.al-content {\n  position: relative;\n  z-index: 2;\n  padding: 52px 44px;\n  width: 100%;\n}\n.al-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 40px;\n}\n.al-brand-icon {\n  width: 42px;\n  height: 42px;\n  background: rgba(255, 255, 255, 0.18);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.al-brand-icon .material-icons-round {\n  font-size: 22px !important;\n  color: #BAE6FD;\n}\n.al-brand-name {\n  font-size: 21px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.3px;\n}\n.al-title {\n  font-size: 26px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.3;\n  margin-bottom: 12px;\n  max-width: 340px;\n}\n.al-subtitle {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.68);\n  line-height: 1.65;\n  margin-bottom: 36px;\n  max-width: 320px;\n}\n.al-features {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 36px;\n}\n.al-feat {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.11);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.88);\n  transition: background 0.2s;\n}\n.al-feat:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.al-feat-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.14);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.al-feat-icon .material-icons-round {\n  font-size: 16px !important;\n  color: #BAE6FD;\n}\n.al-stats {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  padding: 16px 20px;\n}\n.al-stat {\n  flex: 1;\n  text-align: center;\n}\n.al-stat-num {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.5px;\n}\n.al-stat-label {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.55);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 2px;\n}\n.al-stat-sep {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.auth-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px;\n  background: #EEF2FF;\n  overflow-y: auto;\n}\n.auth-card {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 36px 32px;\n  box-shadow: 0 8px 40px rgba(20, 69, 245, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 1px solid #E0E7FF;\n  animation: cardFadeIn 0.45s ease both;\n}\n.auth-card-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.auth-card-icon {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #EEF2FF,\n      #E0E7FF);\n  border: 1px solid #C7D2FE;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.auth-card-icon .material-icons-round {\n  font-size: 24px !important;\n  color: #1445F5;\n}\n.auth-card-header h2 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin-bottom: 4px;\n}\n.auth-card-header p {\n  font-size: 14px;\n  color: #6B7280;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.field-label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.field-label-row label {\n  margin-bottom: 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.field-hint-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #9CA3AF;\n  background: #F9FAFB;\n  padding: 2px 8px;\n  border-radius: 6px;\n  border: 1px solid #E5E7EB;\n}\n.field-hint-tag .material-icons-round {\n  font-size: 12px !important;\n}\n.forgot-link {\n  font-size: 12px;\n  font-weight: 500;\n  color: #1445F5;\n  text-decoration: none;\n}\n.forgot-link:hover {\n  text-decoration: underline;\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrapper > .material-icons-round:first-child {\n  position: absolute;\n  left: 12px;\n  color: #9CA3AF;\n  font-size: 18px !important;\n  pointer-events: none;\n  z-index: 1;\n}\n.input-wrapper input,\n.input-wrapper select {\n  padding-left: 40px !important;\n}\n.input-wrapper .input-suffix {\n  position: absolute;\n  right: 6px;\n  display: flex;\n  align-items: center;\n}\ninput[type=text],\ninput[type=email],\ninput[type=password],\ninput[type=tel],\nselect {\n  width: 100%;\n  padding: 11px 14px;\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #111827;\n  transition: all 0.15s;\n  outline: none;\n  appearance: none;\n}\ninput[type=text]::placeholder,\ninput[type=email]::placeholder,\ninput[type=password]::placeholder,\ninput[type=tel]::placeholder,\nselect::placeholder {\n  color: #9CA3AF;\n}\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=password]:focus,\ninput[type=tel]:focus,\nselect:focus {\n  background: #fff;\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n}\ninput[type=text].input-error,\ninput[type=email].input-error,\ninput[type=password].input-error,\ninput[type=tel].input-error,\nselect.input-error {\n  border-color: #EF4444;\n  background: #FEF2F2;\n}\ninput[type=text].input-error:focus,\ninput[type=email].input-error:focus,\ninput[type=password].input-error:focus,\ninput[type=tel].input-error:focus,\nselect.input-error:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.field-error {\n  font-size: 11px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.btn-icon-eye {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #9CA3AF;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-icon-eye:hover {\n  background: #F1F5F9;\n  color: #374151;\n}\n.btn-icon-eye .material-icons-round {\n  font-size: 18px !important;\n}\n.id-tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 10px;\n  background: #F1F5F9;\n  border-radius: 10px;\n  padding: 4px;\n}\n.id-tab {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 8px 4px;\n  border: none;\n  background: transparent;\n  border-radius: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.id-tab .material-icons-round {\n  font-size: 14px !important;\n}\n.id-tab.active {\n  background: #fff;\n  color: #1445F5;\n  font-weight: 600;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(20, 69, 245, 0.08);\n}\n.id-tab:not(.active):hover {\n  background: rgba(255, 255, 255, 0.65);\n  color: #374151;\n}\n.phone-field-wrap {\n  position: relative;\n}\n.phone-input-row {\n  display: flex;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  background: #F9FAFB;\n}\n.phone-input-row:focus-within {\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n  background: #fff;\n}\n.country-selector {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0 12px;\n  border-right: 1px solid #E5E7EB;\n  cursor: pointer;\n  flex-shrink: 0;\n  background: transparent;\n  border-top: none;\n  border-bottom: none;\n  border-left: none;\n  transition: background 0.15s;\n}\n.country-selector:hover {\n  background: rgba(0, 0, 0, 0.03);\n}\n.country-flag-img {\n  width: 20px;\n  height: 15px;\n  border-radius: 2px;\n  object-fit: cover;\n}\n.country-dial {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.country-chevron {\n  font-size: 16px !important;\n  color: #9CA3AF;\n  transition: transform 0.2s;\n}\n.country-chevron.open {\n  transform: rotate(180deg);\n}\n.phone-number-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 11px 14px;\n  font-size: 14px;\n  background: transparent;\n  color: #111827;\n  font-family: inherit;\n}\n.phone-number-input::placeholder {\n  color: #9CA3AF;\n}\n.country-dropdown {\n  position: absolute;\n  z-index: 400;\n  top: calc(100% + 6px);\n  left: 0;\n  width: 290px;\n  background: #fff;\n  border: 1px solid #E5E7EB;\n  border-radius: 14px;\n  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.dropdown-search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-bottom: 1px solid #F1F5F9;\n  background: #F9FAFB;\n}\n.dropdown-search-wrap .material-icons-round {\n  font-size: 16px !important;\n  color: #9CA3AF;\n  flex-shrink: 0;\n}\n.country-search {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: #111827;\n  font-family: inherit;\n}\n.country-search::placeholder {\n  color: #9CA3AF;\n}\n.country-list {\n  max-height: 224px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.country-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 12px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  border-radius: 8px;\n  transition: background 0.12s;\n  font-family: inherit;\n}\n.country-option:hover {\n  background: #EEF2FF;\n}\n.country-name {\n  flex: 1;\n  font-size: 13px;\n  color: #111827;\n}\n.country-dial-sm {\n  font-size: 11px;\n  color: #6B7280;\n  font-weight: 600;\n  background: #F1F5F9;\n  padding: 2px 7px;\n  border-radius: 5px;\n}\n.alert-error-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: #FEF2F2;\n  color: #DC2626;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  border: 1px solid #FECACA;\n}\n.alert-error-box .material-icons-round {\n  font-size: 17px !important;\n  flex-shrink: 0;\n}\n.btn-submit {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.35);\n  letter-spacing: -0.1px;\n}\n.btn-submit .material-icons-round {\n  font-size: 18px !important;\n}\n.btn-submit:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8,\n      #1445F5);\n  box-shadow: 0 6px 24px rgba(20, 69, 245, 0.45);\n  transform: translateY(-1px);\n}\n.btn-submit:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-spinner {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.65s linear infinite;\n}\n.auth-footer {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-footer p {\n  font-size: 13px;\n  color: #6B7280;\n  margin-bottom: 14px;\n}\n.auth-footer p a {\n  color: #1445F5;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer p a:hover {\n  text-decoration: underline;\n}\n.footer-links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.footer-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9CA3AF;\n  text-decoration: none;\n  padding: 4px 10px;\n  border-radius: 7px;\n  transition: all 0.15s;\n}\n.footer-link .material-icons-round {\n  font-size: 13px !important;\n}\n.footer-link:hover {\n  color: #374151;\n  background: #F1F5F9;\n  text-decoration: none;\n}\n.footer-sep {\n  color: #D1D5DB;\n  font-size: 16px;\n}\n@keyframes cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes blobFloat {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(16px, -20px) scale(1.04);\n  }\n  66% {\n    transform: translate(-10px, 12px) scale(0.96);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 960px) {\n  .auth-left {\n    width: 40%;\n  }\n  .al-title {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .auth-left {\n    display: none;\n  }\n  .auth-right {\n    background:\n      linear-gradient(\n        145deg,\n        #0A1FA8 0%,\n        #1445F5 55%,\n        #2563EB 100%);\n    padding: 32px 20px;\n  }\n  .auth-card {\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n}\n@media (max-width: 480px) {\n  .auth-right {\n    padding: 20px 16px;\n  }\n  .auth-card {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 24 });
})();

export {
  COUNTRIES,
  LoginComponent
};
//# sourceMappingURL=chunk-67FZJNCF.js.map
