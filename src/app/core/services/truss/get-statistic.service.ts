import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEFAULT_STATISTIC_QUERY } from 'src/app/app-constants';
import { Statistics } from '../../../models/statistic.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class GetStatisticService {
  
  constructor(private httpReq: HttpRequestService) { }
  getFarmStatistics({ block, plantId, plantGrowth }: any = DEFAULT_STATISTIC_QUERY): Observable<Statistics[]> {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getStatistics + `?block=${block}&plantGrowth=${plantGrowth}&plantId=${plantId}`);
  }
}
