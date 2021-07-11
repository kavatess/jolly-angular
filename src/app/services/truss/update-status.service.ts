import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { TRUSS_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateStatusService {
  constructor(private httpReq: HttpRequestService) { }
  updateStatus(updatedTrussId: string, newPlantGrowth: number, newPlantNumber: number) {
    const reqBody = {
      _id: updatedTrussId,
      plantGrowth: newPlantGrowth,
      plantNumber: newPlantNumber
    }
    return this.httpReq.createPostRequest(TRUSS_REQUEST.updateStatus, reqBody);
  }
}
