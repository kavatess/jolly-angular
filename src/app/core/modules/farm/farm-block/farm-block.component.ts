import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { Truss } from 'src/app/models/truss.model';
import { GetPlantDataService } from 'src/app/core/services/plant/get-plant-data.service';
import { GetTrussByBlockService } from 'src/app/core/services/truss/get-truss-by-block.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { FarmComponent } from '../farm.component';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent implements OnInit, DoCheck {
  trussArr: Truss[] = [];
  @Input() block = '';
  @Input() farmComponent: FarmComponent = null;

  constructor(protected sessionStorage: SessionService, protected getPlantService: GetPlantDataService, private getTrussService: GetTrussByBlockService) { }

  async ngOnInit(): Promise<void> {
    this.trussArr = await this.sessionStorage.getAsync(SESSION_STORAGE_KEY.TRUSS + this.block);
    this.farmComponent.changeDataReadyTo(true);
  }

  ngDoCheck(): void {
    if (!this.farmComponent.dataReady) {
      this.ngOnInit();
    }
  }
}