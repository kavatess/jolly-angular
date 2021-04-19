import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class DeletePlantService {
  constructor(private httpReq: HttpRequestService) { }
  deleteOnePlant(sentJSON: any) {
    return this.httpReq.createPostRequest(PLANT_REQUEST.deleteOnePlant, sentJSON);
  }
}
