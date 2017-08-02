import { Component, OnInit } from '@angular/core';
import { GuardService } from '../../services/guard.service';
import { tokenNotExpired } from 'angular2-jwt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {

  currentUser:any;

  constructor(
    protected toast:ToastrService,
    protected guard:GuardService,
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
  }

  ngOnInit() {
  }

}
