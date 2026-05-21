import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Personne, getInitiales, extractAnnee, getNomComplet } from '../../../models/personne.model';
import { Union } from '../../../models/union.model';
import { ApiService } from '../../../services/api.service';

interface GenItem {
  type: 'union' | 'solo';
  p1: Personne;
  p2?: Personne;
  union?: Union;
  hasChildren: boolean;
}

interface DisplayGen { level: number; items: GenItem[]; }

@Component({
  selector: 'app-famille-arbre',
  templateUrl: './famille-arbre.component.html',
  styleUrl: './famille-arbre.component.scss',
  standalone: false,
})
export class FamilleArbreComponent implements OnInit {
  personnes: Personne[] = [];
  unions:    Union[]    = [];
  generations: DisplayGen[] = [];
  loading = true;
  erreur: string | null = null;

  getInitiales  = getInitiales;
  extractAnnee  = extractAnnee;
  getNomComplet = getNomComplet;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    forkJoin({ personnes: this.api.getPersonnes(), unions: this.api.getUnions() }).subscribe({
      next: ({ personnes, unions }) => {
        this.personnes = personnes;
        this.unions    = unions;
        this.buildGenerations();
        this.loading   = false;
      },
      error: () => { this.erreur = 'Impossible de charger l\'arbre.'; this.loading = false; },
    });
  }

  get totalGenerations(): number { return this.generations.length; }

  private buildGenerations(): void {
    const personMap = new Map(this.personnes.map(p => [p.id, p]));
    const genMap    = new Map<string, number>();
    const childIds  = new Set<string>();

    this.unions.forEach(u => u.filiations.forEach(f => childIds.add(f.enfantId)));

    const roots = this.personnes.filter(p => !childIds.has(p.id));
    const queue: Array<{ id: string; gen: number }> = roots.map(p => ({ id: p.id, gen: 0 }));

    // Bellman-Ford : re-propage si la génération augmente
    while (queue.length > 0) {
      const { id, gen } = queue.shift()!;
      const prev = genMap.get(id) ?? -1;
      if (gen <= prev) continue; // pas d'amélioration, skip
      genMap.set(id, gen);

      const parentUnions = this.unions.filter(u => u.participants.some(p => p.personneId === id));
      for (const u of parentUnions) {
        // Conjoint à la même génération
        for (const p of u.participants) {
          if (p.personneId !== id && (genMap.get(p.personneId) ?? -1) < gen) {
            queue.push({ id: p.personneId, gen });
          }
        }
        // Enfants à la génération suivante
        for (const f of u.filiations) {
          if ((genMap.get(f.enfantId) ?? -1) < gen + 1) {
            queue.push({ id: f.enfantId, gen: gen + 1 });
          }
        }
      }
    }

    let changed = true;
    while (changed) {
      changed = false;
      for (const u of this.unions) {
        const gens = u.participants.map(p => genMap.get(p.personneId) ?? 0);
        const maxG = Math.max(...gens);
        for (const p of u.participants) {
          if ((genMap.get(p.personneId) ?? 0) < maxG) {
            genMap.set(p.personneId, maxG); changed = true;
          }
        }
      }
    }

    this.personnes.forEach(p => { if (!genMap.has(p.id)) genMap.set(p.id, 0); });

    const displayedPersons = new Set<string>();
    const displayedUnions  = new Set<string>();
    const genNumbers = [...new Set(genMap.values())].sort((a, b) => a - b);

    this.generations = genNumbers.map(level => {
      const items: GenItem[] = [];
      for (const u of this.unions) {
        if (displayedUnions.has(u.id)) continue;
        const uGen = Math.max(...u.participants.map(p => genMap.get(p.personneId) ?? 0));
        if (uGen !== level) continue;
        const p1 = u.participants.find(p => p.ordre === 0)?.personne;
        const p2 = u.participants.find(p => p.ordre === 1)?.personne;
        if (!p1) continue;
        displayedUnions.add(u.id);
        u.participants.forEach(p => displayedPersons.add(p.personneId));
        items.push({ type: 'union', p1, p2, union: u, hasChildren: u.filiations.length > 0 });
      }
      for (const [personId, gen] of genMap.entries()) {
        if (gen !== level || displayedPersons.has(personId)) continue;
        const p = personMap.get(personId);
        if (!p) continue;
        displayedPersons.add(personId);
        items.push({ type: 'solo', p1: p, hasChildren: false });
      }
      return { level, items };
    }).filter(g => g.items.length > 0);
  }

  typeLabel(type: string | null): string {
    const labels: Record<string, string> = {
      mariage: 'Mariage', pacs: 'PACS', union_libre: 'Union libre',
      fiancailles: 'Fiançailles', adoption: 'Adoption', polygamie: 'Polygamie',
    };
    return labels[type ?? ''] ?? 'Union';
  }

  yearLabel(p: Personne): string {
    const a = extractAnnee(p.dateNaissance);
    return a ? `${a}` : '';
  }
}
