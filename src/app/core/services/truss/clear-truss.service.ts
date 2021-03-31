import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { simpleBody } from '../../models/truss.request.model';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class ClearTrussService {
  constructor(private httpReq: HttpRequestService) { }
  clearTrussService(sentJSON: simpleBody) {
    return this.httpReq.accessDataRequest(TRUSS_REQUEST.clearTruss, sentJSON);
  }
}
