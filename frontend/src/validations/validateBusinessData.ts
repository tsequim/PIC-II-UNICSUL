import { Notification } from "../components/Notifications";

export const validateBusinessData = (
  document: string,
  businessName: string,
  tradingName: string,
  contactEmail: string,
  contactPhone: string
) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const phoneRegex = /^\d+$/;

  // Validação do campo 'document'
  if (document.length !== 14 + 4) {
    Notification("Verifique o CNPJ antes de prosseguir.", "danger");
    return false;

    // Validação do campo 'businessName'
  } else if (businessName.trim() === "") {
    Notification("Verifique o nome fantasia antes de prosseguir.", "danger");
    return false;

    // Validação do campo 'tradingName'
  } else if (tradingName.trim() === "") {
    Notification("Verifique a razão social antes de prosseguir.", "danger");
    return false;

    // Validação do campo 'contactEmail'
  } else if (!emailRegex.test(contactEmail)) {
    Notification("Verifique o email antes de prosseguir.", "danger");
    return false;

    // Validação do campo 'contactPhone'
  } else if (!contactPhone) {
    Notification("Verifique o telefone antes de prosseguir.", "danger");
    return false;

    // Retorna válido se todas passarem
  } else {
    return true;
  }
};
