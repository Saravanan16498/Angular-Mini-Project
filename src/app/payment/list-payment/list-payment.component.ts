import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent implements OnInit {

  username: string = "";
  amount: number;
  cardNumber: number;
  editUser;
  constructor(private paymentSer: PaymentService) { }
  doEdit(index) {
    this.paymentSer.doEditUser(index);
    this.editUser = this.paymentSer.tempUserData;
    this.username = this.editUser.uname;
    this.amount = this.editUser.amt;
    this.cardNumber = this.editUser.cdNumber;
  }
  doUpdate(){
    this.paymentSer.doUpdate(this.username, this.amount, this.cardNumber);
  }
  ngOnInit() {
  }
}
