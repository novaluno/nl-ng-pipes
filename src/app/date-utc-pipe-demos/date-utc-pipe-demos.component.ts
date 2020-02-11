import { Component, OnInit } from '@angular/core';
import { DateUtcPipe } from '../pipes/date-utc.pipe';

@Component({
  selector: 'app-date-utc-pipe-demos',
  templateUrl: './date-utc-pipe-demos.component.html',
  styleUrls: ['./date-utc-pipe-demos.component.scss']
})
export class DateUtcPipeDemosComponent implements OnInit {

  sampleDate: Date;
  dateDefaultFormat: string;
  dateString0: string;
  dateString1: string;
  dateString2: string;

  constructor(private dateUtcPipe: DateUtcPipe) { }

  ngOnInit(): void {

    this.sampleDate = new Date(Date.parse('02/01/2020 17:54:23'));

    this.dateDefaultFormat = this.sampleDate.toDateString();

    DateUtcPipe.setDataFormat(0);
    this.dateString0 = this.dateUtcPipe.transform(this.sampleDate);

    DateUtcPipe.setDataFormat(1);
    this.dateString1 = this.dateUtcPipe.transform(this.sampleDate);

    DateUtcPipe.setDataFormat(2);
    this.dateString2 = this.dateUtcPipe.transform(this.sampleDate);
  }
}
