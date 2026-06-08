import { Component } from '@angular/core';
import { LoadingService } from '../core/loading.service';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  standalone: false,
})
export class ShellComponent {
  sidebarOpen = false;
  emailSent   = false;
  sending     = false;

  constructor(
    public  loading: LoadingService,
    public  auth:    AuthService,
    private api:     ApiService,
  ) {}

  get showEmailBanner(): boolean {
    const u = this.auth.getUser();
    return !!u && !!u.email && u.emailVerified === false;
  }

  sendVerification(): void {
    if (this.sending || this.emailSent) return;
    this.sending = true;
    this.auth.sendVerificationEmail().subscribe({
      next: () => { this.emailSent = true; this.sending = false; },
      error: () => { this.sending = false; },
    });
  }
}
