import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-longsword',
  templateUrl: './longsword.component.html',
  styleUrls: ['./longsword.component.css']
})
export class LongswordComponent implements OnInit {
@Input() fighters:any[];
  constructor() { }

  ngOnInit() {
  }

}
