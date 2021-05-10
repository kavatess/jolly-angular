import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { PLANT_SESSION_COLLECTION, SEED_SESSION_COLLECTION, TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { HttpRequestService } from 'src/app/core/services/http-request.service';
import { PLANT_REQUEST, SEED_REQUEST, TRUSS_REQUEST } from 'src/app/core/services/request-url-constants';

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

  async restore(colName: string): Promise<void> {
    this.sessionStorage.clear(colName);
    await this.getAsync(colName);
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
