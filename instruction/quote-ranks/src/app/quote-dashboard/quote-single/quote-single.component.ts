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

  constructor() { }

  ngOnInit() {
    console.log(this.index);
  }

  increaseVote() {
    this.quote.votes++;
    // set of an event emitter
  }

  decreaseVote() {
    if (this.quote.votes < 2){
      this.quote.votes = 0;
    } else {
      this.quote.votes--;
    }
  }

  destroyQuote() {
    // set off an event emitter
    this.destroyQuoteEvent.emit(this.index);
  }

}
