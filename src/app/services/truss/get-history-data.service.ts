import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrussHistoryInfo } from 'src/app/models/truss.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class GetHistoryDataService {
  constructor(private httpReq: HttpRequestService) { }
  getHistoryDataById(trussId: string): Observable<TrussHistoryInfo[]> {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getHistoryData + `/${trussId}`);
  }
}
