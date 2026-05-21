import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';

export interface AppTheme {
  name: string;
  label: string;
  color: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;

  readonly themes: AppTheme[] = [
    { name: 'blanc',  label: 'Blanc',  color: '#E2E8F0' },
    { name: 'bleu',   label: 'Bleu',   color: '#2563EB' },
    { name: 'rose',   label: 'Rose',   color: '#DB2777' },
    { name: 'vert',   label: 'Vert',   color: '#059669' },
    { name: 'orange', label: 'Orange', color: '#EA580C' },
    { name: 'violet', label: 'Violet', color: '#7C3AED' },
  ];

  current: string;

  constructor(factory: RendererFactory2) {
    this.renderer = factory.createRenderer(null, null);
    const saved = localStorage.getItem('mb_color') ?? 'blanc';
    this.current = saved;
    this.applyColor(saved);
  }

  applyColor(name: string): void {
    this.current = name;
    this.renderer.setAttribute(document.body, 'data-color', name);
    localStorage.setItem('mb_color', name);
  }
}
