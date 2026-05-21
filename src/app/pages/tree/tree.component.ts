import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Personne, getInitiales, extractAnnee, estVivant } from '../../models/personne.model';
import { Union } from '../../models/union.model';
import { ApiService } from '../../services/api.service';
import { forkJoin } from 'rxjs';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export interface GenItem {
  type: 'union' | 'solo';
  p1: Personne;
  p2?: Personne;
  union?: Union;
  isRoot?: boolean;
  hasChildren: boolean;
}

export interface DisplayGen {
  level: number;
  items: GenItem[];
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  standalone: false,
})
export class TreeComponent implements OnInit {
  loading = true;
  erreur: string | null = null;
  generations: DisplayGen[] = [];

  @ViewChild('treeVisual', { static: false }) treeVisual?: ElementRef<HTMLElement>;

  getInitiales = getInitiales;
  extractAnnee = extractAnnee;
  estVivant    = estVivant;

  totalPersonnes = 0;

  scale = 1;
  readonly minScale = 0.6;
  readonly maxScale = 2.2;
  translateX = 0;
  translateY = 0;
  isDragging = false;
  private dragOrigin = { x: 0, y: 0 };
  private startTranslate = { x: 0, y: 0 };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions:    this.api.getUnions(),
    }).subscribe({
      next: ({ personnes, unions }) => {
        this.totalPersonnes = personnes.length;
        this.generations    = this.buildGenerations(personnes, unions);
        this.loading = false;
      },
      error: () => {
        this.erreur  = 'Impossible de charger l\'arbre.';
        this.loading = false;
      },
    });
  }

  get totalGenerations(): number { return this.generations.length; }

  get treeTransform(): string {
    return `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
  }

  zoomIn(): void {
    this.updateScale(this.scale + 0.1);
  }

  zoomOut(): void {
    this.updateScale(this.scale - 0.1);
  }

  resetView(): void {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
  }

  async exportTree(): Promise<void> {
    if (!this.treeVisual) return;
    const element = this.treeVisual.nativeElement;
    const canvas = await html2canvas(element, {
      backgroundColor: '#F0F4FF',
      scale: 2,
      useCORS: true,
      logging: false,
    });
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'arbre-familial.png';
      link.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  }

  async exportTreePdf(): Promise<void> {
    if (!this.treeVisual) return;
    const element = this.treeVisual.nativeElement;
    const canvas = await html2canvas(element, {
      backgroundColor: '#F0F4FF',
      scale: 2,
      useCORS: true,
      logging: false,
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10;
    const pdfWidth = pageWidth - margin * 2;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    const finalHeight = Math.min(pdfHeight, pageHeight - margin * 2);
    pdf.addImage(imgData, 'PNG', margin, margin, pdfWidth, finalHeight);
    pdf.save('arbre-familial.pdf');
  }

  onWheel(event: WheelEvent): void {
    if (!event.ctrlKey) return;
    event.preventDefault();
    this.updateScale(this.scale - event.deltaY * 0.0015);
  }

  startDrag(event: PointerEvent): void {
    if (event.button !== 0) return;
    event.preventDefault();
    this.isDragging = true;
    this.dragOrigin = { x: event.clientX, y: event.clientY };
    this.startTranslate = { x: this.translateX, y: this.translateY };
    const target = event.currentTarget as HTMLElement;
    target.setPointerCapture(event.pointerId);
  }

  drag(event: PointerEvent): void {
    if (!this.isDragging) return;
    this.translateX = this.startTranslate.x + (event.clientX - this.dragOrigin.x);
    this.translateY = this.startTranslate.y + (event.clientY - this.dragOrigin.y);
  }

  endDrag(event: PointerEvent): void {
    if (!this.isDragging) return;
    this.isDragging = false;
    const target = event.currentTarget as HTMLElement;
    target.releasePointerCapture(event.pointerId);
  }

  private updateScale(newScale: number): void {
    this.scale = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
  }

  typeLabel(type: string | null): string {
    const map: Record<string, string> = {
      mariage: 'Mariage', union_libre: 'Union libre', fiancailles: 'Fiançailles',
    };
    return map[type ?? ''] ?? type ?? '';
  }

  yearLabel(p: Personne): string {
    const naissance = extractAnnee(p.dateNaissance);
    if (!naissance) return '';
    if (!estVivant(p)) {
      const deces = extractAnnee(p.dateDeces);
      return `${naissance} – ${deces ?? '?'}`;
    }
    return `${naissance} – présent`;
  }

  // ── Construction par génération ──────────────────────────────────────
  private buildGenerations(personnes: Personne[], unions: Union[]): DisplayGen[] {
    // Map personId → génération
    const genMap = new Map<string, number>();

    // Personnes qui sont filiation (ont un parent connu)
    const isChild = new Set<string>();
    for (const u of unions) {
      for (const f of u.filiations) isChild.add(f.enfantId);
    }

    // Unions par participant
    const personUnions = new Map<string, Union[]>();
    for (const u of unions) {
      for (const p of u.participants) {
        const list = personUnions.get(p.personneId) ?? [];
        list.push(u);
        personUnions.set(p.personneId, list);
      }
    }

    // Racines = sans parent connu
    const roots = personnes.filter(p => !isChild.has(p.id));

    // BFS pour assigner les générations (Bellman-Ford : re-propage si gen augmente)
    const queue: { id: string; gen: number }[] = roots.map(p => ({ id: p.id, gen: 0 }));

    while (queue.length > 0) {
      const { id, gen } = queue.shift()!;
      const prev = genMap.get(id) ?? -1;
      if (gen <= prev) continue; // pas d'amélioration, skip
      genMap.set(id, gen);

      for (const u of personUnions.get(id) ?? []) {
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

    // Personnes non atteintes → génération 0
    for (const p of personnes) {
      if (!genMap.has(p.id)) genMap.set(p.id, 0);
    }

    // Un conjoint "marié dans" (sans parents connus) prend la génération
    // de son époux/épouse — on itère jusqu'à stabilité
    let changed = true;
    while (changed) {
      changed = false;
      for (const u of unions) {
        const gens = u.participants.map(p => genMap.get(p.personneId) ?? 0);
        const maxG = Math.max(...gens);
        for (const p of u.participants) {
          if ((genMap.get(p.personneId) ?? 0) < maxG) {
            genMap.set(p.personneId, maxG);
            changed = true;
          }
        }
      }
    }

    const maxGen = Math.max(...genMap.values(), 0);
    const rows: DisplayGen[] = [];
    const rootSet = new Set(roots.map(p => p.id));

    for (let g = 0; g <= maxGen; g++) {
      const personsAtGen = personnes.filter(p => genMap.get(p.id) === g);

      // Unions dont les deux participants sont à cette génération
      const unionsAtGen = unions.filter(u =>
        u.participants.length > 0 &&
        u.participants.every(p => genMap.get(p.personneId) === g)
      );

      const inUnion = new Set<string>();
      const items: GenItem[] = [];

      for (const u of unionsAtGen) {
        const p1 = u.participants.find(p => p.ordre === 0)?.personne;
        const p2 = u.participants.find(p => p.ordre === 1)?.personne;
        if (!p1) continue;
        inUnion.add(p1.id);
        if (p2) inUnion.add(p2.id);
        items.push({
          type: 'union',
          p1, p2,
          union: u,
          isRoot: rootSet.has(p1.id) || (p2 ? rootSet.has(p2.id) : false),
          hasChildren: u.filiations.length > 0,
        });
      }

      // Solos
      for (const p of personsAtGen) {
        if (!inUnion.has(p.id)) {
          items.push({ type: 'solo', p1: p, isRoot: rootSet.has(p.id), hasChildren: false });
        }
      }

      if (items.length > 0) {
        rows.push({ level: g + 1, items });
      }
    }

    return rows;
  }
}
