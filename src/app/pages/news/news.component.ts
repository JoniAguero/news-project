import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { New } from 'src/app/core/models/new.model';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: New [] = [];

  constructor(private newsService: NewsService, private userService: UserService) { }

  ngOnInit(): void {
    this.newsService.getGoogleNews().subscribe( res => {
      this.news = res.data;
      console.log(this.news);
      
    });
  }

}
