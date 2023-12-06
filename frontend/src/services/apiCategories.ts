import { apiConfig } from "./apiConfig";

export const getCategories = async () => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get("/categories")
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const getCategoriesById = async (id: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/categories/${id}`)
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
