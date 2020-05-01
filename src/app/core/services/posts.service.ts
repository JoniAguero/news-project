import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

import { throwError, Observable } from "rxjs/";
import { New } from '../models/new.model';
import { AuthService } from './auth.service';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: "root"
})
export class PostService {
  
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getMyPosts(): Observable<Post> {
    
    const userId = localStorage.getItem('userId');

    try {
      if(userId && this.authService.loggedIn) {
        return this.http.get(`${this.url}/pots/user/${userId}`).pipe(
          map((resp: any) => {
            return resp;
          }),
          catchError(err => {
            return throwError(err);
          })
        );
      } else {
        throw 'You must be logged';
      }
    } catch (error) {
      return throwError(error);
    }
    
  }

  createPost(_post: Post): Observable<Post>  {

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    const userId = localStorage.getItem('userId');

    try {
      if(userId && this.authService.loggedIn) {
        return this.http.post<Post>(`${this.url}/posts/`, _post, options);
      } else {
        throw 'You must be logged';
      }
    } catch (error) {
      return throwError(error);
    }
    
  }
  
}
