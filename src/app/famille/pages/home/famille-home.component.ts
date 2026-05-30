import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Personne, getInitiales, estVivant, extractAnnee, getNomComplet, getPhotoUrl, getAgeLabel } from '../../../models/personne.model';
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
  getAgeLabel   = getAgeLabel;
  getPhotoUrl   = getPhotoUrl;
  failedPhotos  = new Set<string>();
  viewMode: 'cards' | 'list' = 'cards';

  nomFamille = '';
  familleCode = '';
  loading = true;
  totalMembres = 0;
  totalUnions  = 0;
  totalGenerations = 0;
  toutes: Personne[] = [];
  recentPersonnes: Personne[] = [];

  tiles = [
    { icon: 'account_tree', label: 'Arbre généalogique', route: '/famille/arbre',    color: '#7C3AED', bg: '#F5F3FF' },
    { icon: 'people',       label: 'Membres',            route: '/famille/membres',  color: '#059669', bg: '#ECFDF5' },
    { icon: 'auto_stories', label: 'Stories',            route: '/famille/stories',  color: '#DB2777', bg: '#FDF2F8' },
    { icon: 'timeline',     label: 'Événements',         route: '/famille/timeline', color: '#D97706', bg: '#FFFBEB' },
    { icon: 'group_add',    label: 'Inviter',            route: '/famille/inviter',  color: '#0891B2', bg: '#ECFEFF' },
  ];

  constructor(private api: ApiService, public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions: this.api.getUnions(),
      famille: this.api.getCurrentFamille(),
    }).subscribe({
      next: ({ personnes, unions, famille }) => {
        const f = (famille as any).famille ?? famille;
        this.nomFamille    = f.nom ?? '';
        this.familleCode   = f.code ?? f.codeUnique ?? '';
        this.totalMembres  = personnes.length;
        this.totalUnions   = unions.length;
        this.toutes        = personnes;
        const annees = personnes.map(p => extractAnnee(p.dateNaissance)).filter((a): a is number => a !== null);
        if (annees.length > 0) {
          const spread = Math.max(...annees) - Math.min(...annees);
          this.totalGenerations = Math.max(1, Math.round(spread / 25));
        }
        this.recentPersonnes = [...personnes]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 6);
        this.failedPhotos.clear();
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  get user() { return this.auth.getUser(); }

  onPhotoError(id: string): void { this.failedPhotos.add(id); }

  get completionScore(): number {
    if (!this.toutes.length) return 0;
    const withDate  = this.toutes.filter(p => !!p.dateNaissance).length;
    const withLieu  = this.toutes.filter(p => !!p.lieuNaissance).length;
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
    const msg = `Rejoignez l'arbre familial de la famille *${this.nomFamille}* sur Mam Buudu 🌳\nCode : *${this.familleCode}*`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
