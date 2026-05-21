import { Component } from '@angular/core';

interface Story {
  id: string;
  auteur: string;
  initiales: string;
  sexe: 'M' | 'F';
  titre: string;
  contenu: string;
  date: string;
  likes: number;
  commentaires: number;
  tag: string;
  liked: boolean;
}

@Component({
  selector: 'app-famille-stories',
  templateUrl: './famille-stories.component.html',
  styleUrl: './famille-stories.component.scss',
  standalone: false,
})
export class FamilleStoriesComponent {
  searchQuery = '';
  selectedTag = 'tous';

  tags = ['tous', 'Souvenir', 'Événement', 'Culture', 'Succès', 'Patrimoine', 'Naissance'];

  stories: Story[] = [
    { id: '1', auteur: 'Ibrahim Diallo',    initiales: 'ID', sexe: 'M', titre: 'Photo de famille 1985',     contenu: 'Je viens de retrouver cette magnifique photo de la fête de l\'Aïd en 1985. Grand-père Moussa était si fier ce jour-là... Nous étions plus de 40 personnes réunies dans la grande cour.',       date: 'Il y a 2h',    likes: 14, commentaires: 5,  tag: 'Souvenir',   liked: false },
    { id: '2', auteur: 'Fatoumata Konaté',  initiales: 'FK', sexe: 'F', titre: 'Mariage de oncle Oumar',    contenu: 'Les préparatifs du mariage de oncle Oumar avancent bien. Toute la famille sera réunie le mois prochain à Conakry. Les tantes ont déjà commencé à confectionner les tenues traditionnelles.',      date: 'Il y a 5h',    likes: 28, commentaires: 11, tag: 'Événement',  liked: true  },
    { id: '3', auteur: 'Aminata Camara',    initiales: 'AC', sexe: 'F', titre: 'Recette de la grand-mère',  contenu: 'Grand-mère Aminata nous a partagé sa recette secrète du tiguadèguè. Une tradition familiale transmise de génération en génération. Il ne faut jamais oublier nos racines culinaires.',           date: 'Hier',         likes: 41, commentaires: 16, tag: 'Culture',    liked: false },
    { id: '4', auteur: 'Seydou Baldé',      initiales: 'SB', sexe: 'M', titre: 'Succès académique !',       contenu: 'Fier d\'annoncer que je viens d\'obtenir mon Master en Informatique avec mention Très Bien ! Merci à toute la famille pour votre soutien sans faille tout au long de ces deux années difficiles.',   date: 'Il y a 2j',    likes: 56, commentaires: 23, tag: 'Succès',     liked: true  },
    { id: '5', auteur: 'Mariam Traoré',     initiales: 'MT', sexe: 'F', titre: 'Village ancestral de Labé', contenu: 'J\'ai visité notre village ancestral à Labé en Guinée. Les anciens m\'ont raconté des histoires incroyables sur nos origines et les migrations de notre famille au fil des siècles.',              date: 'Il y a 3j',    likes: 33, commentaires: 9,  tag: 'Patrimoine', liked: false },
    { id: '6', auteur: 'Oumar Diallo',      initiales: 'OD', sexe: 'M', titre: 'Bienvenue petite Kadiatou', contenu: 'C\'est avec une immense joie que nous accueillons la petite Kadiatou dans notre famille. Elle pèse 3,2kg, est en parfaite santé et a les yeux de sa grand-mère. Alhamdulillah !',                 date: 'Il y a 1sem',  likes: 72, commentaires: 31, tag: 'Naissance',  liked: false },
    { id: '7', auteur: 'Kadiatou Sow',      initiales: 'KS', sexe: 'F', titre: 'Les photos de 1972',        contenu: 'J\'ai numérisé les anciennes photos de 1972. On peut y voir nos grands-parents jeunes, lors d\'une cérémonie au village. Ces visages nous rappellent d\'où nous venons.',                          date: 'Il y a 2sem',  likes: 45, commentaires: 18, tag: 'Souvenir',   liked: true  },
    { id: '8', auteur: 'Mamadou Kouyaté',   initiales: 'MK', sexe: 'M', titre: 'Promotion au travail',      contenu: 'Je suis heureux de partager que j\'ai été promu directeur régional. C\'est le fruit de nombreuses années de travail et de la bénédiction de toute la famille. Baraka !',                            date: 'Il y a 3sem',  likes: 89, commentaires: 34, tag: 'Succès',     liked: false },
  ];

  get storiesFiltrees(): Story[] {
    return this.stories.filter(s => {
      const matchTag = this.selectedTag === 'tous' || s.tag === this.selectedTag;
      const q = this.searchQuery.toLowerCase();
      const matchSearch = !q || s.titre.toLowerCase().includes(q) || s.contenu.toLowerCase().includes(q) || s.auteur.toLowerCase().includes(q);
      return matchTag && matchSearch;
    });
  }

  toggleLike(s: Story): void {
    s.liked = !s.liked;
    s.likes += s.liked ? 1 : -1;
  }

  tagColor(tag: string): { bg: string; color: string } {
    const map: Record<string, { bg: string; color: string }> = {
      Souvenir:   { bg: '#EFF6FF', color: '#2563EB'  },
      Événement:  { bg: '#F5F3FF', color: '#7C3AED'  },
      Culture:    { bg: '#FDF2F8', color: '#DB2777'  },
      Succès:     { bg: '#ECFDF5', color: '#059669'  },
      Patrimoine: { bg: '#FFFBEB', color: '#D97706'  },
      Naissance:  { bg: '#FFF1F2', color: '#E11D48'  },
    };
    return map[tag] ?? { bg: '#F3F4F6', color: '#6B7280' };
  }
}
