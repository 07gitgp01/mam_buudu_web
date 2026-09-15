import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 1;
  private _subject = new BehaviorSubject<Toast[]>([]);
  readonly toasts$ = this._subject.asObservable();

  private push(type: ToastType, message: string, durationMs: number): void {
    const toast: Toast = { id: this.nextId++, type, message };
    this._subject.next([...this._subject.value, toast]);
    setTimeout(() => this.dismiss(toast.id), durationMs);
  }

  success(message: string, durationMs = 4000): void { this.push('success', message, durationMs); }
  error(message: string, durationMs = 5000): void { this.push('error', message, durationMs); }
  info(message: string, durationMs = 4000): void { this.push('info', message, durationMs); }

  dismiss(id: number): void {
    this._subject.next(this._subject.value.filter(t => t.id !== id));
  }
}
