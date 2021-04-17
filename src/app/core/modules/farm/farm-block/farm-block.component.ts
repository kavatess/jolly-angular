import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from 'src/app/core/models/truss.model';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { FarmComponent } from '../farm.component';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent extends FarmComponent implements OnInit, DoCheck {
  @Input() block = '';
  trussArr: Truss[] = [];

  constructor(public sessionStorage: SessionStorageService) {
    super();
  }

  async ngOnInit() {
    this.trussArr = await this.sessionStorage.getAsync(TRUSS_SESSION_COLLECTION + this.block);
    this.changeDataStatus(true);
  }

  async ngDoCheck() {
    if (!this.dataReady) {
      await this.ngOnInit();
    }
  }
}