import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthService, AuthUser } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ThemeService } from '../../services/theme.service';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../core/api.config';

interface FamilleInfo {
  id:   string;
  nom:  string;
  code: string;
  totalMembres: number;
  totalUnions:  number;
  role: string;
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
  standalone: false,
})
export class ProfilComponent implements OnInit {
  user: AuthUser | null = null;
  famille: FamilleInfo | null = null;
  loading = true;

  // Formulaire modification profil
  editMode = false;
  editForm = { prenom: '', nom: '', email: '', telephone: '' };
  editSaving = false;
  editSuccess = false;
  editError = '';

  // Formulaire changement de mot de passe
  pwForm = { ancien: '', nouveau: '', confirm: '' };
  pwSaving = false;
  pwSuccess = false;
  pwError = '';
  showPwSection = false;

  constructor(
    public auth: AuthService,
    private api: ApiService,
    public theme: ThemeService,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.user = this.auth.getUser();
    if (this.user) {
      this.editForm = {
        prenom:    this.user.prenom,
        nom:       this.user.nom,
        email:     this.user.email ?? '',
        telephone: this.user.telephone ?? '',
      };
    }

    forkJoin({
      famille:   this.api.getCurrentFamille(),
      personnes: this.api.getPersonnes(),
      unions:    this.api.getUnions(),
    }).subscribe({
      next: ({ famille, personnes, unions }) => {
        const f = (famille as any).famille ?? famille;
        this.famille = {
          id:           f.id,
          nom:          f.nom,
          code:         f.code ?? f.codeUnique ?? '—',
          totalMembres: personnes.length,
          totalUnions:  unions.length,
          role:         this.user?.role ?? '—',
        };
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  get initiales(): string {
    if (!this.user) return 'MB';
    return `${this.user.prenom.charAt(0)}${this.user.nom.charAt(0)}`.toUpperCase();
  }

  get roleLabel(): string {
    const map: Record<string, string> = {
      admin:        'Administrateur',
      gestionnaire: 'Gestionnaire',
      membre:       'Membre',
      viewonly:     'Lecture seule',
    };
    return map[this.user?.role ?? ''] ?? this.user?.role ?? '—';
  }

  get roleClass(): string {
    const map: Record<string, string> = {
      admin:        'role-admin',
      gestionnaire: 'role-gestionnaire',
      membre:       'role-membre',
      viewonly:     'role-viewonly',
    };
    return map[this.user?.role ?? ''] ?? '';
  }

  openEdit(): void {
    this.editError = '';
    this.editSuccess = false;
    this.editMode = true;
  }

  cancelEdit(): void {
    this.editMode = false;
    if (this.user) {
      this.editForm = {
        prenom:    this.user.prenom,
        nom:       this.user.nom,
        email:     this.user.email ?? '',
        telephone: this.user.telephone ?? '',
      };
    }
  }

  saveProfile(): void {
    if (!this.editForm.prenom.trim() || !this.editForm.nom.trim()) {
      this.editError = 'Le prénom et le nom sont requis.';
      return;
    }
    this.editSaving = true;
    this.editError = '';
    this.http.patch<any>(`${API_BASE_URL}/api/auth/me`, this.editForm).subscribe({
      next: (res) => {
        const updated: AuthUser = {
          ...this.user!,
          prenom:    this.editForm.prenom,
          nom:       this.editForm.nom,
          email:     this.editForm.email || undefined,
          telephone: this.editForm.telephone || undefined,
        };
        (this.auth as any).save(localStorage.getItem('mb_token')!, updated);
        this.user = updated;
        this.editSaving = false;
        this.editSuccess = true;
        this.editMode = false;
        setTimeout(() => this.editSuccess = false, 3000);
      },
      error: (err) => {
        this.editError = err?.error?.message ?? 'Erreur lors de la sauvegarde.';
        this.editSaving = false;
      },
    });
  }

  savePassword(): void {
    if (!this.pwForm.ancien || !this.pwForm.nouveau) {
      this.pwError = 'Tous les champs sont requis.';
      return;
    }
    if (this.pwForm.nouveau !== this.pwForm.confirm) {
      this.pwError = 'Les mots de passe ne correspondent pas.';
      return;
    }
    if (this.pwForm.nouveau.length < 6) {
      this.pwError = 'Le mot de passe doit faire au moins 6 caractères.';
      return;
    }
    this.pwSaving = true;
    this.pwError = '';
    this.http.post(`${API_BASE_URL}/api/auth/change-password`, {
      ancienPassword:  this.pwForm.ancien,
      nouveauPassword: this.pwForm.nouveau,
    }).subscribe({
      next: () => {
        this.pwSaving = false;
        this.pwSuccess = true;
        this.pwForm = { ancien: '', nouveau: '', confirm: '' };
        this.showPwSection = false;
        setTimeout(() => this.pwSuccess = false, 4000);
      },
      error: (err) => {
        this.pwError = err?.error?.message ?? 'Erreur lors du changement de mot de passe.';
        this.pwSaving = false;
      },
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

  copyCode(): void {
    if (this.famille?.code) {
      navigator.clipboard.writeText(this.famille.code).then(() => {
        this.codeCopied = true;
        setTimeout(() => this.codeCopied = false, 2000);
      });
    }
  }

  codeCopied = false;
}
