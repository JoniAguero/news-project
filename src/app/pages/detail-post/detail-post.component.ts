import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CommentModalComponent } from 'src/app/core/material/modal/comment-modal/comment-modal.component';
import { Comment } from 'src/app/core/models/comment.model';
import { CommentService } from 'src/app/core/services/comment.service';
import { MaterialService } from 'src/app/core/material/material.service';
import { RatingService } from 'src/app/core/services/rating.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnChanges, OnDestroy {

  @Input() post: Post;
  @Output() callbackViewAllPosts = new EventEmitter();

  subscriptionRouter: Subscription = new Subscription();
  enabledButtonComment: boolean = false;
  comentario = '';
  rating;
  comments: Comment [];
  ratingTotalPost: any;
  haveRating: boolean = false; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private commentService: CommentService,
    private _materialService: MaterialService,
    private ratingService: RatingService
  ) {
    this.subscriptionRouter.add(this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd ),
      filter((url: any) => !url.url.includes("posts")),
      tap(() => this.callbackViewAllPosts.emit(true))
    ).subscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.router.navigate([`posts/${this.post._id}`]);
    this.getComments();
  }

  getComments() {
    this.commentService.getComments(this.post._id).subscribe( data => {
      this.comments = data;
      this.calculateRating(this.comments);
    })
  }

  ngOnDestroy() {
    this.subscriptionRouter.unsubscribe();
  }

  back() {
    this.router.navigate([''])
    this.callbackViewAllPosts.emit(true);
  }

  calculateRating(comments: any) {
    this.ratingTotalPost = this.ratingService.calculateRating(comments);
    if(this.ratingTotalPost > 0) {
      this.haveRating = true;
    }
  }

  newComment() {
    this.enabledButtonComment = false;
    this.openDialogCommentRating();
  }

  onFocus() {
    this.enabledButtonComment = true;
  }

  openDialogCommentRating(): void {
    const dialogRef = this.dialog.open(CommentModalComponent, {
      width: '250px',
      data: {action: 'Puntuar'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.rating = result;
      }
      const comment = this.buildComment();
      this.commentService.createComment(comment).subscribe( res => {
        this.comentario = '';
        this.getComments();
      }, error => {
        this._materialService.openSnackBar(error)
      })
    });
  }

  buildComment(): Comment {
    let comment = new Comment();
    const userId = localStorage.getItem('userId');
    comment.content = this.comentario;
    comment.rating = this.rating;
    comment.publishedAt = new Date();
    comment.userId = userId;
    comment.postId = this.post._id;

    return comment;
  }

}
