export type ActivityAction =
  | 'create_personne' | 'update_personne' | 'delete_personne'
  | 'create_union' | 'delete_union'
  | 'create_story' | 'delete_story'
  | 'create_event' | 'update_event' | 'delete_event'
  | 'import_gedcom';

export interface ActivityLogEntry {
  id: string;
  action: ActivityAction;
  targetType: string;
  targetId: string | null;
  details: Record<string, any> | null;
  createdAt: string;
  auteurNom: string | null;
}

export interface PaginatedActivity {
  data: ActivityLogEntry[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const ACTIVITY_LABELS: Record<ActivityAction, { label: string; icon: string; color: string }> = {
  create_personne: { label: 'a ajouté',    icon: 'person_add',      color: '#2563EB' },
  update_personne: { label: 'a modifié',   icon: 'edit',            color: '#D97706' },
  delete_personne: { label: 'a supprimé',  icon: 'person_remove',   color: '#DC2626' },
  create_union:    { label: 'a créé une union pour', icon: 'favorite', color: '#DB2777' },
  delete_union:    { label: 'a supprimé une union',  icon: 'heart_broken', color: '#DC2626' },
  create_story:    { label: 'a partagé une story',   icon: 'auto_stories', color: '#7C3AED' },
  delete_story:    { label: 'a supprimé une story',  icon: 'delete_outline', color: '#DC2626' },
  create_event:    { label: 'a ajouté un événement', icon: 'timeline', color: '#059669' },
  update_event:    { label: 'a modifié un événement', icon: 'edit_calendar', color: '#D97706' },
  delete_event:    { label: 'a supprimé un événement', icon: 'event_busy', color: '#DC2626' },
  import_gedcom:   { label: 'a importé un arbre (GEDCOM)', icon: 'file_upload', color: '#0891B2' },
};
