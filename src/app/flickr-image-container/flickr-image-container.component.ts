import { Component, OnInit } from '@angular/core';
import { FlickrImageContainerService } from './flickr-image-container.service';
import { GridService } from '../services/grid.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flickr-image-container',
  templateUrl: 'flickr-image-container.component.html',
  styleUrls: ['flickr-image-container.component.css'],
  providers: [FlickrImageContainerService]
})
export class FlickrImageContainerComponent implements OnInit {

  public photos: string[];
  public gridValue: string;
  public subscription: Subscription;

  constructor(private flickrImageContainerService: FlickrImageContainerService,
              private gridService: GridService) {
    this.photos = [];
    this.subscription = this.gridService.getGridValue().subscribe(value => {
      this.gridValue = value;
    });
  }

  ngOnInit() {
    this.flickrImageContainerService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
