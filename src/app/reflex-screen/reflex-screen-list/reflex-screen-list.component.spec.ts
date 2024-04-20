import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexScreenListComponent } from './reflex-screen-list.component';

describe('ReflexScreenListComponent', () => {
  let component: ReflexScreenListComponent;
  let fixture: ComponentFixture<ReflexScreenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflexScreenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflexScreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
