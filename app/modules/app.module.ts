import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from '../components/app.component';
import {QuoteComponent} from '../components/quote.component';
import {QuoteService} from '../services/quote.service';
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, QuoteComponent ],
  bootstrap:    [ AppComponent ],
 // entryComponents:[QuoteComponent],
  providers: []

})
export class AppModule { }
