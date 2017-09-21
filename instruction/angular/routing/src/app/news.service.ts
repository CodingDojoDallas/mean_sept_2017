import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService {

  news: any[];

  constructor(private _http: Http) { }

  getNews(source: string, callback: Function) {
    this._http.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=74f00375381343868c18c9c41924903e`).subscribe(
      (response) => {
        this.news = response.json();
        callback(this.news);
      },
      (err) => console.log(err)
    );
  }

}
