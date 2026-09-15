import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { API_BASE_URL } from './api.config';

export const NOTIF_TYPE_LABELS: Record<string, string> = {
  nouveau_membre_arbre: 'Nouveaux membres',
  nouvelle_union:       'Unions',
  nouvelle_story:       'Stories',
  photo_ajoutee:        'Photos',
  nouvel_evenement:     'Événements (timeline)',
  anniversaire:         'Anniversaires',
};

const TYPES_STORAGE_KEY = 'mb_push_types';

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

  /** Types actuellement sélectionnés sur cet appareil (tableau vide = tout recevoir) */
  getPreferredTypes(): string[] {
    try {
      const raw = localStorage.getItem(TYPES_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  /** Demande la permission navigateur puis enregistre l'abonnement côté serveur */
  async subscribe(): Promise<boolean> {
    if (!this.isSupported) return false;
    try {
      const { publicKey } = await firstValueFrom(
        this.http.get<{ publicKey: string }>(`${API_BASE_URL}/api/push/vapid-public-key`),
      );
      const sub = await this.swPush.requestSubscription({ serverPublicKey: publicKey });
      const types = this.getPreferredTypes();
      await firstValueFrom(this.http.post(`${API_BASE_URL}/api/push/subscribe`, { ...sub.toJSON(), types }));
      return true;
    } catch (e) {
      console.warn('[push] abonnement refusé ou échoué', e);
      return false;
    }
  }

  /** Met à jour les types reçus sur cet appareil (l'abonnement doit déjà exister) */
  async updateTypes(types: string[]): Promise<boolean> {
    if (!this.isSupported) return false;
    try {
      const reg = await navigator.serviceWorker?.getRegistration();
      const sub = await reg?.pushManager.getSubscription();
      if (!sub) return false;
      await firstValueFrom(this.http.post(`${API_BASE_URL}/api/push/subscribe`, { ...sub.toJSON(), types }));
      localStorage.setItem(TYPES_STORAGE_KEY, JSON.stringify(types));
      return true;
    } catch (e) {
      console.warn('[push] mise à jour des préférences échouée', e);
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
    localStorage.removeItem(TYPES_STORAGE_KEY);
  }
}
