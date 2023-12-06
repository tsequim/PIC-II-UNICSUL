interface IBusinessData {
  document?: string;
  businessName?: string;
  tradingName?: string;
  contactEmail?: string;
  contactPhone?: string;
}

interface IAdress {
  zipCode?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

export interface IUser {
  id?: string;
  username?: string;
  password?: string;
  mailValidation?: boolean;
  onboardingDone?: boolean;
  businessData?: IBusinessData;
  address?: IAdress;
}
