import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class NewsService {

  constructor(private _http: Http) { }
  getNews(source: string){
    this._http.get('www.dallasnews.com');
  }
}
