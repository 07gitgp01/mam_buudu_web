import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  Personne, getInitiales, extractAnnee, estVivant,
  getNomComplet, getAgeLabel, getPhotoUrl,
} from '../../../models/personne.model';
import { Union } from '../../../models/union.model';
import { ApiService } from '../../../services/api.service';

interface GenItem {
  type: 'union' | 'solo';
  p1: Personne;
  p2?: Personne;
  union?: Union;
  isRoot?: boolean;
  hasChildren: boolean;
  parentUnionId?: string;
}

interface DisplayGen { level: number; items: GenItem[]; }

@Component({
  selector: 'app-famille-arbre',
  templateUrl: './famille-arbre.component.html',
  styleUrl: './famille-arbre.component.scss',
  standalone: false,
})
export class FamilleArbreComponent implements OnInit {
  loading = true;
  erreur: string | null = null;
  generations: DisplayGen[] = [];

  @ViewChild('treeVisual', { static: false }) treeVisual?: ElementRef<HTMLElement>;
  @ViewChild('treeCanvas', { static: false }) treeCanvas?: ElementRef<HTMLElement>;

  getInitiales  = getInitiales;
  extractAnnee  = extractAnnee;
  estVivant     = estVivant;
  getNomComplet = getNomComplet;
  getAgeLabel   = getAgeLabel;
  getPhotoUrl   = getPhotoUrl;

  totalPersonnes = 0;

  scale = 1;
  readonly minScale = 0.3;
  readonly maxScale = 2.5;
  translateX = 0;
  translateY = 0;
  isDragging = false;
  private dragMoved = false;
  private dragOrigin = { x: 0, y: 0 };
  private startTranslate = { x: 0, y: 0 };
  private captureTarget: HTMLElement | null = null;
  private captureId = 0;

  selectedPerson: Personne | null = null;
  showDetail = false;
  failedPhotos = new Set<string>();

  hoveredPerson: Personne | null = null;
  tooltipX = 0;
  tooltipY = 0;
  private tooltipHideTimer: any = null;

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

  openDetail(p: Personne): void {
    if (this.dragMoved) return;
    this.selectedPerson = p;
    this.showDetail = true;
  }

  closeDetail(): void {
    this.showDetail = false;
    this.selectedPerson = null;
  }

  onPhotoError(id: string): void { this.failedPhotos.add(id); }

  // ── Tooltip ───────────────────────────────────────────
  showTooltip(p: Personne, event: MouseEvent): void {
    if (this.dragMoved) return;
    clearTimeout(this.tooltipHideTimer);
    this.hoveredPerson = p;
    this.repositionTooltip(event);
  }

  moveTooltip(event: MouseEvent): void {
    if (!this.hoveredPerson) return;
    this.repositionTooltip(event);
  }

  hideTooltip(): void {
    this.tooltipHideTimer = setTimeout(() => { this.hoveredPerson = null; }, 120);
  }

  private repositionTooltip(event: MouseEvent): void {
    const offset = 14;
    const tw = 240;
    const left = event.clientX + offset + tw > window.innerWidth
      ? event.clientX - tw - offset
      : event.clientX + offset;
    this.tooltipX = left;
    this.tooltipY = event.clientY - 10;
  }

  tooltipAge(p: Personne): string {
    const n = extractAnnee(p.dateNaissance);
    if (!n) return '';
    if (!estVivant(p)) {
      const d = extractAnnee(p.dateDeces);
      const age = d ? d - n : null;
      return `${n} – ${d ?? '?'}${age ? '  ('+age+' ans)' : ''}`;
    }
    return `${n} – présent  (${new Date().getFullYear() - n} ans)`;
  }

  // ── Zoom ─────────────────────────────────────────────
  zoomIn(): void  { this.zoomAtCenter(this.scale + 0.15); }
  zoomOut(): void { this.zoomAtCenter(this.scale - 0.15); }

  resetView(): void {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
  }

  private zoomAtCenter(newScale: number): void {
    const canvas = this.treeCanvas?.nativeElement;
    if (!canvas) { this.updateScale(newScale); return; }
    const rect = canvas.getBoundingClientRect();
    this.applyZoom(newScale, rect.width / 2, rect.height / 2);
  }

  private applyZoom(newScale: number, originX: number, originY: number): void {
    const oldScale = this.scale;
    const clamped  = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
    const ratio    = clamped / oldScale;
    this.translateX = originX - ratio * (originX - this.translateX);
    this.translateY = originY - ratio * (originY - this.translateY);
    this.scale = clamped;
  }

  private updateScale(newScale: number): void {
    this.scale = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
  }

  // ── Interactions canvas ──────────────────────────────
  onWheel(event: WheelEvent): void {
    if (!event.ctrlKey) return;
    event.preventDefault();
    const canvas = this.treeCanvas?.nativeElement;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      this.applyZoom(this.scale - event.deltaY * 0.001, event.clientX - rect.left, event.clientY - rect.top);
    } else {
      this.updateScale(this.scale - event.deltaY * 0.001);
    }
  }

  startDrag(event: PointerEvent): void {
    if (event.button !== 0) return;
    this.isDragging     = true;
    this.dragMoved      = false;
    this.dragOrigin     = { x: event.clientX, y: event.clientY };
    this.startTranslate = { x: this.translateX, y: this.translateY };
    this.captureTarget  = event.currentTarget as HTMLElement;
    this.captureId      = event.pointerId;
  }

  drag(event: PointerEvent): void {
    if (!this.isDragging) return;
    const dx = event.clientX - this.dragOrigin.x;
    const dy = event.clientY - this.dragOrigin.y;
    if (!this.dragMoved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
      this.dragMoved = true;
      try { this.captureTarget?.setPointerCapture(this.captureId); } catch {}
    }
    this.translateX = this.startTranslate.x + dx;
    this.translateY = this.startTranslate.y + dy;
  }

  endDrag(event: PointerEvent): void {
    if (!this.isDragging) return;
    this.isDragging = false;
    if (this.dragMoved) {
      try { this.captureTarget?.releasePointerCapture(this.captureId); } catch {}
    }
    this.captureTarget = null;
    setTimeout(() => { this.dragMoved = false; }, 50);
  }

  typeLabel(type: string | null): string {
    const map: Record<string, string> = {
      mariage: 'Mariage', pacs: 'PACS', union_libre: 'Union libre',
      fiancailles: 'Fiançailles', adoption: 'Adoption', polygamie: 'Polygamie',
    };
    return map[type ?? ''] ?? type ?? '';
  }

  yearLabel(p: Personne): string {
    const n = extractAnnee(p.dateNaissance);
    if (!n) return '';
    if (!estVivant(p)) return `${n} – ${extractAnnee(p.dateDeces) ?? '?'}`;
    return `${n} – présent`;
  }

  // ── Construction par génération ──────────────────────
  private buildGenerations(personnes: Personne[], unions: Union[]): DisplayGen[] {
    const genMap = new Map<string, number>();

    const parentUnionMap = new Map<string, string>();
    for (const u of unions) {
      for (const f of u.filiations) parentUnionMap.set(f.enfantId, u.id);
    }

    const isChild = new Set<string>(unions.flatMap(u => u.filiations.map(f => f.enfantId)));

    const personUnions = new Map<string, Union[]>();
    for (const u of unions) {
      for (const p of u.participants) {
        const list = personUnions.get(p.personneId) ?? [];
        list.push(u);
        personUnions.set(p.personneId, list);
      }
    }

    const roots = personnes.filter(p => !isChild.has(p.id));
    const queue: { id: string; gen: number }[] = roots.map(p => ({ id: p.id, gen: 0 }));

    while (queue.length > 0) {
      const { id, gen } = queue.shift()!;
      const prev = genMap.get(id) ?? -1;
      if (gen <= prev) continue;
      genMap.set(id, gen);
      for (const u of personUnions.get(id) ?? []) {
        for (const p of u.participants) {
          if (p.personneId !== id && (genMap.get(p.personneId) ?? -1) < gen) {
            queue.push({ id: p.personneId, gen });
          }
        }
        for (const f of u.filiations) {
          if ((genMap.get(f.enfantId) ?? -1) < gen + 1) {
            queue.push({ id: f.enfantId, gen: gen + 1 });
          }
        }
      }
    }

    for (const p of personnes) {
      if (!genMap.has(p.id)) genMap.set(p.id, 0);
    }

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
      const unionsAtGen  = unions.filter(u =>
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
          parentUnionId: parentUnionMap.get(p1.id) ?? (p2 ? parentUnionMap.get(p2.id) : undefined),
        });
      }

      for (const p of personsAtGen) {
        if (!inUnion.has(p.id)) {
          items.push({
            type: 'solo',
            p1: p,
            isRoot: rootSet.has(p.id),
            hasChildren: false,
            parentUnionId: parentUnionMap.get(p.id),
          });
        }
      }

      if (items.length > 0) rows.push({ level: g + 1, items });
    }

    return rows;
  }
}
