import { Component, OnInit } from '@angular/core';
import { GuardService } from '../../../services/guard.service';
import { tokenNotExpired } from 'angular2-jwt';
import { AdminService } from '../../../services/admin.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html'
})
export class AdminPanelComponent implements OnInit {
  currentUser:any;
  unauthorisedUsers:any[];
  blockedUsers:any[];

  constructor(
    protected toast:ToastrService,
    protected guard:GuardService,
    protected adminService:AdminService
  ) { 
    if(tokenNotExpired('currentUser')){
     this.guard.getCurrentUser().subscribe(
       (data) => {this.currentUser = data;
        if(this.currentUser.user_role_id == 3){
        this.currentUser.admin = true ;
      }
      }
     );
    }
    this.getPendingUsers();
  }

  ngOnInit() {
  }

  getPendingUsers(){
    this.adminService.getPendingUsers()
      .subscribe(
        (data) => {this.unauthorisedUsers = data.unauthorised;
                    this.blockedUsers = data.blocked          
        }
      )
  }

  adminAction(user,action){
    this.adminService.adminAction(user.id,action)
    .subscribe(
        (data) => {this.toast.success(data.message);
                  this.getPendingUsers(); 
        }
      )
  }

}
