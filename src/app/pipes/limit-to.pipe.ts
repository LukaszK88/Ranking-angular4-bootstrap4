import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    return (value.toString()).substring(0,args);
  }

}
