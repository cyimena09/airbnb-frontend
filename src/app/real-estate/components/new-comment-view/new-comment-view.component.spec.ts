import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommentViewComponent } from './new-comment-view.component';

describe('NewCommentViewComponent', () => {
  let component: NewCommentViewComponent;
  let fixture: ComponentFixture<NewCommentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCommentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
