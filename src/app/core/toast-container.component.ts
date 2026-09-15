import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Toast, ToastService } from './toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss',
  standalone: false,
})
export class ToastContainerComponent {
  toasts$: Observable<Toast[]>;

  constructor(private toastService: ToastService) {
    this.toasts$ = this.toastService.toasts$;
  }

  iconFor(type: Toast['type']): string {
    return type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info';
  }

  dismiss(id: number): void {
    this.toastService.dismiss(id);
  }

  trackById(_: number, item: Toast): number { return item.id; }
}
