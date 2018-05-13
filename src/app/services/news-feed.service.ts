import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class NewsFeedService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get('https://briephlydev.herokuapp.com/api/newsfeeds');
  }

}
