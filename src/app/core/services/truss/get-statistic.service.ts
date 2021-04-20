import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from 'src/app/pages/statistic-page/statistic-page.component';
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
