import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../../models/truss.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetHistoryDataService {
  constructor(private httpReq: HttpRequestService) { }
  getHistoryDataById(trussId: string): Observable<History[]> {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getTimelineById + `/${trussId}`);
  }
}
