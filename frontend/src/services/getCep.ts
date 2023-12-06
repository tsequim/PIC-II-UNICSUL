import axios from "axios";

export const getAddressByZipCode = async (zipCode: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://viacep.com.br/ws/${zipCode}/json/`)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};
