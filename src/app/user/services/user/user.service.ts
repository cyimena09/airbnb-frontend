import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../auth/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_USER;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  getUsers() {
    return this.httpClient.get(this.API_URL);
  }

  getUserById(id) {
    return this.httpClient.get(this.API_URL + id);
  }

  getUserByFilter(firstName) {
    let params = new HttpParams()
      .set('firstName', firstName);
    return this.httpClient.get(this.API_URL + 'by/filter', {params: params});
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
