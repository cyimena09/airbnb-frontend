import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormRealEstateComponent } from './search-form-real-estate.component';

describe('SearchFormRealEstateComponent', () => {
  let component: SearchFormRealEstateComponent;
  let fixture: ComponentFixture<SearchFormRealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormRealEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
