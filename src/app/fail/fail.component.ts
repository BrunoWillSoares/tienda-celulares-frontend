import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const container = document.getElementById('main-container');
    if (container != null) {
      container.innerHTML = "";
    }
  }

}
