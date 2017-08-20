import { Component, OnInit } from '@angular/core';
import { GridService } from '../../services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private gridService: GridService) {}

  ngOnInit() {
  }

  updateGridValue(value){
    this.gridService.setGridValue(value);
  }

}
