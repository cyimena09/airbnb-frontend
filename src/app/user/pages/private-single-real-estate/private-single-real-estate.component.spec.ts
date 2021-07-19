import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSingleRealEstateComponent } from './private-single-real-estate.component';

describe('PrivateSingleRealEstateComponent', () => {
  let component: PrivateSingleRealEstateComponent;
  let fixture: ComponentFixture<PrivateSingleRealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateSingleRealEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSingleRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
