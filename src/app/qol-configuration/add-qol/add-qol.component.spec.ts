import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQolComponent } from './add-qol.component';

describe('AddQolComponent', () => {
  let component: AddQolComponent;
  let fixture: ComponentFixture<AddQolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
