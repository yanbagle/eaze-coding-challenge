import {
  AfterViewChecked, ApplicationRef, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnChanges, OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {Gif} from '../../models/Gif';

@Component({
  selector: 'app-display-gifs',
  templateUrl: './display-gifs.component.html',
  styleUrls: ['./display-gifs.component.css']
})
export class DisplayGifsComponent implements OnInit {

  // gifs comes from gifs component
  @Input() gifs: Gif[];

  public loaded = false;

  constructor(public sanitizer: DomSanitizer) { }

  // unable to use (load) functionality to detect when iFrame is done loading
  // using setTimeout in the mean time
  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 15000);
  }

  // detecting when user is at bottom of page
  // this does not play nicely with iFrames
  // @HostListener("window:scroll", [])
  // onScroll(): void {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     // emit back to smart component, and do service call to get another set of gifs
  //   }
  // }

}
