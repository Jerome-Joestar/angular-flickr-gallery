import { TestBed, inject } from '@angular/core/testing';

import { FlickerServiceService } from './flicker-service.service';

describe('FlickerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickerServiceService]
    });
  });

  it('should be created', inject([FlickerServiceService], (service: FlickerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
