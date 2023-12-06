export const phoneNumberMask = (telephone: string) => {
  if (telephone) {
    telephone = telephone.replace(/\D/g, "");

    // Check telephone length to apply specific mask
    if (telephone.length === 11) {
      telephone = telephone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (telephone.length === 10) {
      telephone = telephone.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    } else if (telephone.length === 9) {
      telephone = telephone.replace(/^(\d{5})(\d{4})$/, "$1-$2");
    } else if (telephone.length === 8) {
      telephone = telephone.replace(/^(\d{4})(\d{4})$/, "$1-$2");
    }

    return telephone;
  } else return telephone;
};
