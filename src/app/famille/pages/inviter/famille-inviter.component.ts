import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-famille-inviter',
  templateUrl: './famille-inviter.component.html',
  styleUrl: './famille-inviter.component.scss',
  standalone: false,
})
export class FamilleInviterComponent implements OnInit {
  familleNom = '';
  familleCode = '';
  loading = true;
  codeCopied = false;
  messageCopied = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCurrentFamille().subscribe({
      next: (f: any) => {
        const famille = f.famille ?? f;
        this.familleNom  = famille.nom ?? '';
        this.familleCode = famille.code ?? famille.codeUnique ?? '';
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  get qrUrl(): string {
    if (!this.familleCode) return '';
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(this.familleCode)}&bgcolor=f5f3ff&color=7c3aed&format=png&margin=10`;
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
