import {
  LoginComponent
} from "./chunk-PU5KNSD5.js";
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
} from "./chunk-BUNKOKLL.js";
import {
  AuthService
} from "./chunk-LX6YEX77.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgIf,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4MA3A2KE.js";
import "./chunk-YP43Q66R.js";

// src/app/auth/register/register.component.ts
function RegisterComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 63);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("input-error", ctx_r0.f["contact"].invalid && ctx_r0.f["contact"].touched);
  }
}
function RegisterComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 64);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("input-error", ctx_r0.f["contact"].invalid && ctx_r0.f["contact"].touched);
  }
}
function RegisterComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.contactType === "email" ? "Adresse email invalide" : "Num\xE9ro invalide", " ");
  }
}
function RegisterComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Nom requis (2 car. min.)");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 29);
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Code famille : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.familleCodePreview);
  }
}
function RegisterComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 65);
    \u0275\u0275element(2, "div", 66)(3, "div", 66)(4, "div", 66)(5, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.passwordStrength.level >= 1 ? ctx_r0.passwordStrength.color : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.passwordStrength.level >= 2 ? ctx_r0.passwordStrength.color : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.passwordStrength.level >= 3 ? ctx_r0.passwordStrength.color : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.passwordStrength.level >= 4 ? ctx_r0.passwordStrength.color : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.passwordStrength.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.passwordStrength.label);
  }
}
function RegisterComponent_Conditional_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "8 caract\xE8res minimum");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_For_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r2 = ctx.$implicit;
    \u0275\u0275property("value", q_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r2);
  }
}
function RegisterComponent_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Veuillez choisir une question");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "La r\xE9ponse est requise");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function RegisterComponent_Conditional_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 60);
  }
}
function RegisterComponent_Conditional_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "rocket_launch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Cr\xE9er mon espace ");
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  auth;
  router;
  form;
  contactType = "email";
  loading = false;
  errorMsg = "";
  showPassword = false;
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
      contact: ["", [Validators.required, Validators.email]],
      nomFamille: ["", [Validators.required, Validators.minLength(2)]],
      prenom: ["", Validators.required],
      nom: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
      questionSecrete: ["", Validators.required],
      reponseSecrete: ["", [Validators.required, Validators.minLength(2)]]
    });
  }
  get f() {
    return this.form.controls;
  }
  setContactType(type) {
    if (type === this.contactType)
      return;
    this.contactType = type;
    this.errorMsg = "";
    const ctrl = this.form.get("contact");
    ctrl.reset("");
    ctrl.setValidators(type === "email" ? [Validators.required, Validators.email] : [Validators.required, Validators.pattern(/^[+0-9][\d\s\-()+]{6,20}$/)]);
    ctrl.updateValueAndValidity();
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    this.loading = true;
    this.errorMsg = "";
    const isEmail = this.contactType === "email";
    const { contact, nomFamille, prenom, nom, password, questionSecrete, reponseSecrete } = this.form.value;
    const payload = {
      nomFamille,
      prenom,
      nom,
      password,
      questionSecrete,
      reponseSecrete,
      email: isEmail ? contact : void 0,
      telephone: !isEmail ? contact : void 0
    };
    this.auth.register(payload).subscribe({
      next: () => this.router.navigate(["/app/home"]),
      error: (err) => {
        this.errorMsg = err?.error?.error ?? "Une erreur est survenue. Veuillez r\xE9essayer.";
        this.loading = false;
      }
    });
  }
  get passwordStrength() {
    const pwd = this.form.get("password")?.value ?? "";
    if (!pwd)
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
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: false, decls: 155, vars: 34, consts: [[1, "auth-page"], [1, "auth-left"], [1, "al-bg"], ["width", "420", "height", "520", "viewBox", "0 0 420 520", "fill", "none", 1, "al-tree"], ["d", "M210 500 L 210 380", "stroke", "#8B4513", "stroke-width", "7", "stroke-linecap", "round"], ["d", "M210 380 C 180 360, 150 345, 120 320", "stroke", "#8B4513", "stroke-width", "5", "fill", "none", "stroke-linecap", "round"], ["d", "M210 380 C 240 360, 270 345, 300 320", "stroke", "#8B4513", "stroke-width", "5", "fill", "none", "stroke-linecap", "round"], ["d", "M210 380 L 210 310", "stroke", "#8B4513", "stroke-width", "5", "stroke-linecap", "round"], ["d", "M120 320 C 100 295, 88 280, 92 255", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round"], ["d", "M300 320 C 320 295, 332 280, 328 255", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round"], ["d", "M210 310 C 195 285, 195 270, 205 245", "stroke", "#8B4513", "stroke-width", "3.5", "fill", "none", "stroke-linecap", "round"], ["cx", "92", "cy", "250", "r", "15", "fill", "#2E7D32"], ["cx", "205", "cy", "240", "r", "16", "fill", "#81C784"], ["cx", "328", "cy", "250", "r", "15", "fill", "#2E7D32"], ["cx", "120", "cy", "320", "r", "9", "fill", "#3B82F6", "opacity", "0.75"], ["cx", "300", "cy", "320", "r", "9", "fill", "#EC4899", "opacity", "0.75"], [1, "al-sparks"], [1, "al-spark", 2, "left", "18%", "animation-delay", "0s"], [1, "al-spark", 2, "left", "52%", "animation-delay", "1.8s"], [1, "al-spark", 2, "left", "76%", "animation-delay", "3.2s"], [1, "al-dots"], [1, "al-content"], [1, "al-brand"], ["src", "images/logobg.png", "alt", "Mam Buudu", 1, "al-logo-img"], [1, "al-title"], [1, "al-subtitle"], [1, "al-features"], [1, "al-feat"], [1, "al-feat-icon"], [1, "material-icons-round"], [1, "auth-right"], [1, "auth-card"], [1, "auth-card-header"], [1, "auth-card-icon"], ["src", "images/logo.png", "alt", "Mam Buudu"], [3, "ngSubmit", "formGroup"], [1, "contact-toggle"], ["type", "button", 1, "ct-btn", 3, "click"], [1, "form-group"], [1, "input-wrapper"], ["type", "email", "formControlName", "contact", "placeholder", "votre@email.com", 3, "input-error"], ["type", "tel", "formControlName", "contact", "placeholder", "+221 77 000 00 00", 3, "input-error"], [1, "field-error"], ["type", "text", "formControlName", "nomFamille", "placeholder", "Ex : Famille Diallo"], [1, "code-preview"], [1, "form-row"], ["type", "text", "formControlName", "prenom", "placeholder", "Votre pr\xE9nom"], ["type", "text", "formControlName", "nom", "placeholder", "Votre nom"], ["formControlName", "password", "placeholder", "8 caract\xE8res minimum", 3, "type"], [1, "input-suffix"], ["type", "button", 1, "btn-icon-eye", 3, "click"], [1, "pwd-strength"], [1, "label-hint"], [1, "input-wrapper", "input-wrapper-select"], ["formControlName", "questionSecrete"], ["value", ""], [3, "value"], ["type", "text", "formControlName", "reponseSecrete", "placeholder", "Votre r\xE9ponse"], [1, "alert-error-box"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "btn-spinner"], [1, "auth-footer"], ["routerLink", "/auth/login"], ["type", "email", "formControlName", "contact", "placeholder", "votre@email.com"], ["type", "tel", "formControlName", "contact", "placeholder", "+221 77 000 00 00"], [1, "pwd-bars"], [1, "pwd-bar"], [1, "pwd-label"]], template: function RegisterComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(21, "div", 21)(22, "div", 22);
      \u0275\u0275element(23, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "h1", 24);
      \u0275\u0275text(25, "Cr\xE9ez l'espace");
      \u0275\u0275element(26, "br");
      \u0275\u0275text(27, "familial de votre");
      \u0275\u0275element(28, "br");
      \u0275\u0275text(29, "famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 25);
      \u0275\u0275text(31, "Quelques minutes suffisent pour d\xE9marrer votre arbre g\xE9n\xE9alogique.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 26)(33, "div", 27)(34, "div", 28)(35, "span", 29);
      \u0275\u0275text(36, "family_restroom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "Arbre g\xE9n\xE9alogique interactif");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 27)(40, "div", 28)(41, "span", 29);
      \u0275\u0275text(42, "photo_library");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Albums photos familiaux");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 27)(46, "div", 28)(47, "span", 29);
      \u0275\u0275text(48, "auto_stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50, "Stories et souvenirs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 27)(52, "div", 28)(53, "span", 29);
      \u0275\u0275text(54, "lock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56, "Espace priv\xE9 et s\xE9curis\xE9");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "main", 30)(58, "div", 31)(59, "div", 32)(60, "div", 33);
      \u0275\u0275element(61, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h2");
      \u0275\u0275text(63, "Cr\xE9er mon espace familial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p");
      \u0275\u0275text(65, "Rejoignez des milliers de familles sur Mam Buudu.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "form", 35);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_66_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(67, "div", 36)(68, "button", 37);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_68_listener() {
        return ctx.setContactType("email");
      });
      \u0275\u0275elementStart(69, "span", 29);
      \u0275\u0275text(70, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275text(71, "Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 37);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_72_listener() {
        return ctx.setContactType("tel");
      });
      \u0275\u0275elementStart(73, "span", 29);
      \u0275\u0275text(74, "phone");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, "T\xE9l\xE9phone ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 38)(77, "label");
      \u0275\u0275text(78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 39)(80, "span", 29);
      \u0275\u0275text(81);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(82, RegisterComponent_Conditional_82_Template, 1, 2, "input", 40)(83, RegisterComponent_Conditional_83_Template, 1, 2, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(84, RegisterComponent_Conditional_84_Template, 2, 1, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 38)(86, "label");
      \u0275\u0275text(87, "Nom de la famille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 39)(89, "span", 29);
      \u0275\u0275text(90, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "input", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(92, RegisterComponent_Conditional_92_Template, 2, 0, "span", 42);
      \u0275\u0275conditionalCreate(93, RegisterComponent_Conditional_93_Template, 6, 1, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 45)(95, "div", 38)(96, "label");
      \u0275\u0275text(97, "Pr\xE9nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 39)(99, "span", 29);
      \u0275\u0275text(100, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275element(101, "input", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(102, RegisterComponent_Conditional_102_Template, 2, 0, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 38)(104, "label");
      \u0275\u0275text(105, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 39)(107, "span", 29);
      \u0275\u0275text(108, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "input", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(110, RegisterComponent_Conditional_110_Template, 2, 0, "span", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 38)(112, "label");
      \u0275\u0275text(113, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 39)(115, "span", 29);
      \u0275\u0275text(116, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "input", 48);
      \u0275\u0275elementStart(118, "div", 49)(119, "button", 50);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_119_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275elementStart(120, "span", 29);
      \u0275\u0275text(121);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(122, RegisterComponent_Conditional_122_Template, 8, 11, "div", 51);
      \u0275\u0275conditionalCreate(123, RegisterComponent_Conditional_123_Template, 2, 0, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 38)(125, "label");
      \u0275\u0275text(126, "Question secr\xE8te ");
      \u0275\u0275elementStart(127, "span", 52);
      \u0275\u0275text(128, "(r\xE9cup\xE9ration de compte)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 53)(130, "span", 29);
      \u0275\u0275text(131, "help_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "select", 54)(133, "option", 55);
      \u0275\u0275text(134, "-- Choisir une question --");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(135, RegisterComponent_For_136_Template, 2, 2, "option", 56, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(137, RegisterComponent_Conditional_137_Template, 2, 0, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 38)(139, "label");
      \u0275\u0275text(140, "R\xE9ponse secr\xE8te");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 39)(142, "span", 29);
      \u0275\u0275text(143, "key");
      \u0275\u0275elementEnd();
      \u0275\u0275element(144, "input", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(145, RegisterComponent_Conditional_145_Template, 2, 0, "span", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(146, RegisterComponent_Conditional_146_Template, 4, 1, "div", 58);
      \u0275\u0275elementStart(147, "button", 59);
      \u0275\u0275conditionalCreate(148, RegisterComponent_Conditional_148_Template, 1, 0, "span", 60)(149, RegisterComponent_Conditional_149_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 61)(151, "p");
      \u0275\u0275text(152, "D\xE9j\xE0 un compte ? ");
      \u0275\u0275elementStart(153, "a", 62);
      \u0275\u0275text(154, "Se connecter");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(66);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ct-active", ctx.contactType === "email");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("ct-active", ctx.contactType === "tel");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.contactType === "email" ? "Adresse email" : "Num\xE9ro de t\xE9l\xE9phone");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.contactType === "email" ? "email" : "phone");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.contactType === "email" ? 82 : 83);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.f["contact"].invalid && ctx.f["contact"].touched ? 84 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("input-error", ctx.f["nomFamille"].invalid && ctx.f["nomFamille"].touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.f["nomFamille"].invalid && ctx.f["nomFamille"].touched ? 92 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.familleCodePreview ? 93 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("input-error", ctx.f["prenom"].invalid && ctx.f["prenom"].touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.f["prenom"].invalid && ctx.f["prenom"].touched ? 102 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("input-error", ctx.f["nom"].invalid && ctx.f["nom"].touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.f["nom"].invalid && ctx.f["nom"].touched ? 110 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("input-error", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.showPassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.passwordStrength.level > 0 ? 122 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.f["password"].invalid && ctx.f["password"].touched ? 123 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("input-error", ctx.f["questionSecrete"].invalid && ctx.f["questionSecrete"].touched);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.questions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.f["questionSecrete"].invalid && ctx.f["questionSecrete"].touched ? 137 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("input-error", ctx.f["reponseSecrete"].invalid && ctx.f["reponseSecrete"].touched);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.f["reponseSecrete"].invalid && ctx.f["reponseSecrete"].touched ? 145 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMsg ? 146 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 148 : 149);
    }
  }, dependencies: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-left[_ngcontent-%COMP%] {\n  width: 42%;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      160deg,\n      #0A1020 0%,\n      #0E2417 55%,\n      #123B27 100%);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.al-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.al-tree[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -60px;\n  bottom: -30px;\n  opacity: 0.4;\n}\n.al-sparks[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n.al-spark[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #A6E3AF;\n  box-shadow: 0 0 8px 2px rgba(166, 227, 175, 0.7);\n  animation: _ngcontent-%COMP%_sparkRise 5.5s ease-in infinite;\n}\n@keyframes _ngcontent-%COMP%_sparkRise {\n  0% {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  15% {\n    opacity: 0.9;\n  }\n  85% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-90px);\n  }\n}\n.al-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.15) 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n}\n.al-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 48px 44px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  width: 100%;\n  max-width: 420px;\n}\n.al-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.al-logo-img[_ngcontent-%COMP%] {\n  height: clamp(36px, 6vw, 56px);\n  width: auto;\n  max-width: 80%;\n}\n.al-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1.28;\n  margin: 0;\n}\n.al-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0;\n}\n.al-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.al-feat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.11);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.88);\n  transition: background 0.2s;\n}\n.al-feat[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.al-feat-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.al-feat-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #81C784;\n}\n.auth-right[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #F0FDF4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n  min-height: 100vh;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 40px 32px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 8px 40px rgba(15, 42, 30, 0.1);\n  animation: _ngcontent-%COMP%_cardFadeIn 0.45s ease both;\n}\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.auth-card-icon[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  background:\n    linear-gradient(\n      135deg,\n      #F0FDF4,\n      #DCFCE7);\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  padding: 10px 18px;\n}\n.auth-card-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n.auth-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 6px;\n}\n.auth-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.si-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.si-step[_ngcontent-%COMP%]   .si-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #E2E8F0;\n  color: #94A3B8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.si-step[_ngcontent-%COMP%]   .si-circle[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.si-step[_ngcontent-%COMP%]   .si-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94A3B8;\n  font-weight: 500;\n}\n.si-step.si-active[_ngcontent-%COMP%]   .si-circle[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #15803D,\n      #166534);\n  color: #fff;\n  box-shadow: 0 2px 10px rgba(21, 128, 61, 0.3);\n}\n.si-step.si-active[_ngcontent-%COMP%]   .si-label[_ngcontent-%COMP%] {\n  color: #15803D;\n  font-weight: 600;\n}\n.si-step.si-done[_ngcontent-%COMP%]   .si-circle[_ngcontent-%COMP%] {\n  background: #10B981;\n  color: #fff;\n}\n.si-step.si-done[_ngcontent-%COMP%]   .si-label[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.si-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #E2E8F0;\n  margin: 0 12px;\n  margin-bottom: 22px;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.si-line.si-line-done[_ngcontent-%COMP%] {\n  background: #10B981;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #F8FAFC;\n  border: 1.5px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 0 14px;\n  height: 46px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.input-wrapper[_ngcontent-%COMP%]    > .material-icons-round[_ngcontent-%COMP%]:first-child {\n  color: #94A3B8;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: #1E293B;\n  height: 100%;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: #CBD5E1;\n}\n.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #15803D;\n  box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.1);\n  background: #fff;\n}\n.input-wrapper.input-wrapper-select[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.input-suffix[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.btn-icon-eye[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n  color: #94A3B8;\n  transition: color 0.15s, background 0.15s;\n}\n.btn-icon-eye[_ngcontent-%COMP%]:hover {\n  color: #15803D;\n  background: rgba(21, 128, 61, 0.07);\n}\n.btn-icon-eye[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.input-error[_ngcontent-%COMP%] {\n  border-color: #EF4444 !important;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #EF4444;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.code-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #F0FDF4;\n  border: 1px solid #BBF7D0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #166534;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.25s ease both;\n}\n.code-preview[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #15803D;\n  flex-shrink: 0;\n}\n.code-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: #15803D;\n}\n.pwd-strength[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 2px;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.2s ease both;\n}\n.pwd-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex: 1;\n}\n.pwd-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  border-radius: 4px;\n  background: #E2E8F0;\n  transition: background 0.3s ease;\n}\n.pwd-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 36px;\n  text-align: right;\n  transition: color 0.2s;\n}\n.step-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_stepFadeIn 0.3s ease both;\n}\n@keyframes _ngcontent-%COMP%_stepFadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n}\n.step2-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #F0FDF4 0%,\n      #DCFCE7 100%);\n  border: 1px solid #BBF7D0;\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 128, 61, 0.12),\n      rgba(16, 185, 129, 0.1));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #15803D;\n  font-size: 20px;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1E293B;\n}\n.step2-info[_ngcontent-%COMP%]   .s2i-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin: 0;\n  line-height: 1.5;\n}\n.alert-error-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #DC2626;\n  margin-bottom: 16px;\n}\n.alert-error-box[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #15803D,\n      #166534);\n  color: #fff;\n  border: none;\n  border-radius: 13px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(21, 128, 61, 0.35);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-submit[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(21, 128, 61, 0.42);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-submit-flex[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1;\n}\n.btn-back[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 20px;\n  background: transparent;\n  border: 1.5px solid #E2E8F0;\n  border-radius: 13px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748B;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #F1F5F9;\n  border-color: #CBD5E1;\n  color: #374151;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #15803D;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 860px) {\n  .auth-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        160deg,\n        #0A1020 0%,\n        #0E2417 55%,\n        #123B27 100%);\n    padding: 24px 16px;\n    align-items: flex-start;\n    padding-top: 40px;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    box-shadow: 0 8px 48px rgba(0, 0, 0, 0.25);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  [_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px 24px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.ct-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 16px;\n  border: 2px solid #E2E8F0;\n  border-radius: 10px;\n  background: #F8FAFC;\n  color: #64748B;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ct-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.ct-btn[_ngcontent-%COMP%]:hover {\n  border-color: #15803D;\n  color: #15803D;\n  background: rgba(21, 128, 61, 0.05);\n}\n.ct-btn.ct-active[_ngcontent-%COMP%] {\n  border-color: #15803D;\n  background: rgba(21, 128, 61, 0.08);\n  color: #15803D;\n  font-weight: 600;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: false, template: `<div class="auth-page">\r
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
      <div class="al-brand">\r
        <img src="images/logobg.png" class="al-logo-img" alt="Mam Buudu" />\r
      </div>\r
      <h1 class="al-title">Cr\xE9ez l'espace<br/>familial de votre<br/>famille</h1>\r
      <p class="al-subtitle">Quelques minutes suffisent pour d\xE9marrer votre arbre g\xE9n\xE9alogique.</p>\r
      <div class="al-features">\r
        <div class="al-feat">\r
          <div class="al-feat-icon"><span class="material-icons-round">family_restroom</span></div>\r
          <span>Arbre g\xE9n\xE9alogique interactif</span>\r
        </div>\r
        <div class="al-feat">\r
          <div class="al-feat-icon"><span class="material-icons-round">photo_library</span></div>\r
          <span>Albums photos familiaux</span>\r
        </div>\r
        <div class="al-feat">\r
          <div class="al-feat-icon"><span class="material-icons-round">auto_stories</span></div>\r
          <span>Stories et souvenirs</span>\r
        </div>\r
        <div class="al-feat">\r
          <div class="al-feat-icon"><span class="material-icons-round">lock</span></div>\r
          <span>Espace priv\xE9 et s\xE9curis\xE9</span>\r
        </div>\r
      </div>\r
    </div>\r
  </aside>\r
\r
  <!-- \u2550\u2550\u2550 PANNEAU DROIT \u2550\u2550\u2550 -->\r
  <main class="auth-right">\r
    <div class="auth-card">\r
\r
      <div class="auth-card-header">\r
        <div class="auth-card-icon">\r
          <img src="images/logo.png" alt="Mam Buudu" />\r
        </div>\r
        <h2>Cr\xE9er mon espace familial</h2>\r
        <p>Rejoignez des milliers de familles sur Mam Buudu.</p>\r
      </div>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()">\r
\r
        <!-- Contact : email ou t\xE9l\xE9phone -->\r
        <div class="contact-toggle">\r
          <button type="button" class="ct-btn" [class.ct-active]="contactType === 'email'" (click)="setContactType('email')">\r
            <span class="material-icons-round">email</span>Email\r
          </button>\r
          <button type="button" class="ct-btn" [class.ct-active]="contactType === 'tel'" (click)="setContactType('tel')">\r
            <span class="material-icons-round">phone</span>T\xE9l\xE9phone\r
          </button>\r
        </div>\r
\r
        <div class="form-group">\r
          <label>{{ contactType === 'email' ? 'Adresse email' : 'Num\xE9ro de t\xE9l\xE9phone' }}</label>\r
          <div class="input-wrapper">\r
            <span class="material-icons-round">{{ contactType === 'email' ? 'email' : 'phone' }}</span>\r
            @if (contactType === 'email') {\r
              <input type="email" formControlName="contact" placeholder="votre@email.com"\r
                     [class.input-error]="f['contact'].invalid && f['contact'].touched"/>\r
            } @else {\r
              <input type="tel" formControlName="contact" placeholder="+221 77 000 00 00"\r
                     [class.input-error]="f['contact'].invalid && f['contact'].touched"/>\r
            }\r
          </div>\r
          @if (f['contact'].invalid && f['contact'].touched) {\r
            <span class="field-error">\r
              {{ contactType === 'email' ? 'Adresse email invalide' : 'Num\xE9ro invalide' }}\r
            </span>\r
          }\r
        </div>\r
\r
        <!-- Nom famille -->\r
        <div class="form-group">\r
          <label>Nom de la famille</label>\r
          <div class="input-wrapper">\r
            <span class="material-icons-round">group</span>\r
            <input type="text" formControlName="nomFamille" placeholder="Ex : Famille Diallo"\r
                   [class.input-error]="f['nomFamille'].invalid && f['nomFamille'].touched"/>\r
          </div>\r
          @if (f['nomFamille'].invalid && f['nomFamille'].touched) {\r
            <span class="field-error">Nom requis (2 car. min.)</span>\r
          }\r
          @if (familleCodePreview) {\r
            <div class="code-preview">\r
              <span class="material-icons-round">tag</span>\r
              Code famille : <strong>{{ familleCodePreview }}</strong>\r
            </div>\r
          }\r
        </div>\r
\r
        <!-- Pr\xE9nom + Nom -->\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label>Pr\xE9nom</label>\r
            <div class="input-wrapper">\r
              <span class="material-icons-round">badge</span>\r
              <input type="text" formControlName="prenom" placeholder="Votre pr\xE9nom"\r
                     [class.input-error]="f['prenom'].invalid && f['prenom'].touched"/>\r
            </div>\r
            @if (f['prenom'].invalid && f['prenom'].touched) {\r
              <span class="field-error">Requis</span>\r
            }\r
          </div>\r
          <div class="form-group">\r
            <label>Nom</label>\r
            <div class="input-wrapper">\r
              <span class="material-icons-round">badge</span>\r
              <input type="text" formControlName="nom" placeholder="Votre nom"\r
                     [class.input-error]="f['nom'].invalid && f['nom'].touched"/>\r
            </div>\r
            @if (f['nom'].invalid && f['nom'].touched) {\r
              <span class="field-error">Requis</span>\r
            }\r
          </div>\r
        </div>\r
\r
        <!-- Mot de passe -->\r
        <div class="form-group">\r
          <label>Mot de passe</label>\r
          <div class="input-wrapper">\r
            <span class="material-icons-round">lock</span>\r
            <input [type]="showPassword ? 'text' : 'password'" formControlName="password"\r
                   placeholder="8 caract\xE8res minimum"\r
                   [class.input-error]="f['password'].invalid && f['password'].touched"/>\r
            <div class="input-suffix">\r
              <button type="button" class="btn-icon-eye" (click)="showPassword = !showPassword">\r
                <span class="material-icons-round">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>\r
              </button>\r
            </div>\r
          </div>\r
          @if (passwordStrength.level > 0) {\r
            <div class="pwd-strength">\r
              <div class="pwd-bars">\r
                <div class="pwd-bar" [style.background]="passwordStrength.level >= 1 ? passwordStrength.color : ''"></div>\r
                <div class="pwd-bar" [style.background]="passwordStrength.level >= 2 ? passwordStrength.color : ''"></div>\r
                <div class="pwd-bar" [style.background]="passwordStrength.level >= 3 ? passwordStrength.color : ''"></div>\r
                <div class="pwd-bar" [style.background]="passwordStrength.level >= 4 ? passwordStrength.color : ''"></div>\r
              </div>\r
              <span class="pwd-label" [style.color]="passwordStrength.color">{{ passwordStrength.label }}</span>\r
            </div>\r
          }\r
          @if (f['password'].invalid && f['password'].touched) {\r
            <span class="field-error">8 caract\xE8res minimum</span>\r
          }\r
        </div>\r
\r
        <!-- Question secr\xE8te -->\r
        <div class="form-group">\r
          <label>Question secr\xE8te <span class="label-hint">(r\xE9cup\xE9ration de compte)</span></label>\r
          <div class="input-wrapper input-wrapper-select">\r
            <span class="material-icons-round">help_outline</span>\r
            <select formControlName="questionSecrete"\r
                    [class.input-error]="f['questionSecrete'].invalid && f['questionSecrete'].touched">\r
              <option value="">-- Choisir une question --</option>\r
              @for (q of questions; track q) {\r
                <option [value]="q">{{ q }}</option>\r
              }\r
            </select>\r
          </div>\r
          @if (f['questionSecrete'].invalid && f['questionSecrete'].touched) {\r
            <span class="field-error">Veuillez choisir une question</span>\r
          }\r
        </div>\r
\r
        <div class="form-group">\r
          <label>R\xE9ponse secr\xE8te</label>\r
          <div class="input-wrapper">\r
            <span class="material-icons-round">key</span>\r
            <input type="text" formControlName="reponseSecrete" placeholder="Votre r\xE9ponse"\r
                   [class.input-error]="f['reponseSecrete'].invalid && f['reponseSecrete'].touched"/>\r
          </div>\r
          @if (f['reponseSecrete'].invalid && f['reponseSecrete'].touched) {\r
            <span class="field-error">La r\xE9ponse est requise</span>\r
          }\r
        </div>\r
\r
        @if (errorMsg) {\r
          <div class="alert-error-box">\r
            <span class="material-icons-round">error_outline</span>{{ errorMsg }}\r
          </div>\r
        }\r
\r
        <button type="submit" class="btn-submit" [disabled]="loading">\r
          @if (loading) {\r
            <span class="btn-spinner"></span>\r
          } @else {\r
            <span class="material-icons-round">rocket_launch</span>\r
            Cr\xE9er mon espace\r
          }\r
        </button>\r
\r
      </form>\r
\r
      <div class="auth-footer">\r
        <p>D\xE9j\xE0 un compte ? <a routerLink="/auth/login">Se connecter</a></p>\r
      </div>\r
\r
    </div>\r
  </main>\r
\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/auth/register/register.component.scss */\n.auth-page {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-left {\n  width: 42%;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      160deg,\n      #0A1020 0%,\n      #0E2417 55%,\n      #123B27 100%);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.al-bg {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.al-tree {\n  position: absolute;\n  right: -60px;\n  bottom: -30px;\n  opacity: 0.4;\n}\n.al-sparks {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n.al-spark {\n  position: absolute;\n  bottom: 40px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #A6E3AF;\n  box-shadow: 0 0 8px 2px rgba(166, 227, 175, 0.7);\n  animation: sparkRise 5.5s ease-in infinite;\n}\n@keyframes sparkRise {\n  0% {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  15% {\n    opacity: 0.9;\n  }\n  85% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-90px);\n  }\n}\n.al-dots {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.15) 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n}\n.al-content {\n  position: relative;\n  z-index: 1;\n  padding: 48px 44px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  width: 100%;\n  max-width: 420px;\n}\n.al-brand {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.al-logo-img {\n  height: clamp(36px, 6vw, 56px);\n  width: auto;\n  max-width: 80%;\n}\n.al-title {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1.28;\n  margin: 0;\n}\n.al-subtitle {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0;\n}\n.al-features {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.al-feat {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  background: rgba(255, 255, 255, 0.09);\n  border: 1px solid rgba(255, 255, 255, 0.11);\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.88);\n  transition: background 0.2s;\n}\n.al-feat:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.al-feat-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.al-feat-icon .material-icons-round {\n  font-size: 16px !important;\n  color: #81C784;\n}\n.auth-right {\n  flex: 1;\n  background: #F0FDF4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n  min-height: 100vh;\n}\n.auth-card {\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 40px 32px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 8px 40px rgba(15, 42, 30, 0.1);\n  animation: cardFadeIn 0.45s ease both;\n}\n@keyframes cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n}\n.auth-card-header {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.auth-card-icon {\n  width: auto;\n  height: auto;\n  background:\n    linear-gradient(\n      135deg,\n      #F0FDF4,\n      #DCFCE7);\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  padding: 10px 18px;\n}\n.auth-card-icon img {\n  width: 150px;\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n.auth-card-header h2 {\n  font-size: 21px;\n  font-weight: 700;\n  color: #0F172A;\n  margin: 0 0 6px;\n}\n.auth-card-header p {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n}\n.step-indicator {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.si-step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.si-step .si-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #E2E8F0;\n  color: #94A3B8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.si-step .si-circle .material-icons-round {\n  font-size: 17px;\n}\n.si-step .si-label {\n  font-size: 11px;\n  color: #94A3B8;\n  font-weight: 500;\n}\n.si-step.si-active .si-circle {\n  background:\n    linear-gradient(\n      135deg,\n      #15803D,\n      #166534);\n  color: #fff;\n  box-shadow: 0 2px 10px rgba(21, 128, 61, 0.3);\n}\n.si-step.si-active .si-label {\n  color: #15803D;\n  font-weight: 600;\n}\n.si-step.si-done .si-circle {\n  background: #10B981;\n  color: #fff;\n}\n.si-step.si-done .si-label {\n  color: #10B981;\n}\n.si-line {\n  flex: 1;\n  height: 2px;\n  background: #E2E8F0;\n  margin: 0 12px;\n  margin-bottom: 22px;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.si-line.si-line-done {\n  background: #10B981;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-row .form-group {\n  margin-bottom: 16px;\n}\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #F8FAFC;\n  border: 1.5px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 0 14px;\n  height: 46px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.input-wrapper > .material-icons-round:first-child {\n  color: #94A3B8;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.input-wrapper input,\n.input-wrapper select {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: #1E293B;\n  height: 100%;\n}\n.input-wrapper input::placeholder,\n.input-wrapper select::placeholder {\n  color: #CBD5E1;\n}\n.input-wrapper select {\n  cursor: pointer;\n}\n.input-wrapper:focus-within {\n  border-color: #15803D;\n  box-shadow: 0 0 0 3px rgba(21, 128, 61, 0.1);\n  background: #fff;\n}\n.input-wrapper.input-wrapper-select {\n  padding-right: 10px;\n}\n.input-suffix {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.btn-icon-eye {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n  color: #94A3B8;\n  transition: color 0.15s, background 0.15s;\n}\n.btn-icon-eye:hover {\n  color: #15803D;\n  background: rgba(21, 128, 61, 0.07);\n}\n.btn-icon-eye .material-icons-round {\n  font-size: 18px;\n}\n.input-error {\n  border-color: #EF4444 !important;\n}\n.field-error {\n  font-size: 12px;\n  color: #EF4444;\n}\n.field-hint {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.code-preview {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #F0FDF4;\n  border: 1px solid #BBF7D0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #166534;\n  animation: fadeSlideIn 0.25s ease both;\n}\n.code-preview .material-icons-round {\n  font-size: 16px;\n  color: #15803D;\n  flex-shrink: 0;\n}\n.code-preview strong {\n  font-family: "Courier New", monospace;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: #15803D;\n}\n.pwd-strength {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 2px;\n  animation: fadeSlideIn 0.2s ease both;\n}\n.pwd-bars {\n  display: flex;\n  gap: 4px;\n  flex: 1;\n}\n.pwd-bar {\n  flex: 1;\n  height: 4px;\n  border-radius: 4px;\n  background: #E2E8F0;\n  transition: background 0.3s ease;\n}\n.pwd-label {\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 36px;\n  text-align: right;\n  transition: color 0.2s;\n}\n.step-panel {\n  animation: stepFadeIn 0.3s ease both;\n}\n@keyframes stepFadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n@keyframes fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n}\n.step2-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #F0FDF4 0%,\n      #DCFCE7 100%);\n  border: 1px solid #BBF7D0;\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.step2-info .s2i-icon {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 128, 61, 0.12),\n      rgba(16, 185, 129, 0.1));\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.step2-info .s2i-icon .material-icons-round {\n  color: #15803D;\n  font-size: 20px;\n}\n.step2-info .s2i-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.step2-info .s2i-text strong {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1E293B;\n}\n.step2-info .s2i-text p {\n  font-size: 12px;\n  color: #64748B;\n  margin: 0;\n  line-height: 1.5;\n}\n.alert-error-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #DC2626;\n  margin-bottom: 16px;\n}\n.alert-error-box .material-icons-round {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.btn-submit {\n  width: 100%;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #15803D,\n      #166534);\n  color: #fff;\n  border: none;\n  border-radius: 13px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 16px rgba(21, 128, 61, 0.35);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-submit .material-icons-round {\n  font-size: 20px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(21, 128, 61, 0.42);\n}\n.btn-submit:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-submit-flex {\n  width: auto;\n  flex: 1;\n}\n.btn-back {\n  height: 48px;\n  padding: 0 20px;\n  background: transparent;\n  border: 1.5px solid #E2E8F0;\n  border-radius: 13px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #64748B;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.btn-back .material-icons-round {\n  font-size: 18px;\n}\n.btn-back:hover {\n  background: #F1F5F9;\n  border-color: #CBD5E1;\n  color: #374151;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.btn-spinner {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-footer p {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n}\n.auth-footer a {\n  color: #15803D;\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer a:hover {\n  text-decoration: underline;\n}\n@media (max-width: 860px) {\n  .auth-left {\n    display: none;\n  }\n  .auth-right {\n    background:\n      linear-gradient(\n        160deg,\n        #0A1020 0%,\n        #0E2417 55%,\n        #123B27 100%);\n    padding: 24px 16px;\n    align-items: flex-start;\n    padding-top: 40px;\n  }\n  .auth-card {\n    box-shadow: 0 8px 48px rgba(0, 0, 0, 0.25);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :host * {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 20px 24px;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-toggle {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.ct-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 16px;\n  border: 2px solid #E2E8F0;\n  border-radius: 10px;\n  background: #F8FAFC;\n  color: #64748B;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.ct-btn .material-icons-round {\n  font-size: 18px;\n}\n.ct-btn:hover {\n  border-color: #15803D;\n  color: #15803D;\n  background: rgba(21, 128, 61, 0.05);\n}\n.ct-btn.ct-active {\n  border-color: #15803D;\n  background: rgba(21, 128, 61, 0.08);\n  color: #15803D;\n  font-weight: 600;\n}\n/*# sourceMappingURL=register.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/auth/register/register.component.ts", lineNumber: 12 });
})();

// src/app/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_ng_container_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.erreur, " ");
  }
}
function ForgotPasswordComponent_ng_container_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Adresse email invalide ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_ng_container_7_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_ng_container_7_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
}
function ForgotPasswordComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1", 7);
    \u0275\u0275text(2, "Mot de passe oubli\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4, "Entrez votre adresse email pour recevoir un lien de r\xE9initialisation.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ForgotPasswordComponent_ng_container_7_div_5_Template, 4, 1, "div", 9);
    \u0275\u0275elementStart(6, "form", 10);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_ng_container_7_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(7, "div", 11)(8, "label", 12);
    \u0275\u0275text(9, "Adresse email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13)(11, "span", 14);
    \u0275\u0275text(12, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ForgotPasswordComponent_ng_container_7_div_14_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 17);
    \u0275\u0275template(16, ForgotPasswordComponent_ng_container_7_span_16_Template, 2, 0, "span", 18)(17, ForgotPasswordComponent_ng_container_7_span_17_Template, 1, 0, "span", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.erreur);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.form.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.form.get("email")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Envoi\u2026" : "Envoyer le lien", " ");
  }
}
function ForgotPasswordComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "span", 3);
    \u0275\u0275text(3, "mark_email_read");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h1", 7);
    \u0275\u0275text(5, "Email envoy\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7, " Si cette adresse est enregistr\xE9e, vous recevrez un email avec les instructions de r\xE9initialisation. V\xE9rifiez \xE9galement vos spams. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb;
  auth;
  form;
  loading = false;
  sent = false;
  erreur = null;
  constructor(fb, auth) {
    this.fb = fb;
    this.auth = auth;
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  submit() {
    if (this.form.invalid || this.loading)
      return;
    this.loading = true;
    this.erreur = null;
    this.auth.forgotPassword(this.form.value.email.trim().toLowerCase()).subscribe({
      next: () => {
        this.loading = false;
        this.sent = true;
      },
      error: (err) => {
        this.loading = false;
        this.erreur = err?.error?.error ?? "Une erreur s'est produite.";
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: false, decls: 14, vars: 2, consts: [[1, "auth-wrap"], [1, "auth-card"], [1, "auth-logo"], [1, "material-icons-round"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login", 1, "auth-link"], [1, "auth-title"], [1, "auth-subtitle"], ["class", "auth-error", 4, "ngIf"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], [1, "input-wrap"], [1, "material-icons-round", "input-icon"], ["type", "email", "formControlName", "email", "placeholder", "exemple@email.com", "autocomplete", "email", 1, "form-input"], ["class", "field-error", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "material-icons-round", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "auth-error"], [1, "field-error"], [1, "spinner"], [1, "sent-icon"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ForgotPasswordComponent_ng_container_7_Template, 19, 7, "ng-container", 4)(8, ForgotPasswordComponent_ng_container_8_Template, 8, 0, "ng-container", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "a", 6)(11, "span", 3);
      \u0275\u0275text(12, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, "Retour \xE0 la connexion ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.sent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sent);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 36px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_cardFadeIn 0.4s ease both;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 28px;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1445F5;\n}\n.auth-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  text-align: center;\n  margin-bottom: 8px;\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  text-align: center;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.auth-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: #FEF2F2;\n  color: #DC2626;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  border: 1px solid #FECACA;\n}\n.auth-error[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  flex-shrink: 0;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  font-size: 18px !important;\n  color: #9CA3AF;\n  pointer-events: none;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 14px 11px 40px;\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #111827;\n  transition: all 0.15s;\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8,\n      #1445F5);\n  box-shadow: 0 6px 24px rgba(20, 69, 245, 0.45);\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.65s linear infinite;\n}\n.sent-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 8px 0 16px;\n}\n.sent-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #059669;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  color: #1445F5;\n}\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: false, template: `<div class="auth-wrap">\r
  <div class="auth-card">\r
    <div class="auth-logo">\r
      <span class="material-icons-round">account_tree</span>\r
      <span>Mam Buudu</span>\r
    </div>\r
\r
    <ng-container *ngIf="!sent">\r
      <h1 class="auth-title">Mot de passe oubli\xE9</h1>\r
      <p class="auth-subtitle">Entrez votre adresse email pour recevoir un lien de r\xE9initialisation.</p>\r
\r
      <div *ngIf="erreur" class="auth-error">\r
        <span class="material-icons-round">error_outline</span>{{ erreur }}\r
      </div>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="auth-form">\r
        <div class="form-group">\r
          <label class="form-label">Adresse email</label>\r
          <div class="input-wrap">\r
            <span class="material-icons-round input-icon">email</span>\r
            <input\r
              class="form-input"\r
              type="email"\r
              formControlName="email"\r
              placeholder="exemple@email.com"\r
              autocomplete="email"\r
            />\r
          </div>\r
          <div class="field-error" *ngIf="form.get('email')?.touched && form.get('email')?.invalid">\r
            Adresse email invalide\r
          </div>\r
        </div>\r
\r
        <button type="submit" class="btn-submit" [disabled]="loading">\r
          <span class="material-icons-round" *ngIf="!loading">send</span>\r
          <span class="spinner" *ngIf="loading"></span>\r
          {{ loading ? 'Envoi\u2026' : 'Envoyer le lien' }}\r
        </button>\r
      </form>\r
    </ng-container>\r
\r
    <ng-container *ngIf="sent">\r
      <div class="sent-icon">\r
        <span class="material-icons-round">mark_email_read</span>\r
      </div>\r
      <h1 class="auth-title">Email envoy\xE9 !</h1>\r
      <p class="auth-subtitle">\r
        Si cette adresse est enregistr\xE9e, vous recevrez un email avec les instructions de r\xE9initialisation.\r
        V\xE9rifiez \xE9galement vos spams.\r
      </p>\r
    </ng-container>\r
\r
    <div class="auth-footer">\r
      <a routerLink="/auth/login" class="auth-link">\r
        <span class="material-icons-round">arrow_back</span>Retour \xE0 la connexion\r
      </a>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/auth/forgot-password/forgot-password.component.scss */\n:host {\n  display: block;\n}\n.auth-wrap {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 36px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  animation: cardFadeIn 0.4s ease both;\n}\n.auth-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 28px;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1445F5;\n}\n.auth-logo .material-icons-round {\n  font-size: 28px !important;\n}\n.auth-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  text-align: center;\n  margin-bottom: 8px;\n}\n.auth-subtitle {\n  font-size: 14px;\n  color: #6B7280;\n  text-align: center;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.auth-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: #FEF2F2;\n  color: #DC2626;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  border: 1px solid #FECACA;\n}\n.auth-error .material-icons-round {\n  font-size: 17px !important;\n  flex-shrink: 0;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon {\n  position: absolute;\n  left: 12px;\n  font-size: 18px !important;\n  color: #9CA3AF;\n  pointer-events: none;\n}\n.form-input {\n  width: 100%;\n  padding: 11px 14px 11px 40px;\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #111827;\n  transition: all 0.15s;\n  outline: none;\n}\n.form-input::placeholder {\n  color: #9CA3AF;\n}\n.form-input:focus {\n  background: #fff;\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n}\n.field-error {\n  font-size: 11px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.btn-submit {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.35);\n}\n.btn-submit .material-icons-round {\n  font-size: 18px !important;\n}\n.btn-submit:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8,\n      #1445F5);\n  box-shadow: 0 6px 24px rgba(20, 69, 245, 0.45);\n  transform: translateY(-1px);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.65s linear infinite;\n}\n.sent-icon {\n  text-align: center;\n  margin: 8px 0 16px;\n}\n.sent-icon .material-icons-round {\n  font-size: 64px;\n  color: #059669;\n}\n.auth-footer {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link .material-icons-round {\n  font-size: 16px !important;\n}\n.auth-link:hover {\n  color: #1445F5;\n}\n@keyframes cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.component.ts", lineNumber: 11 });
})();

// src/app/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_ng_container_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.erreur, " ");
  }
}
function ResetPasswordComponent_ng_container_7_form_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " Minimum 8 caract\xE8res ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_7_form_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " Les mots de passe ne correspondent pas ");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_7_form_6_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_7_form_6_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function ResetPasswordComponent_ng_container_7_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_ng_container_7_form_6_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "label", 14);
    \u0275\u0275text(3, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "span", 16);
    \u0275\u0275text(6, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 17);
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_7_form_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showPwd = !ctx_r0.showPwd);
    });
    \u0275\u0275elementStart(9, "span", 3);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, ResetPasswordComponent_ng_container_7_form_6_div_11_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13)(13, "label", 14);
    \u0275\u0275text(14, "Confirmer le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15)(16, "span", 16);
    \u0275\u0275text(17, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 20);
    \u0275\u0275elementStart(19, "button", 18);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_7_form_6_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showConf = !ctx_r0.showConf);
    });
    \u0275\u0275elementStart(20, "span", 3);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, ResetPasswordComponent_ng_container_7_form_6_div_22_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 21);
    \u0275\u0275template(24, ResetPasswordComponent_ng_container_7_form_6_span_24_Template, 2, 0, "span", 22)(25, ResetPasswordComponent_ng_container_7_form_6_span_25_Template, 1, 0, "span", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r0.showPwd ? "text" : "password");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.showPwd ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.form.get("password")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r0.form.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["minlength"]));
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r0.showConf ? "text" : "password");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.showConf ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.touched && (ctx_r0.form.errors == null ? null : ctx_r0.form.errors["mismatch"]));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading || !ctx_r0.token);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Enregistrement\u2026" : "Enregistrer le mot de passe", " ");
  }
}
function ResetPasswordComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h1", 7);
    \u0275\u0275text(2, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4, "Choisissez un nouveau mot de passe s\xE9curis\xE9 pour votre compte.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ResetPasswordComponent_ng_container_7_div_5_Template, 4, 1, "div", 9)(6, ResetPasswordComponent_ng_container_7_form_6_Template, 27, 11, "form", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.erreur);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.token);
  }
}
function ResetPasswordComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 26)(2, "span", 3);
    \u0275\u0275text(3, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h1", 7);
    \u0275\u0275text(5, "Mot de passe modifi\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7, "Votre mot de passe a \xE9t\xE9 r\xE9initialis\xE9. Vous allez \xEAtre redirig\xE9 vers la connexion\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function passwordMatch(ctrl) {
  const pwd = ctrl.get("password")?.value;
  const conf = ctrl.get("confirm")?.value;
  return pwd && conf && pwd !== conf ? { mismatch: true } : null;
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  auth;
  route;
  router;
  form;
  token = "";
  loading = false;
  done = false;
  showPwd = false;
  showConf = false;
  erreur = null;
  constructor(fb, auth, route, router) {
    this.fb = fb;
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.form = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirm: ["", Validators.required]
    }, { validators: passwordMatch });
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") ?? "";
    if (!this.token) {
      this.erreur = "Lien invalide. Veuillez refaire une demande.";
    }
  }
  submit() {
    if (this.form.invalid || this.loading || !this.token)
      return;
    this.loading = true;
    this.erreur = null;
    this.auth.resetPassword(this.token, this.form.value.password).subscribe({
      next: () => {
        this.loading = false;
        this.done = true;
        setTimeout(() => this.router.navigate(["/auth/login"]), 3e3);
      },
      error: (err) => {
        this.loading = false;
        this.erreur = err?.error?.error ?? "Le lien est invalide ou expir\xE9.";
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: false, decls: 14, vars: 2, consts: [[1, "auth-wrap"], [1, "auth-card"], [1, "auth-logo"], [1, "material-icons-round"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login", 1, "auth-link"], [1, "auth-title"], [1, "auth-subtitle"], ["class", "auth-error", 4, "ngIf"], ["class", "auth-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "auth-error"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], [1, "input-wrap"], [1, "material-icons-round", "input-icon"], ["formControlName", "password", "placeholder", "8 caract\xE8res minimum", "autocomplete", "new-password", 1, "form-input", 3, "type"], ["type", "button", "tabindex", "-1", 1, "toggle-pwd", 3, "click"], ["class", "field-error", 4, "ngIf"], ["formControlName", "confirm", "placeholder", "R\xE9p\xE9tez le mot de passe", "autocomplete", "new-password", 1, "form-input", 3, "type"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "material-icons-round", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "field-error"], [1, "spinner"], [1, "done-icon"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ResetPasswordComponent_ng_container_7_Template, 7, 2, "ng-container", 4)(8, ResetPasswordComponent_ng_container_8_Template, 8, 0, "ng-container", 4);
      \u0275\u0275elementStart(9, "div", 5)(10, "a", 6)(11, "span", 3);
      \u0275\u0275text(12, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, "Retour \xE0 la connexion ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.done);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.done);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 36px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_cardFadeIn 0.4s ease both;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 28px;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1445F5;\n}\n.auth-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  text-align: center;\n  margin-bottom: 8px;\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  text-align: center;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.auth-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: #FEF2F2;\n  color: #DC2626;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  border: 1px solid #FECACA;\n}\n.auth-error[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 17px !important;\n  flex-shrink: 0;\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  font-size: 18px !important;\n  color: #9CA3AF;\n  pointer-events: none;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 40px 11px 40px;\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #111827;\n  transition: all 0.15s;\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n}\n.toggle-pwd[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: #9CA3AF;\n  display: flex;\n  align-items: center;\n}\n.toggle-pwd[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.toggle-pwd[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.35);\n  margin-top: 4px;\n}\n.btn-submit[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8,\n      #1445F5);\n  transform: translateY(-1px);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.65s linear infinite;\n}\n.done-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 8px 0 16px;\n}\n.done-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #2563eb;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  color: #1445F5;\n}\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=reset-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: false, template: `<div class="auth-wrap">\r
  <div class="auth-card">\r
    <div class="auth-logo">\r
      <span class="material-icons-round">account_tree</span>\r
      <span>Mam Buudu</span>\r
    </div>\r
\r
    <ng-container *ngIf="!done">\r
      <h1 class="auth-title">Nouveau mot de passe</h1>\r
      <p class="auth-subtitle">Choisissez un nouveau mot de passe s\xE9curis\xE9 pour votre compte.</p>\r
\r
      <div *ngIf="erreur" class="auth-error">\r
        <span class="material-icons-round">error_outline</span>{{ erreur }}\r
      </div>\r
\r
      <form [formGroup]="form" (ngSubmit)="submit()" class="auth-form" *ngIf="token">\r
        <div class="form-group">\r
          <label class="form-label">Nouveau mot de passe</label>\r
          <div class="input-wrap">\r
            <span class="material-icons-round input-icon">lock</span>\r
            <input\r
              class="form-input"\r
              [type]="showPwd ? 'text' : 'password'"\r
              formControlName="password"\r
              placeholder="8 caract\xE8res minimum"\r
              autocomplete="new-password"\r
            />\r
            <button type="button" class="toggle-pwd" (click)="showPwd = !showPwd" tabindex="-1">\r
              <span class="material-icons-round">{{ showPwd ? 'visibility_off' : 'visibility' }}</span>\r
            </button>\r
          </div>\r
          <div class="field-error" *ngIf="form.get('password')?.touched && form.get('password')?.errors?.['minlength']">\r
            Minimum 8 caract\xE8res\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label">Confirmer le mot de passe</label>\r
          <div class="input-wrap">\r
            <span class="material-icons-round input-icon">lock_outline</span>\r
            <input\r
              class="form-input"\r
              [type]="showConf ? 'text' : 'password'"\r
              formControlName="confirm"\r
              placeholder="R\xE9p\xE9tez le mot de passe"\r
              autocomplete="new-password"\r
            />\r
            <button type="button" class="toggle-pwd" (click)="showConf = !showConf" tabindex="-1">\r
              <span class="material-icons-round">{{ showConf ? 'visibility_off' : 'visibility' }}</span>\r
            </button>\r
          </div>\r
          <div class="field-error" *ngIf="form.touched && form.errors?.['mismatch']">\r
            Les mots de passe ne correspondent pas\r
          </div>\r
        </div>\r
\r
        <button type="submit" class="btn-submit" [disabled]="loading || !token">\r
          <span class="material-icons-round" *ngIf="!loading">check_circle</span>\r
          <span class="spinner" *ngIf="loading"></span>\r
          {{ loading ? 'Enregistrement\u2026' : 'Enregistrer le mot de passe' }}\r
        </button>\r
      </form>\r
    </ng-container>\r
\r
    <ng-container *ngIf="done">\r
      <div class="done-icon">\r
        <span class="material-icons-round">verified</span>\r
      </div>\r
      <h1 class="auth-title">Mot de passe modifi\xE9 !</h1>\r
      <p class="auth-subtitle">Votre mot de passe a \xE9t\xE9 r\xE9initialis\xE9. Vous allez \xEAtre redirig\xE9 vers la connexion\u2026</p>\r
    </ng-container>\r
\r
    <div class="auth-footer">\r
      <a routerLink="/auth/login" class="auth-link">\r
        <span class="material-icons-round">arrow_back</span>Retour \xE0 la connexion\r
      </a>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/auth/reset-password/reset-password.component.scss */\n:host {\n  display: block;\n}\n.auth-wrap {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 36px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  animation: cardFadeIn 0.4s ease both;\n}\n.auth-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 28px;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1445F5;\n}\n.auth-logo .material-icons-round {\n  font-size: 28px !important;\n}\n.auth-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  text-align: center;\n  margin-bottom: 8px;\n}\n.auth-subtitle {\n  font-size: 14px;\n  color: #6B7280;\n  text-align: center;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.auth-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: #FEF2F2;\n  color: #DC2626;\n  border-radius: 10px;\n  font-size: 13px;\n  margin-bottom: 16px;\n  border: 1px solid #FECACA;\n}\n.auth-error .material-icons-round {\n  font-size: 17px !important;\n  flex-shrink: 0;\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n.form-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon {\n  position: absolute;\n  left: 12px;\n  font-size: 18px !important;\n  color: #9CA3AF;\n  pointer-events: none;\n}\n.form-input {\n  width: 100%;\n  padding: 11px 40px 11px 40px;\n  background: #F9FAFB;\n  border: 1.5px solid #E5E7EB;\n  border-radius: 10px;\n  font-family: inherit;\n  font-size: 14px;\n  color: #111827;\n  transition: all 0.15s;\n  outline: none;\n}\n.form-input::placeholder {\n  color: #9CA3AF;\n}\n.form-input:focus {\n  background: #fff;\n  border-color: #1445F5;\n  box-shadow: 0 0 0 3px rgba(20, 69, 245, 0.1);\n}\n.toggle-pwd {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: #9CA3AF;\n  display: flex;\n  align-items: center;\n}\n.toggle-pwd:hover {\n  color: #374151;\n}\n.toggle-pwd .material-icons-round {\n  font-size: 18px !important;\n}\n.field-error {\n  font-size: 11px;\n  color: #EF4444;\n  margin-top: 4px;\n}\n.btn-submit {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1445F5,\n      #2563EB);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 16px rgba(20, 69, 245, 0.35);\n  margin-top: 4px;\n}\n.btn-submit .material-icons-round {\n  font-size: 18px !important;\n}\n.btn-submit:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0A1FA8,\n      #1445F5);\n  transform: translateY(-1px);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.65s linear infinite;\n}\n.done-icon {\n  text-align: center;\n  margin: 8px 0 16px;\n}\n.done-icon .material-icons-round {\n  font-size: 64px;\n  color: #2563eb;\n}\n.auth-footer {\n  margin-top: 24px;\n  text-align: center;\n}\n.auth-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link .material-icons-round {\n  font-size: 16px !important;\n}\n.auth-link:hover {\n  color: #1445F5;\n}\n@keyframes cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=reset-password.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/auth/reset-password/reset-password.component.ts", lineNumber: 18 });
})();

// src/app/auth/verify-email/verify-email.component.ts
function VerifyEmailComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275element(2, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 9);
    \u0275\u0275text(4, "V\xE9rification en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, "Nous confirmons votre adresse email.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function VerifyEmailComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "span", 3);
    \u0275\u0275text(3, "verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h1", 9);
    \u0275\u0275text(5, "Email v\xE9rifi\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7, "Votre adresse email a \xE9t\xE9 confirm\xE9e avec succ\xE8s. Votre compte est maintenant enti\xE8rement actif.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function VerifyEmailComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 12)(2, "span", 3);
    \u0275\u0275text(3, "error_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h1", 9);
    \u0275\u0275text(5, "Lien invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.erreur);
  }
}
var VerifyEmailComponent = class _VerifyEmailComponent {
  route;
  auth;
  state = "loading";
  erreur = "";
  constructor(route, auth) {
    this.route = route;
    this.auth = auth;
  }
  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get("token");
    if (!token) {
      this.state = "error";
      this.erreur = "Lien invalide.";
      return;
    }
    this.auth.verifyEmail(token).subscribe({
      next: () => {
        this.state = "success";
      },
      error: (err) => {
        this.state = "error";
        this.erreur = err?.error?.error ?? "Le lien est invalide ou expir\xE9.";
      }
    });
  }
  static \u0275fac = function VerifyEmailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerifyEmailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmailComponent, selectors: [["app-verify-email"]], standalone: false, decls: 15, vars: 3, consts: [[1, "auth-wrap"], [1, "auth-card"], [1, "auth-logo"], [1, "material-icons-round"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login", 1, "auth-link"], [1, "state-icon", "loading"], [1, "spinner-lg"], [1, "auth-title"], [1, "auth-subtitle"], [1, "state-icon", "success"], [1, "state-icon", "error"]], template: function VerifyEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Mam Buudu");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, VerifyEmailComponent_ng_container_7_Template, 7, 0, "ng-container", 4)(8, VerifyEmailComponent_ng_container_8_Template, 8, 0, "ng-container", 4)(9, VerifyEmailComponent_ng_container_9_Template, 8, 1, "ng-container", 4);
      \u0275\u0275elementStart(10, "div", 5)(11, "a", 6)(12, "span", 3);
      \u0275\u0275text(13, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, "Retour \xE0 la connexion ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.state === "loading");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "error");
    }
  }, dependencies: [NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 36px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  text-align: center;\n  animation: _ngcontent-%COMP%_cardFadeIn 0.4s ease both;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 32px;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1445F5;\n}\n.auth-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n}\n.state-icon[_ngcontent-%COMP%] {\n  margin: 0 auto 20px;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.state-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 36px !important;\n}\n.state-icon.loading[_ngcontent-%COMP%] {\n  background: #EEF2FF;\n}\n.state-icon.success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n}\n.state-icon.success[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.state-icon.error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n}\n.state-icon.error[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #C7D2FE;\n  border-top-color: #1445F5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin-bottom: 10px;\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.auth-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  color: #1445F5;\n}\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=verify-email.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyEmailComponent, [{
    type: Component,
    args: [{ selector: "app-verify-email", standalone: false, template: `<div class="auth-wrap">\r
  <div class="auth-card">\r
    <div class="auth-logo">\r
      <span class="material-icons-round">account_tree</span>\r
      <span>Mam Buudu</span>\r
    </div>\r
\r
    <!-- Chargement -->\r
    <ng-container *ngIf="state === 'loading'">\r
      <div class="state-icon loading">\r
        <span class="spinner-lg"></span>\r
      </div>\r
      <h1 class="auth-title">V\xE9rification en cours\u2026</h1>\r
      <p class="auth-subtitle">Nous confirmons votre adresse email.</p>\r
    </ng-container>\r
\r
    <!-- Succ\xE8s -->\r
    <ng-container *ngIf="state === 'success'">\r
      <div class="state-icon success">\r
        <span class="material-icons-round">verified</span>\r
      </div>\r
      <h1 class="auth-title">Email v\xE9rifi\xE9 !</h1>\r
      <p class="auth-subtitle">Votre adresse email a \xE9t\xE9 confirm\xE9e avec succ\xE8s. Votre compte est maintenant enti\xE8rement actif.</p>\r
    </ng-container>\r
\r
    <!-- Erreur -->\r
    <ng-container *ngIf="state === 'error'">\r
      <div class="state-icon error">\r
        <span class="material-icons-round">error_outline</span>\r
      </div>\r
      <h1 class="auth-title">Lien invalide</h1>\r
      <p class="auth-subtitle">{{ erreur }}</p>\r
    </ng-container>\r
\r
    <div class="auth-footer">\r
      <a routerLink="/auth/login" class="auth-link">\r
        <span class="material-icons-round">arrow_back</span>Retour \xE0 la connexion\r
      </a>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/auth/verify-email/verify-email.component.scss */\n:host {\n  display: block;\n}\n.auth-wrap {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0A1FA8 0%,\n      #1445F5 55%,\n      #2563EB 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 440px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 40px 36px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  text-align: center;\n  animation: cardFadeIn 0.4s ease both;\n}\n.auth-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 32px;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1445F5;\n}\n.auth-logo .material-icons-round {\n  font-size: 28px !important;\n}\n.state-icon {\n  margin: 0 auto 20px;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.state-icon .material-icons-round {\n  font-size: 36px !important;\n}\n.state-icon.loading {\n  background: #EEF2FF;\n}\n.state-icon.success {\n  background: #ECFDF5;\n}\n.state-icon.success .material-icons-round {\n  color: #059669;\n}\n.state-icon.error {\n  background: #FEF2F2;\n}\n.state-icon.error .material-icons-round {\n  color: #DC2626;\n}\n.spinner-lg {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #C7D2FE;\n  border-top-color: #1445F5;\n  border-radius: 50%;\n  animation: spin 0.75s linear infinite;\n}\n.auth-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0F172A;\n  margin-bottom: 10px;\n}\n.auth-subtitle {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.auth-footer {\n  margin-top: 8px;\n}\n.auth-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6B7280;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link .material-icons-round {\n  font-size: 16px !important;\n}\n.auth-link:hover {\n  color: #1445F5;\n}\n@keyframes cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 20px;\n    border-radius: 18px;\n  }\n}\n/*# sourceMappingURL=verify-email.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmailComponent, { className: "VerifyEmailComponent", filePath: "src/app/auth/verify-email/verify-email.component.ts", lineNumber: 13 });
})();

// src/app/auth/auth-routing.module.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "verify-email", component: VerifyEmailComponent }
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
      declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        VerifyEmailComponent
      ],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AuthRoutingModule]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-4DNHASZ6.js.map
