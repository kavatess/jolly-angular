import { Component, OnInit } from '@angular/core';
import { FarmComponent } from '../../farm.component';

@Component({
  selector: 'app-planting-truss',
  templateUrl: './planting-truss.component.html',
  styleUrls: ['./planting-truss.component.scss']
})
export class PlantingTrussComponent extends FarmComponent implements OnInit {
  isModifyMode = false;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
