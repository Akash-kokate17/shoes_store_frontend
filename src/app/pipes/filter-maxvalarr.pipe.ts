import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMaxVal',
  standalone: true,
})
export class FilterMaxvalarrPipe implements PipeTransform {
  transform(maxVal: any[], minVal: any, ...args: any[]): any {
    let num = parseInt(minVal, 10);
    let filterMaxVal = maxVal.filter((val) => {
      if (parseInt(val, 10) > num || parseInt(val,10) == 3000 || val == '3000+') {
        return val;
      }
    });
    if (minVal == 'Min') {
      return maxVal;
    } else {
      return filterMaxVal;
    }
  }
}
