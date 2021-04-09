import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiURL = '/api/v1/comments/';

  constructor(private httpClient: HttpClient) {
  }

  getCommentsByRealEstateId(id) {
    id = 1;
    return this.httpClient.get(this.apiURL + id);
  }

  addComment(comment) {
    console.log(comment.text);
    return this.httpClient.post(this.apiURL, comment);
  }
}
