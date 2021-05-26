import { Injectable } from '@angular/core';
import { CreateTrussBody } from '../../../models/truss.request.model';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from 'src/app/app-constants';

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
    return this.httpReq.createPostRequest(TRUSS_REQUEST.createTruss, reqBody);
  }
}