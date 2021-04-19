import { Injectable } from '@angular/core';
import { Plant } from '../../models/plant.model';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdatePlantService {
  constructor(private httpReq: HttpRequestService) { }
  updatePlant(sentJSON: Plant) {
    return this.httpReq.createPostRequest(PLANT_REQUEST.updateOnePlant, sentJSON);
  }
}