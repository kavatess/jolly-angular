import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../../../models/plant.model';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class GetPlantDataService {
  constructor(private httpReq: HttpRequestService) { }
  getPlantData(): Observable<Plant[]> {
    return this.httpReq.createPostRequest(PLANT_REQUEST.getPlantData);
  }
}
