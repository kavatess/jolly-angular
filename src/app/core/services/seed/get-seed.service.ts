import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seed } from '../../models/seed.model';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from '../request-url-constants';

@Injectable({
  providedIn: 'root'
})
export class GetSeedService {
  constructor(private httpReq: HttpRequestService) { }
  getSeedDataService(): Observable<Seed[]> {
    return this.httpReq.getDataRequest(SEED_REQUEST.getSeedData);
  }
}
