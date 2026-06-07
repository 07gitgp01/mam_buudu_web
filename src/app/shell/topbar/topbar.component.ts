import { Component, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subject, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

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

export interface SearchResults {
  personnes: any[];
  stories:   any[];
  unions:    any[];
}

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

  /* ── Recherche ── */
  searchOpen   = false;
  searchQuery  = '';
  searchLoading = false;
  searchResults: SearchResults = { personnes: [], stories: [], unions: [] };
  get hasResults(): boolean {
    return this.searchResults.personnes.length > 0 ||
           this.searchResults.stories.length > 0 ||
           this.searchResults.unions.length > 0;
  }
  get totalResults(): number {
    return this.searchResults.personnes.length +
           this.searchResults.stories.length +
           this.searchResults.unions.length;
  }

  private searchSubject = new Subject<string>();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showUserMenu = false;
      this.searchOpen   = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.searchOpen  = false;
    this.searchQuery = '';
    this.searchResults = { personnes: [], stories: [], unions: [] };
  }

  constructor(
    private router: Router,
    public  auth: AuthService,
    private api: ApiService,
    private el: ElementRef,
  ) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const base = '/' + e.urlAfterRedirects.split('/').slice(1, 3).join('/');
        this.currentPage = PAGE_LABELS[base] ?? { label: 'Mam Buudu', icon: 'account_tree' };
        this.closeSearch();
      });

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(q => {
        if (q.length < 2) {
          this.searchResults  = { personnes: [], stories: [], unions: [] };
          this.searchLoading  = false;
          return of(null);
        }
        this.searchLoading = true;
        return this.api.search(q);
      }),
    ).subscribe({
      next: res => {
        this.searchLoading = false;
        if (res) this.searchResults = res;
      },
      error: () => { this.searchLoading = false; },
    });
  }

  get user() { return this.auth.getUser(); }

  get initiales(): string {
    const u = this.user;
    if (!u) return 'MB';
    return `${u.prenom.charAt(0)}${u.nom.charAt(0)}`.toUpperCase();
  }

  openSearch(): void  { this.searchOpen = true; }

  closeSearch(): void {
    this.searchOpen   = false;
    this.searchQuery  = '';
    this.searchResults = { personnes: [], stories: [], unions: [] };
  }

  onSearchInput(q: string): void { this.searchSubject.next(q); }

  goToPersonne(id: string): void {
    this.router.navigate(['/app/personnes'], { queryParams: { id } });
    this.closeSearch();
  }

  goToStory(id: string): void {
    this.router.navigate(['/app/stories'], { queryParams: { highlight: id } });
    this.closeSearch();
  }

  goToUnion(id: string): void {
    this.router.navigate(['/app/unions'], { queryParams: { id } });
    this.closeSearch();
  }

  getNomPersonne(p: any): string {
    return [p.prenoms, p.nomNaissance].filter(Boolean).join(' ') || 'Sans nom';
  }

  getInitialesPersonne(p: any): string {
    const parts = [p.prenoms, p.nomNaissance].filter(Boolean).join(' ').split(' ');
    return parts.slice(0, 2).map((s: string) => s[0]).join('').toUpperCase() || '?';
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
