import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api, apiBase } from './../services/api'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Resource, ResourceCRUD , ResourceParams, ResourceAction, ResourceMethod} from 'ngx-resource';
import {RequestMethod} from '@angular/http';

@Injectable()
@ResourceParams({
  url: apiBase + 'achievement'
})
export class AchievementResource extends ResourceCRUD<any, any, any> {
  // @ResourceAction({
  //   path: '/{!id}',
  // })
  // getAchievement: ResourceMethod<any, any>;
}
