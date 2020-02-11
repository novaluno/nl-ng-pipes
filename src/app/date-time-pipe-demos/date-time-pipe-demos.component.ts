import { Component, OnInit } from '@angular/core';
import { DateTimeOriginPipe } from '../pipes/date-time-origin.pipe';

@Component({
  selector: 'app-date-time-pipe-demos',
  templateUrl: './date-time-pipe-demos.component.html',
  styleUrls: ['./date-time-pipe-demos.component.scss']
})
export class DateTimePipeDemosComponent implements OnInit {

  sampleDate: Date;
  dateDefaultFormat: string;
  dateString0: string;
  dateString1: string;
  dateString2: string;

  constructor(private dateOriginPipe: DateTimeOriginPipe) { }

  ngOnInit(): void {

    this.sampleDate = new Date(Date.parse('02/01/2020 17:54:23'));

    this.dateDefaultFormat = this.sampleDate.toDateString();

    DateTimeOriginPipe.setDataFormat(0, 'h:mm a');
    this.dateString0 = this.dateOriginPipe.transform(this.sampleDate);

    DateTimeOriginPipe.setDataFormat(1, 'H:mm');
    this.dateString1 = this.dateOriginPipe.transform(this.sampleDate);

    DateTimeOriginPipe.setDataFormat(2, 'H:mm');
    this.dateString2 = this.dateOriginPipe.transform(this.sampleDate);
  }
}
