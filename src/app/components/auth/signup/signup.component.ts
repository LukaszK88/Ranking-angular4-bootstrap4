import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  signUpForm:FormGroup;
 

 constructor(
   protected userService:UserService,
   private toastrService: ToastrService,
   public dialog: MdDialog,
   private router: Router,
   fb: FormBuilder
) { 
  this.signUpForm = fb.group({
    "email": ["",Validators.required],
    "password":["",Validators.required]
  });

 }

  ngOnInit() {
  }

  public signupSuccess(data){
    this.toastrService.success(data.message);
    this.dialog.closeAll();
    location.reload();
  }

  public signUp(user){
      this.userService.signUp(user).subscribe(
      (data) =>  this.signupSuccess(data),
      (err) => this.toastrService.error(err.error.email[0])
    )};
  }

interface User{
  email:string;
  password:string;
}