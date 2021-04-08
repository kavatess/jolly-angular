import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/core/services/http-request.service';
import { PLANT_REQUEST, SEED_REQUEST, TRUSS_REQUEST } from 'src/app/core/services/request-url-constants';
import { Plant } from '../../core/models/plant.model';
import { Seed } from '../../core/models/seed.model';
import { Truss } from '../../core/models/truss.model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  sessionData: any[] = [];
  constructor(
    private getDataService: HttpRequestService
  ) {
    this.getSeedArr();
    this.getPlantArr();
  }

  private async getSessionData(collectionName: string, reqURL: string): Promise<any[]> {
    if (!this.sessionData[collectionName]) {
      this.sessionData[collectionName] = await this.getDataService.getDataRequest(reqURL).toPromise();
    }
    return this.sessionData[collectionName];
  }

  async getTrussDataByBlock(block: string): Promise<Truss[]> {
    const collectionName = `truss-arr-block-${block}`;
    return await this.getSessionData(collectionName, TRUSS_REQUEST.getTrussData + `/${block}`);
  }

  get plantArr(): Plant[] {
    return this.sessionData['plant-arr'];
  }

  get seedArr(): Seed[] {
    return this.sessionData['seed-arr'];
  }

  async getSeedArr(): Promise<Seed[]> {
    return this.getSessionData('seed-arr', SEED_REQUEST.getSeedData);
  }

  async getPlantArr(): Promise<Plant[]> {
    return this.getSessionData('plant-arr', PLANT_REQUEST.getPlantData);
  }
}