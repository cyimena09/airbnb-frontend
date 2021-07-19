import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateListRealEstatesComponent } from './private-list-real-estates.component';

describe('PrivateListRealEstatesComponent', () => {
  let component: PrivateListRealEstatesComponent;
  let fixture: ComponentFixture<PrivateListRealEstatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateListRealEstatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateListRealEstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
