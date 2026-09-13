import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_BASE_URL } from '../../core/api.config';
import { SaFamille, SaUser, SaSubscription, SaSubscriptionRow, SaPlan, SaAuditLog, SaAuditAdmin } from '../models/superadmin.model';

export interface SaLoginResponse {
  token: string;
  user: { id: string; nom: string; prenom: string; email: string; platformRole: string };
}

export interface SaPaged<T> { total: number; page: number; pages: number }
export interface SaStats {
  totalFamilles: number; totalUsers: number; totalSubscriptions: number;
  revenueMois: number; newUsersWeek: number; newFamillesMonth: number;
}
export interface SaActivityItem { type: string; icon: string; label: string; sub: string; at: string }
export interface SaSetting { key: string; value: string; label?: string; updatedBy?: string | null }

@Injectable({ providedIn: 'root' })
export class SuperAdminService {
  private base = `${API_BASE_URL}/api/superadmin`;

  constructor(private http: HttpClient) {}

  private headers(): { headers: HttpHeaders } {
    const token = localStorage.getItem('sa_token') ?? '';
    return { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) };
  }

  // Auth
  login(email: string, password: string): Observable<SaLoginResponse> {
    return this.http.post<SaLoginResponse>(`${this.base}/auth/login`, { email, password }).pipe(
      tap((res) => localStorage.setItem('sa_token', res.token))
    );
  }
  logout(): void { localStorage.removeItem('sa_token'); }
  isLoggedIn(): boolean { return !!localStorage.getItem('sa_token'); }

  // Stats
  getStats(): Observable<SaStats> { return this.http.get<SaStats>(`${this.base}/stats`, this.headers()); }
  getRevenue(): Observable<{ label: string; montant: number }[]> {
    return this.http.get<{ label: string; montant: number }[]>(`${this.base}/revenue`, this.headers());
  }
  getActivity(): Observable<SaActivityItem[]> { return this.http.get<SaActivityItem[]>(`${this.base}/activity`, this.headers()); }

  // Familles
  getFamilles(params: Record<string, string | number> = {}): Observable<SaPaged<never> & { familles: SaFamille[] }> {
    const q = new URLSearchParams(params as Record<string, string>).toString();
    return this.http.get<SaPaged<never> & { familles: SaFamille[] }>(`${this.base}/familles?${q}`, this.headers());
  }
  getFamille(id: string): Observable<SaFamille> { return this.http.get<SaFamille>(`${this.base}/familles/${id}`, this.headers()); }
  patchFamille(id: string, data: { statut?: string; nom?: string }): Observable<SaFamille> {
    return this.http.patch<SaFamille>(`${this.base}/familles/${id}`, data, this.headers());
  }
  assignPlan(familleId: string, planId: string, dateFin?: string): Observable<SaSubscription> {
    return this.http.post<SaSubscription>(`${this.base}/familles/${familleId}/assign-plan`, { planId, dateFin }, this.headers());
  }
  deleteFamille(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.base}/familles/${id}`, this.headers());
  }

  // Users
  getUsers(params: Record<string, string | number> = {}): Observable<SaPaged<never> & { users: SaUser[] }> {
    const q = new URLSearchParams(params as Record<string, string>).toString();
    return this.http.get<SaPaged<never> & { users: SaUser[] }>(`${this.base}/users?${q}`, this.headers());
  }
  patchUser(id: string, data: { platformRole?: string | null; suspended?: boolean }): Observable<SaUser> {
    return this.http.patch<SaUser>(`${this.base}/users/${id}`, data, this.headers());
  }
  deleteUser(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.base}/users/${id}`, this.headers());
  }

  // Subscriptions
  getSubscriptions(params: Record<string, string | number> = {}): Observable<SaPaged<never> & { subscriptions: SaSubscriptionRow[] }> {
    const q = new URLSearchParams(params as Record<string, string>).toString();
    return this.http.get<SaPaged<never> & { subscriptions: SaSubscriptionRow[] }>(`${this.base}/subscriptions?${q}`, this.headers());
  }

  // Plans
  getPlans(): Observable<SaPlan[]> { return this.http.get<SaPlan[]>(`${this.base}/plans`, this.headers()); }
  createPlan(data: Partial<SaPlan>): Observable<SaPlan> { return this.http.post<SaPlan>(`${this.base}/plans`, data, this.headers()); }
  patchPlan(id: string, data: Partial<SaPlan>): Observable<SaPlan> {
    return this.http.patch<SaPlan>(`${this.base}/plans/${id}`, data, this.headers());
  }
  deletePlan(id: string): Observable<{ message: string }> { return this.http.delete<{ message: string }>(`${this.base}/plans/${id}`, this.headers()); }

  // Settings
  getSettings(): Observable<SaSetting[]> { return this.http.get<SaSetting[]>(`${this.base}/settings`, this.headers()); }
  patchSetting(key: string, value: string, label?: string): Observable<SaSetting> {
    return this.http.patch<SaSetting>(`${this.base}/settings/${key}`, { value, label }, this.headers());
  }
  deleteSetting(key: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.base}/settings/${key}`, this.headers());
  }

  // Audit log
  getAudit(params: Record<string, string | number> = {}): Observable<SaPaged<never> & { logs: SaAuditLog[]; admins: SaAuditAdmin[] }> {
    const q = new URLSearchParams(params as Record<string, string>).toString();
    return this.http.get<SaPaged<never> & { logs: SaAuditLog[]; admins: SaAuditAdmin[] }>(`${this.base}/audit?${q}`, this.headers());
  }

  // Broadcast
  broadcast(titre: string, message: string): Observable<{ sent: number }> {
    return this.http.post<{ sent: number }>(`${this.base}/broadcast`, { titre, message }, this.headers());
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
