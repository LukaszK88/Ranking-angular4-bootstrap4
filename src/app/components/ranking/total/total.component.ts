import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: []
})
export class TotalComponent implements OnInit {
@Input() fighters:any[];
  constructor() { }

  ngOnInit() {
  }

}
