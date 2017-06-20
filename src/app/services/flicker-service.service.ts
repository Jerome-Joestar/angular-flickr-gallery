import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Observable, Subscription } from "rxjs";

@Injectable()
export class FlickerServiceService {

  constructor(private http: Http) { }

}
