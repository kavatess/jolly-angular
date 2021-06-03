import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from '../../../models/statistic.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class GetStatisticService {

  constructor(private httpReq: HttpRequestService) { }
  getFarmStatistics(block: string, plantGrowth: number, plantId: string): Observable<Statistics[]> {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getStatistics, { block, plantGrowth, plantId });
  }
}
