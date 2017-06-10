import { Component, OnInit } from '@angular/core';
import { SelectDropDown } from '../../common classes/select-dropdown';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterOptions = [
    new SelectDropDown('date', 'By Date'),
    new SelectDropDown('alpha', 'Alphabetical A-Z'),
    new SelectDropDown('reversed', 'Alphabetical Z-A')
  ]

  ngOnInit() {
  }

}
