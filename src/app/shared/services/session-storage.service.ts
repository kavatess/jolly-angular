import { Injectable } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';
import { GetPlantDataService } from 'src/app/core/services/plant/get-plant-data.service';
import { GetSeedDataService } from 'src/app/core/services/seed/get-seed-data.service';
import { GetTrussByBlockService } from 'src/app/core/services/truss/get-truss-by-block.service';
import { Plant } from '../../core/models/plant.model';
import { Seed } from '../../core/models/seed.model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  trussCollection: any[] = [];
  plantData: Plant[] = [];
  seedData: Seed[] = [];
  constructor(
    private getTrussDataService: GetTrussByBlockService,
    private getPlantDataService: GetPlantDataService,
    private getSeedDataService: GetSeedDataService
  ) {
    this.getPlantData();
    this.getSeedData();
  }

  async getTrussDataByBlock(block: string): Promise<Truss[]> {
    if (!this.trussCollection[`block-${block}`]) {
      this.trussCollection[`block-${block}`] = await this.getTrussDataService.getTrussDataByBlock(block).toPromise();
    }
    return this.trussCollection[`block-${block}`];
  }

  async getPlantData(): Promise<Plant[]> {
    if (!this.plantData.length) {
      this.plantData = await this.getPlantDataService.getPlantData().toPromise();
    }
    return this.plantData;
  }

  async getSeedData(): Promise<Seed[]> {
    if (!this.seedData.length) {
      this.seedData = await this.getSeedDataService.getSeedData().toPromise();
      this.seedData.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    }
    return this.seedData;
  }

  async resetSeedData() {
    this.seedData = [];
    return await this.getSeedData();
  }

  get readySeedData(): Seed[] {
    return this.seedData.filter(seed => seed.isReadySeed);
  }
}