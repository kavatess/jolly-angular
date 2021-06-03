import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class CreateTrussService {
  constructor(private httpReq: HttpRequestService) { }
  createTruss(trussId: string, seedId: string) {
    const reqBody = { _id: trussId, seedId };
    return this.httpReq.createPostRequest(TRUSS_REQUEST.createTruss, reqBody);
  }
}