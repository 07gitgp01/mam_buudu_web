import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { QrcodeService } from '../../services/qrcode.service';

@Component({
  selector: 'app-inviter',
  templateUrl: './inviter.component.html',
  styleUrl: './inviter.component.scss',
  standalone: false,
})
export class InviterComponent implements OnInit {
  familleNom = '';
  familleCode = '';
  loading = true;
  codeCopied = false;
  messageCopied = false;
  qrUrl = '';
  regenerating = false;
  viewonlyError = '';

  constructor(private api: ApiService, private qrcode: QrcodeService) {}

  ngOnInit(): void {
    this.api.getCurrentFamille().subscribe({
      next: (f: any) => {
        const famille = f.famille ?? f;
        this.familleNom  = famille.nom ?? '';
        this.familleCode = famille.code ?? famille.codeUnique ?? '';
        this.loading = false;
        this.loadViewonlyQr();
      },
      error: () => { this.loading = false; },
    });
  }

  // Le QR encode les identifiants "lecture seule" (pas juste le code famille),
  // pour permettre à l'app mobile de se connecter automatiquement en scannant
  // (voir mam_buudu/lib/screens/auth/qr_scan_screen.dart côté mobile).
  private loadViewonlyQr(): void {
    this.api.getViewonlyCredentials().subscribe({
      next: (creds) => this.buildQr(creds.familleCode, creds.viewonlyUsername, creds.viewonlyPassword),
      error: (err) => {
        // Pas admin/gestionnaire (403) ou erreur réseau : on retombe sur le
        // code famille seul, comme avant — mais on garde la raison visible
        // pour le débogage plutôt que d'échouer silencieusement.
        this.viewonlyError = err?.error?.error || err?.message || 'Erreur inconnue';
        console.warn('[Inviter] getViewonlyCredentials a échoué, fallback code brut:', this.viewonlyError);
        if (this.familleCode) {
          this.qrcode.generate(this.familleCode, { size: 220, color: '#2563eb', bgcolor: '#eff6ff' })
            .then(url => this.qrUrl = url);
        }
      },
    });
  }

  private buildQr(code: string, username: string, password: string): void {
    const params = new URLSearchParams({ code, u: username, p: password });
    const data = `mambuudu://join?${params.toString()}`;
    this.qrcode.generate(data, { size: 220, color: '#2563eb', bgcolor: '#eff6ff' })
      .then(url => this.qrUrl = url);
  }

  regenerateViewonly(): void {
    if (this.regenerating) return;
    this.regenerating = true;
    this.api.regenerateViewonlyPassword().subscribe({
      next: (creds) => {
        this.buildQr(creds.familleCode, creds.viewonlyUsername, creds.viewonlyPassword);
        this.regenerating = false;
      },
      error: () => { this.regenerating = false; },
    });
  }

  get whatsappMsg(): string {
    return `Rejoignez l'arbre familial de la famille *${this.familleNom}* sur Mam Buudu 🌳\n\n` +
      `Code d'accès : *${this.familleCode}*\n\n` +
      `1. Téléchargez l'app Mam Buudu\n` +
      `2. Créez votre compte\n` +
      `3. Entrez ce code pour rejoindre la famille`;
  }

  copyCode(): void {
    navigator.clipboard.writeText(this.familleCode).then(() => {
      this.codeCopied = true;
      setTimeout(() => (this.codeCopied = false), 2000);
    });
  }

  copyMessage(): void {
    navigator.clipboard.writeText(this.whatsappMsg).then(() => {
      this.messageCopied = true;
      setTimeout(() => (this.messageCopied = false), 2500);
    });
  }

  shareWhatsApp(): void {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.whatsappMsg)}`, '_blank');
  }

  shareNative(): void {
    if (navigator.share) {
      navigator.share({
        title: `Famille ${this.familleNom} — Mam Buudu`,
        text: this.whatsappMsg,
      }).catch(() => {});
    } else {
      this.shareWhatsApp();
    }
  }
}
