import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaljudgementAddComponent } from './finaljudgement-add.component';

describe('FinaljudgementAddComponent', () => {
  let component: FinaljudgementAddComponent;
  let fixture: ComponentFixture<FinaljudgementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinaljudgementAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinaljudgementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
