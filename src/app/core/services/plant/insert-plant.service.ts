import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class InsertPlantService {
  constructor(private httpReq: HttpRequestService) { }
  insertOnePlantService(sentJSON: any) {
    return this.httpReq.accessDataRequest(PLANT_REQUEST.insertOnePlant, sentJSON);
  }
}
