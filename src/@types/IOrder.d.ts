// import { IProduct } from "./IProduct";
import { IUser } from "./user";
import { ISeller } from "./ISeller";

interface IItem {
  productId: string;
  count: number;
}
export interface ISendOrdersBody {
  buyerId: string;
  sellerId: string;
  totalValue: number;
  items: IItem[];
}

interface IPhoto {
  orderProductId: string;
  url: string;
  isCover: boolean;
  id: string;
}

interface IOrderProduct {
  originalProductId: string;
  name: string;
  manufacturer: string;
  description: string;
  value: number;
  photos: Photo[];
  id: string;
}

interface IOrderItemResponse {
  orderId: string;
  orderProductId: string;
  count: number;
  orderProduct: OrderProduct;
  id: string;
}

// export interface IOrder {
//   buyer: IUser;
//   orderNumber: string;
//   buyerId: string;
//   createdAt: string;
//   id: string;
//   items: IItem[];
//   seller: ISeller;
//   sellerId: string;
//   status: string;
//   updatedAt: string;
// }
export interface IOrder {
  orderNumber: string;
  buyerId: string;
  createdAt: string;
  id: string;
  items: IItem[];
  sellerId: string;
  status: string;
  updatedAt: string;
}

export interface IOrderResponse {
  buyer: IUser;
  orderNumber: string;
  buyerId: string;
  createdAt: string;
  id: string;
  items: IOrderItemResponse[];
  seller: ISeller;
  sellerId: string;
  status: string;
  updatedAt: string;
}

export interface IOrdersQuery {
  sellerId?: string;
  buyerId?: string;
  pendingOnly?: boolean;
  pageSize?: number;
  page?: number;
}
