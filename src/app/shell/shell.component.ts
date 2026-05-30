import { Component } from '@angular/core';
import { LoadingService } from '../core/loading.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  standalone: false,
})
export class ShellComponent {
  sidebarOpen = false;
  constructor(public loading: LoadingService) {}
}
