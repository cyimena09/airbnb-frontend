import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmailPassComponent } from './form-email-pass.component';

describe('FormEmailPassComponent', () => {
  let component: FormEmailPassComponent;
  let fixture: ComponentFixture<FormEmailPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmailPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmailPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
