import { QuoteDetailsComponent } from './../quote-details/quote-details.component';
import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
      export class QuoteComponent implements OnInit{

       quotes: Quote[] = [
        new Quote(1, 'Gladys', 'Nimo', 'you are the best', 0,0),
        new Quote(2,'Grace', 'shiko', 'forever you are', 0,0),
       ];
    
  displayQuoteDetails(index) {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  // completeQuote(isComplete, index){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }
   constructor() {}

  ngOnInit(): void {

  }

}


