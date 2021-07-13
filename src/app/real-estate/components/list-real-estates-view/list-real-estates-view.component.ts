import {Component, Input, OnInit} from '@angular/core';
import {RealEstate} from '../../models/realEstate';

@Component({
  selector: 'app-list-real-estates-view',
  templateUrl: './list-real-estates-view.component.html',
  styleUrls: ['./list-real-estates-view.component.scss']
})
export class ListRealEstatesViewComponent implements OnInit {
  ASC: string = 'ASC';
  DESC: string = 'DESC';
  toSort: string = null;
  orderx: string = 'test';
  @Input() realEstates: RealEstate[];

  constructor() {
  }

  ngOnInit(): void {
  }

  // onSort(parameter) {
  //   console.log(parameter)
  //   const order = parameter['order'];
  //   const toSort = parameter['toSort'];
  //
  //   console.log('on va afficher order')
  //  // console.log(orderx)
  //   this.orderx = 'EMILIO'
  //   //this.realEstates.sort(this.sortt);
  //
  //   if (order === this.ASC) {
  //     this.realEstates.sort((a, b) => a.price.localeCompare(b.price)) // ordre ascendant
  //   } else {
  //     this.realEstates.sort((b, a) => a.name.localeCompare(b.name)) // ordre descendant
  //   }
  //
  //
  // }

   getSortedData(data, prop, isAsc) {
    return data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1));
  }

  onSort(parameter) {
     const toSort = parameter['toSort'];
     const isAsc = parameter['isAsc'];
    return this.realEstates.sort((a, b) => (a[toSort] < b[toSort] ? -1 : 1) * (isAsc ? 1 : -1));
   }

 // onSort(parameter) {
 //    console.log(parameter)
 //    const order = parameter['order'];
 //    const toSort = parameter['toSort'];
 //
 //    if (order === this.ASC) {
 //      this.realEstates.sort(this.ascSort) // ordre descendant
 //    }
 //
 //    if (order === this.DESC) {
 //      this.realEstates.sort(this.descSort) // ordre descendant
 //    }
 //
 //  }

   ascSort(a, b) {
    console.log('on est dans lasc')
    if (a.this.toSort < b.this.toSort) return -1;
    if (a.this.toSort > b.this.toSort) return 1;
    return 0;
  }

  descSort(a, b) {
    if (a[this.toSort] < b[this.toSort]) return -1;
    if (a[this.toSort] > b[this.toSort]) return 1;
    return 0;
  }

  // ascSort(a, b) {
  //   if (a.this.toSort < b[this.toSort]) return -1;
  //  if (a[this.toSort] > b[this.toSort]) return 1;
  //   return 0;
  // }
  //
  // descSort(a, b) {
  //   if (a[this.toSort] < b[this.toSort]) return -1;
  //   if (a[this.toSort] > b[this.toSort]) return 1;
  //   return 0;
  // }

}
