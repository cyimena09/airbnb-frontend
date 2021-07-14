import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {RealEstate} from '../../models/realEstate';
import {environment} from '../../../../environments/environment';
import {RealEstateConstant} from '../../models/realEstateConstant';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  totalPages: number;
  PAGE_SIZE: number = 20; // number of elements by page
  SORT: string = RealEstateConstant.PRICE; // by default sorted by price
  private _CURRENT_PAGE: number = 0;
  private _ORDER: string = 'asc'; // by default asc order
  private apiURL = environment.API_REAL_ESTATE;

  constructor(private httpClient: HttpClient) {
  }

  getRealEstates(): Observable<RealEstate[]> {
    const request = `${this.apiURL}?sort=${this.SORT},${this._ORDER}&size=${this.PAGE_SIZE}&page=${this._CURRENT_PAGE}`;
    return this.httpClient.get(request).pipe(
      map(response => {
        this.totalPages = response['totalPages'];
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
    return this.httpClient.get(`${this.apiURL}/users/${id}`).pipe(
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

  searchByFilter(filter) {
    const params = new HttpParams()
      .set('category', filter.category)
      .set('type', filter.type)
      .set('minBedroom', filter.minBedroom)
      .set('maxBedroom', filter.maxBedroom)
      .set('minPrice', filter.type)
      .set('maxPrice', filter.bedroom)
      .set('city', filter.city)
      .set('country', filter.country)
      .set('startDate', filter.startDate)
      .set('endDate', filter.endDate);

    return this.httpClient.get(`${this.apiURL}/search`, {params: params});
  }


  get CURRENT_PAGE(): number {
    return this._CURRENT_PAGE;
  }

  set CURRENT_PAGE(value: number) {
    this._CURRENT_PAGE = this._CURRENT_PAGE + value <= 0 ? 0 : value;
  }

  get ORDER(): string {
    return this._ORDER;
  }

  set ORDER(value: string) {
    this._ORDER = value;
  }

}
