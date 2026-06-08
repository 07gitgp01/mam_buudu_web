import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false,
})
export class RegisterComponent {
  // Étape 1 : contact (email ou tel) → OTP
  // Étape 2 : code OTP
  // Étape 3 : reste des infos + création du compte
  step = 1;

  contactType: 'email' | 'tel' = 'email';

  contactForm: FormGroup;
  otpForm:     FormGroup;
  mainForm:    FormGroup;

  loading      = false;
  errorMsg     = '';
  successMsg   = '';
  showPassword = false;

  verifiedContact     = '';   // email ou numéro vérifié
  registrationToken   = '';
  otpCountdown        = 0;
  private countdownId: ReturnType<typeof setInterval> | null = null;

  readonly questions = [
    'Quel est le prénom de votre mère ?',
    'Quel est le nom de votre ville natale ?',
    "Quel est le nom de votre animal de compagnie d'enfance ?",
    "Quel est le prénom de votre meilleur(e) ami(e) d'enfance ?",
    'Quel est le nom de votre école primaire ?',
  ];

  constructor(
    private fb:     FormBuilder,
    private auth:   AuthService,
    private router: Router,
  ) {
    this.contactForm = this.fb.group({
      contact: ['', [Validators.required, Validators.email]],
    });

    this.otpForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });

    this.mainForm = this.fb.group({
      nomFamille:      ['', [Validators.required, Validators.minLength(2)]],
      prenom:          ['', Validators.required],
      nom:             ['', Validators.required],
      password:        ['', [Validators.required, Validators.minLength(8)]],
      questionSecrete: ['', Validators.required],
      reponseSecrete:  ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get fc() { return this.contactForm.controls; }
  get fo() { return this.otpForm.controls;     }
  get fm() { return this.mainForm.controls;    }

  setContactType(type: 'email' | 'tel'): void {
    if (type === this.contactType) return;
    this.contactType = type;
    this.errorMsg    = '';
    const ctrl = this.contactForm.get('contact')!;
    ctrl.reset('');
    if (type === 'email') {
      ctrl.setValidators([Validators.required, Validators.email]);
    } else {
      ctrl.setValidators([Validators.required, Validators.pattern(/^[+0-9][\d\s\-()+]{6,20}$/)]);
    }
    ctrl.updateValueAndValidity();
  }

  // ── Étape 1 : envoyer OTP ────────────────────────────────────────────────────
  sendOtp(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.loading  = true;
    this.errorMsg = '';
    const contact = this.contactForm.value.contact;
    const type    = this.contactType === 'tel' ? 'telephone' : 'email';

    this.auth.sendOtp(contact, type).subscribe({
      next: () => {
        this.verifiedContact = contact;
        this.loading         = false;
        this.step            = 2;
        this.startCountdown(60);
      },
      error: (err) => {
        this.errorMsg = err?.error?.error ?? "Erreur lors de l'envoi. Réessayez.";
        this.loading  = false;
      },
    });
  }

  resendOtp(): void {
    if (this.otpCountdown > 0) return;
    this.loading    = true;
    this.errorMsg   = '';
    this.successMsg = '';
    const type      = this.contactType === 'tel' ? 'telephone' : 'email';

    this.auth.sendOtp(this.verifiedContact, type).subscribe({
      next: () => {
        this.loading    = false;
        this.successMsg = 'Nouveau code envoyé !';
        this.otpForm.reset();
        this.startCountdown(60);
      },
      error: (err) => {
        this.errorMsg = err?.error?.error ?? 'Erreur lors du renvoi.';
        this.loading  = false;
      },
    });
  }

  private startCountdown(seconds: number): void {
    this.otpCountdown = seconds;
    if (this.countdownId) clearInterval(this.countdownId);
    this.countdownId = setInterval(() => {
      this.otpCountdown--;
      if (this.otpCountdown <= 0) {
        clearInterval(this.countdownId!);
        this.countdownId = null;
      }
    }, 1000);
  }

  // ── Étape 2 : vérifier OTP ───────────────────────────────────────────────────
  verifyOtp(): void {
    this.otpForm.markAllAsTouched();
    if (this.otpForm.invalid) return;

    this.loading  = true;
    this.errorMsg = '';
    const type    = this.contactType === 'tel' ? 'telephone' : 'email';

    this.auth.verifyOtp(this.verifiedContact, type, this.otpForm.value.code).subscribe({
      next: ({ registrationToken }) => {
        this.registrationToken = registrationToken;
        this.loading           = false;
        this.step              = 3;
      },
      error: (err) => {
        this.errorMsg = err?.error?.error ?? 'Code incorrect ou expiré.';
        this.loading  = false;
      },
    });
  }

  // ── Étape 3 : créer le compte ────────────────────────────────────────────────
  submit(): void {
    this.mainForm.markAllAsTouched();
    if (this.mainForm.invalid) return;

    this.loading  = true;
    this.errorMsg = '';

    const isEmail  = this.contactType === 'email';
    const payload  = {
      ...this.mainForm.value,
      email:             isEmail ? this.verifiedContact : undefined,
      telephone:         !isEmail ? this.verifiedContact : undefined,
      registrationToken: this.registrationToken,
    };

    this.auth.register(payload).subscribe({
      next: () => this.router.navigate(['/app/home']),
      error: (err) => {
        this.errorMsg = err?.error?.error ?? 'Une erreur est survenue. Veuillez réessayer.';
        this.loading  = false;
      },
    });
  }

  get passwordStrength(): { level: number; label: string; color: string } {
    const pwd = this.mainForm.get('password')?.value ?? '';
    if (pwd.length < 1) return { level: 0, label: '', color: '' };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 1) return { level: 1, label: 'Faible',  color: '#EF4444' };
    if (score === 2) return { level: 2, label: 'Moyen',   color: '#F59E0B' };
    if (score === 3) return { level: 3, label: 'Bon',     color: '#10B981' };
    return                { level: 4, label: 'Fort',     color: '#059669' };
  }

  get familleCodePreview(): string {
    const nom = this.mainForm.get('nomFamille')?.value ?? '';
    if (!nom || nom.trim().length < 2) return '';
    const clean = nom.trim().toUpperCase().replace(/\s+/g, '-').replace(/[^A-Z0-9-]/g, '');
    return `${clean}-${new Date().getFullYear()}`;
  }
}
