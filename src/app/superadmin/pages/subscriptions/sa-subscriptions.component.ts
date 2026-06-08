import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../services/superadmin.service';

@Component({
  selector: 'sa-subscriptions',
  templateUrl: './sa-subscriptions.component.html',
  styleUrl: './sa-subscriptions.component.scss',
  standalone: false,
})
export class SaSubscriptionsComponent implements OnInit {
  data: any = null;
  loading = true;
  page = 1;
  statut = '';

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.sa.getSubscriptions({ page: this.page, statut: this.statut }).subscribe({
      next: (d: any) => { this.data = d; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }
}
