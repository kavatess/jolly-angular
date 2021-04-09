import { Injectable } from '@angular/core';
import { SimpleSeed } from '../../models/seed.model';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST, SEED_STORAGE_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class InsertSeedService {
  constructor(private httpReq: HttpRequestService) { }
  insertManySeedService(sentJSON: SimpleSeed[]) {
    this.httpReq.getDataRequest(SEED_REQUEST.insertManySeed, sentJSON).subscribe(res => {
      this.httpReq.accessDataRequest(SEED_STORAGE_REQUEST.storeManySeed, sentJSON);
    });
  }
}