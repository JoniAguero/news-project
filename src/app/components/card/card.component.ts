import { Component, OnInit, Input } from '@angular/core';
import { New } from 'src/app/core/models/new.model';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() new: New;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  goToNew(url: string) {
    window.open(url, "_blank");
  }

  save(newSelected: New) {
    this.newsService.createNew(newSelected).subscribe(data => {
      console.log(data);
    })
  }

}
