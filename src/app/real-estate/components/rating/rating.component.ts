import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
ctrl = 5
  constructor() { }

  ngOnInit(): void {
  }








  onClick(){
    this.saveRate();
  }

  saveRate(){
    // this.film.rate = this.ctrl.value
    // return this.moviesService.updateMovie(this.film.movieID, this.film).subscribe();
  }



}
