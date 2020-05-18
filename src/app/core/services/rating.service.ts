import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  calculateRating(ratings: any): any {
 
    let arrayRatings = ratings.filter(item => item.rating).map( item => item.rating )
    let totalRating = arrayRatings.reduce((a, b) => a + b, 0);
    let finallyRating = (totalRating/arrayRatings.length).toFixed(2);

    return finallyRating;
  }

}