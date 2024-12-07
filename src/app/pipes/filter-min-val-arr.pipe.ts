import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMinValArr',
  standalone: true,
})
export class FilterMinValArrPipe implements PipeTransform {
  transform(minValArr: any, maxNum: any, ...args: any[]): any {
    let filterArr = minValArr.filter((val: any) => {
      if (parseInt(val, 10) < parseInt(maxNum, 10) || val == 'Min') {
        return val;
      }
    });

    return filterArr;
  }
}
