import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const container = document.getElementById('main-container');
    if (container != null) {
      container.innerHTML = "";
    }
  }

}
