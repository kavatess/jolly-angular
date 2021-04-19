import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class DeleteOneSeedService {
  constructor(private httpReq: HttpRequestService) { }
  deleteOneSeed(seedId: string) {
    return this.httpReq.createPostRequest(SEED_REQUEST.deleteOneSeed + `/${seedId}`);
  }
}
