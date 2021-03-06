import { Component,Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MD_DIALOG_DATA } from '@angular/material';
import { UpdateService } from '../../update.service';

@Component({
  selector: 'app-update-bohurt',
  templateUrl: './update-bohurt.component.html'
})
export class UpdateBohurtComponent implements OnInit {

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
    "won": [""],
    "down": [""],
    "last": [""],
    "suicide": [""]
  });
   }

  ngOnInit() {
  }

  update(record){
    this.updateService.update(record,this.data);
  }

}
