import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookingViewComponent } from './new-booking-view.component';

describe('NewBookingViewComponent', () => {
  let component: NewBookingViewComponent;
  let fixture: ComponentFixture<NewBookingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
