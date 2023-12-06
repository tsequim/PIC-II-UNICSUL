import { apiConfig } from "./apiConfig";

import { IOrdersQuery, ISendOrdersBody } from "../@types/IOrder";

export const getOrders = async (query: IOrdersQuery) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get("/orders", {
        params: { ...query },
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

export const getOrderById = async (id: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/orders/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const sendOrder = async (body: ISendOrdersBody) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post("/orders", body)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const editOrder = async (id: string, body: any) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .put(`/orders/${id}`, body)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};
