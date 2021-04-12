import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateSeedNumberService {
  constructor(private httpReq: HttpRequestService) { }
  updateSeedNumber(updatedSeedId: string, newPlantNumber: number) {
    const sentJSON = {
      _id: updatedSeedId,
      plantNumber: newPlantNumber
    };
    return this.httpReq.getDataRequest(SEED_REQUEST.updateOneSeed, sentJSON);
  }
}