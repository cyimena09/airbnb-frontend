import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../../../services/real-estate/real-estate.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RealEstate} from '../../../../models/RealEstate';

@Component({
  selector: 'app-real-estate-detail',
  templateUrl: './real-estate-detail.component.html',
  styleUrls: ['./real-estate-detail.component.scss']
})
export class RealEstateDetailComponent implements OnInit {

  ngOnInit() {
  }
}
