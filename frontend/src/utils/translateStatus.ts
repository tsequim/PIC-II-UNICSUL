export const translateStatus = (status: string) => {
  if (status) {
    switch (status) {
      case "Pending":
        return "Pendente";
      case "Canceled":
        return "Cancelado";
      case "Completed":
        return "Concluído";
    }
  }
};
