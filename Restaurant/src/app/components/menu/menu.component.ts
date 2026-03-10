import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { FilterService } from '../../services/filter.service';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuCardComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private menuService   = inject(MenuService);
  private filterService = inject(FilterService);

  get items(): MenuItem[] {
    return this.menuService.getByCategory(this.filterService.activeCategory());
  }

  get categoryName(): string {
    return this.menuService.categories.find(
      c => c.id === this.filterService.activeCategory()
    )?.name ?? 'All Items';
  }

  get itemCount(): number { return this.items.length; }
  trackById(_: number, item: MenuItem): number { return item.id; }
}
