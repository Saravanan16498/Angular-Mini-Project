import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  username:string = "";
  amount:number;
  cardNumber:number;
  constructor(private paymentSer: PaymentService) {

   } 
  ngOnInit() {
  }
}
