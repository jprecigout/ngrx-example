import { SearchCustomerPayload } from './customersearch.action';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Customer } from './customer.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';


export interface State {
  firstname: String;
  lastname: String;
  numcustomer: String;
  customers: Customer[];
}

const state: State = {
  firstname: '',
  lastname: '',
  numcustomer: '',
  customers: []
};

@Injectable()
export class CustomerService {

  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable().distinctUntilChanged();

  constructor() { }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  search(firstname: String, lastname: String, numcustomer: String) {

    const result = [
      {numcustomer: '1', firstname: 'john', lastname: 'doo'},
      {numcustomer: '2', firstname: 'marco', lastname: 'polo'},
      {numcustomer: '3', firstname: 'christophe', lastname: 'colomb'}
    ];

    // const value = this.subject.value;
    this.subject.next({ firstname: firstname, lastname: lastname, numcustomer: numcustomer, customers: result});
  }

  searchCustomer(searchPayload: SearchCustomerPayload): Observable<Customer[]> {
    const result = [
      {numcustomer: '1', firstname: 'john', lastname: 'doo'},
      {numcustomer: '2', firstname: 'marco', lastname: 'polo'},
      {numcustomer: '3', firstname: 'christophe', lastname: 'colomb'}
    ];

    return Observable.of(result);
  }

  getCustomer(id: Number): Customer {
    return {firstname: 'Marco', lastname: 'Polo', numcustomer: '2', phone: '0656565656', mail: 'test@test.com',
    address: {number: '1', street: 'rue du parc', zipcode: '16000', city: 'angouleme'} };
  }
}
