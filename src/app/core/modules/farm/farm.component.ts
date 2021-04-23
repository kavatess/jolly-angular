import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { PLANT_SESSION_COLLECTION, SEED_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from '../../models/truss.model';
import { GetPlantDataService } from '../../services/plant/get-plant-data.service';
import { GetSeedDataService } from '../../services/seed/get-seed-data.service';

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

  constructor(private sessionStorage: SessionStorageService, private getPlantService: GetPlantDataService, private getSeedService: GetSeedDataService) {
    if (!this.sessionStorage.retrieve(PLANT_SESSION_COLLECTION)) {
      this.getPlantService.getPlantData().subscribe(plantArr => {
        this.sessionStorage.store(PLANT_SESSION_COLLECTION, plantArr);
      });
    }
  }

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
