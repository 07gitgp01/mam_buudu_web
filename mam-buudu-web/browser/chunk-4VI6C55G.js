import {
  LoginComponent
} from "./chunk-B53FTWEN.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-2GNQ7GWJ.js";
import {
  AuthService,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3JURVHRC.js";
import "./chunk-YP43Q66R.js";

// src/app/auth/register/register.component.ts
function RegisterComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_83_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "Nom requis (2 car. min.)");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_83_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 9);
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Code famille : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.familleCodePreview);
  }
}
function RegisterComponent_div_83_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_83_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_83_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "Adresse email invalide");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_83_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275element(2, "div", 55)(3, "div", 55)(4, "div", 55)(5, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.passwordStrength.level >= 1 ? ctx_r1.passwordStrength.color : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.passwordStrength.level >= 2 ? ctx_r1.passwordStrength.color : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.passwordStrength.level >= 3 ? ctx_r1.passwordStrength.color : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.passwordStrength.level >= 4 ? ctx_r1.passwordStrength.color : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.passwordStrength.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.passwordStrength.label);
  }
}
function RegisterComponent_div_83_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "8 caract\xE8res minimum");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "label");
    \u0275\u0275text(3, "Nom de la famille");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "span", 9);
    \u0275\u0275text(6, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, RegisterComponent_div_83_span_8_Template, 2, 0, "span", 40)(9, RegisterComponent_div_83_div_9_Template, 6, 1, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 42)(11, "div", 37)(12, "label");
    \u0275\u0275text(13, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 38)(15, "span", 9);
    \u0275\u0275text(16, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, RegisterComponent_div_83_span_18_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 37)(20, "label");
    \u0275\u0275text(21, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 38)(23, "span", 9);
    \u0275\u0275text(24, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, RegisterComponent_div_83_span_26_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 37)(28, "label");
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 38)(31, "span", 9);
    \u0275\u0275text(32, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, RegisterComponent_div_83_span_34_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 37)(36, "label");
    \u0275\u0275text(37, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 38)(39, "span", 9);
    \u0275\u0275text(40, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 46);
    \u0275\u0275elementStart(42, "div", 47)(43, "button", 48);
    \u0275\u0275listener("click", function RegisterComponent_div_83_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPassword = !ctx_r1.showPassword);
    });
    \u0275\u0275elementStart(44, "span", 9);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(46, RegisterComponent_div_83_div_46_Template, 8, 11, "div", 49)(47, RegisterComponent_div_83_span_47_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 50);
    \u0275\u0275listener("click", function RegisterComponent_div_83_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275elementStart(49, "span", 9);
    \u0275\u0275text(50, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Continuer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("input-error", ctx_r1.f["nomFamille"].invalid && ctx_r1.f["nomFamille"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["nomFamille"].invalid && ctx_r1.f["nomFamille"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.familleCodePreview);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("input-error", ctx_r1.f["prenom"].invalid && ctx_r1.f["prenom"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["prenom"].invalid && ctx_r1.f["prenom"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("input-error", ctx_r1.f["nom"].invalid && ctx_r1.f["nom"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["nom"].invalid && ctx_r1.f["nom"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("input-error", ctx_r1.f["email"].invalid && ctx_r1.f["email"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["email"].invalid && ctx_r1.f["email"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("input-error", ctx_r1.f["password"].invalid && ctx_r1.f["password"].touched);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.showPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordStrength.level > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["password"].invalid && ctx_r1.f["password"].touched);
  }
}
function RegisterComponent_div_84_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    \u0275\u0275property("value", q_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r4);
  }
}
function RegisterComponent_div_84_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "Veuillez choisir une question");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_84_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "La r\xE9ponse est requise");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_84_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg, " ");
  }
}
function RegisterComponent_div_84_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 73);
  }
}
function RegisterComponent_div_84_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "rocket_launch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cr\xE9er mon espace ");
    \u0275\u0275elementContainerEnd();
  }
}
function RegisterComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 57)(2, "div", 58)(3, "span", 9);
    \u0275\u0275text(4, "security");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 59)(6, "strong");
    \u0275\u0275text(7, "Pourquoi une question secr\xE8te ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Elle vous permet de r\xE9cup\xE9rer votre compte si vous oubliez votre mot de passe. M\xE9morisez bien votre r\xE9ponse.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 37)(11, "label");
    \u0275\u0275text(12, "Question secr\xE8te");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 60)(14, "span", 9);
    \u0275\u0275text(15, "help_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 61)(17, "option", 62);
    \u0275\u0275text(18, "-- Choisir une question --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, RegisterComponent_div_84_option_19_Template, 2, 2, "option", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, RegisterComponent_div_84_span_20_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 37)(22, "label");
    \u0275\u0275text(23, "R\xE9ponse secr\xE8te");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 38)(25, "span", 9);
    \u0275\u0275text(26, "key");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, RegisterComponent_div_84_span_28_Template, 2, 0, "span", 40);
    \u0275\u0275elementStart(29, "span", 65);
    \u0275\u0275text(30, "Sensible \xE0 la casse \u2014 m\xE9morisez-la bien.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, RegisterComponent_div_84_div_31_Template, 4, 1, "div", 66);
    \u0275\u0275elementStart(32, "div", 67)(33, "button", 68);
    \u0275\u0275listener("click", function RegisterComponent_div_84_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step = 1);
    });
    \u0275\u0275elementStart(34, "span", 9);
    \u0275\u0275text(35, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 69);
    \u0275\u0275template(38, RegisterComponent_div_84_span_38_Template, 1, 0, "span", 70)(39, RegisterComponent_div_84_ng_container_39_Template, 4, 0, "ng-container", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275classProp("input-error", ctx_r1.f["questionSecrete"].invalid && ctx_r1.f["questionSecrete"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.questions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["questionSecrete"].invalid && ctx_r1.f["questionSecrete"].touched);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("input-error", ctx_r1.f["reponseSecrete"].invalid && ctx_r1.f["reponseSecrete"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["reponseSecrete"].invalid && ctx_r1.f["reponseSecrete"].touched);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.errorMsg);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  auth;
  router;
  form;
  loading = false;
  errorMsg = "";
  showPassword = false;
  step = 1;
  // 2 étapes : infos famille + question secrète
  questions = [
    "Quel est le pr\xE9nom de votre m\xE8re ?",
    "Quel est le nom de votre ville natale ?",
    "Quel est le nom de votre animal de compagnie d'enfance ?",
    "Quel est le pr\xE9nom de votre meilleur(e) ami(e) d'enfance ?",
    "Quel est le nom de votre \xE9cole primaire ?"
  ];
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.form = this.fb.group({
      // Étape 1 — identité
      nomFamille: ["", [Validators.required, Validators.minLength(2)]],
      prenom: ["", Validators.required],
      nom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      // Étape 2 — question secrète (obligatoire par le backend)
      questionSecrete: ["", Validators.required],
      reponseSecrete: ["", [Validators.required, Validators.minLength(2)]]
    });
  }
  get f() {
    return this.form.controls;
  }
  get passwordStrength() {
    const pwd = this.form.get("password")?.value ?? "";
    if (pwd.length < 1)
      return { level: 0, label: "", color: "" };
    let score = 0;
    if (pwd.length >= 8)
      score++;
    if (/[A-Z]/.test(pwd))
      score++;
    if (/[0-9]/.test(pwd))
      score++;
    if (/[^A-Za-z0-9]/.test(pwd))
      score++;
    if (score <= 1)
      return { level: 1, label: "Faible", color: "#EF4444" };
    if (score === 2)
      return { level: 2, label: "Moyen", color: "#F59E0B" };
    if (score === 3)
      return { level: 3, label: "Bon", color: "#10B981" };
    return { level: 4, label: "Fort", color: "#059669" };
  }
  get familleCodePreview() {
    const nom = this.form.get("nomFamille")?.value ?? "";
    if (!nom || nom.trim().length < 2)
      return "";
    const clean = nom.trim().toUpperCase().replace(/\s+/g, "-").replace(/[^A-Z0-9-]/g, "");
    return `${clean}-${(/* @__PURE__ */ new Date()).getFullYear()}`;
  }
  nextStep() {
    const step1Fields = ["nomFamille", "prenom", "nom", "email", "password"];
    step1Fields.forEach((field) => this.form.get(field)?.markAsTouched());
    const step1Valid = step1Fields.every((field) => this.form.get(field)?.valid);
    if (step1Valid)
      this.step = 2;
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMsg = "";
    this.auth.register(this.form.value).subscribe({
      next: () => this.router.navigate(["/app/home"]),
      error: (err) => {
        this.errorMsg = err?.error?.error ?? "Une erreur est survenue. Veuillez r\xE9essayer.";
        this.loading = false;
        this.step = 1;
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: false, decls: 90, vars: 26, consts: [[1, "auth-page"], [1, "auth-left"], [1, "al-bg"], [1, "al-blob", "al-blob-1"], [1, "al-blob", "al-blob-2"], [1, "al-dots"], [1, "al-content"], [1, "al-brand"], [1, "al-brand-icon"], [1, "material-icons-round"], [1, "al-brand-name"], [1, "al-title"], [1, "al-subtitle"], [1, "al-steps"], [1, "al-step"], [1, "als-num"], ["class", "material-icons-round", 4, "ngIf"], [4, "ngIf"], [1, "als-info"], [1, "als-connector"], [1, "al-what-next"], [1, "awn-item"], [1, "awn-icon"], [1, "auth-right"], [1, "auth-card"], [1, "auth-card-header"], [1, "auth-card-icon"], [1, "step-indicator"], [1, "si-step"], [1, "si-circle"], [1, "si-label"], [1, "si-line"], [3, "ngSubmit", "formGroup"], ["class", "step-panel", 4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login"], [1, "step-panel"], [1, "form-group"], [1, "input-wrapper"], ["type", "text", "formControlName", "nomFamille", "placeholder", "Ex : Famille Diallo"], ["class", "field-error", 4, "ngIf"], ["class", "code-preview", 4, "ngIf"], [1, "form-row"], ["type", "text", "formControlName", "prenom", "placeholder", "Votre pr\xE9nom"], ["type", "text", "formControlName", "nom", "placeholder", "Votre nom"], ["type", "email", "formControlName", "email", "placeholder", "votre@email.com"], ["formControlName", "password", "placeholder", "8 caract\xE8res minimum", 3, "type"], [1, "input-suffix"], ["type", "button", 1, "btn-icon-eye", 3, "click"], ["class", "pwd-strength", 4, "ngIf"], ["type", "button", 1, "btn-submit", 3, "click"], [1, "field-error"], [1, "code-preview"], [1, "pwd-strength"], [1, "pwd-bars"], [1, "pwd-bar"], [1, "pwd-label"], [1, "step2-info"], [1, "s2i-icon"], [1, "s2i-text"], [1, "input-wrapper", "input-wrapper-select"], ["formControlName", "questionSecrete"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "reponseSecrete", "placeholder", "Votre r\xE9ponse"], [1, "field-hint"], ["class", "alert-error-box", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn-back", 3, "click"], ["type", "submit", 1, "btn-submit", "btn-submit-flex", 3, "disabled"], ["class", "btn-spinner", 4, "ngIf"], [3, "value"], [1, "alert-error-box"], [1, "btn-spinner"]], template: function RegisterComponent_Template(rf, ctx) {
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
      \u0275\u0275text(14, "Cr\xE9ez l'espace");
      \u0275\u0275element(15, "br");
      \u0275\u0275text(16, "familial de votre");
      \u0275\u0275element(17, "br");
      \u0275\u0275text(18, "famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 12);
      \u0275\u0275text(20, "Quelques minutes suffisent pour d\xE9marrer votre arbre g\xE9n\xE9alogique.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "div", 15);
      \u0275\u0275template(24, RegisterComponent_span_24_Template, 2, 0, "span", 16)(25, RegisterComponent_span_25_Template, 2, 0, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 18)(27, "strong");
      \u0275\u0275text(28, "Votre identit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Nom de famille, email, mot de passe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(31, "div", 19);
      \u0275\u0275elementStart(32, "div", 14)(33, "div", 15);
      \u0275\u0275text(34, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 18)(36, "strong");
      \u0275\u0275text(37, "S\xE9curit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Question secr\xE8te de r\xE9cup\xE9ration");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 20)(41, "div", 21)(42, "div", 22)(43, "span", 9);
      \u0275\u0275text(44, "vpn_key");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "Code famille unique g\xE9n\xE9r\xE9 automatiquement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 21)(48, "div", 22)(49, "span", 9);
      \u0275\u0275text(50, "group_add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Invitez vos proches avec votre code");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 21)(54, "div", 22)(55, "span", 9);
      \u0275\u0275text(56, "account_tree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Construisez votre arbre g\xE9n\xE9alogique");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(59, "main", 23)(60, "div", 24)(61, "div", 25)(62, "div", 26)(63, "span", 9);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "h2");
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p");
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 27)(70, "div", 28)(71, "div", 29);
      \u0275\u0275template(72, RegisterComponent_span_72_Template, 2, 0, "span", 16)(73, RegisterComponent_span_73_Template, 2, 0, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 30);
      \u0275\u0275text(75, "Identit\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(76, "div", 31);
      \u0275\u0275elementStart(77, "div", 28)(78, "div", 29);
      \u0275\u0275text(79, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 30);
      \u0275\u0275text(81, "S\xE9curit\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "form", 32);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_82_listener() {
        return ctx.submit();
      });
      \u0275\u0275template(83, RegisterComponent_div_83_Template, 52, 19, "div", 33)(84, RegisterComponent_div_84_Template, 40, 11, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 34)(86, "p");
      \u0275\u0275text(87, "D\xE9j\xE0 un compte ? ");
      \u0275\u0275elementStart(88, "a", 35);
      \u0275\u0275text(89, "Se connecter");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275classProp("al-step-active", ctx.step === 1)("al-step-done", ctx.step > 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.step > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step <= 1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("done", ctx.step > 1);
      \u0275\u0275advance();
      \u0275\u0275classProp("al-step-active", ctx.step === 2);
      \u0275\u0275advance(32);
      \u0275\u0275textInterpolate(ctx.step === 1 ? "family_restroom" : "security");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.step === 1 ? "Cr\xE9er un espace familial" : "S\xE9curisez votre compte");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.step === 1 ? "\xC9tape 1 sur 2 \u2014 Vos informations" : "\xC9tape 2 sur 2 \u2014 Question de s\xE9curit\xE9");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("si-active", ctx.step === 1)("si-done", ctx.step > 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.step > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("si-line-done", ctx.step > 1);
      \u0275\u0275advance();
      \u0275\u0275classProp("si-active", ctx.step === 2);
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === 2);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-left[_ngcontent-%COMP%] {\n  width: 42%;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.al-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.al-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.12;\n  background: #fff;\n}\n.al-blob-1[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  top: -80px;\n  right: -100px;\n}\n.al-blob-2[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bottom: -60px;\n  left: -60px;\n}\n.al-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.15) 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n}\n.al-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 48px 44px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  width: 100%;\n  max-width: 420px;\n}\n.al-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.al-brand-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: rgba(255, 255, 255, 0.18);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.al-brand-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n}\n.al-brand-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n.al-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1.28;\n  margin: 0;\n}\n.al-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0;\n}\n.al-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 20px;\n}\n.al-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 4px 0;\n  opacity: 0.55;\n  transition: opacity 0.25s ease;\n}\n.al-step.al-step-active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.al-step.al-step-done[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.al-step[_ngcontent-%COMP%]   .als-num[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n  transition: background 0.25s ease;\n}\n.al-step[_ngcontent-%COMP%]   .als-num[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.al-step.al-step-active[_ngcontent-%COMP%]   .als-num[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #1445F5;\n}\n.al-step.al-step-done[_ngcontent-%COMP%]   .als-num[_ngcontent-%COMP%] {\n  background: #10B981;\n}\n.al-step[_ngcontent-%COMP%]   .als-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.al-step[_ngcontent-%COMP%]   .als-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n}\n.al-step[_ngcontent-%COMP%]   .als-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 12px;\n}\n.als-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 4px 0 4px 14px;\n  transition: background 0.3s ease;\n}\n.als-connector.done[_ngcontent-%COMP%] {\n  background: #10B981;\n}\n.al-what-next[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.awn-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.awn-item[_ngcontent-%COMP%]   .awn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.awn-item[_ngcontent-%COMP%]   .awn-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 17px;\n}\n.awn-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 13px;\n  line-height: 1.4;\n}\n.auth-right[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #EEF2FF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n  min-height: 100vh;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 40px 32px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 8px 40px rgba(20, 69, 245, 0.12);\n  animation: _ngcontent-%COMP%_cardFadeIn 0.45s ease both;\n}\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.auth-card-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 69, 245, 0.12),\n      rgba(37, 99, 235, 0.08));\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n}\n.auth-card-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #1445F5;\n  font-size: 26px;\n}\n.auth-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 6px;\n}\n.auth-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.si-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.si-step[_ngcontent-%COMP%]   .si-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #E2E8F0;\n  color: #94A3B8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.si-step[_ngcontent-%COMP%]   .si-circle[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.si-step[_ngcontent-%COMP%]   .si-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94A3B8;\n  font-weight: 500;\n}\n.si-step.si-active[_ngcontent-%COMP%]   .si-circle[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  box-shadow: 0 2px 10px rgba(20, 69, 245, 0.3);\n}\n.si-step.si-active[_ngcontent-%COMP%]   .si-label[_ngcontent-%COMP%] {\n  color: #1445F5;\n  font-weight: 600;\n}\n.si-step.si-done[_ngcontent-%COMP%]   .si-circle[_ngcontent-%COMP%] {\n  background: #10B981;\n  color: #fff;\n}\n.si-step.si-done[_ngcontent-%COMP%]   .si-label[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.si-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #E2E8F0;\n  margin: 0 12px;\n  margin-bottom: 22px;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.si-line.si-line-done[_ngcontent-%COMP%] {\n  background: #10B981;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #F8FAFC;\n  border: 1.5px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 0 14px;\n  height: 46px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.input-wrapper[_ngcontent-%COMP%]    > .material-icons-round[_ngcontent-%COMP%]:first-child {\n  color: #94A3B8;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: #1E293B;\n  height: 100%;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #CBD5E1;\n}\n.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n  background: #fff;\n}\n.input-wrapper.input-wrapper-select[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.input-suffix[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.btn-icon-eye[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n  color: #94A3B8;\n  transition: color 0.15s, background 0.15s;\n}\n.btn-icon-eye[_ngcontent-%COMP%]:hover {\n  color: #1445F5;\n  background: rgba(20, 69, 245, 0.07);\n}\n.btn-icon-eye[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.input-error[_ngcontent-%COMP%] {\n  border-color: #EF4444 !important;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #EF4444;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.code-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1D4ED8;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.25s ease both;\n}\n.code-preview[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3B82F6;\n  flex-shrink: 0;\n}\n.code-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: #1445F5;\n}\n.pwd-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 2px;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.2s ease both;\n}\n.pwd-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex: 1;\n}\n.pwd-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  border-radius: 4px;\n  background: #E2E8F0;\n  transition: background 0.3s ease;\n}\n.pwd-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 36px;\n  text-align: right;\n  transition: color 0.2s;\n}\n.step-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_stepFadeIn 0.3s ease both;\n}\n@keyframes _ngcontent-%COMP%_stepFadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n}\n.step2-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #EFF6FF 0%,\n      #F0FDF4 100%);\n  border: 1px solid #BFDBFE;\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 69, 245, 0.12),\n      rgba(16, 185, 129, 0.1));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #1445F5;\n  font-size: 20px;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1E293B;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin: 0;\n  line-height: 1.5;\n}\n.alert-error-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #DC2626;\n  margin-bottom: 16px;\n}\n.alert-error-box[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  border: none;\n  border-radius: 13px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.35);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-submit[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(20, 69, 245, 0.42);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-submit-flex[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1;\n}\n.btn-back[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 20px;\n  background: transparent;\n  border: 1.5px solid #E2E8F0;\n  border-radius: 13px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748B;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #F1F5F9;\n  border-color: #CBD5E1;\n  color: #374151;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1445F5;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 860px) {\n  .auth-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        145deg,\n        #0A1FA8 0%,\n        #1445F5 55%,\n        #2563EB 100%);\n    padding: 24px 16px;\n    align-items: flex-start;\n    padding-top: 40px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    box-shadow: 0 8px 48px rgba(0, 0, 0, 0.25);\n  }\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px 24px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: false, template: `<div class="auth-page">

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

      <h1 class="al-title">Cr\xE9ez l'espace<br/>familial de votre<br/>famille</h1>
      <p class="al-subtitle">Quelques minutes suffisent pour d\xE9marrer votre arbre g\xE9n\xE9alogique.</p>

      <div class="al-steps">
        <div class="al-step" [class.al-step-active]="step === 1" [class.al-step-done]="step > 1">
          <div class="als-num">
            <span class="material-icons-round" *ngIf="step > 1">check</span>
            <span *ngIf="step <= 1">1</span>
          </div>
          <div class="als-info">
            <strong>Votre identit\xE9</strong>
            <span>Nom de famille, email, mot de passe</span>
          </div>
        </div>
        <div class="als-connector" [class.done]="step > 1"></div>
        <div class="al-step" [class.al-step-active]="step === 2">
          <div class="als-num">2</div>
          <div class="als-info">
            <strong>S\xE9curit\xE9</strong>
            <span>Question secr\xE8te de r\xE9cup\xE9ration</span>
          </div>
        </div>
      </div>

      <div class="al-what-next">
        <div class="awn-item">
          <div class="awn-icon"><span class="material-icons-round">vpn_key</span></div>
          <span>Code famille unique g\xE9n\xE9r\xE9 automatiquement</span>
        </div>
        <div class="awn-item">
          <div class="awn-icon"><span class="material-icons-round">group_add</span></div>
          <span>Invitez vos proches avec votre code</span>
        </div>
        <div class="awn-item">
          <div class="awn-icon"><span class="material-icons-round">account_tree</span></div>
          <span>Construisez votre arbre g\xE9n\xE9alogique</span>
        </div>
      </div>

    </div>
  </aside>

  <!-- \u2550\u2550\u2550 PANNEAU DROIT \u2550\u2550\u2550 -->
  <main class="auth-right">
    <div class="auth-card">

      <div class="auth-card-header">
        <div class="auth-card-icon">
          <span class="material-icons-round">{{ step === 1 ? 'family_restroom' : 'security' }}</span>
        </div>
        <h2>{{ step === 1 ? 'Cr\xE9er un espace familial' : 'S\xE9curisez votre compte' }}</h2>
        <p>{{ step === 1 ? '\xC9tape 1 sur 2 \u2014 Vos informations' : '\xC9tape 2 sur 2 \u2014 Question de s\xE9curit\xE9' }}</p>
      </div>

      <!-- Indicateur d'\xE9tapes -->
      <div class="step-indicator">
        <div class="si-step" [class.si-active]="step === 1" [class.si-done]="step > 1">
          <div class="si-circle">
            <span class="material-icons-round" *ngIf="step > 1">check</span>
            <span *ngIf="step <= 1">1</span>
          </div>
          <span class="si-label">Identit\xE9</span>
        </div>
        <div class="si-line" [class.si-line-done]="step > 1"></div>
        <div class="si-step" [class.si-active]="step === 2">
          <div class="si-circle">2</div>
          <span class="si-label">S\xE9curit\xE9</span>
        </div>
      </div>

      <form [formGroup]="form" (ngSubmit)="submit()">

        <!-- \u2550\u2550\u2550\u2550\u2550 \xC9TAPE 1 \u2550\u2550\u2550\u2550\u2550 -->
        <div class="step-panel" *ngIf="step === 1">

          <!-- Nom famille -->
          <div class="form-group">
            <label>Nom de la famille</label>
            <div class="input-wrapper">
              <span class="material-icons-round">group</span>
              <input type="text" formControlName="nomFamille" placeholder="Ex : Famille Diallo"
                     [class.input-error]="f['nomFamille'].invalid && f['nomFamille'].touched"/>
            </div>
            <span class="field-error" *ngIf="f['nomFamille'].invalid && f['nomFamille'].touched">Nom requis (2 car. min.)</span>
            <div class="code-preview" *ngIf="familleCodePreview">
              <span class="material-icons-round">tag</span>
              Code famille : <strong>{{ familleCodePreview }}</strong>
            </div>
          </div>

          <!-- Pr\xE9nom + Nom -->
          <div class="form-row">
            <div class="form-group">
              <label>Pr\xE9nom</label>
              <div class="input-wrapper">
                <span class="material-icons-round">badge</span>
                <input type="text" formControlName="prenom" placeholder="Votre pr\xE9nom"
                       [class.input-error]="f['prenom'].invalid && f['prenom'].touched"/>
              </div>
              <span class="field-error" *ngIf="f['prenom'].invalid && f['prenom'].touched">Requis</span>
            </div>
            <div class="form-group">
              <label>Nom</label>
              <div class="input-wrapper">
                <span class="material-icons-round">badge</span>
                <input type="text" formControlName="nom" placeholder="Votre nom"
                       [class.input-error]="f['nom'].invalid && f['nom'].touched"/>
              </div>
              <span class="field-error" *ngIf="f['nom'].invalid && f['nom'].touched">Requis</span>
            </div>
          </div>

          <!-- Email -->
          <div class="form-group">
            <label>Email</label>
            <div class="input-wrapper">
              <span class="material-icons-round">email</span>
              <input type="email" formControlName="email" placeholder="votre@email.com"
                     [class.input-error]="f['email'].invalid && f['email'].touched"/>
            </div>
            <span class="field-error" *ngIf="f['email'].invalid && f['email'].touched">Adresse email invalide</span>
          </div>

          <!-- Mot de passe + jauge -->
          <div class="form-group">
            <label>Mot de passe</label>
            <div class="input-wrapper">
              <span class="material-icons-round">lock</span>
              <input [type]="showPassword ? 'text' : 'password'" formControlName="password"
                     placeholder="8 caract\xE8res minimum"
                     [class.input-error]="f['password'].invalid && f['password'].touched"/>
              <div class="input-suffix">
                <button type="button" class="btn-icon-eye" (click)="showPassword = !showPassword">
                  <span class="material-icons-round">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                </button>
              </div>
            </div>
            <div class="pwd-strength" *ngIf="passwordStrength.level > 0">
              <div class="pwd-bars">
                <div class="pwd-bar" [style.background]="passwordStrength.level >= 1 ? passwordStrength.color : ''"></div>
                <div class="pwd-bar" [style.background]="passwordStrength.level >= 2 ? passwordStrength.color : ''"></div>
                <div class="pwd-bar" [style.background]="passwordStrength.level >= 3 ? passwordStrength.color : ''"></div>
                <div class="pwd-bar" [style.background]="passwordStrength.level >= 4 ? passwordStrength.color : ''"></div>
              </div>
              <span class="pwd-label" [style.color]="passwordStrength.color">{{ passwordStrength.label }}</span>
            </div>
            <span class="field-error" *ngIf="f['password'].invalid && f['password'].touched">8 caract\xE8res minimum</span>
          </div>

          <button type="button" class="btn-submit" (click)="nextStep()">
            <span class="material-icons-round">arrow_forward</span>
            Continuer
          </button>

        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550 \xC9TAPE 2 \u2550\u2550\u2550\u2550\u2550 -->
        <div class="step-panel" *ngIf="step === 2">

          <div class="step2-info">
            <div class="s2i-icon">
              <span class="material-icons-round">security</span>
            </div>
            <div class="s2i-text">
              <strong>Pourquoi une question secr\xE8te ?</strong>
              <p>Elle vous permet de r\xE9cup\xE9rer votre compte si vous oubliez votre mot de passe. M\xE9morisez bien votre r\xE9ponse.</p>
            </div>
          </div>

          <div class="form-group">
            <label>Question secr\xE8te</label>
            <div class="input-wrapper input-wrapper-select">
              <span class="material-icons-round">help_outline</span>
              <select formControlName="questionSecrete"
                      [class.input-error]="f['questionSecrete'].invalid && f['questionSecrete'].touched">
                <option value="">-- Choisir une question --</option>
                <option *ngFor="let q of questions" [value]="q">{{ q }}</option>
              </select>
            </div>
            <span class="field-error" *ngIf="f['questionSecrete'].invalid && f['questionSecrete'].touched">Veuillez choisir une question</span>
          </div>

          <div class="form-group">
            <label>R\xE9ponse secr\xE8te</label>
            <div class="input-wrapper">
              <span class="material-icons-round">key</span>
              <input type="text" formControlName="reponseSecrete"
                     placeholder="Votre r\xE9ponse"
                     [class.input-error]="f['reponseSecrete'].invalid && f['reponseSecrete'].touched"/>
            </div>
            <span class="field-error" *ngIf="f['reponseSecrete'].invalid && f['reponseSecrete'].touched">La r\xE9ponse est requise</span>
            <span class="field-hint">Sensible \xE0 la casse \u2014 m\xE9morisez-la bien.</span>
          </div>

          <div class="alert-error-box" *ngIf="errorMsg">
            <span class="material-icons-round">error_outline</span>
            {{ errorMsg }}
          </div>

          <div class="form-actions">
            <button type="button" class="btn-back" (click)="step = 1">
              <span class="material-icons-round">arrow_back</span>
              Retour
            </button>
            <button type="submit" class="btn-submit btn-submit-flex" [disabled]="loading">
              <span class="btn-spinner" *ngIf="loading"></span>
              <ng-container *ngIf="!loading">
                <span class="material-icons-round">rocket_launch</span>
                Cr\xE9er mon espace
              </ng-container>
            </button>
          </div>

        </div>

      </form>

      <div class="auth-footer">
        <p>D\xE9j\xE0 un compte ? <a routerLink="/auth/login">Se connecter</a></p>
      </div>

    </div>
  </main>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/auth/register/register.component.scss */\n.auth-page {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-left {\n  width: 42%;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.al-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.al-blob {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0.12;\n  background: #fff;\n}\n.al-blob-1 {\n  width: 340px;\n  height: 340px;\n  top: -80px;\n  right: -100px;\n}\n.al-blob-2 {\n  width: 220px;\n  height: 220px;\n  bottom: -60px;\n  left: -60px;\n}\n.al-dots {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.15) 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n}\n.al-content {\n  position: relative;\n  z-index: 1;\n  padding: 48px 44px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  width: 100%;\n  max-width: 420px;\n}\n.al-brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.al-brand-icon {\n  width: 38px;\n  height: 38px;\n  background: rgba(255, 255, 255, 0.18);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.al-brand-icon .material-icons-round {\n  color: #fff;\n  font-size: 20px;\n}\n.al-brand-name {\n  color: #fff;\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n.al-title {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1.28;\n  margin: 0;\n}\n.al-subtitle {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0;\n}\n.al-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 20px;\n}\n.al-step {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 4px 0;\n  opacity: 0.55;\n  transition: opacity 0.25s ease;\n}\n.al-step.al-step-active {\n  opacity: 1;\n}\n.al-step.al-step-done {\n  opacity: 0.9;\n}\n.al-step .als-num {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.18);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  flex-shrink: 0;\n  transition: background 0.25s ease;\n}\n.al-step .als-num .material-icons-round {\n  font-size: 16px;\n}\n.al-step.al-step-active .als-num {\n  background: rgba(255, 255, 255, 0.9);\n  color: #1445F5;\n}\n.al-step.al-step-done .als-num {\n  background: #10B981;\n}\n.al-step .als-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.al-step .als-info strong {\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n}\n.al-step .als-info span {\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 12px;\n}\n.als-connector {\n  width: 2px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 4px 0 4px 14px;\n  transition: background 0.3s ease;\n}\n.als-connector.done {\n  background: #10B981;\n}\n.al-what-next {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.awn-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.awn-item .awn-icon {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.awn-item .awn-icon .material-icons-round {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 17px;\n}\n.awn-item span {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 13px;\n  line-height: 1.4;\n}\n.auth-right {\n  flex: 1;\n  background: #EEF2FF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n  min-height: 100vh;\n}\n.auth-card {\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 40px 32px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 8px 40px rgba(20, 69, 245, 0.12);\n  animation: cardFadeIn 0.45s ease both;\n}\n@keyframes cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n}\n.auth-card-header {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.auth-card-icon {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 69, 245, 0.12),\n      rgba(37, 99, 235, 0.08));\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n}\n.auth-card-icon .material-icons-round {\n  color: #1445F5;\n  font-size: 26px;\n}\n.auth-card-header h2 {\n  font-size: 21px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 6px;\n}\n.auth-card-header p {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n}\n.step-indicator {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.si-step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.si-step .si-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #E2E8F0;\n  color: #94A3B8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.si-step .si-circle .material-icons-round {\n  font-size: 17px;\n}\n.si-step .si-label {\n  font-size: 11px;\n  color: #94A3B8;\n  font-weight: 500;\n}\n.si-step.si-active .si-circle {\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  box-shadow: 0 2px 10px rgba(20, 69, 245, 0.3);\n}\n.si-step.si-active .si-label {\n  color: #1445F5;\n  font-weight: 600;\n}\n.si-step.si-done .si-circle {\n  background: #10B981;\n  color: #fff;\n}\n.si-step.si-done .si-label {\n  color: #10B981;\n}\n.si-line {\n  flex: 1;\n  height: 2px;\n  background: #E2E8F0;\n  margin: 0 12px;\n  margin-bottom: 22px;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.si-line.si-line-done {\n  background: #10B981;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-row .form-group {\n  margin-bottom: 16px;\n}\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #F8FAFC;\n  border: 1.5px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 0 14px;\n  height: 46px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.input-wrapper > .material-icons-round:first-child {\n  color: #94A3B8;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.input-wrapper input,\n.input-wrapper select {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: #1E293B;\n  height: 100%;\n}\n.input-wrapper input::placeholder,\n.input-wrapper select::placeholder {\n  color: #CBD5E1;\n}\n.input-wrapper select {\n  cursor: pointer;\n}\n.input-wrapper:focus-within {\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n  background: #fff;\n}\n.input-wrapper.input-wrapper-select {\n  padding-right: 10px;\n}\n.input-suffix {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.btn-icon-eye {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n  color: #94A3B8;\n  transition: color 0.15s, background 0.15s;\n}\n.btn-icon-eye:hover {\n  color: #1445F5;\n  background: rgba(20, 69, 245, 0.07);\n}\n.btn-icon-eye .material-icons-round {\n  font-size: 18px;\n}\n.input-error {\n  border-color: #EF4444 !important;\n}\n.field-error {\n  font-size: 12px;\n  color: #EF4444;\n}\n.field-hint {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.code-preview {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1D4ED8;\n  animation: fadeSlideIn 0.25s ease both;\n}\n.code-preview .material-icons-round {\n  font-size: 16px;\n  color: #3B82F6;\n  flex-shrink: 0;\n}\n.code-preview strong {\n  font-family: "Courier New", monospace;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: #1445F5;\n}\n.pwd-strength {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 2px;\n  animation: fadeSlideIn 0.2s ease both;\n}\n.pwd-bars {\n  display: flex;\n  gap: 4px;\n  flex: 1;\n}\n.pwd-bar {\n  flex: 1;\n  height: 4px;\n  border-radius: 4px;\n  background: #E2E8F0;\n  transition: background 0.3s ease;\n}\n.pwd-label {\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 36px;\n  text-align: right;\n  transition: color 0.2s;\n}\n.step-panel {\n  animation: stepFadeIn 0.3s ease both;\n}\n@keyframes stepFadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n@keyframes fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n}\n.step2-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #EFF6FF 0%,\n      #F0FDF4 100%);\n  border: 1px solid #BFDBFE;\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.step2-info .s2i-icon {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 69, 245, 0.12),\n      rgba(16, 185, 129, 0.1));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.step2-info .s2i-icon .material-icons-round {\n  color: #1445F5;\n  font-size: 20px;\n}\n.step2-info .s2i-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.step2-info .s2i-text strong {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1E293B;\n}\n.step2-info .s2i-text p {\n  font-size: 12px;\n  color: #64748B;\n  margin: 0;\n  line-height: 1.5;\n}\n.alert-error-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #DC2626;\n  margin-bottom: 16px;\n}\n.alert-error-box .material-icons-round {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.btn-submit {\n  width: 100%;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  border: none;\n  border-radius: 13px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.35);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-submit .material-icons-round {\n  font-size: 20px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(20, 69, 245, 0.42);\n}\n.btn-submit:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-submit-flex {\n  width: auto;\n  flex: 1;\n}\n.btn-back {\n  height: 48px;\n  padding: 0 20px;\n  background: transparent;\n  border: 1.5px solid #E2E8F0;\n  border-radius: 13px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748B;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.btn-back .material-icons-round {\n  font-size: 18px;\n}\n.btn-back:hover {\n  background: #F1F5F9;\n  border-color: #CBD5E1;\n  color: #374151;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.btn-spinner {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-footer p {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n}\n.auth-footer a {\n  color: #1445F5;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer a:hover {\n  text-decoration: underline;\n}\n@media (max-width: 860px) {\n  .auth-left {\n    display: none;\n  }\n  .auth-right {\n    background:\n      linear-gradient(\n        145deg,\n        #0A1FA8 0%,\n        #1445F5 55%,\n        #2563EB 100%);\n    padding: 24px 16px;\n    align-items: flex-start;\n    padding-top: 40px;\n  }\n  .auth-card {\n    box-shadow: 0 8px 48px rgba(0, 0, 0, 0.25);\n  }\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 20px 24px;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/auth/register/register.component.ts", lineNumber: 12 });
})();

// src/app/auth/auth-routing.module.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AuthRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      declarations: [LoginComponent, RegisterComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AuthRoutingModule]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-4VI6C55G.js.map
