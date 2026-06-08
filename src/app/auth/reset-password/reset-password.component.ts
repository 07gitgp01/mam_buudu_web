import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

function passwordMatch(ctrl: AbstractControl): ValidationErrors | null {
  const pwd  = ctrl.get('password')?.value;
  const conf = ctrl.get('confirm')?.value;
  return pwd && conf && pwd !== conf ? { mismatch: true } : null;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  standalone: false,
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  token        = '';
  loading      = false;
  done         = false;
  showPwd      = false;
  showConf     = false;
  erreur: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm:  ['', Validators.required],
    }, { validators: passwordMatch });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') ?? '';
    if (!this.token) {
      this.erreur = 'Lien invalide. Veuillez refaire une demande.';
    }
  }

  submit(): void {
    if (this.form.invalid || this.loading || !this.token) return;
    this.loading = true;
    this.erreur  = null;

    this.auth.resetPassword(this.token, this.form.value.password).subscribe({
      next: () => {
        this.loading = false;
        this.done    = true;
        setTimeout(() => this.router.navigate(['/auth/login']), 3000);
      },
      error: (err) => {
        this.loading = false;
        this.erreur  = err?.error?.error ?? 'Le lien est invalide ou expiré.';
      },
    });
  }
}
