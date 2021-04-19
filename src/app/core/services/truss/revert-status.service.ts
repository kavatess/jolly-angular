import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';
import { RevertTrussBody } from '../../models/truss.request.model';

@Injectable({
  providedIn: 'root'
})
export class RevertStatusService {
  constructor(private httpReq: HttpRequestService) { }
  revertStatus(trussId: string, revertStatusIndex: number) {
    const reqBody: RevertTrussBody = {
      _id: trussId,
      statusIndex: revertStatusIndex
    }
    return this.httpReq.createPostRequest(TRUSS_REQUEST.revertStatus, reqBody);
  }
}
