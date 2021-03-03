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

  searchRealEstate(type, bedroom, price, country, city, startDate, endDate){
    // if(startDate === ""){
    //   startDate = null;
    // }
    // if(endDate === ""){
    //   endDate = null;
    // }
    // type = "maison";
    //bedroom = 4;
    //price = 251
    // country = "Belgique";
    // city = "Bruxelles";

    startDate = "2018-01-05 11:30:01";
    endDate = "2018-01-06 11:30:01";







    let params = new HttpParams()
      .set('type', type)
      .set('bedroom', bedroom)
      .set('price', price)
      .set('country', country)
      .set('city', city)
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.httpClient.get(this.apiURL + 'search',{params: params} )
  }

}
