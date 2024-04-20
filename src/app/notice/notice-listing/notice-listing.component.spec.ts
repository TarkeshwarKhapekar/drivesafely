import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeListingComponent } from './notice-listing.component';

describe('NoticeListingComponent', () => {
  let component: NoticeListingComponent;
  let fixture: ComponentFixture<NoticeListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
