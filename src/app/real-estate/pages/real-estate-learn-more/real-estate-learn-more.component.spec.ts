import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateLearnMoreComponent } from './real-estate-learn-more.component';

describe('RealEstateLearnMoreComponent', () => {
  let component: RealEstateLearnMoreComponent;
  let fixture: ComponentFixture<RealEstateLearnMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateLearnMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateLearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
