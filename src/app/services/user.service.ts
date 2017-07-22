import { Injectable } from '@angular/core';
import { Api } from './api'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Headers } from '@angular/http'
import { RequestOptions } from '@angular/http'
@Injectable()
export class UserService {

  constructor(
   protected api:Api
  ) { }

 

  private serverError(err: any) {
        //console.log('sever error:', err);  // debug
        if(err instanceof Response) {
          return Observable.throw(err.json() || 'backend server error');

        }
        return Observable.throw(err.json() || 'backend server error');
    }

  signUp(data){
   return this.api.post('user/store',data)
   .map(response => response.json())
   .catch(this.serverError);
  }

  login(data){
    return this.api.post('user/authenticate',data)
   .map(response => response.json())
   .catch(this.serverError);
  }

  loginFB(data){
    return this.api.post('login-facebook',data)
   .map(response => response.json())
   .catch(this.serverError);
  }


  loginG(data){
    return this.api.post('login-google',data)
   .map(response => response.json())
   .catch(this.serverError);
  }

  currentUser(){
   return this.api.get('user-current?token='+localStorage.getItem('currentUser'))
   .map(response => response.json())
   .catch(this.serverError);
  }

  logout(){
    localStorage.removeItem('currentUser');
    location.reload();
  }

}
