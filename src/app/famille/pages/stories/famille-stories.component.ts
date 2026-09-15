import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Story, STORY_TAGS, STORY_TAG_COLORS } from '../../../models/story.model';
import { Membre } from '../../../models/plateforme.model';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-famille-stories',
  templateUrl: './famille-stories.component.html',
  styleUrl: './famille-stories.component.scss',
  standalone: false,
})
export class FamilleStoriesComponent implements OnInit {
  loading = true;
  loadingMore = false;
  stories: Story[] = [];
  page = 1;
  readonly pageSize = 20;
  totalPages = 1;

  searchQuery = '';
  selectedTag = 'tous';
  readonly tags = ['tous', ...STORY_TAGS];
  readonly tagOptions = [...STORY_TAGS];
  readonly tagColors = STORY_TAG_COLORS;

  showForm = false;
  saving = false;
  formErreur: string | null = null;
  form: { titre: string; caption: string; tag: string; mediaFile: File | null; mediaPreview: string | null; mediaType: 'photo' | 'video' | null } =
    { titre: '', caption: '', tag: 'Souvenir', mediaFile: null, mediaPreview: null, mediaType: null };

  membres: Membre[] = [];
  notifyUserIds: string[] | null = null;

  constructor(private api: ApiService, public auth: AuthService) {}

  ngOnInit(): void {
    this.load();
    this.api.getCurrentFamille().pipe(catchError(() => of(null))).subscribe(res => {
      if (res?.membres) {
        this.membres = res.membres.filter((m: Membre) => m.user.id !== this.auth.getUser()?.id);
      }
    });
  }

  load(): void {
    this.loading = true;
    this.page = 1;
    this.api.getStories(this.page, this.pageSize)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res) {
          this.stories = res.data;
          this.totalPages = res.totalPages;
        }
        this.loading = false;
      });
  }

  loadMore(): void {
    if (this.loadingMore || this.page >= this.totalPages) return;
    this.loadingMore = true;
    const nextPage = this.page + 1;
    this.api.getStories(nextPage, this.pageSize)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res) {
          this.stories = [...this.stories, ...res.data];
          this.page = res.page;
          this.totalPages = res.totalPages;
        }
        this.loadingMore = false;
      });
  }

  trackById(_: number, item: Story): string { return item.id; }

  get storiesFiltrees(): Story[] {
    return this.stories.filter(s => {
      const matchTag = this.selectedTag === 'tous' || s.tag === this.selectedTag;
      const q = this.searchQuery.toLowerCase();
      const matchSearch = !q ||
        (s.titre ?? '').toLowerCase().includes(q) ||
        s.caption.toLowerCase().includes(q) ||
        this.nomComplet(s).toLowerCase().includes(q);
      return matchTag && matchSearch;
    });
  }

  initiales(s: Story): string {
    return ((s.auteurPrenom?.[0] ?? '') + (s.auteurNom?.[0] ?? '')).toUpperCase();
  }

  nomComplet(s: Story): string {
    return `${s.auteurPrenom ?? ''} ${s.auteurNom ?? ''}`.trim();
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const diff = Math.floor((Date.now() - d.getTime()) / 1000);
    if (diff < 60) return 'À l\'instant';
    if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`;
    if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)} h`;
    if (diff < 604800) return `Il y a ${Math.floor(diff / 86400)} j`;
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  toggleLike(s: Story): void {
    if (s.isLikedByMe) {
      this.api.unlikeStory(s.id).subscribe();
      s.likesCount--;
      s.isLikedByMe = false;
    } else {
      this.api.likeStory(s.id).subscribe();
      s.likesCount++;
      s.isLikedByMe = true;
    }
  }

  openForm(): void {
    this.form = { titre: '', caption: '', tag: 'Souvenir', mediaFile: null, mediaPreview: null, mediaType: null };
    this.notifyUserIds = null;
    this.formErreur = null;
    this.showForm = true;
  }

  onMediaSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.form.mediaFile = file;
    this.form.mediaType = file.type.startsWith('video/') ? 'video' : 'photo';
    const reader = new FileReader();
    reader.onload = e => { this.form.mediaPreview = e.target?.result as string; };
    reader.readAsDataURL(file);
  }

  removeMedia(): void {
    this.form.mediaFile = null;
    this.form.mediaPreview = null;
    this.form.mediaType = null;
  }

  submitForm(): void {
    if (!this.form.caption.trim() && !this.form.mediaFile) {
      this.formErreur = 'Ajoutez un texte ou un média pour publier une story.';
      return;
    }
    this.formErreur = null;
    this.saving = true;
    const publish = (mediaUrl?: string, mediaType?: string) => {
      this.api.createStory({
        titre:   this.form.titre || undefined,
        caption: this.form.caption,
        tag:     this.form.tag || undefined,
        mediaUrl,
        mediaType,
        notifyUserIds: this.notifyUserIds,
      }).subscribe({
        next: s => { this.stories.unshift(s); this.showForm = false; this.saving = false; },
        error: (err) => { this.saving = false; this.formErreur = err?.error?.error ?? 'Erreur lors de la publication.'; }
      });
    };
    if (this.form.mediaFile) {
      this.api.uploadStoryMedia(this.form.mediaFile).subscribe({
        next: ({ mediaUrl, mediaType }) => publish(mediaUrl, mediaType),
        error: () => { this.saving = false; this.formErreur = "Erreur lors de l'envoi du média."; }
      });
    } else {
      publish();
    }
  }

  deleteStory(id: string): void {
    if (!confirm('Supprimer cette story ?')) return;
    this.api.deleteStory(id).subscribe({
      next: () => { this.stories = this.stories.filter(s => s.id !== id); },
      error: () => { this.formErreur = 'Erreur lors de la suppression de la story.'; },
    });
  }

  isMyStory(s: Story): boolean {
    return s.auteurId === this.auth.getUser()?.id;
  }

  tagColor(tag: string): { bg: string; color: string } {
    return this.tagColors[tag] ?? { bg: '#F3F4F6', color: '#6B7280' };
  }
}
