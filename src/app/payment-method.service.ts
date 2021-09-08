import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PaymentMethod } from './paymentMethod';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class PaymentMethodService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient){}

  public getPaymentMethods():Observable<PaymentMethod[]>{
      return this.http.get<PaymentMethod[]>(`${this.apiServerUrl}/celular/buy/payments`);
  }
}