import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'dateTimeOrigin'
})
export class DateTimeOriginPipe implements PipeTransform {

  public static CurrentDateFormat = 'yyyy-MM-dd, H:mm';

  public static getDateFormat = (dateFormat: number, hourPart: string) => {

    switch (dateFormat || 0) {
      case 0:
        return 'yyyy-MM-dd, ' + hourPart;
      case 1:
        return 'MM/dd/yyyy, ' + hourPart;
      case 2:
        return 'dd/MM/yyyy, ' + hourPart;
      default:
        throw new Error('Unknown date format id!');
    }
  }

  public static setDataFormat(dateFormat: number, hourPart: string) {
    DateTimeOriginPipe.CurrentDateFormat = DateTimeOriginPipe.getDateFormat(dateFormat, hourPart);
  }

  constructor(private datePipe: DatePipe) {
  }

  transform(value: any): string {

    const zone = moment.parseZone(value).format('Z');

    let res = this.datePipe.transform(value, DateTimeOriginPipe.CurrentDateFormat);

    if (zone === '+00:00') {
      res = `${res} (UTC)`;
    } else {
      res = `${res} (UTC ${zone})`;
    }

    return res;
  }
}
