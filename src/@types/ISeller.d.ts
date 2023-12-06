interface IBusinessData {
  document: string;
  businessName: string;
  tradingName: string;
  contactEmail: string;
  contactPhone: string;
  maxTermOrderValue: number;
  termOrderType: string;
}

interface IAddress {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface ISeller {
  businessData: IBusinessData;
  address: IAddress;
  logoUrl: string | ImageSourcePropType;
  onboardingDone: boolean;
  active: boolean;
  id: string;
}
