import { Pipe, PipeTransform } from '@angular/core';
import * as lodash from 'lodash';
import { DecimalPipe } from '@angular/common';
import { SessionService } from '../services/session.service';

@Pipe({
  name: 'localizeNumber'
})
export class LocalizeNumberPipe implements PipeTransform {

  // private static locale = 'en-US';
  private static fractionDigits = '1.0-2';

  public static setNumberFormat = (numberFormat: number) => {
    switch (numberFormat || 0) {
      case 0:
        // LocalizeNumberPipe.locale = 'en-US';
        LocalizeNumberPipe.fractionDigits = '1.0-2';
        break;
      case 1:
        // LocalizeNumberPipe.locale = 'ru-RU';
        LocalizeNumberPipe.fractionDigits = '1.0-3';
        break;
      case 2:
        // LocalizeNumberPipe.locale = 'de-DE';
        LocalizeNumberPipe.fractionDigits = '1.0-3';
        break;
      default:
        throw new Error('Unknown number format id!');
    }
  }

  constructor(
    private decimalPipe: DecimalPipe,
    private sessionService: SessionService
  ) { }

  transform(value: any): string {

    if (!lodash.isNumber(value)) {
      value = parseFloat(value);
    }

    if (lodash.isNaN(value)) {
      return null;
    }

    return this.decimalPipe.transform(value, LocalizeNumberPipe.fractionDigits, this.sessionService.locale);
  }
}
