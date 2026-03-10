export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  badge?: string;
  veg?: boolean;
  spicy?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface CartItem extends MenuItem {
  qty: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  table: number | null;
  subtotal: number;
  tax: number;
  total: number;
  timestamp: Date;
}
