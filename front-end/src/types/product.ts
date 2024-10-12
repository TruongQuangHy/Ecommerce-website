export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating?: {
    rate?: number;
  };
  title: string;
}
