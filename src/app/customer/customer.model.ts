import { Address } from './address.model';
export class Customer {
    constructor(
      public id?: number,
      public firstname?: string,
      public lastname?: string,
      public numcustomer?: string,
      public phone?: string,
      public mail?: string,
      public address?: Address
    ) {}
}
