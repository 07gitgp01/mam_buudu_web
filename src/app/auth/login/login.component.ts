import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export interface Country { iso: string; name: string; dial: string; }

export const COUNTRIES: Country[] = [
  { iso: 'bf', name: 'Burkina Faso', dial: '+226' },
  { iso: 'ml', name: 'Mali',         dial: '+223' },
  { iso: 'ne', name: 'Niger',        dial: '+227' },
  { iso: 'ga', name: 'Gabon',        dial: '+241' },
  { iso: 'ca', name: 'Canada',       dial: '+1'   },
];

type LoginTab = 'email' | 'telephone' | 'username';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false,
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  errorMsg = '';
  showPassword = false;

  activeTab: LoginTab = 'email';
  countries = COUNTRIES;
  selectedCountry: Country = COUNTRIES[0];
  showCountryPicker = false;
  countrySearch = '';
  localPhone = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      familleCode: ['', Validators.required],
      identifiant: ['', Validators.required],
      password:    ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.form.controls; }

  get filteredCountries(): Country[] {
    const q = this.countrySearch.toLowerCase();
    return q ? this.countries.filter(c => c.name.toLowerCase().includes(q) || c.dial.includes(q)) : this.countries;
  }

  selectCountry(c: Country): void {
    this.selectedCountry = c;
    this.showCountryPicker = false;
    this.countrySearch = '';
    this.updatePhoneIdentifiant();
  }

  updatePhoneIdentifiant(): void {
    const full = `${this.selectedCountry.dial}${this.localPhone.replace(/^0/, '')}`;
    this.form.patchValue({ identifiant: full });
  }

  setTab(tab: LoginTab): void {
    this.activeTab = tab;
    this.form.patchValue({ identifiant: '' });
    this.localPhone = '';
  }

  get tabPlaceholder(): string {
    return this.activeTab === 'email'    ? 'exemple@email.com'       :
           this.activeTab === 'username' ? 'ex : diallo.ibrahim'     : '';
  }

  get tabIcon(): string {
    return this.activeTab === 'email'    ? 'email'    :
           this.activeTab === 'username' ? 'badge'    : 'phone';
  }

  submit(): void {
    if (this.activeTab === 'telephone') {
      this.updatePhoneIdentifiant();
    }
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.errorMsg = '';
    this.auth.login(this.form.value).subscribe({
      next: () => {
        const role = this.auth.getUser()?.role ?? '';
        if (role === 'admin' || role === 'gestionnaire') {
          this.router.navigate(['/app/home']);
        } else {
          this.router.navigate(['/famille']);
        }
      },
      error: (err) => {
        this.errorMsg = err?.error?.error ?? 'Identifiants incorrects.';
        this.loading = false;
      },
    });
  }
}
