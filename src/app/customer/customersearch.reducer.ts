import { Customer } from './customer.model';
import * as customer from './customersearch.action';

export interface CustomerSearchState {
  firstname: String;
  lastname: String;
  numcustomer: String;
  customers: Customer[];
}

const initialState: CustomerSearchState = {
  firstname: '',
  lastname: '',
  numcustomer: '',
  customers: []
};

export function customerSearchReducer(state = initialState, action: customer.Actions): CustomerSearchState {
  switch (action.type) {
    case customer.SEARCH: {
      const payload = action.payload;
      return Object.assign({}, state, payload);
    }
    case customer.SEARCHCOMPLETE: {
      const customersResult = action.payload;
      return Object.assign({}, state, {customers: customersResult});
    }
    default: {
      return state;
    }
  }
}
