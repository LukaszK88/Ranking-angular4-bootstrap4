import { Injectable } from '@angular/core';
import { Api } from './api'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
   protected api:Api
  ) { }

  signUp(data){
    this.api.post('user/store',data).map(response => response.json());
  }

}
