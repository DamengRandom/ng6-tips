import { TestBed, inject } from '@angular/core/testing';

import { SamplesApiDemoService } from './samples-api-demo.service';

describe('SamplesApiDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamplesApiDemoService]
    });
  });

  it('should be created', inject([SamplesApiDemoService], (service: SamplesApiDemoService) => {
    expect(service).toBeTruthy();
  }));
});
