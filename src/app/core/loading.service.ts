import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _count = 0;
  private _subject = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this._subject.asObservable();

  start(): void {
    this._count++;
    this._subject.next(true);
  }

  stop(): void {
    this._count = Math.max(0, this._count - 1);
    if (this._count === 0) this._subject.next(false);
  }
}
