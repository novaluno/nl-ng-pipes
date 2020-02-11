import { Component, OnInit } from '@angular/core';
import { LocalizeNumberPipe } from '../pipes/localize-number.pipe';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-number-pipe-demos',
  templateUrl: './number-pipe-demos.component.html',
  styleUrls: ['./number-pipe-demos.component.scss']
})
export class NumberPipeDemosComponent implements OnInit {

  sampleNumber: number;
  numberDefaultFormat: string;
  numberString0: string;
  numberString1: string;
  numberString2: string;

  constructor(
    private localizeNumberPipe: LocalizeNumberPipe,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {

    this.sampleNumber = 98765123.456789;

    this.numberDefaultFormat = this.sampleNumber.toString();

    LocalizeNumberPipe.setNumberFormat(0);
    this.numberString0 = this.localizeNumberPipe.transform(this.sampleNumber);
  }

  setLocaleEN() {
    this.sessionService.registerCulture('en-US');
    this.refreshValues();
  }

  setLocaleRU() {
    this.sessionService.registerCulture('ru-RU');
    this.refreshValues();
  }

  setLocaleDE() {
    this.sessionService.registerCulture('de-DE');
    this.refreshValues();
  }

  private refreshValues() {
    this.sampleNumber++;
  }
}
