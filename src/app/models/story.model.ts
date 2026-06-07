// Modèle Story — aligné avec backend + mobile Flutter
export interface Story {
  id: string;

  // Auteur (retourné par le backend via JOIN)
  auteurId:     string;
  auteurNom:    string;
  auteurPrenom: string;
  auteurSexe:   'M' | 'F' | 'autre' | null;
  auteurAvatar: string | null;

  // Contenu
  titre:     string | null;   // optionnel (web), absent sur mobile
  caption:   string;          // texte principal — "caption" aligne avec Flutter
  tag:       string | null;   // catégorie web (Souvenir, Événement…)
  mediaUrl:  string | null;   // URL Cloudinary (photo ou vidéo)
  mediaType: 'photo' | 'video' | 'text' | null;

  // Expiration (null = permanent pour le web, ISO string pour le mobile)
  expiresAt: string | null;

  // Visibilité
  privacy: 'family' | 'custom' | 'private';

  // Stats
  viewCount:         number;
  likesCount:        number;
  commentairesCount: number;

  // État courant utilisateur
  isLikedByMe:    boolean;
  isViewedByMe:   boolean;
  myReactionEmoji: string | null;

  // Réactions détaillées { emoji → count }
  reactions: Record<string, number>;

  createdAt: string;
  updatedAt: string;
}

export const STORY_TAGS = [
  'Souvenir', 'Événement', 'Culture', 'Succès', 'Patrimoine', 'Naissance', 'Autre'
] as const;

export type StoryTag = typeof STORY_TAGS[number];

export const STORY_TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Souvenir:   { bg: '#EFF6FF', color: '#2563EB' },
  Événement:  { bg: '#F5F3FF', color: '#7C3AED' },
  Culture:    { bg: '#FDF2F8', color: '#DB2777' },
  Succès:     { bg: '#ECFDF5', color: '#059669' },
  Patrimoine: { bg: '#FFFBEB', color: '#D97706' },
  Naissance:  { bg: '#FFF1F2', color: '#E11D48' },
  Autre:      { bg: '#F3F4F6', color: '#6B7280' },
};
