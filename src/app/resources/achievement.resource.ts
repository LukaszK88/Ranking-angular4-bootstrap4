import { Injectable } from '@angular/core';
import { apiBase } from './../services/api'
import { Resource, ResourceCRUD , ResourceParams, ResourceAction, ResourceMethod } from 'ngx-resource';
import { RequestMethod } from '@angular/http';

@Injectable()
@ResourceParams({
  url: apiBase + 'achievement'
})
export class AchievementResource extends ResourceCRUD<any, any, any> {}
