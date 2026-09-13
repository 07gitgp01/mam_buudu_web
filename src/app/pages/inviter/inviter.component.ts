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

  constructor(private api: ApiService, private qrcode: QrcodeService) {}

  ngOnInit(): void {
    this.api.getCurrentFamille().subscribe({
      next: (f: any) => {
        const famille = f.famille ?? f;
        this.familleNom  = famille.nom ?? '';
        this.familleCode = famille.code ?? famille.codeUnique ?? '';
        this.loading = false;
        if (this.familleCode) {
          this.qrcode.generate(this.familleCode, { size: 220, color: '#2563eb', bgcolor: '#eff6ff' })
            .then(url => this.qrUrl = url);
        }
      },
      error: () => { this.loading = false; },
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
