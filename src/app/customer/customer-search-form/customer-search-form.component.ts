import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-search-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-search-form.component.html',
  styleUrls: ['./customer-search-form.component.css']
})
export class CustomerSearchFormComponent implements OnInit {

  @Output()
  customerSearch = new EventEmitter<FormGroup>();

  @Input()
  set firstname(value: any) {
    this.form.patchValue({
      firstname: value
    });
  }
  @Input()
  set lastname(value: any) {
    this.form.patchValue({
      lastname: value
    });
  }
  @Input()
  set numcustomer(value: any) {
    this.form.patchValue({
      numcustomer: value
    });
  }

  form = this.fb.group({
    firstname: [''],
    lastname: [''],
    numcustomer: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form.invalid) { return; }
    this.customerSearch.emit(this.form.value);
  }

}
