import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  //private apiURL = '/api/v1/participations/';
  private apiURL = '/api/v1/messenger/participations/';


  constructor(private httpClient: HttpClient) {
  }

  createParticipation(participation) {
    return this.httpClient.post(this.apiURL, participation);
  }

  getParticipationByUserId() {
    let id = 1;
    return this.httpClient.get(this.apiURL + id);
  }
}
