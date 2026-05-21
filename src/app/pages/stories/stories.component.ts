import { Component } from '@angular/core';

interface Story {
  id: string;
  auteur: string;
  initiales: string;
  genre: 'M' | 'F';
  titre: string;
  contenu: string;
  date: string;
  likes: number;
  commentaires: number;
  tag: string;
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss',
  standalone: false,
})
export class StoriesComponent {
  stories: Story[] = [
    { id: '1', auteur: 'Ibrahim Diallo',   initiales: 'ID', genre: 'M', titre: 'Photo de famille 1985',       contenu: 'Je viens de retrouver cette magnifique photo de la fête de l\'Aïd en 1985. Grand-père Moussa était si fier ce jour-là...',         date: 'Il y a 2h',   likes: 14, commentaires: 5,  tag: 'Souvenir' },
    { id: '2', auteur: 'Fatoumata Diallo', initiales: 'FD', genre: 'F', titre: 'Mariage de oncle Oumar',      contenu: 'Les préparatifs du mariage de oncle Oumar avancent bien. Toute la famille sera réunie le mois prochain à Conakry.',                date: 'Il y a 5h',   likes: 28, commentaires: 11, tag: 'Événement' },
    { id: '3', auteur: 'Aminata Diallo',   initiales: 'AD', genre: 'F', titre: 'Recette de la grand-mère',    contenu: 'Grand-mère Aminata nous a partagé sa recette secrète du tiguadèguè. Une tradition familiale que nous devons préserver.',          date: 'Hier',        likes: 41, commentaires: 16, tag: 'Culture' },
    { id: '4', auteur: 'Seydou Diallo',    initiales: 'SD', genre: 'M', titre: 'Succès académique',           contenu: 'Fier d\'annoncer que je viens d\'obtenir mon Master en Informatique. Merci à toute la famille pour votre soutien constant !',   date: 'Il y a 2j',  likes: 56, commentaires: 23, tag: 'Succès' },
    { id: '5', auteur: 'Mariam Coulibaly', initiales: 'MC', genre: 'F', titre: 'Village ancestral',           contenu: 'J\'ai visité notre village ancestral à Labé. Les anciens m\'ont raconté des histoires incroyables sur nos origines.',             date: 'Il y a 3j',  likes: 33, commentaires: 9,  tag: 'Patrimoine' },
    { id: '6', auteur: 'Oumar Diallo',     initiales: 'OD', genre: 'M', titre: 'Naissance de Kadiatou',       contenu: 'C\'est avec une immense joie que nous accueillons la petite Kadiatou dans notre famille. Elle pèse 3,2kg et se porte très bien.', date: 'Il y a 1sem', likes: 72, commentaires: 31, tag: 'Naissance' },
  ];

  tagColors: Record<string, string> = {
    Souvenir: 'primary', Événement: 'accent', Culture: 'pink',
    Succès: 'success', Patrimoine: 'warning', Naissance: 'pink',
  };

  getTagClass(tag: string): string {
    return `badge-${this.tagColors[tag] ?? 'gray'}`;
  }
}
