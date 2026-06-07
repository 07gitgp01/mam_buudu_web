import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { getNomComplet, extractAnnee } from '../../../models/personne.model';

type EventType = 'naissance' | 'mariage' | 'deces' | 'succes' | 'voyage' | 'autre';

interface TimelineEvent {
  id: string;
  titre: string;
  description: string;
  date: string;
  annee: number;
  type: EventType;
  personne: string;
}

@Component({
  selector: 'app-famille-timeline',
  templateUrl: './famille-timeline.component.html',
  styleUrl: './famille-timeline.component.scss',
  standalone: false,
})
export class FamilleTimelineComponent implements OnInit {
  loading = true;
  filtreActif = 'tous';

  filtres = [
    { key: 'tous',      label: 'Tout',       icon: 'timeline'         },
    { key: 'naissance', label: 'Naissances', icon: 'child_care'       },
    { key: 'mariage',   label: 'Mariages',   icon: 'favorite'         },
    { key: 'deces',     label: 'Décès',      icon: 'hourglass_empty'  },
    { key: 'succes',    label: 'Succès',     icon: 'emoji_events'     },
    { key: 'voyage',    label: 'Voyages',    icon: 'flight'           },
  ];

  events: TimelineEvent[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    forkJoin({
      personnes: this.api.getPersonnes().pipe(catchError(() => of([]))),
      unions:    this.api.getUnions().pipe(catchError(() => of([]))),
    }).subscribe(({ personnes, unions }) => {
      const events: TimelineEvent[] = [];

      for (const p of personnes) {
        const nom = getNomComplet(p);
        const genre = p.sexe === 'F' ? 'e' : '';

        if (p.dateNaissance) {
          const annee = extractAnnee(p.dateNaissance);
          if (annee) events.push({
            id: `naissance-${p.id}`, annee,
            date: this.formatDate(p.dateNaissance),
            type: 'naissance',
            titre: `Naissance de ${nom}`,
            description: p.lieuNaissance
              ? `${nom} est né${genre} à ${p.lieuNaissance}.`
              : `${nom} voit le jour et rejoint notre famille.`,
            personne: nom,
          });
        }

        if (p.dateDeces) {
          const annee = extractAnnee(p.dateDeces);
          if (annee) events.push({
            id: `deces-${p.id}`, annee,
            date: this.formatDate(p.dateDeces),
            type: 'deces',
            titre: `Décès de ${nom}`,
            description: p.lieuDeces
              ? `${nom} nous a quittés à ${p.lieuDeces}.`
              : `${nom} nous a quittés.`,
            personne: nom,
          });
        }
      }

      for (const u of unions) {
        if (u.dateDebut) {
          const annee = extractAnnee(u.dateDebut);
          if (annee) {
            const membres = u.participants
              .map(pt => personnes.find(p => p.id === pt.personneId))
              .filter(Boolean)
              .map(p => getNomComplet(p!))
              .join(' & ');
            events.push({
              id: `mariage-${u.id}`, annee,
              date: this.formatDate(u.dateDebut),
              type: 'mariage',
              titre: membres ? `Mariage : ${membres}` : 'Mariage familial',
              description: 'Une belle union célébrée en famille.',
              personne: membres,
            });
          }
        }
      }

      this.events = events.sort((a, b) => b.annee - a.annee);
      this.loading = false;
    });
  }

  get eventsFiltres(): TimelineEvent[] {
    if (this.filtreActif === 'tous') return this.events;
    return this.events.filter(e => e.type === this.filtreActif);
  }

  typeConfig(type: string): { icon: string; color: string; bg: string; label: string } {
    const map: Record<string, { icon: string; color: string; bg: string; label: string }> = {
      naissance: { icon: 'child_care',      color: '#DB2777', bg: '#FDF2F8', label: 'Naissance' },
      mariage:   { icon: 'favorite',        color: '#7C3AED', bg: '#F5F3FF', label: 'Mariage'   },
      deces:     { icon: 'hourglass_empty', color: '#6B7280', bg: '#F3F4F6', label: 'Décès'     },
      succes:    { icon: 'emoji_events',    color: '#D97706', bg: '#FFFBEB', label: 'Succès'    },
      voyage:    { icon: 'flight',          color: '#059669', bg: '#ECFDF5', label: 'Voyage'    },
      autre:     { icon: 'star',            color: '#2563EB', bg: '#EFF6FF', label: 'Événement' },
    };
    return map[type] ?? map['autre'];
  }

  private formatDate(d: string): string {
    if (!d) return '';
    if (d.length === 4) return d;
    const [y, m] = d.split('-');
    const mois = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
    return m ? `${mois[+m - 1]} ${y}` : y;
  }
}
