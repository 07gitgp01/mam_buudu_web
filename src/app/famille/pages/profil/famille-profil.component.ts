import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService, AuthUser } from '../../../services/auth.service';
import { ApiService } from '../../../services/api.service';
import { ThemeService } from '../../../services/theme.service';
import { API_BASE_URL } from '../../../core/api.config';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-famille-profil',
  templateUrl: './famille-profil.component.html',
  styleUrl: './famille-profil.component.scss',
  standalone: false,
})
export class FamilleProfilComponent implements OnInit {
  user: AuthUser | null = null;
  familleNom = '';
  familleCode = '';
  totalMembres = 0;
  loading = true;

  editMode = false;
  editForm = { prenom: '', nom: '', email: '', telephone: '' };
  editSaving = false;
  editSuccess = false;
  editError = '';

  pwForm = { ancien: '', nouveau: '', confirm: '' };
  pwSaving = false;
  pwSuccess = false;
  pwError = '';
  showPwSection = false;

  codeCopied = false;

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
    }).subscribe({
      next: ({ famille, personnes }) => {
        const f = (famille as any).famille ?? famille;
        this.familleNom   = f.nom ?? '';
        this.familleCode  = f.code ?? f.codeUnique ?? '—';
        this.totalMembres = personnes.length;
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
      admin: 'Administrateur', gestionnaire: 'Gestionnaire',
      membre: 'Membre', viewonly: 'Lecture seule',
    };
    return map[this.user?.role ?? ''] ?? this.user?.role ?? '—';
  }

  openEdit(): void { this.editError = ''; this.editSuccess = false; this.editMode = true; }

  cancelEdit(): void {
    this.editMode = false;
    if (this.user) {
      this.editForm = { prenom: this.user.prenom, nom: this.user.nom, email: this.user.email ?? '', telephone: this.user.telephone ?? '' };
    }
  }

  saveProfile(): void {
    if (!this.editForm.prenom.trim() || !this.editForm.nom.trim()) { this.editError = 'Le prénom et le nom sont requis.'; return; }
    this.editSaving = true;
    this.editError = '';
    this.http.patch<any>(`${API_BASE_URL}/api/auth/me`, this.editForm).subscribe({
      next: () => {
        const updated: AuthUser = { ...this.user!, prenom: this.editForm.prenom, nom: this.editForm.nom, email: this.editForm.email || undefined, telephone: this.editForm.telephone || undefined };
        (this.auth as any).save(localStorage.getItem('mb_token')!, updated);
        this.user = updated;
        this.editSaving = false;
        this.editSuccess = true;
        this.editMode = false;
        setTimeout(() => this.editSuccess = false, 3000);
      },
      error: (err) => { this.editError = err?.error?.message ?? 'Erreur lors de la sauvegarde.'; this.editSaving = false; },
    });
  }

  savePassword(): void {
    if (!this.pwForm.ancien || !this.pwForm.nouveau) { this.pwError = 'Tous les champs sont requis.'; return; }
    if (this.pwForm.nouveau !== this.pwForm.confirm) { this.pwError = 'Les mots de passe ne correspondent pas.'; return; }
    if (this.pwForm.nouveau.length < 6) { this.pwError = 'Minimum 6 caractères.'; return; }
    this.pwSaving = true;
    this.pwError = '';
    this.http.post(`${API_BASE_URL}/api/auth/change-password`, { ancienPassword: this.pwForm.ancien, nouveauPassword: this.pwForm.nouveau }).subscribe({
      next: () => {
        this.pwSaving = false; this.pwSuccess = true;
        this.pwForm = { ancien: '', nouveau: '', confirm: '' };
        this.showPwSection = false;
        setTimeout(() => this.pwSuccess = false, 4000);
      },
      error: (err) => { this.pwError = err?.error?.message ?? 'Erreur lors du changement.'; this.pwSaving = false; },
    });
  }

  copyCode(): void {
    if (!this.familleCode) return;
    navigator.clipboard.writeText(this.familleCode).then(() => {
      this.codeCopied = true;
      setTimeout(() => this.codeCopied = false, 2000);
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/famille/login']);
  }
}
