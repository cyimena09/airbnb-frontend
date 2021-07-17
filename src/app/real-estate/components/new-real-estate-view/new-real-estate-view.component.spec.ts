import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRealEstateViewComponent } from './new-real-estate-view.component';

describe('NewRealEstateViewComponent', () => {
  let component: NewRealEstateViewComponent;
  let fixture: ComponentFixture<NewRealEstateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRealEstateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRealEstateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
