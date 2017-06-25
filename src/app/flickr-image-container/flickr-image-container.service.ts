import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Observable, Subscription, Observer } from "rxjs";

@Injectable()
export class FlickrImageContainerService {

  constructor(private http: Http) { }

  getPhotos() {
    return this.http.get('/photos').map(res => res.json());
  }

}
