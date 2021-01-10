import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

    private apiURL = '/api/v1/realestates/';

  constructor(private httpClient: HttpClient) {
  }

  getRealEstates() {
    return this.httpClient.get(this.apiURL);
  }

  getRealEstate(id) {
    return this.httpClient.get(this.apiURL + id);
  }

  createRealEstate(newRealEstate) {
    return this.httpClient.post(this.apiURL, newRealEstate);
  }

  updateRealEstate(id, newRealEstate) {
    return this.httpClient.put(this.apiURL + id, newRealEstate);
  }

  deleteRealEstate(id) {
    return this.httpClient.delete(this.apiURL + id)
  }

  searchRealEstate(type){
    let price = '-1';
    let params = new HttpParams()
      .set('type', type)
      .set('price', price);

    return this.httpClient.get(this.apiURL + 'search',{params: params} )
  }

}
