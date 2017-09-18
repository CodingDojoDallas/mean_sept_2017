import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.css']
})
export class QuoteDashboardComponent implements OnInit {
  quotes: Quote[] = [];

  constructor() { }

  ngOnInit() {
  }

  createQuote(newQuote: Quote): void {
    this.quotes.push(newQuote);
  }

  destroyQuote(quote: Quote): void {
    this.quotes.splice(this.quotes.indexOf(quote), 1);
  }

  sortQuotes(): void {
    this.quotes.sort(compare);
  }
  
}

function compare(a: Quote, b: Quote): number {
  if (a.votes > b.votes) {
    return -1;
  }
  if (a.votes < b.votes) {
    return 1;
  }
  return 0;
}
