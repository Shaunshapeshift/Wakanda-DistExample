export interface Product {
  house: string;
  description: string;
  brandLine: string;
  articleType: string;
  irc: string;
  group: string;
}

export interface Price {
  irc: string;
  description: string;
  billingPrice: number;
  rrsp: number;
}

export interface Distributor {
  name: string;
  customerNumber: string;
  currency: string;
  prices: Price[];
}