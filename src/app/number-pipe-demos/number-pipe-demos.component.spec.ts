import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPipeDemosComponent } from './number-pipe-demos.component';

describe('NumberPipeDemosComponent', () => {
  let component: NumberPipeDemosComponent;
  let fixture: ComponentFixture<NumberPipeDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPipeDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPipeDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
