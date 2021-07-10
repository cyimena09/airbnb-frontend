import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {RealEstate} from '../../models/realEstate';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  private apiURL = environment.API_REAL_ESTATE;

  constructor(private httpClient: HttpClient) {
  }

  getRealEstates(): Observable<RealEstate[]> {
    return this.httpClient.get(this.apiURL).pipe(
      map(response => {
        return response['content'] as RealEstate[];
      }));
  }

  getRealEstateById(id): Observable<RealEstate> {
    return this.httpClient.get(`${this.apiURL}/${id}`).pipe(
      map(response => {
        return response as RealEstate;
      }));
  }

  getRealEstateByUserId(id) {
    id = 1;
    return this.httpClient.get(this.apiURL + 'users/' + id).pipe(
      map(response => {
        return response['content'];
      }));
  }

  createRealEstate(newRealEstate) {
    return this.httpClient.post(this.apiURL, newRealEstate);
  }

  updateRealEstate(id, newRealEstate) {
    return this.httpClient.put(this.apiURL + id, newRealEstate);
  }

  deleteRealEstate(id) {
    return this.httpClient.delete(this.apiURL + id);
  }

  searchRealEstate(type, bedroom, price, country, city) {
    let params = new HttpParams()
      .set('type', type)
      .set('bedroom', bedroom)
      .set('price', price)
      .set('country', country)
      .set('city', city);

    return this.httpClient.get(this.apiURL + 'search', {params: params});
  }

}
