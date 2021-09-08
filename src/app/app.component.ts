import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Celular } from './celular';
import { CelularService } from './celular.service';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethod } from './paymentMethod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-celulares-frontendapp';

  public paymentMethods: PaymentMethod[] | undefined;
  public celulares: Celular[] | undefined;


  //constructor(private paymentMethodService: PaymentMethodService){}
  constructor (private celularService: CelularService, private paymentMethodService: PaymentMethodService){}


  ngOnInit(){
    this.getCelulares();
    this.getPaymentMethods();
  }

  public getCelulares(): void {
    this.celularService.getCelulares().subscribe(
      (response: Celular[]) => {
        this.celulares = response;
        console.log(this.celulares);
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }
    );
  }


  public getPaymentMethods(): void {
    this.paymentMethodService.getPaymentMethods().subscribe(
      (response: PaymentMethod[]) => {
        this.paymentMethods = response;
        console.log(this.paymentMethods);
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }
    );
  }
}
