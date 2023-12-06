import {
  IBuyersData,
  IUpdateBuyersAddress,
  IUpdateBuyersData,
} from "../../frontend/src/@types/buyers";
import { apiConfig } from "./apiConfig";

export const getBuyersById = async (id: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/buyers/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const updateBuyersData = async (id: string, data: IUpdateBuyersData) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .put(`/buyers/${id}/data`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const updateBuyersAddress = async (
  id: string,
  data: IUpdateBuyersAddress
) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .put(`/buyers/${id}/address`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};
