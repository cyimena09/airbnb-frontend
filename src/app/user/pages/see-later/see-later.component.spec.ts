import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeLaterComponent } from './see-later.component';

describe('SeeLaterComponent', () => {
  let component: SeeLaterComponent;
  let fixture: ComponentFixture<SeeLaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeLaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
