import { Observable } from 'rxjs/Rx';
import { Customer } from '../../customer.model';
import { CustomerService } from '../../customer.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { CustomerSearchState } from '../../customersearch.reducer';

import * as customer from '../../customersearch.action';


@Component({
  selector: 'app-customer-container-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-container-search.component.html',
  styleUrls: ['./customer-container-search.component.css']
})
export class CustomerContainerSearchComponent implements OnInit {

  customers$: Observable<Customer[]>;

  numcustomer$: Observable<String>;
  lastname$: Observable<String>;
  firstname$: Observable<String>;

  constructor(private store: Store<CustomerSearchState>, private customerService: CustomerService) {
    const customerSelector = createFeatureSelector<CustomerSearchState>('customer');

    const customersSelector = createSelector(customerSelector, (s: CustomerSearchState) => s.customers);
    const firstnameSelector = createSelector(customerSelector, (s: CustomerSearchState) => s.firstname);
    const lastnameSelector = createSelector(customerSelector, (s: CustomerSearchState) => s.lastname);
    const numCustomerSelector = createSelector(customerSelector, (s: CustomerSearchState) => s.numcustomer);

    this.customers$ = store.select(customersSelector);
    this.firstname$ = store.select(firstnameSelector);
    this.lastname$ = store.select(lastnameSelector);
    this.numcustomer$ = store.select(numCustomerSelector);
  }

  ngOnInit() {}

  search(event: any) {
    this.store.dispatch(
      new customer.SearchCustomerAction({firstname: event.firstname, lastname: event.lastname, numcustomer: event.numcustomer})
    );
  }

}
