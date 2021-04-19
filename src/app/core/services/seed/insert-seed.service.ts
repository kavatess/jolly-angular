import { Injectable } from '@angular/core';
import { SimpleSeed } from '../../models/seed.model';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class InsertSeedService {
  constructor(private httpReq: HttpRequestService) { }
  insertManySeed(reqBody: SimpleSeed[]) {
    return this.httpReq.createPostRequest(SEED_REQUEST.insertManySeed, reqBody);
  }
}