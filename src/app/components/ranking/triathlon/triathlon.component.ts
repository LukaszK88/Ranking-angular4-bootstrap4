import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-triathlon',
  templateUrl: './triathlon.component.html',
  styleUrls: ['./triathlon.component.css']
})
export class TriathlonComponent implements OnInit {
@Input() fighters:any[];
  constructor() { }

  ngOnInit() {
  }

}
