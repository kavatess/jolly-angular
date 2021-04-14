import { Injectable } from '@angular/core';
import { CreateTrussBody } from '../../models/truss.request.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class CreateTrussService {
  constructor(private httpReq: HttpRequestService) { }
  createTruss(trussId: string, seedId: string) {
    const reqBody: CreateTrussBody = {
      _id: trussId,
      seedId: seedId,
      startDate: new Date().toString()
    }
    return this.httpReq.getDataRequest(TRUSS_REQUEST.createTruss, reqBody);
  }
}
