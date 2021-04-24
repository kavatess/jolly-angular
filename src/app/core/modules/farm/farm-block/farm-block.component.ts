import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from 'src/app/core/models/truss.model';
import { GetTrussByBlockService } from 'src/app/core/services/truss/get-truss-by-block.service';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent implements OnChanges {
  @Input() block = '';
  @Input() plantId = '';
  @Input() plantGrowth = 0;
  trussArr: Truss[] = [];
  @Output() clickedTruss = new EventEmitter<Truss>();
  @Output() loadDone = new EventEmitter();

  constructor(private sessionStorage: SessionStorageService, private getTrussService: GetTrussByBlockService) { }

  ngOnChanges(): void {
    const trussCollection = TRUSS_SESSION_COLLECTION + this.block;
    this.trussArr = this.sessionStorage.retrieve(trussCollection);
    if (!this.trussArr) {
      this.getTrussService.getTrussDataByBlock(this.block).subscribe(trussArr => {
        this.trussArr = trussArr;
        this.sessionStorage.store(trussCollection, trussArr);
        this.loadDone.emit();
      });
    };
  }

  // async ngDoCheck() {
  //   if (!this.dataReady) {
  //     await this.ngOnInit();
  //   }
  // }

}