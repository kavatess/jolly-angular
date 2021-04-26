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
  dataReady = false;
  selectedBlock = '';
  selectedPlantId = '';
  selectedPlantGrowth = 0;
  clickedTruss: Truss = new Truss();

  constructor(protected sessionStorage: SessionStorageService, protected getPlantService: GetPlantDataService) { }

  emitSelectChanges({ block, plantId, plantGrowth }: any): void {
    this.selectedBlock = block;
    this.selectedPlantId = plantId;
    this.selectedPlantGrowth = plantGrowth;
  }
  emitUpdateSeedEvent(clickedTruss: Truss): void {
    this.clickedTruss = clickedTruss;
    this.dataReady = false;
    this.sessionStorage.clear(TRUSS_SESSION_COLLECTION + this.clickedTruss.block);
  }

  ngOnInit(): void {
    this.selectedBlock = this.sessionStorage.retrieve(FARM_LAST_BLOCK_COLLECTION) || 'A';
    if (!this.sessionStorage.retrieve(PLANT_SESSION_COLLECTION)) {
      this.getPlantService.getPlantData().subscribe(plantArr => {
        this.sessionStorage.store(PLANT_SESSION_COLLECTION, plantArr);
      });
    }
  }

}
