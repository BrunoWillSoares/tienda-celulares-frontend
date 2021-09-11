import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from './celular';
import { CelularService } from './celular.service';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethod } from './paymentMethod';
import { Preference } from './preference';
import { PreferenceService } from './preference.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-celulares-frontendapp';

  public selectedCelular!: Celular;
  public paymentMethods: PaymentMethod[] | undefined;
  public celulares: Celular[] | undefined;
  public preference: Preference | undefined;


  constructor(private celularService: CelularService, 
              private paymentMethodService: PaymentMethodService, 
              private preferenceService: PreferenceService,
              private router: Router) { }


  ngOnInit() {
    this.getCelulares();
    //this.getPaymentMethods();
  }

  public getCelulares(): void {
    this.celularService.getCelulares().subscribe(
      (response: Celular[]) => {
        this.celulares = response;
        //console.log(this.celulares);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public getPaymentMethods(): void {
    this.paymentMethodService.getPaymentMethods().subscribe(
      (response: PaymentMethod[]) => {
        this.paymentMethods = response;
        //console.log(this.paymentMethods);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getPreference(celular: Celular): Preference {
    this.preferenceService.getPreferencias(celular).toPromise()
    .then(
      (response: Preference) => {
        
        if (response != undefined && response != null && response.id != null) {
          window.location.href = response.init_point;
        
        }else{
          alert('Falha no processo de pagamento. Tente novamente, por favor!');
        }
        console.log(response);
        return response;
      })
      .catch(
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    return null as any;
  }

  public onOpenModal(celular: Celular): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#modalBuyConfirmation');

    container?.appendChild(button);
    button.click();
    this.selectedCelular = celular;
    const confirmation_text = document.getElementById('confirmation-text');
    if (confirmation_text != null) {
      confirmation_text.innerHTML = "Confirma a compra do " + this.selectedCelular.modelo;
    }

  }

  public onBuyProduct() {
    this.getPreference(this.selectedCelular);
  }

}
