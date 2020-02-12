import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRU from '@angular/common/locales/ru';
import localeDE from '@angular/common/locales/de';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // tslint:disable-next-line: variable-name
  private _locale: string;

  set locale(value: string) {
    this._locale = value;
  }

  get locale(): string {
    return this._locale || 'en-US';
  }

  constructor() { }

  registerCulture(culture: string) {
    if (!culture) {
        return;
    }
    this.locale = culture;

    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
        case 'ru-RU': {
            registerLocaleData(localeRU);
            break;
        }
        case 'de-DE': {
            registerLocaleData(localeDE);
            break;
        }
    }
  }
}
