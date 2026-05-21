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
  loading = false;
  errorMsg = '';
  showPassword = false;
  step = 1; // 2 étapes : infos famille + question secrète

  readonly questions = [
    'Quel est le prénom de votre mère ?',
    'Quel est le nom de votre ville natale ?',
    'Quel est le nom de votre animal de compagnie d\'enfance ?',
    'Quel est le prénom de votre meilleur(e) ami(e) d\'enfance ?',
    'Quel est le nom de votre école primaire ?',
  ];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      // Étape 1 — identité
      nomFamille:      ['', [Validators.required, Validators.minLength(2)]],
      prenom:          ['', Validators.required],
      nom:             ['', Validators.required],
      email:           ['', [Validators.required, Validators.email]],
      password:        ['', [Validators.required, Validators.minLength(8)]],
      // Étape 2 — question secrète (obligatoire par le backend)
      questionSecrete: ['', Validators.required],
      reponseSecrete:  ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get f() { return this.form.controls; }

  get passwordStrength(): { level: number; label: string; color: string } {
    const pwd = this.form.get('password')?.value ?? '';
    if (pwd.length < 1) return { level: 0, label: '', color: '' };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 1) return { level: 1, label: 'Faible', color: '#EF4444' };
    if (score === 2) return { level: 2, label: 'Moyen', color: '#F59E0B' };
    if (score === 3) return { level: 3, label: 'Bon', color: '#10B981' };
    return { level: 4, label: 'Fort', color: '#059669' };
  }

  get familleCodePreview(): string {
    const nom = this.form.get('nomFamille')?.value ?? '';
    if (!nom || nom.trim().length < 2) return '';
    const clean = nom.trim().toUpperCase().replace(/\s+/g, '-').replace(/[^A-Z0-9-]/g, '');
    return `${clean}-${new Date().getFullYear()}`;
  }

  nextStep(): void {
    const step1Fields = ['nomFamille', 'prenom', 'nom', 'email', 'password'];
    step1Fields.forEach((field) => this.form.get(field)?.markAsTouched());
    const step1Valid = step1Fields.every((field) => this.form.get(field)?.valid);
    if (step1Valid) this.step = 2;
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMsg = '';
    this.auth.register(this.form.value).subscribe({
      next: () => this.router.navigate(['/app/home']),
      error: (err) => {
        this.errorMsg = err?.error?.error ?? 'Une erreur est survenue. Veuillez réessayer.';
        this.loading = false;
        this.step = 1;
      },
    });
  }
}
