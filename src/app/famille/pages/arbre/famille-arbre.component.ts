import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  Personne, getInitiales, extractAnnee, estVivant,
  getNomComplet, getAgeLabel, getPhotoUrl,
} from '../../../models/personne.model';
import { Union } from '../../../models/union.model';
import { ApiService } from '../../../services/api.service';

/** Nœud récursif de l'arbre */
export interface TreeNode {
  type: 'union' | 'solo';
  p1: Personne;
  p2?: Personne;
  union?: Union;
  isRoot: boolean;
  children: TreeNode[];
}

@Component({
  selector: 'app-famille-arbre',
  templateUrl: './famille-arbre.component.html',
  styleUrl: './famille-arbre.component.scss',
  standalone: false,
})
export class FamilleArbreComponent implements OnInit, OnDestroy {
  loading = true;
  erreur: string | null = null;
  treeRoots: TreeNode[] = [];

  @ViewChild('treeVisual', { static: false }) treeVisual?: ElementRef<HTMLElement>;
  @ViewChild('treeCanvas', { static: false }) treeCanvas?: ElementRef<HTMLElement>;

  getInitiales  = getInitiales;
  extractAnnee  = extractAnnee;
  estVivant     = estVivant;
  getNomComplet = getNomComplet;
  getAgeLabel   = getAgeLabel;
  getPhotoUrl   = getPhotoUrl;

  get totalPersonnes(): number { return this._allPersonnes.length; }
  get totalGenerations(): number { return this.treeDepth(this.treeRoots); }

  private _allPersonnes: Personne[] = [];
  private _allUnions:    Union[]    = [];

  // ── Sélection de racine ──────────────────────────────────────────────────
  rootPersonId    = '';
  rootPersonName  = '';
  showRootPicker  = false;
  rootSearchQuery = '';

  get rootCandidates(): Personne[] {
    const q = this.rootSearchQuery.toLowerCase().trim();
    const list = q
      ? this._allPersonnes.filter(p => getNomComplet(p).toLowerCase().includes(q))
      : this._allPersonnes;
    return list.slice(0, 30);
  }

  setRoot(p: Personne | null): void {
    this.rootPersonId    = p?.id ?? '';
    this.rootPersonName  = p ? getNomComplet(p) : '';
    this.showRootPicker  = false;
    this.rootSearchQuery = '';
    this.resetView();
    if (!p) {
      this.treeRoots = this.buildTree(this._allPersonnes, this._allUnions);
    } else {
      const sub = this.extractSubtree(p.id);
      this.treeRoots = this.buildTree(sub.personnes, sub.unions);
    }
  }

  private extractSubtree(personId: string): { personnes: Personne[], unions: Union[] } {
    const inclPersonIds = new Set<string>();
    const inclUnionIds  = new Set<string>();
    const queue = [personId];
    while (queue.length) {
      const pid = queue.pop()!;
      if (inclPersonIds.has(pid)) continue;
      inclPersonIds.add(pid);
      for (const union of this._allUnions) {
        if (inclUnionIds.has(union.id)) continue;
        if (!union.participants.some(p => p.personneId === pid)) continue;
        inclUnionIds.add(union.id);
        union.participants.forEach(p => inclPersonIds.add(p.personneId));
        union.filiations.forEach(f => { if (!inclPersonIds.has(f.enfantId)) queue.push(f.enfantId); });
      }
    }
    return {
      personnes: this._allPersonnes.filter(p => inclPersonIds.has(p.id)),
      unions:    this._allUnions.filter(u => inclUnionIds.has(u.id)),
    };
  }

  private treeDepth(nodes: TreeNode[]): number {
    if (!nodes.length) return 0;
    return 1 + Math.max(...nodes.map(n => this.treeDepth(n.children)));
  }

  // ── Canvas ───────────────────────────────────────────────────────────────
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

  // ── Détail ───────────────────────────────────────────────────────────────
  selectedPerson: Personne | null = null;
  showDetail = false;
  failedPhotos = new Set<string>();

  isKiosk = false;
  exporting = false;

  // ── Tooltip ──────────────────────────────────────────────────────────────
  hoveredPerson: Personne | null = null;
  tooltipX = 0;
  tooltipY = 0;
  private tooltipHideTimer: any = null;

  private readonly onDocPointerOver = (e: PointerEvent): void => {
    if (!this.hoveredPerson) return;
    if (!(e.target as HTMLElement).closest('.ts-person, .ts-solo-card')) {
      this.clearTooltip();
    }
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    document.addEventListener('pointerover', this.onDocPointerOver, { passive: true });
    forkJoin({ personnes: this.api.getPersonnes(), unions: this.api.getUnions() }).subscribe({
      next: ({ personnes, unions }) => {
        this._allPersonnes = personnes;
        this._allUnions    = unions;
        this.treeRoots     = this.buildTree(personnes, unions);
        this.loading       = false;
      },
      error: () => {
        this.erreur  = 'Impossible de charger l\'arbre.';
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    document.removeEventListener('pointerover', this.onDocPointerOver);
    clearTimeout(this.tooltipHideTimer);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Construction récursive (même algorithme que tree.component.ts)
  // ══════════════════════════════════════════════════════════════════════════

  buildTree(personnes: Personne[], unions: Union[]): TreeNode[] {
    const childIds      = new Set(unions.flatMap(u => u.filiations.map(f => f.enfantId)));
    const placedPersons = new Set<string>();
    const placedUnions  = new Set<string>();

    const buildNode = (pid: string): TreeNode | null => {
      if (placedPersons.has(pid)) return null;
      const person = personnes.find(p => p.id === pid);
      if (!person) return null;
      placedPersons.add(pid);

      const myUnion = unions.find(u =>
        !placedUnions.has(u.id) &&
        u.participants.some(pt => pt.personneId === pid)
      );

      if (!myUnion) {
        return { type: 'solo', p1: person, isRoot: !childIds.has(pid), children: [] };
      }

      placedUnions.add(myUnion.id);

      const partnerPart = myUnion.participants
        .filter(pt => pt.personneId !== pid)
        .sort((a, b) => (a.ordre ?? 1) - (b.ordre ?? 1))[0];

      let partner: Personne | undefined;
      if (partnerPart && !placedPersons.has(partnerPart.personneId)) {
        partner = personnes.find(p => p.id === partnerPart.personneId);
        if (partner) placedPersons.add(partner.id);
      }

      const children = myUnion.filiations
        .map(f => buildNode(f.enfantId))
        .filter((n): n is TreeNode => n !== null);

      return { type: 'union', p1: person, p2: partner, union: myUnion, isRoot: !childIds.has(pid), children };
    };

    // Candidats racines : non-enfants dont aucun partenaire n'est lui-même un enfant
    const rootCandidates = personnes.filter(p => {
      if (childIds.has(p.id)) return false;
      return !unions.some(u =>
        u.participants.some(pt => pt.personneId === p.id) &&
        u.participants.some(pt => pt.personneId !== p.id && childIds.has(pt.personneId))
      );
    });

    const roots: TreeNode[] = [];
    for (const p of rootCandidates) {
      if (placedPersons.has(p.id)) continue;
      const node = buildNode(p.id);
      if (node) roots.push(node);
    }
    return roots;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Helpers template
  // ══════════════════════════════════════════════════════════════════════════

  get treeTransform(): string {
    return `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
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

  barInset(node: TreeNode): number { return node.type === 'union' ? 155 : 70; }

  openDetail(p: Personne): void { if (this.dragMoved) return; this.selectedPerson = p; this.showDetail = true; }
  closeDetail(): void { this.showDetail = false; this.selectedPerson = null; }
  onPhotoError(id: string): void { this.failedPhotos.add(id); }

  showTooltip(p: Personne, event: MouseEvent): void {
    if (this.isDragging || this.dragMoved) return;
    clearTimeout(this.tooltipHideTimer);
    this.hoveredPerson = p;
    const tw = 240;
    this.tooltipX = event.clientX + 14 + tw > window.innerWidth ? event.clientX - tw - 14 : event.clientX + 14;
    this.tooltipY = event.clientY - 10;
  }

  moveTooltip(event: MouseEvent): void {
    if (!this.hoveredPerson || this.isDragging || this.dragMoved) return;
    const tw = 240;
    this.tooltipX = event.clientX + 14 + tw > window.innerWidth ? event.clientX - tw - 14 : event.clientX + 14;
    this.tooltipY = event.clientY - 10;
  }

  hideTooltip(): void { this.tooltipHideTimer = setTimeout(() => { this.hoveredPerson = null; }, 80); }
  clearTooltip(): void { clearTimeout(this.tooltipHideTimer); this.hoveredPerson = null; }

  tooltipAge(p: Personne): string {
    const n = extractAnnee(p.dateNaissance);
    if (!n) return '';
    if (!estVivant(p)) {
      const d = extractAnnee(p.dateDeces);
      return `${n} – ${d ?? '?'}${d ? '  ('+(d-n)+' ans)' : ''}`;
    }
    return `${n} – présent  (${new Date().getFullYear() - n} ans)`;
  }

  // ── Zoom / Drag / Kiosque ─────────────────────────────────────────────────
  zoomIn(): void  { this.zoomAtCenter(this.scale + 0.15); }
  zoomOut(): void { this.zoomAtCenter(this.scale - 0.15); }

  resetView(): void { this.scale = 1; this.translateX = 0; this.translateY = 0; }

  private zoomAtCenter(newScale: number): void {
    const canvas = this.treeCanvas?.nativeElement;
    if (!canvas) { this.updateScale(newScale); return; }
    const rect = canvas.getBoundingClientRect();
    this.applyZoom(newScale, rect.width / 2, rect.height / 2);
  }

  private applyZoom(newScale: number, oX: number, oY: number): void {
    const c = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
    const r = c / this.scale;
    this.translateX = oX - r * (oX - this.translateX);
    this.translateY = oY - r * (oY - this.translateY);
    this.scale = c;
  }

  private updateScale(n: number): void {
    this.scale = Math.max(this.minScale, Math.min(this.maxScale, Number(n.toFixed(2))));
  }

  onWheel(event: WheelEvent): void {
    if (!event.ctrlKey) return;
    event.preventDefault();
    const canvas = this.treeCanvas?.nativeElement;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      this.applyZoom(this.scale - event.deltaY * 0.001, event.clientX - rect.left, event.clientY - rect.top);
    } else { this.updateScale(this.scale - event.deltaY * 0.001); }
  }

  startDrag(event: PointerEvent): void {
    if (event.button !== 0) return;
    this.clearTooltip();
    this.isDragging = true; this.dragMoved = false;
    this.dragOrigin = { x: event.clientX, y: event.clientY };
    this.startTranslate = { x: this.translateX, y: this.translateY };
    this.captureTarget = event.currentTarget as HTMLElement;
    this.captureId = event.pointerId;
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
    if (this.dragMoved) try { this.captureTarget?.releasePointerCapture(this.captureId); } catch {}
    this.captureTarget = null;
    setTimeout(() => { this.dragMoved = false; }, 50);
  }

  toggleKiosk(): void {
    if (!this.isKiosk) { document.documentElement.requestFullscreen?.().catch(() => {}); this.isKiosk = true; }
    else { document.exitFullscreen?.().catch(() => {}); this.isKiosk = false; }
  }

  async exportPDF(): Promise<void> {
    if (!this.treeVisual || this.exporting) return;
    this.exporting = true;
    try {
      const h2c = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      const canvas  = await h2c(this.treeVisual.nativeElement, { backgroundColor: '#F5F3FF', scale: 1.5, useCORS: true });
      const imgData = canvas.toDataURL('image/jpeg', 0.85);
      const pdf     = new jsPDF({ orientation: canvas.width > canvas.height ? 'landscape' : 'portrait', unit: 'px', format: [canvas.width, canvas.height] });
      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
      pdf.save('arbre-familial.pdf');
    } finally { this.exporting = false; }
  }
}
