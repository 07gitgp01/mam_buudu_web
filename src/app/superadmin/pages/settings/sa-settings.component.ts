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
  addErreur: string | null = null;
  settingsErreur: string | null = null;

  readonly defaults = [
    { key: 'inscription_ouverte',   value: 'true',                   label: 'Inscriptions ouvertes' },
    { key: 'maintenance',           value: 'false',                  label: 'Mode maintenance' },
    { key: 'max_personnes_gratuit', value: '50',                     label: 'Max personnes (plan gratuit)' },
    { key: 'contact_email',         value: 'support@mam-buudu.com',  label: 'Email contact' },
  ];

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void {
    this.sa.getSettings().subscribe({
      next: (s) => { this.settings = s; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  startEdit(s: Setting): void { s.editValue = s.value; s.editing = true; this.settingsErreur = null; }
  cancelEdit(s: Setting): void { s.editing = false; }

  save(s: Setting): void {
    if (!s.editValue?.trim()) {
      this.settingsErreur = 'La valeur ne peut pas être vide.';
      return;
    }
    this.settingsErreur = null;
    s.saving = true;
    this.sa.patchSetting(s.key, s.editValue!, s.label).subscribe({
      next: (updated) => { s.value = updated.value; s.editing = false; s.saving = false; },
      error: (err) => { s.saving = false; this.settingsErreur = err?.error?.error ?? 'Erreur lors de la sauvegarde.'; },
    });
  }

  addSetting(): void {
    if (!this.newKey.trim() || !this.newValue.trim()) {
      this.addErreur = 'La clé et la valeur sont requises.';
      return;
    }
    this.addErreur = null;
    this.adding = true;
    this.sa.patchSetting(this.newKey, this.newValue, this.newLabel).subscribe({
      next: (s) => {
        this.settings.push(s);
        this.newKey = '';
        this.newValue = '';
        this.newLabel = '';
        this.adding = false;
      },
      error: (err) => { this.adding = false; this.addErreur = err?.error?.error ?? 'Erreur lors de l\'ajout.'; },
    });
  }

  deleteSetting(s: Setting): void {
    if (!confirm(`Supprimer le paramètre "${s.key}" ?`)) return;
    this.sa.deleteSetting(s.key).subscribe({
      next: () => { this.settings = this.settings.filter(x => x.key !== s.key); },
      error: () => { this.settingsErreur = 'Erreur lors de la suppression du paramètre.'; },
    });
  }

  applyDefault(d: { key: string; value: string; label: string }): void {
    const exists = this.settings.find(s => s.key === d.key);
    if (exists) return;
    this.sa.patchSetting(d.key, d.value, d.label).subscribe({
      next: (s) => { this.settings.push(s); },
      error: () => { this.settingsErreur = "Erreur lors de l'application du paramètre par défaut."; },
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
  broadcastErreur: string | null = null;

  sendBroadcast(): void {
    if (!this.broadcastTitre.trim() || !this.broadcastMsg.trim()) {
      this.broadcastErreur = 'Le titre et le message sont requis.';
      return;
    }
    if (!confirm(`Envoyer cette notification à TOUS les utilisateurs de la plateforme ?`)) return;
    this.broadcastErreur = null;
    this.broadcasting = true;
    this.sa.broadcast(this.broadcastTitre, this.broadcastMsg).subscribe({
      next: (r) => {
        this.broadcastDone = `Envoyé à ${r.sent} membres (dont ${r.pushSent} notifications push)`;
        this.broadcastTitre = ''; this.broadcastMsg = '';
        this.broadcasting = false;
        setTimeout(() => this.broadcastDone = '', 5000);
      },
      error: (err) => { this.broadcasting = false; this.broadcastErreur = err?.error?.error ?? "Erreur lors de l'envoi."; },
    });
  }

  // Changement de mot de passe (superadmin)
  pwForm = { ancien: '', nouveau: '', confirm: '' };
  pwSaving = false;
  pwDone = '';
  pwErreur: string | null = null;

  changePassword(): void {
    if (!this.pwForm.ancien || !this.pwForm.nouveau) { this.pwErreur = 'Tous les champs sont requis.'; return; }
    if (this.pwForm.nouveau !== this.pwForm.confirm) { this.pwErreur = 'Les mots de passe ne correspondent pas.'; return; }
    if (this.pwForm.nouveau.length < 8) { this.pwErreur = 'Minimum 8 caractères.'; return; }
    this.pwErreur = null;
    this.pwSaving = true;
    this.sa.changePassword(this.pwForm.ancien, this.pwForm.nouveau).subscribe({
      next: () => {
        this.pwSaving = false;
        this.pwDone = 'Mot de passe mis à jour avec succès.';
        this.pwForm = { ancien: '', nouveau: '', confirm: '' };
        setTimeout(() => this.pwDone = '', 5000);
      },
      error: (err) => { this.pwSaving = false; this.pwErreur = err?.error?.error ?? 'Erreur lors du changement.'; },
    });
  }
}
