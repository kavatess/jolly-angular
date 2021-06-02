import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { Truss } from 'src/app/models/truss.model';
import { UpdateStatusService } from 'src/app/core/services/truss/update-status.service';
import { UpdateStatusBody } from 'src/app/models/truss.request.model';
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
    this.trussArr.forEach(truss => this.checkPlantStatus(truss));
    this.farmService.finishReloadin();

  }

  ngAfterViewChecked(): void {
    if (this.farmService.isReloading) {
      this.ngOnInit();
    }
  }

  checkPlantStatus({ _id, plantNumber, plantGrowth, mediumGrowthDate, harvestDate }: Truss): void {
    if (new Date(mediumGrowthDate).getTime() <= new Date().getTime() && plantGrowth === 1) {
      const updateStatus = new UpdateStatusBody(_id, plantNumber, 2);
      this.updateStatusService.updateStatus(updateStatus).subscribe(async (_res) => {
        this.sessionStorage.clear(SESSION_STORAGE_KEY.RAW_TRUSS + this.block);
        this.trussArr = await this.sessionStorage.restore(SESSION_STORAGE_KEY.TRUSS + this.block);
      });
    }
    if (new Date(harvestDate).getTime() <= new Date().getTime() && plantGrowth === 2) {
      const updateStatus = new UpdateStatusBody(_id, plantNumber, 3);
      this.updateStatusService.updateStatus(updateStatus).subscribe(async (_res) => {
        this.sessionStorage.clear(SESSION_STORAGE_KEY.RAW_TRUSS + this.block);
        this.trussArr = await this.sessionStorage.restore(SESSION_STORAGE_KEY.TRUSS + this.block);
      });
    }
  }
}