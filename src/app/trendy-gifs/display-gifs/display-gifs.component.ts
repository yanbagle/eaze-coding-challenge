import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {Gif} from '../../models/Gif';

@Component({
  selector: 'app-display-gifs',
  templateUrl: './display-gifs.component.html',
  styleUrls: ['./display-gifs.component.css']
})
export class DisplayGifsComponent implements OnInit {

  // gifs comes from trendy-gifs component
  @Input() gifs: Gif[];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public gifPopup () {
    console.log('gif popup');
  }
}
