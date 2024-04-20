import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgmentWeightageComponent } from './judgment-weightage.component';

describe('JudgmentWeightageComponent', () => {
  let component: JudgmentWeightageComponent;
  let fixture: ComponentFixture<JudgmentWeightageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgmentWeightageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgmentWeightageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
