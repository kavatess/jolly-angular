import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST, SEED_STORAGE_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class InsertSeedService {
  constructor(private httpReq: HttpRequestService) { }
  async insertManySeedService(sentJSON: any) {
    await this.httpReq.getDataRequest(SEED_REQUEST.insertManySeed, sentJSON);
    return this.httpReq.accessDataRequest(SEED_STORAGE_REQUEST.storeManySeed, sentJSON);
  }
}