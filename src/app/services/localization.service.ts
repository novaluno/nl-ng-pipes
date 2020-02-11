import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor() { }

  public localize(text: string) {
    return text;
  }
}
