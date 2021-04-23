import { Component, OnInit } from '@angular/core';
import { Truss } from '../../models/truss.model';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  selectedBlock = '';
  selectedPlantId = '';
  selectedPlantGrowth = 0;
  dataReady = false;
  clickedTruss: Truss = new Truss();

  constructor() { }

  set newSelectVal({ block, plantId, plantGrowth }: any) {
    this.selectedBlock = block;
    this.selectedPlantId = plantId;
    this.selectedPlantGrowth = plantGrowth;
  }
  set newClickedTruss(truss: Truss) {
    this.clickedTruss = truss;
  }
  set dataStatus(status: boolean) {
    this.dataReady = status;
  }

  ngOnInit(): void { }

}
