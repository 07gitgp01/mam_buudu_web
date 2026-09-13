export interface SaPlan {
  id: string;
  nom: string;
  label: string;
  prix: number;
  maxPersonnes: number | null;
  features: string[];
  _count?: { subscriptions: number };
}

export interface SaSubscription {
  id: string;
  statut: string;
  dateDebut: string;
  dateFin: string | null;
  plan: SaPlan;
  planId?: string;
}

export interface SaFamilleMembre {
  id: string;
  role: string;
  user: { id: string; nom: string; prenom: string; email: string | null; telephone: string | null };
}

export interface SaFamille {
  id: string;
  nom: string;
  codeUnique: string;
  statut: 'actif' | 'suspendu';
  createdAt: string;
  // Liste (GET /familles) : { membres, personnes }. Détail (GET /familles/:id) : { personnes, stories, photos } + membres à part.
  _count: { membres?: number; personnes: number; stories?: number; photos?: number };
  subscription: SaSubscription | null;
  membres?: SaFamilleMembre[];
}

export interface SaUser {
  id: string;
  email: string | null;
  telephone: string | null;
  nom: string;
  prenom: string;
  platformRole: string | null;
  suspended: boolean;
  emailVerified: boolean;
  createdAt: string;
  _count: { familleMembres: number };
}

export interface SaPaiement {
  id: string;
  montant: number;
  statut: string;
  createdAt: string;
}

export interface SaSubscriptionRow extends SaSubscription {
  famille: { id: string; nom: string; codeUnique: string };
  paiements: SaPaiement[];
}

export interface SaAuditLog {
  id: string;
  adminId: string | null;
  action: string;
  targetType: string | null;
  targetId: string | null;
  details: Record<string, unknown> | null;
  createdAt: string;
  admin: { nom: string; prenom: string; email: string | null } | null;
}

export interface SaAuditAdmin {
  id: string;
  nom: string;
  prenom: string;
}
