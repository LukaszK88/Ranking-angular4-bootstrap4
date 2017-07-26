import { Component,Input, OnInit } from '@angular/core';
import {UpdateTriathlonComponent} from './update-triathlon/update-triathlon.component';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-triathlon',
  templateUrl: './triathlon.component.html',
  styleUrls: ['./triathlon.component.css']
})
export class TriathlonComponent implements OnInit {
@Input() fighters:any[];
 
  openedDialog:boolean;
  dialogRef:any;

  constructor(
     protected updateService: UpdateService
  ) {
    
   }

  ngOnInit() {
  }

  openUpdate(fighter){
    this.updateService.openUpdate(
      this.openedDialog,
      this.dialogRef,
      UpdateTriathlonComponent,
      fighter,
      'triathlon'
    )
 }
}
