import { Component, Input, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {SignupComponent} from '../../auth/signup/signup.component';
import {LoginComponent} from '../../auth/login/login.component';
import { EditProfileComponent } from '../../user/edit-profile/edit-profile.component';
import {GuardService} from '../../../services/guard.service';

import {UserService} from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

@Input() currentUser:any;

  openedDialog:boolean;
  dialogRef:any;

  constructor(
    protected user:UserService,
    protected toast:ToastrService,     
    public dialog: MdDialog

  ) {
  this.openedDialog = false;
   }

  ngOnInit() {
  }



  logout(){
    this.toast.info('Redirecting...','You are being logged out');
    setTimeout(() => {
      this.user.logout();
      },1500)
  }
  
  openLogin(key) {
    if(!this.openedDialog){
      
     this.dialogRef = this.dialog.open(LoginComponent);
        this.openedDialog = true;
    }

     this.dialogRef.afterClosed().subscribe(result => {
      this.openedDialog = false;
    })
  }

  openSignup(key) {
    if(!this.openedDialog){
      
     this.dialogRef = this.dialog.open(SignupComponent);
        this.openedDialog = true;
    }

    this.dialogRef.afterClosed().subscribe(result => {
      this.openedDialog = false;
    })
    
  }

  openEditProfile(key) {
    if(!this.openedDialog){
      
     this.dialogRef = this.dialog.open(EditProfileComponent,{
       data: this.currentUser
     });
        this.openedDialog = true;
    }

    this.dialogRef.afterClosed().subscribe(result => {
      this.openedDialog = false;
    })
    
  }

}
