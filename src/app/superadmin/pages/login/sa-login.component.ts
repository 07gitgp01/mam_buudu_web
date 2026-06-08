import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperAdminService } from '../../services/superadmin.service';

@Component({
  selector: 'sa-login',
  templateUrl: './sa-login.component.html',
  styleUrl: './sa-login.component.scss',
  standalone: false,
})
export class SaLoginComponent {
  form: FormGroup;
  loading = false;
  errorMsg = '';
  showPassword = false;

  constructor(private fb: FormBuilder, private sa: SuperAdminService, private router: Router) {
    if (sa.isLoggedIn()) router.navigate(['/superadmin/dashboard']);
    this.form = fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.loading = true;
    this.errorMsg = '';
    this.sa.login(this.form.value.email, this.form.value.password).subscribe({
      next: () => this.router.navigate(['/superadmin/dashboard']),
      error: (err: any) => {
        this.errorMsg = err?.error?.error ?? 'Erreur de connexion';
        this.loading = false;
      },
    });
  }
}
