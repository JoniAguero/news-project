import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule} from '@angular/material/stepper';
import { SnackComponent } from './snackbar/snabkbar.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentModalComponent } from './modal/comment-modal/comment-modal.component';
import { RatingsComponent } from './ratings/ratings.component';
@NgModule({
  declarations: [SnackComponent, ModalComponent, CommentModalComponent, RatingsComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    ScrollingModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatStepperModule
  ],
  exports: [
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    ScrollingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule
  ],
  entryComponents: [CommentModalComponent],

})
export class MaterialModule {}

