import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../user/services/user/user.service';
import {User} from '../../../../lib/models/user';
import {ConversationService} from '../../services/conversation/conversation.service';
import {MessageService} from '../../services/message/message.service';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {ParticipationService} from '../../services/participation/participation.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  searchForm: FormGroup;
  users: User[];

  @Output('participantId')
  participantIdEmitter = new EventEmitter<Array<number>>();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private conversationService: ConversationService,
    private participationService: ParticipationService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      firstName: ['', Validators.required]
    });
  }

  onSearchUser() {
    let firstName = this.searchForm.value.firstName;

    this.userService.getUserByFilter(firstName).subscribe(
      (data: any) => {
        this.users = data.content;
      }
    );
  }

  onSelectUser(id) {
    let listIds = [];
    listIds.push(id)
    this.participantIdEmitter.emit(listIds); // permet de rechercher la conversation avec ce participant
  }

}
