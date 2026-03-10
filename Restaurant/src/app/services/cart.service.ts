import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, MenuItem } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class CartService {

  private itemsMap = new Map<number, CartItem>();
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  private emit(): void {
    this.cartSubject.next([...this.itemsMap.values()]);
  }

  add(item: MenuItem): void {
    const existing = this.itemsMap.get(item.id);
    if (existing) {
      this.itemsMap.set(item.id, { ...existing, qty: existing.qty + 1 });
    } else {
      this.itemsMap.set(item.id, { ...item, qty: 1 });
    }
    this.emit();
  }

  remove(id: number): void {
    const existing = this.itemsMap.get(id);
    if (!existing) return;
    if (existing.qty > 1) {
      this.itemsMap.set(id, { ...existing, qty: existing.qty - 1 });
    } else {
      this.itemsMap.delete(id);
    }
    this.emit();
  }

  clear(): void {
    this.itemsMap.clear();
    this.emit();
  }

  getQty(id: number): number {
    return this.itemsMap.get(id)?.qty ?? 0;
  }

  get count(): number {
    let total = 0;
    this.itemsMap.forEach(i => total += i.qty);
    return total;
  }

  get subtotal(): number {
    let total = 0;
    this.itemsMap.forEach(i => total += i.price * i.qty);
    return total;
  }

  get tax(): number {
    return Math.round(this.subtotal * 0.05);
  }

  get total(): number {
    return this.subtotal + this.tax;
  }

  generateOrderId(): string {
    return 'TMT-' + Math.floor(10000 + Math.random() * 90000);
  }
}
