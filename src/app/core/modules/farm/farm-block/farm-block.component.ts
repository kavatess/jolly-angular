import { Component, Input, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from 'src/app/core/models/truss.model';
import { GetPlantDataService } from 'src/app/core/services/plant/get-plant-data.service';
import { GetTrussByBlockService } from 'src/app/core/services/truss/get-truss-by-block.service';
import { FarmComponent } from '../farm.component';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent extends FarmComponent implements OnInit {
  @Input() block = '';
  trussArr: Truss[] = [];

  constructor(protected sessionStorage: SessionStorageService, protected getPlantService: GetPlantDataService, private getTrussService: GetTrussByBlockService) {
    super(sessionStorage, getPlantService);
  }

  ngOnInit(): void {
    const trussCollection = TRUSS_SESSION_COLLECTION + this.block;
    this.trussArr = this.sessionStorage.retrieve(trussCollection);
    if (!this.trussArr) {
      this.getTrussService.getTrussDataByBlock(this.block).subscribe(trussArr => {
        this.trussArr = trussArr;
        this.sessionStorage.store(trussCollection, trussArr);
        this.changeDataStatus(true);
      });
    };
  }

  ngDoCheck(): void {
    if (!this.dataReady) {
      this.ngOnInit();
    }
  }

}