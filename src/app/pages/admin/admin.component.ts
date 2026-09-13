import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Personne } from '../../models/personne.model';
import { Famille } from '../../models/utilisateur.model';
import { Membre, Plan, Subscription } from '../../models/plateforme.model';
import { ApiService } from '../../services/api.service';
import { QrcodeService } from '../../services/qrcode.service';

const ROLE_LABELS: Record<string, string> = {
  admin:        'Administrateur',
  gestionnaire: 'Gestionnaire',
  membre:       'Membre',
  viewonly:     'Lecture seule',
};

const ROLE_ORDER = ['admin', 'gestionnaire', 'membre', 'viewonly'];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  standalone: false,
})
export class AdminComponent implements OnInit {
  famille: Famille | null = null;
  membres: Membre[] = [];
  personnes: Personne[] = [];

  loading = true;
  erreur: string | null = null;
  saveSuccess = '';
  gedcomExporting = false;

  /* ── Abonnement ── */
  subscription: Subscription | null = null;
  plans: Plan[] = [];
  showPlanModal  = false;
  checkoutLoading: string | null = null;

  viewonlyCreds: { viewonlyUsername: string; viewonlyPassword: string; familleCode: string } | null = null;
  showViewonlyPassword = false;
  viewonlyCopied: string | null = null;
  regeneratingViewonly = false;

  showCreateForm = false;
  saving = false;
  roleChanging: string | null = null;

  // Recherche et filtre membres
  searchQuery = '';
  roleFilter = 'tous';
  roleFilters = [
    { key: 'tous',        label: 'Tous',          icon: 'people' },
    { key: 'admin',       label: 'Admins',        icon: 'shield' },
    { key: 'gestionnaire',label: 'Gestionnaires', icon: 'manage_accounts' },
    { key: 'membre',      label: 'Membres',       icon: 'person' },
    { key: 'viewonly',    label: 'Lecture seule', icon: 'visibility' },
  ];

  // Sélecteur de rôle par membre (userId → role en cours d'édition)
  editingRole: { [userId: string]: string } = {};

  createForm = {
    telephone: '', email: '', password: '',
    nom: '', prenom: '', role: 'membre', personneId: '',
  };

  roles = [
    { val: 'admin',        label: 'Administrateur' },
    { val: 'gestionnaire', label: 'Gestionnaire'   },
    { val: 'membre',       label: 'Membre'         },
    { val: 'viewonly',     label: 'Lecture seule'  },
  ];

  readonly ROLE_ORDER = ROLE_ORDER;

  viewonlyQrUrl = '';

  constructor(private api: ApiService, private qrcode: QrcodeService) {}

  ngOnInit(): void { this.loadAll(); }

  private loadAll(): void {
    this.loading = true;
    forkJoin({
      famille:      this.api.getFamilleDetails(),
      personnes:    this.api.getPersonnes(),
      creds:        this.api.getViewonlyCredentials(),
      subscription: this.api.getSubscription(),
      plans:        this.api.getPlans(),
    }).subscribe({
      next: ({ famille, personnes, creds, subscription, plans }) => {
        this.famille       = famille.famille ?? famille;
        this.membres       = famille.membres ?? [];
        this.personnes     = personnes;
        this.viewonlyCreds = creds;
        this.subscription  = subscription;
        this.plans         = plans;
        this.initEditingRoles();
        this.loading = false;
        if (creds?.familleCode) {
          this.qrcode.generate(creds.familleCode, { size: 150, color: '#2563eb', bgcolor: '#eff6ff' })
            .then(url => this.viewonlyQrUrl = url);
        }
      },
      error: () => {
        this.erreur = 'Impossible de charger les données.';
        this.loading = false;
      },
    });
  }

  private initEditingRoles(): void {
    this.editingRole = {};
    for (const m of this.membres) {
      if (m.user?.id) this.editingRole[m.user.id] = m.role;
    }
  }

  // ── Membres filtrés ─────────────────────────────────
  get filteredMembres(): any[] {
    const q = this.searchQuery.toLowerCase().trim();
    return this.membres.filter(m => {
      const name = `${m.user?.prenom ?? ''} ${m.user?.nom ?? ''}`.toLowerCase();
      const contact = (m.user?.email ?? m.user?.telephone ?? '').toLowerCase();
      const matchSearch = !q || name.includes(q) || contact.includes(q);
      const matchRole   = this.roleFilter === 'tous' || m.role === this.roleFilter;
      return matchSearch && matchRole;
    });
  }

  // ── Changement de rôle ──────────────────────────────
  hasRoleChanged(userId: string): boolean {
    const m = this.membres.find(x => x.user?.id === userId);
    return !!m && this.editingRole[userId] !== m.role;
  }

  confirmRoleChange(userId: string): void {
    if (this.roleChanging) return;
    const newRole = this.editingRole[userId];
    this.roleChanging = userId;
    this.api.changeMemberRole(userId, newRole).subscribe({
      next: () => {
        const m = this.membres.find(x => x.user?.id === userId);
        if (m) m.role = newRole as Membre['role'];
        this.roleChanging = null;
        this.saveSuccess = 'Rôle modifié avec succès';
        setTimeout(() => (this.saveSuccess = ''), 3000);
      },
      error: () => {
        this.cancelRoleChange(userId);
        this.roleChanging = null;
      },
    });
  }

  cancelRoleChange(userId: string): void {
    const m = this.membres.find(x => x.user?.id === userId);
    if (m) this.editingRole[userId] = m.role;
  }

  // ── Création membre ──────────────────────────────────
  createMember(): void {
    if (this.saving) return;
    this.saving = true;
    const data: any = {
      nom: this.createForm.nom, prenom: this.createForm.prenom,
      password: this.createForm.password, role: this.createForm.role,
    };
    if (this.createForm.email)     data.email     = this.createForm.email;
    if (this.createForm.telephone) data.telephone = this.createForm.telephone;
    if (this.createForm.personneId) data.personneId = this.createForm.personneId;

    this.api.createMemberAccount(data).subscribe({
      next: () => {
        this.saving = false;
        this.showCreateForm = false;
        this.resetCreateForm();
        this.refreshMembres();
        this.saveSuccess = 'Compte créé avec succès';
        setTimeout(() => (this.saveSuccess = ''), 3000);
      },
      error: () => { this.saving = false; },
    });
  }

  private refreshMembres(): void {
    this.api.getFamilleDetails().subscribe({
      next: (data) => {
        this.famille = data.famille ?? data;
        this.membres = data.membres ?? [];
        this.initEditingRoles();
      },
    });
  }

  private resetCreateForm(): void {
    this.createForm = {
      telephone: '', email: '', password: '',
      nom: '', prenom: '', role: 'membre', personneId: '',
    };
  }

  // ── Viewonly ─────────────────────────────────────────

  copyViewonly(field: 'code' | 'username' | 'password'): void {
    const c = this.viewonlyCreds;
    if (!c) return;
    const val = field === 'code' ? c.familleCode : field === 'username' ? c.viewonlyUsername : c.viewonlyPassword;
    navigator.clipboard.writeText(val).then(() => {
      this.viewonlyCopied = field;
      setTimeout(() => { this.viewonlyCopied = null; }, 1500);
    });
  }

  private confirmShareWarning(): boolean {
    return confirm(
      "Ce mot de passe donne accès à tout l'arbre familial en lecture seule. " +
      "Une fois partagé sur WhatsApp ou un autre canal non chiffré côté destinataire, il ne peut plus être retiré — " +
      "seule une régénération invalidera l'ancien mot de passe. Continuer ?"
    );
  }

  shareViewonly(): void {
    if (!this.viewonlyCreds || !this.confirmShareWarning()) return;
    const { familleCode, viewonlyUsername, viewonlyPassword } = this.viewonlyCreds;
    const famNom = this.famille?.nom ?? 'Famille';
    const text = `🏠 Accès consultation — ${famNom}\n\nConnectez-vous sur Mam Buudu :\n\n• Code famille : ${familleCode}\n• Identifiant  : ${viewonlyUsername}\n• Mot de passe : ${viewonlyPassword}\n\n⚠️ Accès lecture seule uniquement.`;
    if (navigator.share) {
      navigator.share({ title: 'Accès consultation Mam Buudu', text });
    } else {
      navigator.clipboard.writeText(text);
      this.viewonlyCopied = 'share';
      setTimeout(() => { this.viewonlyCopied = null; }, 2000);
    }
  }

  shareViewonlyWhatsApp(): void {
    if (!this.viewonlyCreds || !this.confirmShareWarning()) return;
    const { familleCode, viewonlyUsername, viewonlyPassword } = this.viewonlyCreds;
    const msg = `🏠 Accès consultation famille *${this.famille?.nom ?? ''}* sur Mam Buudu\n\n• Code : *${familleCode}*\n• Login : *${viewonlyUsername}*\n• Mot de passe : *${viewonlyPassword}*\n\n_Accès lecture seule uniquement_`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  }

  regenerateViewonlyPassword(): void {
    if (this.regeneratingViewonly) return;
    if (!confirm("Régénérer le mot de passe lecture seule ? L'ancien mot de passe cessera immédiatement de fonctionner pour toute personne à qui il a été partagé.")) return;

    this.regeneratingViewonly = true;
    this.api.regenerateViewonlyPassword().subscribe({
      next: (creds) => {
        this.viewonlyCreds = creds;
        this.regeneratingViewonly = false;
        this.saveSuccess = 'Mot de passe lecture seule régénéré';
        setTimeout(() => (this.saveSuccess = ''), 3000);
      },
      error: () => { this.regeneratingViewonly = false; },
    });
  }

  copyFamilleCode(): void {
    if (!this.famille?.code) return;
    navigator.clipboard.writeText(this.famille.code).then(() => {
      this.viewonlyCopied = 'familleCode';
      setTimeout(() => { this.viewonlyCopied = null; }, 1500);
    });
  }

  // ── Abonnement ───────────────────────────────────────
  get isCurrentPlan(): (planId: string) => boolean {
    return (planId: string) => this.subscription?.plan?.id === planId;
  }

  choosePlan(planId: string): void {
    if (planId === 'plan_gratuit' || this.checkoutLoading) return;
    this.checkoutLoading = planId;
    this.api.checkoutPlan(planId).subscribe({
      next: ({ paymentUrl }) => {
        this.checkoutLoading = null;
        window.location.href = paymentUrl;
      },
      error: (err) => {
        this.checkoutLoading = null;
        alert(err?.error?.error ?? 'Erreur lors de l\'initialisation du paiement.');
      },
    });
  }

  planFeatures(plan: any): string[] {
    return Array.isArray(plan.features) ? plan.features : [];
  }

  // ── Export GEDCOM ────────────────────────────────────
  exportGedcom(): void {
    if (this.gedcomExporting) return;
    this.gedcomExporting = true;
    this.api.exportGedcom().subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a   = document.createElement('a');
        a.href     = url;
        a.download = `${(this.famille?.nom ?? 'famille').replace(/\s+/g, '_')}_mam_buudu.ged`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.gedcomExporting = false;
      },
      error: () => { this.gedcomExporting = false; },
    });
  }

  // ── Helpers ──────────────────────────────────────────
  countRole(role: string): number {
    return this.membres.filter(m => m.role === role).length;
  }

  getRoleLabel(role: string): string { return ROLE_LABELS[role] ?? role; }

  userInitiales(user: any): string {
    const p = (user?.prenom ?? '').charAt(0);
    const n = (user?.nom    ?? '').charAt(0);
    return `${p}${n}`.toUpperCase() || 'MB';
  }

  getRoleColor(role: string): string {
    return { admin: 'red', gestionnaire: 'blue', membre: 'green', viewonly: 'gray' }[role] ?? 'gray';
  }

  trackById(_: number, item: Membre): string { return item.user?.id; }
}
