import { Component, OnInit } from '@angular/core';
import { Personne, getInitiales, estVivant, extractAnnee } from '../../models/personne.model';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent implements OnInit {
  getInitiales = getInitiales;
  estVivant    = estVivant;
  extractAnnee = extractAnnee;

  nomFamille = '';
  loading = true;

  stats = [
    { icon: 'people',               label: 'Membres',     value: 0,   color: 'blue'   },
    { icon: 'account_tree',         label: 'Générations', value: 0,   color: 'indigo' },
    { icon: 'favorite',             label: 'Unions',      value: 0,   color: 'pink'   },
    { icon: 'collections_bookmark', label: 'Stories',     value: 0,   color: 'green'  },
  ];

  recentPersonnes: Personne[] = [];
  viewMode: 'cards' | 'list' = 'cards';

  quickActions = [
    { icon: 'person_add',         label: 'Ajouter un membre', route: '/app/personnes', color: 'blue'   },
    { icon: 'account_tree',       label: 'Voir l\'arbre',     route: '/app/tree',      color: 'indigo' },
    { icon: 'favorite',           label: 'Voir les unions',   route: '/app/unions',    color: 'pink'   },
    { icon: 'sports_esports',     label: 'Jouer',             route: '/app/jeux',      color: 'green'  },
  ];

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions:    this.api.getUnions(),
      famille:   this.api.getCurrentFamille(),
    }).subscribe({
      next: ({ personnes, unions, famille }) => {
        this.nomFamille = (famille as any).nom ?? '';
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

        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  setViewMode(mode: 'cards' | 'list'): void {
    this.viewMode = mode;
  }
}
