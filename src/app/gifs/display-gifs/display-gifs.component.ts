import {
  AfterViewChecked, ApplicationRef, ChangeDetectorRef, Component, HostListener, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {Gif} from '../../models/Gif';

@Component({
  selector: 'app-display-gifs',
  templateUrl: './display-gifs.component.html',
  styleUrls: ['./display-gifs.component.css']
})
export class DisplayGifsComponent implements OnInit, OnChanges {

  // gifs comes from gifs component
  @Input() gifs: Gif[];
  public loaded = true;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  // detecting when user is at bottom of page
  // this does not play nicely with iFrames
  // @HostListener("window:scroll", [])
  // onScroll(): void {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     // emit back to smart component, and do service call to get another set of gifs
  //   }
  // }

  // unable to use (load) functionality to detect when iFrame is done loading
  // using ngOnChanges in the mean time
  public ngOnChanges (changes: SimpleChanges) {
    if (changes['gifs'] && this.gifs.length > 0) {
      this.loaded = true;
    }
  }

}
