import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRealEstateListComponent } from './user-real-estate-list.component';

describe('UserRealEstateListComponent', () => {
  let component: UserRealEstateListComponent;
  let fixture: ComponentFixture<UserRealEstateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRealEstateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRealEstateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
