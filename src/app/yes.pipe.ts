import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yes'
})
export class YesPipe implements PipeTransform {

  transform(repeated: number): string {
    return (repeated / (1024 * 1024)).toFixed(2) + 'MB';


  }

}
