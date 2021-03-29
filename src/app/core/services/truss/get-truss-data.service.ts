import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Truss } from '../../models/truss.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetTrussDataService {
  constructor(private httpReq: HttpRequestService) { }
  getTrussDataService(): Observable<Truss[]> {
    return this.httpReq.getDataRequest(TRUSS_REQUEST.getTrussData);
  }
}