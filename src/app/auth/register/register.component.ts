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
  form: FormGroup;

  contactType: 'email' | 'tel' = 'email';
  loading      = false;
  errorMsg     = '';
  showPassword = false;

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
    this.form = this.fb.group({
      contact:         ['', [Validators.required, Validators.email]],
      nomFamille:      ['', [Validators.required, Validators.minLength(2)]],
      prenom:          ['', Validators.required],
      nom:             ['', Validators.required],
      password:        ['', [Validators.required, Validators.minLength(8)]],
      questionSecrete: ['', Validators.required],
      reponseSecrete:  ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get f() { return this.form.controls; }

  setContactType(type: 'email' | 'tel'): void {
    if (type === this.contactType) return;
    this.contactType = type;
    this.errorMsg    = '';
    const ctrl = this.form.get('contact')!;
    ctrl.reset('');
    ctrl.setValidators(
      type === 'email'
        ? [Validators.required, Validators.email]
        : [Validators.required, Validators.pattern(/^[+0-9][\d\s\-()+]{6,20}$/)]
    );
    ctrl.updateValueAndValidity();
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.loading  = true;
    this.errorMsg = '';

    const isEmail = this.contactType === 'email';
    const { contact, nomFamille, prenom, nom, password, questionSecrete, reponseSecrete } = this.form.value;

    const payload = {
      nomFamille, prenom, nom, password, questionSecrete, reponseSecrete,
      email:     isEmail ? contact : undefined,
      telephone: !isEmail ? contact : undefined,
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
    const pwd = this.form.get('password')?.value ?? '';
    if (!pwd) return { level: 0, label: '', color: '' };
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
    const nom = this.form.get('nomFamille')?.value ?? '';
    if (!nom || nom.trim().length < 2) return '';
    const clean = nom.trim().toUpperCase().replace(/\s+/g, '-').replace(/[^A-Z0-9-]/g, '');
    return `${clean}-${new Date().getFullYear()}`;
  }
}
