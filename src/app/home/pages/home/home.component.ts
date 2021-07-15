import {Component, OnInit} from '@angular/core';
import {RealEstateService} from '../../../real-estate/services/real-estate/real-estate.service';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {RealEstate} from '../../../real-estate/models/real-estate';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated = true;
  realEstates: RealEstate[] = [];
  pages: number[] = [];
  currentPage;
  currentSort;

  constructor(private authService: AuthService, private realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.authService.isAuthenticatedSubject.subscribe(
      (data: boolean) => {
        this.isAuthenticated = data;
      });
    this.loadRealEstates();
    this.setPages();
  }

  loadRealEstates() {
    this.realEstateService.getRealEstates().subscribe(
      (data: RealEstate[]) => {
        this.realEstates = data;
        this.setPages();
        this.currentSort = this.realEstateService.SORT;
      });
  }

  onSearch(filter) {
    this.realEstateService.searchByFilter(filter).subscribe(
      (data:RealEstate[]) => {
        this.realEstates = data;
        this.setPages();
      });
  }

  onSort(parameter) {
    if (parameter.isStrict) {
      this.realEstateService.ORDER = parameter.order;
      this.realEstateService.SORT = parameter.toSort;
    } else {
      if (this.realEstateService.SORT === parameter.toSort) {
        this.realEstateService.ORDER = this.realEstateService.ORDER === 'asc' ? 'desc' : 'asc';
      } else {
        this.realEstateService.SORT = parameter.toSort;
      }
    }
    this.loadRealEstates();
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
    if (page === 'next') {
      this.realEstateService.CURRENT_PAGE += 1;
    } else if (page === 'previous') {
      this.realEstateService.CURRENT_PAGE -= 1;
    } else {
      this.realEstateService.CURRENT_PAGE = page as number;
    }
    this.loadRealEstates();
  }

}
