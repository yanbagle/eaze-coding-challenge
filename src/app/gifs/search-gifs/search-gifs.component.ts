import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css']
})
export class SearchGifsComponent implements OnInit {

  @Output() keywordOutput: EventEmitter<any> = new EventEmitter();
  @Output() loadMoreGifs: EventEmitter<any> = new EventEmitter();

  public userSearch: string;

  constructor() { }

  ngOnInit() {
  }

  public sendUserInput () {
    this.keywordOutput.emit(this.userSearch);
  }

  public loadMore () {
    this.loadMoreGifs.emit(true);
  }

}
