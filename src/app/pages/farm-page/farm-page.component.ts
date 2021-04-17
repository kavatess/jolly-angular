import { Component, OnInit } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-farm-page',
  templateUrl: './farm-page.component.html',
  styleUrls: ['./farm-page.component.scss']
})
export class FarmPageComponent implements OnInit {
  private static block = 'A';
  private static plantId = '';
  private static plantGrowth = 0;
  private static clickedTruss: Truss = new Truss();
  private static dataReady = false;

  constructor() { }

  get selectedBlock(): string {
    return FarmPageComponent.block;
  }
  get selectedPlantId(): string {
    return FarmPageComponent.plantId;
  }
  get selectedPlantGrowth(): number {
    return FarmPageComponent.plantGrowth;
  }
  get clickedTruss(): Truss {
    return FarmPageComponent.clickedTruss;
  }
  get dataReady(): boolean {
    return FarmPageComponent.dataReady;
  }
  changeBlock(block: string): void {
    FarmPageComponent.block = block;
  }
  changePlantId(plantId: string): void {
    FarmPageComponent.plantId = plantId;
  }
  changePlantGrowth(plantGrowth: number) {
    FarmPageComponent.plantGrowth = plantGrowth;
  }
  changeClickedTruss(truss: Truss) {
    FarmPageComponent.clickedTruss = truss;
  }
  changeDataStatus(status: boolean): void {
    FarmPageComponent.dataReady = status;
    console.log(FarmPageComponent.dataReady);
  }

  ngOnInit(): void {
    this.getLastBlock();
  }

  private getLastBlock(): void {
    let lastBlock: string = window.sessionStorage.getItem('last-block-farm');
    FarmPageComponent.block = lastBlock ? lastBlock : FarmPageComponent.block;
  }
}
