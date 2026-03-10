import { Injectable } from '@angular/core';
import { Category, MenuItem } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {

  readonly categories: Category[] = [
    { id: 'all',      name: 'All Items' },
    { id: 'starters', name: 'Starters' },
    { id: 'mains',    name: 'Main Course' },
    { id: 'pizza',    name: 'Pizza' },
    { id: 'burgers',  name: 'Burgers' },
    { id: 'seafood',  name: 'Seafood' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks',   name: 'Drinks' },
  ];

  readonly items: MenuItem[] = [
    { id: 1,  name: 'Truffle Arancini',    category: 'starters', price: 380, desc: 'Crispy risotto balls stuffed with black truffle and mozzarella, served with aioli.'},
    { id: 2,  name: 'Spicy Chicken Wings', category: 'starters', price: 320, desc: 'Crispy wings tossed in smoky chipotle glaze with blue cheese dip.'},
    { id: 3,  name: 'Burrata Salad',       category: 'starters', price: 420, desc: 'Fresh burrata with heirloom tomatoes, basil oil, and balsamic reduction.'},
    { id: 4,  name: 'Prawn Cocktail',      category: 'starters', price: 480, desc: 'Jumbo prawns with signature Marie Rose sauce and microgreens.'},
    { id: 5,  name: 'Butter Chicken',      category: 'mains',    price: 520, desc: 'Tender chicken in rich, creamy tomato-butter gravy. Served with basmati rice.'},
    { id: 6,  name: 'Lamb Rogan Josh',     category: 'mains',    price: 680, desc: 'Slow-cooked Kashmiri lamb in aromatic spices, finished with saffron.'},
    { id: 7,  name: 'Paneer Makhani',      category: 'mains',    price: 440, desc: 'Cottage cheese cubes in velvety tomato-cream sauce with fenugreek.'},
    { id: 8,  name: 'Grilled Ribeye',      category: 'mains',    price: 1200, desc: '300g Prime ribeye grilled to perfection, served with truffle fries and béarnaise.'},
    { id: 9,  name: 'Dal Makhani',         category: 'mains',    price: 360, desc: 'Slow-cooked black lentils with cream and butter. A 24-hour recipe.'},
    { id: 10, name: 'Margherita',          category: 'pizza',    price: 450, desc: 'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil.'},
    { id: 11, name: 'Pepperoni Inferno',   category: 'pizza',    price: 580, desc: 'Double pepperoni, jalapeños, chilli oil, mozzarella on a crispy base.'},
    { id: 12, name: 'Truffle Mushroom',    category: 'pizza',    price: 620, desc: 'Wild mushrooms, truffle oil, fontina cheese, fresh thyme.'},
    { id: 13, name: 'Smash Burger',        category: 'burgers',  price: 780, desc: 'Double Wagyu smash patty, aged cheddar, caramelised onions, secret sauce.'},
    { id: 14, name: 'Crispy Chicken',      category: 'burgers',  price: 480, desc: 'Southern-fried chicken fillet, coleslaw, pickles, sriracha mayo.'},
    { id: 15, name: 'Portobello Burger',   category: 'burgers',  price: 420, desc: 'Grilled portobello mushroom, avocado, sun-dried tomatoes, pesto aioli.'},
    { id: 16, name: 'Lobster Thermidor',   category: 'seafood',  price: 1850, desc: 'Whole lobster baked with cognac cream, gruyère crust. A classic indulgence.'},
    { id: 17, name: 'Pan Seared Salmon',   category: 'seafood',  price: 820, desc: 'Atlantic salmon with lemon butter, capers, asparagus and new potatoes.' },
    { id: 18, name: 'Tiger Prawns',        category: 'seafood',  price: 980, desc: 'Char-grilled tiger prawns in garlic herb butter, served with crusty bread.' },
    { id: 19, name: 'Cheese Cake ',        category: 'desserts', price: 280, desc: 'Classic vanilla bean custard with caramelised sugar crust.'},
    { id: 20, name: 'Gulab Jamun',         category: 'desserts', price: 180, desc: 'Soft milk-solid dumplings soaked in rose-cardamom syrup. Served warm.'},
    { id: 21, name: 'Tiramisu',            category: 'desserts', price: 320, desc: 'Ladyfinger biscuits, espresso, mascarpone, dusted with cocoa.'},
    { id: 22, name: 'Chocolate Lava Cake', category: 'desserts', price: 340, desc: 'Warm dark chocolate cake with molten centre, vanilla ice cream.'},
    { id: 23, name: 'Mango Lassi',         category: 'drinks',   price: 180, desc: 'Thick chilled yoghurt drink blended with Alphonso mangoes.'},
    { id: 24, name: 'Masala Chai',         category: 'drinks',   price: 120, desc: 'Traditional spiced tea brewed with ginger, cardamom, and cinnamon.'},
    { id: 25, name: 'Virgin Mojito',       category: 'drinks',   price: 200, desc: 'Fresh mint, lime juice, sugar syrup and sparkling water.'},
    { id: 26, name: 'Sparkling Lemonade',  category: 'drinks',   price: 160, desc: 'House-made lemonade topped with sparkling water, rosemary garnish.'},
  ];

  getByCategory(categoryId: string): MenuItem[] {
    return categoryId === 'all'
      ? this.items
      : this.items.filter(i => i.category === categoryId);
  }
}
