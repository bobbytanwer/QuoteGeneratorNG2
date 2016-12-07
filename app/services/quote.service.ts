import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Quote } from '../services/mock-quotes';

@Injectable()

export class QuoteService {

  constructor(private http:Http) {
    console.log('QuoteService initialized...');
  }

  getQuotes(): QUOTE[]{
    return 
  }

}
