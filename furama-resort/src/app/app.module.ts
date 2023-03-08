import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FacilityListComponent } from './component/facility-list/facility-list.component';
import { FacilityEditComponent } from './component/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './component/facility-create/facility-create.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './component/customer-create/customer-create.component';
import { ContractComponent } from './component/contract/contract.component';
import { ContractCreateComponent } from './component/contract-create/contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
