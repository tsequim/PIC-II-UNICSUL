export const calcTotalValue = (array: any, propriedade: any) => {
  return array.reduce(function (total: number, objeto: any) {
    if (objeto[propriedade]) {
      return total + objeto[propriedade];
    } else {
      return total;
    }
  }, 0);
};
