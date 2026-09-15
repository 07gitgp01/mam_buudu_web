import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Membre } from '../models/plateforme.model';

/**
 * Sélecteur "Qui doit être notifié ?" réutilisable sur les formulaires de création
 * (Personnes, Unions, Stories, Timeline, Photos). `null` = toute la famille.
 */
@Component({
  selector: 'app-recipient-picker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rp-wrap">
      <label class="rp-title" *ngIf="label">{{ label }}</label>
      <div class="rp-toggle">
        <button type="button" class="rp-toggle-btn" [class.active]="value === null" (click)="setAll()">
          Toute la famille
        </button>
        <button type="button" class="rp-toggle-btn" [class.active]="value !== null" (click)="setCustom()">
          Choisir des personnes
        </button>
      </div>
      <div class="rp-list" *ngIf="value !== null">
        <label class="rp-item" *ngFor="let m of membres">
          <input type="checkbox" [checked]="isChecked(m.user.id)" (change)="toggle(m.user.id)" />
          <span>{{ m.user.prenom }} {{ m.user.nom }}</span>
        </label>
        <p class="rp-empty" *ngIf="membres.length === 0">Aucun autre membre dans la famille.</p>
        <p class="rp-warn" *ngIf="value !== null && value.length === 0">Sélectionnez au moins une personne, sinon personne ne sera notifié.</p>
      </div>
    </div>
  `,
  styles: [`
    .rp-wrap { display: flex; flex-direction: column; gap: 8px; }
    .rp-title { font-size: 13px; font-weight: 600; color: var(--text-primary, #111827); }
    .rp-toggle { display: flex; gap: 8px; }
    .rp-toggle-btn {
      flex: 1; padding: 8px 12px; border-radius: 10px; border: 1.5px solid var(--border, #E5E7EB);
      background: var(--white, #fff); color: var(--text-secondary, #6B7280);
      font-size: 12.5px; font-weight: 600; cursor: pointer; font-family: inherit;
      transition: all 0.15s ease;
    }
    .rp-toggle-btn.active { border-color: var(--primary, #2563EB); background: var(--primary-bg, #EFF6FF); color: var(--primary, #2563EB); }
    .rp-list {
      display: flex; flex-direction: column; gap: 2px; max-height: 180px; overflow-y: auto;
      border: 1px solid var(--border-light, #F3F4F6); border-radius: 10px; padding: 8px 12px;
    }
    .rp-item { display: flex; align-items: center; gap: 8px; padding: 5px 0; font-size: 13px; color: var(--text-primary, #111827); cursor: pointer; }
    .rp-empty, .rp-warn { font-size: 12px; color: var(--text-muted, #9CA3AF); margin: 4px 0 0; }
    .rp-warn { color: #D97706; }
  `],
})
export class RecipientPickerComponent {
  @Input() membres: Membre[] = [];
  @Input() label = 'Qui doit être notifié ?';
  @Input() value: string[] | null = null;
  @Output() valueChange = new EventEmitter<string[] | null>();

  setAll(): void {
    this.value = null;
    this.valueChange.emit(null);
  }

  setCustom(): void {
    if (this.value === null) this.value = [];
    this.valueChange.emit(this.value);
  }

  isChecked(userId: string): boolean {
    return !!this.value?.includes(userId);
  }

  toggle(userId: string): void {
    if (this.value === null) return;
    this.value = this.value.includes(userId)
      ? this.value.filter(id => id !== userId)
      : [...this.value, userId];
    this.valueChange.emit(this.value);
  }
}
