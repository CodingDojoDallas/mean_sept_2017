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
  increaseVote(){
    console.log('Vote has been increased')
    this.quote.votes++;
  }
  decreaseVote(){
    if (this.quote.votes < 2){
      this.quote.votes = 0;
    }else{
    this.quote.votes--;
  }
 }
 destroyQuote(){
   this.destroyQuoteEvent.emit(this.index)
 }
}
