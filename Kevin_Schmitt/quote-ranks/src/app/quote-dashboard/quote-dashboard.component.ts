import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-dashboard',
  templateUrl: './quote-dashboard.component.html',
  styleUrls: ['./quote-dashboard.component.css']
})
export class QuoteDashboardComponent implements OnInit {

  quotes: Quote[] = [];

  // recieving newQuote from child component by EventEmit
  createQuote(newQuote){
    console.log('...adding quote to database')
    this.quotes.push(newQuote);
    console.log(this.quotes)
  }
  deleteQuote(idx){
    console.log('dashboard')
    this.quotes.splice(idx, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
