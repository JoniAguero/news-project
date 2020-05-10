import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs/";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ImagesService {
  
  private url = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get(`${this.url}/images`).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  };
  
}
