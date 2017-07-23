import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-polearms',
  templateUrl: './polearms.component.html',
  styleUrls: ['./polearms.component.css']
})
export class PolearmsComponent implements OnInit {
@Input() fighters:any[];
  constructor() { }

  ngOnInit() {
  }

}
