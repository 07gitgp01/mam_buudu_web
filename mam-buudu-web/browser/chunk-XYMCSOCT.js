import {
  COUNTRIES
} from "./chunk-LZS57EKQ.js";
import {
  ApiService,
  estVivant,
  extractAnnee,
  getAgeLabel,
  getInitiales,
  getNomComplet,
  getPhotoUrl
} from "./chunk-LCHNROVK.js";
import {
  ThemeService
} from "./chunk-D3ELWAJ2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-3WNPBVJN.js";
import {
  AuthService,
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  ViewChild,
  forkJoin,
  inject,
  setClassMetadata,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NB7PX5Q7.js";
import "./chunk-YP43Q66R.js";

// src/app/core/client.guard.ts
var clientGuard = () => {
  const auth = inject(AuthService);
  if (auth.isLoggedIn())
    return true;
  inject(Router).navigate(["/famille/login"]);
  return false;
};

// src/app/famille/auth/famille-login.component.ts
function FamilleLoginComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " Le code famille est requis ");
    \u0275\u0275elementEnd();
  }
}
function FamilleLoginComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 36);
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
function FamilleLoginComponent_div_83_div_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function FamilleLoginComponent_div_83_div_9_button_3_Template_button_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectCountry(c_r5));
    });
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementStart(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 51);
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
function FamilleLoginComponent_div_83_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "input", 46);
    \u0275\u0275listener("input", function FamilleLoginComponent_div_83_div_9_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.countrySearch = $event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 47);
    \u0275\u0275template(3, FamilleLoginComponent_div_83_div_9_button_3_Template, 6, 4, "button", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.countrySearch);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredCountries);
  }
}
function FamilleLoginComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275listener("click", function FamilleLoginComponent_div_83_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCountryPicker = !ctx_r0.showCountryPicker);
    });
    \u0275\u0275element(3, "img", 40);
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 43);
    \u0275\u0275listener("input", function FamilleLoginComponent_div_83_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.localPhone = $event.target.value;
      return \u0275\u0275resetView(ctx_r0.updatePhoneIdentifiant());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, FamilleLoginComponent_div_83_div_9_Template, 4, 2, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", "https://flagcdn.com/20x15/" + ctx_r0.selectedCountry.iso + ".png", \u0275\u0275sanitizeUrl)("alt", ctx_r0.selectedCountry.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedCountry.dial);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("input-error", ctx_r0.f["identifiant"].invalid && ctx_r0.f["identifiant"].touched);
    \u0275\u0275property("value", ctx_r0.localPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showCountryPicker);
  }
}
function FamilleLoginComponent_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " L'identifiant est requis ");
    \u0275\u0275elementEnd();
  }
}
function FamilleLoginComponent_span_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, " Mot de passe requis (6 caract\xE8res min.) ");
    \u0275\u0275elementEnd();
  }
}
function FamilleLoginComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 7);
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
function FamilleLoginComponent_span_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 53);
  }
}
function FamilleLoginComponent_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Acc\xE9der \xE0 ma famille ");
    \u0275\u0275elementContainerEnd();
  }
}
var FamilleLoginComponent = class _FamilleLoginComponent {
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
    return this.activeTab === "email" ? "exemple@email.com" : this.activeTab === "username" ? "ex : famille.bado" : "";
  }
  get tabIcon() {
    return this.activeTab === "email" ? "email" : this.activeTab === "username" ? "badge" : "phone";
  }
  submit() {
    if (this.activeTab === "telephone")
      this.updatePhoneIdentifiant();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    this.auth.login(this.form.value).subscribe({
      next: () => this.router.navigate(["/famille"]),
      error: (err) => {
        this.errorMsg = err?.error?.error ?? "Identifiants incorrects.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function FamilleLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FamilleLoginComponent, selectors: [["app-famille-login"]], standalone: false, decls: 106, vars: 22, consts: [[1, "fl-container"], [1, "fl-left"], [1, "fl-left-bg"], [1, "fl-blob", "fl-blob-1"], [1, "fl-blob", "fl-blob-2"], [1, "fl-left-content"], [1, "fl-logo"], [1, "material-icons-round"], [1, "fl-welcome"], [1, "fl-features"], [1, "fl-feat"], [1, "fl-feat-icon"], ["routerLink", "/", 1, "fl-back-link"], [1, "fl-right"], [1, "fl-card"], [1, "fl-card-header"], [1, "fl-card-icon"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "input-wrapper"], ["type", "text", "formControlName", "familleCode", "placeholder", "Ex : DIALLO-2024"], ["class", "field-error", 4, "ngIf"], [1, "fl-tabs"], ["type", "button", 1, "fl-tab", 3, "click"], ["class", "input-wrapper", 4, "ngIf"], ["class", "phone-field-wrap", 4, "ngIf"], ["formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type"], [1, "input-suffix"], ["type", "button", 1, "btn-icon", 3, "click"], ["class", "alert alert-error", 4, "ngIf"], ["type", "submit", 1, "fl-submit-btn", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [4, "ngIf"], [1, "fl-card-footer"], ["routerLink", "/auth/login", 1, "fl-admin-link"], [1, "field-error"], ["type", "text", "formControlName", "identifiant", 3, "placeholder"], [1, "phone-field-wrap"], [1, "phone-input-row"], [1, "country-selector", 3, "click"], [1, "country-flag-img", 3, "src", "alt"], [1, "country-dial"], [1, "material-icons-round", "country-chevron"], ["type", "tel", "placeholder", "ex: 620 00 00 00", 1, "phone-number-input", 3, "input", "value"], ["class", "country-dropdown", 4, "ngIf"], [1, "country-dropdown"], ["type", "text", "placeholder", "Rechercher un pays...", 1, "country-search", 3, "input", "value"], [1, "country-list"], ["type", "button", "class", "country-option", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "country-option", 3, "click"], [1, "country-name"], [1, "country-dial-sm"], [1, "alert", "alert-error"], [1, "spinner"]], template: function FamilleLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "h1");
      \u0275\u0275text(13, "Bienvenue dans");
      \u0275\u0275element(14, "br");
      \u0275\u0275text(15, "votre espace famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, "Retrouvez votre arbre g\xE9n\xE9alogique, les stories de vos proches et toute l'histoire de votre famille.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "span", 7);
      \u0275\u0275text(22, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Arbre g\xE9n\xE9alogique interactif");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "div", 11)(27, "span", 7);
      \u0275\u0275text(28, "auto_stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Stories et souvenirs partag\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 10)(32, "div", 11)(33, "span", 7);
      \u0275\u0275text(34, "timeline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Ligne du temps familiale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 10)(38, "div", 11)(39, "span", 7);
      \u0275\u0275text(40, "people");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Tous les membres en un clin d'oeil");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "a", 12)(44, "span", 7);
      \u0275\u0275text(45, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Retour \xE0 l'accueil ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 13)(48, "div", 14)(49, "div", 15)(50, "div", 16)(51, "span", 7);
      \u0275\u0275text(52, "family_restroom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "h2");
      \u0275\u0275text(54, "Acc\xE9der \xE0 ma famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "Entrez vos identifiants pour rejoindre l'espace familial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "form", 17);
      \u0275\u0275listener("ngSubmit", function FamilleLoginComponent_Template_form_ngSubmit_57_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(58, "div", 18)(59, "label");
      \u0275\u0275text(60, "Code famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 19)(62, "span", 7);
      \u0275\u0275text(63, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(65, FamilleLoginComponent_span_65_Template, 2, 0, "span", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 18)(67, "label");
      \u0275\u0275text(68, "Identifiant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 22)(70, "button", 23);
      \u0275\u0275listener("click", function FamilleLoginComponent_Template_button_click_70_listener() {
        return ctx.setTab("email");
      });
      \u0275\u0275elementStart(71, "span", 7);
      \u0275\u0275text(72, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275text(73, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 23);
      \u0275\u0275listener("click", function FamilleLoginComponent_Template_button_click_74_listener() {
        return ctx.setTab("telephone");
      });
      \u0275\u0275elementStart(75, "span", 7);
      \u0275\u0275text(76, "phone");
      \u0275\u0275elementEnd();
      \u0275\u0275text(77, " Tel. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "button", 23);
      \u0275\u0275listener("click", function FamilleLoginComponent_Template_button_click_78_listener() {
        return ctx.setTab("username");
      });
      \u0275\u0275elementStart(79, "span", 7);
      \u0275\u0275text(80, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275text(81, " Username ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(82, FamilleLoginComponent_div_82_Template, 4, 4, "div", 24)(83, FamilleLoginComponent_div_83_Template, 10, 7, "div", 25)(84, FamilleLoginComponent_span_84_Template, 2, 0, "span", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 18)(86, "label");
      \u0275\u0275text(87, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 19)(89, "span", 7);
      \u0275\u0275text(90, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "input", 26);
      \u0275\u0275elementStart(92, "div", 27)(93, "button", 28);
      \u0275\u0275listener("click", function FamilleLoginComponent_Template_button_click_93_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275elementStart(94, "span", 7);
      \u0275\u0275text(95);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(96, FamilleLoginComponent_span_96_Template, 2, 0, "span", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(97, FamilleLoginComponent_div_97_Template, 4, 1, "div", 29);
      \u0275\u0275elementStart(98, "button", 30);
      \u0275\u0275template(99, FamilleLoginComponent_span_99_Template, 1, 0, "span", 31)(100, FamilleLoginComponent_ng_container_100_Template, 4, 0, "ng-container", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 33)(102, "a", 34)(103, "span", 7);
      \u0275\u0275text(104, "admin_panel_settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(105, " Espace administrateur ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(57);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(7);
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
      \u0275\u0275advance(7);
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
  }, dependencies: [NgForOf, NgIf, RouterLink, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.fl-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.fl-left[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      #1a0533 0%,\n      #2d1b69 40%,\n      #1e3a8a 80%,\n      #0f2048 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n}\n.fl-left-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.fl-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.25;\n}\n.fl-blob-1[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: #EC4899;\n  top: -100px;\n  right: -80px;\n  animation: _ngcontent-%COMP%_blobPulse 7s ease-in-out infinite;\n}\n.fl-blob-2[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  background: #7C3AED;\n  bottom: -100px;\n  left: -60px;\n  animation: _ngcontent-%COMP%_blobPulse 9s ease-in-out infinite reverse;\n}\n.fl-left-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 420px;\n  color: #fff;\n}\n.fl-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 40px;\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n}\n.fl-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 26px !important;\n  color: #A78BFA;\n}\n.fl-welcome[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.fl-welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 14px;\n}\n.fl-welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.65);\n}\n.fl-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 36px;\n}\n.fl-feat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n}\n.fl-feat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(167, 139, 250, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.fl-feat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #A78BFA;\n}\n.fl-back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 13px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.fl-back-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.fl-back-link[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n}\n.fl-right[_ngcontent-%COMP%] {\n  width: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px;\n  background: #F8FAFC;\n}\n.fl-card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border-radius: 24px;\n  padding: 40px 36px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n  border: 1px solid #F0F4FF;\n}\n.fl-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.fl-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 12px 0 6px;\n}\n.fl-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n}\n.fl-card-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #F5F3FF,\n      #EDE9FE);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n}\n.fl-card-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n  color: #7C3AED;\n}\n.fl-submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7C3AED,\n      #EC4899);\n  color: #fff;\n  border: none;\n  border-radius: 14px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);\n}\n.fl-submit-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.fl-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 6px 24px rgba(124, 58, 237, 0.5);\n  transform: translateY(-1px);\n}\n.fl-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.fl-card-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.fl-admin-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #6B7280;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.fl-admin-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.fl-admin-link[_ngcontent-%COMP%]:hover {\n  color: #3B82F6;\n  text-decoration: none;\n}\n.fl-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 10px;\n  padding: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.fl-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 7px 4px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.55);\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.fl-tab[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.fl-tab.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  font-weight: 600;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n}\n.phone-field-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.phone-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.08);\n}\n.phone-input-row[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(167, 139, 250, 0.6);\n}\n.country-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0 10px;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  flex-shrink: 0;\n  border-radius: 10px 0 0 10px;\n  transition: background 0.15s;\n}\n.country-selector[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.country-flag-img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 15px;\n  border-radius: 2px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.country-dial[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n}\n.country-chevron[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: rgba(255, 255, 255, 0.6);\n}\n.phone-number-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 12px 14px;\n  font-size: 14px;\n  background: transparent;\n  border-radius: 0 10px 10px 0;\n  color: #fff;\n}\n.phone-number-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.35);\n}\n.country-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 300;\n  top: calc(100% + 4px);\n  left: 0;\n  width: 280px;\n  background: #1e1246;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n.country-search[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 10px 14px;\n  font-size: 13px;\n  outline: none;\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n  box-sizing: border-box;\n}\n.country-search[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.35);\n}\n.country-list[_ngcontent-%COMP%] {\n  max-height: 220px;\n  overflow-y: auto;\n}\n.country-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.country-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 2px;\n}\n.country-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 14px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.12s;\n}\n.country-option[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.country-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.85);\n}\n.country-dial-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.45);\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_blobPulse {\n  0%, 100% {\n    transform: scale(1) translate(0, 0);\n  }\n  50% {\n    transform: scale(1.1) translate(20px, -20px);\n  }\n}\n@media (max-width: 900px) {\n  .fl-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .fl-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=famille-login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleLoginComponent, [{
    type: Component,
    args: [{ selector: "app-famille-login", standalone: false, template: `<div class="fl-container">
  <!-- Panneau gauche d\xE9coratif -->
  <div class="fl-left">
    <div class="fl-left-bg">
      <div class="fl-blob fl-blob-1"></div>
      <div class="fl-blob fl-blob-2"></div>
    </div>
    <div class="fl-left-content">
      <div class="fl-logo">
        <span class="material-icons-round">account_tree</span>
        <span>Mam Buudu</span>
      </div>
      <div class="fl-welcome">
        <h1>Bienvenue dans<br/>votre espace famille</h1>
        <p>Retrouvez votre arbre g\xE9n\xE9alogique, les stories de vos proches et toute l'histoire de votre famille.</p>
      </div>
      <div class="fl-features">
        <div class="fl-feat">
          <div class="fl-feat-icon"><span class="material-icons-round">account_tree</span></div>
          <span>Arbre g\xE9n\xE9alogique interactif</span>
        </div>
        <div class="fl-feat">
          <div class="fl-feat-icon"><span class="material-icons-round">auto_stories</span></div>
          <span>Stories et souvenirs partag\xE9s</span>
        </div>
        <div class="fl-feat">
          <div class="fl-feat-icon"><span class="material-icons-round">timeline</span></div>
          <span>Ligne du temps familiale</span>
        </div>
        <div class="fl-feat">
          <div class="fl-feat-icon"><span class="material-icons-round">people</span></div>
          <span>Tous les membres en un clin d'oeil</span>
        </div>
      </div>
      <a routerLink="/" class="fl-back-link">
        <span class="material-icons-round">arrow_back</span>
        Retour \xE0 l'accueil
      </a>
    </div>
  </div>

  <!-- Panneau droit - formulaire -->
  <div class="fl-right">
    <div class="fl-card">
      <div class="fl-card-header">
        <div class="fl-card-icon">
          <span class="material-icons-round">family_restroom</span>
        </div>
        <h2>Acc\xE9der \xE0 ma famille</h2>
        <p>Entrez vos identifiants pour rejoindre l'espace familial</p>
      </div>

      <form [formGroup]="form" (ngSubmit)="submit()">

        <!-- Code famille -->
        <div class="form-group">
          <label>Code famille</label>
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
          <div class="fl-tabs">
            <button type="button" class="fl-tab" [class.active]="activeTab === 'email'"
                    (click)="setTab('email')">
              <span class="material-icons-round">email</span> Email
            </button>
            <button type="button" class="fl-tab" [class.active]="activeTab === 'telephone'"
                    (click)="setTab('telephone')">
              <span class="material-icons-round">phone</span> Tel.
            </button>
            <button type="button" class="fl-tab" [class.active]="activeTab === 'username'"
                    (click)="setTab('username')">
              <span class="material-icons-round">badge</span> Username
            </button>
          </div>

          <!-- Email / Username -->
          <div class="input-wrapper" *ngIf="activeTab !== 'telephone'">
            <span class="material-icons-round">{{ tabIcon }}</span>
            <input type="text" formControlName="identifiant" [placeholder]="tabPlaceholder"
                   [class.input-error]="f['identifiant'].invalid && f['identifiant'].touched" />
          </div>

          <!-- T\xE9l\xE9phone avec s\xE9lecteur pays -->
          <div class="phone-field-wrap" *ngIf="activeTab === 'telephone'">
            <div class="phone-input-row">
              <div class="country-selector" (click)="showCountryPicker = !showCountryPicker">
                <img class="country-flag-img"
                     [src]="'https://flagcdn.com/20x15/' + selectedCountry.iso + '.png'"
                     [alt]="selectedCountry.name" />
                <span class="country-dial">{{ selectedCountry.dial }}</span>
                <span class="material-icons-round country-chevron">expand_more</span>
              </div>
              <input class="phone-number-input" type="tel"
                     [value]="localPhone"
                     (input)="localPhone = $any($event.target).value; updatePhoneIdentifiant()"
                     placeholder="ex: 620 00 00 00"
                     [class.input-error]="f['identifiant'].invalid && f['identifiant'].touched" />
            </div>

            <!-- Dropdown pays \u2014 dans le m\xEAme parent relatif -->
            <div class="country-dropdown" *ngIf="showCountryPicker">
              <input class="country-search" type="text"
                     [value]="countrySearch"
                     (input)="countrySearch = $any($event.target).value"
                     placeholder="Rechercher un pays..." />
              <div class="country-list">
                <button type="button" class="country-option"
                        *ngFor="let c of filteredCountries"
                        (click)="selectCountry(c)">
                  <img class="country-flag-img"
                       [src]="'https://flagcdn.com/20x15/' + c.iso + '.png'"
                       [alt]="c.name" />
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
          <label>Mot de passe</label>
          <div class="input-wrapper">
            <span class="material-icons-round">lock</span>
            <input [type]="showPassword ? 'text' : 'password'" formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                   [class.input-error]="f['password'].invalid && f['password'].touched" />
            <div class="input-suffix">
              <button type="button" class="btn-icon" (click)="showPassword = !showPassword">
                <span class="material-icons-round">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
              </button>
            </div>
          </div>
          <span class="field-error" *ngIf="f['password'].invalid && f['password'].touched">
            Mot de passe requis (6 caract\xE8res min.)
          </span>
        </div>

        <div class="alert alert-error" *ngIf="errorMsg">
          <span class="material-icons-round">error_outline</span>
          {{ errorMsg }}
        </div>

        <button type="submit" class="fl-submit-btn" [disabled]="loading">
          <span class="spinner" *ngIf="loading"></span>
          <ng-container *ngIf="!loading">
            <span class="material-icons-round">login</span>
            Acc\xE9der \xE0 ma famille
          </ng-container>
        </button>
      </form>

      <div class="fl-card-footer">
        <a routerLink="/auth/login" class="fl-admin-link">
          <span class="material-icons-round">admin_panel_settings</span>
          Espace administrateur
        </a>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/famille/auth/famille-login.component.scss */\n.fl-container {\n  display: flex;\n  min-height: 100vh;\n}\n.fl-left {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      145deg,\n      #1a0533 0%,\n      #2d1b69 40%,\n      #1e3a8a 80%,\n      #0f2048 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n}\n.fl-left-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.fl-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.25;\n}\n.fl-blob-1 {\n  width: 400px;\n  height: 400px;\n  background: #EC4899;\n  top: -100px;\n  right: -80px;\n  animation: blobPulse 7s ease-in-out infinite;\n}\n.fl-blob-2 {\n  width: 350px;\n  height: 350px;\n  background: #7C3AED;\n  bottom: -100px;\n  left: -60px;\n  animation: blobPulse 9s ease-in-out infinite reverse;\n}\n.fl-left-content {\n  position: relative;\n  z-index: 2;\n  max-width: 420px;\n  color: #fff;\n}\n.fl-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 40px;\n  font-size: 20px;\n  font-weight: 800;\n  color: #fff;\n}\n.fl-logo .material-icons-round {\n  font-size: 26px !important;\n  color: #A78BFA;\n}\n.fl-welcome {\n  margin-bottom: 36px;\n}\n.fl-welcome h1 {\n  font-size: 32px;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 14px;\n}\n.fl-welcome p {\n  font-size: 15px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.65);\n}\n.fl-features {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 36px;\n}\n.fl-feat {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.85);\n}\n.fl-feat-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(167, 139, 250, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.fl-feat-icon .material-icons-round {\n  font-size: 18px !important;\n  color: #A78BFA;\n}\n.fl-back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 13px;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.fl-back-link .material-icons-round {\n  font-size: 16px !important;\n}\n.fl-back-link:hover {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n}\n.fl-right {\n  width: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px;\n  background: #F8FAFC;\n}\n.fl-card {\n  width: 100%;\n  background: #fff;\n  border-radius: 24px;\n  padding: 40px 36px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n  border: 1px solid #F0F4FF;\n}\n.fl-card-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.fl-card-header h2 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 12px 0 6px;\n}\n.fl-card-header p {\n  font-size: 14px;\n  color: #6B7280;\n}\n.fl-card-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #F5F3FF,\n      #EDE9FE);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n}\n.fl-card-icon .material-icons-round {\n  font-size: 30px !important;\n  color: #7C3AED;\n}\n.fl-submit-btn {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7C3AED,\n      #EC4899);\n  color: #fff;\n  border: none;\n  border-radius: 14px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);\n}\n.fl-submit-btn .material-icons-round {\n  font-size: 20px !important;\n}\n.fl-submit-btn:hover:not(:disabled) {\n  box-shadow: 0 6px 24px rgba(124, 58, 237, 0.5);\n  transform: translateY(-1px);\n}\n.fl-submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.fl-card-footer {\n  margin-top: 24px;\n  text-align: center;\n}\n.fl-admin-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #6B7280;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.fl-admin-link .material-icons-round {\n  font-size: 15px !important;\n}\n.fl-admin-link:hover {\n  color: #3B82F6;\n  text-decoration: none;\n}\n.fl-tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 10px;\n  padding: 4px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.fl-tab {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  padding: 7px 4px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.55);\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.fl-tab .material-icons-round {\n  font-size: 15px !important;\n}\n.fl-tab.active {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  font-weight: 600;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n}\n.phone-field-wrap {\n  position: relative;\n}\n.phone-input-row {\n  display: flex;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.08);\n}\n.phone-input-row:focus-within {\n  border-color: rgba(167, 139, 250, 0.6);\n}\n.country-selector {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0 10px;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  flex-shrink: 0;\n  border-radius: 10px 0 0 10px;\n  transition: background 0.15s;\n}\n.country-selector:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.country-flag-img {\n  width: 20px;\n  height: 15px;\n  border-radius: 2px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.country-dial {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n}\n.country-chevron {\n  font-size: 16px !important;\n  color: rgba(255, 255, 255, 0.6);\n}\n.phone-number-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 12px 14px;\n  font-size: 14px;\n  background: transparent;\n  border-radius: 0 10px 10px 0;\n  color: #fff;\n}\n.phone-number-input::placeholder {\n  color: rgba(255, 255, 255, 0.35);\n}\n.country-dropdown {\n  position: absolute;\n  z-index: 300;\n  top: calc(100% + 4px);\n  left: 0;\n  width: 280px;\n  background: #1e1246;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n}\n.country-search {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 10px 14px;\n  font-size: 13px;\n  outline: none;\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n  box-sizing: border-box;\n}\n.country-search::placeholder {\n  color: rgba(255, 255, 255, 0.35);\n}\n.country-list {\n  max-height: 220px;\n  overflow-y: auto;\n}\n.country-list::-webkit-scrollbar {\n  width: 4px;\n}\n.country-list::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 2px;\n}\n.country-option {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 14px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.12s;\n}\n.country-option:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n.country-name {\n  flex: 1;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.85);\n}\n.country-dial-sm {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.45);\n  font-weight: 600;\n}\n@keyframes blobPulse {\n  0%, 100% {\n    transform: scale(1) translate(0, 0);\n  }\n  50% {\n    transform: scale(1.1) translate(20px, -20px);\n  }\n}\n@media (max-width: 900px) {\n  .fl-left {\n    display: none;\n  }\n  .fl-right {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=famille-login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FamilleLoginComponent, { className: "FamilleLoginComponent", filePath: "src/app/famille/auth/famille-login.component.ts", lineNumber: 15 });
})();

// src/app/famille/shell/famille-shell.component.ts
function FamilleShellComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function FamilleShellComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function FamilleShellComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275listener("click", function FamilleShellComponent_a_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebarOpen = false);
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.route);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", item_r4.color)("background", item_r4.color + "18");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function FamilleShellComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function FamilleShellComponent_button_24_Template_button_click_0_listener() {
      const t_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.themeService.applyColor(t_r6.name));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", t_r6.color);
    \u0275\u0275classProp("active", ctx_r1.themeService.current === t_r6.name);
    \u0275\u0275property("title", t_r6.label);
  }
}
function FamilleShellComponent_a_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r7.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.label);
  }
}
var FamilleShellComponent = class _FamilleShellComponent {
  auth;
  router;
  themeService;
  sidebarOpen = false;
  navItems = [
    { icon: "home", label: "Accueil", route: "/famille/home", color: "#60A5FA" },
    { icon: "account_tree", label: "Arbre", route: "/famille/arbre", color: "#A78BFA" },
    { icon: "people", label: "Membres", route: "/famille/membres", color: "#34D399" },
    { icon: "auto_stories", label: "Stories", route: "/famille/stories", color: "#F472B6" },
    { icon: "timeline", label: "\xC9v\xE9nements", route: "/famille/timeline", color: "#FBBF24" }
  ];
  constructor(auth, router, themeService) {
    this.auth = auth;
    this.router = router;
    this.themeService = themeService;
  }
  get user() {
    return this.auth.getUser();
  }
  get userInitiales() {
    const u = this.user;
    if (!u)
      return "MB";
    return `${u.prenom.charAt(0)}${u.nom.charAt(0)}`.toUpperCase();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/famille/login"]);
  }
  static \u0275fac = function FamilleShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleShellComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FamilleShellComponent, selectors: [["app-famille-shell"]], standalone: false, decls: 52, vars: 10, consts: [[1, "fs-layout"], ["class", "fs-backdrop", 3, "click", 4, "ngIf"], [1, "fs-sidebar"], [1, "fs-sidebar-top"], [1, "fs-brand"], [1, "material-icons-round"], [1, "fs-brand-name"], [1, "fs-close-btn", 3, "click"], [1, "fs-nav"], ["class", "fs-nav-item", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "fs-sidebar-bottom"], ["routerLink", "/", "title", "Page d'accueil", 1, "fs-home-link", 3, "click"], [1, "fs-theme-picker"], [1, "fs-theme-label"], [1, "fs-theme-dots"], ["class", "fs-theme-dot", 3, "background", "active", "title", "click", 4, "ngFor", "ngForOf"], [1, "fs-user-card"], [1, "fs-user-avatar"], [1, "fs-user-info"], [1, "fs-user-name"], [1, "fs-user-role"], ["title", "D\xE9connexion", 1, "btn-icon", "fs-logout", 3, "click"], [1, "fs-main"], [1, "fs-mobile-topbar"], [1, "btn-icon", 3, "click"], [1, "fs-mobile-brand"], [1, "fs-user-avatar", "fs-avatar-sm"], [1, "fs-content"], [1, "fs-bottom-nav"], ["class", "fs-bnav-item", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "fs-backdrop", 3, "click"], ["routerLinkActive", "active", 1, "fs-nav-item", 3, "click", "routerLink"], [1, "fs-nav-icon"], [1, "fs-nav-label"], [1, "fs-theme-dot", 3, "click", "title"], ["routerLinkActive", "active", 1, "fs-bnav-item", 3, "routerLink"]], template: function FamilleShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, FamilleShellComponent_div_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "Mam Buudu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function FamilleShellComponent_Template_button_click_9_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "nav", 8);
      \u0275\u0275template(13, FamilleShellComponent_a_13_Template, 6, 7, "a", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "a", 11);
      \u0275\u0275listener("click", function FamilleShellComponent_Template_a_click_15_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementStart(16, "span", 5);
      \u0275\u0275text(17, "language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Page d'accueil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 12)(21, "span", 13);
      \u0275\u0275text(22, "Th\xE8me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275template(24, FamilleShellComponent_button_24_Template, 1, 5, "button", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18)(29, "span", 19);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 20);
      \u0275\u0275text(32, "Espace Famille");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 21);
      \u0275\u0275listener("click", function FamilleShellComponent_Template_button_click_33_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(34, "span", 5);
      \u0275\u0275text(35, "logout");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(36, "main", 22)(37, "header", 23)(38, "button", 24);
      \u0275\u0275listener("click", function FamilleShellComponent_Template_button_click_38_listener() {
        return ctx.sidebarOpen = true;
      });
      \u0275\u0275elementStart(39, "span", 5);
      \u0275\u0275text(40, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 25)(42, "span", 5);
      \u0275\u0275text(43, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 26);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 27);
      \u0275\u0275element(49, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "nav", 28);
      \u0275\u0275template(51, FamilleShellComponent_a_51_Template, 5, 3, "a", 29);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("fs-sidebar-open", ctx.sidebarOpen);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.navItems);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.themeService.themes);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userInitiales);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.user == null ? null : ctx.user.prenom, " ", ctx.user == null ? null : ctx.user.nom);
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.userInitiales);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.navItems);
    }
  }, dependencies: [NgForOf, NgIf, RouterOutlet, RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n.fs-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg-app, #FFF7F0);\n}\n.fs-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 250;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.fs-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  flex-shrink: 0;\n  background: var(--sb-bg, #F8FAFC);\n  border-right: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n}\n.fs-sidebar-top[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 16px 16px;\n  overflow-y: auto;\n}\n.fs-sidebar-bottom[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n}\n.fs-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 8px 28px;\n  color: var(--sb-text-hi, #1E293B);\n}\n.fs-brand[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  color: var(--primary);\n}\n.fs-brand-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.3px;\n  flex: 1;\n}\n.fs-close-btn[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--sb-text-mid, #475569);\n}\n.fs-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n}\n.fs-close-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.fs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.fs-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 14px;\n  text-decoration: none;\n  color: var(--sb-text-mid, #475569);\n  transition: all 0.2s;\n}\n.fs-nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n  color: var(--sb-text-hi, #1E293B);\n  text-decoration: none;\n  transform: translateX(3px);\n}\n.fs-nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sb-active-bg, rgba(0, 0, 0, 0.07));\n  color: var(--sb-text-hi, #1E293B);\n  box-shadow: inset 3px 0 0 var(--sb-active-mark, var(--primary));\n}\n.fs-nav-item.active[_ngcontent-%COMP%]   .fs-nav-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.fs-nav-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.fs-nav-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.fs-nav-item.active[_ngcontent-%COMP%]   .fs-nav-icon[_ngcontent-%COMP%], \n.fs-nav-item[_ngcontent-%COMP%]:hover   .fs-nav-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.fs-nav-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.fs-home-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 12px;\n  color: var(--sb-text-lo, #94A3B8);\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.18s;\n  margin-bottom: 4px;\n}\n.fs-home-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.fs-home-link[_ngcontent-%COMP%]:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n  color: var(--sb-text-mid, #475569);\n  text-decoration: none;\n}\n.fs-theme-picker[_ngcontent-%COMP%] {\n  padding: 10px 8px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.fs-theme-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--sb-text-lo, #94A3B8);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.fs-theme-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.fs-theme-dot[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2.5px solid transparent;\n  cursor: pointer;\n  transition: transform 0.15s, border-color 0.15s;\n  flex-shrink: 0;\n  padding: 0;\n}\n.fs-theme-dot[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.fs-theme-dot.active[_ngcontent-%COMP%] {\n  border-color: var(--sb-text-hi, #1E293B);\n  transform: scale(1.15);\n  box-shadow: 0 0 0 2px var(--sb-divider, rgba(0, 0, 0, 0.08));\n}\n.fs-user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 8px;\n  border-radius: 14px;\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n}\n.fs-user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.fs-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.fs-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--sb-text-hi, #1E293B);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fs-user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--sb-text-lo, #94A3B8);\n}\n.fs-logout[_ngcontent-%COMP%] {\n  color: var(--sb-text-lo, #94A3B8) !important;\n  flex-shrink: 0;\n}\n.fs-logout[_ngcontent-%COMP%]:hover {\n  color: var(--sb-text-hi, #1E293B) !important;\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05)) !important;\n}\n.fs-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.fs-content[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  flex: 1;\n}\n.fs-mobile-topbar[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 12px;\n  padding: 0 16px;\n  height: 56px;\n  background: var(--sb-bg, #F8FAFC);\n  border-bottom: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.fs-mobile-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--sb-text-hi, #1E293B);\n}\n.fs-mobile-brand[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 20px !important;\n}\n.fs-avatar-sm[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  font-size: 12px;\n}\n.fs-bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 64px;\n  background: var(--sb-bg, #F8FAFC);\n  border-top: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.1));\n  z-index: 200;\n  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);\n}\n.fs-bnav-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  text-decoration: none;\n  color: var(--sb-text-lo, #94A3B8);\n  font-size: 10px;\n  font-weight: 500;\n  transition: color 0.15s;\n  padding: 8px 4px;\n}\n.fs-bnav-item[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n}\n.fs-bnav-item.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.fs-bnav-item.active[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.fs-bnav-item[_ngcontent-%COMP%]:hover {\n  color: var(--sb-text-mid, #475569);\n  text-decoration: none;\n}\n@media (max-width: 768px) {\n  .fs-backdrop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .fs-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 260px;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    z-index: 300;\n    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);\n  }\n  .fs-sidebar.fs-sidebar-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .fs-close-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .fs-mobile-topbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .fs-bottom-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .fs-content[_ngcontent-%COMP%] {\n    padding: 16px;\n    padding-bottom: 80px;\n  }\n}\n/*# sourceMappingURL=famille-shell.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleShellComponent, [{
    type: Component,
    args: [{ selector: "app-famille-shell", standalone: false, template: `<div class="fs-layout">

  <!-- BACKDROP MOBILE -->
  <div class="fs-backdrop" *ngIf="sidebarOpen" (click)="sidebarOpen=false"></div>

  <!-- SIDEBAR -->
  <aside class="fs-sidebar" [class.fs-sidebar-open]="sidebarOpen">
    <div class="fs-sidebar-top">
      <div class="fs-brand">
        <span class="material-icons-round">account_tree</span>
        <span class="fs-brand-name">Mam Buudu</span>
        <!-- Bouton fermer sur mobile -->
        <button class="fs-close-btn" (click)="sidebarOpen=false">
          <span class="material-icons-round">close</span>
        </button>
      </div>

      <nav class="fs-nav">
        <a class="fs-nav-item" *ngFor="let item of navItems"
           [routerLink]="item.route" routerLinkActive="active"
           (click)="sidebarOpen=false">
          <div class="fs-nav-icon" [style.color]="item.color" [style.background]="item.color + '18'">
            <span class="material-icons-round">{{ item.icon }}</span>
          </div>
          <span class="fs-nav-label">{{ item.label }}</span>
        </a>
      </nav>
    </div>

    <div class="fs-sidebar-bottom">

      <!-- LIEN ACCUEIL PRINCIPAL -->
      <a routerLink="/" class="fs-home-link" title="Page d'accueil" (click)="sidebarOpen=false">
        <span class="material-icons-round">language</span>
        <span>Page d'accueil</span>
      </a>

      <!-- S\xC9LECTEUR DE TH\xC8ME -->
      <div class="fs-theme-picker">
        <span class="fs-theme-label">Th\xE8me</span>
        <div class="fs-theme-dots">
          <button
            class="fs-theme-dot"
            *ngFor="let t of themeService.themes"
            [style.background]="t.color"
            [class.active]="themeService.current === t.name"
            (click)="themeService.applyColor(t.name)"
            [title]="t.label"
          ></button>
        </div>
      </div>

      <div class="fs-user-card">
        <div class="fs-user-avatar">{{ userInitiales }}</div>
        <div class="fs-user-info">
          <span class="fs-user-name">{{ user?.prenom }} {{ user?.nom }}</span>
          <span class="fs-user-role">Espace Famille</span>
        </div>
        <button class="btn-icon fs-logout" title="D\xE9connexion" (click)="logout()">
          <span class="material-icons-round">logout</span>
        </button>
      </div>
    </div>
  </aside>

  <!-- CONTENU -->
  <main class="fs-main">

    <!-- TOPBAR MOBILE -->
    <header class="fs-mobile-topbar">
      <button class="btn-icon" (click)="sidebarOpen=true">
        <span class="material-icons-round">menu</span>
      </button>
      <div class="fs-mobile-brand">
        <span class="material-icons-round">account_tree</span>
        <span>Mam Buudu</span>
      </div>
      <div class="fs-user-avatar fs-avatar-sm">{{ userInitiales }}</div>
    </header>

    <div class="fs-content">
      <router-outlet></router-outlet>
    </div>
  </main>

  <!-- BOTTOM NAVIGATION MOBILE -->
  <nav class="fs-bottom-nav">
    <a class="fs-bnav-item" *ngFor="let item of navItems"
       [routerLink]="item.route" routerLinkActive="active">
      <span class="material-icons-round">{{ item.icon }}</span>
      <span>{{ item.label }}</span>
    </a>
  </nav>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/famille/shell/famille-shell.component.scss */\n.fs-layout {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg-app, #FFF7F0);\n}\n.fs-backdrop {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 250;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.fs-sidebar {\n  width: 260px;\n  flex-shrink: 0;\n  background: var(--sb-bg, #F8FAFC);\n  border-right: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n}\n.fs-sidebar-top {\n  flex: 1;\n  padding: 24px 16px 16px;\n  overflow-y: auto;\n}\n.fs-sidebar-bottom {\n  padding: 16px;\n  border-top: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n}\n.fs-brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 8px 28px;\n  color: var(--sb-text-hi, #1E293B);\n}\n.fs-brand .material-icons-round {\n  font-size: 24px !important;\n  color: var(--primary);\n}\n.fs-brand-name {\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: -0.3px;\n  flex: 1;\n}\n.fs-close-btn {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--sb-text-mid, #475569);\n}\n.fs-close-btn:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n}\n.fs-close-btn .material-icons-round {\n  font-size: 20px !important;\n}\n.fs-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.fs-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 14px;\n  text-decoration: none;\n  color: var(--sb-text-mid, #475569);\n  transition: all 0.2s;\n}\n.fs-nav-item:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n  color: var(--sb-text-hi, #1E293B);\n  text-decoration: none;\n  transform: translateX(3px);\n}\n.fs-nav-item.active {\n  background: var(--sb-active-bg, rgba(0, 0, 0, 0.07));\n  color: var(--sb-text-hi, #1E293B);\n  box-shadow: inset 3px 0 0 var(--sb-active-mark, var(--primary));\n}\n.fs-nav-item.active .fs-nav-icon {\n  opacity: 1;\n}\n.fs-nav-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.fs-nav-icon .material-icons-round {\n  font-size: 20px !important;\n}\n.fs-nav-item.active .fs-nav-icon,\n.fs-nav-item:hover .fs-nav-icon {\n  opacity: 1;\n}\n.fs-nav-label {\n  font-size: 14px;\n  font-weight: 500;\n}\n.fs-home-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-radius: 12px;\n  color: var(--sb-text-lo, #94A3B8);\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.18s;\n  margin-bottom: 4px;\n}\n.fs-home-link .material-icons-round {\n  font-size: 18px !important;\n}\n.fs-home-link:hover {\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n  color: var(--sb-text-mid, #475569);\n  text-decoration: none;\n}\n.fs-theme-picker {\n  padding: 10px 8px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.fs-theme-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--sb-text-lo, #94A3B8);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.fs-theme-dots {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.fs-theme-dot {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2.5px solid transparent;\n  cursor: pointer;\n  transition: transform 0.15s, border-color 0.15s;\n  flex-shrink: 0;\n  padding: 0;\n}\n.fs-theme-dot:hover {\n  transform: scale(1.2);\n}\n.fs-theme-dot.active {\n  border-color: var(--sb-text-hi, #1E293B);\n  transform: scale(1.15);\n  box-shadow: 0 0 0 2px var(--sb-divider, rgba(0, 0, 0, 0.08));\n}\n.fs-user-card {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 8px;\n  border-radius: 14px;\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05));\n}\n.fs-user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.fs-user-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.fs-user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--sb-text-hi, #1E293B);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fs-user-role {\n  font-size: 11px;\n  color: var(--sb-text-lo, #94A3B8);\n}\n.fs-logout {\n  color: var(--sb-text-lo, #94A3B8) !important;\n  flex-shrink: 0;\n}\n.fs-logout:hover {\n  color: var(--sb-text-hi, #1E293B) !important;\n  background: var(--sb-hover-bg, rgba(0, 0, 0, 0.05)) !important;\n}\n.fs-main {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.fs-content {\n  padding: 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  flex: 1;\n}\n.fs-mobile-topbar {\n  display: none;\n  align-items: center;\n  gap: 12px;\n  padding: 0 16px;\n  height: 56px;\n  background: var(--sb-bg, #F8FAFC);\n  border-bottom: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.08));\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.fs-mobile-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--sb-text-hi, #1E293B);\n}\n.fs-mobile-brand .material-icons-round {\n  color: var(--primary);\n  font-size: 20px !important;\n}\n.fs-avatar-sm {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  font-size: 12px;\n}\n.fs-bottom-nav {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 64px;\n  background: var(--sb-bg, #F8FAFC);\n  border-top: 1px solid var(--sb-divider, rgba(0, 0, 0, 0.1));\n  z-index: 200;\n  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);\n}\n.fs-bnav-item {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  text-decoration: none;\n  color: var(--sb-text-lo, #94A3B8);\n  font-size: 10px;\n  font-weight: 500;\n  transition: color 0.15s;\n  padding: 8px 4px;\n}\n.fs-bnav-item .material-icons-round {\n  font-size: 22px !important;\n}\n.fs-bnav-item.active {\n  color: var(--primary);\n}\n.fs-bnav-item.active .material-icons-round {\n  color: var(--primary);\n}\n.fs-bnav-item:hover {\n  color: var(--sb-text-mid, #475569);\n  text-decoration: none;\n}\n@media (max-width: 768px) {\n  .fs-backdrop {\n    display: block;\n  }\n  .fs-sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 260px;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    z-index: 300;\n    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);\n  }\n  .fs-sidebar.fs-sidebar-open {\n    transform: translateX(0);\n  }\n  .fs-close-btn {\n    display: flex;\n  }\n  .fs-mobile-topbar {\n    display: flex;\n  }\n  .fs-bottom-nav {\n    display: flex;\n  }\n  .fs-content {\n    padding: 16px;\n    padding-bottom: 80px;\n  }\n}\n/*# sourceMappingURL=famille-shell.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FamilleShellComponent, { className: "FamilleShellComponent", filePath: "src/app/famille/shell/famille-shell.component.ts", lineNumber: 19 });
})();

// src/app/famille/pages/home/famille-home.component.ts
function FamilleHomeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.user.prenom[0] + ctx_r0.user.nom[0]).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Bonjour, ", ctx_r0.user.prenom, " \u{1F44B}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Famille ", ctx_r0.nomFamille || "\u2026");
  }
}
function FamilleHomeComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function FamilleHomeComponent_ng_container_24_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275text(7, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275styleProp("--tile-color", t_r2.color)("--tile-bg", t_r2.bg);
    \u0275\u0275property("routerLink", t_r2.route);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r2.bg)("color", t_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.label);
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 54);
    \u0275\u0275listener("error", function FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_img_5_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r4);
      const p_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onPhotoError(p_r5.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r0.getPhotoUrl(p_r5), \u0275\u0275sanitizeUrl)("alt", ctx_r0.getNomComplet(p_r5));
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitiales(p_r5), " ");
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 25);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r5.lieuNaissance, " ");
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275element(2, "div", 40)(3, "span", 41);
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275template(5, FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_img_5_Template, 1, 2, "img", 43)(6, FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_div_6_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45)(8, "h4", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 47);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_div_12_Template, 4, 1, "div", 48);
    \u0275\u0275elementStart(13, "div", 49);
    \u0275\u0275template(14, FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_span_14_Template, 2, 0, "span", 50)(15, FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_span_15_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 52)(17, "a", 53)(18, "span", 25);
    \u0275\u0275text(19, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "Voir ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("pc-male", p_r5.sexe === "M")("pc-female", p_r5.sexe === "F");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("color-1", i_r6 % 3 === 0)("color-2", i_r6 % 3 === 1)("color-3", i_r6 % 3 === 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("alive", ctx_r0.estVivant(p_r5))("dead", !ctx_r0.estVivant(p_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getPhotoUrl(p_r5) && !ctx_r0.failedPhotos.has(p_r5.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getPhotoUrl(p_r5) || ctx_r0.failedPhotos.has(p_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getNomComplet(p_r5));
    \u0275\u0275advance();
    \u0275\u0275classProp("pc-age-unknown", !ctx_r0.getAgeLabel(p_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAgeLabel(p_r5) || "Naissance inconnue", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r5.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.estVivant(p_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.estVivant(p_r5));
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, FamilleHomeComponent_ng_container_24_div_6_div_16_div_1_Template, 21, 23, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.recentPersonnes);
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 78);
    \u0275\u0275listener("error", function FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onPhotoError(p_r8.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r0.getPhotoUrl(p_r8), \u0275\u0275sanitizeUrl)("alt", ctx_r0.getNomComplet(p_r8));
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("male", p_r8.sexe === "M")("female", p_r8.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getInitiales(p_r8));
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80)(1, "span", 25);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r8.lieuNaissance, " ");
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 67);
    \u0275\u0275template(3, FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_img_3_Template, 1, 2, "img", 68)(4, FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_div_4_Template, 2, 5, "div", 69);
    \u0275\u0275element(5, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 71)(7, "span", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 73);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 74);
    \u0275\u0275template(12, FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_span_12_Template, 4, 1, "span", 75)(13, FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_span_13_Template, 2, 0, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 77);
    \u0275\u0275template(15, FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_span_15_Template, 2, 0, "span", 50)(16, FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_span_16_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.getPhotoUrl(p_r8) && !ctx_r0.failedPhotos.has(p_r8.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.getPhotoUrl(p_r8) || ctx_r0.failedPhotos.has(p_r8.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("alive", ctx_r0.estVivant(p_r8))("dead", !ctx_r0.estVivant(p_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getNomComplet(p_r8));
    \u0275\u0275advance();
    \u0275\u0275classProp("pc-age-unknown", !ctx_r0.getAgeLabel(p_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAgeLabel(p_r8) || "Naissance inconnue", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r8.lieuNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r8.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.estVivant(p_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.estVivant(p_r8));
  }
}
function FamilleHomeComponent_ng_container_24_div_6_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 61);
    \u0275\u0275text(3, "Personne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5, "Lieu de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 63);
    \u0275\u0275text(7, "Statut");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, FamilleHomeComponent_ng_container_24_div_6_div_17_div_8_Template, 17, 14, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r0.recentPersonnes);
  }
}
function FamilleHomeComponent_ng_container_24_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 28)(2, "h2", 19);
    \u0275\u0275text(3, "Membres r\xE9cents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30)(6, "button", 31);
    \u0275\u0275listener("click", function FamilleHomeComponent_ng_container_24_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewMode = "cards");
    });
    \u0275\u0275elementStart(7, "span", 25);
    \u0275\u0275text(8, "grid_view");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 32);
    \u0275\u0275listener("click", function FamilleHomeComponent_ng_container_24_div_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewMode = "list");
    });
    \u0275\u0275elementStart(10, "span", 25);
    \u0275\u0275text(11, "view_list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "a", 33);
    \u0275\u0275text(13, " Voir tous ");
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15, "arrow_forward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(16, FamilleHomeComponent_ng_container_24_div_6_div_16_Template, 2, 1, "div", 34)(17, FamilleHomeComponent_ng_container_24_div_6_div_17_Template, 9, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r0.viewMode === "cards");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.viewMode === "list");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.viewMode === "cards");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.viewMode === "list");
  }
}
function FamilleHomeComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "h2", 19);
    \u0275\u0275text(3, "Explorer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275template(5, FamilleHomeComponent_ng_container_24_a_5_Template, 8, 11, "a", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, FamilleHomeComponent_ng_container_24_div_6_Template, 18, 6, "div", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.tiles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recentPersonnes.length > 0);
  }
}
var FamilleHomeComponent = class _FamilleHomeComponent {
  api;
  auth;
  getInitiales = getInitiales;
  estVivant = estVivant;
  extractAnnee = extractAnnee;
  getNomComplet = getNomComplet;
  getAgeLabel = getAgeLabel;
  getPhotoUrl = getPhotoUrl;
  failedPhotos = /* @__PURE__ */ new Set();
  viewMode = "cards";
  nomFamille = "";
  loading = true;
  totalMembres = 0;
  totalUnions = 0;
  totalGenerations = 0;
  recentPersonnes = [];
  tiles = [
    { icon: "account_tree", label: "Arbre g\xE9n\xE9alogique", route: "/famille/arbre", color: "#7C3AED", bg: "#F5F3FF" },
    { icon: "people", label: "Membres", route: "/famille/membres", color: "#059669", bg: "#ECFDF5" },
    { icon: "auto_stories", label: "Stories", route: "/famille/stories", color: "#DB2777", bg: "#FDF2F8" },
    { icon: "timeline", label: "\xC9v\xE9nements", route: "/famille/timeline", color: "#D97706", bg: "#FFFBEB" }
  ];
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
  }
  ngOnInit() {
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions: this.api.getUnions(),
      famille: this.api.getCurrentFamille()
    }).subscribe({
      next: ({ personnes, unions, famille }) => {
        this.nomFamille = famille.nom ?? famille.famille?.nom ?? "";
        this.totalMembres = personnes.length;
        this.totalUnions = unions.length;
        const annees = personnes.map((p) => extractAnnee(p.dateNaissance)).filter((a) => a !== null);
        if (annees.length > 0) {
          const spread = Math.max(...annees) - Math.min(...annees);
          this.totalGenerations = Math.max(1, Math.round(spread / 25));
        }
        this.recentPersonnes = [...personnes].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 6);
        this.failedPhotos.clear();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get user() {
    return this.auth.getUser();
  }
  onPhotoError(id) {
    this.failedPhotos.add(id);
  }
  static \u0275fac = function FamilleHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleHomeComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FamilleHomeComponent, selectors: [["app-famille-home"]], standalone: false, decls: 25, vars: 6, consts: [[1, "fh-page"], [1, "fh-hero"], [1, "fh-hero-bg"], [1, "fh-hero-content"], ["class", "fh-hello", 4, "ngIf"], [1, "fh-hero-stats"], [1, "fh-hero-stat"], [1, "fhs-value"], [1, "fhs-label"], [1, "fh-hero-divider"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "fh-hello"], [1, "fh-user-avatar"], [1, "fh-greeting"], [1, "fh-family-name"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "fh-section"], [1, "fh-section-title"], [1, "fh-tiles"], ["class", "fh-tile", 3, "routerLink", "--tile-color", "--tile-bg", 4, "ngFor", "ngForOf"], ["class", "fh-section", 4, "ngIf"], [1, "fh-tile", 3, "routerLink"], [1, "fh-tile-icon"], [1, "material-icons-round"], [1, "fh-tile-label"], [1, "material-icons-round", "fh-tile-arrow"], [1, "fh-section-header"], [1, "fh-section-actions"], [1, "view-toggle"], ["title", "Vue cartes", 1, "vt-btn", 3, "click"], ["title", "Vue liste", 1, "vt-btn", 3, "click"], ["routerLink", "/famille/membres", 1, "fh-see-all"], ["class", "pc-grid", 4, "ngIf"], ["class", "pl-table", 4, "ngIf"], [1, "pc-grid"], ["class", "pc-card", 3, "pc-male", "pc-female", 4, "ngFor", "ngForOf"], [1, "pc-card"], [1, "pc-card-banner"], [1, "pc-colorband"], [1, "pc-live-dot"], [1, "pc-avatar-ring"], ["class", "pc-avatar pc-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], ["class", "pc-avatar pc-avatar-initials", 4, "ngIf"], [1, "pc-card-body"], [1, "pc-name"], [1, "pc-age"], ["class", "pc-loc", 4, "ngIf"], [1, "pc-badges"], ["class", "pc-badge pc-badge-alive", 4, "ngIf"], ["class", "pc-badge pc-badge-dead", 4, "ngIf"], [1, "pc-card-actions"], ["routerLink", "/famille/membres", 1, "pc-act"], [1, "pc-avatar", "pc-avatar-photo", 3, "error", "src", "alt"], [1, "pc-avatar", "pc-avatar-initials"], [1, "pc-loc"], [1, "pc-badge", "pc-badge-alive"], [1, "pc-badge", "pc-badge-dead"], [1, "pl-table"], [1, "pl-thead"], [1, "pl-th", "pl-th-person"], [1, "pl-th", "pl-th-lieu"], [1, "pl-th", "pl-th-statut"], ["class", "pl-row", 4, "ngFor", "ngForOf"], [1, "pl-row"], [1, "pl-cell", "pl-cell-person"], [1, "pl-avatar-wrap"], ["class", "pl-avatar pl-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], ["class", "pl-avatar pl-avatar-initials", 3, "male", "female", 4, "ngIf"], [1, "pl-status-dot"], [1, "pl-person-info"], [1, "pl-person-name"], [1, "pl-person-age"], [1, "pl-cell", "pl-cell-lieu"], ["class", "pl-lieu", 4, "ngIf"], ["class", "pl-empty", 4, "ngIf"], [1, "pl-cell", "pl-cell-statut"], [1, "pl-avatar", "pl-avatar-photo", 3, "error", "src", "alt"], [1, "pl-avatar", "pl-avatar-initials"], [1, "pl-lieu"], [1, "pl-empty"]], template: function FamilleHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275template(4, FamilleHomeComponent_div_4_Template, 8, 3, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Membres");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "div", 9);
      \u0275\u0275elementStart(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275text(16, "G\xE9n\xE9rations");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "div", 9);
      \u0275\u0275elementStart(18, "div", 6)(19, "span", 7);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 8);
      \u0275\u0275text(22, "Unions");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(23, FamilleHomeComponent_div_23_Template, 4, 0, "div", 10)(24, FamilleHomeComponent_ng_container_24_Template, 7, 2, "ng-container", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.user);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.totalMembres);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalGenerations);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalUnions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.fh-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.fh-hero[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 24px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a0533 0%,\n      #2d1b69 50%,\n      #1e3a8a 100%);\n  padding: 36px 40px;\n  color: #fff;\n}\n.fh-hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.04) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  pointer-events: none;\n}\n.fh-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n.fh-hello[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.fh-user-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #A78BFA,\n      #EC4899);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.fh-greeting[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  margin: 0 0 4px;\n}\n.fh-family-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.fh-hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 16px 24px;\n  gap: 24px;\n}\n.fh-hero-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.fhs-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1;\n}\n.fhs-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.fh-hero-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.fh-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.fh-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.fh-section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.fh-section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0;\n}\n.fh-see-all[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #7C3AED;\n  text-decoration: none;\n}\n.fh-see-all[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.fh-see-all[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  opacity: 0.8;\n}\n.fh-tiles[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.fh-tile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #F0F4FF;\n  text-decoration: none;\n  color: #1F2937;\n  transition: all 0.25s;\n}\n.fh-tile[_ngcontent-%COMP%]:hover {\n  border-color: var(--tile-color, #7C3AED);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);\n  transform: translateY(-3px);\n  text-decoration: none;\n  color: #1F2937;\n}\n.fh-tile[_ngcontent-%COMP%]:hover   .fh-tile-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(3px);\n  color: var(--tile-color, #7C3AED);\n}\n.fh-tile-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.fh-tile-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n.fh-tile-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 600;\n}\n.fh-tile-arrow[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #D1D5DB;\n  opacity: 0;\n  transition: all 0.2s;\n}\n@media (max-width: 1024px) {\n  .fh-tiles[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .fh-members-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .fh-hero[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 16px;\n  }\n  .fh-hero-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .fh-hero-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-around;\n    padding: 12px 16px;\n    gap: 12px;\n  }\n  .fhs-value[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .fh-family-name[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .fh-tiles[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .fh-tile[_ngcontent-%COMP%] {\n    padding: 14px;\n    gap: 10px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .fh-tile-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .fh-tile-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .fh-members-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 380px) {\n  .fh-tiles[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=famille-home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleHomeComponent, [{
    type: Component,
    args: [{ selector: "app-famille-home", standalone: false, template: `<div class="fh-page">

  <!-- Banni\xE8re de bienvenue -->
  <div class="fh-hero">
    <div class="fh-hero-bg"></div>
    <div class="fh-hero-content">
      <div class="fh-hello" *ngIf="user">
        <div class="fh-user-avatar">{{ (user.prenom[0] + user.nom[0]).toUpperCase() }}</div>
        <div>
          <p class="fh-greeting">Bonjour, {{ user.prenom }} \u{1F44B}</p>
          <h1 class="fh-family-name">Famille {{ nomFamille || '\u2026' }}</h1>
        </div>
      </div>
      <div class="fh-hero-stats">
        <div class="fh-hero-stat">
          <span class="fhs-value">{{ totalMembres }}</span>
          <span class="fhs-label">Membres</span>
        </div>
        <div class="fh-hero-divider"></div>
        <div class="fh-hero-stat">
          <span class="fhs-value">{{ totalGenerations }}</span>
          <span class="fhs-label">G\xE9n\xE9rations</span>
        </div>
        <div class="fh-hero-divider"></div>
        <div class="fh-hero-stat">
          <span class="fhs-value">{{ totalUnions }}</span>
          <span class="fhs-label">Unions</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Chargement -->
  <div class="loading-state" *ngIf="loading">
    <span class="material-icons-round spin">sync</span> Chargement...
  </div>

  <ng-container *ngIf="!loading">

    <!-- Tuiles de navigation -->
    <div class="fh-section">
      <h2 class="fh-section-title">Explorer</h2>
      <div class="fh-tiles">
        <a class="fh-tile" *ngFor="let t of tiles" [routerLink]="t.route"
           [style.--tile-color]="t.color" [style.--tile-bg]="t.bg">
          <div class="fh-tile-icon" [style.background]="t.bg" [style.color]="t.color">
            <span class="material-icons-round">{{ t.icon }}</span>
          </div>
          <span class="fh-tile-label">{{ t.label }}</span>
          <span class="material-icons-round fh-tile-arrow">arrow_forward</span>
        </a>
      </div>
    </div>

    <!-- Membres r\xE9cents -->
    <div class="fh-section" *ngIf="recentPersonnes.length > 0">
      <div class="fh-section-header">
        <h2 class="fh-section-title">Membres r\xE9cents</h2>
        <div class="fh-section-actions">
          <div class="view-toggle">
            <button class="vt-btn" [class.active]="viewMode === 'cards'" (click)="viewMode = 'cards'" title="Vue cartes">
              <span class="material-icons-round">grid_view</span>
            </button>
            <button class="vt-btn" [class.active]="viewMode === 'list'" (click)="viewMode = 'list'" title="Vue liste">
              <span class="material-icons-round">view_list</span>
            </button>
          </div>
          <a routerLink="/famille/membres" class="fh-see-all">
            Voir tous <span class="material-icons-round">arrow_forward</span>
          </a>
        </div>
      </div>

      <!-- Vue cartes -->
      <div class="pc-grid" *ngIf="viewMode === 'cards'">
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
            <a class="pc-act" routerLink="/famille/membres">
              <span class="material-icons-round">visibility</span>Voir
            </a>
          </div>
        </div>
      </div>

      <!-- Vue liste -->
      <div class="pl-table" *ngIf="viewMode === 'list'">
        <div class="pl-thead">
          <span class="pl-th pl-th-person">Personne</span>
          <span class="pl-th pl-th-lieu">Lieu de naissance</span>
          <span class="pl-th pl-th-statut">Statut</span>
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
        </div>
      </div>
    </div>

  </ng-container>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/famille/pages/home/famille-home.component.scss */\n.fh-page {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.fh-hero {\n  position: relative;\n  border-radius: 24px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #1a0533 0%,\n      #2d1b69 50%,\n      #1e3a8a 100%);\n  padding: 36px 40px;\n  color: #fff;\n}\n.fh-hero-bg {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.04) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  pointer-events: none;\n}\n.fh-hero-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n.fh-hello {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.fh-user-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #A78BFA,\n      #EC4899);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.fh-greeting {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.65);\n  margin: 0 0 4px;\n}\n.fh-family-name {\n  font-size: 24px;\n  font-weight: 800;\n  color: #fff;\n  margin: 0;\n  letter-spacing: -0.3px;\n}\n.fh-hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 16px 24px;\n  gap: 24px;\n}\n.fh-hero-stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.fhs-value {\n  font-size: 28px;\n  font-weight: 800;\n  color: #fff;\n  line-height: 1;\n}\n.fhs-label {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.fh-hero-divider {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.fh-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.fh-section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.fh-section-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.fh-section-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0;\n}\n.fh-see-all {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #7C3AED;\n  text-decoration: none;\n}\n.fh-see-all .material-icons-round {\n  font-size: 16px !important;\n}\n.fh-see-all:hover {\n  text-decoration: none;\n  opacity: 0.8;\n}\n.fh-tiles {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.fh-tile {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #F0F4FF;\n  text-decoration: none;\n  color: #1F2937;\n  transition: all 0.25s;\n}\n.fh-tile:hover {\n  border-color: var(--tile-color, #7C3AED);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);\n  transform: translateY(-3px);\n  text-decoration: none;\n  color: #1F2937;\n}\n.fh-tile:hover .fh-tile-arrow {\n  opacity: 1;\n  transform: translateX(3px);\n  color: var(--tile-color, #7C3AED);\n}\n.fh-tile-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.fh-tile-icon .material-icons-round {\n  font-size: 24px !important;\n}\n.fh-tile-label {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 600;\n}\n.fh-tile-arrow {\n  font-size: 18px !important;\n  color: #D1D5DB;\n  opacity: 0;\n  transition: all 0.2s;\n}\n@media (max-width: 1024px) {\n  .fh-tiles {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .fh-members-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .fh-hero {\n    padding: 24px 20px;\n    border-radius: 16px;\n  }\n  .fh-hero-content {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .fh-hero-stats {\n    width: 100%;\n    justify-content: space-around;\n    padding: 12px 16px;\n    gap: 12px;\n  }\n  .fhs-value {\n    font-size: 22px;\n  }\n  .fh-family-name {\n    font-size: 18px;\n  }\n  .fh-tiles {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .fh-tile {\n    padding: 14px;\n    gap: 10px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .fh-tile-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .fh-tile-arrow {\n    display: none;\n  }\n  .fh-members-row {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 380px) {\n  .fh-tiles {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=famille-home.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FamilleHomeComponent, { className: "FamilleHomeComponent", filePath: "src/app/famille/pages/home/famille-home.component.ts", lineNumber: 13 });
})();

// src/app/famille/pages/membres/famille-membres.component.ts
function FamilleMembresComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function FamilleMembresComponent_button_13_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtreActif = f_r2.key);
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filtreActif === f_r2.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function FamilleMembresComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.erreur, " ");
  }
}
function FamilleMembresComponent_div_23_div_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 43);
    \u0275\u0275listener("error", function FamilleMembresComponent_div_23_div_1_img_5_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPhotoError(p_r5.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.getPhotoUrl(p_r5), \u0275\u0275sanitizeUrl)("alt", ctx_r2.getNomComplet(p_r5));
  }
}
function FamilleMembresComponent_div_23_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitiales(p_r5), " ");
  }
}
function FamilleMembresComponent_div_23_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 6);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r5.lieuNaissance, " ");
  }
}
function FamilleMembresComponent_div_23_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_23_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function FamilleMembresComponent_div_23_div_1_Template_div_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetail(p_r5));
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275element(2, "div", 28)(3, "span", 29);
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275template(5, FamilleMembresComponent_div_23_div_1_img_5_Template, 1, 2, "img", 31)(6, FamilleMembresComponent_div_23_div_1_div_6_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 33)(8, "h4", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FamilleMembresComponent_div_23_div_1_div_12_Template, 4, 1, "div", 36);
    \u0275\u0275elementStart(13, "div", 37)(14, "span", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, FamilleMembresComponent_div_23_div_1_span_16_Template, 2, 0, "span", 39)(17, FamilleMembresComponent_div_23_div_1_span_17_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 41)(19, "button", 42);
    \u0275\u0275listener("click", function FamilleMembresComponent_div_23_div_1_Template_button_click_19_listener($event) {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openDetail(p_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(20, "span", 6);
    \u0275\u0275text(21, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "Voir fiche ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pc-male", p_r5.sexe === "M")("pc-female", p_r5.sexe === "F");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("color-1", i_r7 % 3 === 0)("color-2", i_r7 % 3 === 1)("color-3", i_r7 % 3 === 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("alive", ctx_r2.estVivant(p_r5))("dead", !ctx_r2.estVivant(p_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.getPhotoUrl(p_r5) && !ctx_r2.failedPhotos.has(p_r5.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.getPhotoUrl(p_r5) || ctx_r2.failedPhotos.has(p_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getNomComplet(p_r5));
    \u0275\u0275advance();
    \u0275\u0275classProp("pc-age-unknown", !ctx_r2.getAgeLabel(p_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAgeLabel(p_r5) || "Naissance inconnue", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r5.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pc-badge-m", p_r5.sexe === "M")("pc-badge-f", p_r5.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getSexeLabel(p_r5.sexe), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.estVivant(p_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.estVivant(p_r5));
  }
}
function FamilleMembresComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, FamilleMembresComponent_div_23_div_1_Template, 23, 28, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.personnesFiltrees);
  }
}
function FamilleMembresComponent_div_24_div_12_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 72);
    \u0275\u0275listener("error", function FamilleMembresComponent_div_24_div_12_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r10);
      const p_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPhotoError(p_r9.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.getPhotoUrl(p_r9), \u0275\u0275sanitizeUrl)("alt", ctx_r2.getNomComplet(p_r9));
  }
}
function FamilleMembresComponent_div_24_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("male", p_r9.sexe === "M")("female", p_r9.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getInitiales(p_r9));
  }
}
function FamilleMembresComponent_div_24_div_12_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74)(1, "span", 6);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r9.lieuNaissance, " ");
  }
}
function FamilleMembresComponent_div_24_div_12_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_24_div_12_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_24_div_12_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_24_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function FamilleMembresComponent_div_24_div_12_Template_div_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetail(p_r9));
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "div", 58);
    \u0275\u0275template(3, FamilleMembresComponent_div_24_div_12_img_3_Template, 1, 2, "img", 59)(4, FamilleMembresComponent_div_24_div_12_div_4_Template, 2, 5, "div", 60);
    \u0275\u0275element(5, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 62)(7, "span", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 65)(12, "span", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 66);
    \u0275\u0275template(15, FamilleMembresComponent_div_24_div_12_span_15_Template, 4, 1, "span", 67)(16, FamilleMembresComponent_div_24_div_12_span_16_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 69);
    \u0275\u0275template(18, FamilleMembresComponent_div_24_div_12_span_18_Template, 2, 0, "span", 39)(19, FamilleMembresComponent_div_24_div_12_span_19_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 70)(21, "button", 71);
    \u0275\u0275listener("click", function FamilleMembresComponent_div_24_div_12_Template_button_click_21_listener($event) {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openDetail(p_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(22, "span", 6);
    \u0275\u0275text(23, "visibility");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.getPhotoUrl(p_r9) && !ctx_r2.failedPhotos.has(p_r9.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.getPhotoUrl(p_r9) || ctx_r2.failedPhotos.has(p_r9.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("alive", ctx_r2.estVivant(p_r9))("dead", !ctx_r2.estVivant(p_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getNomComplet(p_r9));
    \u0275\u0275advance();
    \u0275\u0275classProp("pc-age-unknown", !ctx_r2.getAgeLabel(p_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAgeLabel(p_r9) || "Naissance inconnue", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pc-badge-m", p_r9.sexe === "M")("pc-badge-f", p_r9.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getSexeLabel(p_r9.sexe), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r9.lieuNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r9.lieuNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.estVivant(p_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.estVivant(p_r9));
  }
}
function FamilleMembresComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3, "Personne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 51);
    \u0275\u0275text(5, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 52);
    \u0275\u0275text(7, "Lieu de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 53);
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 54);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, FamilleMembresComponent_div_24_div_12_Template, 24, 19, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.personnesFiltrees);
  }
}
function FamilleMembresComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 6);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucun membre trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Essayez un autre terme de recherche.");
    \u0275\u0275elementEnd()();
  }
}
function FamilleMembresComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function FamilleMembresComponent_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_27_img_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 94);
    \u0275\u0275listener("error", function FamilleMembresComponent_div_27_img_10_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r13);
      const p_r14 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPhotoError(p_r14.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.getPhotoUrl(p_r14), \u0275\u0275sanitizeUrl);
  }
}
function FamilleMembresComponent_div_27_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getInitiales(p_r14));
  }
}
function FamilleMembresComponent_div_27_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_27_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleMembresComponent_div_27_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2, "Nom de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r14.nomNaissance);
  }
}
function FamilleMembresComponent_div_27_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r14.dateNaissance);
  }
}
function FamilleMembresComponent_div_27_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2, "Lieu de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r14.lieuNaissance);
  }
}
function FamilleMembresComponent_div_27_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2, "Date de d\xE9c\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 99);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r14.dateDeces);
  }
}
function FamilleMembresComponent_div_27_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 98);
    \u0275\u0275text(2, "Biographie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r14.biographie);
  }
}
function FamilleMembresComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "h3");
    \u0275\u0275text(3, "Fiche membre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 80);
    \u0275\u0275listener("click", function FamilleMembresComponent_div_27_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 81)(8, "div", 82)(9, "div", 83);
    \u0275\u0275template(10, FamilleMembresComponent_div_27_img_10_Template, 1, 1, "img", 84)(11, FamilleMembresComponent_div_27_span_11_Template, 2, 1, "span", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h2");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 86)(17, "span", 87);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, FamilleMembresComponent_div_27_span_19_Template, 2, 0, "span", 88)(20, FamilleMembresComponent_div_27_span_20_Template, 2, 0, "span", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 90)(22, "div", 91);
    \u0275\u0275template(23, FamilleMembresComponent_div_27_div_23_Template, 5, 1, "div", 92)(24, FamilleMembresComponent_div_27_div_24_Template, 5, 1, "div", 92)(25, FamilleMembresComponent_div_27_div_25_Template, 5, 1, "div", 92)(26, FamilleMembresComponent_div_27_div_26_Template, 5, 1, "div", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, FamilleMembresComponent_div_27_div_27_Template, 5, 1, "div", 93);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r2.showDetail);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("male", p_r14.sexe === "M")("female", p_r14.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getPhotoUrl(p_r14) && !ctx_r2.failedPhotos.has(p_r14.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.getPhotoUrl(p_r14) || ctx_r2.failedPhotos.has(p_r14.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getNomComplet(p_r14));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getAgeLabel(p_r14));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fm-badge-male", p_r14.sexe === "M")("fm-badge-female", p_r14.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getSexeLabel(p_r14.sexe));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.estVivant(p_r14));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.estVivant(p_r14));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r14.nomNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r14.dateNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r14.lieuNaissance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r14.dateDeces);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r14.biographie);
  }
}
var FamilleMembresComponent = class _FamilleMembresComponent {
  api;
  getInitiales = getInitiales;
  getAgeLabel = getAgeLabel;
  estVivant = estVivant;
  getNomComplet = getNomComplet;
  extractAnnee = extractAnnee;
  getPhotoUrl = getPhotoUrl;
  toutes = [];
  loading = true;
  erreur = null;
  searchQuery = "";
  filtreActif = "tous";
  viewMode = "cards";
  failedPhotos = /* @__PURE__ */ new Set();
  detailTarget = null;
  showDetail = false;
  filtres = [
    { key: "tous", label: "Tous", icon: "people" },
    { key: "hommes", label: "Hommes", icon: "male" },
    { key: "femmes", label: "Femmes", icon: "female" },
    { key: "vivants", label: "Vivants", icon: "favorite" },
    { key: "decedes", label: "D\xE9c\xE9d\xE9s", icon: "hourglass_empty" }
  ];
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getPersonnes().subscribe({
      next: (data) => {
        this.toutes = data;
        this.failedPhotos.clear();
        this.loading = false;
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
  openDetail(p) {
    this.detailTarget = p;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
    this.detailTarget = null;
  }
  onPhotoError(id) {
    this.failedPhotos.add(id);
  }
  getSexeLabel(sexe) {
    return sexe === "M" ? "Homme" : sexe === "F" ? "Femme" : "Autre";
  }
  static \u0275fac = function FamilleMembresComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleMembresComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FamilleMembresComponent, selectors: [["app-famille-membres"]], standalone: false, decls: 28, vars: 16, consts: [[1, "fm-page"], [1, "fm-header"], [1, "fm-title"], [1, "fm-subtitle"], [1, "fm-toolbar"], [1, "search-bar"], [1, "material-icons-round"], ["type", "text", "placeholder", "Rechercher par nom, lieu...", 3, "ngModelChange", "ngModel"], [1, "fm-filtres"], ["class", "fm-filtre", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "view-toggle"], ["title", "Vue cartes", 1, "vt-btn", 3, "click"], ["title", "Vue liste", 1, "vt-btn", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "pc-grid", 4, "ngIf"], ["class", "pl-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "fm-overlay", 3, "click", 4, "ngIf"], ["class", "fm-detail-panel", 3, "open", 4, "ngIf"], [1, "fm-filtre", 3, "click"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "error-state"], [1, "pc-grid"], ["class", "pc-card", 3, "pc-male", "pc-female", "click", 4, "ngFor", "ngForOf"], [1, "pc-card", 3, "click"], [1, "pc-card-banner"], [1, "pc-colorband"], [1, "pc-live-dot"], [1, "pc-avatar-ring"], ["class", "pc-avatar pc-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], ["class", "pc-avatar pc-avatar-initials", 4, "ngIf"], [1, "pc-card-body"], [1, "pc-name"], [1, "pc-age"], ["class", "pc-loc", 4, "ngIf"], [1, "pc-badges"], [1, "pc-badge"], ["class", "pc-badge pc-badge-alive", 4, "ngIf"], ["class", "pc-badge pc-badge-dead", 4, "ngIf"], [1, "pc-card-actions"], [1, "pc-act", 3, "click"], [1, "pc-avatar", "pc-avatar-photo", 3, "error", "src", "alt"], [1, "pc-avatar", "pc-avatar-initials"], [1, "pc-loc"], [1, "pc-badge", "pc-badge-alive"], [1, "pc-badge", "pc-badge-dead"], [1, "pl-table"], [1, "pl-thead"], [1, "pl-th", "pl-th-person"], [1, "pl-th", "pl-th-genre"], [1, "pl-th", "pl-th-lieu"], [1, "pl-th", "pl-th-statut"], [1, "pl-th", "pl-th-actions"], ["class", "pl-row", "style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "pl-row", 2, "cursor", "pointer", 3, "click"], [1, "pl-cell", "pl-cell-person"], [1, "pl-avatar-wrap"], ["class", "pl-avatar pl-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], ["class", "pl-avatar pl-avatar-initials", 3, "male", "female", 4, "ngIf"], [1, "pl-status-dot"], [1, "pl-person-info"], [1, "pl-person-name"], [1, "pl-person-age"], [1, "pl-cell", "pl-cell-genre"], [1, "pl-cell", "pl-cell-lieu"], ["class", "pl-lieu", 4, "ngIf"], ["class", "pl-empty", 4, "ngIf"], [1, "pl-cell", "pl-cell-statut"], [1, "pl-cell", "pl-cell-actions"], ["title", "Voir", 1, "btn-icon", 3, "click"], [1, "pl-avatar", "pl-avatar-photo", 3, "error", "src", "alt"], [1, "pl-avatar", "pl-avatar-initials"], [1, "pl-lieu"], [1, "pl-empty"], [1, "empty-state"], [1, "fm-overlay", 3, "click"], [1, "fm-detail-panel"], [1, "fm-detail-header"], [1, "btn-icon", 3, "click"], [1, "fm-detail-hero"], [1, "fm-detail-avatar-wrap"], [1, "fm-detail-avatar"], ["class", "fm-detail-avatar-photo", 3, "src", "error", 4, "ngIf"], [4, "ngIf"], [1, "fm-detail-badges"], [1, "fm-badge"], ["class", "fm-badge fm-badge-alive", 4, "ngIf"], ["class", "fm-badge fm-badge-dead", 4, "ngIf"], [1, "fm-detail-body"], [1, "fm-detail-grid"], ["class", "fm-detail-item", 4, "ngIf"], ["class", "fm-detail-bio", 4, "ngIf"], [1, "fm-detail-avatar-photo", 3, "error", "src"], [1, "fm-badge", "fm-badge-alive"], [1, "fm-badge", "fm-badge-dead"], [1, "fm-detail-item"], [1, "fm-detail-label"], [1, "fm-detail-value"], [1, "fm-detail-bio"]], template: function FamilleMembresComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Membres de la famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function FamilleMembresComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275template(13, FamilleMembresComponent_button_13_Template, 4, 4, "button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
      \u0275\u0275listener("click", function FamilleMembresComponent_Template_button_click_15_listener() {
        return ctx.viewMode = "cards";
      });
      \u0275\u0275elementStart(16, "span", 6);
      \u0275\u0275text(17, "grid_view");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275listener("click", function FamilleMembresComponent_Template_button_click_18_listener() {
        return ctx.viewMode = "list";
      });
      \u0275\u0275elementStart(19, "span", 6);
      \u0275\u0275text(20, "view_list");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, FamilleMembresComponent_div_21_Template, 4, 0, "div", 13)(22, FamilleMembresComponent_div_22_Template, 4, 1, "div", 14)(23, FamilleMembresComponent_div_23_Template, 2, 1, "div", 15)(24, FamilleMembresComponent_div_24_Template, 13, 1, "div", 16)(25, FamilleMembresComponent_div_25_Template, 7, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, FamilleMembresComponent_div_26_Template, 1, 0, "div", 18)(27, FamilleMembresComponent_div_27_Template, 28, 22, "div", 19);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate3("", ctx.personnesFiltrees.length, " personne", ctx.personnesFiltrees.length > 1 ? "s" : "", " affich\xE9e", ctx.personnesFiltrees.length > 1 ? "s" : "");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filtres);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode === "cards");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.viewMode === "list");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.erreur);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.personnesFiltrees.length > 0 && ctx.viewMode === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.personnesFiltrees.length > 0 && ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.personnesFiltrees.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetail);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.detailTarget);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.fm-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.fm-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.fm-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 4px;\n}\n.fm-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 0;\n}\n.fm-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.fm-toolbar[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n}\n.fm-filtres[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.fm-filtre[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 30px;\n  border: 1.5px solid #E5E7EB;\n  background: #fff;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.fm-filtre[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.fm-filtre[_ngcontent-%COMP%]:hover {\n  border-color: #A78BFA;\n  color: #7C3AED;\n  background: #F5F3FF;\n}\n.fm-filtre.active[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  border-color: #7C3AED;\n  color: #fff;\n}\n.fm-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 30px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #F3F4F6;\n  color: #6B7280;\n}\n.fm-badge.fm-badge-male[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.fm-badge.fm-badge-female[_ngcontent-%COMP%] {\n  background: #FDF2F8;\n  color: #DB2777;\n}\n.fm-badge.fm-badge-alive[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #059669;\n}\n.fm-badge.fm-badge-dead[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #6B7280;\n}\n.fm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 399;\n}\n.fm-detail-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 400px;\n  height: 100vh;\n  background: #fff;\n  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);\n  z-index: 400;\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.fm-detail-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.fm-detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #F0F4FF;\n  flex-shrink: 0;\n}\n.fm-detail-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0;\n}\n.fm-detail-hero[_ngcontent-%COMP%] {\n  padding: 28px 32px 24px;\n  text-align: center;\n  border-bottom: 1px solid #F0F4FF;\n}\n.fm-detail-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 16px 0 4px;\n}\n.fm-detail-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 0 0 12px;\n}\n.fm-detail-avatar-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.fm-detail-avatar[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);\n}\n.fm-detail-avatar.male[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);\n}\n.fm-detail-avatar.female[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.3);\n}\n.fm-detail-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.fm-detail-avatar-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  z-index: 2;\n}\n.fm-detail-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.fm-detail-body[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.fm-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.fm-detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.fm-detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.fm-detail-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1F2937;\n  font-weight: 500;\n}\n.fm-detail-bio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.fm-detail-bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4B5563;\n  line-height: 1.7;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .fm-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .fm-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .fm-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 12px;\n  }\n  .fm-detail-panel[_ngcontent-%COMP%] {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 92vh;\n    transform: translateY(100%);\n  }\n  .fm-detail-panel.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .fm-detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .fm-detail-body[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .fm-detail-hero[_ngcontent-%COMP%] {\n    padding: 20px 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .fm-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=famille-membres.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleMembresComponent, [{
    type: Component,
    args: [{ selector: "app-famille-membres", standalone: false, template: `<div class="fm-page">

  <div class="fm-header">
    <div>
      <h2 class="fm-title">Membres de la famille</h2>
      <p class="fm-subtitle">{{ personnesFiltrees.length }} personne{{ personnesFiltrees.length > 1 ? 's' : '' }} affich\xE9e{{ personnesFiltrees.length > 1 ? 's' : '' }}</p>
    </div>
  </div>

  <div class="fm-toolbar">
    <div class="search-bar">
      <span class="material-icons-round">search</span>
      <input type="text" [(ngModel)]="searchQuery" placeholder="Rechercher par nom, lieu..." />
    </div>
    <div class="fm-filtres">
      <button class="fm-filtre" *ngFor="let f of filtres"
              [class.active]="filtreActif === f.key"
              (click)="filtreActif = f.key">
        <span class="material-icons-round">{{ f.icon }}</span>
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

  <div class="loading-state" *ngIf="loading">
    <span class="material-icons-round spin">sync</span> Chargement...
  </div>

  <div class="error-state" *ngIf="erreur">
    <span class="material-icons-round">error_outline</span> {{ erreur }}
  </div>

  <!-- ===== VUE CARTES ===== -->
  <div class="pc-grid" *ngIf="!loading && !erreur && personnesFiltrees.length > 0 && viewMode === 'cards'">
    <div class="pc-card" *ngFor="let p of personnesFiltrees; let i = index"
         [class.pc-male]="p.sexe === 'M'" [class.pc-female]="p.sexe === 'F'"
         (click)="openDetail(p)">
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
          <span class="pc-badge" [class.pc-badge-m]="p.sexe === 'M'" [class.pc-badge-f]="p.sexe === 'F'">
            {{ getSexeLabel(p.sexe) }}
          </span>
          <span class="pc-badge pc-badge-alive" *ngIf="estVivant(p)">Vivant(e)</span>
          <span class="pc-badge pc-badge-dead"  *ngIf="!estVivant(p)">D\xE9c\xE9d\xE9(e)</span>
        </div>
      </div>
      <div class="pc-card-actions">
        <button class="pc-act" (click)="openDetail(p); $event.stopPropagation()">
          <span class="material-icons-round">visibility</span>Voir fiche
        </button>
      </div>
    </div>
  </div>

  <!-- ===== VUE LISTE ===== -->
  <div class="pl-table" *ngIf="!loading && !erreur && personnesFiltrees.length > 0 && viewMode === 'list'">
    <div class="pl-thead">
      <span class="pl-th pl-th-person">Personne</span>
      <span class="pl-th pl-th-genre">Genre</span>
      <span class="pl-th pl-th-lieu">Lieu de naissance</span>
      <span class="pl-th pl-th-statut">Statut</span>
      <span class="pl-th pl-th-actions">Actions</span>
    </div>
    <div class="pl-row" *ngFor="let p of personnesFiltrees" (click)="openDetail(p)" style="cursor:pointer">
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
          {{ getSexeLabel(p.sexe) }}
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
        <button class="btn-icon" title="Voir" (click)="openDetail(p); $event.stopPropagation()">
          <span class="material-icons-round">visibility</span>
        </button>
      </div>
    </div>
  </div>

  <div class="empty-state" *ngIf="!loading && !erreur && personnesFiltrees.length === 0">
    <span class="material-icons-round">person_search</span>
    <h3>Aucun membre trouv\xE9</h3>
    <p>Essayez un autre terme de recherche.</p>
  </div>

</div>

<!-- Overlay + D\xE9tail -->
<div class="fm-overlay" *ngIf="showDetail" (click)="closeDetail()"></div>

<div class="fm-detail-panel" [class.open]="showDetail" *ngIf="detailTarget as p">
  <div class="fm-detail-header">
    <h3>Fiche membre</h3>
    <button class="btn-icon" (click)="closeDetail()">
      <span class="material-icons-round">close</span>
    </button>
  </div>
  <div class="fm-detail-hero">
    <div class="fm-detail-avatar-wrap">
      <div class="fm-detail-avatar" [class.male]="p.sexe === 'M'" [class.female]="p.sexe === 'F'">
        <img *ngIf="getPhotoUrl(p) && !failedPhotos.has(p.id)"
             [src]="getPhotoUrl(p)!" class="fm-detail-avatar-photo"
             (error)="onPhotoError(p.id)" />
        <span *ngIf="!getPhotoUrl(p) || failedPhotos.has(p.id)">{{ getInitiales(p) }}</span>
      </div>
    </div>
    <h2>{{ getNomComplet(p) }}</h2>
    <p>{{ getAgeLabel(p) }}</p>
    <div class="fm-detail-badges">
      <span class="fm-badge" [class.fm-badge-male]="p.sexe === 'M'" [class.fm-badge-female]="p.sexe === 'F'">{{ getSexeLabel(p.sexe) }}</span>
      <span class="fm-badge fm-badge-alive" *ngIf="estVivant(p)">Vivant(e)</span>
      <span class="fm-badge fm-badge-dead" *ngIf="!estVivant(p)">D\xE9c\xE9d\xE9(e)</span>
    </div>
  </div>
  <div class="fm-detail-body">
    <div class="fm-detail-grid">
      <div class="fm-detail-item" *ngIf="p.nomNaissance">
        <span class="fm-detail-label">Nom de naissance</span>
        <span class="fm-detail-value">{{ p.nomNaissance }}</span>
      </div>
      <div class="fm-detail-item" *ngIf="p.dateNaissance">
        <span class="fm-detail-label">Date de naissance</span>
        <span class="fm-detail-value">{{ p.dateNaissance }}</span>
      </div>
      <div class="fm-detail-item" *ngIf="p.lieuNaissance">
        <span class="fm-detail-label">Lieu de naissance</span>
        <span class="fm-detail-value">{{ p.lieuNaissance }}</span>
      </div>
      <div class="fm-detail-item" *ngIf="p.dateDeces">
        <span class="fm-detail-label">Date de d\xE9c\xE8s</span>
        <span class="fm-detail-value">{{ p.dateDeces }}</span>
      </div>
    </div>
    <div class="fm-detail-bio" *ngIf="p.biographie">
      <span class="fm-detail-label">Biographie</span>
      <p>{{ p.biographie }}</p>
    </div>
  </div>
</div>
`, styles: ["/* src/app/famille/pages/membres/famille-membres.component.scss */\n.fm-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.fm-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.fm-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 4px;\n}\n.fm-subtitle {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 0;\n}\n.fm-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.fm-toolbar .search-bar {\n  flex: 1;\n  min-width: 240px;\n}\n.fm-filtres {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.fm-filtre {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 14px;\n  border-radius: 30px;\n  border: 1.5px solid #E5E7EB;\n  background: #fff;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.fm-filtre .material-icons-round {\n  font-size: 15px !important;\n}\n.fm-filtre:hover {\n  border-color: #A78BFA;\n  color: #7C3AED;\n  background: #F5F3FF;\n}\n.fm-filtre.active {\n  background: #7C3AED;\n  border-color: #7C3AED;\n  color: #fff;\n}\n.fm-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 9px;\n  border-radius: 30px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #F3F4F6;\n  color: #6B7280;\n}\n.fm-badge.fm-badge-male {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.fm-badge.fm-badge-female {\n  background: #FDF2F8;\n  color: #DB2777;\n}\n.fm-badge.fm-badge-alive {\n  background: #ECFDF5;\n  color: #059669;\n}\n.fm-badge.fm-badge-dead {\n  background: #F3F4F6;\n  color: #6B7280;\n}\n.fm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 399;\n}\n.fm-detail-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 400px;\n  height: 100vh;\n  background: #fff;\n  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);\n  z-index: 400;\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.fm-detail-panel.open {\n  transform: translateX(0);\n}\n.fm-detail-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #F0F4FF;\n  flex-shrink: 0;\n}\n.fm-detail-header h3 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0;\n}\n.fm-detail-hero {\n  padding: 28px 32px 24px;\n  text-align: center;\n  border-bottom: 1px solid #F0F4FF;\n}\n.fm-detail-hero h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 16px 0 4px;\n}\n.fm-detail-hero p {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 0 0 12px;\n}\n.fm-detail-avatar-wrap {\n  margin-bottom: 4px;\n}\n.fm-detail-avatar {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);\n}\n.fm-detail-avatar.male {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);\n}\n.fm-detail-avatar.female {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.3);\n}\n.fm-detail-avatar span {\n  position: relative;\n  z-index: 1;\n}\n.fm-detail-avatar-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  z-index: 2;\n}\n.fm-detail-badges {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.fm-detail-body {\n  padding: 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.fm-detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.fm-detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.fm-detail-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.fm-detail-value {\n  font-size: 14px;\n  color: #1F2937;\n  font-weight: 500;\n}\n.fm-detail-bio {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.fm-detail-bio p {\n  font-size: 14px;\n  color: #4B5563;\n  line-height: 1.7;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .fm-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .fm-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .fm-grid {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 12px;\n  }\n  .fm-detail-panel {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 92vh;\n    transform: translateY(100%);\n  }\n  .fm-detail-panel.open {\n    transform: translateY(0);\n  }\n  .fm-detail-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .fm-detail-body {\n    padding: 16px 20px;\n  }\n  .fm-detail-hero {\n    padding: 20px 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .fm-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=famille-membres.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FamilleMembresComponent, { className: "FamilleMembresComponent", filePath: "src/app/famille/pages/membres/famille-membres.component.ts", lineNumber: 16 });
})();

// src/app/famille/pages/stories/famille-stories.component.ts
function FamilleStoriesComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function FamilleStoriesComponent_button_13_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedTag = t_r2);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedTag === t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2 === "tous" ? "Toutes" : t_r2, " ");
  }
}
function FamilleStoriesComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 23)(13, "h3", 24);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 26)(18, "button", 27);
    \u0275\u0275listener("click", function FamilleStoriesComponent_div_14_div_1_Template_button_click_18_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleLike(s_r5));
    });
    \u0275\u0275elementStart(19, "span", 6);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 28)(24, "span", 6);
    \u0275\u0275text(25, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 29)(29, "span", 6);
    \u0275\u0275text(30, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Partager");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("male", s_r5.sexe === "M")("female", s_r5.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r5.initiales, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.auteur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.date);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.tagColor(s_r5.tag).bg)("color", ctx_r2.tagColor(s_r5.tag).color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r5.tag, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.contenu);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("liked", s_r5.liked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.liked ? "favorite" : "favorite_border");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.likes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r5.commentaires);
  }
}
function FamilleStoriesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, FamilleStoriesComponent_div_14_div_1_Template, 33, 19, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.storiesFiltrees);
  }
}
function FamilleStoriesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 6);
    \u0275\u0275text(2, "auto_stories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune story trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Essayez un autre filtre ou terme de recherche.");
    \u0275\u0275elementEnd()();
  }
}
var FamilleStoriesComponent = class _FamilleStoriesComponent {
  searchQuery = "";
  selectedTag = "tous";
  tags = ["tous", "Souvenir", "\xC9v\xE9nement", "Culture", "Succ\xE8s", "Patrimoine", "Naissance"];
  stories = [
    { id: "1", auteur: "Ibrahim Diallo", initiales: "ID", sexe: "M", titre: "Photo de famille 1985", contenu: "Je viens de retrouver cette magnifique photo de la f\xEAte de l'A\xEFd en 1985. Grand-p\xE8re Moussa \xE9tait si fier ce jour-l\xE0... Nous \xE9tions plus de 40 personnes r\xE9unies dans la grande cour.", date: "Il y a 2h", likes: 14, commentaires: 5, tag: "Souvenir", liked: false },
    { id: "2", auteur: "Fatoumata Konat\xE9", initiales: "FK", sexe: "F", titre: "Mariage de oncle Oumar", contenu: "Les pr\xE9paratifs du mariage de oncle Oumar avancent bien. Toute la famille sera r\xE9unie le mois prochain \xE0 Conakry. Les tantes ont d\xE9j\xE0 commenc\xE9 \xE0 confectionner les tenues traditionnelles.", date: "Il y a 5h", likes: 28, commentaires: 11, tag: "\xC9v\xE9nement", liked: true },
    { id: "3", auteur: "Aminata Camara", initiales: "AC", sexe: "F", titre: "Recette de la grand-m\xE8re", contenu: "Grand-m\xE8re Aminata nous a partag\xE9 sa recette secr\xE8te du tiguad\xE8gu\xE8. Une tradition familiale transmise de g\xE9n\xE9ration en g\xE9n\xE9ration. Il ne faut jamais oublier nos racines culinaires.", date: "Hier", likes: 41, commentaires: 16, tag: "Culture", liked: false },
    { id: "4", auteur: "Seydou Bald\xE9", initiales: "SB", sexe: "M", titre: "Succ\xE8s acad\xE9mique !", contenu: "Fier d'annoncer que je viens d'obtenir mon Master en Informatique avec mention Tr\xE8s Bien ! Merci \xE0 toute la famille pour votre soutien sans faille tout au long de ces deux ann\xE9es difficiles.", date: "Il y a 2j", likes: 56, commentaires: 23, tag: "Succ\xE8s", liked: true },
    { id: "5", auteur: "Mariam Traor\xE9", initiales: "MT", sexe: "F", titre: "Village ancestral de Lab\xE9", contenu: "J'ai visit\xE9 notre village ancestral \xE0 Lab\xE9 en Guin\xE9e. Les anciens m'ont racont\xE9 des histoires incroyables sur nos origines et les migrations de notre famille au fil des si\xE8cles.", date: "Il y a 3j", likes: 33, commentaires: 9, tag: "Patrimoine", liked: false },
    { id: "6", auteur: "Oumar Diallo", initiales: "OD", sexe: "M", titre: "Bienvenue petite Kadiatou", contenu: "C'est avec une immense joie que nous accueillons la petite Kadiatou dans notre famille. Elle p\xE8se 3,2kg, est en parfaite sant\xE9 et a les yeux de sa grand-m\xE8re. Alhamdulillah !", date: "Il y a 1sem", likes: 72, commentaires: 31, tag: "Naissance", liked: false },
    { id: "7", auteur: "Kadiatou Sow", initiales: "KS", sexe: "F", titre: "Les photos de 1972", contenu: "J'ai num\xE9ris\xE9 les anciennes photos de 1972. On peut y voir nos grands-parents jeunes, lors d'une c\xE9r\xE9monie au village. Ces visages nous rappellent d'o\xF9 nous venons.", date: "Il y a 2sem", likes: 45, commentaires: 18, tag: "Souvenir", liked: true },
    { id: "8", auteur: "Mamadou Kouyat\xE9", initiales: "MK", sexe: "M", titre: "Promotion au travail", contenu: "Je suis heureux de partager que j'ai \xE9t\xE9 promu directeur r\xE9gional. C'est le fruit de nombreuses ann\xE9es de travail et de la b\xE9n\xE9diction de toute la famille. Baraka !", date: "Il y a 3sem", likes: 89, commentaires: 34, tag: "Succ\xE8s", liked: false }
  ];
  get storiesFiltrees() {
    return this.stories.filter((s) => {
      const matchTag = this.selectedTag === "tous" || s.tag === this.selectedTag;
      const q = this.searchQuery.toLowerCase();
      const matchSearch = !q || s.titre.toLowerCase().includes(q) || s.contenu.toLowerCase().includes(q) || s.auteur.toLowerCase().includes(q);
      return matchTag && matchSearch;
    });
  }
  toggleLike(s) {
    s.liked = !s.liked;
    s.likes += s.liked ? 1 : -1;
  }
  tagColor(tag) {
    const map = {
      Souvenir: { bg: "#EFF6FF", color: "#2563EB" },
      \u00C9v\u00E9nement: { bg: "#F5F3FF", color: "#7C3AED" },
      Culture: { bg: "#FDF2F8", color: "#DB2777" },
      Succ\u00E8s: { bg: "#ECFDF5", color: "#059669" },
      Patrimoine: { bg: "#FFFBEB", color: "#D97706" },
      Naissance: { bg: "#FFF1F2", color: "#E11D48" }
    };
    return map[tag] ?? { bg: "#F3F4F6", color: "#6B7280" };
  }
  static \u0275fac = function FamilleStoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleStoriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FamilleStoriesComponent, selectors: [["app-famille-stories"]], standalone: false, decls: 16, vars: 7, consts: [[1, "fs-page"], [1, "fs-header"], [1, "fs-title"], [1, "fs-subtitle"], [1, "fs-toolbar"], [1, "search-bar"], [1, "material-icons-round"], ["type", "text", "placeholder", "Rechercher une story...", 3, "ngModelChange", "ngModel"], [1, "fs-tags"], ["class", "fs-tag-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "fs-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "fs-tag-btn", 3, "click"], [1, "fs-grid"], ["class", "fs-card", 4, "ngFor", "ngForOf"], [1, "fs-card"], [1, "fs-card-header"], [1, "fs-author"], [1, "fs-author-avatar"], [1, "fs-author-info"], [1, "fs-author-name"], [1, "fs-author-date"], [1, "fs-tag-badge"], [1, "fs-card-body"], [1, "fs-card-title"], [1, "fs-card-text"], [1, "fs-card-footer"], [1, "fs-action-btn", 3, "click"], [1, "fs-action-btn"], [1, "fs-action-btn", "fs-share-btn"], [1, "empty-state"]], template: function FamilleStoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Stories familiales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function FamilleStoriesComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275template(13, FamilleStoriesComponent_button_13_Template, 2, 3, "button", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, FamilleStoriesComponent_div_14_Template, 2, 1, "div", 10)(15, FamilleStoriesComponent_div_15_Template, 7, 0, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate3("", ctx.storiesFiltrees.length, " histoire", ctx.storiesFiltrees.length > 1 ? "s" : "", " partag\xE9e", ctx.storiesFiltrees.length > 1 ? "s" : "");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tags);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.storiesFiltrees.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.storiesFiltrees.length === 0);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.fs-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.fs-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.fs-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 4px;\n}\n.fs-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 0;\n}\n.fs-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.fs-toolbar[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n}\n.fs-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.fs-tag-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 30px;\n  border: 1.5px solid #E5E7EB;\n  background: #fff;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.fs-tag-btn[_ngcontent-%COMP%]:hover {\n  border-color: #EC4899;\n  color: #DB2777;\n  background: #FDF2F8;\n}\n.fs-tag-btn.active[_ngcontent-%COMP%] {\n  background: #EC4899;\n  border-color: #EC4899;\n  color: #fff;\n}\n.fs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.fs-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #F0F4FF;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.25s;\n}\n.fs-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.07);\n  transform: translateY(-3px);\n  border-color: #FDE8F5;\n}\n.fs-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px 14px;\n}\n.fs-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.fs-author-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n  flex-shrink: 0;\n}\n.fs-author-avatar.male[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n}\n.fs-author-avatar.female[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n}\n.fs-author-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.fs-author-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1F2937;\n}\n.fs-author-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9CA3AF;\n}\n.fs-tag-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.fs-card-body[_ngcontent-%COMP%] {\n  padding: 0 20px 16px;\n  flex: 1;\n}\n.fs-card-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 8px;\n  line-height: 1.3;\n}\n.fs-card-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4B5563;\n  line-height: 1.7;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n}\n.fs-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 12px 20px;\n  border-top: 1px solid #F9FAFB;\n}\n.fs-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: 13px;\n  color: #9CA3AF;\n  cursor: pointer;\n  border-radius: 10px;\n  transition: all 0.2s;\n}\n.fs-action-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.fs-action-btn[_ngcontent-%COMP%]:hover {\n  background: #F9FAFB;\n  color: #4B5563;\n}\n.fs-action-btn.liked[_ngcontent-%COMP%] {\n  color: #DB2777;\n}\n.fs-action-btn.liked[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #DB2777;\n}\n.fs-share-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=famille-stories.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleStoriesComponent, [{
    type: Component,
    args: [{ selector: "app-famille-stories", standalone: false, template: `<div class="fs-page">

  <div class="fs-header">
    <div>
      <h2 class="fs-title">Stories familiales</h2>
      <p class="fs-subtitle">{{ storiesFiltrees.length }} histoire{{ storiesFiltrees.length > 1 ? 's' : '' }} partag\xE9e{{ storiesFiltrees.length > 1 ? 's' : '' }}</p>
    </div>
  </div>

  <div class="fs-toolbar">
    <div class="search-bar">
      <span class="material-icons-round">search</span>
      <input type="text" [(ngModel)]="searchQuery" placeholder="Rechercher une story..." />
    </div>
    <div class="fs-tags">
      <button class="fs-tag-btn" *ngFor="let t of tags"
              [class.active]="selectedTag === t"
              (click)="selectedTag = t">
        {{ t === 'tous' ? 'Toutes' : t }}
      </button>
    </div>
  </div>

  <div class="fs-grid" *ngIf="storiesFiltrees.length > 0">
    <div class="fs-card" *ngFor="let s of storiesFiltrees">
      <div class="fs-card-header">
        <div class="fs-author">
          <div class="fs-author-avatar" [class.male]="s.sexe === 'M'" [class.female]="s.sexe === 'F'">
            {{ s.initiales }}
          </div>
          <div class="fs-author-info">
            <span class="fs-author-name">{{ s.auteur }}</span>
            <span class="fs-author-date">{{ s.date }}</span>
          </div>
        </div>
        <span class="fs-tag-badge"
              [style.background]="tagColor(s.tag).bg"
              [style.color]="tagColor(s.tag).color">
          {{ s.tag }}
        </span>
      </div>

      <div class="fs-card-body">
        <h3 class="fs-card-title">{{ s.titre }}</h3>
        <p class="fs-card-text">{{ s.contenu }}</p>
      </div>

      <div class="fs-card-footer">
        <button class="fs-action-btn" [class.liked]="s.liked" (click)="toggleLike(s)">
          <span class="material-icons-round">{{ s.liked ? 'favorite' : 'favorite_border' }}</span>
          <span>{{ s.likes }}</span>
        </button>
        <button class="fs-action-btn">
          <span class="material-icons-round">chat_bubble_outline</span>
          <span>{{ s.commentaires }}</span>
        </button>
        <button class="fs-action-btn fs-share-btn">
          <span class="material-icons-round">share</span>
          <span>Partager</span>
        </button>
      </div>
    </div>
  </div>

  <div class="empty-state" *ngIf="storiesFiltrees.length === 0">
    <span class="material-icons-round">auto_stories</span>
    <h3>Aucune story trouv\xE9e</h3>
    <p>Essayez un autre filtre ou terme de recherche.</p>
  </div>

</div>
`, styles: ["/* src/app/famille/pages/stories/famille-stories.component.scss */\n.fs-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.fs-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.fs-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 4px;\n}\n.fs-subtitle {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 0;\n}\n.fs-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.fs-toolbar .search-bar {\n  flex: 1;\n  min-width: 240px;\n}\n.fs-tags {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.fs-tag-btn {\n  padding: 6px 14px;\n  border-radius: 30px;\n  border: 1.5px solid #E5E7EB;\n  background: #fff;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.fs-tag-btn:hover {\n  border-color: #EC4899;\n  color: #DB2777;\n  background: #FDF2F8;\n}\n.fs-tag-btn.active {\n  background: #EC4899;\n  border-color: #EC4899;\n  color: #fff;\n}\n.fs-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.fs-card {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #F0F4FF;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.25s;\n}\n.fs-card:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.07);\n  transform: translateY(-3px);\n  border-color: #FDE8F5;\n}\n.fs-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px 14px;\n}\n.fs-author {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.fs-author-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n  flex-shrink: 0;\n}\n.fs-author-avatar.male {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n}\n.fs-author-avatar.female {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n}\n.fs-author-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.fs-author-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1F2937;\n}\n.fs-author-date {\n  font-size: 11px;\n  color: #9CA3AF;\n}\n.fs-tag-badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.fs-card-body {\n  padding: 0 20px 16px;\n  flex: 1;\n}\n.fs-card-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 8px;\n  line-height: 1.3;\n}\n.fs-card-text {\n  font-size: 13px;\n  color: #4B5563;\n  line-height: 1.7;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n}\n.fs-card-footer {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 12px 20px;\n  border-top: 1px solid #F9FAFB;\n}\n.fs-action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: 13px;\n  color: #9CA3AF;\n  cursor: pointer;\n  border-radius: 10px;\n  transition: all 0.2s;\n}\n.fs-action-btn .material-icons-round {\n  font-size: 18px !important;\n}\n.fs-action-btn:hover {\n  background: #F9FAFB;\n  color: #4B5563;\n}\n.fs-action-btn.liked {\n  color: #DB2777;\n}\n.fs-action-btn.liked .material-icons-round {\n  color: #DB2777;\n}\n.fs-share-btn {\n  margin-left: auto;\n}\n/*# sourceMappingURL=famille-stories.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FamilleStoriesComponent, { className: "FamilleStoriesComponent", filePath: "src/app/famille/pages/stories/famille-stories.component.ts", lineNumber: 23 });
})();

// src/app/famille/pages/arbre/famille-arbre.component.ts
var _c0 = ["treeVisual"];
var _c1 = ["treeCanvas"];
function FamilleArbreComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r1.totalPersonnes, " membres \xB7 ", ctx_r1.totalGenerations, " g\xE9n\xE9ration", ctx_r1.totalGenerations > 1 ? "s" : "", " ");
  }
}
function FamilleArbreComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement de l'arbre... ");
    \u0275\u0275elementEnd();
  }
}
function FamilleArbreComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 8);
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
function FamilleArbreComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 8);
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Arbre vide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Aucune personne dans l'arbre familial.");
    \u0275\u0275elementEnd()();
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 51);
    \u0275\u0275listener("error", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_img_5_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(item_r5.p1.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(item_r5.p1), \u0275\u0275sanitizeUrl)("alt", ctx_r1.getInitiales(item_r5.p1));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitiales(item_r5.p1));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 8);
    \u0275\u0275text(2, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 53);
    \u0275\u0275elementEnd();
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 51);
    \u0275\u0275listener("error", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r5 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(item_r5.p2.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(item_r5.p2), \u0275\u0275sanitizeUrl)("alt", ctx_r1.getInitiales(item_r5.p2));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitiales(item_r5.p2));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("mouseenter", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_Template_div_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const item_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showTooltip(item_r5.p2, $event));
    })("mousemove", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_Template_div_mousemove_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.moveTooltip($event));
    })("mouseleave", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.hideTooltip());
    })("click", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetail(item_r5.p2));
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275template(2, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_img_2_Template, 1, 2, "img", 41)(3, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_span_3_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (ctx_r1.selectedPerson == null ? null : ctx_r1.selectedPerson.id) === item_r5.p2.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("male", item_r5.p2.sexe === "M")("female", item_r5.p2.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPhotoUrl(item_r5.p2) && !ctx_r1.failedPhotos.has(item_r5.p2.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getPhotoUrl(item_r5.p2) || ctx_r1.failedPhotos.has(item_r5.p2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r5.p2.prenoms, " ", item_r5.p2.nomUsage ?? item_r5.p2.nomNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.yearLabel(item_r5.p2));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_14_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.extractAnnee(item_r5.union.dateDebut));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 8);
    \u0275\u0275text(2, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_14_ng_container_4_Template, 2, 1, "ng-container", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeLabel(item_r5.union.type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.union.dateDebut);
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 55);
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_1_Template, 1, 0, "div", 37);
    \u0275\u0275elementStart(2, "div", 38)(3, "div", 39);
    \u0275\u0275listener("mouseenter", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_Template_div_mouseenter_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showTooltip(item_r5.p1, $event));
    })("mousemove", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_Template_div_mousemove_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.moveTooltip($event));
    })("mouseleave", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_Template_div_mouseleave_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideTooltip());
    })("click", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetail(item_r5.p1));
    });
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275template(5, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_img_5_Template, 1, 2, "img", 41)(6, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_span_6_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 43)(8, "span", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_12_Template, 4, 0, "div", 46)(13, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_13_Template, 9, 11, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_14_Template, 5, 2, "div", 48)(15, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_div_15_Template, 1, 0, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.parentUnionId);
    \u0275\u0275advance();
    \u0275\u0275classProp("root", item_r5.isRoot)("selected", ctx_r1.selectedPerson && (ctx_r1.selectedPerson.id === item_r5.p1.id || ctx_r1.selectedPerson.id === (item_r5.p2 == null ? null : item_r5.p2.id)));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", (ctx_r1.selectedPerson == null ? null : ctx_r1.selectedPerson.id) === item_r5.p1.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("male", item_r5.p1.sexe === "M")("female", item_r5.p1.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPhotoUrl(item_r5.p1) && !ctx_r1.failedPhotos.has(item_r5.p1.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getPhotoUrl(item_r5.p1) || ctx_r1.failedPhotos.has(item_r5.p1.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r5.p1.prenoms, " ", item_r5.p1.nomUsage ?? item_r5.p1.nomNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.yearLabel(item_r5.p1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.p2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.p2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.union == null ? null : item_r5.union.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.hasChildren);
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 51);
    \u0275\u0275listener("error", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_img_4_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r10);
      const item_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPhotoError(item_r5.p1.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(item_r5.p1), \u0275\u0275sanitizeUrl)("alt", ctx_r1.getInitiales(item_r5.p1));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getInitiales(item_r5.p1));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_div_1_Template, 1, 0, "div", 37);
    \u0275\u0275elementStart(2, "div", 57);
    \u0275\u0275listener("mouseenter", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_Template_div_mouseenter_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showTooltip(item_r5.p1, $event));
    })("mousemove", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_Template_div_mousemove_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.moveTooltip($event));
    })("mouseleave", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_Template_div_mouseleave_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hideTooltip());
    })("click", function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetail(item_r5.p1));
    });
    \u0275\u0275elementStart(3, "div", 40);
    \u0275\u0275template(4, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_img_4_Template, 1, 2, "img", 41)(5, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_span_5_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43)(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.parentUnionId);
    \u0275\u0275advance();
    \u0275\u0275classProp("root", item_r5.isRoot)("active", (ctx_r1.selectedPerson == null ? null : ctx_r1.selectedPerson.id) === item_r5.p1.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("male", item_r5.p1.sexe === "M")("female", item_r5.p1.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPhotoUrl(item_r5.p1) && !ctx_r1.failedPhotos.has(item_r5.p1.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getPhotoUrl(item_r5.p1) || ctx_r1.failedPhotos.has(item_r5.p1.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r5.p1.prenoms, " ", item_r5.p1.nomUsage ?? item_r5.p1.nomNaissance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.yearLabel(item_r5.p1));
  }
}
function FamilleArbreComponent_div_24_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_1_Template, 16, 20, "div", 34)(2, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_div_2_Template, 11, 14, "div", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.type === "union");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.type === "solo");
  }
}
function FamilleArbreComponent_div_24_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275template(5, FamilleArbreComponent_div_24_ng_container_2_ng_container_5_Template, 3, 2, "ng-container", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const gen_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("G\xE9n\xE9ration ", gen_r11.level);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", gen_r11.items);
  }
}
function FamilleArbreComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29, 1);
    \u0275\u0275listener("pointerdown", function FamilleArbreComponent_div_24_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startDrag($event));
    })("pointermove", function FamilleArbreComponent_div_24_Template_div_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drag($event));
    })("pointerup", function FamilleArbreComponent_div_24_Template_div_pointerup_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.endDrag($event));
    })("pointercancel", function FamilleArbreComponent_div_24_Template_div_pointercancel_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.endDrag($event));
    });
    \u0275\u0275template(2, FamilleArbreComponent_div_24_ng_container_2_Template, 6, 2, "ng-container", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", ctx_r1.treeTransform);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.generations);
  }
}
function FamilleArbreComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 8);
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ctrl + molette pour zoomer \xB7 Glisser pour naviguer \xB7 Clic pour la fiche ");
    \u0275\u0275elementEnd();
  }
}
function FamilleArbreComponent_div_26_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 71);
    \u0275\u0275listener("error", function FamilleArbreComponent_div_26_img_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r12);
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
function FamilleArbreComponent_div_26_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitiales(ctx_r1.hoveredPerson), " ");
  }
}
function FamilleArbreComponent_div_26_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72)(1, "span", 8);
    \u0275\u0275text(2, "hourglass_bottom");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.tooltipAge(ctx_r1.hoveredPerson), " ");
  }
}
function FamilleArbreComponent_div_26_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "span", 8);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hoveredPerson.lieuNaissance, " ");
  }
}
function FamilleArbreComponent_div_26_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleArbreComponent_div_26_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleArbreComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275template(2, FamilleArbreComponent_div_26_img_2_Template, 1, 1, "img", 61)(3, FamilleArbreComponent_div_26_span_3_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62)(5, "span", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FamilleArbreComponent_div_26_span_7_Template, 4, 1, "span", 64)(8, FamilleArbreComponent_div_26_span_8_Template, 4, 1, "span", 65);
    \u0275\u0275elementStart(9, "div", 66)(10, "span", 67);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FamilleArbreComponent_div_26_span_12_Template, 2, 0, "span", 68)(13, FamilleArbreComponent_div_26_span_13_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 70);
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
    \u0275\u0275classProp("fa-tt-m", ctx_r1.hoveredPerson.sexe === "M")("fa-tt-f", ctx_r1.hoveredPerson.sexe === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.hoveredPerson.sexe === "M" ? "Homme" : ctx_r1.hoveredPerson.sexe === "F" ? "Femme" : "Autre", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estVivant(ctx_r1.hoveredPerson));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.estVivant(ctx_r1.hoveredPerson));
  }
}
function FamilleArbreComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275listener("click", function FamilleArbreComponent_div_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function FamilleArbreComponent_div_35_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 88);
    \u0275\u0275listener("error", function FamilleArbreComponent_div_35_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r14);
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
function FamilleArbreComponent_div_35_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitiales(ctx_r1.selectedPerson), " ");
  }
}
function FamilleArbreComponent_div_35_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "Vivant(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleArbreComponent_div_35_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "D\xE9c\xE9d\xE9(e)");
    \u0275\u0275elementEnd();
  }
}
function FamilleArbreComponent_div_35_div_13_span_8_Template(rf, ctx) {
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
function FamilleArbreComponent_div_35_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 8);
    \u0275\u0275text(2, "cake");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92)(4, "span", 93);
    \u0275\u0275text(5, "Naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 94);
    \u0275\u0275text(7);
    \u0275\u0275template(8, FamilleArbreComponent_div_35_div_13_span_8_Template, 2, 1, "span", 42);
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
function FamilleArbreComponent_div_35_div_14_span_8_Template(rf, ctx) {
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
function FamilleArbreComponent_div_35_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 8);
    \u0275\u0275text(2, "sentiment_very_dissatisfied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92)(4, "span", 93);
    \u0275\u0275text(5, "D\xE9c\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 94);
    \u0275\u0275text(7);
    \u0275\u0275template(8, FamilleArbreComponent_div_35_div_14_span_8_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedPerson.dateDeces ?? "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPerson.lieuDeces);
  }
}
function FamilleArbreComponent_div_35_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 8);
    \u0275\u0275text(2, "hourglass_bottom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92)(4, "span", 93);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 94);
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
function FamilleArbreComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 79);
    \u0275\u0275template(3, FamilleArbreComponent_div_35_img_3_Template, 1, 1, "img", 80)(4, FamilleArbreComponent_div_35_span_4_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 81);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 82)(8, "span", 83);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FamilleArbreComponent_div_35_span_10_Template, 2, 0, "span", 84)(11, FamilleArbreComponent_div_35_span_11_Template, 2, 0, "span", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 86);
    \u0275\u0275template(13, FamilleArbreComponent_div_35_div_13_Template, 9, 2, "div", 87)(14, FamilleArbreComponent_div_35_div_14_Template, 9, 2, "div", 87)(15, FamilleArbreComponent_div_35_div_15_Template, 8, 2, "div", 87);
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
    \u0275\u0275classProp("fm-badge-male", ctx_r1.selectedPerson.sexe === "M")("fm-badge-female", ctx_r1.selectedPerson.sexe === "F");
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
  }
}
var FamilleArbreComponent = class _FamilleArbreComponent {
  api;
  loading = true;
  erreur = null;
  generations = [];
  treeVisual;
  treeCanvas;
  getInitiales = getInitiales;
  extractAnnee = extractAnnee;
  estVivant = estVivant;
  getNomComplet = getNomComplet;
  getAgeLabel = getAgeLabel;
  getPhotoUrl = getPhotoUrl;
  totalPersonnes = 0;
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
  selectedPerson = null;
  showDetail = false;
  failedPhotos = /* @__PURE__ */ new Set();
  hoveredPerson = null;
  tooltipX = 0;
  tooltipY = 0;
  tooltipHideTimer = null;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions: this.api.getUnions()
    }).subscribe({
      next: ({ personnes, unions }) => {
        this.totalPersonnes = personnes.length;
        this.generations = this.buildGenerations(personnes, unions);
        this.loading = false;
      },
      error: () => {
        this.erreur = "Impossible de charger l'arbre.";
        this.loading = false;
      }
    });
  }
  get totalGenerations() {
    return this.generations.length;
  }
  get treeTransform() {
    return `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
  }
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
  // ── Tooltip ───────────────────────────────────────────
  showTooltip(p, event) {
    if (this.dragMoved)
      return;
    clearTimeout(this.tooltipHideTimer);
    this.hoveredPerson = p;
    this.repositionTooltip(event);
  }
  moveTooltip(event) {
    if (!this.hoveredPerson)
      return;
    this.repositionTooltip(event);
  }
  hideTooltip() {
    this.tooltipHideTimer = setTimeout(() => {
      this.hoveredPerson = null;
    }, 120);
  }
  repositionTooltip(event) {
    const offset = 14;
    const tw = 240;
    const left = event.clientX + offset + tw > window.innerWidth ? event.clientX - tw - offset : event.clientX + offset;
    this.tooltipX = left;
    this.tooltipY = event.clientY - 10;
  }
  tooltipAge(p) {
    const n = extractAnnee(p.dateNaissance);
    if (!n)
      return "";
    if (!estVivant(p)) {
      const d = extractAnnee(p.dateDeces);
      const age = d ? d - n : null;
      return `${n} \u2013 ${d ?? "?"}${age ? "  (" + age + " ans)" : ""}`;
    }
    return `${n} \u2013 pr\xE9sent  (${(/* @__PURE__ */ new Date()).getFullYear() - n} ans)`;
  }
  // ── Zoom ─────────────────────────────────────────────
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
    const oldScale = this.scale;
    const clamped = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
    const ratio = clamped / oldScale;
    this.translateX = originX - ratio * (originX - this.translateX);
    this.translateY = originY - ratio * (originY - this.translateY);
    this.scale = clamped;
  }
  updateScale(newScale) {
    this.scale = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
  }
  // ── Interactions canvas ──────────────────────────────
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
  // ── Construction par génération ──────────────────────
  buildGenerations(personnes, unions) {
    const genMap = /* @__PURE__ */ new Map();
    const parentUnionMap = /* @__PURE__ */ new Map();
    for (const u of unions) {
      for (const f of u.filiations)
        parentUnionMap.set(f.enfantId, u.id);
    }
    const isChild = new Set(unions.flatMap((u) => u.filiations.map((f) => f.enfantId)));
    const personUnions = /* @__PURE__ */ new Map();
    for (const u of unions) {
      for (const p of u.participants) {
        const list = personUnions.get(p.personneId) ?? [];
        list.push(u);
        personUnions.set(p.personneId, list);
      }
    }
    const roots = personnes.filter((p) => !isChild.has(p.id));
    const queue = roots.map((p) => ({ id: p.id, gen: 0 }));
    while (queue.length > 0) {
      const { id, gen } = queue.shift();
      const prev = genMap.get(id) ?? -1;
      if (gen <= prev)
        continue;
      genMap.set(id, gen);
      for (const u of personUnions.get(id) ?? []) {
        for (const p of u.participants) {
          if (p.personneId !== id && (genMap.get(p.personneId) ?? -1) < gen) {
            queue.push({ id: p.personneId, gen });
          }
        }
        for (const f of u.filiations) {
          if ((genMap.get(f.enfantId) ?? -1) < gen + 1) {
            queue.push({ id: f.enfantId, gen: gen + 1 });
          }
        }
      }
    }
    for (const p of personnes) {
      if (!genMap.has(p.id))
        genMap.set(p.id, 0);
    }
    let changed = true;
    while (changed) {
      changed = false;
      for (const u of unions) {
        const gens = u.participants.map((p) => genMap.get(p.personneId) ?? 0);
        const maxG = Math.max(...gens);
        for (const p of u.participants) {
          if ((genMap.get(p.personneId) ?? 0) < maxG) {
            genMap.set(p.personneId, maxG);
            changed = true;
          }
        }
      }
    }
    const maxGen = Math.max(...genMap.values(), 0);
    const rows = [];
    const rootSet = new Set(roots.map((p) => p.id));
    for (let g = 0; g <= maxGen; g++) {
      const personsAtGen = personnes.filter((p) => genMap.get(p.id) === g);
      const unionsAtGen = unions.filter((u) => u.participants.length > 0 && u.participants.every((p) => genMap.get(p.personneId) === g));
      const inUnion = /* @__PURE__ */ new Set();
      const items = [];
      for (const u of unionsAtGen) {
        const p1 = u.participants.find((p) => p.ordre === 0)?.personne;
        const p2 = u.participants.find((p) => p.ordre === 1)?.personne;
        if (!p1)
          continue;
        inUnion.add(p1.id);
        if (p2)
          inUnion.add(p2.id);
        items.push({
          type: "union",
          p1,
          p2,
          union: u,
          isRoot: rootSet.has(p1.id) || (p2 ? rootSet.has(p2.id) : false),
          hasChildren: u.filiations.length > 0,
          parentUnionId: parentUnionMap.get(p1.id) ?? (p2 ? parentUnionMap.get(p2.id) : void 0)
        });
      }
      for (const p of personsAtGen) {
        if (!inUnion.has(p.id)) {
          items.push({
            type: "solo",
            p1: p,
            isRoot: rootSet.has(p.id),
            hasChildren: false,
            parentUnionId: parentUnionMap.get(p.id)
          });
        }
      }
      if (items.length > 0)
        rows.push({ level: g + 1, items });
    }
    return rows;
  }
  static \u0275fac = function FamilleArbreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleArbreComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FamilleArbreComponent, selectors: [["app-famille-arbre"]], viewQuery: function FamilleArbreComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeVisual = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeCanvas = _t.first);
    }
  }, standalone: false, decls: 36, vars: 15, consts: [["treeCanvas", ""], ["treeVisual", ""], [1, "fa-page"], [1, "fa-toolbar"], [1, "fa-toolbar-left"], ["class", "badge badge-primary", 4, "ngIf"], [1, "fa-toolbar-right"], ["type", "button", "title", "D\xE9zoomer", 1, "btn-ghost", "btn-sm", 3, "click"], [1, "material-icons-round"], [1, "fa-zoom-level"], ["type", "button", "title", "Zoomer", 1, "btn-ghost", "btn-sm", 3, "click"], ["type", "button", "title", "R\xE9initialiser", 1, "btn-ghost", "btn-sm", 3, "click"], [1, "fa-canvas", 3, "wheel"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "fa-visual", 3, "transform", "pointerdown", "pointermove", "pointerup", "pointercancel", 4, "ngIf"], ["class", "fa-zoom-hint", 4, "ngIf"], ["class", "fa-tooltip", 3, "left", "top", 4, "ngIf"], ["class", "fa-overlay", 3, "click", 4, "ngIf"], [1, "fa-detail-panel"], [1, "fa-dp-header"], [1, "btn-icon", 3, "click"], ["class", "fa-dp-body", 4, "ngIf"], [1, "badge", "badge-primary"], [1, "loading-state"], [1, "material-icons-round", "spin"], [1, "error-state"], [1, "empty-state"], [1, "fa-visual", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], [4, "ngFor", "ngForOf"], [1, "fa-generation"], [1, "fa-gen-label"], [1, "fa-gen-row"], ["class", "fa-union-group", 4, "ngIf"], ["class", "fa-solo-group", 4, "ngIf"], [1, "fa-union-group"], ["class", "fa-up-connector", 4, "ngIf"], [1, "fa-couple-wrap"], [1, "fa-node", 3, "mouseenter", "mousemove", "mouseleave", "click"], [1, "fa-avatar"], ["class", "fa-avatar-photo", 3, "src", "alt", "error", 4, "ngIf"], [4, "ngIf"], [1, "fa-node-info"], [1, "fa-node-name"], [1, "fa-node-year"], ["class", "fa-heart-connector", 4, "ngIf"], ["class", "fa-node", 3, "active", "mouseenter", "mousemove", "mouseleave", "click", 4, "ngIf"], ["class", "fa-union-badge", 4, "ngIf"], ["class", "fa-down-connector", 4, "ngIf"], [1, "fa-up-connector"], [1, "fa-avatar-photo", 3, "error", "src", "alt"], [1, "fa-heart-connector"], [1, "fa-hline"], [1, "fa-union-badge"], [1, "fa-down-connector"], [1, "fa-solo-group"], [1, "fa-node", "fa-node-solo", 3, "mouseenter", "mousemove", "mouseleave", "click"], [1, "fa-zoom-hint"], [1, "fa-tooltip"], [1, "fa-tt-avatar"], ["class", "fa-tt-avatar-photo", 3, "src", "error", 4, "ngIf"], [1, "fa-tt-content"], [1, "fa-tt-name"], ["class", "fa-tt-dates", 4, "ngIf"], ["class", "fa-tt-lieu", 4, "ngIf"], [1, "fa-tt-badges"], [1, "fa-tt-badge"], ["class", "fa-tt-badge fa-tt-alive", 4, "ngIf"], ["class", "fa-tt-badge fa-tt-dead", 4, "ngIf"], [1, "fa-tt-hint"], [1, "fa-tt-avatar-photo", 3, "error", "src"], [1, "fa-tt-dates"], [1, "fa-tt-lieu"], [1, "fa-tt-badge", "fa-tt-alive"], [1, "fa-tt-badge", "fa-tt-dead"], [1, "fa-overlay", 3, "click"], [1, "fa-dp-body"], [1, "fa-dp-avatar-wrap"], [1, "fa-dp-avatar"], ["class", "fa-dp-avatar-photo", 3, "src", "error", 4, "ngIf"], [1, "fa-dp-name"], [1, "fa-dp-badges"], [1, "fm-badge"], ["class", "fm-badge fm-badge-alive", 4, "ngIf"], ["class", "fm-badge fm-badge-dead", 4, "ngIf"], [1, "fa-dp-info-list"], ["class", "fa-dp-info-item", 4, "ngIf"], [1, "fa-dp-avatar-photo", 3, "error", "src"], [1, "fm-badge", "fm-badge-alive"], [1, "fm-badge", "fm-badge-dead"], [1, "fa-dp-info-item"], [1, "fa-dp-info-text"], [1, "fa-dp-info-label"], [1, "fa-dp-info-value"]], template: function FamilleArbreComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h2");
      \u0275\u0275text(4, "Arbre g\xE9n\xE9alogique");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, FamilleArbreComponent_span_5_Template, 2, 3, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
      \u0275\u0275listener("click", function FamilleArbreComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomOut());
      });
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9, "zoom_out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 10);
      \u0275\u0275listener("click", function FamilleArbreComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.zoomIn());
      });
      \u0275\u0275elementStart(14, "span", 8);
      \u0275\u0275text(15, "zoom_in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275listener("click", function FamilleArbreComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetView());
      });
      \u0275\u0275elementStart(17, "span", 8);
      \u0275\u0275text(18, "refresh");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 12, 0);
      \u0275\u0275listener("wheel", function FamilleArbreComponent_Template_div_wheel_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWheel($event));
      });
      \u0275\u0275template(21, FamilleArbreComponent_div_21_Template, 4, 0, "div", 13)(22, FamilleArbreComponent_div_22_Template, 4, 1, "div", 14)(23, FamilleArbreComponent_div_23_Template, 7, 0, "div", 15)(24, FamilleArbreComponent_div_24_Template, 3, 3, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, FamilleArbreComponent_div_25_Template, 4, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, FamilleArbreComponent_div_26_Template, 16, 20, "div", 18)(27, FamilleArbreComponent_div_27_Template, 1, 0, "div", 19);
      \u0275\u0275elementStart(28, "div", 20)(29, "div", 21)(30, "h3");
      \u0275\u0275text(31, "Fiche membre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 22);
      \u0275\u0275listener("click", function FamilleArbreComponent_Template_button_click_32_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDetail());
      });
      \u0275\u0275elementStart(33, "span", 8);
      \u0275\u0275text(34, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, FamilleArbreComponent_div_35_Template, 16, 17, "div", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 12, ctx.scale * 100, "1.0-0"), "%");
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.erreur);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.generations.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.erreur && ctx.generations.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.generations.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hoveredPerson);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetail);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showDetail);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.selectedPerson);
    }
  }, dependencies: [NgForOf, NgIf, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n\n.fa-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 0;\n}\n.fa-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 24px;\n  background: var(--white);\n  border-bottom: 1px solid var(--border);\n  gap: 16px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.fa-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n  white-space: nowrap;\n  color: #1F2937;\n}\n.fa-toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.fa-toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.fa-zoom-level[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #7C3AED;\n  min-width: 38px;\n  text-align: center;\n}\n.fa-canvas[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #F5F3FF;\n  background-image:\n    radial-gradient(\n      circle,\n      #DDD6FE 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 24px;\n  position: relative;\n}\n.fa-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n  min-width: 500px;\n  transition: transform 0.15s ease;\n  transform-origin: top center;\n  cursor: grab;\n  touch-action: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.fa-visual[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.fa-generation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.fa-gen-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #7C3AED;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: #fff;\n  padding: 3px 10px;\n  border-radius: 30px;\n  border: 1px solid #DDD6FE;\n}\n.fa-gen-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n.fa-down-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      #A78BFA,\n      #7C3AED);\n  margin-top: 2px;\n  border-radius: 2px;\n}\n.fa-up-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      #7C3AED,\n      #A78BFA);\n  margin-bottom: 2px;\n  border-radius: 2px;\n}\n.fa-generation[_ngcontent-%COMP%]    + .fa-generation[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.fa-union-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n}\n.fa-solo-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.fa-couple-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  background: #fff;\n  border: 2px solid #DDD6FE;\n  border-radius: 20px;\n  padding: 10px 14px;\n  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);\n  transition: all 0.2s;\n}\n.fa-couple-wrap.root[_ngcontent-%COMP%] {\n  border-color: #7C3AED;\n  background: #F5F3FF;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.2);\n}\n.fa-couple-wrap.selected[_ngcontent-%COMP%] {\n  border-color: #7C3AED;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.25);\n}\n.fa-couple-wrap[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.18);\n  transform: translateY(-2px);\n}\n.fa-heart-connector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2px;\n  align-self: center;\n  gap: 4px;\n}\n.fa-heart-connector[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #F43F5E;\n}\n.fa-heart-connector[_ngcontent-%COMP%]   .fa-hline[_ngcontent-%COMP%] {\n  display: block;\n  width: 16px;\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      #DDD6FE,\n      #F43F5E,\n      #DDD6FE);\n  border-radius: 2px;\n}\n.fa-union-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #fff;\n  border: 1px solid #DDD6FE;\n  border-radius: 30px;\n  padding: 2px 10px;\n  font-size: 10px;\n  font-weight: 600;\n  color: #7C3AED;\n  margin-top: 6px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.fa-union-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #F43F5E;\n}\n.fa-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.fa-node[_ngcontent-%COMP%]:hover {\n  background: rgba(124, 58, 237, 0.06);\n}\n.fa-node.active[_ngcontent-%COMP%] {\n  background: #F5F3FF;\n}\n.fa-node.fa-node-solo[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 16px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n}\n.fa-node.fa-node-solo.root[_ngcontent-%COMP%] {\n  border-color: #7C3AED;\n  background: #F5F3FF;\n}\n.fa-node.fa-node-solo[_ngcontent-%COMP%]:hover {\n  border-color: #A78BFA;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.15);\n  transform: translateY(-2px);\n}\n.fa-node.fa-node-solo.active[_ngcontent-%COMP%] {\n  border-color: #7C3AED;\n  background: #F5F3FF;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.25);\n}\n.fa-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n  flex-shrink: 0;\n  position: relative;\n  overflow: hidden;\n}\n.fa-avatar.male[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n}\n.fa-avatar.female[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n}\n.fa-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.fa-avatar-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  border-radius: 14px;\n  z-index: 2;\n}\n.fa-node-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.fa-node-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1F2937;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fa-node-year[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9CA3AF;\n}\n.fa-zoom-hint[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(15, 23, 42, 0.7);\n  color: #fff;\n  font-size: 12px;\n  padding: 6px 14px;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  pointer-events: none;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 10;\n}\n.fa-zoom-hint[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.fa-tooltip[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 500;\n  pointer-events: none;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid #DDD6FE;\n  border-radius: 14px;\n  padding: 12px 14px;\n  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.14), 0 2px 8px rgba(15, 23, 42, 0.08);\n  min-width: 220px;\n  max-width: 280px;\n  animation: _ngcontent-%COMP%_fa-tt-in 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_fa-tt-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fa-tt-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n}\n.fa-tt-avatar.male[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n}\n.fa-tt-avatar.female[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n}\n.fa-tt-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.fa-tt-avatar-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  border-radius: 14px;\n  z-index: 2;\n}\n.fa-tt-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n  flex: 1;\n}\n.fa-tt-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1F2937;\n  line-height: 1.3;\n  word-break: break-word;\n}\n.fa-tt-dates[_ngcontent-%COMP%], \n.fa-tt-lieu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #6B7280;\n}\n.fa-tt-dates[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%], \n.fa-tt-lieu[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: #9CA3AF;\n  flex-shrink: 0;\n}\n.fa-tt-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  margin-top: 2px;\n}\n.fa-tt-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 1px 7px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  background: #F3F4F6;\n  color: #6B7280;\n}\n.fa-tt-badge.fa-tt-m[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.fa-tt-badge.fa-tt-f[_ngcontent-%COMP%] {\n  background: #FDF2F8;\n  color: #DB2777;\n}\n.fa-tt-badge.fa-tt-alive[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16a34a;\n}\n.fa-tt-badge.fa-tt-dead[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #64748b;\n}\n.fa-tt-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9CA3AF;\n  margin-top: 4px;\n  font-style: italic;\n}\n.fa-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.fa-detail-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 360px;\n  height: 100vh;\n  background: #fff;\n  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.fa-detail-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.fa-dp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #F0F4FF;\n  flex-shrink: 0;\n}\n.fa-dp-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n  color: #1F2937;\n}\n.fa-dp-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 28px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.fa-dp-avatar-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.fa-dp-avatar[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);\n}\n.fa-dp-avatar.male[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);\n}\n.fa-dp-avatar.female[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.25);\n}\n.fa-dp-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.fa-dp-avatar-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  z-index: 2;\n}\n.fa-dp-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  text-align: center;\n  margin: 0;\n  line-height: 1.3;\n}\n.fa-dp-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.fa-dp-info-list[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.fa-dp-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #F0F4FF;\n}\n.fa-dp-info-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.fa-dp-info-item[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #7C3AED;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.fa-dp-info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fa-dp-info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #9CA3AF;\n}\n.fa-dp-info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1F2937;\n  font-weight: 500;\n}\n@media (max-width: 640px) {\n  .fa-toolbar[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .fa-detail-panel[_ngcontent-%COMP%] {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 85vh;\n    transform: translateY(100%);\n  }\n  .fa-detail-panel.open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n  .fa-zoom-hint[_ngcontent-%COMP%] {\n    bottom: 8px;\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n}\n/*# sourceMappingURL=famille-arbre.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleArbreComponent, [{
    type: Component,
    args: [{ selector: "app-famille-arbre", standalone: false, template: `<div class="fa-page">

  <!-- TOOLBAR -->
  <div class="fa-toolbar">
    <div class="fa-toolbar-left">
      <h2>Arbre g\xE9n\xE9alogique</h2>
      <span class="badge badge-primary" *ngIf="!loading">
        {{ totalPersonnes }} membres \xB7 {{ totalGenerations }} g\xE9n\xE9ration{{ totalGenerations > 1 ? 's' : '' }}
      </span>
    </div>
    <div class="fa-toolbar-right">
      <button class="btn-ghost btn-sm" type="button" (click)="zoomOut()" title="D\xE9zoomer">
        <span class="material-icons-round">zoom_out</span>
      </button>
      <span class="fa-zoom-level">{{ (scale * 100) | number:'1.0-0' }}%</span>
      <button class="btn-ghost btn-sm" type="button" (click)="zoomIn()" title="Zoomer">
        <span class="material-icons-round">zoom_in</span>
      </button>
      <button class="btn-ghost btn-sm" type="button" (click)="resetView()" title="R\xE9initialiser">
        <span class="material-icons-round">refresh</span>
      </button>
    </div>
  </div>

  <!-- CANVAS -->
  <div class="fa-canvas" #treeCanvas (wheel)="onWheel($event)">

    <div class="loading-state" *ngIf="loading">
      <span class="material-icons-round spin">sync</span>
      Chargement de l'arbre...
    </div>

    <div class="error-state" *ngIf="erreur">
      <span class="material-icons-round">error_outline</span>{{ erreur }}
    </div>

    <div class="empty-state" *ngIf="!loading && !erreur && generations.length === 0">
      <span class="material-icons-round">account_tree</span>
      <h3>Arbre vide</h3>
      <p>Aucune personne dans l'arbre familial.</p>
    </div>

    <div
      class="fa-visual"
      #treeVisual
      *ngIf="!loading && !erreur && generations.length > 0"
      [style.transform]="treeTransform"
      (pointerdown)="startDrag($event)"
      (pointermove)="drag($event)"
      (pointerup)="endDrag($event)"
      (pointercancel)="endDrag($event)">

      <ng-container *ngFor="let gen of generations">
        <div class="fa-generation">
          <div class="fa-gen-label">G\xE9n\xE9ration {{ gen.level }}</div>

          <div class="fa-gen-row">
            <ng-container *ngFor="let item of gen.items">

              <!-- \u2500\u2500 UNION \u2500\u2500 -->
              <div class="fa-union-group" *ngIf="item.type === 'union'">

                <div class="fa-up-connector" *ngIf="item.parentUnionId"></div>

                <div class="fa-couple-wrap" [class.root]="item.isRoot"
                     [class.selected]="selectedPerson && (selectedPerson.id === item.p1.id || selectedPerson.id === item.p2?.id)">

                  <!-- Personne 1 -->
                  <div class="fa-node"
                       [class.active]="selectedPerson?.id === item.p1.id"
                       (mouseenter)="showTooltip(item.p1, $event)"
                       (mousemove)="moveTooltip($event)"
                       (mouseleave)="hideTooltip()"
                       (click)="openDetail(item.p1)">
                    <div class="fa-avatar" [class.male]="item.p1.sexe==='M'" [class.female]="item.p1.sexe==='F'">
                      <img *ngIf="getPhotoUrl(item.p1) && !failedPhotos.has(item.p1.id)"
                           [src]="getPhotoUrl(item.p1)!" class="fa-avatar-photo"
                           [alt]="getInitiales(item.p1)" (error)="onPhotoError(item.p1.id)" />
                      <span *ngIf="!getPhotoUrl(item.p1) || failedPhotos.has(item.p1.id)">{{ getInitiales(item.p1) }}</span>
                    </div>
                    <div class="fa-node-info">
                      <span class="fa-node-name">{{ item.p1.prenoms }} {{ item.p1.nomUsage ?? item.p1.nomNaissance }}</span>
                      <span class="fa-node-year">{{ yearLabel(item.p1) }}</span>
                    </div>
                  </div>

                  <!-- C\u0153ur -->
                  <div class="fa-heart-connector" *ngIf="item.p2">
                    <span class="material-icons-round">favorite</span>
                    <span class="fa-hline"></span>
                  </div>

                  <!-- Personne 2 -->
                  <div class="fa-node" *ngIf="item.p2"
                       [class.active]="selectedPerson?.id === item.p2!.id"
                       (mouseenter)="showTooltip(item.p2!, $event)"
                       (mousemove)="moveTooltip($event)"
                       (mouseleave)="hideTooltip()"
                       (click)="openDetail(item.p2!)">
                    <div class="fa-avatar" [class.male]="item.p2!.sexe==='M'" [class.female]="item.p2!.sexe==='F'">
                      <img *ngIf="getPhotoUrl(item.p2!) && !failedPhotos.has(item.p2!.id)"
                           [src]="getPhotoUrl(item.p2!)!" class="fa-avatar-photo"
                           [alt]="getInitiales(item.p2!)" (error)="onPhotoError(item.p2!.id)" />
                      <span *ngIf="!getPhotoUrl(item.p2!) || failedPhotos.has(item.p2!.id)">{{ getInitiales(item.p2!) }}</span>
                    </div>
                    <div class="fa-node-info">
                      <span class="fa-node-name">{{ item.p2!.prenoms }} {{ item.p2!.nomUsage ?? item.p2!.nomNaissance }}</span>
                      <span class="fa-node-year">{{ yearLabel(item.p2!) }}</span>
                    </div>
                  </div>
                </div>

                <!-- Badge union -->
                <div class="fa-union-badge" *ngIf="item.union?.type">
                  <span class="material-icons-round">favorite_border</span>
                  {{ typeLabel(item.union!.type) }}
                  <ng-container *ngIf="item.union!.dateDebut"> \xB7 {{ extractAnnee(item.union!.dateDebut) }}</ng-container>
                </div>

                <div class="fa-down-connector" *ngIf="item.hasChildren"></div>
              </div>

              <!-- \u2500\u2500 SOLO \u2500\u2500 -->
              <div class="fa-solo-group" *ngIf="item.type === 'solo'">
                <div class="fa-up-connector" *ngIf="item.parentUnionId"></div>
                <div class="fa-node fa-node-solo"
                     [class.root]="item.isRoot"
                     [class.active]="selectedPerson?.id === item.p1.id"
                     (mouseenter)="showTooltip(item.p1, $event)"
                     (mousemove)="moveTooltip($event)"
                     (mouseleave)="hideTooltip()"
                     (click)="openDetail(item.p1)">
                  <div class="fa-avatar" [class.male]="item.p1.sexe==='M'" [class.female]="item.p1.sexe==='F'">
                    <img *ngIf="getPhotoUrl(item.p1) && !failedPhotos.has(item.p1.id)"
                         [src]="getPhotoUrl(item.p1)!" class="fa-avatar-photo"
                         [alt]="getInitiales(item.p1)" (error)="onPhotoError(item.p1.id)" />
                    <span *ngIf="!getPhotoUrl(item.p1) || failedPhotos.has(item.p1.id)">{{ getInitiales(item.p1) }}</span>
                  </div>
                  <div class="fa-node-info">
                    <span class="fa-node-name">{{ item.p1.prenoms }} {{ item.p1.nomUsage ?? item.p1.nomNaissance }}</span>
                    <span class="fa-node-year">{{ yearLabel(item.p1) }}</span>
                  </div>
                </div>
              </div>

            </ng-container>
          </div>
        </div>
      </ng-container>
    </div>

  </div>

  <!-- Hint -->
  <div class="fa-zoom-hint" *ngIf="!loading && generations.length > 0">
    <span class="material-icons-round">info_outline</span>
    Ctrl + molette pour zoomer \xB7 Glisser pour naviguer \xB7 Clic pour la fiche
  </div>

</div>

<!-- ===== TOOLTIP ===== -->
<div class="fa-tooltip"
     *ngIf="hoveredPerson"
     [style.left.px]="tooltipX"
     [style.top.px]="tooltipY">

  <div class="fa-tt-avatar"
       [class.male]="hoveredPerson.sexe === 'M'"
       [class.female]="hoveredPerson.sexe === 'F'">
    <img *ngIf="getPhotoUrl(hoveredPerson) && !failedPhotos.has(hoveredPerson.id)"
         [src]="getPhotoUrl(hoveredPerson)!" class="fa-tt-avatar-photo"
         (error)="onPhotoError(hoveredPerson.id)" />
    <span *ngIf="!getPhotoUrl(hoveredPerson) || failedPhotos.has(hoveredPerson.id)">
      {{ getInitiales(hoveredPerson) }}
    </span>
  </div>

  <div class="fa-tt-content">
    <span class="fa-tt-name">{{ getNomComplet(hoveredPerson) }}</span>

    <span class="fa-tt-dates" *ngIf="tooltipAge(hoveredPerson)">
      <span class="material-icons-round">hourglass_bottom</span>
      {{ tooltipAge(hoveredPerson) }}
    </span>

    <span class="fa-tt-lieu" *ngIf="hoveredPerson.lieuNaissance">
      <span class="material-icons-round">place</span>
      {{ hoveredPerson.lieuNaissance }}
    </span>

    <div class="fa-tt-badges">
      <span class="fa-tt-badge" [class.fa-tt-m]="hoveredPerson.sexe === 'M'" [class.fa-tt-f]="hoveredPerson.sexe === 'F'">
        {{ hoveredPerson.sexe === 'M' ? 'Homme' : hoveredPerson.sexe === 'F' ? 'Femme' : 'Autre' }}
      </span>
      <span class="fa-tt-badge fa-tt-alive" *ngIf="estVivant(hoveredPerson)">Vivant(e)</span>
      <span class="fa-tt-badge fa-tt-dead"  *ngIf="!estVivant(hoveredPerson)">D\xE9c\xE9d\xE9(e)</span>
    </div>

    <span class="fa-tt-hint">Clic pour la fiche compl\xE8te</span>
  </div>
</div>

<!-- ===== OVERLAY ===== -->
<div class="fa-overlay" *ngIf="showDetail" (click)="closeDetail()"></div>

<!-- ===== PANNEAU D\xC9TAIL ===== -->
<div class="fa-detail-panel" [class.open]="showDetail">
  <div class="fa-dp-header">
    <h3>Fiche membre</h3>
    <button class="btn-icon" (click)="closeDetail()">
      <span class="material-icons-round">close</span>
    </button>
  </div>

  <div class="fa-dp-body" *ngIf="selectedPerson">

    <div class="fa-dp-avatar-wrap">
      <div class="fa-dp-avatar" [class.male]="selectedPerson.sexe === 'M'" [class.female]="selectedPerson.sexe === 'F'">
        <img *ngIf="getPhotoUrl(selectedPerson) && !failedPhotos.has(selectedPerson.id)"
             [src]="getPhotoUrl(selectedPerson)!" class="fa-dp-avatar-photo"
             (error)="onPhotoError(selectedPerson.id)" />
        <span *ngIf="!getPhotoUrl(selectedPerson) || failedPhotos.has(selectedPerson.id)">
          {{ getInitiales(selectedPerson) }}
        </span>
      </div>
    </div>

    <h2 class="fa-dp-name">{{ getNomComplet(selectedPerson) }}</h2>

    <div class="fa-dp-badges">
      <span class="fm-badge" [class.fm-badge-male]="selectedPerson.sexe === 'M'" [class.fm-badge-female]="selectedPerson.sexe === 'F'">
        {{ selectedPerson.sexe === 'M' ? 'Homme' : selectedPerson.sexe === 'F' ? 'Femme' : 'Autre' }}
      </span>
      <span class="fm-badge fm-badge-alive" *ngIf="estVivant(selectedPerson)">Vivant(e)</span>
      <span class="fm-badge fm-badge-dead"  *ngIf="!estVivant(selectedPerson)">D\xE9c\xE9d\xE9(e)</span>
    </div>

    <div class="fa-dp-info-list">
      <div class="fa-dp-info-item" *ngIf="selectedPerson.dateNaissance || selectedPerson.lieuNaissance">
        <span class="material-icons-round">cake</span>
        <div class="fa-dp-info-text">
          <span class="fa-dp-info-label">Naissance</span>
          <span class="fa-dp-info-value">
            {{ selectedPerson.dateNaissance ?? '\u2014' }}
            <span *ngIf="selectedPerson.lieuNaissance"> \xB7 {{ selectedPerson.lieuNaissance }}</span>
          </span>
        </div>
      </div>

      <div class="fa-dp-info-item" *ngIf="!estVivant(selectedPerson)">
        <span class="material-icons-round">sentiment_very_dissatisfied</span>
        <div class="fa-dp-info-text">
          <span class="fa-dp-info-label">D\xE9c\xE8s</span>
          <span class="fa-dp-info-value">
            {{ selectedPerson.dateDeces ?? '\u2014' }}
            <span *ngIf="selectedPerson.lieuDeces"> \xB7 {{ selectedPerson.lieuDeces }}</span>
          </span>
        </div>
      </div>

      <div class="fa-dp-info-item" *ngIf="getAgeLabel(selectedPerson)">
        <span class="material-icons-round">hourglass_bottom</span>
        <div class="fa-dp-info-text">
          <span class="fa-dp-info-label">{{ estVivant(selectedPerson) ? '\xC2ge' : 'Dur\xE9e de vie' }}</span>
          <span class="fa-dp-info-value">{{ getAgeLabel(selectedPerson) }}</span>
        </div>
      </div>
    </div>

  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/famille/pages/arbre/famille-arbre.component.scss */\n.fa-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 0;\n}\n.fa-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 24px;\n  background: var(--white);\n  border-bottom: 1px solid var(--border);\n  gap: 16px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.fa-toolbar h2 {\n  font-size: 18px;\n  margin: 0;\n  white-space: nowrap;\n  color: #1F2937;\n}\n.fa-toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.fa-toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.fa-zoom-level {\n  font-size: 12px;\n  font-weight: 600;\n  color: #7C3AED;\n  min-width: 38px;\n  text-align: center;\n}\n.fa-canvas {\n  flex: 1;\n  background: #F5F3FF;\n  background-image:\n    radial-gradient(\n      circle,\n      #DDD6FE 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 24px;\n  position: relative;\n}\n.fa-visual {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n  min-width: 500px;\n  transition: transform 0.15s ease;\n  transform-origin: top center;\n  cursor: grab;\n  touch-action: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.fa-visual:active {\n  cursor: grabbing;\n}\n.fa-generation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.fa-gen-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #7C3AED;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: #fff;\n  padding: 3px 10px;\n  border-radius: 30px;\n  border: 1px solid #DDD6FE;\n}\n.fa-gen-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n.fa-down-connector {\n  width: 2px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      #A78BFA,\n      #7C3AED);\n  margin-top: 2px;\n  border-radius: 2px;\n}\n.fa-up-connector {\n  width: 2px;\n  height: 40px;\n  background:\n    linear-gradient(\n      to bottom,\n      #7C3AED,\n      #A78BFA);\n  margin-bottom: 2px;\n  border-radius: 2px;\n}\n.fa-generation + .fa-generation {\n  margin-top: 4px;\n}\n.fa-union-group {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0;\n}\n.fa-solo-group {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.fa-couple-wrap {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  background: #fff;\n  border: 2px solid #DDD6FE;\n  border-radius: 20px;\n  padding: 10px 14px;\n  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.1);\n  transition: all 0.2s;\n}\n.fa-couple-wrap.root {\n  border-color: #7C3AED;\n  background: #F5F3FF;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.2);\n}\n.fa-couple-wrap.selected {\n  border-color: #7C3AED;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.25);\n}\n.fa-couple-wrap:hover {\n  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.18);\n  transform: translateY(-2px);\n}\n.fa-heart-connector {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2px;\n  align-self: center;\n  gap: 4px;\n}\n.fa-heart-connector .material-icons-round {\n  font-size: 16px !important;\n  color: #F43F5E;\n}\n.fa-heart-connector .fa-hline {\n  display: block;\n  width: 16px;\n  height: 2px;\n  background:\n    linear-gradient(\n      to right,\n      #DDD6FE,\n      #F43F5E,\n      #DDD6FE);\n  border-radius: 2px;\n}\n.fa-union-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #fff;\n  border: 1px solid #DDD6FE;\n  border-radius: 30px;\n  padding: 2px 10px;\n  font-size: 10px;\n  font-weight: 600;\n  color: #7C3AED;\n  margin-top: 6px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.fa-union-badge .material-icons-round {\n  font-size: 12px !important;\n  color: #F43F5E;\n}\n.fa-node {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.fa-node:hover {\n  background: rgba(124, 58, 237, 0.06);\n}\n.fa-node.active {\n  background: #F5F3FF;\n}\n.fa-node.fa-node-solo {\n  background: #fff;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 16px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n}\n.fa-node.fa-node-solo.root {\n  border-color: #7C3AED;\n  background: #F5F3FF;\n}\n.fa-node.fa-node-solo:hover {\n  border-color: #A78BFA;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.15);\n  transform: translateY(-2px);\n}\n.fa-node.fa-node-solo.active {\n  border-color: #7C3AED;\n  background: #F5F3FF;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.25);\n}\n.fa-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n  flex-shrink: 0;\n  position: relative;\n  overflow: hidden;\n}\n.fa-avatar.male {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n}\n.fa-avatar.female {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n}\n.fa-avatar span {\n  position: relative;\n  z-index: 1;\n}\n.fa-avatar-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  border-radius: 14px;\n  z-index: 2;\n}\n.fa-node-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.fa-node-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1F2937;\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fa-node-year {\n  font-size: 10px;\n  color: #9CA3AF;\n}\n.fa-zoom-hint {\n  position: fixed;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(15, 23, 42, 0.7);\n  color: #fff;\n  font-size: 12px;\n  padding: 6px 14px;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  pointer-events: none;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 10;\n}\n.fa-zoom-hint .material-icons-round {\n  font-size: 14px !important;\n}\n.fa-tooltip {\n  position: fixed;\n  z-index: 500;\n  pointer-events: none;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid #DDD6FE;\n  border-radius: 14px;\n  padding: 12px 14px;\n  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.14), 0 2px 8px rgba(15, 23, 42, 0.08);\n  min-width: 220px;\n  max-width: 280px;\n  animation: fa-tt-in 0.15s ease;\n}\n@keyframes fa-tt-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.fa-tt-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n}\n.fa-tt-avatar.male {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n}\n.fa-tt-avatar.female {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n}\n.fa-tt-avatar span {\n  position: relative;\n  z-index: 1;\n}\n.fa-tt-avatar-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  border-radius: 14px;\n  z-index: 2;\n}\n.fa-tt-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n  flex: 1;\n}\n.fa-tt-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1F2937;\n  line-height: 1.3;\n  word-break: break-word;\n}\n.fa-tt-dates,\n.fa-tt-lieu {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #6B7280;\n}\n.fa-tt-dates .material-icons-round,\n.fa-tt-lieu .material-icons-round {\n  font-size: 13px !important;\n  color: #9CA3AF;\n  flex-shrink: 0;\n}\n.fa-tt-badges {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n  margin-top: 2px;\n}\n.fa-tt-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 1px 7px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  background: #F3F4F6;\n  color: #6B7280;\n}\n.fa-tt-badge.fa-tt-m {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.fa-tt-badge.fa-tt-f {\n  background: #FDF2F8;\n  color: #DB2777;\n}\n.fa-tt-badge.fa-tt-alive {\n  background: #F0FDF4;\n  color: #16a34a;\n}\n.fa-tt-badge.fa-tt-dead {\n  background: #F1F5F9;\n  color: #64748b;\n}\n.fa-tt-hint {\n  font-size: 10px;\n  color: #9CA3AF;\n  margin-top: 4px;\n  font-style: italic;\n}\n.fa-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 399;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.fa-detail-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 360px;\n  height: 100vh;\n  background: #fff;\n  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 400;\n  display: flex;\n  flex-direction: column;\n}\n.fa-detail-panel.open {\n  transform: translateX(0);\n}\n.fa-dp-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  border-bottom: 1px solid #F0F4FF;\n  flex-shrink: 0;\n}\n.fa-dp-header h3 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n  color: #1F2937;\n}\n.fa-dp-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 28px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.fa-dp-avatar-wrap {\n  margin-bottom: 4px;\n}\n.fa-dp-avatar {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #8B5CF6,\n      #7C3AED);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);\n}\n.fa-dp-avatar.male {\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #6366F1);\n  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);\n}\n.fa-dp-avatar.female {\n  background:\n    linear-gradient(\n      135deg,\n      #EC4899,\n      #F43F5E);\n  box-shadow: 0 4px 16px rgba(236, 72, 153, 0.25);\n}\n.fa-dp-avatar span {\n  position: relative;\n  z-index: 1;\n}\n.fa-dp-avatar-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center top;\n  z-index: 2;\n}\n.fa-dp-name {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  text-align: center;\n  margin: 0;\n  line-height: 1.3;\n}\n.fa-dp-badges {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.fa-dp-info-list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.fa-dp-info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #F0F4FF;\n}\n.fa-dp-info-item:last-child {\n  border-bottom: none;\n}\n.fa-dp-info-item .material-icons-round {\n  font-size: 18px !important;\n  color: #7C3AED;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.fa-dp-info-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fa-dp-info-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #9CA3AF;\n}\n.fa-dp-info-value {\n  font-size: 14px;\n  color: #1F2937;\n  font-weight: 500;\n}\n@media (max-width: 640px) {\n  .fa-toolbar {\n    padding: 12px 16px;\n  }\n  .fa-detail-panel {\n    width: 100vw;\n    border-radius: 20px 20px 0 0;\n    top: auto;\n    bottom: 0;\n    height: 85vh;\n    transform: translateY(100%);\n  }\n  .fa-detail-panel.open {\n    transform: translateY(0);\n  }\n  .fa-zoom-hint {\n    bottom: 8px;\n    font-size: 11px;\n    padding: 5px 10px;\n  }\n}\n/*# sourceMappingURL=famille-arbre.component.css.map */\n'] }]
  }], () => [{ type: ApiService }], { treeVisual: [{
    type: ViewChild,
    args: ["treeVisual", { static: false }]
  }], treeCanvas: [{
    type: ViewChild,
    args: ["treeCanvas", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FamilleArbreComponent, { className: "FamilleArbreComponent", filePath: "src/app/famille/pages/arbre/famille-arbre.component.ts", lineNumber: 28 });
})();

// src/app/famille/pages/timeline/famille-timeline.component.ts
function FamilleTimelineComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function FamilleTimelineComponent_button_8_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtreActif = f_r2.key);
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filtreActif === f_r2.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function FamilleTimelineComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16)(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "span", 11);
    \u0275\u0275text(17, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("right", i_r5 % 2 === 0);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.typeConfig(e_r4.type).color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.typeConfig(e_r4.type).icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r4.date);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.typeConfig(e_r4.type).bg)("color", ctx_r2.typeConfig(e_r4.type).color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.typeConfig(e_r4.type).icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.typeConfig(e_r4.type).label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", e_r4.auteur, " ");
  }
}
function FamilleTimelineComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 11);
    \u0275\u0275text(2, "timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun \xE9v\xE9nement pour ce filtre");
    \u0275\u0275elementEnd()();
  }
}
var FamilleTimelineComponent = class _FamilleTimelineComponent {
  filtreActif = "tous";
  filtres = [
    { key: "tous", label: "Tout", icon: "timeline" },
    { key: "naissance", label: "Naissances", icon: "child_care" },
    { key: "mariage", label: "Mariages", icon: "favorite" },
    { key: "evenement", label: "\xC9v\xE9nements", icon: "celebration" },
    { key: "success", label: "Succ\xE8s", icon: "emoji_events" },
    { key: "voyage", label: "Voyages", icon: "flight" }
  ];
  events = [
    { id: "1", annee: 2025, date: "Mars 2025", type: "naissance", titre: "Naissance de Kadiatou Diallo", description: "La petite Kadiatou est n\xE9e \xE0 Conakry, 3,2kg. Alhamdulillah ! Cinqui\xE8me g\xE9n\xE9ration de notre famille.", auteur: "Oumar Diallo" },
    { id: "2", annee: 2024, date: "D\xE9cembre 2024", type: "mariage", titre: "Mariage d'Ousmane et Hawa", description: "C\xE9l\xE9bration du mariage d'Ousmane Diallo et Hawa Bah \xE0 Dakar. Une union qui rapproche deux grandes familles.", auteur: "Fatoumata Konat\xE9" },
    { id: "3", annee: 2024, date: "Juin 2024", type: "success", titre: "Master de Seydou Bald\xE9", description: "Seydou a obtenu son Master en Informatique mention Tr\xE8s Bien \xE0 l'Universit\xE9 de Paris. Fiert\xE9 de toute la famille.", auteur: "Mamadou Kouyat\xE9" },
    { id: "4", annee: 2023, date: "Ao\xFBt 2023", type: "evenement", titre: "R\xE9union de famille \xE0 Lab\xE9", description: "Plus de 80 membres r\xE9unis pour la grande r\xE9union annuelle dans notre village ancestral de Lab\xE9, en Guin\xE9e.", auteur: "Ibrahim Diallo" },
    { id: "5", annee: 2023, date: "F\xE9vrier 2023", type: "naissance", titre: "Naissance des jumeaux Konat\xE9", description: "Isma\xEFla et Mamadou, les jumeaux de Fatoumata, sont n\xE9s le m\xEAme jour que leur arri\xE8re-grand-p\xE8re, 60 ans apr\xE8s.", auteur: "Aminata Camara" },
    { id: "6", annee: 2022, date: "Octobre 2022", type: "voyage", titre: "Voyage aux racines \xE0 Conakry", description: "Dix membres de la famille ont effectu\xE9 un voyage de ressourcement \xE0 Conakry pour retrouver les archives familiales.", auteur: "Mariam Traor\xE9" },
    { id: "7", annee: 2021, date: "Juillet 2021", type: "success", titre: "Promotion de Mamadou Kouyat\xE9", description: "Mamadou devient directeur r\xE9gional d'une grande entreprise mini\xE8re. Premi\xE8re promotion au plus haut niveau.", auteur: "Kadiatou Sow" },
    { id: "8", annee: 2020, date: "Novembre 2020", type: "evenement", titre: "Inauguration de la maison familiale", description: "Inauguration de la nouvelle maison familiale construite \xE0 Conakry. Un lieu de m\xE9moire et de rassemblement.", auteur: "Ibrahim Diallo" },
    { id: "9", annee: 2018, date: "Avril 2018", type: "mariage", titre: "Mariage de Mariam et Sekou", description: "Belle c\xE9r\xE9monie de mariage c\xE9l\xE9br\xE9e en grande pompe \xE0 Bamako. Trois jours de festivit\xE9s inoubliables.", auteur: "Oumar Diallo" },
    { id: "10", annee: 1985, date: "15 Ao\xFBt 1985", type: "evenement", titre: "Grande r\xE9union de l'A\xEFd 1985", description: "La photo historique de la famille r\xE9unie pour l'A\xEFd. 47 personnes sur 4 g\xE9n\xE9rations immortalis\xE9es par grand-p\xE8re.", auteur: "Ibrahim Diallo" }
  ];
  get eventsFiltres() {
    if (this.filtreActif === "tous")
      return this.events;
    return this.events.filter((e) => e.type === this.filtreActif);
  }
  typeConfig(type) {
    const map = {
      naissance: { icon: "child_care", color: "#DB2777", bg: "#FDF2F8", label: "Naissance" },
      mariage: { icon: "favorite", color: "#7C3AED", bg: "#F5F3FF", label: "Mariage" },
      deces: { icon: "hourglass_empty", color: "#6B7280", bg: "#F3F4F6", label: "D\xE9c\xE8s" },
      evenement: { icon: "celebration", color: "#2563EB", bg: "#EFF6FF", label: "\xC9v\xE9nement" },
      success: { icon: "emoji_events", color: "#D97706", bg: "#FFFBEB", label: "Succ\xE8s" },
      voyage: { icon: "flight", color: "#059669", bg: "#ECFDF5", label: "Voyage" }
    };
    return map[type] ?? { icon: "star", color: "#6B7280", bg: "#F3F4F6", label: type };
  }
  static \u0275fac = function FamilleTimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleTimelineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FamilleTimelineComponent, selectors: [["app-famille-timeline"]], standalone: false, decls: 13, vars: 3, consts: [[1, "ft-page"], [1, "ft-header"], [1, "ft-title"], [1, "ft-subtitle"], [1, "ft-filtres"], ["class", "ft-filtre", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "ft-timeline"], [1, "ft-line"], ["class", "ft-event", 3, "right", 4, "ngFor", "ngForOf"], ["class", "ft-empty", 4, "ngIf"], [1, "ft-filtre", 3, "click"], [1, "material-icons-round"], [1, "ft-event"], [1, "ft-event-dot"], [1, "ft-event-card"], [1, "ft-event-date"], [1, "ft-event-type-badge"], [1, "ft-event-title"], [1, "ft-event-desc"], [1, "ft-event-author"], [1, "ft-empty"]], template: function FamilleTimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Ligne du temps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Les grands moments de l'histoire familiale");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275template(8, FamilleTimelineComponent_button_8_Template, 4, 4, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275element(10, "div", 7);
      \u0275\u0275template(11, FamilleTimelineComponent_div_11_Template, 19, 15, "div", 8)(12, FamilleTimelineComponent_div_12_Template, 5, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.filtres);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.eventsFiltres);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.eventsFiltres.length === 0);
    }
  }, dependencies: [NgForOf, NgIf], styles: ["\n\n.ft-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n.ft-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 4px;\n}\n.ft-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 0;\n}\n.ft-filtres[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ft-filtre[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border-radius: 30px;\n  border: 1.5px solid #E5E7EB;\n  background: #fff;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ft-filtre[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.ft-filtre[_ngcontent-%COMP%]:hover {\n  border-color: #A78BFA;\n  color: #7C3AED;\n  background: #F5F3FF;\n}\n.ft-filtre.active[_ngcontent-%COMP%] {\n  background: #1e3a8a;\n  border-color: #1e3a8a;\n  color: #fff;\n}\n.ft-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 0 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.ft-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      #DDD6FE,\n      #BFDBFE,\n      #DDD6FE);\n  transform: translateX(-50%);\n}\n.ft-event[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  position: relative;\n}\n.ft-event[_ngcontent-%COMP%]   .ft-event-card[_ngcontent-%COMP%] {\n  width: calc(50% - 40px);\n  margin-left: auto;\n  margin-right: 40px;\n}\n.ft-event.right[_ngcontent-%COMP%]   .ft-event-card[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: auto;\n  order: 2;\n}\n.ft-event.right[_ngcontent-%COMP%]   .ft-event-dot[_ngcontent-%COMP%] {\n  order: 1;\n}\n.ft-event-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 4px solid #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 2;\n  flex-shrink: 0;\n  top: 12px;\n}\n.ft-event-dot[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #fff;\n}\n.ft-event-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #F0F4FF;\n  padding: 20px 24px;\n  transition: all 0.25s;\n}\n.ft-event-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.07);\n  border-color: #DDD6FE;\n  transform: translateY(-2px);\n}\n.ft-event-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.ft-event-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.ft-event-type-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n.ft-event-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 8px;\n  line-height: 1.3;\n}\n.ft-event-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4B5563;\n  line-height: 1.7;\n  margin: 0 0 12px;\n}\n.ft-event-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9CA3AF;\n}\n.ft-event-author[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.ft-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #9CA3AF;\n  position: relative;\n  z-index: 2;\n}\n.ft-empty[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.4;\n}\n.ft-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .ft-line[_ngcontent-%COMP%] {\n    left: 24px;\n  }\n  .ft-event[_ngcontent-%COMP%], \n   .ft-event.right[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .ft-event[_ngcontent-%COMP%]   .ft-event-card[_ngcontent-%COMP%], \n   .ft-event.right[_ngcontent-%COMP%]   .ft-event-card[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    margin-left: 60px;\n    margin-right: 0;\n    order: 1;\n  }\n  .ft-event[_ngcontent-%COMP%]   .ft-event-dot[_ngcontent-%COMP%], \n   .ft-event.right[_ngcontent-%COMP%]   .ft-event-dot[_ngcontent-%COMP%] {\n    left: 24px;\n    order: 0;\n  }\n}\n/*# sourceMappingURL=famille-timeline.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleTimelineComponent, [{
    type: Component,
    args: [{ selector: "app-famille-timeline", standalone: false, template: `<div class="ft-page">

  <div class="ft-header">
    <div>
      <h2 class="ft-title">Ligne du temps</h2>
      <p class="ft-subtitle">Les grands moments de l'histoire familiale</p>
    </div>
  </div>

  <div class="ft-filtres">
    <button class="ft-filtre" *ngFor="let f of filtres"
            [class.active]="filtreActif === f.key"
            (click)="filtreActif = f.key">
      <span class="material-icons-round">{{ f.icon }}</span>
      {{ f.label }}
    </button>
  </div>

  <div class="ft-timeline">
    <div class="ft-line"></div>

    <div class="ft-event" *ngFor="let e of eventsFiltres; let i = index" [class.right]="i % 2 === 0">
      <div class="ft-event-dot" [style.background]="typeConfig(e.type).color">
        <span class="material-icons-round">{{ typeConfig(e.type).icon }}</span>
      </div>

      <div class="ft-event-card">
        <div class="ft-event-date">{{ e.date }}</div>
        <div class="ft-event-type-badge"
             [style.background]="typeConfig(e.type).bg"
             [style.color]="typeConfig(e.type).color">
          <span class="material-icons-round">{{ typeConfig(e.type).icon }}</span>
          {{ typeConfig(e.type).label }}
        </div>
        <h3 class="ft-event-title">{{ e.titre }}</h3>
        <p class="ft-event-desc">{{ e.description }}</p>
        <div class="ft-event-author">
          <span class="material-icons-round">person</span>
          {{ e.auteur }}
        </div>
      </div>
    </div>

    <div class="ft-empty" *ngIf="eventsFiltres.length === 0">
      <span class="material-icons-round">timeline</span>
      <p>Aucun \xE9v\xE9nement pour ce filtre</p>
    </div>
  </div>

</div>
`, styles: ["/* src/app/famille/pages/timeline/famille-timeline.component.scss */\n.ft-page {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n.ft-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 4px;\n}\n.ft-subtitle {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 0;\n}\n.ft-filtres {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.ft-filtre {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border-radius: 30px;\n  border: 1.5px solid #E5E7EB;\n  background: #fff;\n  font-family: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ft-filtre .material-icons-round {\n  font-size: 15px !important;\n}\n.ft-filtre:hover {\n  border-color: #A78BFA;\n  color: #7C3AED;\n  background: #F5F3FF;\n}\n.ft-filtre.active {\n  background: #1e3a8a;\n  border-color: #1e3a8a;\n  color: #fff;\n}\n.ft-timeline {\n  position: relative;\n  padding: 0 0 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.ft-line {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      #DDD6FE,\n      #BFDBFE,\n      #DDD6FE);\n  transform: translateX(-50%);\n}\n.ft-event {\n  display: flex;\n  align-items: flex-start;\n  gap: 0;\n  position: relative;\n}\n.ft-event .ft-event-card {\n  width: calc(50% - 40px);\n  margin-left: auto;\n  margin-right: 40px;\n}\n.ft-event.right .ft-event-card {\n  margin-left: 40px;\n  margin-right: auto;\n  order: 2;\n}\n.ft-event.right .ft-event-dot {\n  order: 1;\n}\n.ft-event-dot {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 4px solid #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 2;\n  flex-shrink: 0;\n  top: 12px;\n}\n.ft-event-dot .material-icons-round {\n  font-size: 18px !important;\n  color: #fff;\n}\n.ft-event-card {\n  background: #fff;\n  border-radius: 20px;\n  border: 1px solid #F0F4FF;\n  padding: 20px 24px;\n  transition: all 0.25s;\n}\n.ft-event-card:hover {\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.07);\n  border-color: #DDD6FE;\n  transform: translateY(-2px);\n}\n.ft-event-date {\n  font-size: 12px;\n  font-weight: 600;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: 8px;\n}\n.ft-event-type-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.ft-event-type-badge .material-icons-round {\n  font-size: 13px !important;\n}\n.ft-event-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 8px;\n  line-height: 1.3;\n}\n.ft-event-desc {\n  font-size: 13px;\n  color: #4B5563;\n  line-height: 1.7;\n  margin: 0 0 12px;\n}\n.ft-event-author {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9CA3AF;\n}\n.ft-event-author .material-icons-round {\n  font-size: 14px !important;\n}\n.ft-empty {\n  text-align: center;\n  padding: 60px 20px;\n  color: #9CA3AF;\n  position: relative;\n  z-index: 2;\n}\n.ft-empty .material-icons-round {\n  font-size: 48px !important;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.4;\n}\n.ft-empty p {\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .ft-line {\n    left: 24px;\n  }\n  .ft-event,\n  .ft-event.right {\n    flex-direction: column;\n  }\n  .ft-event .ft-event-card,\n  .ft-event.right .ft-event-card {\n    width: calc(100% - 60px);\n    margin-left: 60px;\n    margin-right: 0;\n    order: 1;\n  }\n  .ft-event .ft-event-dot,\n  .ft-event.right .ft-event-dot {\n    left: 24px;\n    order: 0;\n  }\n}\n/*# sourceMappingURL=famille-timeline.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FamilleTimelineComponent, { className: "FamilleTimelineComponent", filePath: "src/app/famille/pages/timeline/famille-timeline.component.ts", lineNumber: 19 });
})();

// src/app/famille/famille-routing.module.ts
var routes = [
  { path: "login", component: FamilleLoginComponent },
  {
    path: "",
    component: FamilleShellComponent,
    canActivate: [clientGuard],
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: FamilleHomeComponent },
      { path: "membres", component: FamilleMembresComponent },
      { path: "stories", component: FamilleStoriesComponent },
      { path: "arbre", component: FamilleArbreComponent },
      { path: "timeline", component: FamilleTimelineComponent }
    ]
  }
];
var FamilleRoutingModule = class _FamilleRoutingModule {
  static \u0275fac = function FamilleRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FamilleRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/famille/famille.module.ts
var FamilleModule = class _FamilleModule {
  static \u0275fac = function FamilleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FamilleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FamilleModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FamilleRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FamilleModule, [{
    type: NgModule,
    args: [{
      declarations: [
        FamilleLoginComponent,
        FamilleShellComponent,
        FamilleHomeComponent,
        FamilleMembresComponent,
        FamilleStoriesComponent,
        FamilleArbreComponent,
        FamilleTimelineComponent
      ],
      imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FamilleRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  FamilleModule
};
//# sourceMappingURL=chunk-XYMCSOCT.js.map
