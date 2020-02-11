import { Component, OnInit } from '@angular/core';
import { TranslateBooleanPipe } from '../pipes/translate-boolean.pipe';

@Component({
  selector: 'app-boolean-pipe-demos',
  templateUrl: './boolean-pipe-demos.component.html',
  styleUrls: ['./boolean-pipe-demos.component.scss']
})
export class BooleanPipeDemosComponent implements OnInit {

  constructor(private booleanPipe: TranslateBooleanPipe) { }

  ngOnInit(): void {
    const value = this.booleanPipe.transform(true);
  }

}
