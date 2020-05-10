import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgPostComponent } from './img-post.component';

@NgModule({
  declarations: [ImgPostComponent],
  exports: [ImgPostComponent],
  imports: [
    CommonModule
  ]
})
export class ImgPostModule { }
