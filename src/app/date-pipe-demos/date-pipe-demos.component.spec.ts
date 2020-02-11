import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipeDemosComponent } from './date-pipe-demos.component';

describe('DatePipeDemosComponent', () => {
  let component: DatePipeDemosComponent;
  let fixture: ComponentFixture<DatePipeDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePipeDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePipeDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
