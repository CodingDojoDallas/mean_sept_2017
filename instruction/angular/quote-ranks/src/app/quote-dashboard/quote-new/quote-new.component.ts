import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {

  @Output() createQuoteEvent = new EventEmitter();

  newQuote: Quote = new Quote();

  constructor() { }

  ngOnInit() {
  }

  createQuote(): void {
    this.createQuoteEvent.emit(this.newQuote);
    this.newQuote = new Quote();
  }

}
