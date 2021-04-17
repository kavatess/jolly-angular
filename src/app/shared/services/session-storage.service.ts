import { Injectable } from '@angular/core';
import { PLANT_SESSION_COLLECTION, SEED_SESSION_COLLECTION, TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Plant } from 'src/app/core/models/plant.model';
import { Seed } from 'src/app/core/models/seed.model';
import { HttpRequestService } from 'src/app/core/services/http-request.service';
import { PLANT_REQUEST, SEED_REQUEST, TRUSS_REQUEST } from 'src/app/core/services/request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private sessionStorage = {};
  constructor(private requestService: HttpRequestService) {
    this.getAsync(PLANT_SESSION_COLLECTION);
    this.getAsync(SEED_SESSION_COLLECTION);
  }

  private async getDataFromAPI(collection: string, request_url: string = ''): Promise<any[]> {
    if (!this.sessionStorage[collection]) {
      this.sessionStorage[collection] = await this.requestService.getDataRequest(request_url).toPromise();
    }
    return this.sessionStorage[collection];
  }

  async getAsync(collection: string): Promise<any[]> {
    if (collection.includes(TRUSS_SESSION_COLLECTION)) {
      const block = collection.split('-')[3];
      return await this.getDataFromAPI(collection, TRUSS_REQUEST.getTrussData + `/${block}`);
    }
    if (collection == PLANT_SESSION_COLLECTION) {
      return await this.getDataFromAPI(collection, PLANT_REQUEST.getPlantData);
    }
    if (collection == SEED_SESSION_COLLECTION) {
      return await this.getDataFromAPI(collection, SEED_REQUEST.getSeedData);
    }
    return null;
  }

  async reset(collection: string): Promise<any[]> {
    this.sessionStorage[collection] = undefined;
    return await this.getAsync(collection);
  }

  get plantArr(): Plant[] {
    return this.sessionStorage[PLANT_SESSION_COLLECTION] || [];
  }

  get seedArr(): Seed[] {
    return this.sessionStorage[SEED_SESSION_COLLECTION] || [];
  }

  get readySeedArr(): Seed[] {
    return this.seedArr.filter(seed => seed.isReadySeed);
  }
}