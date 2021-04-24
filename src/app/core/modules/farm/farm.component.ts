import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { FARM_LAST_BLOCK_COLLECTION, PLANT_SESSION_COLLECTION, TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from '../../models/truss.model';
import { GetPlantDataService } from '../../services/plant/get-plant-data.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  private static dataReady = false;
  private static selectedBlock = '';
  private static selectedPlantId = '';
  private static selectedPlantGrowth = 0;
  private static clickedTruss: Truss = new Truss();

  constructor(protected sessionStorage: SessionStorageService, protected getPlantService: GetPlantDataService) { }

  get selectedBlock(): string {
    return FarmComponent.selectedBlock;
  }
  get selectedPlantId(): string {
    return FarmComponent.selectedPlantId;
  }
  get selectedPlantGrowth(): number {
    return FarmComponent.selectedPlantGrowth;
  }
  get dataReady(): boolean {
    return FarmComponent.dataReady;
  }
  get clickedTruss(): Truss {
    return FarmComponent.clickedTruss;
  }
  changeClickedTruss(truss: Truss): void {
    FarmComponent.clickedTruss = truss;
  }
  changeDataStatus(isReady: boolean): void {
    FarmComponent.dataReady = isReady;
  }
  emitSelectChanges({ block, plantId, plantGrowth }: any): void {
    FarmComponent.selectedBlock = block;
    FarmComponent.selectedPlantId = plantId;
    FarmComponent.selectedPlantGrowth = plantGrowth;
  }
  emitUpdateSeedEvent(clickedTruss: Truss): void {
    this.changeClickedTruss(clickedTruss);
    this.changeDataStatus(false);
    this.sessionStorage.clear(TRUSS_SESSION_COLLECTION + this.clickedTruss.block);
  }

  ngOnInit(): void {
    FarmComponent.selectedBlock = this.sessionStorage.retrieve(FARM_LAST_BLOCK_COLLECTION) || 'A';
    if (!this.sessionStorage.retrieve(PLANT_SESSION_COLLECTION)) {
      this.getPlantService.getPlantData().subscribe(plantArr => {
        this.sessionStorage.store(PLANT_SESSION_COLLECTION, plantArr);
      });
    }
  }

}
