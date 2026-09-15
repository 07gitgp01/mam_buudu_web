import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Plan } from '../models/plateforme.model';
import { ThemeService } from '../services/theme.service';

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
  constructor(
    private auth: AuthService,
    private router: Router,
    private api: ApiService,
    public themeService: ThemeService,
  ) {}

  /* ---- Sélecteur de thème ---- */
  themeMenuOpen = false;

  get currentThemeColor(): string {
    return this.themeService.themes.find(t => t.name === this.themeService.current)?.color ?? '#15803D';
  }

  get currentThemeLabel(): string {
    return this.themeService.themes.find(t => t.name === this.themeService.current)?.label ?? 'Thème';
  }

  toggleThemeMenu(): void {
    this.themeMenuOpen = !this.themeMenuOpen;
  }

  selectTheme(name: string): void {
    this.themeService.applyColor(name);
    this.themeMenuOpen = false;
  }

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

  /* ---- Tarifs ---- */
  plans: Plan[] = [];

  /* ---- FAQ ---- */
  faqs: { question: string; reponse: string; open: boolean }[] = [
    {
      question: "Qu'est-ce que Mam Buudu ?",
      reponse: "Mam Buudu est une plateforme de généalogie familiale qui vous permet de construire l'arbre de votre famille, de partager des stories et souvenirs, et de suivre les événements marquants — accessible en ligne comme hors ligne.",
      open: true,
    },
    {
      question: 'Combien de membres puis-je ajouter gratuitement ?',
      reponse: "Le plan Gratuit permet de créer un arbre jusqu'à 50 membres, avec l'ensemble des fonctionnalités de base (stories, export, notifications d'anniversaires).",
      open: false,
    },
    {
      question: 'Mes données familiales sont-elles privées ?',
      reponse: "Oui. L'arbre de votre famille est privé par défaut et accessible uniquement aux membres que vous invitez. Vous gérez qui peut voir et modifier chaque information.",
      open: false,
    },
    {
      question: "Puis-je inviter les membres de ma famille ?",
      reponse: "Oui, chaque famille dispose d'un code unique à partager. Les membres invités rejoignent l'espace famille avec leur propre compte et un rôle adapté (gestionnaire ou membre).",
      open: false,
    },
    {
      question: 'Puis-je changer de plan à tout moment ?',
      reponse: "Oui, vous pouvez passer à un plan supérieur dès que votre famille grandit, directement depuis votre espace administrateur.",
      open: false,
    },
  ];

  get allFaqOpen(): boolean {
    return this.faqs.every(f => f.open);
  }

  toggleFaq(i: number): void {
    this.faqs[i].open = !this.faqs[i].open;
  }

  setAllFaq(open: boolean): void {
    this.faqs.forEach(f => f.open = open);
  }

  formatPrix(plan: Plan): string {
    if (plan.prix === 0) return 'Gratuit';
    return `${plan.prix.toLocaleString('fr-FR')} FCFA`;
  }

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
    this.api.getPlans().pipe(catchError(() => of([]))).subscribe(plans => this.plans = plans);
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
