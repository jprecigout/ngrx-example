import { Customer } from '../customer.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-search-result',
  templateUrl: './customer-search-result.component.html',
  styleUrls: ['./customer-search-result.component.css']
})
export class CustomerSearchResultComponent implements OnInit {

  @Input()
  customers: Customer[];

  constructor() { }

  ngOnInit() {}

}
