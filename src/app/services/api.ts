import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
 // url: string = 'http://www.whitecompanymedieval.com/api/';
url: string = 'http://whitecompany.com/api/';
  constructor(public http: Http) {
  }

  public serverError(err: any) {
        //console.log('sever error:', err);  // debug
        if(err instanceof Response) {
          return Observable.throw(err.json() || 'backend server error');

        }
        return Observable.throw(err.json() || 'backend server error');
    }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    return this.http.get(this.url + endpoint, options);
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + endpoint, body, options);
  }
}
