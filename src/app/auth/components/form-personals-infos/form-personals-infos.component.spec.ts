import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonalsInfosComponent } from './form-personals-infos.component';

describe('FormPersonalsInfosComponent', () => {
  let component: FormPersonalsInfosComponent;
  let fixture: ComponentFixture<FormPersonalsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonalsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonalsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
