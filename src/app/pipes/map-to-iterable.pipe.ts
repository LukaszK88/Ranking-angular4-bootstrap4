import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform(value: any, args: any = null): any {
    if(!!value){
      let array:any[];
      for(let key in value){
          if(key.indexOf('$') > -1){
            delete value[key];
          }
      }
      return Object.keys(value).map(key => value[key]);
    }
  }

}
