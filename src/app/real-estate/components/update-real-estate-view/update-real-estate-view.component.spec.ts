import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRealEstateViewComponent } from './update-real-estate-view.component';

describe('UpdateRealEstateViewComponent', () => {
  let component: UpdateRealEstateViewComponent;
  let fixture: ComponentFixture<UpdateRealEstateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRealEstateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRealEstateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
