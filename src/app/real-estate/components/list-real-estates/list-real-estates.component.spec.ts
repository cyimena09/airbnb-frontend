import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRealEstatesComponent } from './list-real-estates.component';

describe('ListRealEstatesComponent', () => {
  let component: ListRealEstatesComponent;
  let fixture: ComponentFixture<ListRealEstatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRealEstatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRealEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
