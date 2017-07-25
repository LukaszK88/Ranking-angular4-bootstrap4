import { Injectable } from '@angular/core';
import { Api } from './api'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventService {

  constructor(
    protected api:Api
  ) { }

  getTournaments(){
    return this.api.get('event-type/1')
    .map(response => response.json())
    .catch(this.api.serverError);
  }
}
