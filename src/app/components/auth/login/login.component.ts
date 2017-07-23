import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    protected userService:UserService,
    private toast: ToastrService,
    public dialog: MdDialog,
    private router: Router,
    fb: FormBuilder,
    protected authService:AuthService
  ) {
    this.loginForm = fb.group({
    "username": ["",Validators.required],
    "password":["",Validators.required]
  });
   }

  ngOnInit() {
  }

  public loginSuccess(data){
    this.toast.success('redirecting...',data.message);
    this.dialog.closeAll();
    if(data.token){
    setTimeout(() => {
      localStorage.setItem('currentUser',data.token);
      location.reload();
    },1500)
    }
  }

  public fbLogin(provider){
    this.authService.login(provider).subscribe(
      (data) => {this.userService.loginFB(data).subscribe(
        (data) => {this.loginSuccess(data)}
      )}
    )
  }

  public gLogin(provider){
    this.authService.login(provider).subscribe(
      (data) => {this.userService.loginG(data).subscribe(
        (data) => {this.loginSuccess(data)}
      )}
    )
  }

  public login(user){
    this.userService.login(user).subscribe(
      (data) =>  this.loginSuccess(data),
      (err) => this.toast.error(err.error)
    )
  }

}
