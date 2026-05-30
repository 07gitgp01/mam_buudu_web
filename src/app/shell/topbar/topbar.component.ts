import { Component, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';

const PAGE_LABELS: Record<string, { label: string; icon: string }> = {
  '/app/home':      { label: 'Accueil',         icon: 'home' },
  '/app/tree':      { label: 'Arbre familial',   icon: 'account_tree' },
  '/app/personnes': { label: 'Personnes',         icon: 'people' },
  '/app/unions':    { label: 'Unions',            icon: 'favorite' },
  '/app/stories':   { label: 'Stories',           icon: 'collections_bookmark' },
  '/app/timeline':  { label: 'Timeline',          icon: 'timeline' },
  '/app/jeux':      { label: 'Jeux familiaux',    icon: 'sports_esports' },
  '/app/admin':     { label: 'Administration',    icon: 'admin_panel_settings' },
  '/app/profil':    { label: 'Mon profil',        icon: 'account_circle' },
  '/app/inviter':   { label: 'Inviter',           icon: 'group_add' },
};

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  standalone: false,
})
export class TopbarComponent {
  currentPage = PAGE_LABELS['/app/home'];
  showUserMenu = false;
  @Output() menuToggle = new EventEmitter<void>();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showUserMenu = false;
    }
  }

  constructor(private router: Router, public auth: AuthService, private el: ElementRef) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const base = '/' + e.urlAfterRedirects.split('/').slice(1, 3).join('/');
        this.currentPage = PAGE_LABELS[base] ?? { label: 'Mam Buudu', icon: 'account_tree' };
      });
  }

  get user() { return this.auth.getUser(); }

  get initiales(): string {
    const u = this.user;
    if (!u) return 'MB';
    return `${u.prenom.charAt(0)}${u.nom.charAt(0)}`.toUpperCase();
  }

  refresh(): void {
    const url = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigateByUrl(url)
    );
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
