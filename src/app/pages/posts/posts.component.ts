import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post [] = [];
  detailPost: Post;
  viewDetailPost: boolean = false;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((data: any ) => {
      this.posts = data;
    })
  }

  callbackViewPost(e) {
    this.viewDetailPost = true;
    this.detailPost = e;
  }

  callbackViewAllPosts(e) {
    this.viewDetailPost = false;
  }


}
