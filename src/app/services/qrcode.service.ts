import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode';

@Injectable({ providedIn: 'root' })
export class QrcodeService {
  /** Génère un QR code en data URL, entièrement côté client (aucune donnée envoyée à un tiers). */
  generate(data: string, opts: { size?: number; color?: string; bgcolor?: string } = {}): Promise<string> {
    return QRCode.toDataURL(data, {
      width: opts.size ?? 200,
      margin: 1,
      color: {
        dark: opts.color ?? '#000000',
        light: opts.bgcolor ?? '#ffffff',
      },
    });
  }
}
