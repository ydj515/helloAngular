import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    SearchCustomerComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService], // service 
  bootstrap: [AppComponent]
})
export class AppModule { }
