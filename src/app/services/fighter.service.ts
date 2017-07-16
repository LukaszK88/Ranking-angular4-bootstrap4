import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FighterService {

  constructor(
    public http:Http
  ) {

   }

   getFighters(){
    return this.http.get('http://www.whitecompanymedieval.com/api/fighters')
    .map(response => response.json());
    
   }
}
