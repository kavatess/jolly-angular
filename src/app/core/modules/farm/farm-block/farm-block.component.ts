import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class FarmBlockComponent implements OnInit {
  @Input() block = '';
  @Input() farmComponent: FarmComponent = null;
  @Output() clickedTruss = new EventEmitter<Truss>();
  @Output() loadDone = new EventEmitter();
  trussArr: Truss[] = [];
  constructor(protected sessionStorage: SessionStorageService, protected getPlantService: GetPlantDataService, private getTrussService: GetTrussByBlockService) { }

  ngOnInit(): void {
    const trussCollection = TRUSS_SESSION_COLLECTION + this.block;
    this.trussArr = this.sessionStorage.retrieve(trussCollection);
    if (!this.trussArr) {
      this.getTrussService.getTrussDataByBlock(this.block).subscribe(trussArr => {
        this.trussArr = trussArr;
        this.sessionStorage.store(trussCollection, trussArr);
        this.loadDone.emit(true);
      });
    }
  }

  ngDoCheck(): void {
    if (!this.farmComponent.dataReady) {
      this.ngOnInit();
    }
  }

}