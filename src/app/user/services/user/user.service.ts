import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = '/api/v1/assets/users/';

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(this.apiURL);
  }

  getUserById(id) {
    return this.httpClient.get(this.apiURL + id);
  }

  getUserByFilter(firstName) {
    let params = new HttpParams()
      .set('firstName', firstName);
    return this.httpClient.get(this.apiURL + 'by/filter', {params: params});
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
