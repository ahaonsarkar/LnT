import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FilterService {
  activeCategory = signal<string>('all');
  setCategory(id: string): void { this.activeCategory.set(id); }
}
