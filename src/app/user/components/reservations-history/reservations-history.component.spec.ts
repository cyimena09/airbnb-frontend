import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsHistoryComponent } from './reservations-history.component';

describe('ReservationsHistoryComponent', () => {
  let component: ReservationsHistoryComponent;
  let fixture: ComponentFixture<ReservationsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
