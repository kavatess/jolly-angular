import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { updateStatusBody } from '../../models/truss.request.model';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateStatusService {
  constructor(private httpReq: HttpRequestService) { }
  updateStatusService(sentJSON: updateStatusBody) {
    return this.httpReq.accessDataRequest(TRUSS_REQUEST.updateStatus, sentJSON);
  }
}
