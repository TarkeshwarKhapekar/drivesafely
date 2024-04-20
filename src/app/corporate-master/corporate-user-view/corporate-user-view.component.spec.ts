import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserViewComponent } from './corporate-user-view.component';

describe('CorporateUserViewComponent', () => {
  let component: CorporateUserViewComponent;
  let fixture: ComponentFixture<CorporateUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateUserViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
