import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRealEstatesListComponent } from './user-real-estates-list.component';

describe('UserRealEstatesListComponent', () => {
  let component: UserRealEstatesListComponent;
  let fixture: ComponentFixture<UserRealEstatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRealEstatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRealEstatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
