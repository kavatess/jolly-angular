import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetTimelineDataService {
  constructor(private httpReq: HttpRequestService) { }
  getTimelineDataByIdService(trussId: string) {
    return this.httpReq.getDataRequest(TRUSS_REQUEST.getTimelineById + `/${trussId}`);
  }
}
