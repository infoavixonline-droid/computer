export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  specs: Record<string, string>;
  mostPicked: boolean;
  bestSelling: boolean;
  dateAdded: string;
  inStock: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
