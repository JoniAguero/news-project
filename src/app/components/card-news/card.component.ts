import { Component, OnInit, Input } from '@angular/core';
import { New } from 'src/app/core/models/new.model';
import { NewsService } from 'src/app/core/services/news.service';
import { MaterialService } from 'src/app/core/material/material.service';
import { MatDialog } from '@angular/material/dialog';
import { PostModalComponent } from 'src/app/core/material/modal/post-modal/post-modal.component';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() new: New;
  @Input() myNew: boolean = false;

  constructor(
    private newsService: NewsService,
    private postService: PostService,
    private _materialService: MaterialService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  goToNew(url: string) {
    window.open(url, "_blank");
  }

  save(newSelected: New) {
    this.newsService.createNew(newSelected).subscribe(data => {
      this._materialService.openSnackBar('Saved');
    },
    error => {
      this._materialService.openSnackBar(error);
    })
  }

  createPost(newSelected: New) {
    
    const dialogRef = this.dialog.open(PostModalComponent, {
      width: '500px',
      data: {title: 'Create Post', action: 'Create'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const userId = localStorage.getItem('userId');

        let post: Post = new Post();
        post.title = result.value.title;
        post.description = result.value.description;
        post.newId = newSelected._id;
        post.userId = userId;
        post.publishedAt = new Date();

        this.postService.createPost(post).subscribe(data => {
          this._materialService.openSnackBar('Saved');
        },
        error => {
          this._materialService.openSnackBar(error);
        })
      }
    });
  }

}
