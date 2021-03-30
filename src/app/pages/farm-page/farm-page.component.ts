import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farm-page',
  templateUrl: './farm-page.component.html',
  styleUrls: ['./farm-page.component.scss']
})
export class FarmPageComponent implements OnInit {
  private static block = 'A';
  private static plantId = '';
  private static plantGrowth = 0;

  constructor() { }

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

  ngOnInit(): void {
    this.getLastBlock();
  }

  private getLastBlock(): void {
    let lastBlock: string = window.sessionStorage.getItem('last-block-farm');
    FarmPageComponent.block = lastBlock ? lastBlock : FarmPageComponent.block;
  }
}
