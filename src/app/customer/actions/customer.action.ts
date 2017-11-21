
import { Customer } from '../customer.model';
import { Action } from '@ngrx/store';

export const CREATE_CUSTOMER = '[Customer] Create';
export const UPDATE_CUSTOMER = '[Customer] Update';

export class CreateCustomerAction implements Action {
  readonly type = CREATE_CUSTOMER;
  constructor(public customer: Customer) {}
}

export class UpdateCustomerAction implements Action {
  readonly type = UPDATE_CUSTOMER;
  constructor(public id: string, public changes: Partial<Customer>) {}
}

export type CustomerActions
  = CreateCustomerAction
  | UpdateCustomerAction;
