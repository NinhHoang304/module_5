import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from './component/facility/facility.component';
import {FacilityCreateComponent} from './component/facility-create/facility-create.component';
import {FacilityEditComponent} from './component/facility-edit/facility-edit.component';
import {CustomerComponent} from './component/customer/customer.component';
import {CustomerCreateComponent} from './component/customer-create/customer-create.component';
import {CustomerEditComponent} from './component/customer-edit/customer-edit.component';
import {ContractComponent} from './component/contract/contract.component';
import {ContractCreateComponent} from './component/contract-create/contract-create.component';
import {BodyContentComponent} from './component/body-content/body-content.component';


const routes: Routes = [
  {path: 'facility', component: FacilityComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'facility/edit/:id', component: FacilityEditComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'contract/create', component: ContractCreateComponent},
  {path: '', component: BodyContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
