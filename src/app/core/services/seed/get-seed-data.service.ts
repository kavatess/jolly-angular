import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seed } from '../../../models/seed.model';
import { HttpRequestService } from '../http-request.service';
import { SEED_REQUEST } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class GetSeedDataService {
  constructor(private httpReq: HttpRequestService) { }
  getSeedData(): Observable<Seed[]> {
    return this.httpReq.createPostRequest(SEED_REQUEST.getSeedData);
  }
}
