import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(
    private router: Router,
    private renderer: Renderer2,
    _theme: ThemeService,  // init au démarrage → applique la couleur sauvegardée
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e) => {
        const url = (e as NavigationEnd).urlAfterRedirects;
        const theme = url.startsWith('/app')     ? 'gestionnaire' :
                      url.startsWith('/famille') ? 'famille'      : 'default';
        this.renderer.setAttribute(document.body, 'data-theme', theme);
      });
  }
}
