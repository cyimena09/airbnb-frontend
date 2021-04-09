import {Component, OnInit} from '@angular/core';
import {Comment} from '../../../../lib/models/comment';
import {RealEstate} from '../../../../lib/models/real-estate';
import {FormBuilder, Validators} from '@angular/forms';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  commentForm;

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
    realEstate.id = 1;
    // on ajoute le real estate dans l'objet comment
    comment.realEstate = realEstate;

    this.commentService.addComment(comment).subscribe(
      () => {
        // Todo on prévient qu'un nouveau commentaire a été ajouté
        console.log('Le commentaire a été ajouté');
      }
    );
  }
}
