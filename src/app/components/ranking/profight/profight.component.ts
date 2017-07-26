import { Component,Input, OnInit } from '@angular/core';
import {UpdateProfightComponent} from './update-profight/update-profight.component';
import { UpdateService } from '../update.service';
@Component({
  selector: 'app-profight',
  templateUrl: './profight.component.html'
})
export class ProfightComponent implements OnInit {
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
      UpdateProfightComponent,
      fighter,
      'profight'
    )
 }
}
