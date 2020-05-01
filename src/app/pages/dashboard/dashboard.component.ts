import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { New } from 'src/app/core/models/new.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  news: New [] = [];
  myNew = true;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getMyNews();
  }

  getMyNews() {
    this.newsService.getMyNews().subscribe(data => {
      this.news = data;
    })
  }

}
