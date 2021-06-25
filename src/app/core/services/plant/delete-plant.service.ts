import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class DeletePlantService {
  constructor(private httpReq: HttpRequestService) { }
  deleteOnePlant(deletedPlantId: string) {
    return this.httpReq.createPostRequest(PLANT_REQUEST.deleteOnePlant + `/${deletedPlantId}`);
  }
}
