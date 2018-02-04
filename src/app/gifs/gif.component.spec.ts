import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsComponent } from './gif.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GiphyApiService} from '../service/giphy-api.service';
import {Observable} from 'rxjs/Observable';
import {GifDTO} from '../models/GifDTO';
import 'rxjs/add/observable/of';

class MockGiphyApiService {

  getTrendyGifs(offset): Observable<GifDTO> {
    return Observable.of({data: [], pagination: {}, meta: {}});
  }
  getGifs(keyword, offset): Observable<GifDTO> {
    return Observable.of({data: [keyword], pagination: {}, meta: {}});
  }
}

describe('TrendyGifsComponent', () => {
  let component: GifsComponent;
  let fixture: ComponentFixture<GifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{provide: GiphyApiService, useClass: MockGiphyApiService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.gifs.length).toBe(0);
  });

  it('should get gifs based on keyword', () => {
    component.searchGif('keyword');
    expect(component.gifs[0]).toBe('keyword');
  });

});
