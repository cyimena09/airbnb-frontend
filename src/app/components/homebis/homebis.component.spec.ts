import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebisComponent } from './homebis.component';

describe('HomebisComponent', () => {
  let component: HomebisComponent;
  let fixture: ComponentFixture<HomebisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
