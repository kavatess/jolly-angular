import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from '../../models/statistic.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetStatisticService {

  constructor(private httpReq: HttpRequestService) { }
  getFarmStatistics(): Observable<Statistics[]> {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getStatistics);
  }
}