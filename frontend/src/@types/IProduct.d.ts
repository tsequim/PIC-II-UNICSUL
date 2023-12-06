// export interface IProduct {
//   id: string;
//   name?: string;
//   price: number;
//   oldPrice: number;
//   image?: any;
//   description?: string;
//   store?: string;
//   colors: string[];
// }

import { ISeller } from "./ISeller";

export interface ICategory {
  name: string;
  iconUrl: string;
  id: string;
}

export interface IPhoto {
  productId: string;
  url: string;
  isCover: boolean;
  id: string;
}

// export interface IProduct {
//   sellerId: string;
//   seller: ISeller;
//   categoryId: string;
//   name: string;
//   manufacturer: string;
//   description: string;
//   value: number;
//   active: boolean;
//   category: Category;
//   photos: Photo[];
//   id: string;
// }

export interface IProduct {
  id: string;
  name: string;
  oldPrice: number;
  value: number;
  image: any;
  store: string;
  description: string;
}

export interface IProductQuery {
  sellerId?: string;
  categoryId?: string;
  search?: string;
  orderBy?: "name" | "orders";
  pageSize?: number;
  page?: number;
}
