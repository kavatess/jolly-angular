import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { UpdateStatusBody } from '../../models/truss.request.model';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateStatusService {
  constructor(private httpReq: HttpRequestService) { }
  updateStatus(reqBody: UpdateStatusBody) {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.updateStatus, reqBody);
  }
}
