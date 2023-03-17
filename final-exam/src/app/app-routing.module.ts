import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './component/customer/customer.component';
import {CustomerCreateComponent} from './component/customer-create/customer-create.component';
import {CustomerEditComponent} from './component/customer-edit/customer-edit.component';


const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit/:id', component: CustomerEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
