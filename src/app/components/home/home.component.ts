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
  test:string;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(protected guard:GuardService) { 
     if(this.loggedIn()){
       this.guard.getCurrentUser().subscribe(
         (data) => this.currentUser = data
       )
     }
  }

  ngOnInit() {
  }

  loggedIn(){
    return tokenNotExpired('currentUser');
  }

}
