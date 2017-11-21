import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer-create-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-create-form.component.html',
  styleUrls: ['./customer-create-form.component.css']
})
export class CustomerCreateFormComponent implements OnInit {

  @Output()
  customerCreate = new EventEmitter<FormGroup>();

  form = this.fb.group({
    firstname: this.fb.control('', [Validators.required, Validators.maxLength(50)]),
    lastname: this.fb.control('', [Validators.required, Validators.maxLength(50)]),
    email: [''],
    phone: [''],
    numberstreet: [''],
    street: [''],
    zipcode: this.fb.control('', [Validators.required, Validators.maxLength(5)]),
    city: [''],
  });

  @Input() customer(value: any) {
    this.form.patchValue({
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      phone: value.form,
      numberstreet: value.numberstreet,
      street: value.street,
      zipcode: value.zipcode,
      city: value.city,
    });
  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.invalid) { return; }
    this.customerCreate.emit(this.form.value);
  }

  ngOnInit() {}


}
