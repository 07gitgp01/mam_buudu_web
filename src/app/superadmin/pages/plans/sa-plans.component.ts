import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperAdminService } from '../../services/superadmin.service';

@Component({ selector: 'sa-plans', templateUrl: './sa-plans.component.html', styleUrl: './sa-plans.component.scss', standalone: false })
export class SaPlansComponent implements OnInit {
  plans: any[] = [];
  loading = true;
  showCreateForm = false;
  createForm!: FormGroup;
  creating = false;
  editingId: string | null = null;
  actionLoading = '';

  constructor(private sa: SuperAdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      id:           ['', [Validators.required, Validators.pattern(/^[a-z0-9_]+$/)]],
      nom:          ['', Validators.required],
      label:        ['', Validators.required],
      prix:         [0, [Validators.required, Validators.min(0)]],
      maxPersonnes: [null],
      featuresRaw:  [''],
    });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.sa.getPlans().subscribe({ next: (p) => { this.plans = p; this.loading = false; }, error: () => this.loading = false });
  }

  startEdit(p: any): void {
    p._editing = true;
    p._editLabel = p.label;
    p._editPrix  = p.prix;
    p._editMax   = p.maxPersonnes;
    p._editFeats = (p.features as string[]).join(', ');
  }
  cancelEdit(p: any): void { p._editing = false; }

  saveEdit(p: any): void {
    this.actionLoading = p.id;
    const features = (p._editFeats as string).split(',').map((s: string) => s.trim()).filter(Boolean);
    this.sa.patchPlan(p.id, { label: p._editLabel, prix: +p._editPrix, maxPersonnes: p._editMax ? +p._editMax : null, features }).subscribe({
      next: (updated) => {
        Object.assign(p, updated);
        p._editing = false;
        this.actionLoading = '';
      },
      error: () => this.actionLoading = '',
    });
  }

  deletePlan(p: any): void {
    if (!confirm(`Supprimer le plan "${p.label}" ? Les abonnements existants seront affectés.`)) return;
    this.actionLoading = p.id;
    this.sa.deletePlan(p.id).subscribe({
      next: () => { this.plans = this.plans.filter(x => x.id !== p.id); this.actionLoading = ''; },
      error: () => this.actionLoading = '',
    });
  }

  submitCreate(): void {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid) return;
    this.creating = true;
    const v = this.createForm.value;
    const features = (v.featuresRaw as string).split(',').map((s: string) => s.trim()).filter(Boolean);
    this.sa.createPlan({ id: v.id, nom: v.nom, label: v.label, prix: +v.prix, maxPersonnes: v.maxPersonnes ? +v.maxPersonnes : null, features }).subscribe({
      next: (p) => { this.plans.push(p); this.showCreateForm = false; this.createForm.reset({ prix: 0 }); this.creating = false; },
      error: () => this.creating = false,
    });
  }
}
