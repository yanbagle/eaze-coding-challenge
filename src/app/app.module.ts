import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayGifsComponent } from './trendy-gifs/display-gifs/display-gifs.component';
import { TrendyGifsComponent } from './trendy-gifs/trendy-gifs.component';
import {HttpClientModule} from '@angular/common/http';
import {GiphyApiService} from './service/giphy-api.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayGifsComponent,
    TrendyGifsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GiphyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
