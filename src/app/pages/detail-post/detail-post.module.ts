import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPostComponent } from './detail-post.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { CommentModule } from 'src/app/components/comment/comment.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailPostComponent],
  exports: [DetailPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CommentModule
  ]
})
export class DetailPostModule { }
