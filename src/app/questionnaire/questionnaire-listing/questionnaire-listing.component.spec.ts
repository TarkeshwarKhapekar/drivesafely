import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireListingComponent } from './questionnaire-listing.component';

describe('QuestionnaireListingComponent', () => {
  let component: QuestionnaireListingComponent;
  let fixture: ComponentFixture<QuestionnaireListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
