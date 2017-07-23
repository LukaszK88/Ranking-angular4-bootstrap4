import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sword-buckler',
  templateUrl: './sword-buckler.component.html',
  styleUrls: ['./sword-buckler.component.css']
})
export class SwordBucklerComponent implements OnInit {
@Input() fighters:any[];
  constructor() { }

  ngOnInit() {
  }

}
