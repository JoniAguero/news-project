import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/";
import { New } from '../models/new.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: "root"
})
export class UserService {
  
  private url = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<New>  {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<New>(`${this.url}/users/`, user, options);
  }
  
}
