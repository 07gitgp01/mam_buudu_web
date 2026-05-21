import { Personne } from './personne.model';

export interface UnionParticipant {
  personneId: string;
  unionId: string;
  role: string;
  ordre: number;
  personne: Personne;
}

export interface Filiation {
  unionId: string;
  enfantId: string;
  ordreNaissance: number;
  enfant: Personne;
}

export interface Union {
  id: string;
  familleId: string;
  type: string | null;
  dateDebut: string | null;
  lieuDebut: string | null;
  dateFin: string | null;
  lieuFin: string | null;
  notes: string | null;
  participants: UnionParticipant[];
  filiations: Filiation[];
  createdAt: string;
  updatedAt: string;
}
