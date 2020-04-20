import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

import { Observable, throwError } from "rxjs/";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  

  private url = 'http://localhost:8080/api/news';
  constructor(private http: HttpClient) {}

  getNews() {
    
    return this.http.get(this.url).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
  
}
