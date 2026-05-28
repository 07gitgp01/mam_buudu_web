import { Component, OnInit } from '@angular/core';
import {
  Personne, getInitiales, getAgeLabel, estVivant, getNomComplet,
  extractAnnee, getPhotoUrl,
} from '../../../models/personne.model';
import { ApiService } from '../../../services/api.service';

type Filtre = 'tous' | 'hommes' | 'femmes' | 'vivants' | 'decedes';

@Component({
  selector: 'app-famille-membres',
  templateUrl: './famille-membres.component.html',
  styleUrl: './famille-membres.component.scss',
  standalone: false,
})
export class FamilleMembresComponent implements OnInit {
  getInitiales  = getInitiales;
  getAgeLabel   = getAgeLabel;
  estVivant     = estVivant;
  getNomComplet = getNomComplet;
  extractAnnee  = extractAnnee;
  getPhotoUrl   = getPhotoUrl;

  toutes: Personne[] = [];
  loading = true;
  erreur: string | null = null;
  searchQuery = '';
  filtreActif: Filtre = 'tous';
  viewMode: 'cards' | 'list' = 'cards';
  failedPhotos = new Set<string>();

  detailTarget: Personne | null = null;
  showDetail = false;

  filtres: { key: Filtre; label: string; icon: string }[] = [
    { key: 'tous',    label: 'Tous',    icon: 'people'         },
    { key: 'hommes',  label: 'Hommes',  icon: 'male'           },
    { key: 'femmes',  label: 'Femmes',  icon: 'female'         },
    { key: 'vivants', label: 'Vivants', icon: 'favorite'       },
    { key: 'decedes', label: 'Décédés', icon: 'hourglass_empty' },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPersonnes().subscribe({
      next:  (data) => { this.toutes = data; this.failedPhotos.clear(); this.loading = false; },
      error: ()     => { this.erreur = 'Impossible de charger les membres.'; this.loading = false; },
    });
  }

  get personnesFiltrees(): Personne[] {
    return this.toutes.filter(p => {
      const q   = this.searchQuery.toLowerCase();
      const nom = `${p.prenoms ?? ''} ${p.nomUsage ?? p.nomNaissance ?? ''}`.toLowerCase();
      const matchSearch  = !q || nom.includes(q) || (p.lieuNaissance ?? '').toLowerCase().includes(q);
      const matchFiltre  =
        this.filtreActif === 'tous'    ? true :
        this.filtreActif === 'hommes'  ? p.sexe === 'M' :
        this.filtreActif === 'femmes'  ? p.sexe === 'F' :
        this.filtreActif === 'vivants' ? estVivant(p) :
        this.filtreActif === 'decedes' ? !estVivant(p) : true;
      return matchSearch && matchFiltre;
    });
  }

  openDetail(p: Personne): void { this.detailTarget = p; this.showDetail = true; }
  closeDetail(): void { this.showDetail = false; this.detailTarget = null; }
  onPhotoError(id: string): void { this.failedPhotos.add(id); }

  getSexeLabel(sexe: string | null): string {
    return sexe === 'M' ? 'Homme' : sexe === 'F' ? 'Femme' : 'Autre';
  }
}
