import { Component } from '@angular/core';

interface TimelineEvent {
  id: string;
  date: string;
  annee: number;
  titre: string;
  description: string;
  type: 'naissance' | 'mariage' | 'deces' | 'succes' | 'voyage' | 'autre';
  personne: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  standalone: false,
})
export class TimelineComponent {
  events: TimelineEvent[] = [
    { id: '1', annee: 1948, date: '1948',      type: 'naissance', titre: 'Naissance de Moussa Diallo',          description: 'Moussa Diallo naît à Conakry, premier enfant de la famille.',                    personne: 'Moussa Diallo' },
    { id: '2', annee: 1953, date: '1953',      type: 'naissance', titre: 'Naissance d\'Aminata',                description: 'Aminata vient au monde à Conakry dans le quartier Kaloum.',                     personne: 'Aminata Diallo' },
    { id: '3', annee: 1972, date: 'Juin 1972', type: 'mariage',   titre: 'Mariage de Moussa et Aminata',        description: 'Cérémonie de mariage traditionnelle à Conakry, réunissant deux grandes familles.', personne: 'Moussa & Aminata' },
    { id: '4', annee: 1975, date: '1975',      type: 'naissance', titre: 'Naissance d\'Ibrahim',                description: 'Ibrahim, premier fils du couple, voit le jour.',                                  personne: 'Ibrahim Diallo' },
    { id: '5', annee: 1985, date: '1985',      type: 'voyage',    titre: 'Déménagement à Dakar',                description: 'La famille s\'installe à Dakar pour de nouvelles opportunités professionnelles.',   personne: 'Famille Diallo' },
    { id: '6', annee: 1999, date: '1999',      type: 'succes',    titre: 'Diplôme de Fatoumata',                description: 'Fatoumata obtient son baccalauréat avec mention Très Bien.',                     personne: 'Fatoumata Diallo' },
    { id: '7', annee: 2001, date: '2001',      type: 'naissance', titre: 'Naissance de Seydou',                 description: 'Seydou est né à Paris lors d\'un séjour en France.',                            personne: 'Seydou Diallo' },
    { id: '8', annee: 2010, date: 'Mars 2010', type: 'deces',     titre: 'Décès de Moussa Diallo',              description: 'Le patriarche nous quitte après une longue vie bien remplie. Il avait 62 ans.',    personne: 'Moussa Diallo' },
    { id: '9', annee: 2024, date: 'Jan 2024',  type: 'succes',    titre: 'Master d\'Ibrahim',                   description: 'Ibrahim obtient son doctorat en médecine, devenant le premier médecin de la famille.', personne: 'Ibrahim Diallo' },
  ];

  typeConfig: Record<string, { icon: string; color: string }> = {
    naissance: { icon: 'child_care',  color: 'success' },
    mariage:   { icon: 'favorite',    color: 'pink'    },
    deces:     { icon: 'local_florist', color: 'gray'  },
    succes:    { icon: 'emoji_events', color: 'warning' },
    voyage:    { icon: 'flight',       color: 'accent'  },
    autre:     { icon: 'star',         color: 'primary' },
  };

  getConfig(type: string) {
    return this.typeConfig[type] ?? this.typeConfig['autre'];
  }
}
