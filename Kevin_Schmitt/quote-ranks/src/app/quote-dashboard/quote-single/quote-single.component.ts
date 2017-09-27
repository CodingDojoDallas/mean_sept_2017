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
  @Output() deleteQuoteEvent = new EventEmitter

  constructor() { }

  ngOnInit() {
  }
  increaseVote(){
    this.quote.votes++;
  }
  decreaseVote(){
    if(this.quote.votes > 0){
      this.quote.votes--;
    }
  }
  deleteQuote(){
    console.log('single')
    console.log(this.index)
    this.deleteQuoteEvent.emit(this.index)
  }
}
