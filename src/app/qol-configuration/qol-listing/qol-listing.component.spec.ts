import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QolListingComponent } from './qol-listing.component';

describe('QolListingComponent', () => {
  let component: QolListingComponent;
  let fixture: ComponentFixture<QolListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QolListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QolListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
