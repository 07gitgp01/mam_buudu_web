import { RoleUtilisateur } from './utilisateur.model';

export interface Membre {
  id: string;
  role: RoleUtilisateur;
  user: {
    id: string;
    nom: string;
    prenom: string;
    email?: string | null;
    telephone?: string | null;
  };
  personneId?: string | null;
}

export interface Plan {
  id: string;
  nom: string;
  label: string;
  prix: number;
  maxPersonnes: number | null; // null = illimité
  features: string[];
}

export interface Subscription {
  plan: Plan | null;
  statut: 'actif' | 'expire';
  dateFin: string | null;
  current: number;
  limit: number | null; // null = illimité
  pourcentage: number;
}

export interface NotificationItem {
  id: string;
  type: string;
  titre: string;
  message: string;
  lue: boolean;
  createdAt: string;
  data?: Record<string, unknown> | null;
}
