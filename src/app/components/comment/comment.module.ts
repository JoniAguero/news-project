import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [CommentComponent],
  exports: [CommentComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CommentModule { }
