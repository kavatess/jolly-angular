import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';
import { RevertTrussBody } from '../../models/truss.request.model';

@Injectable({
  providedIn: 'root'
})
export class RevertStatusService {
  constructor(private httpReq: HttpRequestService) { }
  revertStatusService(sentJSON: RevertTrussBody) {
    return this.httpReq.accessDataRequest(TRUSS_REQUEST.revertStatus, sentJSON);
  }
}
