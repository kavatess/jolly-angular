import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class InsertSeedService {
  constructor(private httpReq: HttpRequestService) { }
  insertManySeed(reqBody: any[]) {
    return this.httpReq.createPostRequest(SEED_REQUEST.insertManySeed, reqBody);
  }
}