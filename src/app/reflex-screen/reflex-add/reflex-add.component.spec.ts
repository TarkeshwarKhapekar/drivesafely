import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexAddComponent } from './reflex-add.component';

describe('ReflexAddComponent', () => {
  let component: ReflexAddComponent;
  let fixture: ComponentFixture<ReflexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflexAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
