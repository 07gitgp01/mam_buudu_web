import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../services/superadmin.service';

interface Setting {
  key: string;
  value: string;
  label?: string;
  editValue?: string;
  editing?: boolean;
  saving?: boolean;
}

@Component({
  selector: 'sa-settings',
  templateUrl: './sa-settings.component.html',
  styleUrl: './sa-settings.component.scss',
  standalone: false,
})
export class SaSettingsComponent implements OnInit {
  settings: Setting[] = [];
  loading = true;
  newKey = '';
  newValue = '';
  newLabel = '';
  adding = false;

  readonly defaults = [
    { key: 'inscription_ouverte',   value: 'true',                   label: 'Inscriptions ouvertes' },
    { key: 'maintenance',           value: 'false',                  label: 'Mode maintenance' },
    { key: 'max_personnes_gratuit', value: '50',                     label: 'Max personnes (plan gratuit)' },
    { key: 'contact_email',         value: 'support@mam-buudu.com',  label: 'Email contact' },
  ];

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void {
    this.sa.getSettings().subscribe({
      next: (s: Setting[]) => { this.settings = s; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  startEdit(s: Setting): void { s.editValue = s.value; s.editing = true; }
  cancelEdit(s: Setting): void { s.editing = false; }

  save(s: Setting): void {
    s.saving = true;
    this.sa.patchSetting(s.key, s.editValue!, s.label).subscribe({
      next: (updated: any) => { s.value = updated.value; s.editing = false; s.saving = false; },
      error: () => { s.saving = false; },
    });
  }

  addSetting(): void {
    if (!this.newKey || !this.newValue) return;
    this.adding = true;
    this.sa.patchSetting(this.newKey, this.newValue, this.newLabel).subscribe({
      next: (s: Setting) => {
        this.settings.push(s);
        this.newKey = '';
        this.newValue = '';
        this.newLabel = '';
        this.adding = false;
      },
      error: () => { this.adding = false; },
    });
  }

  deleteSetting(s: Setting): void {
    if (!confirm(`Supprimer le paramètre "${s.key}" ?`)) return;
    this.sa.deleteSetting(s.key).subscribe({
      next: () => { this.settings = this.settings.filter(x => x.key !== s.key); },
    });
  }

  applyDefault(d: { key: string; value: string; label: string }): void {
    const exists = this.settings.find(s => s.key === d.key);
    if (exists) return;
    this.sa.patchSetting(d.key, d.value, d.label).subscribe({
      next: (s: Setting) => { this.settings.push(s); },
    });
  }

  hasDefault(key: string): boolean {
    return !!this.settings.find(s => s.key === key);
  }

  // Broadcast
  broadcastTitre = '';
  broadcastMsg   = '';
  broadcasting   = false;
  broadcastDone  = '';

  sendBroadcast(): void {
    if (!this.broadcastTitre || !this.broadcastMsg) return;
    if (!confirm(`Envoyer cette notification à TOUS les utilisateurs de la plateforme ?`)) return;
    this.broadcasting = true;
    this.sa.broadcast(this.broadcastTitre, this.broadcastMsg).subscribe({
      next: (r: any) => {
        this.broadcastDone = `Envoyé à ${r.sent} membres`;
        this.broadcastTitre = ''; this.broadcastMsg = '';
        this.broadcasting = false;
        setTimeout(() => this.broadcastDone = '', 5000);
      },
      error: () => this.broadcasting = false,
    });
  }
}
