import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
     
     quotes:Quote[] = [
       {id:1,name:'Way of obedience way of blessing'},
       {id:2,name:'Ignore the Bible, invite disaster'}
     ];

  constructor() { }

  ngOnInit(): void {
  }

}
