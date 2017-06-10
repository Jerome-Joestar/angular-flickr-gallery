import { Component, OnInit } from '@angular/core';
import { SelectDropDown } from '../../common classes/select-dropdown';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTypes = [
    new SelectDropDown('tag', 'Tag Name'),
    new SelectDropDown('title', 'Title'),
    new SelectDropDown('description', 'Description')
  ]
  constructor() { }

  ngOnInit() {
  }

}
