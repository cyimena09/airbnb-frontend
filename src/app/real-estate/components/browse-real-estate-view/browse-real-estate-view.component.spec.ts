import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseRealEstateViewComponent } from './browse-real-estate-view.component';

describe('BrowseRealEstateViewComponent', () => {
  let component: BrowseRealEstateViewComponent;
  let fixture: ComponentFixture<BrowseRealEstateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseRealEstateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseRealEstateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
