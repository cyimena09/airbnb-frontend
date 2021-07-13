import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-list-comments-view',
  templateUrl: './list-comments-view.component.html',
  styleUrls: ['./list-comments-view.component.scss']
})
export class ListCommentsViewComponent implements OnInit {
  @Input() comments: Comment[];

  constructor() { }

  ngOnInit(): void {
  }

}
