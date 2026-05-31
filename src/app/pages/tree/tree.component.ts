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

/** Branche d'union pour une personne polygame */
export interface UnionBranch {
  union: Union;
  partner?: Personne;
  children: TreeNode[];
}

/** Statut d'une union */
export type UnionStatus = 'active' | 'divorced' | 'widowed';

/** Nœud récursif de l'arbre */
export interface TreeNode {
  type: 'union' | 'solo' | 'multi'; // 'multi' = plusieurs unions
  p1: Personne;
  p2?: Personne;
  union?: Union;
  isRoot: boolean;
  children: TreeNode[];
  // Uniquement pour type === 'multi'
  unions?: UnionBranch[];
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
  treeRoots: TreeNode[] = [];

  @ViewChild('treeVisual', { static: false }) treeVisual?: ElementRef<HTMLElement>;
  @ViewChild('treeCanvas', { static: false }) treeCanvas?: ElementRef<HTMLElement>;

  getInitiales  = getInitiales;
  extractAnnee  = extractAnnee;
  estVivant     = estVivant;
  getNomComplet = getNomComplet;
  getAgeLabel   = getAgeLabel;
  getPhotoUrl   = getPhotoUrl;

  // ── Données brutes ───────────────────────────────────────────────────────
  private allPersonnes: Personne[] = [];
  private allUnions:    Union[]    = [];

  // ── Stats ────────────────────────────────────────────────────────────────
  get totalPersonnes(): number { return this.allPersonnes.length; }
  get totalGenerations(): number { return this.treeDepth(this.treeRoots); }

  private treeDepth(nodes: TreeNode[]): number {
    if (!nodes.length) return 0;
    return 1 + Math.max(...nodes.map(n => this.treeDepth(n.children)));
  }

  // ── Sélection de racine ──────────────────────────────────────────────────
  rootPersonId   = '';
  rootPersonName = '';
  showRootPicker = false;
  rootSearchQuery = '';

  get rootCandidates(): Personne[] {
    const q = this.rootSearchQuery.toLowerCase().trim();
    const list = q
      ? this.allPersonnes.filter(p => getNomComplet(p).toLowerCase().includes(q))
      : this.allPersonnes;
    return list.slice(0, 30);
  }

  // ── Canvas transform ─────────────────────────────────────────────────────
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

  // ── Panneau détail ───────────────────────────────────────────────────────
  selectedPerson: Personne | null = null;
  showDetail = false;
  failedPhotos = new Set<string>();

  // ── Mode kiosque ─────────────────────────────────────────────────────────
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
        this.allPersonnes = personnes;
        this.allUnions    = unions;
        this.treeRoots    = this.buildTree(personnes, unions);
        this.loading      = false;
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
  // Construction récursive de l'arbre
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

      // Toutes les unions non encore placées pour cette personne
      const myUnions = unions
        .filter(u => !placedUnions.has(u.id) && u.participants.some(pt => pt.personneId === pid))
        .sort((a, b) => (extractAnnee(a.dateDebut) ?? 0) - (extractAnnee(b.dateDebut) ?? 0));

      // ── Cas 1 : aucune union → solo ──────────────────────────────────────
      if (myUnions.length === 0) {
        return { type: 'solo', p1: person, isRoot: !childIds.has(pid), children: [], unions: [] };
      }

      // ── Cas 2 : une seule union → comportement classique ─────────────────
      if (myUnions.length === 1) {
        const u = myUnions[0];
        placedUnions.add(u.id);
        const partnerPart = u.participants.filter(pt => pt.personneId !== pid)
          .sort((a, b) => (a.ordre ?? 1) - (b.ordre ?? 1))[0];
        let partner: Personne | undefined;
        if (partnerPart && !placedPersons.has(partnerPart.personneId)) {
          partner = personnes.find(p => p.id === partnerPart.personneId);
          if (partner) placedPersons.add(partner.id);
        }
        const children = u.filiations.map(f => buildNode(f.enfantId)).filter((n): n is TreeNode => n !== null);
        return { type: 'union', p1: person, p2: partner, union: u, isRoot: !childIds.has(pid), children };
      }

      // ── Cas 3 : plusieurs unions → nœud multi ────────────────────────────
      const unionBranches: UnionBranch[] = myUnions.map(u => {
        placedUnions.add(u.id);
        const partnerPart = u.participants.filter(pt => pt.personneId !== pid)
          .sort((a, b) => (a.ordre ?? 1) - (b.ordre ?? 1))[0];
        let partner: Personne | undefined;
        if (partnerPart && !placedPersons.has(partnerPart.personneId)) {
          partner = personnes.find(p => p.id === partnerPart.personneId);
          if (partner) placedPersons.add(partner.id);
        }
        const children = u.filiations.map(f => buildNode(f.enfantId)).filter((n): n is TreeNode => n !== null);
        return { union: u, partner, children };
      });

      return { type: 'multi', p1: person, isRoot: !childIds.has(pid), children: [], unions: unionBranches };
    };

    // Candidats racines = non-enfants dont AUCUN partenaire n'est lui-même un enfant.
    // Si le partenaire d'une personne est un enfant (ex. TENE TENE dont le partenaire
    // POKO est enfant de KOUMA), cette personne sera ajoutée automatiquement comme
    // partenaire lors de la construction du sous-arbre de KOUMA.
    const rootCandidates = personnes.filter(p => {
      if (childIds.has(p.id)) return false; // est lui-même un enfant → pas racine

      // Vérifier si l'un de ses partenaires (dans n'importe quelle union) est un enfant
      const hasChildPartner = unions.some(u =>
        u.participants.some(pt => pt.personneId === p.id) &&
        u.participants.some(pt => pt.personneId !== p.id && childIds.has(pt.personneId))
      );
      // Si un partenaire est enfant, cette personne sera prise en charge comme partenaire
      return !hasChildPartner;
    });

    // Vérification LAZY : sauter les candidats déjà placés comme partenaires.
    const roots: TreeNode[] = [];
    for (const p of rootCandidates) {
      if (placedPersons.has(p.id)) continue;
      const node = buildNode(p.id);
      if (node) roots.push(node);
    }
    return roots;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Sélection de racine
  // ══════════════════════════════════════════════════════════════════════════

  setRoot(p: Personne | null): void {
    this.rootPersonId    = p?.id ?? '';
    this.rootPersonName  = p ? getNomComplet(p) : '';
    this.showRootPicker  = false;
    this.rootSearchQuery = '';
    this.resetView();
    if (!p) {
      this.treeRoots = this.buildTree(this.allPersonnes, this.allUnions);
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
      for (const union of this.allUnions) {
        if (inclUnionIds.has(union.id)) continue;
        if (!union.participants.some(p => p.personneId === pid)) continue;
        inclUnionIds.add(union.id);
        union.participants.forEach(p => inclPersonIds.add(p.personneId));
        union.filiations.forEach(f => { if (!inclPersonIds.has(f.enfantId)) queue.push(f.enfantId); });
      }
    }
    return {
      personnes: this.allPersonnes.filter(p => inclPersonIds.has(p.id)),
      unions:    this.allUnions.filter(u => inclUnionIds.has(u.id)),
    };
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

  /** Demi-largeur approximative d'un nœud pour le calcul de la barre horizontale. */
  barInset(node: TreeNode): number {
    return (node.type === 'union' || node.type === 'multi') ? 155 : 70;
  }

  // ── Statut d'une union (pour affichage polygamie / divorce / veuvage) ───
  unionStatus(br: UnionBranch): UnionStatus {
    if (!br.union.dateFin) return 'active';
    if (br.partner && !estVivant(br.partner)) return 'widowed';
    return 'divorced';
  }

  unionHeartIcon(br: UnionBranch): string {
    return this.unionStatus(br) === 'divorced' ? 'heart_broken' : 'favorite';
  }

  unionStatusLabel(br: UnionBranch): string {
    const s = this.unionStatus(br);
    if (s === 'divorced') return 'Divorcé(e)';
    if (s === 'widowed')  return 'Veuf/Veuve';
    return '';
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Détail & tooltip
  // ══════════════════════════════════════════════════════════════════════════

  openDetail(p: Personne): void {
    if (this.dragMoved) return;
    this.selectedPerson = p;
    this.showDetail = true;
  }

  closeDetail(): void { this.showDetail = false; this.selectedPerson = null; }

  onPhotoError(id: string): void { this.failedPhotos.add(id); }

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

  hideTooltip(): void { this.tooltipHideTimer = setTimeout(() => { this.hoveredPerson = null; }, 80); }

  clearTooltip(): void { clearTimeout(this.tooltipHideTimer); this.hoveredPerson = null; }

  private repositionTooltip(event: MouseEvent): void {
    const tw = 240;
    this.tooltipX = event.clientX + 14 + tw > window.innerWidth ? event.clientX - tw - 14 : event.clientX + 14;
    this.tooltipY = event.clientY - 10;
  }

  tooltipAge(p: Personne): string {
    const n = extractAnnee(p.dateNaissance);
    if (!n) return '';
    if (!estVivant(p)) {
      const d = extractAnnee(p.dateDeces);
      return `${n} – ${d ?? '?'}${d ? '  ('+(d-n)+' ans)' : ''}`;
    }
    return `${n} – présent  (${new Date().getFullYear() - n} ans)`;
  }

  // ══════════════════════════════════════════════════════════════════════════
  // Zoom / Drag / Kiosque / Export
  // ══════════════════════════════════════════════════════════════════════════

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
    const clamped = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
    const ratio   = clamped / this.scale;
    this.translateX = originX - ratio * (originX - this.translateX);
    this.translateY = originY - ratio * (originY - this.translateY);
    this.scale = clamped;
  }

  private updateScale(newScale: number): void {
    this.scale = Math.max(this.minScale, Math.min(this.maxScale, Number(newScale.toFixed(2))));
  }

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
    this.clearTooltip();
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

  toggleKiosk(): void {
    if (!this.isKiosk) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      this.isKiosk = true;
    } else {
      document.exitFullscreen?.().catch(() => {});
      this.isKiosk = false;
    }
  }

  async exportTree(): Promise<void> {
    if (!this.treeVisual || this.exporting) return;
    this.exporting = true;
    try {
      const canvas = await html2canvas(this.treeVisual.nativeElement, {
        backgroundColor: '#F0F4FF', scale: 2, useCORS: true, logging: false,
      });
      canvas.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        Object.assign(document.createElement('a'), { href: url, download: 'arbre-familial.png' }).click();
        URL.revokeObjectURL(url);
      }, 'image/png');
    } finally { this.exporting = false; }
  }

  async exportTreePdf(): Promise<void> {
    if (!this.treeVisual || this.exporting) return;
    this.exporting = true;
    try {
      const canvas  = await html2canvas(this.treeVisual.nativeElement, { backgroundColor: '#F0F4FF', scale: 2, useCORS: true, logging: false });
      const imgData = canvas.toDataURL('image/png');
      const pdf     = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();
      const m  = 10;
      const pdfW = pw - m * 2;
      const pdfH = Math.min((pdf.getImageProperties(imgData).height * pdfW) / pdf.getImageProperties(imgData).width, ph - m * 2);
      pdf.addImage(imgData, 'PNG', m, m, pdfW, pdfH);
      pdf.save('arbre-familial.pdf');
    } finally { this.exporting = false; }
  }
}
