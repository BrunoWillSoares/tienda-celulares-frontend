import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { PendingComponent } from './pending/pending.component';
import { AppRoutingModule } from './app-routing.module';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    FailComponent,
    PendingComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
