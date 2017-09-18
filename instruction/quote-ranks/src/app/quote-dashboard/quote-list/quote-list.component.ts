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

  destroyQuote(idx) {
    console.log('testing event');
    // another event emitter
    this.destroyQuoteEvent.emit(idx);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.quotes);
  }

}
