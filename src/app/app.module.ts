import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { ListPaymentComponent } from './payment/list-payment/list-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPaymentComponent,
    ListPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
