import { Component ,Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MD_DIALOG_DATA } from '@angular/material';
import { UpdateService } from '../../update.service';

@Component({
  selector: 'app-update-longsword',
  templateUrl: './update-longsword.component.html'
})
export class UpdateLongswordComponent implements OnInit {

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
    console.log(record);
    this.updateService.update(record,this.data)
    .subscribe((data) => {console.log(data)});
  }

}
