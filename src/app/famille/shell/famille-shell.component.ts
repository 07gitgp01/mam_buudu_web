import { Component, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';

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
export class FamilleShellComponent {
  sidebarOpen  = false;
  showUserMenu = false;
  currentPage  = PAGE_LABELS['/famille/home'];

  navItems: NavItem[] = [
    { icon: 'home',         label: 'Accueil',    route: '/famille/home',     color: '#60A5FA' },
    { icon: 'account_tree', label: 'Arbre',      route: '/famille/arbre',    color: '#A78BFA' },
    { icon: 'people',       label: 'Membres',    route: '/famille/membres',  color: '#34D399' },
    { icon: 'auto_stories', label: 'Stories',    route: '/famille/stories',  color: '#F472B6' },
    { icon: 'timeline',     label: 'Événements', route: '/famille/timeline', color: '#FBBF24' },
    { icon: 'group_add',    label: 'Inviter',    route: '/famille/inviter',  color: '#22D3EE' },
  ];

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) this.showUserMenu = false;
  }

  constructor(
    private auth:  AuthService,
    private router: Router,
    public  themeService: ThemeService,
    private el: ElementRef,
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const base = '/' + e.urlAfterRedirects.split('/').slice(1, 3).join('/');
        this.currentPage = PAGE_LABELS[base] ?? { label: 'Famille', icon: 'account_tree' };
      });
  }

  get user() { return this.auth.getUser(); }

  get userInitiales(): string {
    const u = this.user;
    if (!u) return 'MB';
    return `${u.prenom.charAt(0)}${u.nom.charAt(0)}`.toUpperCase();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/famille/login']);
  }
}
