import { Injectable } from '@angular/core';
import { SimpleSeed } from '../../models/seed.model';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class InsertSeedService {
  constructor(private httpReq: HttpRequestService) { }
  insertManySeed(sentJSON: SimpleSeed[]) {
    return this.httpReq.getDataRequest(SEED_REQUEST.insertManySeed, sentJSON);
  }
}