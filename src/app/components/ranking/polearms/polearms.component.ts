import { Component,Input, OnInit } from '@angular/core';
import {UpdatePolearmComponent} from './update-polearm/update-polearm.component';
import { UpdateService } from '../update.service';
@Component({
  selector: 'app-polearms',
  templateUrl: './polearms.component.html'
})
export class PolearmsComponent implements OnInit {
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
      UpdatePolearmComponent,
      fighter,
      'polearm'
    )
 }
}

