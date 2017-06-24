import { Component, OnInit } from '@angular/core';
import {FlickrImageContainerService} from './flickr-image-container.service';

@Component({
  selector: 'app-flickr-image-container',
  templateUrl: './flickr-image-container.component.html',
  styleUrls: ['./flickr-image-container.component.css'],
  providers: [FlickrImageContainerService]
})
export class FlickrImageContainerComponent implements OnInit {

  photos: any = []

  constructor(private flickrImageContainerService: FlickrImageContainerService) { }

  ngOnInit() {
    this.flickrImageContainerService.getPhotos().subscribe( photos => {
      this.photos = photos;
    });
  }

}
