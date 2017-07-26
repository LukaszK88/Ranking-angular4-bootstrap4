import { Component,Input, OnInit } from '@angular/core';
import {UpdateSwordBucklerComponent} from './update-sword-buckler/update-sword-buckler.component';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-sword-buckler',
  templateUrl: './sword-buckler.component.html'
})
export class SwordBucklerComponent implements OnInit {
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
      UpdateSwordBucklerComponent,
      fighter,
      'sword_buckler'
    )
 }
}
