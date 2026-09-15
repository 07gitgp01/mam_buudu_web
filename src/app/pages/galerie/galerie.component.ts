import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { GaleriePhoto } from '../../models/photo.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.scss',
  standalone: false,
})
export class GalerieComponent implements OnInit {
  loading = true;
  loadingMore = false;
  erreur = '';
  photos: GaleriePhoto[] = [];
  page = 1;
  readonly pageSize = 24;
  totalPages = 1;

  lightbox: GaleriePhoto | null = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.erreur = '';
    this.page = 1;
    this.api.getGalerie(this.page, this.pageSize)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (!res) { this.erreur = 'Impossible de charger la galerie.'; this.loading = false; return; }
        this.photos = res.data;
        this.totalPages = res.totalPages;
        this.loading = false;
      });
  }

  loadMore(): void {
    if (this.loadingMore || this.page >= this.totalPages) return;
    this.loadingMore = true;
    const nextPage = this.page + 1;
    this.api.getGalerie(nextPage, this.pageSize)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res) {
          this.photos = [...this.photos, ...res.data];
          this.page = res.page;
          this.totalPages = res.totalPages;
        }
        this.loadingMore = false;
      });
  }

  trackById(_: number, item: GaleriePhoto): string { return item.id; }
}
