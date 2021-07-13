import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-new-comment-view',
  templateUrl: './new-comment-view.component.html',
  styleUrls: ['./new-comment-view.component.scss']
})
export class NewCommentViewComponent implements OnInit {
  commentForm: FormGroup;

  @Output() commentEvent = new EventEmitter<Comment>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.commentForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.email]],
    });
  }

  onAddComment(): void {
    const values = this.commentForm.value;
    const comment = new Comment();
    comment.text = values.text
    this.commentEvent.emit(comment)
  }

  get f() {
    return this.commentForm.controls;
  }

}
