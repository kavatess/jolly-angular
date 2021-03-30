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
  private static clickedTruss: Truss;
  set newClickedTruss(clickedTruss: Truss) {
    FarmPageComponent.clickedTruss = clickedTruss;
  }
  get clickedTruss(): Truss {
    return FarmPageComponent.clickedTruss;
  }
  set newBlock(block: string) {
    FarmPageComponent.block = block;
  }
  get selectedBlock(): string {
    return FarmPageComponent.block;
  }
  set newPlantId(plantId: string) {
    FarmPageComponent.plantId = plantId;
  }
  get selectedPlantId(): string {
    return FarmPageComponent.plantId;
  }
  set newPlantGrowth(plantGrowth: number) {
    FarmPageComponent.plantGrowth = plantGrowth;
  }
  get selectedPlantGrowth(): number {
    return FarmPageComponent.plantGrowth;
  }

  constructor() { }

  ngOnInit(): void {
    this.getLastBlock();
  }

  private getLastBlock(): void {
    let lastBlock: string = window.sessionStorage.getItem('last-block-farm');
    FarmPageComponent.block = lastBlock ? lastBlock : FarmPageComponent.block;
  }
}
