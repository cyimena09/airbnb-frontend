import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRealEstatesViewComponent } from './list-real-estates-view.component';

describe('ListRealEstatesViewComponent', () => {
  let component: ListRealEstatesViewComponent;
  let fixture: ComponentFixture<ListRealEstatesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRealEstatesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRealEstatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
