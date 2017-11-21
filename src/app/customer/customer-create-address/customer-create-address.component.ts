import { CityService } from '../../shared/city/city.service';
import { City } from '../../shared/city/city.model';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-customer-create-address',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer-create-address.component.html',
  styleUrls: ['./customer-create-address.component.css']
})
export class CustomerCreateAddressComponent implements OnInit {

  @Input()
  parent: FormGroup;

  filteredCity$: Observable<City[]>;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  private filterCity(event) {
    this.filteredCity$ = this.cityService.find(event.query);
  }

  private selectCity(event) {
    this.parent.controls.city.setValue(event.city);
  }

  private unselectCity(event) {
    if (event.zip === '') {
      this.parent.controls.city.setValue('');
    }
  }

}
