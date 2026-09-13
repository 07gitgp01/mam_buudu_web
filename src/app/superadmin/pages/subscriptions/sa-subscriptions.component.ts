import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../services/superadmin.service';
import { SaSubscriptionRow } from '../../models/superadmin.model';

@Component({
  selector: 'sa-subscriptions',
  templateUrl: './sa-subscriptions.component.html',
  styleUrl: './sa-subscriptions.component.scss',
  standalone: false,
})
export class SaSubscriptionsComponent implements OnInit {
  data: { subscriptions: SaSubscriptionRow[]; total: number; page: number; pages: number } | null = null;
  loading = true;
  page = 1;
  statut = '';

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.sa.getSubscriptions({ page: this.page, statut: this.statut }).subscribe({
      next: (d) => { this.data = d; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }
}
