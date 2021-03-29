import { Injectable } from '@angular/core';
import { Plant } from '../../core/models/plant.model';
import { Seed } from '../../core/models/seed.model';
import { Truss } from '../../core/models/truss.model';
import { GetPlantService } from '../../core/services/plant/get-plant.service';
import { GetSeedService } from '../../core/services/seed/get-seed.service';
import { GetTrussDataService } from '../../core/services/truss/get-truss-data.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  trussArr: Truss[] = [];
  plantArr: Plant[] = [];
  seedArr: Seed[] = [];
  constructor(
    private getTrussService: GetTrussDataService,
    private getPlantService: GetPlantService,
    private getSeedService: GetSeedService
  ) {
    this.getTrussArr();
  }

  async getTrussArr() {
    if (!this.trussArr.length) {
      this.trussArr = await this.getTrussService.getTrussDataService().toPromise();
    }
    return this.trussArr;
  }

  async getPlantArr() {
    if (!this.plantArr.length) {
      this.plantArr = await this.getPlantService.getPlantDataService().toPromise();
    }
    return this.plantArr;
  }

  async getSeedArr() {
    if (!this.seedArr.length) {
      this.seedArr = await this.getSeedService.getSeedDataService().toPromise();
    }
    return this.seedArr;
  }

  async getTrussArrInBlock(block: string): Promise<Truss[]> {
    await this.getTrussArr();
    const trussArr = this.trussArr.filter(truss => truss.block == block);
    if (block == "BS") {
      return this.sortDataInBlockBS(trussArr);
    } else if (block == "C") {
      return this.sortDataInBlockC(trussArr);
    } else if (block == "CT") {
      return this.sortDataInBlockCT(trussArr);
    } else if (block == "D") {
      return this.sortDataInBlockD(trussArr);
    } else {
      return this.sortDataInBlockA_B_BN(trussArr);
    }
  }

  private sortDataInBlockA_B_BN(trussArr: Truss[]): Truss[] {
    return trussArr.sort((a, b) => b.index - a.index);
  }

  private sortDataInBlockBS(trussArr: Truss[]): Truss[] {
    trussArr.sort((a, b) => b.index - a.index);
    trussArr.splice(1, 0, null, null);
    return trussArr;
  }

  private sortDataInBlockC(trussArr: Truss[]): Truss[] {
    trussArr.sort((a, b) => a.index - b.index);
    for (var index = 0; index < trussArr.length; index++) {
      if (index < 4) {
        const temp1: Truss = trussArr[index];
        trussArr[index] = trussArr[12 + index];
        trussArr[12 + index] = temp1;
      }
      if (index > 3 && index < 8) {
        const temp2: Truss = trussArr[index];
        trussArr[index] = trussArr[4 + index];
        trussArr[4 + index] = temp2;
      }
    }
    return trussArr;
  }

  private sortDataInBlockCT(trussArr: Truss[]): Truss[] {
    trussArr.sort((a, b) => a.index - b.index);
    for (var index = 0; index < 4; index++) {
      if (index < 4) {
        const temp1: Truss = trussArr[index];
        trussArr[index] = trussArr[8 + index];
        trussArr[8 + index] = temp1;
      }
    }
    return trussArr;
  }

  private sortDataInBlockD(trussArr: Truss[]): Truss[] {
    trussArr.sort((a, b) => a.index - b.index);
    trussArr.splice(1, 0, null, null);
    return trussArr;
  }
}