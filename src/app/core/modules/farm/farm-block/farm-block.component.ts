import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent implements OnChanges {
  @Input() block = '';
  @Input() plantId = '';
  @Input() plantGrowth = 0;
  @Output() clickTruss = new EventEmitter<Truss>();
  trussDataArr: Truss[] = [];

  constructor(private sessionStorage: SessionStorageService) { }

  async ngOnChanges() {
    this.trussDataArr = await this.sessionStorage.getTrussArrInBlock(this.block);
  }

  emitClickedTrussEvent(clickedTruss: Truss): void {
    this.clickTruss.emit(clickedTruss);
  }
}