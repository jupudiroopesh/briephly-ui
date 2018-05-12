import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-feed',
  templateUrl: './app-news-feed.component.html',
  styleUrls: ['./app-news-feed.component.css']
})
export class AppNewsFeedComponent implements OnInit {
  public myFilms;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.myFilms = this.http.get('https://api.myjson.com/bins/x5g4x');
  }

}
