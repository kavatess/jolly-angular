import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { DeleteOneSeedService } from '../seed/delete-one-seed.service';
import { createTrussBody } from '../../models/truss.request.model';
import { TRUSS_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class CreateTrussService {
  constructor(private httpReq: HttpRequestService, private deleteSeedService: DeleteOneSeedService) { }
  createTrussService(sentJSON: createTrussBody) {
    this.deleteSeedService.deleteOneSeed(sentJSON._id).subscribe(_response => {
      this.httpReq.accessDataRequest(TRUSS_REQUEST.createTruss, sentJSON);
    });
  }
}
