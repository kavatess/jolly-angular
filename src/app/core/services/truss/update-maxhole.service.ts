import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { updateMaxHoleRequest } from '../../models/truss.request.model';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateMaxholeService {
  constructor(private httpReq: HttpRequestService) { }
  updateMaxHoleService(sentJSON: updateMaxHoleRequest) {
    return this.httpReq.accessDataRequest(TRUSS_REQUEST.updateMaxHole, sentJSON);
  }
}
