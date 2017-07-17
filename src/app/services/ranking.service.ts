import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api'
import 'rxjs/add/operator/map';

@Injectable()
export class RankingService {

  constructor(
    public api: Api
  ) { }

  getAllFighters(){
    return this.api.get('fighters')
    .map(response => response.json());
    }
}
