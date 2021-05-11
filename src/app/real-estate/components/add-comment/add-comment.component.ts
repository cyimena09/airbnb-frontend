import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/comment';
import {FormBuilder, Validators} from '@angular/forms';
import {CommentService} from '../../services/comment/comment.service';
import {RealEstate} from '../../models/realEstate';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  commentForm;
  @Input() realEstateId

  constructor(private formBuilder: FormBuilder, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.commentForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  onSendComment() {
    let value = this.commentForm.value;
    // on ajoute les valeurs du comment
    let comment = new Comment();
    comment.text = value.text;
    // on ajoute l'id du real estate dans un objet real estate
    let realEstate = new RealEstate();
    realEstate.id = this.realEstateId;
    // on ajoute le real estate dans l'objet comment
    comment.realEstate = realEstate;

    this.commentService.addComment(comment).subscribe(
      () => {
        console.log('Le commentaire a été ajouté');

        this.commentService.commentSubject.next();
      }
    );
  }

}
