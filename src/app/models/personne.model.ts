export type Sexe = 'M' | 'F' | 'autre';

export interface Personne {
  id: string;
  familleId: string;
  prenoms: string | null;
  nomNaissance: string | null;
  nomUsage: string | null;
  sexe: Sexe | null;
  dateNaissance: string | null;   // format: YYYY, YYYY-MM ou YYYY-MM-DD
  lieuNaissance: string | null;
  dateDeces: string | null;
  lieuDeces: string | null;
  biographie: string | null;
  notes: string | null;
  photoUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

// Retourne null pour les anciennes URLs Render (ephemeres) — affiche initiales a la place
export function getPhotoUrl(p: Personne): string | null {
  if (!p.photoUrl) return null;
  if (p.photoUrl.includes('onrender.com/uploads/')) return null;
  return p.photoUrl;
}

export function getInitiales(p: Personne): string {
  const prenom = p.prenoms?.charAt(0) ?? '';
  const nom = (p.nomUsage ?? p.nomNaissance)?.charAt(0) ?? '';
  return `${prenom}${nom}`.toUpperCase() || 'MB';
}

export function getNomComplet(p: Personne): string {
  return `${p.prenoms ?? ''} ${p.nomUsage ?? p.nomNaissance ?? ''}`.trim() || '—';
}

export function extractAnnee(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const n = parseInt(dateStr.slice(0, 4), 10);
  return isNaN(n) ? null : n;
}

export function estVivant(p: Personne): boolean {
  return p.dateDeces === null || p.dateDeces === undefined;
}

export function getAgeLabel(p: Personne): string {
  const anneeNaissance = extractAnnee(p.dateNaissance);
  if (!anneeNaissance || anneeNaissance < 1850) return '';
  const anneeDeces = extractAnnee(p.dateDeces);
  if (anneeDeces) return `${anneeNaissance} – ${anneeDeces}`;
  const age = new Date().getFullYear() - anneeNaissance;
  if (age < 0 || age > 150) return '';
  return `${age} ans`;
}
