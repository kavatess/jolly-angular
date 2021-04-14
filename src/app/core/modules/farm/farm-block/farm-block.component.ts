import { Component, Input, OnChanges } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { FarmComponent } from '../farm.component';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent extends FarmComponent implements OnChanges {
  @Input() block = '';

  constructor(public sessionStorage: SessionStorageService) {
    super();
  }

  ngOnChanges(): void {
  }

  emitClickedTrussEvent(truss: Truss): void {
    this.newClickedTruss = truss;
  }

}