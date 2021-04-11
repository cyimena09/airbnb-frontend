import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiURL = '/api/v1/assets/comments/';

  commentSubject = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  getCommentsByRealEstateId(id) {
    return this.httpClient.get(this.apiURL + id).pipe(
      map(response => {
        // on implémente le passage à la ligne des commentaires
        let comments;
        comments = response;
        comments.forEach(element => {
          element['text'] = element['text'].replaceAll('\n', '<br>');
        });

        return comments;
      })
    );
  }

  addComment(comment) {
    return this.httpClient.post(this.apiURL, comment);
  }
}
