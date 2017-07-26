import { Component,Input, OnInit } from '@angular/core';
import {UpdateLongswordComponent} from './update-longsword/update-longsword.component';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-longsword',
  templateUrl: './longsword.component.html'
})
export class LongswordComponent implements OnInit {
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
      UpdateLongswordComponent,
      fighter,
      'longsword'
    )
 }
}
