import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from '../../../../lib/models/message';
import {Conversation} from '../../../../lib/models/conversation';
import {UserService} from '../../../user/services/user/user.service';
import {User} from '../../../../lib/models/user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  searchForm: FormGroup;
  users: User[];

  constructor(
    private formBuilder: FormBuilder,
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
    console.log('Recherche de l\'utilisateur');
    let firstName = this.searchForm.value.firstName;

    this.userService.getUserByFilter(firstName).subscribe(
      (data: any) => {
        console.log('Recherche effectuée', data);
        this.users = data.content;
      }
    );
  }

  onGetMessages(id) {

  }

}
