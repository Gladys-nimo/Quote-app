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
         new Quote('you are always right','Gladys'),
         new Quote('you are always perfect','Grace'),
       ];
  quoteDetails(index) {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
   constructor() {}

  ngOnInit(): void {

  }

}


     

