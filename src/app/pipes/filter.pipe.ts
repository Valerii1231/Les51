import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName'
})


export class SortByNamePipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if (!array) return array;
    return array.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}