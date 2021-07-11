import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HarvestStatByDate, Statistics } from 'src/app/models/statistic.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class GetStatisticService {

  constructor(private httpReq: HttpRequestService) { }
  getTrussTotalStatistics(filterOptions: any): Observable<Statistics[]> {
    const reqJson = {
      block: filterOptions.block || '',
      plantGrowth: filterOptions.plantGrowth || 0,
      plantId: filterOptions.plantId || ''
    }
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getStatistics, reqJson);
  }

  getHarvestStats(filterOptions: { month: string, plantIdArr: string[] }): Observable<HarvestStatByDate[]> {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getHarvestStats, filterOptions);
  }
}
