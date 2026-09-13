import {
  API_BASE_URL,
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WU2I6PFW.js";

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
  uploadStoryMedia(file) {
    const formData = new FormData();
    formData.append("media", file);
    return this.http.post(`${this.base}/api/uploads/story-media`, formData);
  }
  uploadStoryAudio(blob) {
    const formData = new FormData();
    formData.append("audio", blob, "enregistrement.webm");
    return this.http.post(`${this.base}/api/uploads/story-audio`, formData);
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
  /* === Stories === */
  getStories() {
    return this.http.get(`${this.base}/api/stories`);
  }
  createStory(data) {
    return this.http.post(`${this.base}/api/stories`, data);
  }
  deleteStory(id) {
    return this.http.delete(`${this.base}/api/stories/${id}`);
  }
  // Réactions (emoji ou ❤️ simple)
  reactToStory(id, emoji = "\u2764\uFE0F") {
    return this.http.post(`${this.base}/api/stories/${id}/react`, { emoji });
  }
  removeReactionFromStory(id) {
    return this.http.delete(`${this.base}/api/stories/${id}/react`);
  }
  // Compat anciens appels like/unlike → redirigés vers react
  likeStory(id) {
    return this.reactToStory(id, "\u2764\uFE0F");
  }
  unlikeStory(id) {
    return this.removeReactionFromStory(id);
  }
  markStoryViewed(id) {
    return this.http.post(`${this.base}/api/stories/${id}/view`, {});
  }
  getStoryComments(id) {
    return this.http.get(`${this.base}/api/stories/${id}/comments`);
  }
  addStoryComment(id, content, parentId) {
    return this.http.post(`${this.base}/api/stories/${id}/comments`, { content, parentId });
  }
  deleteStoryComment(storyId, commentId) {
    return this.http.delete(`${this.base}/api/stories/${storyId}/comments/${commentId}`);
  }
  /* === Sync === */
  pullChanges(since) {
    return this.http.get(`${this.base}/api/sync/pull`, {
      params: new HttpParams().set("since", since)
    });
  }
  /* === Albums photos === */
  getPhotos(personneId) {
    return this.http.get(`${this.base}/api/photos/${personneId}`);
  }
  uploadAlbumPhoto(personneId, file, meta) {
    const fd = new FormData();
    fd.append("photo", file);
    if (meta?.caption)
      fd.append("caption", meta.caption);
    if (meta?.datePrise)
      fd.append("datePrise", meta.datePrise);
    if (meta?.lieuPrise)
      fd.append("lieuPrise", meta.lieuPrise);
    return this.http.post(`${this.base}/api/photos/${personneId}`, fd);
  }
  deleteAlbumPhoto(photoId) {
    return this.http.delete(`${this.base}/api/photos/${photoId}`);
  }
  updateAlbumPhoto(photoId, data) {
    return this.http.patch(`${this.base}/api/photos/${photoId}`, data);
  }
  /* === Abonnement & plans === */
  getSubscription() {
    return this.http.get(`${this.base}/api/subscription`);
  }
  getPlans() {
    return this.http.get(`${this.base}/api/subscription/plans`);
  }
  checkoutPlan(planId) {
    return this.http.post(`${this.base}/api/subscription/checkout`, { planId });
  }
  /* === Export === */
  exportGedcom() {
    return this.http.get(`${this.base}/api/export/gedcom`, { responseType: "blob" });
  }
  /* === Notifications === */
  getNotifications() {
    return this.http.get(`${this.base}/api/notifications`);
  }
  markNotificationRead(id) {
    return this.http.patch(`${this.base}/api/notifications/${id}/lire`, {});
  }
  markAllNotificationsRead() {
    return this.http.patch(`${this.base}/api/notifications/tout-lire`, {});
  }
  deleteNotification(id) {
    return this.http.delete(`${this.base}/api/notifications/${id}`);
  }
  /* === Timeline (événements personnalisés) === */
  getTimelineEvents() {
    return this.http.get(`${this.base}/api/timeline`);
  }
  createTimelineEvent(data) {
    return this.http.post(`${this.base}/api/timeline`, data);
  }
  updateTimelineEvent(id, data) {
    return this.http.put(`${this.base}/api/timeline/${id}`, data);
  }
  deleteTimelineEvent(id) {
    return this.http.delete(`${this.base}/api/timeline/${id}`);
  }
  /* === Recherche globale === */
  search(q) {
    return this.http.get(`${this.base}/api/search`, {
      params: new HttpParams().set("q", q)
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

// src/app/models/story.model.ts
var STORY_TAGS = [
  "Souvenir",
  "\xC9v\xE9nement",
  "Culture",
  "Succ\xE8s",
  "Patrimoine",
  "Naissance",
  "Autre"
];
var STORY_TAG_COLORS = {
  Souvenir: { bg: "#EFF6FF", color: "#2563EB" },
  \u00C9v\u00E9nement: { bg: "#F5F3FF", color: "#7C3AED" },
  Culture: { bg: "#FDF2F8", color: "#DB2777" },
  Succ\u00E8s: { bg: "#ECFDF5", color: "#059669" },
  Patrimoine: { bg: "#FFFBEB", color: "#D97706" },
  Naissance: { bg: "#FFF1F2", color: "#E11D48" },
  Autre: { bg: "#F3F4F6", color: "#6B7280" }
};

export {
  ApiService,
  getPhotoUrl,
  getInitiales,
  getNomComplet,
  extractAnnee,
  estVivant,
  getAgeLabel,
  STORY_TAGS,
  STORY_TAG_COLORS
};
//# sourceMappingURL=chunk-S4O4LH3N.js.map
