import { Component, OnInit, OnDestroy } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Story, STORY_TAGS, STORY_TAG_COLORS } from '../../models/story.model';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss',
  standalone: false,
})
export class StoriesComponent implements OnInit, OnDestroy {
  loading = true;
  erreur = '';
  stories: Story[] = [];

  searchQuery = '';
  selectedTag = 'tous';
  readonly tags = ['tous', ...STORY_TAGS];
  readonly tagOptions = [...STORY_TAGS];
  readonly tagColors = STORY_TAG_COLORS;

  showForm = false;
  saving = false;
  form: { titre: string; caption: string; tag: string; mediaFile: File | null; mediaPreview: string | null; mediaType: 'photo' | 'video' | null } =
    { titre: '', caption: '', tag: 'Souvenir', mediaFile: null, mediaPreview: null, mediaType: null };

  /* ── Enregistrement audio ── */
  audioMode: 'idle' | 'recording' | 'recorded' = 'idle';
  audioBlob:    Blob | null = null;
  audioBlobUrl: string | null = null;
  audioSeconds = 0;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks:   Blob[] = [];
  private audioTimer:    ReturnType<typeof setInterval> | null = null;
  private audioStream:   MediaStream | null = null;

  constructor(private api: ApiService, public auth: AuthService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.erreur = '';
    this.api.getStories().pipe(catchError(() => of([]))).subscribe(data => {
      this.stories = data;
      this.loading = false;
    });
  }

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

  ngOnDestroy(): void { this.stopRecording(); }

  openForm(): void {
    this.form = { titre: '', caption: '', tag: 'Souvenir', mediaFile: null, mediaPreview: null, mediaType: null };
    this.resetAudio();
    this.showForm = true;
  }

  /* ── Audio recording ── */
  async startRecording(): Promise<void> {
    try {
      this.audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
      this.mediaRecorder = new MediaRecorder(this.audioStream, { mimeType });
      this.audioChunks   = [];
      this.audioSeconds  = 0;
      this.audioMode     = 'recording';

      this.mediaRecorder.ondataavailable = e => { if (e.data.size > 0) this.audioChunks.push(e.data); };
      this.mediaRecorder.onstop = () => {
        const mimeType = this.audioChunks[0]?.type || 'audio/webm';
        this.audioBlob    = new Blob(this.audioChunks, { type: mimeType });
        this.audioBlobUrl = URL.createObjectURL(this.audioBlob);
        this.audioMode    = 'recorded';
        this.audioStream?.getTracks().forEach(t => t.stop());
      };

      this.mediaRecorder.start(200);
      this.audioTimer = setInterval(() => { this.audioSeconds++; }, 1000);
    } catch {
      alert("Accès au microphone refusé. Autorisez le microphone dans les paramètres de votre navigateur.");
    }
  }

  stopRecording(): void {
    if (this.audioTimer) { clearInterval(this.audioTimer); this.audioTimer = null; }
    if (this.mediaRecorder?.state === 'recording') this.mediaRecorder.stop();
    this.audioStream?.getTracks().forEach(t => t.stop());
  }

  resetAudio(): void {
    this.stopRecording();
    if (this.audioBlobUrl) { URL.revokeObjectURL(this.audioBlobUrl); this.audioBlobUrl = null; }
    this.audioBlob   = null;
    this.audioMode   = 'idle';
    this.audioSeconds = 0;
    this.audioChunks  = [];
  }

  formatAudioTime(s: number): string {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
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
    const hasContent = this.form.caption.trim() || this.form.mediaFile || this.audioBlob;
    if (!hasContent) return;
    this.saving = true;

    const publish = (mediaUrl?: string, mediaType?: string) => {
      this.api.createStory({
        titre:   this.form.titre || undefined,
        caption: this.form.caption,
        tag:     this.form.tag || undefined,
        mediaUrl,
        mediaType,
      }).subscribe({
        next: s => {
          this.stories.unshift(s);
          this.showForm = false;
          this.saving = false;
          this.resetAudio();
        },
        error: () => { this.saving = false; }
      });
    };

    if (this.audioBlob) {
      this.api.uploadStoryAudio(this.audioBlob).subscribe({
        next: ({ mediaUrl, mediaType }) => publish(mediaUrl, mediaType),
        error: () => { this.saving = false; }
      });
    } else if (this.form.mediaFile) {
      this.api.uploadStoryMedia(this.form.mediaFile).subscribe({
        next: ({ mediaUrl, mediaType }) => publish(mediaUrl, mediaType),
        error: () => { this.saving = false; }
      });
    } else {
      publish();
    }
  }

  deleteStory(id: string): void {
    if (!confirm('Supprimer cette story ?')) return;
    this.api.deleteStory(id).subscribe(() => {
      this.stories = this.stories.filter(s => s.id !== id);
    });
  }

  isMyStory(s: Story): boolean {
    return s.auteurId === this.auth.getUser()?.id;
  }

  tagColor(tag: string): { bg: string; color: string } {
    return this.tagColors[tag] ?? { bg: '#F3F4F6', color: '#6B7280' };
  }
}
