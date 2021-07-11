import { Injectable } from '@angular/core';
import { Plant } from 'src/app/models/plant.model';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdatePlantService {
  constructor(private httpReq: HttpRequestService) { }
  updatePlant(plant: Plant) {
    return this.httpReq.createPostRequest(PLANT_REQUEST.updateOnePlant, plant);
  }
}