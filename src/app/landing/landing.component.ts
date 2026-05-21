import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface FamilleCard {
  nom: string;
  initiale: string;
  membres: number;
  generations: number;
  unions: number;
  origine: string;
  color: string;
}

interface Testimonial {
  nom: string;
  initiale: string;
  role: string;
  texte: string;
  color: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: false,
})
export class LandingComponent implements OnInit, OnDestroy {
  constructor(private auth: AuthService, private router: Router) {}

  /* ---- Stats animés ---- */
  stats = { familles: 0, membres: 0, unions: 0, stories: 0 };
  private targets = { familles: 420, membres: 18500, unions: 6200, stories: 34000 };
  private interval: ReturnType<typeof setInterval> | null = null;

  /* ---- Carousel témoignages ---- */
  currentSlide = 0;
  private slideTimer: ReturnType<typeof setInterval> | null = null;

  familles: FamilleCard[] = [
    { nom: 'Diallo',   initiale: 'D', membres: 127, generations: 5, unions: 38, origine: 'Guinée',    color: '#3B82F6' },
    { nom: 'Konaté',   initiale: 'K', membres: 83,  generations: 4, unions: 25, origine: 'Mali',       color: '#8B5CF6' },
    { nom: 'Baldé',    initiale: 'B', membres: 61,  generations: 3, unions: 18, origine: 'Sénégal',    color: '#EC4899' },
    { nom: 'Traoré',   initiale: 'T', membres: 204, generations: 6, unions: 61, origine: 'Côte d\'Ivoire', color: '#F59E0B' },
    { nom: 'Coulibaly',initiale: 'C', membres: 95,  generations: 4, unions: 29, origine: 'Burkina',    color: '#10B981' },
    { nom: 'Camara',   initiale: 'C', membres: 48,  generations: 3, unions: 14, origine: 'Sierra Leone', color: '#6366F1' },
  ];

  testimonials: Testimonial[] = [
    {
      nom: 'Ibrahim Diallo', initiale: 'ID', color: '#3B82F6',
      role: 'Père de famille, Conakry',
      texte: 'Mam Buudu a révolutionné la façon dont notre famille préserve son histoire. En quelques clics, mes enfants peuvent explorer cinq générations d\'ancêtres. C\'est un cadeau extraordinaire.',
    },
    {
      nom: 'Fatoumata Konaté', initiale: 'FK', color: '#EC4899',
      role: 'Enseignante, Bamako',
      texte: 'L\'arbre généalogique est tellement beau et intuitif ! Toute la famille a été émerveillée lors de notre réunion annuelle. Mes tantes de 80 ans ont retrouvé des cousins perdus de vue depuis 30 ans.',
    },
    {
      nom: 'Oumar Baldé', initiale: 'OB', color: '#8B5CF6',
      role: 'Ingénieur, Dakar',
      texte: 'La fonctionnalité de synchronisation est parfaite. Mon frère à Paris, ma sœur à Montréal et moi à Dakar — on met tous à jour l\'arbre en temps réel. Notre famille est plus connectée que jamais.',
    },
    {
      nom: 'Mariama Traoré', initiale: 'MT', color: '#F59E0B',
      role: 'Médecin, Abidjan',
      texte: 'Les stories familiales sont une fonctionnalité magnifique. Grand-mère a pu partager ses souvenirs et recettes traditionnelles. Ces moments sont désormais préservés pour nos petits-enfants.',
    },
  ];

  features = [
    { icon: 'account_tree',   title: 'Arbre généalogique', desc: 'Visualisez votre famille sur plusieurs générations avec un arbre interactif et élégant.',      color: '#3B82F6' },
    { icon: 'auto_stories',   title: 'Stories familiales', desc: 'Partagez photos, anecdotes et traditions. Vos souvenirs racontés et préservés pour toujours.', color: '#8B5CF6' },
    { icon: 'timeline',       title: 'Ligne du temps',     desc: 'Revivez les grands moments : naissances, mariages, accomplissements. Une histoire vivante.',    color: '#EC4899' },
    { icon: 'lock',           title: 'Privé & Sécurisé',   desc: 'Vos données familiales sont chiffrées et accessibles uniquement aux membres invités.',          color: '#10B981' },
    { icon: 'phone_android',  title: 'Application mobile', desc: 'Disponible sur Android et iOS. Votre famille dans votre poche, où que vous soyez.',             color: '#F59E0B' },
    { icon: 'group_add',      title: 'Multi-rôles',        desc: 'Administrateurs, gestionnaires, membres — chaque rôle adapté à ses besoins.',                   color: '#6366F1' },
  ];

  navOpen = false;

  get isLoggedIn(): boolean { return this.auth.isLoggedIn(); }

  get dashboardRoute(): string {
    const role = this.auth.getUser()?.role ?? '';
    return role === 'admin' || role === 'gestionnaire' ? '/app/home' : '/famille';
  }

  get userName(): string {
    const u = this.auth.getUser();
    return u ? `${u.prenom} ${u.nom}` : '';
  }

  logout(): void {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.animateCounters();
    this.startSlideTimer();
  }

  ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval);
    if (this.slideTimer) clearInterval(this.slideTimer);
  }

  private animateCounters(): void {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    this.interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      this.stats.familles = Math.round(this.targets.familles * eased);
      this.stats.membres   = Math.round(this.targets.membres   * eased);
      this.stats.unions    = Math.round(this.targets.unions    * eased);
      this.stats.stories   = Math.round(this.targets.stories   * eased);
      if (step >= steps) {
        this.stats = { ...this.targets };
        clearInterval(this.interval!);
      }
    }, stepTime);
  }

  private startSlideTimer(): void {
    this.slideTimer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(i: number): void {
    this.currentSlide = i;
  }

  formatStat(n: number): string {
    if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k';
    return n.toString();
  }
}
