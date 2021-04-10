import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRealEstateComponent } from './user-real-estate.component';

describe('UserRealEstateComponent', () => {
  let component: UserRealEstateComponent;
  let fixture: ComponentFixture<UserRealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRealEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
