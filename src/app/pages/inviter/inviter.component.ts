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
  viewonlyUsername = '';
  viewonlyPassword = '';
  loading = true;
  codeCopied = false;
  usernameCopied = false;
  passwordCopied = false;
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
      next: (creds) => this.applyCreds(creds),
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

  private applyCreds(creds: { familleCode: string; viewonlyUsername: string; viewonlyPassword: string }): void {
    this.familleCode = creds.familleCode;
    this.viewonlyUsername = creds.viewonlyUsername;
    this.viewonlyPassword = creds.viewonlyPassword;
    this.viewonlyError = '';
    this.buildQr(creds.familleCode, creds.viewonlyUsername, creds.viewonlyPassword);
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
        this.applyCreds(creds);
        this.regenerating = false;
      },
      error: () => { this.regenerating = false; },
    });
  }

  // ── Visualiser / imprimer le QR ─────────────────────────────────────────

  downloadQr(): void {
    if (!this.qrUrl) return;
    const a = document.createElement('a');
    a.href = this.qrUrl;
    a.download = `qr-invitation-${this.familleCode || 'famille'}.png`;
    a.click();
  }

  printQr(): void {
    if (!this.qrUrl) return;
    const win = window.open('', '_blank', 'width=400,height=500');
    if (!win) return;
    win.document.write(`
      <html>
        <head><title>QR invitation — ${this.familleNom}</title></head>
        <body style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;font-family:sans-serif;">
          <img src="${this.qrUrl}" style="width:280px;height:280px" />
          <p style="margin-top:12px;font-size:18px;">Famille ${this.familleNom} — Code ${this.familleCode}</p>
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    win.print();
  }

  // ── Message d'invitation (code + identifiants lecture seule) ───────────

  get whatsappMsg(): string {
    let msg = `Rejoignez l'arbre familial de la famille *${this.familleNom}* sur Mam Buudu 🌳\n\n`;
    msg += `📱 Accès rapide (lecture seule) — scannez le QR dans l'app, ou entrez :\n`;
    msg += `• Code : *${this.familleCode}*\n`;
    if (this.viewonlyUsername) msg += `• Identifiant : *${this.viewonlyUsername}*\n`;
    if (this.viewonlyPassword) msg += `• Mot de passe : *${this.viewonlyPassword}*\n`;
    msg += `\n👤 Pour devenir membre à part entière : téléchargez l'app Mam Buudu, créez votre compte, puis entrez le code *${this.familleCode}*`;
    return msg;
  }

  copyCode(): void {
    navigator.clipboard.writeText(this.familleCode).then(() => {
      this.codeCopied = true;
      setTimeout(() => (this.codeCopied = false), 2000);
    });
  }

  copyUsername(): void {
    navigator.clipboard.writeText(this.viewonlyUsername).then(() => {
      this.usernameCopied = true;
      setTimeout(() => (this.usernameCopied = false), 2000);
    });
  }

  copyPassword(): void {
    navigator.clipboard.writeText(this.viewonlyPassword).then(() => {
      this.passwordCopied = true;
      setTimeout(() => (this.passwordCopied = false), 2000);
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
