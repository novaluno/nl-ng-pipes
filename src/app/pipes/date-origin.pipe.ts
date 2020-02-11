import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateOrigin'
})
export class DateOriginPipe implements PipeTransform {

  public static CurrentDateFormat = 'yyyy-MM-dd';

  public static getDateFormat = (dateFormat: number) => {
    switch (dateFormat || 0) {
        case 0:
            return 'yyyy-MM-dd';
        case 1:
            return 'MM/dd/yyyy';
        case 2:
            return 'dd/MM/yyyy';
        default:
            throw new Error('Unknown date format id!');
    }
  }

  public static setDataFormat(dateFormat: number) {
    DateOriginPipe.CurrentDateFormat = DateOriginPipe.getDateFormat(dateFormat);
  }

  constructor(private datePipe: DatePipe) {
  }

  transform(value: any): string {
    return this.datePipe.transform(value, DateOriginPipe.CurrentDateFormat);
  }
}
