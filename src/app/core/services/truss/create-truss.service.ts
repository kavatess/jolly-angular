import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { DeleteOneSeedService } from '../seed/delete-one-seed.service';
import { createTrussRequest } from '../../models/truss.request.model';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class CreateTrussService {
  constructor(private httpReq: HttpRequestService, private deleteSeedService: DeleteOneSeedService) { }
  createTrussService(sentJSON: createTrussRequest) {
    this.deleteSeedService.deleteOneSeedService(sentJSON).subscribe(_response => {
      this.httpReq.accessDataRequest(TRUSS_REQUEST.createTruss, sentJSON);
    });
  }
}
