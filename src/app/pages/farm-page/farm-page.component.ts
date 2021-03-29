import { Component, OnInit } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-farm-page',
  templateUrl: './farm-page.component.html',
  styleUrls: ['./farm-page.component.scss']
})
export class FarmPageComponent implements OnInit {
  public static block = '';
  public static plantId = '';
  public static plantGrowth = 0;
  public static clickedTruss: Truss;
  set clickedTruss(clickedTruss: Truss) {
    FarmPageComponent.clickedTruss = clickedTruss;
  }
  get clickedTruss(): Truss {
    return FarmPageComponent.clickedTruss;
  }
  set block(block: string) {
    FarmPageComponent.block = block;
  }
  get block(): string {
    return FarmPageComponent.block;
  }
  set plantId(plantId: string) {
    FarmPageComponent.plantId = plantId;
  }
  get plantId(): string {
    return FarmPageComponent.plantId;
  }
  set plantGrowth(plantGrowth: number) {
    FarmPageComponent.plantGrowth = plantGrowth;
  }
  get plantGrowth(): number {
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
