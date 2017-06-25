import { Component, OnInit } from '@angular/core';
import {FlickrImageContainerService} from './flickr-image-container.service';

@Component({
  selector: 'app-flickr-image-container',
  templateUrl: './flickr-image-container.component.html',
  styleUrls: ['./flickr-image-container.component.css'],
  providers: [FlickrImageContainerService]
})
export class FlickrImageContainerComponent implements OnInit {

  photos: string[];

  constructor(private flickrImageContainerService: FlickrImageContainerService) {
    this.photos = [];
  }

  ngOnInit() {
    this.flickrImageContainerService.getPhotos().subscribe( photos => {
      console.log(photos)
      console.log(this.photos)
      photos.forEach(photo => {
        this.photos.push(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
      })
    });
  }

}
