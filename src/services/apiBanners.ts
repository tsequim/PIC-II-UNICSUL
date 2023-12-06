import { apiConfig } from "./apiConfig";

export const getBanners = async () => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/banners`)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const getBannerById = async (id: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/banners/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};
