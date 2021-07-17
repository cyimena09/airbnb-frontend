import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateListRealEstatesViewComponent } from './private-list-real-estates-view.component';

describe('PrivateListRealEstatesViewComponent', () => {
  let component: PrivateListRealEstatesViewComponent;
  let fixture: ComponentFixture<PrivateListRealEstatesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateListRealEstatesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateListRealEstatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
