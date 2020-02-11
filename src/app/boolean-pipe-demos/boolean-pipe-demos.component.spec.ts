import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanPipeDemosComponent } from './boolean-pipe-demos.component';

describe('BooleanPipeDemosComponent', () => {
  let component: BooleanPipeDemosComponent;
  let fixture: ComponentFixture<BooleanPipeDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanPipeDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanPipeDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
