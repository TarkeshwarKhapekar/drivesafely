import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaljudgementListComponent } from './finaljudgement-list.component';

describe('FinaljudgementListComponent', () => {
  let component: FinaljudgementListComponent;
  let fixture: ComponentFixture<FinaljudgementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinaljudgementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinaljudgementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
