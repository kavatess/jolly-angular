import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetPlantService {
  constructor(private httpReq: HttpRequestService) { }
  getPlantDataService() {
    return this.httpReq.getDataRequest(PLANT_REQUEST.getPlantData);
  }
}
