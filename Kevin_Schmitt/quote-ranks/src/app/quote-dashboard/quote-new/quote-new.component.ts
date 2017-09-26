import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {

  @Output() createQuoteEvent = new EventEmitter();

  newQuote: Quote = {
    quote: '',
    author: '',
    votes: 0,
  };
  createQuote(){
    this.createQuoteEvent.emit(this.newQuote)
    this.newQuote = {
      quote: '',
      author: '',
      votes: 0,
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
