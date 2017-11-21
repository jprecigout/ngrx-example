import { Customer } from '../customer.model';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  @Input()
  customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
