import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sword-shield',
  templateUrl: './sword-shield.component.html',
  styleUrls: ['./sword-shield.component.css']
})
export class SwordShieldComponent implements OnInit {
@Input() fighters:any[];
  constructor() { }

  ngOnInit() {
  }

}
