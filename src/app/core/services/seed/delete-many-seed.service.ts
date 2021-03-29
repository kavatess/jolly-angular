import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class DeleteManySeedService {
  constructor(private httpReq: HttpRequestService) { }
  deleteManySeedService(sentJSON: deleteManySeedRequest) {
    return this.httpReq.accessDataRequest(SEED_REQUEST.deleteManySeed, sentJSON);
  }
}

export interface deleteManySeedRequest {
  idArr: string[];
}