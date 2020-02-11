import { Component, OnInit } from '@angular/core';
import { DateOriginPipe } from '../pipes/date-origin.pipe';

@Component({
  selector: 'app-date-pipe-demos',
  templateUrl: './date-pipe-demos.component.html',
  styleUrls: ['./date-pipe-demos.component.scss']
})
export class DatePipeDemosComponent implements OnInit {

  sampleDate: Date;
  dateDefaultFormat: string;
  dateString0: string;
  dateString1: string;
  dateString2: string;

  constructor(private dateOriginPipe: DateOriginPipe) { }

  ngOnInit(): void {

    this.sampleDate = new Date(Date.parse('02/01/2020 017:54:23'));

    this.dateDefaultFormat = this.sampleDate.toDateString();

    DateOriginPipe.setDataFormat(0);
    this.dateString0 = this.dateOriginPipe.transform(this.sampleDate);

    DateOriginPipe.setDataFormat(1);
    this.dateString1 = this.dateOriginPipe.transform(this.sampleDate);

    DateOriginPipe.setDataFormat(2);
    this.dateString2 = this.dateOriginPipe.transform(this.sampleDate);
  }
}
