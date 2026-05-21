export type RoleUtilisateur = 'admin' | 'gestionnaire' | 'membre' | 'viewonly';

export interface Utilisateur {
  id: string;
  familleId: string;
  prenom: string;
  nom: string;
  email?: string;
  telephone?: string;
  username?: string;
  role: RoleUtilisateur;
  personneId?: string;
  createdAt: string;
}

export interface Famille {
  id: string;
  nom: string;
  code: string;
  description?: string;
  createdAt: string;
}
