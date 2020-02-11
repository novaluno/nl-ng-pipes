import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePipeDemosComponent } from './date-time-pipe-demos.component';

describe('DateTimePipeDemosComponent', () => {
  let component: DateTimePipeDemosComponent;
  let fixture: ComponentFixture<DateTimePipeDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimePipeDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePipeDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
