import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../core/api.config';
import { Personne } from '../models/personne.model';
import { Union } from '../models/union.model';
import { Famille } from '../models/utilisateur.model';

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

  /* === Sync === */
  pullChanges(since: string): Observable<any> {
    return this.http.get<any>(`${this.base}/api/sync/pull`, {
      params: new HttpParams().set('since', since),
    });
  }
}
