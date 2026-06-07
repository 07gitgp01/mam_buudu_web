import { Component, OnInit, OnDestroy } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Personne, getNomComplet, extractAnnee } from '../../models/personne.model';

interface QuizQuestion {
  question: string;
  options: string[];
  reponse: string;
  explication?: string;
}

type GameState = 'menu' | 'playing' | 'result';
type JeuId = 'quiz' | 'memoire' | 'qui' | 'timeline' | 'arbre' | 'tournoi';

interface Jeu {
  id: JeuId;
  titre: string;
  description: string;
  icon: string;
  colorClass: string;
  points: number;
  difficulte: 'Facile' | 'Moyen' | 'Difficile';
  disponible: boolean;
}

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrl: './jeux.component.scss',
  standalone: false,
})
export class JeuxComponent implements OnInit, OnDestroy {
  loading = true;
  personnes: Personne[] = [];

  readonly jeux: Jeu[] = [
    { id: 'quiz',    titre: 'Quiz Familial',      description: 'Testez vos connaissances sur l\'histoire de votre famille.',    icon: 'quiz',           colorClass: 'blue',   points: 50,  difficulte: 'Moyen',     disponible: true  },
    { id: 'memoire', titre: 'Mémoire',            description: 'Retrouvez les paires de membres de la famille.',               icon: 'grid_view',      colorClass: 'pink',   points: 30,  difficulte: 'Facile',    disponible: false },
    { id: 'qui',     titre: 'Qui est qui ?',      description: 'Devinez quel membre de la famille est sur la photo.',          icon: 'person_search',  colorClass: 'indigo', points: 40,  difficulte: 'Moyen',     disponible: false },
    { id: 'timeline',titre: 'Timeline Challenge', description: 'Remettez les événements dans l\'ordre chronologique.',         icon: 'timeline',       colorClass: 'green',  points: 60,  difficulte: 'Difficile', disponible: false },
    { id: 'arbre',   titre: 'Arbre Express',      description: 'Reconstituez l\'arbre généalogique le plus vite possible.',    icon: 'account_tree',   colorClass: 'orange', points: 70,  difficulte: 'Difficile', disponible: false },
    { id: 'tournoi', titre: 'Tournoi Famille',    description: 'Affrontez les membres de votre famille en temps réel.',        icon: 'emoji_events',   colorClass: 'yellow', points: 100, difficulte: 'Moyen',     disponible: false },
  ];

  /* ─── Quiz state ─── */
  gameState: GameState = 'menu';
  questions: QuizQuestion[] = [];
  currentIdx = 0;
  selectedAnswer: string | null = null;
  answered = false;
  score = 0;
  timer = 15;
  timerInterval: ReturnType<typeof setInterval> | null = null;

  get currentQuestion(): QuizQuestion | null {
    return this.questions[this.currentIdx] ?? null;
  }
  get progress(): number {
    return Math.round((this.currentIdx / this.questions.length) * 100);
  }
  get totalQuestions(): number { return this.questions.length; }

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPersonnes().pipe(catchError(() => of([]))).subscribe(p => {
      this.personnes = p;
      this.loading = false;
    });
  }

  ngOnDestroy(): void { this.clearTimer(); }

  /* ─── Lancer un jeu ─── */
  lancerJeu(id: JeuId): void {
    if (id !== 'quiz') return;
    this.questions = this.buildQuizQuestions();
    if (this.questions.length < 4) {
      alert('Ajoutez plus de membres avec des dates de naissance pour jouer !');
      return;
    }
    this.currentIdx = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.answered = false;
    this.gameState = 'playing';
    this.startTimer();
  }

  /* ─── Génération des questions ─── */
  private buildQuizQuestions(): QuizQuestion[] {
    const ps = this.personnes.filter(p => p.prenoms || p.nomNaissance);
    if (ps.length < 4) return [];

    const questions: QuizQuestion[] = [];

    // Q1 – année de naissance
    const avecAnnee = ps.filter(p => extractAnnee(p.dateNaissance) !== null);
    for (const p of this.shuffle(avecAnnee).slice(0, 4)) {
      const annee = extractAnnee(p.dateNaissance)!;
      const distracteurs = this.shuffle(
        ps.filter(x => x.id !== p.id).map(x => String(extractAnnee(x.dateNaissance) || 0)).filter(a => a !== '0' && a !== String(annee))
      ).slice(0, 3);
      if (distracteurs.length < 3) continue;
      questions.push({
        question: `En quelle année est né${p.sexe === 'F' ? 'e' : ''} ${getNomComplet(p)} ?`,
        reponse: String(annee),
        options: this.shuffle([String(annee), ...distracteurs]),
        explication: `${getNomComplet(p)} est né${p.sexe === 'F' ? 'e' : ''} en ${annee}.`,
      });
    }

    // Q2 – qui est né en [année]
    for (const p of this.shuffle(avecAnnee).slice(0, 4)) {
      const annee = extractAnnee(p.dateNaissance)!;
      const nom = getNomComplet(p);
      const faux = this.shuffle(ps.filter(x => x.id !== p.id && extractAnnee(x.dateNaissance) !== annee))
        .slice(0, 3).map(x => getNomComplet(x));
      if (faux.length < 3) continue;
      questions.push({
        question: `Qui est né${ps.find(x => x.id === p.id)?.sexe === 'F' ? 'e' : ''} en ${annee} ?`,
        reponse: nom,
        options: this.shuffle([nom, ...faux]),
        explication: `${nom} est né${p.sexe === 'F' ? 'e' : ''} en ${annee}.`,
      });
    }

    // Q3 – lieu de naissance
    const avecLieu = ps.filter(p => p.lieuNaissance);
    for (const p of this.shuffle(avecLieu).slice(0, 3)) {
      const nom = getNomComplet(p);
      const faux = this.shuffle(avecLieu.filter(x => x.id !== p.id && x.lieuNaissance !== p.lieuNaissance))
        .slice(0, 3).map(x => x.lieuNaissance!);
      if (faux.length < 3) continue;
      questions.push({
        question: `Dans quelle ville est né${p.sexe === 'F' ? 'e' : ''} ${nom} ?`,
        reponse: p.lieuNaissance!,
        options: this.shuffle([p.lieuNaissance!, ...faux]),
        explication: `${nom} est né${p.sexe === 'F' ? 'e' : ''} à ${p.lieuNaissance}.`,
      });
    }

    // Q4 – quel sexe
    for (const p of this.shuffle(ps).slice(0, 3)) {
      if (!p.sexe || p.sexe === 'autre') continue;
      const nom = getNomComplet(p);
      questions.push({
        question: `${nom} est…`,
        reponse: p.sexe === 'M' ? 'Un homme' : 'Une femme',
        options: ['Un homme', 'Une femme'],
        explication: `${nom} est ${p.sexe === 'M' ? 'un homme' : 'une femme'}.`,
      });
    }

    return this.shuffle(questions).slice(0, 10);
  }

  /* ─── Timer ─── */
  startTimer(): void {
    this.timer = 15;
    this.clearTimer();
    this.timerInterval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.clearTimer();
        if (!this.answered) this.timeOut();
      }
    }, 1000);
  }

  clearTimer(): void {
    if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
  }

  timeOut(): void {
    this.answered = true;
    this.selectedAnswer = '';
  }

  /* ─── Réponse ─── */
  choisirReponse(opt: string): void {
    if (this.answered) return;
    this.answered = true;
    this.selectedAnswer = opt;
    this.clearTimer();
    if (opt === this.currentQuestion?.reponse) {
      this.score += Math.ceil((this.timer / 15) * 10);
    }
  }

  question_suivante(): void {
    if (this.currentIdx < this.questions.length - 1) {
      this.currentIdx++;
      this.answered = false;
      this.selectedAnswer = null;
      this.startTimer();
    } else {
      this.gameState = 'result';
      this.clearTimer();
    }
  }

  rejouer(): void {
    this.gameState = 'menu';
    this.clearTimer();
  }

  optionClass(opt: string): string {
    if (!this.answered) return '';
    if (opt === this.currentQuestion?.reponse) return 'correct';
    if (opt === this.selectedAnswer) return 'wrong';
    return 'dimmed';
  }

  get scoreLabel(): string {
    const max = this.questions.length * 10;
    const pct = Math.round((this.score / max) * 100);
    if (pct >= 80) return 'Excellent !';
    if (pct >= 60) return 'Bien joué !';
    if (pct >= 40) return 'Pas mal !';
    return 'Continuez à explorer !';
  }

  private shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
  }
}
