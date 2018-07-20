import { TestBed, inject } from '@angular/core/testing';

import { MessageDemoService } from './message-demo.service';

describe('MessageDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageDemoService]
    });
  });

  it('should be created', inject([MessageDemoService], (service: MessageDemoService) => {
    expect(service).toBeTruthy();
  }));
});
