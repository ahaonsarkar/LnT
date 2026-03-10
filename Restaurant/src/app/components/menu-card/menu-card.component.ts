import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models/menu.model';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {
  @Input({ required: true }) item!: MenuItem;

  private cartService = inject(CartService);
  private toast       = inject(ToastService);

  get qty(): number { return this.cartService.getQty(this.item.id); }

  add(): void {
    this.cartService.add(this.item);
    this.toast.show(this.item.name + ' added to cart');
  }

  remove(): void { this.cartService.remove(this.item.id); }
}
