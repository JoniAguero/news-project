import { Component, OnInit, Input } from '@angular/core';
import { New } from 'src/app/core/models/new.model';
import { NewsService } from 'src/app/core/services/news.service';
import { MaterialService } from 'src/app/core/material/material.service';
import { MatDialog } from '@angular/material/dialog';
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
    private _materialService: MaterialService
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

}
