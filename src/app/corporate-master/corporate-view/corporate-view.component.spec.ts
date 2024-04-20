import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateViewComponent } from './corporate-view.component';

describe('CorporateViewComponent', () => {
  let component: CorporateViewComponent;
  let fixture: ComponentFixture<CorporateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
