import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QolViewComponent } from './qol-view.component';

describe('QolViewComponent', () => {
  let component: QolViewComponent;
  let fixture: ComponentFixture<QolViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QolViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QolViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
