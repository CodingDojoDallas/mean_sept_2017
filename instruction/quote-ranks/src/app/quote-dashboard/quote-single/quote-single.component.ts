import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-single',
  templateUrl: './quote-single.component.html',
  styleUrls: ['./quote-single.component.css']
})
export class QuoteSingleComponent implements OnInit {

  @Input() quote: Quote;

  @Input() index: number;

  @Output() destroyQuoteEvent = new EventEmitter();

  @Output() sortQuotesEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increaseVote(): void {
    this.quote.votes++;
    this.sortQuotesEvent.emit();
  }

  decreaseVote(): void {
    if (this.quote.votes < 2) {
      this.quote.votes = 0;
    } else {
      this.quote.votes--;
    }
    this.sortQuotesEvent.emit();
  }

  destroyQuote(): void {
    this.destroyQuoteEvent.emit(this.quote);
  }

}
