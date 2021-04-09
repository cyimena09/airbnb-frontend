import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  private apiURL = '/api/v1/real_estates/';

  constructor(private httpClient: HttpClient) {
  }

  getRealEstates() {
    return this.httpClient.get(this.apiURL).pipe(
      map(response => {
        return response['content'];
      })
    );
  }

  getRealEstateById(id) {
    return this.httpClient.get(this.apiURL + id);
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
