import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexUpdateComponent } from './reflex-update.component';

describe('ReflexUpdateComponent', () => {
  let component: ReflexUpdateComponent;
  let fixture: ComponentFixture<ReflexUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflexUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflexUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
