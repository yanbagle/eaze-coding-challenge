import { Component, OnInit } from '@angular/core';
import {GiphyApiService} from '../service/giphy-api.service';
import {Gif} from '../models/Gif';

@Component({
  selector: 'app-gifs',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifsComponent implements OnInit {

  // gifs to be passed down to display-gifs component
  public gifs: Gif[] = [];

  constructor(private giphyApiService: GiphyApiService) { }

  // when app launches, call api to get trendy gifs
  ngOnInit() {
    this.giphyApiService.getTrendyGifs(0).subscribe((res) => {
      this.gifs = res.data;
    }, (error) => {
      console.log(error);
    });
  }

  public searchGif (keyword) {
    this.giphyApiService.getGifs(keyword, 0).subscribe((res) => {
      this.gifs = res.data;
    }, (error) => {
      console.log(error);
    });
  }

}
