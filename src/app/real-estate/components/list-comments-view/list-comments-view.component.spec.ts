import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommentsViewComponent } from './list-comments-view.component';

describe('ListCommentsViewComponent', () => {
  let component: ListCommentsViewComponent;
  let fixture: ComponentFixture<ListCommentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
