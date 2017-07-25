import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RankingService {

  constructor(
    public api: Api
  ) { }

  getAllFighters(){
    return this.api.get('fighters')
    .map(response => response.json());
  }

  getLeaderboard(){
    return this.api.get('fighters-leaderboard')
    .map(response => response.json())
    .catch(this.api.serverError)
  }

  saveRankingRecord(type,data){
    return this.api.post('fighters/'+type,data)
    .map(response => response.json())
    .catch(this.api.serverError)
  }
}
