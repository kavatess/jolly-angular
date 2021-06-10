import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { Truss } from 'src/app/models/truss.model';
import { UpdateStatusService } from 'src/app/core/services/truss/update-status.service';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent implements OnInit, AfterViewChecked {
  trussArr: Truss[] = [];
  @Input() block = '';

  constructor(
    private sessionStorage: SessionService,
    private updateStatusService: UpdateStatusService,
    public farmService: FarmService
  ) { }

  async ngOnInit(): Promise<void> {
    this.trussArr = await this.sessionStorage.getAsync(SESSION_STORAGE_KEY.TRUSS + this.block);
    this.trussArr.filter(truss => truss != null).forEach(truss => this.checkPlantStatus(truss));
    this.farmService.finishReloading();
  }

  ngAfterViewChecked(): void {
    if (this.farmService.isReloading) {
      this.ngOnInit();
    }
  }

  checkPlantStatus({ _id, plantNumber, plantGrowth, mediumGrowthDate, harvestDate }: Truss): void {
    if (new Date(mediumGrowthDate).getTime() <= new Date().getTime() && plantGrowth == 1) {
      this.updateTrussStatus(_id, 2, plantNumber);
    }
    if (new Date(harvestDate).getTime() <= new Date().getTime() && plantGrowth == 2) {
      this.updateTrussStatus(_id, 3, plantNumber);
    }
  }

  private updateTrussStatus(trussId: string, plantGrowth: number, plantNumber: number): void {
    this.updateStatusService.updateStatus(trussId, plantGrowth, plantNumber).subscribe(async (_res) => {
      this.sessionStorage.clear(SESSION_STORAGE_KEY.RAW_TRUSS + this.block);
      this.trussArr = await this.sessionStorage.restore(SESSION_STORAGE_KEY.TRUSS + this.block);
    });
  }
}