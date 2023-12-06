interface IBuyersData {
  document: string;
  businessName: string;
  tradingName: string;
  contactEmail: string;
  contactPhone: string;
}

export interface IUpdateBuyersData {
  businessData: IBuyersData;
}

interface IBuyersAddress {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface IUpdateBuyersAddress {
  address: IBuyersAddress;
}
