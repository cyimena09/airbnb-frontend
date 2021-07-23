import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_USER;

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(this.API_URL).pipe(
      map(response => {
        return response['content'] as User[];
      }));
  }

  getUserById(id) {
    return this.httpClient.get(this.API_URL + id);
  }

  getUserByFilter(firstName) {
    let params = new HttpParams()
      .set('firstName', firstName);
    return this.httpClient.get(`${this.API_URL}/by/filter`, {params: params}).pipe(
      map(response => {
        return response['content'] as User[];
      }));
  }

  createUser(newUser) {
    return this.httpClient.post(this.API_URL, newUser);
  }

  updateUser(id, newUser) {
    return this.httpClient.put(this.API_URL + id, newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete(this.API_URL + id);
  }

}
