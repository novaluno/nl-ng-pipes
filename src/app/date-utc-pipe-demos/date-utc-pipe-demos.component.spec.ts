import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUtcPipeDemosComponent } from './date-utc-pipe-demos.component';

describe('DateUtcPipeDemosComponent', () => {
  let component: DateUtcPipeDemosComponent;
  let fixture: ComponentFixture<DateUtcPipeDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateUtcPipeDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateUtcPipeDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
