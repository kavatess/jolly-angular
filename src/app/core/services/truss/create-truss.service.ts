import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { CreateTrussBody } from '../../models/truss.request.model';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class CreateTrussService {
  constructor(private httpReq: HttpRequestService) { }
  createTrussService(sentJSON: CreateTrussBody) {
    return this.httpReq.getDataRequest(TRUSS_REQUEST.createTruss, sentJSON);
  }
}
