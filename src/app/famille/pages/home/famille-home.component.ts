import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Personne, getInitiales, estVivant, extractAnnee, getNomComplet } from '../../../models/personne.model';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-famille-home',
  templateUrl: './famille-home.component.html',
  styleUrl: './famille-home.component.scss',
  standalone: false,
})
export class FamilleHomeComponent implements OnInit {
  getInitiales  = getInitiales;
  estVivant     = estVivant;
  extractAnnee  = extractAnnee;
  getNomComplet = getNomComplet;

  nomFamille = '';
  loading = true;
  totalMembres = 0;
  totalUnions  = 0;
  totalGenerations = 0;
  recentPersonnes: Personne[] = [];

  tiles = [
    { icon: 'account_tree', label: 'Arbre généalogique', route: '/famille/arbre',    color: '#7C3AED', bg: '#F5F3FF' },
    { icon: 'people',       label: 'Membres',            route: '/famille/membres',  color: '#059669', bg: '#ECFDF5' },
    { icon: 'auto_stories', label: 'Stories',            route: '/famille/stories',  color: '#DB2777', bg: '#FDF2F8' },
    { icon: 'timeline',     label: 'Événements',         route: '/famille/timeline', color: '#D97706', bg: '#FFFBEB' },
  ];

  constructor(private api: ApiService, public auth: AuthService) {}

  ngOnInit(): void {
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions: this.api.getUnions(),
      famille: this.api.getCurrentFamille(),
    }).subscribe({
      next: ({ personnes, unions, famille }) => {
        this.nomFamille    = (famille as any).nom ?? (famille as any).famille?.nom ?? '';
        this.totalMembres  = personnes.length;
        this.totalUnions   = unions.length;
        const annees = personnes.map(p => extractAnnee(p.dateNaissance)).filter((a): a is number => a !== null);
        if (annees.length > 0) {
          const spread = Math.max(...annees) - Math.min(...annees);
          this.totalGenerations = Math.max(1, Math.round(spread / 25));
        }
        this.recentPersonnes = [...personnes]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 6);
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  get user() { return this.auth.getUser(); }
}
