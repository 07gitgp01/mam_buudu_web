import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { API_BASE_URL } from './api.config';

@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  constructor(private swPush: SwPush, private http: HttpClient) {}

  get isSupported(): boolean {
    return this.swPush.isEnabled;
  }

  /** true si l'utilisateur a déjà un abonnement actif sur cet appareil */
  async isSubscribed(): Promise<boolean> {
    if (!this.isSupported) return false;
    const reg = await navigator.serviceWorker?.getRegistration();
    const sub = await reg?.pushManager.getSubscription();
    return !!sub;
  }

  /** Demande la permission navigateur puis enregistre l'abonnement côté serveur */
  async subscribe(): Promise<boolean> {
    if (!this.isSupported) return false;
    try {
      const { publicKey } = await firstValueFrom(
        this.http.get<{ publicKey: string }>(`${API_BASE_URL}/api/push/vapid-public-key`),
      );
      const sub = await this.swPush.requestSubscription({ serverPublicKey: publicKey });
      await firstValueFrom(this.http.post(`${API_BASE_URL}/api/push/subscribe`, sub.toJSON()));
      return true;
    } catch (e) {
      console.warn('[push] abonnement refusé ou échoué', e);
      return false;
    }
  }

  /** Désabonne cet appareil (navigateur + serveur) */
  async unsubscribe(): Promise<void> {
    if (!this.isSupported) return;
    const reg = await navigator.serviceWorker?.getRegistration();
    const sub = await reg?.pushManager.getSubscription();
    if (!sub) return;
    const endpoint = sub.endpoint;
    await sub.unsubscribe();
    await firstValueFrom(this.http.request('delete', `${API_BASE_URL}/api/push/subscribe`, { body: { endpoint } }));
  }
}
