import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RealEstateService} from '../../services/real-estate/real-estate.service';
import {Comment} from '../../models/comment';
import {CommentService} from '../../services/comment/comment.service';
import {RealEstate} from '../../models/realEstate';

@Component({
  selector: 'app-real-estate-learn-more',
  templateUrl: './real-estate-learn-more.component.html',
  styleUrls: ['./real-estate-learn-more.component.scss']
})
export class RealEstateLearnMoreComponent implements OnInit {

  id;
  realEstate: RealEstate;
  comments: Comment[];

  constructor(
    private realEstateService: RealEstateService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getRealEstate();
    this.getCommentsByRealEstateId();

    // subscription au commentaire
    this.commentService.commentSubject.subscribe(
      () => {
        console.log('Rechargement des commentaires');
        this.getCommentsByRealEstateId();
      }
    );
  }

  getRealEstate() {
    this.realEstateService.getRealEstateById(this.id).subscribe(
      (data: RealEstate) => {
        this.realEstate = data;
      }
    );
  }

  getCommentsByRealEstateId() {
    this.commentService.getCommentsByRealEstateId(this.id).subscribe(
      (data: Comment[]) => {
        this.comments = data;
      }
    );
  }

}
