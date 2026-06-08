import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  standalone: false,
})
export class ForgotPasswordComponent {
  form: FormGroup;
  loading  = false;
  sent     = false;
  erreur: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit(): void {
    if (this.form.invalid || this.loading) return;
    this.loading = true;
    this.erreur  = null;

    this.auth.forgotPassword(this.form.value.email.trim().toLowerCase()).subscribe({
      next: () => {
        this.loading = false;
        this.sent    = true;
      },
      error: (err) => {
        this.loading = false;
        this.erreur  = err?.error?.error ?? 'Une erreur s\'est produite.';
      },
    });
  }
}
