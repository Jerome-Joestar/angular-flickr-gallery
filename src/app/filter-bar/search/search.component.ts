import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTypes = [
    { name: 'Tag Name', value: 'tag' },
    { name: 'Title', value: 'title' },
    { name: 'Description', value: 'description'}
  ];

  filterOptions = [
    { name: 'By Date', value: 'date' },
    { name: 'Alphabetical A-Z', value: 'alpha' },
    { name: 'Alphabetical Z-A', value: 'reversed' }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
