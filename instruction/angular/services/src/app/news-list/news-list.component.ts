import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newSource = { source: '' };

  news: object = { source: '', articles: [] };

  sources: object[] = [
    { name: 'ABC News (AU)', value: 'abc-news-au' },
    { name: 'Al Jazeera English', value: 'al-jazeera-english' },
    { name: 'Ars Technica', value: 'ars-technica' },
    { name: 'Associated Press', value: 'associated-press' },
    { name: 'BBC News', value: 'bbc-news' },
    { name: 'BBC Sport', value: 'bbc-sport' },
    { name: 'Bild', value: 'bild' },
    { name: 'Bloomberg', value: 'bloomberg' },
    { name: 'Business Insider', value: 'business-insider' },
    { name: 'Business Insider (UK)', value: 'business-insider-uk' },
    { name: 'Buzzfeed', value: 'buzzfeed' },
    { name: 'CNBC', value: 'cnbc' },
    { name: 'CNN', value: 'cnn' },
    { name: 'Daily Mail', value: 'daily-mail' },
    { name: 'Der Tagesspiegel', value: 'der-tagesspiegel' },
    { name: 'Die Zeit', value: 'die-zeit' },
    { name: 'ESPN', value: 'espn' },
    { name: 'Hacker News', value: 'hacker-news' },
  ];

  constructor(private _newsService: NewsService) { }

  ngOnInit() {
  }

  getNews() {
    this._newsService.getNews(
      this.newSource.source,
      (news) => this.news = news
    );
  }

}
