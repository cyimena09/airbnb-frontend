import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerDetailComponent } from './traveler-detail.component';

describe('TravelerDetailComponent', () => {
  let component: TravelerDetailComponent;
  let fixture: ComponentFixture<TravelerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
