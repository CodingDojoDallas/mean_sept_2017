import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.css']
})
export class QuoteDashboardComponent implements OnInit {
  quotes: Quote[] = [];

  createQuote(newQuote) {
      console.log(newQuote);
      this.quotes.push(newQuote);
  }

  destroyQuote(index){
      this.quotes.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
