import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_BASE_URL } from '../../core/api.config';

@Injectable({ providedIn: 'root' })
export class SuperAdminService {
  private base = `${API_BASE_URL}/api/superadmin`;

  constructor(private http: HttpClient) {}

  private headers(): { headers: HttpHeaders } {
    const token = localStorage.getItem('sa_token') ?? '';
    return { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) };
  }

  // Auth
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.base}/auth/login`, { email, password }).pipe(
      tap((res: any) => localStorage.setItem('sa_token', res.token))
    );
  }
  logout(): void { localStorage.removeItem('sa_token'); }
  isLoggedIn(): boolean { return !!localStorage.getItem('sa_token'); }

  // Stats
  getStats(): Observable<any> { return this.http.get(`${this.base}/stats`, this.headers()); }
  getRevenue(): Observable<any[]> { return this.http.get<any[]>(`${this.base}/revenue`, this.headers()); }
  getActivity(): Observable<any[]> { return this.http.get<any[]>(`${this.base}/activity`, this.headers()); }

  // Familles
  getFamilles(params: any = {}): Observable<any> {
    const q = new URLSearchParams(params).toString();
    return this.http.get(`${this.base}/familles?${q}`, this.headers());
  }
  getFamille(id: string): Observable<any> { return this.http.get(`${this.base}/familles/${id}`, this.headers()); }
  patchFamille(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.base}/familles/${id}`, data, this.headers());
  }
  assignPlan(familleId: string, planId: string, dateFin?: string): Observable<any> {
    return this.http.post(`${this.base}/familles/${familleId}/assign-plan`, { planId, dateFin }, this.headers());
  }
  deleteFamille(id: string): Observable<any> {
    return this.http.delete(`${this.base}/familles/${id}`, this.headers());
  }

  // Users
  getUsers(params: any = {}): Observable<any> {
    const q = new URLSearchParams(params).toString();
    return this.http.get(`${this.base}/users?${q}`, this.headers());
  }
  patchUser(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.base}/users/${id}`, data, this.headers());
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.base}/users/${id}`, this.headers());
  }

  // Subscriptions
  getSubscriptions(params: any = {}): Observable<any> {
    const q = new URLSearchParams(params).toString();
    return this.http.get(`${this.base}/subscriptions?${q}`, this.headers());
  }

  // Plans
  getPlans(): Observable<any[]> { return this.http.get<any[]>(`${this.base}/plans`, this.headers()); }
  createPlan(data: any): Observable<any> { return this.http.post(`${this.base}/plans`, data, this.headers()); }
  patchPlan(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.base}/plans/${id}`, data, this.headers());
  }
  deletePlan(id: string): Observable<any> { return this.http.delete(`${this.base}/plans/${id}`, this.headers()); }

  // Settings
  getSettings(): Observable<any> { return this.http.get(`${this.base}/settings`, this.headers()); }
  patchSetting(key: string, value: string, label?: string): Observable<any> {
    return this.http.patch(`${this.base}/settings/${key}`, { value, label }, this.headers());
  }
  deleteSetting(key: string): Observable<any> {
    return this.http.delete(`${this.base}/settings/${key}`, this.headers());
  }

  // Audit log
  getAudit(params: any = {}): Observable<any> {
    const q = new URLSearchParams(params).toString();
    return this.http.get(`${this.base}/audit?${q}`, this.headers());
  }

  // Broadcast
  broadcast(titre: string, message: string): Observable<any> {
    return this.http.post(`${this.base}/broadcast`, { titre, message }, this.headers());
  }

  // Export CSV (ouvre dans un nouvel onglet avec le token dans l'URL — on passe le token en header via fetch)
  exportCsv(type: 'familles' | 'users'): void {
    const token = localStorage.getItem('sa_token') ?? '';
    fetch(`${this.base}/export/${type}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `${type}.csv`; a.click();
        URL.revokeObjectURL(url);
      });
  }
}
