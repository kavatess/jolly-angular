import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../../models/plant.model';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetPlantService {
  constructor(private httpReq: HttpRequestService) { }
  getPlantDataService(): Observable<Plant[]> {
    return this.httpReq.getDataRequest(PLANT_REQUEST.getPlantData);
  }
}
