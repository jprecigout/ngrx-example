import { CustomerService } from '../../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../customer.model';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-container-edit',
  templateUrl: './customer-container-edit.component.html',
  styleUrls: ['./customer-container-edit.component.css']
})
export class CustomerContainerEditComponent implements OnInit, OnDestroy {

  public customer: Customer;
  private routeSub: any;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe (params => {
      const id = +params['customerId']; // (+) converts string 'id' to a number
      this.customer = this.customerService.getCustomer(id);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
