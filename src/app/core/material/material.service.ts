import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from './snackbar/snabkbar.component';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(text) {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 3000,
      data : {
        text,
        style: {
          color: 'white'
        }
      }
    });
  }

}