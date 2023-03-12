import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { FacilityComponent } from './component/facility/facility.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ContractComponent } from './component/contract/contract.component';
import { FacilityCreateComponent } from './component/facility-create/facility-create.component';
import { FacilityEditComponent } from './component/facility-edit/facility-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FacilityComponent,
    CustomerComponent,
    ContractComponent,
    FacilityCreateComponent,
    FacilityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
