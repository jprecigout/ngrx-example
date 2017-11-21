import { Customer } from './customer.model';
import { Action } from '@ngrx/store';


export const SEARCH = '[Customer] Search';
export const SEARCHCOMPLETE = '[Customer] Search Complete';

export interface SearchCustomerPayload {
  firstname?: string;
  lastname?: string;
  numcustomer?: string;
}

export class SearchCustomerAction implements Action {
  readonly type = SEARCH;
  constructor(public payload: SearchCustomerPayload) {}
}

export class SearchCompleteCustomerAction implements Action {
  readonly type = SEARCHCOMPLETE;
  constructor(public payload: Customer[]) {}
}

export type Actions
  = SearchCustomerAction
  | SearchCompleteCustomerAction;
