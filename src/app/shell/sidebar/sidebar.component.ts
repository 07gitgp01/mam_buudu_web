import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';

interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false,
})
export class SidebarComponent {
  isExpanded = true;
  @Input() mobileOpen = false;
  @Output() mobileClose = new EventEmitter<void>();

  navItems: NavItem[] = [
    { icon: 'home',                  label: 'Accueil',        route: '/app/home' },
    { icon: 'account_tree',          label: 'Arbre familial', route: '/app/tree' },
    { icon: 'people',                label: 'Personnes',      route: '/app/personnes' },
    { icon: 'favorite',              label: 'Unions',         route: '/app/unions' },
    { icon: 'collections_bookmark',  label: 'Stories',        route: '/app/stories' },
    { icon: 'timeline',              label: 'Timeline',       route: '/app/timeline' },
    { icon: 'sports_esports',        label: 'Jeux',           route: '/app/jeux' },
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    public themeService: ThemeService,
  ) {}

  get user() {
    return this.auth.getUser();
  }

  get initiales(): string {
    const u = this.user;
    if (!u) return 'MB';
    return `${u.prenom.charAt(0)}${u.nom.charAt(0)}`.toUpperCase();
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
