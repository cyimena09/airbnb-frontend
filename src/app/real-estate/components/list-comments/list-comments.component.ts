import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../lib/models/comment';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {

  @Input() comments: Comment[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
