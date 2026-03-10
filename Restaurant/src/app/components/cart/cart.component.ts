import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe, TitleCasePipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { CartDrawerService } from '../../services/cart-drawer.service';
import { CartItem } from '../../models/menu.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AsyncPipe, TitleCasePipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartService        = inject(CartService);
  cartDrawerService  = inject(CartDrawerService);
  private toast      = inject(ToastService);

  selectedTable: number | null = null;
  tables = [1, 2, 3, 4, 5, 6, 7, 8];
  orderPlaced = false;
  lastOrderId = '';

  get isOpen():   boolean { return this.cartDrawerService.isOpen(); }
  get count():    number  { return this.cartService.count; }
  get subtotal(): number  { return this.cartService.subtotal; }
  get tax():      number  { return this.cartService.tax; }
  get total():    number  { return this.cartService.total; }

  trackById(_: number, item: CartItem): number { return item.id; }
  selectTable(t: number): void { this.selectedTable = t; }
  add(item: CartItem):    void { this.cartService.add(item); }
  remove(id: number):     void { this.cartService.remove(id); }
  close():                void { this.cartDrawerService.close(); }

  clearCart(): void {
    this.cartService.clear();
    this.toast.show('Cart cleared');
  }

  placeOrder(): void {
    if (this.count === 0) return;
    this.lastOrderId = this.cartService.generateOrderId();
    this.orderPlaced = true;
  }

  closeModal(): void {
    this.orderPlaced   = false;
    this.selectedTable = null;
    this.cartService.clear();
    this.cartDrawerService.close();
    this.toast.show('New order started');
  }
}
