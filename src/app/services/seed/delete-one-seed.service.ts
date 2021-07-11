import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class DeleteOneSeedService {
  constructor(private httpReq: HttpRequestService) { }
  deleteOneSeed(seedId: string) {
    return this.httpReq.createPostRequest(SEED_REQUEST.deleteOneSeed + `/${seedId}`);
  }
}
