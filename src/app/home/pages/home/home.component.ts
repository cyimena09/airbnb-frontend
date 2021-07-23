import {Component, OnInit} from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {RealEstate} from '../../../real-estate/models/real-estate';
import {RealEstateFilter} from '../../../real-estate/models/real-estate-filter';
import {DiversConstant} from '../../../shared/models/diversConstant';
import {VersatileNotifService} from '../../../notification/services/versatile-notif/versatile-notif.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  realEstates: RealEstate[] = [];
  pages: number[] = [];
  currentPage: number;
  currentSort: string;
  filter: RealEstateFilter;

  constructor(
    private authService: AuthService,
    private realEstateService: RealEstateService,
    private notifService: VersatileNotifService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.authService.isAuthenticatedSubject.subscribe(
      (data: boolean) => {
        this.isAuthenticated = data;
      });
    this.loadRealEstates();
  }

  private loadRealEstates() {
    this.realEstateService.getRealEstates().subscribe(
      (data: RealEstate[]) => {
        this.realEstates = data;
        this.setPages();
        this.currentSort = this.realEstateService.SORT;
      });
  }

  private loadRealEstatesByFilter(filter) {
    this.realEstateService.searchByFilter(filter).subscribe(
      (data: RealEstate[]) => {
        this.realEstates = data;
        this.setPages();
      });
  }

  onSearch(filter) {
    this.loadRealEstatesByFilter(filter);
  }

  onSort(parameter) {
    const asc = DiversConstant.ASC;
    const desc = DiversConstant.DESC;
    if (parameter.isStrict) {
      this.realEstateService.ORDER = parameter.order;
      this.realEstateService.SORT = parameter.toSort;
    } else {
      if (this.realEstateService.SORT === parameter.toSort) {
        this.realEstateService.ORDER = this.realEstateService.ORDER === asc ? desc : asc;
      } else {
        this.realEstateService.SORT = parameter.toSort;
      }
    }
    if (this.filter) {
      this.loadRealEstatesByFilter(this.filter);
    }
  }

  setPages() {
    this.pages = [];
    const totalPages = this.realEstateService.totalPages;
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i);
    }
    this.currentPage = this.realEstateService.CURRENT_PAGE;
  }

  onChangePage(page: number | string) {
    const next = DiversConstant.NEXT;
    const prev = DiversConstant.PREVIOUS;
    if (page === next) {
      this.realEstateService.CURRENT_PAGE += 1;
    } else if (page === prev) {
      this.realEstateService.CURRENT_PAGE -= 1;
    } else {
      this.realEstateService.CURRENT_PAGE = page as number;
    }
    this.loadRealEstates();
  }

  onNotify(message) {
    this.notifService.notify(message);
  }

}
