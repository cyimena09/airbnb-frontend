import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = '/api/v1/users/';

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(this.apiURL);
  }

  getUser(id) {
    return this.httpClient.get(this.apiURL + id);
  }

  createUser(newUser) {
    return this.httpClient.post(this.apiURL, newUser);
  }

  updateUser(id, newUser) {
    return this.httpClient.put(this.apiURL + id, newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete(this.apiURL + id);
  }

}
