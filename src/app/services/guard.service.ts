import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class GuardService {

  constructor(
    protected user:UserService
  ) { }

  getCurrentUser(){
    if(localStorage.getItem('currentUser')){
        return this.user.currentUser();
    }
  }

}
