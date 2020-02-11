import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateBoolean'
})
export class TranslateBooleanPipe implements PipeTransform {

  transform(value: any): unknown {
    // tslint:disable-next-line: no-construct
    return this.isTrue(value) ? 'Yes' : 'No';
  }

  isTrue(value) {
    if (typeof (value) === 'string') {
      value = value.trim().toLowerCase();
    }
    switch (value) {
      case true:
      case 'true':
      case 1:
      case '1':
      case 'on':
      case 'yes':
        return true;
      default:
        return false;
    }
  }
}
