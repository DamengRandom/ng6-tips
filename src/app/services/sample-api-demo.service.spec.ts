import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SamplesApiDemoService } from './samples-api-demo.service';

describe('SampleDataAPIService', () => {
  const mockData = [
    {
      'albumId': 1,
      'id': 1,
      'title': 'accusamus beatae ad facilis cum similique qui sunt',
      'url': 'https://via.placeholder.com/600/92c952',
      'thumbnailUrl': 'https://via.placeholder.com/150/92c952'
    },
    {
      'albumId': 1,
      'id': 2,
      'title': 'reprehenderit est deserunt velit ipsam',
      'url': 'https://via.placeholder.com/600/771796',
      'thumbnailUrl': 'https://via.placeholder.com/150/771796'
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SamplesApiDemoService]
    });
  });

  it('Should mock the api call and return some data back', inject([SamplesApiDemoService, HttpTestingController],
    (samplesApiDemoService: SamplesApiDemoService, httpMock: HttpTestingController) => {
    const API_ENDPOINT = `https://jsonplaceholder.typicode.com/photos`;

    // check service is defined or not
    expect(samplesApiDemoService).toBeDefined();

    // get service first two data from original data array and compare wther same or not
    samplesApiDemoService.getSamples()
    .subscribe((data) => {
      const firstTwoSamples = [data.data[0], data.data[1]];
      expect(mockData).toBe(firstTwoSamples);
    },
    error => {
      expect(error).toBeDefined();
    });

    // get mock data by using api call
    const reqMock = httpMock.expectOne((req) => req.method === 'GET' && req.url === API_ENDPOINT);
    expect(reqMock.request.url).toEqual(API_ENDPOINT);
    expect(reqMock.request.method).toEqual('GET');
    reqMock.flush(mockData);
    httpMock.verify();
  }));
});
