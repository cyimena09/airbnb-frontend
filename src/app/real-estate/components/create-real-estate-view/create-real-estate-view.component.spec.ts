import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRealEstateViewComponent } from './create-real-estate-view.component';

describe('CreateRealEstateViewComponent', () => {
  let component: CreateRealEstateViewComponent;
  let fixture: ComponentFixture<CreateRealEstateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRealEstateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRealEstateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
