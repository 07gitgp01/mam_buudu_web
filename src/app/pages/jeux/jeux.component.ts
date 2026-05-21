import { Component } from '@angular/core';

interface Jeu {
  id: string;
  titre: string;
  description: string;
  icon: string;
  color: string;
  points: number;
  difficulte: 'Facile' | 'Moyen' | 'Difficile';
  joueurs: number;
}

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrl: './jeux.component.scss',
  standalone: false,
})
export class JeuxComponent {
  jeux: Jeu[] = [
    { id: '1', titre: 'Quiz Familial',       description: 'Testez vos connaissances sur votre histoire familiale.',       icon: 'quiz',              color: 'blue',   points: 50,  difficulte: 'Moyen',    joueurs: 12 },
    { id: '2', titre: 'Mémoire',             description: 'Retrouvez les paires de membres de la famille.',              icon: 'grid_view',         color: 'pink',   points: 30,  difficulte: 'Facile',   joueurs: 8  },
    { id: '3', titre: 'Qui est qui ?',       description: 'Devinez quel membre de la famille est sur la photo.',         icon: 'person_search',     color: 'indigo', points: 40,  difficulte: 'Moyen',    joueurs: 15 },
    { id: '4', titre: 'Timeline Challenge',  description: 'Remettez les événements familiaux dans l\'ordre chronologique.', icon: 'timeline',       color: 'green',  points: 60,  difficulte: 'Difficile', joueurs: 6 },
    { id: '5', titre: 'Arbre Express',       description: 'Reconstituez l\'arbre généalogique le plus vite possible.',   icon: 'account_tree',      color: 'orange', points: 70,  difficulte: 'Difficile', joueurs: 4  },
    { id: '6', titre: 'Tournoi Famille',     description: 'Affrontez les membres de votre famille en temps réel.',       icon: 'emoji_events',      color: 'yellow', points: 100, difficulte: 'Moyen',    joueurs: 24 },
  ];

  stats = [
    { icon: 'emoji_events', label: 'Mon score',    value: '2 450 pts', color: 'yellow' },
    { icon: 'military_tech', label: 'Mon niveau',  value: 'Niveau 3',  color: 'blue'   },
    { icon: 'local_fire_department', label: 'Série', value: '7 jours', color: 'orange' },
  ];
}
