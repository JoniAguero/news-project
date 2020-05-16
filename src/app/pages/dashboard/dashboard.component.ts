import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { New } from 'src/app/core/models/new.model';
import { ImagesService } from 'src/app/core/services/images.service';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/posts.service';
import { MaterialService } from 'src/app/core/material/material.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  images: any [] = [];
  posts: Post [] = [];
  myNew = true;
  _showAddPost: boolean = false;

  constructor(
    private imagesService: ImagesService,
    private postService: PostService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getImages();
    this.getMyPosts();
  }

  getImages() {
    this.imagesService.getImages().subscribe((res: any ) => {
      this.images = res.data.results.map(element => element.urls.full);
    })
  }

  getMyPosts() {
    this.postService.getMyPosts().subscribe(data => {
      this.posts = data;
    })
  }

  showAddPost() {
    this._showAddPost = !this._showAddPost;
  }

  callbackLoadPosts() {
    this.getMyPosts();
  }

}
