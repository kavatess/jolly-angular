import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetStatisticService {

  constructor(private httpReq: HttpRequestService) { }
  getFarmStatistics(): Observable<any[]> {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getStatistics);
  }
}