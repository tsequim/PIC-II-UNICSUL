import { apiConfig } from "./apiConfig";

import { IProductQuery } from "../../frontend/src/@types/IProduct";

export const getProducts = async (query: IProductQuery) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get("/products", {
        params: { ...query, active: true },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const getProductPhotos = async (productId: number) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/products/${productId}/photos`)
      .then((response) => {
        const { data } = response;
        resolve(data);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};
