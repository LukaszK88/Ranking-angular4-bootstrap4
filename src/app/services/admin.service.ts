import { Injectable } from '@angular/core';
import { Api } from './api'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdminService {

  constructor(
    protected api:Api
  ) { }

  getPendingUsers(){
    return this.api.get('admin')
    .map(response => response.json())
    .catch(this.api.serverError);
  }

  adminAction(userId, action){
    return this.api.get('admin/' + userId + '/' + action)
    .map(response => response.json())
    .catch(this.api.serverError);
  }

}
