import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public collection_id!: string | null;
  public external_reference!: string | null;
  public paymentMethod_id!: string | null;
  

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const container = document.getElementById('main-container');
    const informacoes = document.getElementById('informacoes');
    if (container != null) {
      container.innerHTML = "";
    }
    
    this.collection_id = this._route.snapshot.queryParamMap.get('collection_id');
    this.external_reference = this._route.snapshot.queryParamMap.get('external_reference');
    this.paymentMethod_id = this._route.snapshot.queryParamMap.get('payment_type');

   // 
  }

}
