import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverJudgementResultComponent } from './driver-judgement-result.component';

describe('DriverJudgementResultComponent', () => {
  let component: DriverJudgementResultComponent;
  let fixture: ComponentFixture<DriverJudgementResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverJudgementResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverJudgementResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
