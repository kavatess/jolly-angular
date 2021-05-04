import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { PLANT_SESSION_COLLECTION, SEED_SESSION_COLLECTION, TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { HttpRequestService } from 'src/app/core/services/http-request.service';
import { PLANT_REQUEST, SEED_REQUEST, TRUSS_REQUEST } from 'src/app/core/services/request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpReq: HttpRequestService, private sessionStorage: SessionStorageService) { }

  store(colName: string, value: any): void {
    return this.sessionStorage.store(colName, value);
  }

  async restore(colName: string): Promise<void> {
    this.sessionStorage.clear(colName);
    await this.getAsync(colName);
  }

  async getAsync(colName: string): Promise<any> {
    const sessionData = this.sessionStorage.retrieve(colName);
    if (!sessionData) {
      const requestURL = this.getRequestUrlByColName(colName);
      const data = await this.httpReq.createPostRequest(requestURL).toPromise();
      this.sessionStorage.store(colName, data);
    }
    return sessionData;
  }

  private getRequestUrlByColName(colName: string): string {
    if (colName == PLANT_SESSION_COLLECTION) {
      return PLANT_REQUEST.getPlantData;
    }
    if (colName == SEED_SESSION_COLLECTION) {
      return SEED_REQUEST.getSeedData;
    }
    if (colName.includes(TRUSS_SESSION_COLLECTION)) {
      return TRUSS_REQUEST.getTrussData + `/${colName.split('-')[3]}`;
    }
    return '';
  }
}
