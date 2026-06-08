import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

type State = 'loading' | 'success' | 'error';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss',
  standalone: false,
})
export class VerifyEmailComponent implements OnInit {
  state: State = 'loading';
  erreur = '';

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!token) {
      this.state  = 'error';
      this.erreur = 'Lien invalide.';
      return;
    }
    this.auth.verifyEmail(token).subscribe({
      next:  () => { this.state = 'success'; },
      error: (err) => {
        this.state  = 'error';
        this.erreur = err?.error?.error ?? 'Le lien est invalide ou expiré.';
      },
    });
  }
}
