import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api, apiBase } from './api'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Resource, ResourceParams, ResourceAction, ResourceMethod} from 'ngx-resource';
import {RequestMethod} from '@angular/http';

@Injectable()
@ResourceParams({
  url: apiBase 
})
export class RankingService extends Resource {

@ResourceAction({
    isArray: true,
    path:'fighters'
  })
  query: ResourceMethod<any, any>;

@ResourceAction({
    path:'fighters/{!id}'
})
get: ResourceMethod<{id: any}, any>;

@ResourceAction({
    isArray: false,
    path:'fighters-leaderboard'
  })
  getLeaderboard: ResourceMethod<any, any>;

}