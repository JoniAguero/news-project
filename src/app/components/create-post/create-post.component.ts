import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/core/models/post.model';
import { MaterialService } from 'src/app/core/material/material.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, OnChanges {

  @Input() images;
  @Output() callbackLoadPosts = new EventEmitter();
  
  titleFormGroup: FormGroup;  
  descriptionFormGroup: FormGroup;
  imageSelected: number;

  constructor(
    private _formBuilder: FormBuilder,
    private postService: PostService,
    private _materialService: MaterialService
  ) {}

  ngOnInit() {
    this.formBuilder();
  }

  ngOnChanges(changes: SimpleChanges) {}

  formBuilder() {
    this.titleFormGroup = this._formBuilder.group({
      title: ['', Validators.required]
    });
    this.descriptionFormGroup = this._formBuilder.group({
      description: ['', Validators.required]
    });
  }

  selectImage(index) {
    this.imageSelected = index;
  }

  createPost() {
    const post = this.buildPost();
    this.postService.createPost(post).subscribe( res => {
      this.callbackLoadPosts.emit(true);
      this._materialService.openSnackBar('New post created');
    },
    error => {
      this._materialService.openSnackBar(error)
    })
  }

  buildPost(): Post {
    let post = new Post();
    const userId = localStorage.getItem('userId');
    post.title = this.titleFormGroup.value.title;
    post.description = this.descriptionFormGroup.value.description;
    post.imageUrl = this.images[this.imageSelected];
    post.publishedAt = new Date();
    post.userId = userId;
    return post;
  }

}
