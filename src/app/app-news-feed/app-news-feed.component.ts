import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsFeedService } from '../services/news-feed.service'

@Component({
  selector: 'app-news-feed',
  templateUrl: './app-news-feed.component.html',
  styleUrls: ['./app-news-feed.component.css']
})
export class AppNewsFeedComponent implements OnInit {
  public allnews;

  constructor(
    private http: HttpClient,
    private newsFeedService: NewsFeedService
  ) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
   this.newsFeedService.getNews().subscribe(
     data => { this.allnews = data; },
     err => console.error(err),
     () => console.log('done loading news', this.allnews)   );
  }

}
