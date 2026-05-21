import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Personne, getNomComplet, getInitiales } from '../../models/personne.model';
import { ApiService } from '../../services/api.service';

const ROLE_LABELS: Record<string, string> = {
  admin:        'Administrateur',
  gestionnaire: 'Gestionnaire',
  membre:       'Membre',
  viewonly:     'Lecture seule',
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  standalone: false,
})
export class AdminComponent implements OnInit {
  famille: any = null;
  membres: any[] = [];
  personnes: Personne[] = [];

  loading = true;
  erreur: string | null = null;

  viewonlyCreds: { viewonlyUsername: string; viewonlyPassword: string; familleCode: string } | null = null;
  showViewonlyPassword = false;
  viewonlyCopied: string | null = null;

  showCreateForm = false;
  saving = false;
  roleChanging: string | null = null;

  createForm = {
    telephone: '',
    email: '',
    password: '',
    nom: '',
    prenom: '',
    role: 'membre',
    personneId: '',
  };

  roles = [
    { val: 'admin',        label: 'Administrateur' },
    { val: 'gestionnaire', label: 'Gestionnaire' },
    { val: 'membre',       label: 'Membre' },
    { val: 'viewonly',     label: 'Lecture seule' },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  private loadAll(): void {
    this.loading = true;
    forkJoin({
      famille: this.api.getFamilleDetails(),
      personnes: this.api.getPersonnes(),
      creds: this.api.getViewonlyCredentials(),
    }).subscribe({
      next: ({ famille, personnes, creds }) => {
        this.famille = famille.famille ?? famille;
        this.membres = famille.membres ?? [];
        this.personnes = personnes;
        this.viewonlyCreds = creds;
        this.loading = false;
      },
      error: () => {
        this.erreur = 'Impossible de charger les données.';
        this.loading = false;
      },
    });
  }

  createMember(): void {
    if (this.saving) return;
    this.saving = true;

    const data: any = {
      nom: this.createForm.nom,
      prenom: this.createForm.prenom,
      password: this.createForm.password,
      role: this.createForm.role,
    };
    if (this.createForm.email) data.email = this.createForm.email;
    if (this.createForm.telephone) data.telephone = this.createForm.telephone;
    if (this.createForm.personneId) data.personneId = this.createForm.personneId;

    this.api.createMemberAccount(data).subscribe({
      next: () => {
        this.saving = false;
        this.showCreateForm = false;
        this.resetCreateForm();
        this.refreshMembres();
      },
      error: () => {
        this.saving = false;
      },
    });
  }

  changeRole(userId: string, newRole: string): void {
    if (this.roleChanging) return;
    this.roleChanging = userId;
    this.api.changeMemberRole(userId, newRole).subscribe({
      next: () => {
        const m = this.membres.find(x => x.user.id === userId);
        if (m) m.role = newRole;
        this.roleChanging = null;
      },
      error: () => {
        this.roleChanging = null;
      },
    });
  }

  private refreshMembres(): void {
    this.api.getFamilleDetails().subscribe({
      next: (data) => {
        this.famille = data.famille ?? data;
        this.membres = data.membres ?? [];
      },
    });
  }

  private resetCreateForm(): void {
    this.createForm = {
      telephone: '',
      email: '',
      password: '',
      nom: '',
      prenom: '',
      role: 'membre',
      personneId: '',
    };
  }

  copyViewonly(field: 'code' | 'username' | 'password'): void {
    const c = this.viewonlyCreds;
    if (!c) return;
    const val = field === 'code' ? c.familleCode : field === 'username' ? c.viewonlyUsername : c.viewonlyPassword;
    navigator.clipboard.writeText(val).then(() => {
      this.viewonlyCopied = field;
      setTimeout(() => { this.viewonlyCopied = null; }, 1500);
    });
  }

  shareViewonly(): void {
    if (!this.viewonlyCreds) return;
    const { familleCode, viewonlyUsername, viewonlyPassword } = this.viewonlyCreds;
    const famNom = this.famille?.nom ?? 'Famille';
    const text = `🏠 Accès consultation — ${famNom}\n\nConnectez-vous sur Mam Buudu avec ces identifiants (lecture seule) :\n\n• Code famille : ${familleCode}\n• Identifiant  : ${viewonlyUsername}\n• Mot de passe : ${viewonlyPassword}\n\n⚠️ Ces accès permettent uniquement de consulter l'arbre généalogique.`;
    if (navigator.share) {
      navigator.share({ title: 'Accès consultation Mam Buudu', text });
    } else {
      navigator.clipboard.writeText(text);
      this.viewonlyCopied = 'share';
      setTimeout(() => { this.viewonlyCopied = null; }, 2000);
    }
  }

  countRole(role: string): number {
    return this.membres.filter(m => m.role === role).length;
  }

  getRoleBadgeClass(role: string): string {
    return (role === 'admin' || role === 'gestionnaire') ? 'badge-primary' : 'badge-gray';
  }

  getRoleLabel(role: string): string {
    return ROLE_LABELS[role] ?? role;
  }

  getPromoLabel(role: string): string {
    return role === 'membre' ? 'Promouvoir' : 'Rétrograder';
  }

  getNextRole(role: string): string {
    return role === 'membre' ? 'gestionnaire' : 'membre';
  }

  initiales(p: Personne): string {
    return getInitiales(p);
  }

  userInitiales(user: any): string {
    const prenom = (user?.prenom ?? '').charAt(0);
    const nom = (user?.nom ?? '').charAt(0);
    return `${prenom}${nom}`.toUpperCase() || 'MB';
  }
}
