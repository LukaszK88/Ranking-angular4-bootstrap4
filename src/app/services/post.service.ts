import { Injectable } from '@angular/core';
import { Api } from './api'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

  constructor(
    protected api:Api
  ) { }

  getPostsByType(type){
    return this.api.get('posts/'+type)
    .map(response => response.json())
    .catch(this.api.serverError);
  }

}
