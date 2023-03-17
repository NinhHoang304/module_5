import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './component/customer/customer.component';
import { CustomerTypeComponent } from './component/customer-type/customer-type.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustomerCreateComponent } from './component/customer-create/customer-create.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerTypeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CustomerCreateComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
