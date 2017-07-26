import { Component,Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MD_DIALOG_DATA } from '@angular/material';
import { UpdateService } from '../../update.service';

@Component({
  selector: 'app-update-polearm',
  templateUrl: './update-polearm.component.html'
})
export class UpdatePolearmComponent implements OnInit {

  dialogRef:any;
  updateRecord:FormGroup;
  events:any[];

  constructor(
    protected updateService: UpdateService,
    fb: FormBuilder,
    @Inject(MD_DIALOG_DATA) public data: any
  ) {
    this.updateService.getTournaments((data) => {
        this.events = data;
    });

    this.updateRecord = fb.group({
    "event_id": ["",Validators.required],
    "win": [""],
    "loss": [""]
  });
   }

  ngOnInit() {
  }

  update(record){
    this.updateService.update(record,this.data);
  }

}
