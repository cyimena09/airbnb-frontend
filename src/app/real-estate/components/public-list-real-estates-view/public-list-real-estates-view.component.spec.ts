import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicListRealEstatesViewComponent } from './public-list-real-estates-view.component';

describe('PublicListRealEstatesViewComponent', () => {
  let component: PublicListRealEstatesViewComponent;
  let fixture: ComponentFixture<PublicListRealEstatesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicListRealEstatesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicListRealEstatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
