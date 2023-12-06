export const formatPrice = (price: number | string) => {
  if (price) {
    price = Number(price);
    var reais = Math.floor(price / 100);
    var centavosRestantes = price % 100;
    return reais + "," + centavosRestantes.toString().padStart(2, "0");
  }
};
