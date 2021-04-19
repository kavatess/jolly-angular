import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class ClearTrussService {
  constructor(private httpReq: HttpRequestService) { }
  clearTruss(trussId: string) {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.clearTruss + `/${trussId}`);
  }
}