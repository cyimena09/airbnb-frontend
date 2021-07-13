import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookingsViewComponent } from './list-bookings-view.component';

describe('ListBookingsViewComponent', () => {
  let component: ListBookingsViewComponent;
  let fixture: ComponentFixture<ListBookingsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBookingsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
