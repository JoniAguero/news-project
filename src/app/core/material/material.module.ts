import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { SnackComponent } from './snackbar/snabkbar.component';

@NgModule({
    imports: [
      CommonModule,
      MatMenuModule,
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatSnackBarModule
    ],
    declarations: [
      SnackComponent
    ],
    exports: [
      MatMenuModule,
      MatIconModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatSnackBarModule
    ]
})
export class MaterialModule { }
