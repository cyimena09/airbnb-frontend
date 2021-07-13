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
        // We implement the passage to the line.
        let comments = response['content'];
        comments.forEach(element => {
          element['text'] = element['text'].replaceAll('\n', '<br>');
        });
        return comments;
      }));
  }

  createComment(comment) {
    console.log(comment);
    return this.httpClient.post(this.apiURL, comment);
  }
}
