import { Injectable } from '@angular/core'
import { flatten } from '@angular/compiler';
@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    paymentData: object[] = [{ uname: "saravanan", amt: 1000, cdNumber: 1234567890 },
    { uname: "anbu", amt: 10000, cdNumber: 1234567891 },
    { uname: "abarna", amt: 50000, cdNumber: 1234567892 }
    ];
    userData: {[key:string]:any};
    tempUserData:{[key:string]:any};
    deleteMsg:boolean = false;
    updateMsg:boolean = false;
    isUpdateEnable:boolean = false;
    isAddBtnEnable:boolean = false;
    index:number;
    addPayment(username, amount, cardNumber) {

        this.userData = { uname: username.toLowerCase().trim(), amt: amount, cdNumber: cardNumber };
        if (this.paymentData.length == 0) {
            this.paymentData.push(this.userData);
        } else {
            let flag = false;
            this.paymentData.forEach((data) => {
                this.tempUserData = data;
                if (this.tempUserData.cdNumber == this.userData.cdNumber) {
                    flag = true;
                }
            });
            if (flag) {
                alert("Already user available. Try another")
            } else {
                this.paymentData.push(this.userData);
            }
        }

    }
    doDeleteUser(index) {
        this.paymentData.splice(index, 1);
        this.deleteMsg = true;
        this.updateMsg = false;
    }
    doEditUser(index) {
        this.isUpdateEnable = true;
        this.index = index;
        this.tempUserData = this.paymentData[index];
    }
    doUpdate(username, amount, cardNumber){
        this.tempUserData = this.paymentData[this.index];
        this.tempUserData.uname = username.toLowerCase().trim();
        this.tempUserData.amt = amount;
        this.tempUserData.cdNumber = cardNumber;
        this.isUpdateEnable = false;
        this.deleteMsg = false;
        this.updateMsg = true;
    }
}