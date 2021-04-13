import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from 'src/app/core/models/plant.model';
import { HttpRequestService } from 'src/app/core/services/http-request.service';
import { PLANT_REQUEST, SEED_REQUEST, TRUSS_REQUEST } from 'src/app/core/services/request-url-constants';
import { Seed } from '../../core/models/seed.model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private sessionStorage: Observable<any[]>[] = [];
  constructor(
    private requestService: HttpRequestService
  ) {
    this.getCollection('plant-data');
    this.getCollection('seed-data');
  }

  getCollection(collection: string): Observable<any[]> {
    if (collection.includes('block')) {
      const block = collection.split('-')[1];
      return this.getDataFromAPI(collection, TRUSS_REQUEST.getTrussData + `/${block}`);
    }
    if (collection == 'plant-data') {
      return this.getDataFromAPI(collection, PLANT_REQUEST.getPlantData);
    }
    if (collection == 'seed-data') {
      return this.getDataFromAPI(collection, SEED_REQUEST.getSeedData);
    }
  }

  resetCollection(collection: string): Observable<any[]> {
    this.sessionStorage[collection] = null;
    return this.getCollection(collection);
  }

  getDataFromAPI(collection: string, request_url: string): Observable<any[]> {
    if (!this.sessionStorage[collection]) {
      this.sessionStorage[collection] = this.requestService.getDataRequest(request_url);
    }
    return this.sessionStorage[collection];
  }

  async getPlantArrAsync(): Promise<Plant[]> {
    return await this.getCollection('plant-data').toPromise();
  }

  async getSeedArrAsync(): Promise<Seed[]> {
    return await this.getCollection('seed-data').toPromise();
  }

  async getReadySeedAsync(): Promise<Seed[]> {
    const seedArr = await this.getSeedArrAsync();
    return seedArr.filter(seed => seed.isReadySeed);
  }
}