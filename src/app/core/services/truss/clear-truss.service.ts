import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { simpleRequest } from '../../models/truss.request.model';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class ClearTrussService {
  constructor(private httpReq: HttpRequestService) { }
  clearTrussService(sentJSON: simpleRequest) {
    return this.httpReq.accessDataRequest(TRUSS_REQUEST.clearTruss, sentJSON);
  }
}
