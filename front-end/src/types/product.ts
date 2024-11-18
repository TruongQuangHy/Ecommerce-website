// src/types/productTypes.ts
export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string[];
  price: string;
  category: string;
  brand: string;
  demoUrl: string;
  images: string[];
}
