import { Component,Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MdDialog, MdDialogRef } from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html'
})
export class EditProfileComponent implements OnInit {

  editProfileForm:FormGroup;
  currentUser:any;

  constructor(
    protected userService:UserService,
    private toast: ToastrService,
    public dialog: MdDialog,
    fb: FormBuilder,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { 
    this.editProfileForm = fb.group({
    "name": ["",Validators.required],
    "weight":[""],
    "age":[""],
    "quote":[""],
    "about":[""],
  });

    this.currentUser = data;
  }

  ngOnInit() {
  }

  updateProfile(){
    this.userService.updateUser(this.currentUser).subscribe(
      (data) => { this.toast.success(data.message)}
    )
  }

}
