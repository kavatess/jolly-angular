import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Truss } from '../../models/truss.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetTrussByBlockService {
  constructor(private httpReq: HttpRequestService) { }
  getTrussDataByBlock(block: string): Observable<Truss[]> {
    return this.httpReq.createPostRequest(TRUSS_REQUEST.getTrussData + `/${block}`);
  }
}
