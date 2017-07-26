import { Component,Input, OnInit } from '@angular/core';
import {UpdateBohurtComponent} from './update-bohurt/update-bohurt.component';
import { UpdateService } from '../update.service';
@Component({
  selector: 'app-bohurt',
  templateUrl: './bohurt.component.html',
  styleUrls: []
})
export class BohurtComponent implements OnInit {
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
      UpdateBohurtComponent,
      fighter,
      'bohurt'
    )
 }
}
