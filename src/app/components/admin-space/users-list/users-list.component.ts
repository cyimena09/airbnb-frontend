import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../models/User';
import {BookingService} from '../../../services/booking/booking.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users = [];
  bookings;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    return this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data.content;
      });
  }

  onDeleteUser(id){
    this.userService.deleteUser(id).subscribe(
      () => {console.log("User deleted")}
    );
  }


}
