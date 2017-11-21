import { createFeatureSelector } from '@ngrx/store';
import { Customer } from '../customer.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as customerActions from '../actions/customer.action';

export const customerAdapter = createEntityAdapter<Customer>();
export interface CustomerState extends EntityState<Customer> { }

const defaultCustomer = {
  ids: [],
  entities: {}
};

export const initialState: CustomerState = customerAdapter.getInitialState(defaultCustomer);

export function customerReducer(state: CustomerState = initialState, action: customerActions.CustomerActions): CustomerState {
  switch (action.type) {
    case customerActions.CREATE_CUSTOMER:
      return customerAdapter.addOne(action.customer, state);
    case customerActions.UPDATE_CUSTOMER:
      return customerAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);
    default:
      return state;
  }
}

export const getCustomerState = createFeatureSelector<CustomerState>('customerC');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = customerAdapter.getSelectors(getCustomerState);
