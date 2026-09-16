// En dev : chaîne vide → requêtes relatives (/api/...), le proxy Angular
// (proxy.conf.json, actif via `ng serve`) les transfère vers localhost:3000.
// À remettre sur l'URL de prod avant tout déploiement / build de prod.
// export const API_BASE_URL = '';
export const API_BASE_URL = 'https://mam-buudu-api.onrender.com';
