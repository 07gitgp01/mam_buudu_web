import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  Personne, getInitiales, extractAnnee, estVivant,
  getNomComplet, getAgeLabel, getPhotoUrl,
} from '../../models/personne.model';
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
  parentUnionId?: string;
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
export class TreeComponent implements OnInit, OnDestroy {
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

  // ── Données brutes (pour le filtrage de racine) ──────────────────────────
  private allPersonnes: Personne[] = [];
  private allUnions:    Union[]    = [];

  // ── Sélection de racine ──────────────────────────────────────────────────
  rootPersonId:     string | null = null;
  rootPersonName    = '';
  showRootPicker    = false;
  rootSearchQuery   = '';

  get rootCandidates(): Personne[] {
    const q = this.rootSearchQuery.toLowerCase().trim();
    const list = q
      ? this.allPersonnes.filter(p => getNomComplet(p).toLowerCase().includes(q))
      : this.allPersonnes;
    return list.slice(0, 30);
  }

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

  // Panneau détail
  selectedPerson: Personne | null = null;
  showDetail = false;
  failedPhotos = new Set<string>();

  isKiosk = false;

  // Tooltip
  hoveredPerson: Personne | null = null;
  tooltipX = 0;
  tooltipY = 0;
  private tooltipHideTimer: any = null;

  // Écoute globale : ferme la tooltip si le pointeur quitte tout nœud
  private readonly onDocPointerOver = (e: PointerEvent): void => {
    if (!this.hoveredPerson) return;
    if (!(e.target as HTMLElement).closest('.tree-node')) {
      this.clearTooltip();
    }
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    document.addEventListener('pointerover', this.onDocPointerOver, { passive: true });
    forkJoin({
      personnes: this.api.getPersonnes(),
      unions:    this.api.getUnions(),
    }).subscribe({
      next: ({ personnes, unions }) => {
        this.allPersonnes   = personnes;
        this.allUnions      = unions;
        this.totalPersonnes = personnes.length;
        this.generations    = this.buildGenerations(personnes, unions);
        this.loading = false;
        setTimeout(() => this.alignGroups(), 0);
      },
      error: () => {
        this.erreur  = 'Impossible de charger l\'arbre.';
        this.loading = false;
      },
    });
  }

  // ── Constantes de layout ──────────────────────────────────────────────────
  private readonly TREE_COUPLE_W = 310; // largeur carte couple (px)
  private readonly TREE_SOLO_W   = 140; // largeur carte solo   (px)
  private readonly TREE_GAP      = 40;  // espace entre sous-arbres (px)
  private readonly TREE_PADDING  = 80;  // padding gauche/droite (px)

  /**
   * Layout arbre — calcul bas→haut, positionnement par largeurs CSS.
   *
   * Principe :
   *   • chaque item reçoit une largeur = max(sa carte, somme enfants + gaps)
   *   • chaque gen-group reçoit cette largeur → l'item est centré dedans
   *   • les parents sans enfants reçoivent un spacer invisible de même largeur
   *   • le gen-row utilise justify-content:center → tout s'aligne naturellement
   *   • AUCUN left, aucune position:absolute, aucune mesure DOM
   */
  private alignGroups(): void {
    const visual = this.treeVisual?.nativeElement;
    if (!visual || !this.generations.length) return;

    const ikey = (item: GenItem): string => item.union?.id ?? item.p1.id;

    // ── Étape 1 : childrenOf ────────────────────────────────────────────────
    const childrenOf = new Map<string, GenItem[]>();
    for (let gi = 1; gi < this.generations.length; gi++) {
      for (const item of this.generations[gi].items) {
        if (!item.parentUnionId) continue;
        if (!childrenOf.has(item.parentUnionId)) childrenOf.set(item.parentUnionId, []);
        childrenOf.get(item.parentUnionId)!.push(item);
      }
    }

    // ── Étape 2 : subtreeW bottom-up ────────────────────────────────────────
    // subtreeW[key] = max(largeur propre, somme enfants + gaps)
    const subtreeW = new Map<string, number>();
    for (let gi = this.generations.length - 1; gi >= 0; gi--) {
      for (const item of this.generations[gi].items) {
        const key  = ikey(item);
        const nodeW = item.type === 'union' ? this.TREE_COUPLE_W : this.TREE_SOLO_W;
        const kids  = item.union?.id ? (childrenOf.get(item.union.id) ?? []) : [];
        if (!kids.length) {
          subtreeW.set(key, nodeW);
        } else {
          const kidsW = kids.reduce((s, c, i) =>
            s + (subtreeW.get(ikey(c)) ?? this.TREE_SOLO_W) + (i ? this.TREE_GAP : 0), 0);
          subtreeW.set(key, Math.max(nodeW, kidsW));
        }
      }
    }

    // unionId → subtreeW du couple propriétaire
    const unionSW = new Map<string, number>();
    for (const gen of this.generations) {
      for (const item of gen.items) {
        if (item.union?.id) unionSW.set(item.union.id, subtreeW.get(ikey(item)) ?? this.TREE_SOLO_W);
      }
    }

    // Largeur totale + canvas
    const gen0items = this.generations[0].items;
    const totalTreeW = gen0items.reduce((s, c, i) =>
      s + (subtreeW.get(ikey(c)) ?? this.TREE_SOLO_W) + (i ? this.TREE_GAP : 0), 0);
    const canvasW = totalTreeW + 2 * this.TREE_PADDING;

    // ── Étape 3 : application DOM ───────────────────────────────────────────
    // Supprimer les anciens spacers, réinitialiser les styles
    visual.querySelectorAll<HTMLElement>('.tree-spacer').forEach(s => s.remove());
    visual.querySelectorAll<HTMLElement>('.gen-group, .gen-row, .group-child-wrap, .group-items').forEach(el => {
      el.style.cssText = '';
    });
    visual.style.minWidth = canvasW + 'px';

    const rows = Array.from(visual.querySelectorAll<HTMLElement>('.gen-row'));

    for (let gi = 0; gi < rows.length; gi++) {
      const row  = rows[gi];
      const gen  = this.generations[gi];
      if (!gen) continue;
      const groups = Array.from(row.querySelectorAll<HTMLElement>(':scope > .gen-group'));
      if (!groups.length) continue;

      // pid → gen-group DOM
      const pidToGroup = new Map<string | null, HTMLElement>();
      groups.forEach(g => pidToGroup.set(g.getAttribute('data-parent'), g));

      // Liste ordonnée des "slots" parentaux (= items de Gen N-1, ou Gen 0 lui-même)
      // Chaque slot représente l'espace qu'un item de la génération précédente occupe.
      interface Slot { unionId: string | null; sw: number; }
      const slots: Slot[] = gi === 0
        ? gen0items.map(item => ({ unionId: item.union?.id ?? null, sw: subtreeW.get(ikey(item)) ?? this.TREE_SOLO_W }))
        : this.generations[gi - 1].items.map(item => ({
            unionId: item.union?.id ?? null,
            sw: item.union?.id ? (unionSW.get(item.union.id) ?? this.TREE_SOLO_W) : this.TREE_SOLO_W,
          }));

      slots.forEach((slot, orderIdx) => {
        const group = slot.unionId ? pidToGroup.get(slot.unionId) : null;

        if (group) {
          // ── Groupe réel : width = slot du parent (= subtreeW du parent) ──
          group.style.width      = slot.sw + 'px';
          group.style.flexShrink = '0';
          group.style.order      = String(orderIdx);

          const items = gen.items.filter(item =>
            slot.unionId ? item.parentUnionId === slot.unionId : !item.parentUnionId
          );

          // Barre horizontale centrée sur les enfants extrêmes
          const gItemsEl = group.querySelector<HTMLElement>('.group-items');
          if (gItemsEl && items.length) {
            gItemsEl.style.gap = this.TREE_GAP + 'px';
            gItemsEl.style.setProperty('--bar-l', ((subtreeW.get(ikey(items[0])) ?? this.TREE_SOLO_W) / 2) + 'px');
            gItemsEl.style.setProperty('--bar-r', ((subtreeW.get(ikey(items[items.length - 1])) ?? this.TREE_SOLO_W) / 2) + 'px');
          }

          // Chaque wrap = subtreeW de son item → l'item se centre dans son slot
          const wraps = Array.from(group.querySelectorAll<HTMLElement>(':scope .group-items > .group-child-wrap'));
          wraps.forEach((wrap, i) => {
            if (i >= items.length) return;
            wrap.style.width      = (subtreeW.get(ikey(items[i])) ?? this.TREE_SOLO_W) + 'px';
            wrap.style.flexShrink = '0';
          });

        } else {
          // ── Spacer invisible pour les parents sans enfants ──────────────
          const sp = document.createElement('div');
          sp.className        = 'tree-spacer';
          sp.style.width      = slot.sw + 'px';
          sp.style.flexShrink = '0';
          sp.style.order      = String(orderIdx);
          row.appendChild(sp);
        }
      });

      // Flex centré : avec les bons widths, l'alignement est parfait
      row.style.display        = 'flex';
      row.style.flexWrap       = 'nowrap';
      row.style.justifyContent = 'center';
      row.style.alignItems     = 'flex-start';
      row.style.gap            = this.TREE_GAP + 'px';
      row.style.width          = canvasW + 'px';
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('pointerover', this.onDocPointerOver);
    clearTimeout(this.tooltipHideTimer);
  }

  // ── Gestion de la racine ─────────────────────────────────────────────────

  setRoot(p: Personne | null): void {
    this.rootPersonId   = p?.id ?? null;
    this.rootPersonName = p ? getNomComplet(p) : '';
    this.showRootPicker = false;
    this.rootSearchQuery = '';
    this.resetView();
    if (!p) {
      this.generations = this.buildGenerations(this.allPersonnes, this.allUnions);
    } else {
      const sub = this.extractSubtree(p.id);
      this.generations = this.buildGenerations(sub.personnes, sub.unions);
    }
    this.totalPersonnes = this.allPersonnes.length;
    setTimeout(() => this.alignGroups(), 0);
  }

  /** Extrait le sous-arbre DESCENDANT de la personne sélectionnée. */
  private extractSubtree(personId: string): { personnes: Personne[], unions: Union[] } {
    const inclPersonIds = new Set<string>();
    const inclUnionIds  = new Set<string>();
    const queue = [personId];

    while (queue.length) {
      const pid = queue.pop()!;
      if (inclPersonIds.has(pid)) continue;
      inclPersonIds.add(pid);

      for (const union of this.allUnions) {
        if (inclUnionIds.has(union.id)) continue;
        if (!union.participants.some(p => p.personneId === pid)) continue;
        inclUnionIds.add(union.id);
        // Inclure le/la partenaire
        union.participants.forEach(p => inclPersonIds.add(p.personneId));
        // Mettre les enfants en file
        union.filiations.forEach(f => {
          if (!inclPersonIds.has(f.enfantId)) queue.push(f.enfantId);
        });
      }
    }

    return {
      personnes: this.allPersonnes.filter(p => inclPersonIds.has(p.id)),
      unions:    this.allUnions.filter(u => inclUnionIds.has(u.id)),
    };
  }

  // ── Utilitaires ──────────────────────────────────────────────────────────
  get totalGenerations(): number { return this.generations.length; }

  /** Groupe les items d'une génération par parentUnionId (ordre préservé). */
  getItemGroups(gen: DisplayGen): GenItem[][] {
    const groups: GenItem[][] = [];
    const parentMap = new Map<string, GenItem[]>();
    for (const item of gen.items) {
      if (item.parentUnionId) {
        if (!parentMap.has(item.parentUnionId)) {
          const g: GenItem[] = [];
          parentMap.set(item.parentUnionId, g);
          groups.push(g);
        }
        parentMap.get(item.parentUnionId)!.push(item);
      } else {
        groups.push([item]); // racine : chaque item = son propre groupe
      }
    }
    return groups;
  }

  get treeTransform(): string {
    return `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
  }

  // ── Détail personne ───────────────────────────────────
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
    if (this.isDragging || this.dragMoved) return;
    clearTimeout(this.tooltipHideTimer);
    this.hoveredPerson = p;
    this.repositionTooltip(event);
  }

  moveTooltip(event: MouseEvent): void {
    if (!this.hoveredPerson || this.isDragging || this.dragMoved) return;
    this.repositionTooltip(event);
  }

  hideTooltip(): void {
    this.tooltipHideTimer = setTimeout(() => { this.hoveredPerson = null; }, 80);
  }

  clearTooltip(): void {
    clearTimeout(this.tooltipHideTimer);
    this.hoveredPerson = null;
  }

  private repositionTooltip(event: MouseEvent): void {
    const offset = 14;
    const tw = 240; // tooltip width approx
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
    setTimeout(() => this.alignGroups(), 0);
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
    // Recalculer les offsets d'alignement après changement de scale
    setTimeout(() => this.alignGroups(), 0);
  }

  private updateScale(newScale: number): void {
    this.scale = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
  }

  // ── Kiosque ──────────────────────────────────────────
  toggleKiosk(): void {
    if (!this.isKiosk) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      this.isKiosk = true;
    } else {
      document.exitFullscreen?.().catch(() => {});
      this.isKiosk = false;
    }
  }

  // ── Export ───────────────────────────────────────────
  async exportTree(): Promise<void> {
    if (!this.treeVisual) return;
    const canvas = await html2canvas(this.treeVisual.nativeElement, {
      backgroundColor: '#F0F4FF', scale: 2, useCORS: true, logging: false,
    });
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url  = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'arbre-familial.png';
      link.click();
      URL.revokeObjectURL(url);
    }, 'image/png');
  }

  async exportTreePdf(): Promise<void> {
    if (!this.treeVisual) return;
    const canvas  = await html2canvas(this.treeVisual.nativeElement, {
      backgroundColor: '#F0F4FF', scale: 2, useCORS: true, logging: false,
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf     = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pw      = pdf.internal.pageSize.getWidth();
    const ph      = pdf.internal.pageSize.getHeight();
    const margin  = 10;
    const pdfW    = pw - margin * 2;
    const pdfH    = Math.min((pdf.getImageProperties(imgData).height * pdfW) / pdf.getImageProperties(imgData).width, ph - margin * 2);
    pdf.addImage(imgData, 'PNG', margin, margin, pdfW, pdfH);
    pdf.save('arbre-familial.pdf');
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
    // Fermer immédiatement la tooltip : setPointerCapture va bloquer les mouseleave sur les nœuds
    this.clearTooltip();
    this.isDragging     = true;
    this.dragMoved      = false;
    this.dragOrigin     = { x: event.clientX, y: event.clientY };
    this.startTranslate = { x: this.translateX, y: this.translateY };
    this.captureTarget = event.currentTarget as HTMLElement;
    this.captureId     = event.pointerId;
  }

  drag(event: PointerEvent): void {
    if (!this.isDragging) return;
    const dx = event.clientX - this.dragOrigin.x;
    const dy = event.clientY - this.dragOrigin.y;
    // On capture seulement quand le vrai drag commence (> 4px)
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

    // Map enfantId → unionId parent
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
