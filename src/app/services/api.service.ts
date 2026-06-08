import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../core/api.config';
import { Personne } from '../models/personne.model';
import { Union } from '../models/union.model';
import { Famille } from '../models/utilisateur.model';
import { Story } from '../models/story.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = API_BASE_URL;

  constructor(private http: HttpClient) {}

  /* === Famille === */
  getCurrentFamille(): Observable<{ famille: Famille; membres: any[] }> {
    return this.http.get<any>(`${this.base}/api/familles/current`);
  }

  searchFamilles(nom: string): Observable<Famille[]> {
    return this.http.get<Famille[]>(`${this.base}/api/familles/search`, {
      params: new HttpParams().set('nom', nom),
    });
  }

  getFamilleByCode(code: string): Observable<Famille> {
    return this.http.get<Famille>(`${this.base}/api/familles/by-code/${code}`);
  }

  /* === Personnes === */
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.base}/api/personnes`);
  }

  getPersonne(id: string): Observable<Personne> {
    return this.http.get<Personne>(`${this.base}/api/personnes/${id}`);
  }

  createPersonne(data: Partial<Personne>): Observable<Personne> {
    return this.http.post<Personne>(`${this.base}/api/personnes`, data);
  }

  updatePersonne(id: string, data: Partial<Personne>): Observable<Personne> {
    return this.http.put<Personne>(`${this.base}/api/personnes/${id}`, data);
  }

  deletePersonne(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/personnes/${id}`);
  }

  uploadPhoto(personneId: string, file: File): Observable<{ photoUrl: string }> {
    const formData = new FormData();
    formData.append('photo', file);
    return this.http.post<{ photoUrl: string }>(`${this.base}/api/uploads/photo/${personneId}`, formData);
  }

  uploadStoryMedia(file: File): Observable<{ mediaUrl: string; mediaType: string }> {
    const formData = new FormData();
    formData.append('media', file);
    return this.http.post<{ mediaUrl: string; mediaType: string }>(`${this.base}/api/uploads/story-media`, formData);
  }

  uploadStoryAudio(blob: Blob): Observable<{ mediaUrl: string; mediaType: string; duration: number | null }> {
    const formData = new FormData();
    formData.append('audio', blob, 'enregistrement.webm');
    return this.http.post<any>(`${this.base}/api/uploads/story-audio`, formData);
  }

  deletePhoto(personneId: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/uploads/photo/${personneId}`);
  }

  /* === Unions === */
  getUnions(): Observable<Union[]> {
    return this.http.get<Union[]>(`${this.base}/api/unions`);
  }

  getUnion(id: string): Observable<Union> {
    return this.http.get<Union>(`${this.base}/api/unions/${id}`);
  }

  createUnion(data: Partial<Union> & { parentIds?: string[]; enfantIds?: string[] }): Observable<Union> {
    return this.http.post<Union>(`${this.base}/api/unions`, data);
  }

  deleteUnion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/unions/${id}`);
  }

  updateUnion(id: string, data: any): Observable<Union> {
    return this.http.put<Union>(`${this.base}/api/unions/${id}`, data);
  }

  addEnfantToUnion(unionId: string, enfantId: string): Observable<any> {
    return this.http.post<any>(`${this.base}/api/unions/${unionId}/enfants`, { enfantId });
  }

  removeEnfantFromUnion(unionId: string, enfantId: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/unions/${unionId}/enfants/${enfantId}`);
  }

  getFamilleDetails(): Observable<any> {
    return this.http.get<any>(`${this.base}/api/familles/current`);
  }

  changeMemberRole(userId: string, role: string): Observable<any> {
    return this.http.patch<any>(`${this.base}/api/familles/membres/${userId}/role`, { role });
  }

  createMemberAccount(data: { telephone?: string; email?: string; password: string; nom: string; prenom: string; role: string; personneId?: string }): Observable<any> {
    return this.http.post<any>(`${this.base}/api/auth/membres/create`, data);
  }

  getViewonlyCredentials(): Observable<{ viewonlyUsername: string; viewonlyPassword: string; familleCode: string }> {
    return this.http.get<any>(`${this.base}/api/auth/viewonly-credentials`);
  }

  /* === Stories === */
  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(`${this.base}/api/stories`);
  }

  createStory(data: { titre?: string; caption: string; tag?: string; mediaUrl?: string; mediaType?: string; expiresAt?: string; privacy?: string }): Observable<Story> {
    return this.http.post<Story>(`${this.base}/api/stories`, data);
  }

  deleteStory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/stories/${id}`);
  }

  // Réactions (emoji ou ❤️ simple)
  reactToStory(id: string, emoji = '❤️'): Observable<void> {
    return this.http.post<void>(`${this.base}/api/stories/${id}/react`, { emoji });
  }

  removeReactionFromStory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/stories/${id}/react`);
  }

  // Compat anciens appels like/unlike → redirigés vers react
  likeStory(id: string): Observable<void> {
    return this.reactToStory(id, '❤️');
  }

  unlikeStory(id: string): Observable<void> {
    return this.removeReactionFromStory(id);
  }

  markStoryViewed(id: string): Observable<void> {
    return this.http.post<void>(`${this.base}/api/stories/${id}/view`, {});
  }

  getStoryComments(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/api/stories/${id}/comments`);
  }

  addStoryComment(id: string, content: string, parentId?: string): Observable<any> {
    return this.http.post<any>(`${this.base}/api/stories/${id}/comments`, { content, parentId });
  }

  deleteStoryComment(storyId: string, commentId: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/stories/${storyId}/comments/${commentId}`);
  }

  /* === Sync === */
  pullChanges(since: string): Observable<any> {
    return this.http.get<any>(`${this.base}/api/sync/pull`, {
      params: new HttpParams().set('since', since),
    });
  }

  /* === Albums photos === */
  getPhotos(personneId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/api/photos/${personneId}`);
  }

  uploadAlbumPhoto(personneId: string, file: File, meta?: { caption?: string; datePrise?: string; lieuPrise?: string }): Observable<any> {
    const fd = new FormData();
    fd.append('photo', file);
    if (meta?.caption)   fd.append('caption',   meta.caption);
    if (meta?.datePrise) fd.append('datePrise',  meta.datePrise);
    if (meta?.lieuPrise) fd.append('lieuPrise',  meta.lieuPrise);
    return this.http.post<any>(`${this.base}/api/photos/${personneId}`, fd);
  }

  deleteAlbumPhoto(photoId: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/photos/${photoId}`);
  }

  updateAlbumPhoto(photoId: string, data: { caption?: string; datePrise?: string; lieuPrise?: string }): Observable<any> {
    return this.http.patch<any>(`${this.base}/api/photos/${photoId}`, data);
  }

  /* === Abonnement & plans === */
  getSubscription(): Observable<any> {
    return this.http.get<any>(`${this.base}/api/subscription`);
  }

  getPlans(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/api/subscription/plans`);
  }

  checkoutPlan(planId: string): Observable<{ paymentUrl: string; transactionId: string }> {
    return this.http.post<any>(`${this.base}/api/subscription/checkout`, { planId });
  }

  /* === Export === */
  exportGedcom(): Observable<Blob> {
    return this.http.get(`${this.base}/api/export/gedcom`, { responseType: 'blob' });
  }

  /* === Notifications === */
  getNotifications(): Observable<{ notifications: any[]; nonLues: number }> {
    return this.http.get<any>(`${this.base}/api/notifications`);
  }

  markNotificationRead(id: string): Observable<void> {
    return this.http.patch<void>(`${this.base}/api/notifications/${id}/lire`, {});
  }

  markAllNotificationsRead(): Observable<void> {
    return this.http.patch<void>(`${this.base}/api/notifications/tout-lire`, {});
  }

  deleteNotification(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/notifications/${id}`);
  }

  /* === Timeline (événements personnalisés) === */
  getTimelineEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/api/timeline`);
  }

  createTimelineEvent(data: { titre: string; description?: string; type: string; date: string; personne?: string }): Observable<any> {
    return this.http.post<any>(`${this.base}/api/timeline`, data);
  }

  updateTimelineEvent(id: string, data: { titre: string; description?: string; type: string; date: string; personne?: string }): Observable<any> {
    return this.http.put<any>(`${this.base}/api/timeline/${id}`, data);
  }

  deleteTimelineEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/api/timeline/${id}`);
  }

  /* === Recherche globale === */
  search(q: string): Observable<{ personnes: any[]; stories: any[]; unions: any[] }> {
    return this.http.get<any>(`${this.base}/api/search`, {
      params: new HttpParams().set('q', q),
    });
  }
}
