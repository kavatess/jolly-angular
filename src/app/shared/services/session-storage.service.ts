import { Injectable } from '@angular/core';
import { Plant } from 'src/app/core/models/plant.model';
import { Seed } from 'src/app/core/models/seed.model';
import { HttpRequestService } from 'src/app/core/services/http-request.service';
import { PLANT_REQUEST, SEED_REQUEST, TRUSS_REQUEST } from 'src/app/core/services/request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  sessionStorage = {};
  constructor(private requestService: HttpRequestService) {
    this.initializeTrussData();
    this.getAsync('plant-arr');
    this.getAsync('seed-arr');
  }

  private initializeTrussData(): void {
    const blockArr = ['A', 'B', 'BN', 'BS', 'C', 'CT', 'D'];
    blockArr.forEach(async (block) => {
      await this.getAsync(`truss-arr-block-${block}`);
    });
  }

  private async getDataFromAPI(collection: string, request_url: string = ''): Promise<any[]> {
    if (!this.sessionStorage[collection]) {
      this.sessionStorage[collection] = await this.requestService.getDataRequest(request_url).toPromise();
    }
    return this.sessionStorage[collection];
  }

  async getAsync(collection: string): Promise<any[]> {
    if (collection.includes('truss-arr-block')) {
      const block = collection.split('-')[3];
      return await this.getDataFromAPI(collection, TRUSS_REQUEST.getTrussData + `/${block}`);
    }
    if (collection == 'plant-arr') {
      return await this.getDataFromAPI(collection, PLANT_REQUEST.getPlantData);
    }
    if (collection == 'seed-arr') {
      return await this.getDataFromAPI(collection, SEED_REQUEST.getSeedData);
    }
  }

  async reset(collection: string): Promise<any[]> {
    this.sessionStorage[collection] = null;
    return await this.getAsync(collection);
  }

  get plantArr(): Plant[] {
    return this.sessionStorage['plant-arr'] || [];
  }

  get seedArr(): Seed[] {
    return this.sessionStorage['seed-arr'] || [];
  }

  get readySeedArr(): Seed[] {
    return this.seedArr.filter(seed => seed.isReadySeed);
  }

}