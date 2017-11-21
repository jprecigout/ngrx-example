
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CustomerService } from './customer.service';
import { CityService } from '../shared/city/city.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerSearchResultComponent } from './customer-search-result/customer-search-result.component';
import { CustomerCreateCivilityComponent } from './customer-create-civility/customer-create-civility.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateFormComponent } from './customer-create-form/customer-create-form.component';
import { CustomerContainerSearchComponent } from './customer-containers/customer-container-search/customer-container-search.component';
import { CustomerContainerCreateComponent } from './customer-containers/customer-container-create/customer-container-create.component';
import { CustomerCreateAddressComponent } from './customer-create-address/customer-create-address.component';
import { CustomerSearchFormComponent } from './customer-search-form/customer-search-form.component';
import { CustomerContainerEditComponent } from './customer-containers/customer-container-edit/customer-container-edit.component';
import { RouterModule } from '@angular/router';
import { CUSTOMER_ROUTE } from './customer.routes';

import { customerSearchReducer } from './customersearch.reducer';
import { CustomerSearchEffects } from './customersearch.effect';

import { customerReducer } from './reducers/customer.reducer';

@NgModule({
  imports: [
    RouterModule.forRoot(CUSTOMER_ROUTE),
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('customer', customerSearchReducer),
    StoreModule.forFeature('customerCreate', customerReducer),
    EffectsModule.forFeature([CustomerSearchEffects]),
    AutoCompleteModule
  ],
  declarations: [
    CustomerSearchComponent,
    CustomerSearchResultComponent,
    CustomerCreateCivilityComponent,
    CustomerEditComponent,
    CustomerCreateFormComponent,
    CustomerContainerSearchComponent,
    CustomerContainerCreateComponent,
    CustomerCreateAddressComponent,
    CustomerSearchFormComponent,
    CustomerContainerEditComponent,
  ],
  providers: [
    CityService,
    CustomerService
  ],
  exports: [
    CustomerContainerCreateComponent,
    CustomerContainerSearchComponent,
    CustomerContainerEditComponent
  ]
})
export class CustomerModule { }
