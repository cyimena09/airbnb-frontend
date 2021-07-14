import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRealEstateViewComponent } from './search-real-estate-view.component';

describe('SearchRealEstateViewComponent', () => {
  let component: SearchRealEstateViewComponent;
  let fixture: ComponentFixture<SearchRealEstateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRealEstateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRealEstateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
