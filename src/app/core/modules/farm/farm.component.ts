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
  selectedBlock = '';
  selectedPlantId = '';
  selectedPlantGrowth = 0;
  dataReady = false;
  clickedTruss: Truss = new Truss();

  constructor(private sessionStorage: SessionStorageService, private getPlantService: GetPlantDataService) { }

  set newSelectVal({ block, plantId, plantGrowth }: any) {
    this.selectedBlock = block;
    this.selectedPlantId = plantId;
    this.selectedPlantGrowth = plantGrowth;
  }
  set newClickedTruss(truss: Truss) {
    this.clickedTruss = truss;
  }
  emitUpdateSeedEvent(clickedTruss: Truss): void {
    this.clickedTruss = clickedTruss;
    this.dataReady = false;
    this.sessionStorage.clear(TRUSS_SESSION_COLLECTION + this.clickedTruss.block);
    this.selectedBlock = '';
    this.ngOnInit();
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
