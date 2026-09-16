import {
  API_BASE_URL,
  BehaviorSubject,
  HttpClient,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-K4P23IOF.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  userSubject = new BehaviorSubject(this.loadUser());
  user$ = this.userSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  login(dto) {
    const id = dto.identifiant.trim();
    const identKey = id.includes("@") ? "email" : /^[+\d][\d\s\-().]{6,}$/.test(id) ? "telephone" : "username";
    const body = {
      familleCode: dto.familleCode,
      password: dto.password,
      [identKey]: id
    };
    return this.http.post(`${API_BASE_URL}/api/auth/login`, body).pipe(tap((res) => this.save(res.token, res.user)));
  }
  register(dto) {
    return this.http.post(`${API_BASE_URL}/api/auth/register`, dto).pipe(tap((res) => this.save(res.token, res.user)));
  }
  sendOtp(contact, type) {
    const body = type === "email" ? { email: contact } : { telephone: contact };
    return this.http.post(`${API_BASE_URL}/api/auth/send-otp`, body);
  }
  verifyOtp(contact, type, code) {
    const body = type === "email" ? { email: contact, code } : { telephone: contact, code };
    return this.http.post(`${API_BASE_URL}/api/auth/verify-otp`, body);
  }
  forgotPassword(email) {
    return this.http.post(`${API_BASE_URL}/api/auth/forgot-password`, { email });
  }
  resetPassword(token, password) {
    return this.http.post(`${API_BASE_URL}/api/auth/reset-password`, { token, password });
  }
  sendVerificationEmail() {
    return this.http.post(`${API_BASE_URL}/api/auth/send-verification-email`, {});
  }
  verifyEmail(token) {
    return this.http.post(`${API_BASE_URL}/api/auth/verify-email`, { token });
  }
  logout() {
    localStorage.removeItem("mb_token");
    localStorage.removeItem("mb_user");
    this.userSubject.next(null);
  }
  isLoggedIn() {
    return !!localStorage.getItem("mb_token");
  }
  getUser() {
    return this.userSubject.value;
  }
  /** Met à jour l'utilisateur stocké (ex. après modification du profil), sans toucher au token. */
  updateUser(user) {
    localStorage.setItem("mb_user", JSON.stringify(user));
    this.userSubject.next(user);
  }
  save(token, user) {
    localStorage.setItem("mb_token", token);
    localStorage.setItem("mb_user", JSON.stringify(user));
    this.userSubject.next(user);
  }
  loadUser() {
    const raw = localStorage.getItem("mb_user");
    return raw ? JSON.parse(raw) : null;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-7NDXYM4W.js.map
