import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetTrussDataService {
  constructor(private httpReq: HttpRequestService) { }
  getTrussDataService(): Observable<any[]> {
    return this.httpReq.getDataRequest(TRUSS_REQUEST.getTrussData);
  }
}