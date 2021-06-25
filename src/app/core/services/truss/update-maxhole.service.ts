import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateMaxholeService {
  constructor(private httpReq: HttpRequestService) { }
  updateMaxHole(trussId: string, newMaxHole: number) {
    const reqBody = { _id: trussId, maxHole: newMaxHole };
    return this.httpReq.createPostRequest(TRUSS_REQUEST.updateMaxHole, reqBody);
  }
}
