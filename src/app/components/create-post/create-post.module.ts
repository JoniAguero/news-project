import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgPostModule } from '../img-post/img-post.module';



@NgModule({
  declarations: [CreatePostComponent],
  exports: [CreatePostComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ImgPostModule
  ]
})
export class CreatePostModule { }
