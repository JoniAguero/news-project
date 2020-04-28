import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

import { throwError, Observable } from "rxjs/";
import { New } from '../models/new.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class NewsService {
  
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getGoogleNews() {
    
    return this.http.get(`${this.url}/google-news`).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  createNew(_new: New): Observable<New>  {

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    const userId = localStorage.getItem('userId');

    try {
      if(userId && this.authService.loggedIn) {
        _new.userId = userId;
        return this.http.post<New>(`${this.url}/news/`, _new, options);
      } else {
        throw 'You must be logged';
      }
    } catch (error) {
      return throwError(error);
    }
    
  }
  
}
