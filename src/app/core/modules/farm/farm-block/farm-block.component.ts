import { Component, Input, OnChanges } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';
import { FarmPageComponent } from 'src/app/pages/farm-page/farm-page.component';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent extends FarmPageComponent implements OnChanges {
  @Input() block = '';
  trussDataArr: Truss[] = [];

  constructor(private sessionStorage: SessionStorageService) {
    super();
  }

  async ngOnChanges() {
    this.trussDataArr = await this.sessionStorage.getTrussArrInBlock(this.block);
  }

  emitClickedTrussEvent(truss: Truss): void {
    this.newClickedTruss = truss;
  }
}