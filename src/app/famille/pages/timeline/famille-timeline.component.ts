import { Component } from '@angular/core';

interface TimelineEvent {
  id: string;
  titre: string;
  description: string;
  date: string;
  annee: number;
  type: 'naissance' | 'mariage' | 'deces' | 'evenement' | 'success' | 'voyage';
  auteur: string;
}

@Component({
  selector: 'app-famille-timeline',
  templateUrl: './famille-timeline.component.html',
  styleUrl: './famille-timeline.component.scss',
  standalone: false,
})
export class FamilleTimelineComponent {
  filtreActif: string = 'tous';

  filtres = [
    { key: 'tous',       label: 'Tout',       icon: 'timeline'         },
    { key: 'naissance',  label: 'Naissances', icon: 'child_care'       },
    { key: 'mariage',    label: 'Mariages',   icon: 'favorite'         },
    { key: 'evenement',  label: 'Événements', icon: 'celebration'      },
    { key: 'success',    label: 'Succès',     icon: 'emoji_events'     },
    { key: 'voyage',     label: 'Voyages',    icon: 'flight'           },
  ];

  events: TimelineEvent[] = [
    { id:'1',  annee: 2025, date: 'Mars 2025',       type: 'naissance', titre: 'Naissance de Kadiatou Diallo',      description: 'La petite Kadiatou est née à Conakry, 3,2kg. Alhamdulillah ! Cinquième génération de notre famille.',               auteur: 'Oumar Diallo'      },
    { id:'2',  annee: 2024, date: 'Décembre 2024',   type: 'mariage',   titre: 'Mariage d\'Ousmane et Hawa',         description: 'Célébration du mariage d\'Ousmane Diallo et Hawa Bah à Dakar. Une union qui rapproche deux grandes familles.',       auteur: 'Fatoumata Konaté'  },
    { id:'3',  annee: 2024, date: 'Juin 2024',       type: 'success',   titre: 'Master de Seydou Baldé',            description: 'Seydou a obtenu son Master en Informatique mention Très Bien à l\'Université de Paris. Fierté de toute la famille.', auteur: 'Mamadou Kouyaté'   },
    { id:'4',  annee: 2023, date: 'Août 2023',       type: 'evenement', titre: 'Réunion de famille à Labé',          description: 'Plus de 80 membres réunis pour la grande réunion annuelle dans notre village ancestral de Labé, en Guinée.',         auteur: 'Ibrahim Diallo'    },
    { id:'5',  annee: 2023, date: 'Février 2023',    type: 'naissance', titre: 'Naissance des jumeaux Konaté',      description: 'Ismaïla et Mamadou, les jumeaux de Fatoumata, sont nés le même jour que leur arrière-grand-père, 60 ans après.',       auteur: 'Aminata Camara'    },
    { id:'6',  annee: 2022, date: 'Octobre 2022',    type: 'voyage',    titre: 'Voyage aux racines à Conakry',      description: 'Dix membres de la famille ont effectué un voyage de ressourcement à Conakry pour retrouver les archives familiales.',   auteur: 'Mariam Traoré'     },
    { id:'7',  annee: 2021, date: 'Juillet 2021',    type: 'success',   titre: 'Promotion de Mamadou Kouyaté',      description: 'Mamadou devient directeur régional d\'une grande entreprise minière. Première promotion au plus haut niveau.',         auteur: 'Kadiatou Sow'      },
    { id:'8',  annee: 2020, date: 'Novembre 2020',   type: 'evenement', titre: 'Inauguration de la maison familiale', description: 'Inauguration de la nouvelle maison familiale construite à Conakry. Un lieu de mémoire et de rassemblement.',        auteur: 'Ibrahim Diallo'    },
    { id:'9',  annee: 2018, date: 'Avril 2018',      type: 'mariage',   titre: 'Mariage de Mariam et Sekou',        description: 'Belle cérémonie de mariage célébrée en grande pompe à Bamako. Trois jours de festivités inoubliables.',                auteur: 'Oumar Diallo'      },
    { id:'10', annee: 1985, date: '15 Août 1985',    type: 'evenement', titre: 'Grande réunion de l\'Aïd 1985',    description: 'La photo historique de la famille réunie pour l\'Aïd. 47 personnes sur 4 générations immortalisées par grand-père.',    auteur: 'Ibrahim Diallo'    },
  ];

  get eventsFiltres(): TimelineEvent[] {
    if (this.filtreActif === 'tous') return this.events;
    return this.events.filter(e => e.type === this.filtreActif);
  }

  typeConfig(type: string): { icon: string; color: string; bg: string; label: string } {
    const map: Record<string, { icon: string; color: string; bg: string; label: string }> = {
      naissance:  { icon: 'child_care',    color: '#DB2777', bg: '#FDF2F8', label: 'Naissance'  },
      mariage:    { icon: 'favorite',      color: '#7C3AED', bg: '#F5F3FF', label: 'Mariage'    },
      deces:      { icon: 'hourglass_empty', color: '#6B7280', bg: '#F3F4F6', label: 'Décès'    },
      evenement:  { icon: 'celebration',  color: '#2563EB', bg: '#EFF6FF', label: 'Événement'  },
      success:    { icon: 'emoji_events', color: '#D97706', bg: '#FFFBEB', label: 'Succès'      },
      voyage:     { icon: 'flight',       color: '#059669', bg: '#ECFDF5', label: 'Voyage'      },
    };
    return map[type] ?? { icon: 'star', color: '#6B7280', bg: '#F3F4F6', label: type };
  }
}
