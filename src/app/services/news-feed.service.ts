import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class NewsFeedService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('https://api.myjson.com/bins/x5g4x');
  }

}
