import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import * as customer from './customersearch.action';

@Injectable()
export class CustomerSearchEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(customer.SEARCH)
    .debounceTime(300)
    .map(toPayload)
    .switchMap(query => {
      return this.customerService.searchCustomer(query)
              .map(customers => new customer.SearchCompleteCustomerAction(customers))
              .catch(() => of(new customer.SearchCompleteCustomerAction([])));
    });

  constructor(private actions$: Actions, private customerService: CustomerService) { }
}
