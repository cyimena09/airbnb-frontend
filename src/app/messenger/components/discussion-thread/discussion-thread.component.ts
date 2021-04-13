import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-discussion-thread',
  templateUrl: './discussion-thread.component.html',
  styleUrls: ['./discussion-thread.component.scss']
})
export class DiscussionThreadComponent implements OnInit {

  @Input() messages;
  @Input() currentUserId;

  constructor() { }

  ngOnInit(): void {
  }

}
