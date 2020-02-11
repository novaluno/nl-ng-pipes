import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateOriginPipe } from './date-origin.pipe';

@Pipe({
  name: 'dateUtc'
})
export class DateUtcPipe implements PipeTransform {

  public static CurrentDateFormat = 'yyyy-MM-dd';

  public static setDataFormat(dateFormat: number) {
    DateUtcPipe.CurrentDateFormat = DateOriginPipe.getDateFormat(dateFormat);
  }

  constructor(private datePipe: DatePipe) {
  }

  transform(value: any): string {
    return this.datePipe.transform(value, DateUtcPipe.CurrentDateFormat, 'UTC');
  }
}
