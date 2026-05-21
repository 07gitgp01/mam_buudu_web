import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { API_BASE_URL } from '../core/api.config';

export interface LoginDto {
  familleCode: string;   // backend attend "familleCode"
  identifiant: string;   // champ legacy : email ou tel
  password: string;      // backend attend "password"
}

export interface RegisterDto {
  nomFamille:      string;
  prenom:          string;
  nom:             string;
  email:           string;
  password:        string;   // backend attend "password"
  questionSecrete: string;   // obligatoire à l'inscription
  reponseSecrete:  string;   // obligatoire à l'inscription
}

export interface AuthUser {
  id:                  string;
  email?:              string;
  telephone?:          string;
  nom:                 string;
  prenom:              string;
  role:                string;
  hasCompletedProfile: boolean;
}

export interface AuthFamille {
  id:         string;
  nom:        string;
  codeUnique: string;
}

interface AuthResponse {
  token:   string;
  user:    AuthUser;     // le backend répond "user" (pas "utilisateur")
  famille: AuthFamille;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<AuthUser | null>(this.loadUser());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(dto: LoginDto): Observable<AuthResponse> {
    const id = dto.identifiant.trim();
    const identKey =
      id.includes('@')                      ? 'email'     :
      /^[+\d][\d\s\-().]{6,}$/.test(id)    ? 'telephone' :
                                              'username';
    const body: Record<string, string> = {
      familleCode: dto.familleCode,
      password:    dto.password,
      [identKey]:  id,
    };
    return this.http
      .post<AuthResponse>(`${API_BASE_URL}/api/auth/login`, body)
      .pipe(tap((res) => this.save(res.token, res.user)));
  }

  register(dto: RegisterDto): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${API_BASE_URL}/api/auth/register`, dto)
      .pipe(tap((res) => this.save(res.token, res.user)));
  }

  logout(): void {
    localStorage.removeItem('mb_token');
    localStorage.removeItem('mb_user');
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('mb_token');
  }

  getUser(): AuthUser | null {
    return this.userSubject.value;
  }

  private save(token: string, user: AuthUser): void {
    localStorage.setItem('mb_token', token);
    localStorage.setItem('mb_user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  private loadUser(): AuthUser | null {
    const raw = localStorage.getItem('mb_user');
    return raw ? JSON.parse(raw) : null;
  }
}
