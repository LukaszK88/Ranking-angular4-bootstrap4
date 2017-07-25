import { Component,Input, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';
import {UpdateSwordShieldComponent} from './update-sword-shield/update-sword-shield.component';



@Component({
  selector: 'app-sword-shield',
  templateUrl: './sword-shield.component.html',
  styleUrls: ['./sword-shield.component.css']
})
export class SwordShieldComponent implements OnInit {
@Input() fighters:any[];

  openedDialog:boolean;
  dialogRef:any;

  constructor(
    public dialog: MdDialog
  ) {
    
   }

  ngOnInit() {
  }

  update(fighter){
    if(!this.openedDialog){
      this.dialogRef = this.dialog.open(UpdateSwordShieldComponent,{
        data: {
          fighter:fighter,
          category: 'sword_shield'
        }
      });
        this.openedDialog = true;
    }

     this.dialogRef.afterClosed().subscribe(result => {
      this.openedDialog = false;
    })
  }
}
