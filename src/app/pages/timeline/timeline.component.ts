import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { getNomComplet, extractAnnee } from '../../models/personne.model';

export type EventType = 'naissance' | 'mariage' | 'deces' | 'succes' | 'voyage' | 'autre';

export interface TimelineEvent {
  id: string;
  annee: number;
  date: string;
  type: EventType;
  titre: string;
  description: string;
  personne: string;
  source: 'auto' | 'custom';
}

const TYPE_CONFIG: Record<string, { icon: string; color: string; bg: string; label: string; dotClass: string }> = {
  naissance: { icon: 'child_care',      color: '#10B981', bg: '#ECFDF5', label: 'Naissance', dotClass: 'dot-success' },
  mariage:   { icon: 'favorite',        color: '#EC4899', bg: '#FDF2F8', label: 'Mariage',   dotClass: 'dot-pink'    },
  deces:     { icon: 'hourglass_empty', color: '#6B7280', bg: '#F3F4F6', label: 'Décès',     dotClass: 'dot-gray'    },
  succes:    { icon: 'emoji_events',    color: '#F59E0B', bg: '#FFFBEB', label: 'Succès',    dotClass: 'dot-warning' },
  voyage:    { icon: 'flight',          color: '#2563EB', bg: '#EFF6FF', label: 'Voyage',    dotClass: 'dot-accent'  },
  autre:     { icon: 'star',            color: '#7C3AED', bg: '#F5F3FF', label: 'Autre',     dotClass: 'dot-primary' },
};

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  standalone: false,
})
export class TimelineComponent implements OnInit {
  loading = true;
  events: TimelineEvent[] = [];
  filtreActif = 'tous';
  triDesc = true;

  showForm = false;
  saving = false;
  form: { titre: string; description: string; type: EventType; date: string; personne: string } = {
    titre: '', description: '', type: 'autre', date: '', personne: ''
  };
  customEvents: TimelineEvent[] = [];

  readonly filtres = [
    { key: 'tous',     label: 'Tout',       icon: 'timeline'         },
    { key: 'naissance',label: 'Naissances', icon: 'child_care'       },
    { key: 'mariage',  label: 'Mariages',   icon: 'favorite'         },
    { key: 'deces',    label: 'Décès',      icon: 'hourglass_empty'  },
    { key: 'succes',   label: 'Succès',     icon: 'emoji_events'     },
    { key: 'voyage',   label: 'Voyages',    icon: 'flight'           },
    { key: 'autre',    label: 'Autres',     icon: 'star'             },
  ];

  readonly typeOptions: EventType[] = ['naissance','mariage','deces','succes','voyage','autre'];

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
            id: `naissance-${p.id}`,
            annee,
            date: this.formatDateLabel(p.dateNaissance),
            type: 'naissance',
            titre: `Naissance de ${nom}`,
            description: p.lieuNaissance
              ? `${nom} est né${genre} à ${p.lieuNaissance}.`
              : `${nom} est né${genre} dans la famille.`,
            personne: nom,
            source: 'auto',
          });
        }

        if (p.dateDeces) {
          const annee = extractAnnee(p.dateDeces);
          if (annee) events.push({
            id: `deces-${p.id}`,
            annee,
            date: this.formatDateLabel(p.dateDeces),
            type: 'deces',
            titre: `Décès de ${nom}`,
            description: p.lieuDeces
              ? `${nom} nous a quittés à ${p.lieuDeces}.`
              : `${nom} nous a quittés.`,
            personne: nom,
            source: 'auto',
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
              id: `mariage-${u.id}`,
              annee,
              date: this.formatDateLabel(u.dateDebut),
              type: 'mariage',
              titre: membres ? `Mariage : ${membres}` : 'Mariage familial',
              description: 'Cérémonie de mariage.',
              personne: membres,
              source: 'auto',
            });
          }
        }
      }

      this.events = [...events, ...this.customEvents]
        .sort((a, b) => this.triDesc ? b.annee - a.annee : a.annee - b.annee);
      this.loading = false;
    });
  }

  get eventsFiltres(): TimelineEvent[] {
    const list = this.triDesc ? this.events : [...this.events].reverse();
    if (this.filtreActif === 'tous') return list;
    return list.filter(e => e.type === this.filtreActif);
  }

  typeConfig(type: string) {
    return TYPE_CONFIG[type] ?? TYPE_CONFIG['autre'];
  }

  formatDateLabel(d: string): string {
    if (!d) return '';
    if (d.length === 4) return d;
    const [y, m] = d.split('-');
    const mois = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
    return m ? `${mois[+m - 1]} ${y}` : y;
  }

  toggleTri(): void {
    this.triDesc = !this.triDesc;
    this.events = [...this.events].reverse();
  }

  openForm(): void {
    this.form = { titre: '', description: '', type: 'autre', date: '', personne: '' };
    this.showForm = true;
  }

  submitForm(): void {
    if (!this.form.titre.trim() || !this.form.date.trim()) return;
    const annee = extractAnnee(this.form.date);
    if (!annee) return;
    const ev: TimelineEvent = {
      id: `custom-${Date.now()}`,
      annee,
      date: this.formatDateLabel(this.form.date),
      type: this.form.type,
      titre: this.form.titre,
      description: this.form.description,
      personne: this.form.personne,
      source: 'custom',
    };
    this.customEvents.push(ev);
    this.events = [...this.events, ev].sort((a, b) => this.triDesc ? b.annee - a.annee : a.annee - b.annee);
    this.showForm = false;
  }

  deleteEvent(ev: TimelineEvent): void {
    if (ev.source !== 'custom') return;
    this.customEvents = this.customEvents.filter(e => e.id !== ev.id);
    this.events = this.events.filter(e => e.id !== ev.id);
  }
}
