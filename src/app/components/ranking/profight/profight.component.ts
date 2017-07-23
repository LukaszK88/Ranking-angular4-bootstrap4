import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profight',
  templateUrl: './profight.component.html',
  styleUrls: ['./profight.component.css']
})
export class ProfightComponent implements OnInit {
@Input() fighters:any[];
  constructor() { }

  ngOnInit() {
  }

}
