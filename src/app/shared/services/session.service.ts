import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { HttpRequestService } from 'src/app/core/services/http-request.service';
import { PLANT_REQUEST, SEED_REQUEST, SESSION_STORAGE_KEY, TRUSS_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpReq: HttpRequestService, private sessionStorage: SessionStorageService) { }

  observe(colName: string): Observable<any> {
    return this.sessionStorage.observe(colName);
  }

  retrieve(colName: string): any {
    return this.sessionStorage.retrieve(colName);
  }

  store(colName: string, value: any): void {
    return this.sessionStorage.store(colName, value);
  }

  async restore(colName: string): Promise<any> {
    this.sessionStorage.clear(colName);
    return await this.getAsync(colName);
  }

  async getAsync(colName: string): Promise<any> {
    if (!this.retrieve(colName)) {
      const requestURL = this.getRequestUrlByColName(colName);
      const data = await this.httpReq.createPostRequest(requestURL).toPromise();
      this.store(colName, data);
    }
    return this.retrieve(colName);
  }

  private getRequestUrlByColName(colName: string): string {
    if (colName == SESSION_STORAGE_KEY.PLANT) {
      return PLANT_REQUEST.getPlantData;
    }
    if (colName == SESSION_STORAGE_KEY.SEED) {
      return SEED_REQUEST.getSeedData;
    }
    if (colName.includes(SESSION_STORAGE_KEY.RAW_TRUSS)) {
      return TRUSS_REQUEST.getRawTrussData + `/${colName.split('-')[4]}`;
    }
    if (colName.includes(SESSION_STORAGE_KEY.TRUSS)) {
      return TRUSS_REQUEST.getTrussData + `/${colName.split('-')[3]}`;
    }
    return '';
  }
}
