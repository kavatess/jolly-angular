import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetSeedService {
  constructor(private httpReq: HttpRequestService) { }
  getSeedDataService() {
    return this.httpReq.getDataRequest(SEED_REQUEST.getSeedData);
  }
}
