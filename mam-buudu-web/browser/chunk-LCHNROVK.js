import {
  API_BASE_URL,
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NB7PX5Q7.js";

// src/app/models/personne.model.ts
function getPhotoUrl(p) {
  if (!p.photoUrl)
    return null;
  if (p.photoUrl.includes("onrender.com/uploads/"))
    return null;
  return p.photoUrl;
}
function getInitiales(p) {
  const prenom = p.prenoms?.charAt(0) ?? "";
  const nom = (p.nomUsage ?? p.nomNaissance)?.charAt(0) ?? "";
  return `${prenom}${nom}`.toUpperCase() || "MB";
}
function getNomComplet(p) {
  return `${p.prenoms ?? ""} ${p.nomUsage ?? p.nomNaissance ?? ""}`.trim() || "\u2014";
}
function extractAnnee(dateStr) {
  if (!dateStr)
    return null;
  const n = parseInt(dateStr.slice(0, 4), 10);
  return isNaN(n) ? null : n;
}
function estVivant(p) {
  return p.dateDeces === null || p.dateDeces === void 0;
}
function getAgeLabel(p) {
  const anneeNaissance = extractAnnee(p.dateNaissance);
  if (!anneeNaissance || anneeNaissance < 1850)
    return "";
  const anneeDeces = extractAnnee(p.dateDeces);
  if (anneeDeces)
    return `${anneeNaissance} \u2013 ${anneeDeces}`;
  const age = (/* @__PURE__ */ new Date()).getFullYear() - anneeNaissance;
  if (age < 0 || age > 150)
    return "";
  return `${age} ans`;
}

// src/app/services/api.service.ts
var ApiService = class _ApiService {
  http;
  base = API_BASE_URL;
  constructor(http) {
    this.http = http;
  }
  /* === Famille === */
  getCurrentFamille() {
    return this.http.get(`${this.base}/api/familles/current`);
  }
  searchFamilles(nom) {
    return this.http.get(`${this.base}/api/familles/search`, {
      params: new HttpParams().set("nom", nom)
    });
  }
  getFamilleByCode(code) {
    return this.http.get(`${this.base}/api/familles/by-code/${code}`);
  }
  /* === Personnes === */
  getPersonnes() {
    return this.http.get(`${this.base}/api/personnes`);
  }
  getPersonne(id) {
    return this.http.get(`${this.base}/api/personnes/${id}`);
  }
  createPersonne(data) {
    return this.http.post(`${this.base}/api/personnes`, data);
  }
  updatePersonne(id, data) {
    return this.http.put(`${this.base}/api/personnes/${id}`, data);
  }
  deletePersonne(id) {
    return this.http.delete(`${this.base}/api/personnes/${id}`);
  }
  uploadPhoto(personneId, file) {
    const formData = new FormData();
    formData.append("photo", file);
    return this.http.post(`${this.base}/api/uploads/photo/${personneId}`, formData);
  }
  deletePhoto(personneId) {
    return this.http.delete(`${this.base}/api/uploads/photo/${personneId}`);
  }
  /* === Unions === */
  getUnions() {
    return this.http.get(`${this.base}/api/unions`);
  }
  getUnion(id) {
    return this.http.get(`${this.base}/api/unions/${id}`);
  }
  createUnion(data) {
    return this.http.post(`${this.base}/api/unions`, data);
  }
  deleteUnion(id) {
    return this.http.delete(`${this.base}/api/unions/${id}`);
  }
  updateUnion(id, data) {
    return this.http.put(`${this.base}/api/unions/${id}`, data);
  }
  addEnfantToUnion(unionId, enfantId) {
    return this.http.post(`${this.base}/api/unions/${unionId}/enfants`, { enfantId });
  }
  removeEnfantFromUnion(unionId, enfantId) {
    return this.http.delete(`${this.base}/api/unions/${unionId}/enfants/${enfantId}`);
  }
  getFamilleDetails() {
    return this.http.get(`${this.base}/api/familles/current`);
  }
  changeMemberRole(userId, role) {
    return this.http.patch(`${this.base}/api/familles/membres/${userId}/role`, { role });
  }
  createMemberAccount(data) {
    return this.http.post(`${this.base}/api/auth/membres/create`, data);
  }
  getViewonlyCredentials() {
    return this.http.get(`${this.base}/api/auth/viewonly-credentials`);
  }
  /* === Sync === */
  pullChanges(since) {
    return this.http.get(`${this.base}/api/sync/pull`, {
      params: new HttpParams().set("since", since)
    });
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  getPhotoUrl,
  getInitiales,
  getNomComplet,
  extractAnnee,
  estVivant,
  getAgeLabel,
  ApiService
};
//# sourceMappingURL=chunk-LCHNROVK.js.map
