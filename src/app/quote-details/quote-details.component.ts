import { Quote } from './../quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 @Input() quote: Quote;
 @Output() isComplete = new EventEmitter<boolean>();


upvote(){
  this.quote.likes+=1;
}

downvote(){
  this.quote.dislikes+=1;
}
  constructor() { }

  ngOnInit(): void {
  }

}
