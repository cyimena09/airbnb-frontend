import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RealEstate} from '../../../../../lib/models/real-estate';
import {RealEstateService} from '../../real-estate/real-estate.service';

@Injectable({
  providedIn: 'root'
})
export class RealEstateResolverService implements Resolve<RealEstate> {

  constructor(private realEstateService: RealEstateService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RealEstate> | Promise<RealEstate> | RealEstate {
    const id = +route.paramMap.get('id');
    return this.realEstateService.getRealEstateById(id);
  }

}
