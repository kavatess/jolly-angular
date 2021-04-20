import { Component, OnInit } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-farm-page',
  templateUrl: './farm-page.component.html',
  styleUrls: ['./farm-page.component.scss']
})
export class FarmPageComponent implements OnInit {
  private static selectionVal = null;
  private static clickedTruss: Truss = new Truss();
  private static dataReady = false;

  constructor() { }

  get clickedTruss(): Truss {
    return FarmPageComponent.clickedTruss;
  }
  get dataReady(): boolean {
    return FarmPageComponent.dataReady;
  }
  get selectedBlock(): string {
    return FarmPageComponent.selectionVal.block;
  }
  get selectedPlantId(): string {
    return FarmPageComponent.selectionVal.plantId;
  }
  get selectedPlantGrowth(): number {
    return FarmPageComponent.selectionVal.plantGrowth;
  }
  selectOnChange(changeVal: any): void {
    FarmPageComponent.selectionVal = changeVal;
  }
  changeClickedTruss(truss: Truss) {
    FarmPageComponent.clickedTruss = truss;
  }
  changeDataStatus(status: boolean): void {
    FarmPageComponent.dataReady = status;
  }

  ngOnInit(): void { }
}
