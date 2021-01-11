import { Component, OnInit } from '@angular/core';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {RealEstate} from '../../models/RealEstate';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  realEstates: [RealEstate];
  loading = false;
  catalogForm: FormGroup;

  constructor(private realEstateService: RealEstateService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getRealEstates();
  }

  initForm(): void {
    this.catalogForm = this.formBuilder.group({
      type: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  getRealEstates(){
    this.realEstateService.getRealEstates().subscribe(
      (data: any) => {
        this.realEstates = data.content;
      },
      () => {
        console.log("Une erreur est survenue")
      });
  }

  onSearch(){
    let type = this.catalogForm.value.type;

     type = "vaiselle";

    this.realEstateService.searchRealEstate(type).subscribe(
      (data: any) => {
        this.realEstates = data.content;
        console.log(data)
      },
      (error) => {console.log(error)})
    }


    // this.loading = true;
    // let newRE = new RealEstate();
    // newRE.type = this.catalogForm.value.type;
    // this.realEstateService.createRealEstate(newRE).subscribe(
    //   () => {
    //     console.log("Le bien a été créé")
    //     this.loading = false;
    //   },
    //   (message) => {
    //     console.log(message.error);
    //     this.loading = false;
    //   });

 // }


  get f() {
    return this.catalogForm.controls;
  }



}
