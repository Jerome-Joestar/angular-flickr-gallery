import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class GridService {
  private subject = new BehaviorSubject<string>('3');

  constructor() {
  }

  setGridValue(value: string) {
    this.subject.next(value);
  }

  getGridValue(): Observable<string> {
    return this.subject.asObservable();
  }

}
