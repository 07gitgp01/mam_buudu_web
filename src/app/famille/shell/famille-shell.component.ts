import { Component, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription, interval } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { LoadingService } from '../../core/loading.service';
import { ApiService } from '../../services/api.service';
import { NotificationItem } from '../../models/plateforme.model';

interface NavItem { icon: string; label: string; route: string; color: string; }

const PAGE_LABELS: Record<string, { label: string; icon: string }> = {
  '/famille/home':     { label: 'Accueil',          icon: 'home' },
  '/famille/arbre':    { label: 'Arbre généalogique', icon: 'account_tree' },
  '/famille/membres':  { label: 'Membres',           icon: 'people' },
  '/famille/stories':  { label: 'Stories',           icon: 'auto_stories' },
  '/famille/timeline': { label: 'Événements',        icon: 'timeline' },
  '/famille/inviter':  { label: 'Inviter',           icon: 'group_add' },
  '/famille/profil':   { label: 'Mon profil',        icon: 'account_circle' },
};

@Component({
  selector: 'app-famille-shell',
  templateUrl: './famille-shell.component.html',
  styleUrl: './famille-shell.component.scss',
  standalone: false,
})
export class FamilleShellComponent implements OnInit, OnDestroy {
  sidebarOpen  = false;
  isExpanded   = true;
  showUserMenu = false;
  currentPage  = PAGE_LABELS['/famille/home'];
  isFullBleed  = false;

  /* ── Notifications ── */
  notifOpen  = false;
  notifCount = 0;
  notifItems: NotificationItem[] = [];
  private notifSub: Subscription | null = null;

  navItems: NavItem[] = [
    { icon: 'home',         label: 'Accueil',    route: '/famille/home',     color: '#60A5FA' },
    { icon: 'account_tree', label: 'Arbre',      route: '/famille/arbre',    color: '#A78BFA' },
    { icon: 'people',       label: 'Membres',    route: '/famille/membres',  color: '#34D399' },
    { icon: 'auto_stories', label: 'Stories',    route: '/famille/stories',  color: '#F472B6' },
    { icon: 'photo_library', label: 'Galerie',   route: '/famille/galerie',  color: '#FB923C' },
    { icon: 'timeline',     label: 'Événements', route: '/famille/timeline', color: '#FBBF24' },
    { icon: 'group_add',    label: 'Inviter',    route: '/famille/inviter',  color: '#22D3EE' },
  ];

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showUserMenu = false;
      this.notifOpen = false;
    }
  }

  constructor(
    private auth:  AuthService,
    private router: Router,
    public  themeService: ThemeService,
    private el: ElementRef,
    public  loading: LoadingService,
    private api: ApiService,
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const base = '/' + e.urlAfterRedirects.split('/').slice(1, 3).join('/');
        this.currentPage = PAGE_LABELS[base] ?? { label: 'Famille', icon: 'account_tree' };
        this.isFullBleed = base === '/famille/arbre';
      });
  }

  ngOnInit(): void {
    this.loadNotifications();
    // Recharge toutes les 5 secondes
    this.notifSub = interval(5 * 1000).subscribe(() => this.loadNotifications());
  }

  ngOnDestroy(): void {
    this.notifSub?.unsubscribe();
  }

  loadNotifications(): void {
    this.api.getNotifications().subscribe({
      next: ({ notifications, nonLues }) => {
        this.notifItems = notifications;
        this.notifCount = nonLues;
      },
      error: () => {},
    });
  }

  toggleNotif(event: MouseEvent): void {
    event.stopPropagation();
    this.notifOpen    = !this.notifOpen;
    this.showUserMenu = false;
    if (this.notifOpen && this.notifCount > 0) {
      setTimeout(() => {
        this.api.markAllNotificationsRead().subscribe(() => {
          this.notifCount = 0;
          this.notifItems.forEach(n => n.lue = true);
        });
      }, 1000);
    }
  }

  deleteNotif(id: string, event: MouseEvent): void {
    event.stopPropagation();
    this.api.deleteNotification(id).subscribe(() => {
      this.notifItems = this.notifItems.filter(n => n.id !== id);
    });
  }

  notifIcon(type: string): string {
    const icons: Record<string, string> = {
      anniversaire:        'cake',
      bienvenue:           'waving_hand',
      nouveau_membre:      'person_add',
      nouveau_membre_arbre:'family_restroom',
      nouvelle_union:      'favorite',
      nouvelle_story:      'auto_stories',
      reaction_story:      'favorite_border',
      commentaire_story:   'chat_bubble_outline',
      photo_ajoutee:       'add_a_photo',
      paiement_confirme:   'verified',
    };
    return icons[type] ?? 'notifications';
  }

  formatNotifDate(dateStr: string): string {
    const d    = new Date(dateStr);
    const diff = Math.floor((Date.now() - d.getTime()) / 1000);
    if (diff < 60)    return 'À l\'instant';
    if (diff < 3600)  return `Il y a ${Math.floor(diff / 60)} min`;
    if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)} h`;
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  trackByNotifId(_: number, item: NotificationItem): string { return item.id; }

  get user() { return this.auth.getUser(); }

  get userInitiales(): string {
    const u = this.user;
    if (!u) return 'MB';
    return `${u.prenom.charAt(0)}${u.nom.charAt(0)}`.toUpperCase();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
