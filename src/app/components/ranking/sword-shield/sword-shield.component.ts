import { Component,Input, OnInit } from '@angular/core';
import {UpdateSwordShieldComponent} from './update-sword-shield/update-sword-shield.component';
import { UpdateService } from '../update.service';



@Component({
  selector: 'app-sword-shield',
  templateUrl: './sword-shield.component.html'
})
export class SwordShieldComponent implements OnInit {
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
      UpdateSwordShieldComponent,
      fighter,
      'sword_shield'
    )
 }
}
