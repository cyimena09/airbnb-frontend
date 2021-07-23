import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersatileNotifComponent } from './versatile-notif.component';

describe('VersatileNotifComponent', () => {
  let component: VersatileNotifComponent;
  let fixture: ComponentFixture<VersatileNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersatileNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersatileNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
