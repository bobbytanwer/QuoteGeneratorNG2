import { Component } from '@angular/core';
import {QuoteService} from '../service/quote.service'


@Component({
  moduleId:module.id,
  selector: 'quote',
  templateUrl: './quote.component.html',
  providers:[QuoteService]
})
export class QuoteComponent {
  name:string;
  quote:Quote[];
  showQuote:boolean;


  /*Create a Constructor for the class being exported*/
  constructor() {

    //this.quotes = ['Life is Good','Life can be Great',' Live for Today','Live in the Moment']
    this.showQuote = true;


  }
  getQuote(){
    console.log('test');
  }

  

}


