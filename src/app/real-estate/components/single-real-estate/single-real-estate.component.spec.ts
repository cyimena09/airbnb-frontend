import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRealEstateComponent } from './single-real-estate.component';

describe('SingleRealEstateComponent', () => {
  let component: SingleRealEstateComponent;
  let fixture: ComponentFixture<SingleRealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRealEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
