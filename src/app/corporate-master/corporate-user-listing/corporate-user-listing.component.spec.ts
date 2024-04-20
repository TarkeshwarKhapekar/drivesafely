import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateUserListingComponent } from './corporate-user-listing.component';

describe('CorporateUserListingComponent', () => {
  let component: CorporateUserListingComponent;
  let fixture: ComponentFixture<CorporateUserListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateUserListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateUserListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
