import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ACTIVITY_LABELS, ActivityLogEntry } from '../../models/activity.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss',
  standalone: false,
})
export class HistoriqueComponent implements OnInit {
  loading = true;
  loadingMore = false;
  erreur = '';
  entries: ActivityLogEntry[] = [];
  page = 1;
  readonly pageSize = 30;
  totalPages = 1;

  readonly labels = ACTIVITY_LABELS;

  constructor(private api: ApiService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.erreur = '';
    this.page = 1;
    this.api.getActivity(this.page, this.pageSize)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (!res) { this.erreur = "Impossible de charger l'historique."; this.loading = false; return; }
        this.entries = res.data;
        this.totalPages = res.totalPages;
        this.loading = false;
      });
  }

  loadMore(): void {
    if (this.loadingMore || this.page >= this.totalPages) return;
    this.loadingMore = true;
    const nextPage = this.page + 1;
    this.api.getActivity(nextPage, this.pageSize)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res) {
          this.entries = [...this.entries, ...res.data];
          this.page = res.page;
          this.totalPages = res.totalPages;
        }
        this.loadingMore = false;
      });
  }

  labelFor(e: ActivityLogEntry) { return this.labels[e.action] ?? { label: e.action, icon: 'history', color: '#6B7280' }; }

  cibleNom(e: ActivityLogEntry): string {
    const d = e.details;
    if (!d) return '';
    return d['nom'] ?? d['noms'] ?? d['titre'] ?? '';
  }

  formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    const diff = Math.floor((Date.now() - d.getTime()) / 1000);
    if (diff < 60) return "À l'instant";
    if (diff < 3600) return `Il y a ${Math.floor(diff / 60)} min`;
    if (diff < 86400) return `Il y a ${Math.floor(diff / 3600)} h`;
    if (diff < 604800) return `Il y a ${Math.floor(diff / 86400)} j`;
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  trackById(_: number, item: ActivityLogEntry): string { return item.id; }
}
