import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Comment } from "../models/comment.model";
import { throwError, Observable } from "rxjs/";
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { PostService } from './posts.service';

@Injectable({
  providedIn: "root"
})
export class CommentService {
  
  private url = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService,
    private postService: PostService
  ) {}

  getComments(idPost: any): Observable<Comment[]> {
    try {
      return this.http.get(`${this.url}/comments/post/${idPost}`).pipe(
        map((resp: any) => {
          resp = resp.map(comment => this.hydrateComment(comment));
          return resp;
        }),
        catchError(err => {
          throw err;
        })
      );
    } catch (error) {
      return throwError(error);
    }
  }

  createComment(_comment: Comment): Observable<Comment>  {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const userId = localStorage.getItem('userId');
    try {
      if(userId && this.authService.loggedIn) {
        return this.http.post<Comment>(`${this.url}/comments/`, _comment, options);
      } else {
        throw 'You must be logged';
      }
    } catch (error) {
      return throwError(error);
    }
  }

  private hydrateComment(data: any): Comment {
    const comment = new Comment(data);
    if (data.userId) this.userService.getUserById(data.userId).subscribe((user)=> comment.userId = user[0]);
    if (data.postId) this.postService.getPostById(data.postId).subscribe((post)=> comment.postId = post[0]);
    return comment;
  }
  
}
