import { Component,Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MdDialog,MdDialogRef } from '@angular/material';
import { EventService } from '../../../../services/event.service';
import { RankingService } from '../../../../services/ranking.service';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-sword-shield',
  templateUrl: './update-sword-shield.component.html',
  styleUrls: ['./update-sword-shield.component.css']
})
export class UpdateSwordShieldComponent implements OnInit {

  dialogRef:any;
  updateRecord:FormGroup;
  events:any[];

  constructor(
    public dialog: MdDialog,
    protected event: EventService,
    protected ranking: RankingService,
    fb: FormBuilder,
    @Inject(MD_DIALOG_DATA) public data: any
  ) {
    this.getTournaments();

    this.updateRecord = fb.group({
    "event_id": ["",Validators.required],
    "win": [""],
    "loss": [""]
  });
   }

  ngOnInit() {
  }

  getTournaments(){
    this.event.getTournaments().subscribe(
      (data) =>{this.events = data}
    )
  }

  update(record){
    record.user_id = this.data.fighter.id;
    this.ranking.saveRankingRecord(this.data.category,record).subscribe(
      (data) => {console.log(data)},
      (error) => {console.log(error)}
    )
    this.dialog.closeAll();
  }

}
