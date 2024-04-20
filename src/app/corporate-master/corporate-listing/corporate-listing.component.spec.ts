import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorporateListingComponent } from './corporate-listing.component';

describe('CorporateListingComponent', () => {
  let component: CorporateListingComponent;
  let fixture: ComponentFixture<CorporateListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporateListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { TestBed } from '@angular/core/testing';
// describe('CorporateListingComponent', () => {
//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       declarations: [CorporateListingComponent],
//     }).compileComponents();
//   });
//   it('should create the app', async () => {
//     const fixture = TestBed.createComponent(CorporateListingComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });
//   it(`should have as title 'angular-unit-test'`, async () => {
//     const fixture = TestBed.createComponent(CorporateListingComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('angular-unit-test');
//   });
//   it('should render title in a h1 tag', async () => {
//     const fixture = TestBed.createComponent(CorporateListingComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain(
//       'Welcome to angular-unit-test!'
//     );
//   });
// });
