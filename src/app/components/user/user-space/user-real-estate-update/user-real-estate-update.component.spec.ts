import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRealEstateUpdateComponent } from './user-real-estate-update.component';

describe('UserRealEstateUpdateComponent', () => {
  let component: UserRealEstateUpdateComponent;
  let fixture: ComponentFixture<UserRealEstateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRealEstateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRealEstateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
