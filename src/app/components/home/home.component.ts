import { Component, OnInit } from '@angular/core';
import { GuardService } from '../../services/guard.service';
import { tokenNotExpired } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser:any;
  admin:boolean;
  constructor(protected guard:GuardService) { 
    if(tokenNotExpired('currentUser')){
     this.guard.getCurrentUser().subscribe(
       (data) => {this.currentUser = data;
        if(this.currentUser.user_role_id == 3){
        this.currentUser.admin = 'admin';
      }
      }
     );
      
    }
    
  }

  ngOnInit() {
  }

  

}
