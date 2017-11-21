import { ActionReducerMap } from '@ngrx/store';
import { customerReducer } from './customer.reducer';
import { customerSearchReducer } from '../customersearch.reducer';

export const reducers: ActionReducerMap<any> = {
  customer: customerReducer,
  customerSearch: customerSearchReducer
}
