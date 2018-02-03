import { Component, OnInit } from '@angular/core';
import {GiphyApiService} from '../service/giphy-api.service';
import {Gif} from '../models/Gif';

@Component({
  selector: 'app-trendy-gifs',
  templateUrl: './trendy-gifs.component.html',
  styleUrls: ['./trendy-gifs.component.css']
})
export class TrendyGifsComponent implements OnInit {

  // gifs to be passed down to display-gifs component
  public gifs: Gif[] = [];

  constructor(private giphyApiService: GiphyApiService) { }

  // when app launches, call api to get trendy gifs
  ngOnInit() {
    this.giphyApiService.getTrendyGifs(5).subscribe((res) => {
      this.gifs = res.data;
    }, (error) => {
      // handle error
    });
  }

}
