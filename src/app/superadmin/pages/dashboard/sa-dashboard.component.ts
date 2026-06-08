import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SuperAdminService } from '../../services/superadmin.service';

@Component({ selector: 'sa-dashboard', templateUrl: './sa-dashboard.component.html', styleUrl: './sa-dashboard.component.scss', standalone: false })
export class SaDashboardComponent implements OnInit {
  stats: any    = null;
  revenue: any[] = [];
  activity: any[] = [];
  loading = true;

  constructor(private sa: SuperAdminService) {}

  ngOnInit(): void {
    forkJoin({ stats: this.sa.getStats(), revenue: this.sa.getRevenue(), activity: this.sa.getActivity() }).subscribe({
      next: (data) => { this.stats = data.stats; this.revenue = data.revenue; this.activity = data.activity; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  get revenueMax(): number {
    return Math.max(...this.revenue.map(r => r.montant), 1);
  }

  barHeight(montant: number): string {
    return `${Math.max(4, Math.round((montant / this.revenueMax) * 100))}%`;
  }

  activityColor(type: string): string {
    return { user: '#6366F1', famille: '#10B981', sub: '#F59E0B', payment: '#3B82F6' }[type] ?? '#94A3B8';
  }

  timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return 'à l\'instant';
    if (m < 60) return `il y a ${m} min`;
    const h = Math.floor(m / 60);
    if (h < 24) return `il y a ${h}h`;
    return `il y a ${Math.floor(h / 24)}j`;
  }
}
