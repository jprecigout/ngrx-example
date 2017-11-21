import {
    CustomerContainerSearchComponent,
} from './customer-containers/customer-container-search/customer-container-search.component';
import {
    CustomerContainerEditComponent,
} from './customer-containers/customer-container-edit/customer-container-edit.component';
import {
    CustomerContainerCreateComponent,
} from './customer-containers/customer-container-create/customer-container-create.component';
import { Routes } from '@angular/router';

export const CUSTOMER_ROUTE: Routes = [
    {path: 'customer/create', component: CustomerContainerCreateComponent},
    {path: 'customer/edit/:customerId', component: CustomerContainerEditComponent},
    {path: 'customer/search', component: CustomerContainerSearchComponent}
];
