import { TestBed, inject } from '@angular/core/testing';

import { MissionDemoService } from './mission-demo.service';

describe('MissionDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissionDemoService]
    });
  });

  it('should be created', inject([MissionDemoService], (service: MissionDemoService) => {
    expect(service).toBeTruthy();
  }));
});
