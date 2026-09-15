export interface GaleriePhoto {
  id: string;
  url: string;
  caption: string | null;
  datePrise: string | null;
  lieuPrise: string | null;
  createdAt: string;
  personneId: string;
  personneNom: string | null;
}

export interface PaginatedPhotos {
  data: GaleriePhoto[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
