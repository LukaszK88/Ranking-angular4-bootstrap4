import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bohurt',
  templateUrl: './bohurt.component.html',
  styleUrls: []
})
export class BohurtComponent implements OnInit {
@Input() fighters:any[];
  constructor() { }

  ngOnInit() {
  }

}
