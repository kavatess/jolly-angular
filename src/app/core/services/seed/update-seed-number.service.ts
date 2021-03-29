import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateSeedNumberService {
  constructor(private httpReq: HttpRequestService) { }
  updateSeedNumberService(sentJSON: updateSeedRequest) {
    return this.httpReq.accessDataRequest(SEED_REQUEST.updateOneSeed, sentJSON);
  }
}

export interface updateSeedRequest {
  _id: string;
  plantNumber: number;
}