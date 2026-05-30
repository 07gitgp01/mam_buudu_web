import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';

interface NavItem {
  icon: string;
  label: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-famille-shell',
  templateUrl: './famille-shell.component.html',
  styleUrl: './famille-shell.component.scss',
  standalone: false,
})
export class FamilleShellComponent {
  sidebarOpen = false;

  navItems: NavItem[] = [
    { icon: 'home',         label: 'Accueil',    route: '/famille/home',     color: '#60A5FA' },
    { icon: 'account_tree', label: 'Arbre',      route: '/famille/arbre',    color: '#A78BFA' },
    { icon: 'people',       label: 'Membres',    route: '/famille/membres',  color: '#34D399' },
    { icon: 'auto_stories', label: 'Stories',    route: '/famille/stories',  color: '#F472B6' },
    { icon: 'timeline',     label: 'Événements', route: '/famille/timeline', color: '#FBBF24' },
    { icon: 'group_add',    label: 'Inviter',    route: '/famille/inviter',  color: '#22D3EE' },
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    public themeService: ThemeService,
  ) {}

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
