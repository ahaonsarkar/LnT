import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { FilterService } from '../../services/filter.service';
import { MenuService } from '../../services/menu.service';
import { CartDrawerService } from '../../services/cart-drawer.service';
import { Category } from '../../models/menu.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private cartService      = inject(CartService);
  private filterService    = inject(FilterService);
  private menuService      = inject(MenuService);
  private cartDrawerService = inject(CartDrawerService);

  get categories(): Category[] { return this.menuService.categories; }
  get cartCount(): number       { return this.cartService.count; }
  get activeCategory(): string  { return this.filterService.activeCategory(); }

  setCategory(id: string): void { this.filterService.setCategory(id); }
  openCart(): void               { this.cartDrawerService.open(); }
}
