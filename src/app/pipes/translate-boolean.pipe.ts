import { Pipe, PipeTransform, Optional } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'translateBoolean'
})
export class TranslateBooleanPipe implements PipeTransform {

  constructor(@Optional() private languageService: LanguageService) {

  }

  transform(value: any): unknown {
    // tslint:disable-next-line: no-construct
    return this.isTrue(value) ? this.languageService.translate('Yes') : this.languageService.translate('No');
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
