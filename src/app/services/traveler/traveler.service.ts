import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {

  private apiURL = '/api/v1/travelers/';

  constructor(private httpClient: HttpClient) {
  }

  getTravelers() {
    return this.httpClient.get(this.apiURL);
  }

  getTraveler(id) {
    return this.httpClient.get(this.apiURL + id);
  }

  createTraveler(newTraveler) {
    return this.httpClient.post(this.apiURL, newTraveler);
  }

  updateTraveler(id, newTraveler) {
    return this.httpClient.put(this.apiURL + id, newTraveler);
  }

  deleteTraveler(id) {
    return this.httpClient.delete(this.apiURL + id);
  }
}
