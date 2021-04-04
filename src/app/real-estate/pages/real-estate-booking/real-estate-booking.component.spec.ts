import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateBookingComponent } from './real-estate-booking.component';

describe('RealEstateBookingComponent', () => {
  let component: RealEstateBookingComponent;
  let fixture: ComponentFixture<RealEstateBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
