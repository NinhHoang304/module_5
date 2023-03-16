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
import { CustomerCreateComponent } from './component/customer-create/customer-create.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';
import { ContractCreateComponent } from './component/contract-create/contract-create.component';
import { BodyContentComponent } from './component/body-content/body-content.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

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
    FacilityEditComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractCreateComponent,
    BodyContentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
