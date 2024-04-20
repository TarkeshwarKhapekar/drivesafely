import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeResultComponent } from './aptitude-result.component';

describe('AptitudeResultComponent', () => {
  let component: AptitudeResultComponent;
  let fixture: ComponentFixture<AptitudeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudeResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
