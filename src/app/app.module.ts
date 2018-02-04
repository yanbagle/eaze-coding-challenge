import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayGifsComponent } from './gifs/display-gifs/display-gifs.component';
import { GifsComponent } from './gifs/gif.component';
import {HttpClientModule} from '@angular/common/http';
import {GiphyApiService} from './service/giphy-api.service';
import { SearchGifsComponent } from './gifs/search-gifs/search-gifs.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DisplayGifsComponent,
    GifsComponent,
    SearchGifsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GiphyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
