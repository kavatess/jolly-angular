import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { PLANT_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class InsertPlantService {
  constructor(private httpReq: HttpRequestService) { }
  insertOnePlant(sentJSON: any) {
    return this.httpReq.createPostRequest(PLANT_REQUEST.insertOnePlant, sentJSON);
  }
}
