import { ISellersQuery } from "../../frontend/src/@types/sellers";
import { apiConfig } from "./apiConfig";

export const getSellers = async (query: ISellersQuery) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get("/sellers", {
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

export const getSellerById = async (id: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/sellers/${id}`)
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
