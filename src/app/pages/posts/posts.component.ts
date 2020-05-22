import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions/index';
import { AppState } from 'src/app/store/app.reducer';

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
    private store: Store<AppState>
  ) {
    this.store.dispatch(actions.loadPosts());
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.store.select('posts').subscribe( data => {
      this.posts = data.posts;
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
