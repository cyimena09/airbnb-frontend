import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSingleRealEstateComponent } from './public-single-real-estate.component';

describe('PublicSingleRealEstateComponent', () => {
  let component: PublicSingleRealEstateComponent;
  let fixture: ComponentFixture<PublicSingleRealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSingleRealEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSingleRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
