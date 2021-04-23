import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from 'src/app/core/models/truss.model';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent implements OnInit {
  @Input() block = '';
  @Input() plantId = '';
  @Input() plantGrowth = 0;
  trussArr: Truss[] = [];
  @Output() clickedTruss = new EventEmitter<Truss>();

  constructor(public sessionStorage: SessionStorageService) { }

  async ngOnInit() {
    this.trussArr = await this.sessionStorage.getAsync(TRUSS_SESSION_COLLECTION + this.block);
  }

  // async ngDoCheck() {
  //   if (!this.dataReady) {
  //     await this.ngOnInit();
  //   }
  // }

}