export const cepMask = (cep: string) => {
  if (cep) {
    cep = cep.replace(/\D/g, "");

    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");

    return cep;
  } else return cep;
};
