import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote'
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
  }

  decreaseVote() {
    if(this.quote.votes >= 1){
      this.quote.votes--;
    }
  }

  destroyQuote() {
    this.destroyQuoteEvent.emit(this.index);
  }

}
