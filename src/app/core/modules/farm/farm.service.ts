import { Injectable } from '@angular/core';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { Truss } from 'src/app/models/truss.model';
import { UpdateStatusBody } from 'src/app/models/truss.request.model';
import { SessionService } from 'src/app/shared/services/session.service';
import { UpdateStatusService } from '../../services/truss/update-status.service';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private sessionStorage: SessionService, private updateTrussService: UpdateStatusService) { }

  async getTrussArrByBlock(block: string) {
    const trussArr: Truss[] = await this.sessionStorage.getAsync(SESSION_STORAGE_KEY.TRUSS + block);
    trussArr.forEach(async ({ _id, plantNumber, plantGrowth, mediumGrowthDate, harvestDate }, index) => {
      if (plantGrowth == 1 && new Date(mediumGrowthDate) <= new Date()) {
        const reqBodyObj = new UpdateStatusBody(_id, plantNumber, 2);
        await this.updateTrussService.updateStatus(reqBodyObj).toPromise();
        await this.sessionStorage.restore(SESSION_STORAGE_KEY.TRUSS + block);
      }
      if (plantGrowth == 2 && new Date(harvestDate) <= new Date()) {
        const reqBodyObj = new UpdateStatusBody(_id, plantNumber, 3);
        await this.updateTrussService.updateStatus(reqBodyObj).toPromise();
        await this.sessionStorage.restore(SESSION_STORAGE_KEY.TRUSS + block);
      }
    });
    return trussArr;
  }

  private restoreTrussData(block: string): any {
    return this.sessionStorage.restore(SESSION_STORAGE_KEY.TRUSS + block);
  }
}
