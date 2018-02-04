import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GiphyApiService} from './giphy-api.service';

describe('GiphyServiceApi', () => {

  const url = 'http://api.giphy.com/';
  const apiKey = '4sfcoyKKPW4OCzYwrID2o6G8mdOO2YWZ';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule,
        HttpClientTestingModule ],
      providers: [ GiphyApiService ]
    })
      .compileComponents();
  }));

  it(`should be created`, inject([GiphyApiService], (service: GiphyApiService) => {
    expect(service).toBeTruthy();
  }));

  it(`should get gifs based on keyword`, async(inject([GiphyApiService, HttpTestingController],
    (service: GiphyApiService, httpMock: HttpTestingController) => {

      service.getTrendyGifs(0)
        .subscribe(data => expect(data).toEqual({data: [], pagination: {}, meta: {}}));

      const thisUrl = `${url}v1/gifs/trending?api_key=${apiKey}&offset=0`;
      const req = httpMock.expectOne(thisUrl);
      expect(req.request.method).toEqual('GET');
      req.flush({data: [], pagination: {}, meta: {}});

      httpMock.verify();
    }))
  );

  it(`should get the trendy gifs`, async(inject([GiphyApiService, HttpTestingController],
    (service: GiphyApiService, httpMock: HttpTestingController) => {

      service.getGifs('keyword', 0)
        .subscribe(data => expect(data).toEqual({data: [], pagination: {}, meta: {}}));

      const thisUrl = `${url}v1/gifs/search?api_key=${apiKey}&q=keyword`;
      const req = httpMock.expectOne(thisUrl);
      expect(req.request.method).toEqual('GET');
      req.flush({data: [], pagination: {}, meta: {}});

      httpMock.verify();
    }))
  );

});
