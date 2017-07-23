import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform(value: any, args: any = null): any {
    if(!!value){
      return Object.keys(value).map(key => value[key]);
    }
  }

}
