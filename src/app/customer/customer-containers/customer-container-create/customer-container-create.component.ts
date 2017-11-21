import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../customer.model';
import * as fromCustomer from '../../reducers/customer.reducer';
import * as actions from '../../actions/customer.action';

@Component({
  selector: 'app-customer-container-create',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-container-create.component.html',
  styleUrls: ['./customer-container-create.component.css']
})
export class CustomerContainerCreateComponent implements OnInit {

  customer$: Observable<any>;

  constructor(private store: Store<fromCustomer.CustomerState>) { }

  ngOnInit() {
    this.customer$ = this.store.select(fromCustomer.selectAll);
  }

  customerCreate(event: any) {
    const customer: Customer = {
      firstname: event.firstname,
      lastname: event.lastname,
      numcustomer: event.numcustomer,
      phone: event.phone,
      mail: event.mail,
      address : {
        number: event.numberstreet,
        street: event.street,
        zipcode: event.zipcode,
        city: event.city
      }
    };

    this.store.dispatch( new actions.CreateCustomerAction(customer));
  }

}
