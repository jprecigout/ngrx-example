import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer-create-civility',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-create-civility.component.html',
  styleUrls: ['./customer-create-civility.component.css']
})
export class CustomerCreateCivilityComponent implements OnInit {

  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
