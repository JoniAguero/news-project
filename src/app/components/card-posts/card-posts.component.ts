import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { MaterialService } from 'src/app/core/material/material.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentModalComponent } from 'src/app/core/material/modal/comment-modal/comment-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.scss']
})
export class CardPostsComponent implements OnInit {

  @Input() post: Post;
  @Output() callbackViewPost = new EventEmitter<any>();

  userId: any;
  showDescription: string;

  constructor(
    private authService: AuthService,
    private _materialService: MaterialService,
    public dialog: MatDialog
  ) {
    this.userId= localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.showDescription = `${this.post.description.slice(0, 200)}...`;
  }

  view() {
    this.callbackViewPost.emit(this.post);
  }

  delete() {
    console.log('delete');
  }

  createComment() {
    
    const dialogRef = this.dialog.open(CommentModalComponent, {
      width: '500px',
      data: {title: 'Do a Comment', action: 'Comment'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(result);
        
        // const userId = localStorage.getItem('userId');

        // let post: Post = new Post();
        // post.title = result.value.title;
        // post.description = result.value.description;
        // post.newId = newSelected._id;
        // post.userId = userId;
        // post.publishedAt = new Date();

        // this.postService.createPost(post).subscribe(data => {
        //   this._materialService.openSnackBar('Saved');
        // },
        // error => {
        //   this._materialService.openSnackBar(error);
        // })
      }
    });
  }

}
