import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Input() quotes: Quote[];

  @Output() destroyQuoteEvent = new EventEmitter();

  @Output() sortQuotesEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  destroyQuote(quote: Quote): void {
    this.destroyQuoteEvent.emit(quote);
  }

  sortQuotes(): void {
    this.sortQuotesEvent.emit();
  }

}
