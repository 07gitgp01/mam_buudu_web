import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne, getInitiales, estVivant, extractAnnee, getAgeLabel, getNomComplet, getPhotoUrl } from '../../models/personne.model';
import { ApiService } from '../../services/api.service';
import { AuthService, AuthUser } from '../../services/auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent implements OnInit {
  getInitiales  = getInitiales;
  estVivant     = estVivant;
  extractAnnee  = extractAnnee;
  getAgeLabel   = getAgeLabel;
  getNomComplet = getNomComplet;
  getPhotoUrl   = getPhotoUrl;

  user: AuthUser | null = null;
  nomFamille = '';
  familleCode = '';
  loading = true;

  stats = [
    { icon: 'people',               label: 'Membres',     value: 0,   color: 'blue'   },
    { icon: 'account_tree',         label: 'Générations', value: 0,   color: 'indigo' },
    { icon: 'favorite',             label: 'Unions',      value: 0,   color: 'pink'   },
    { icon: 'collections_bookmark', label: 'Stories',     value: 0,   color: 'green'  },
  ];

  toutes: Personne[] = [];
  recentPersonnes: Personne[] = [];
  failedPhotos = new Set<string>();
  viewMode: 'cards' | 'list' = 'cards';

  onPhotoError(id: string): void { this.failedPhotos.add(id); }

  quickActions = [
    { icon: 'person_add',         label: 'Ajouter un membre', route: '/app/personnes', color: 'blue'   },
    { icon: 'account_tree',       label: 'Voir l\'arbre',     route: '/app/tree',      color: 'indigo' },
    { icon: 'favorite',           label: 'Voir les unions',   route: '/app/unions',    color: 'pink'   },
    { icon: 'sports_esports',     label: 'Jouer',             route: '/app/jeux',      color: 'green'  },
  ];

  constructor(private api: ApiService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.auth.getUser();
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions:    this.api.getUnions(),
      famille:   this.api.getCurrentFamille(),
    }).subscribe({
      next: ({ personnes, unions, famille }) => {
        const f = (famille as any).famille ?? famille;
        this.nomFamille  = f.nom ?? '';
        this.familleCode = f.code ?? f.codeUnique ?? '';
        this.toutes = personnes;
        this.stats[0].value = personnes.length;
        this.stats[2].value = unions.length;

        // Calcul approximatif des générations par plage de naissance
        const annees = personnes.map(p => extractAnnee(p.dateNaissance)).filter((a): a is number => a !== null);
        if (annees.length > 0) {
          const min = Math.min(...annees);
          const max = Math.max(...annees);
          this.stats[1].value = Math.max(1, Math.round((max - min) / 25));
        }

        this.recentPersonnes = [...personnes]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 8);

        this.failedPhotos.clear();
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  setViewMode(mode: 'cards' | 'list'): void {
    this.viewMode = mode;
  }

  get completionScore(): number {
    if (!this.toutes.length) return 0;
    const withDate = this.toutes.filter(p => !!p.dateNaissance).length;
    const withLieu = this.toutes.filter(p => !!p.lieuNaissance).length;
    return Math.round(((withDate + withLieu) / (this.toutes.length * 2)) * 100);
  }

  get anniversairesProches(): { p: Personne; jours: number; dateStr: string }[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.toutes
      .filter(p => estVivant(p) && p.dateNaissance && /\d{4}-\d{2}-\d{2}/.test(p.dateNaissance))
      .map(p => {
        const match = p.dateNaissance!.match(/\d{4}-(\d{2})-(\d{2})/);
        if (!match) return null;
        const month = parseInt(match[1]) - 1;
        const day   = parseInt(match[2]);
        const yr    = today.getFullYear();
        let next    = new Date(yr, month, day);
        if (next < today) next = new Date(yr + 1, month, day);
        const jours   = Math.round((next.getTime() - today.getTime()) / 86_400_000);
        const dateStr = next.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
        return { p, jours, dateStr };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null && x.jours <= 60)
      .sort((a, b) => a.jours - b.jours)
      .slice(0, 5);
  }

  shareWhatsApp(): void {
    const msg = `Rejoignez l'arbre familial de la famille *${this.nomFamille}* sur Mam Buudu\nCode : *${this.familleCode}*`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
