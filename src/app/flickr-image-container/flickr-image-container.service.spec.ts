import { TestBed, inject } from '@angular/core/testing';

import { FlickrImageContainerService } from './flickr-image-container.service';

describe('FlickrImageContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickrImageContainerService]
    });
  });

  it('should be created', inject([FlickrImageContainerService], (service: FlickrImageContainerService) => {
    expect(service).toBeTruthy();
  }));
});
