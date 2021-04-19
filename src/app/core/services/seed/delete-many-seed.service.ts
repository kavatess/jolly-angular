import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class DeleteManySeedService {
  constructor(private httpReq: HttpRequestService) { }
  deleteManySeed(deletedSeedIdArr: string[]) {
    return this.httpReq.createPostRequest(SEED_REQUEST.deleteManySeed, { idArr: deletedSeedIdArr });
  }
}