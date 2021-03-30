import { Component, Input, OnChanges } from '@angular/core';
import { Truss } from '../../models/truss.model';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent implements OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  
  constructor() {
  }

  ngOnChanges(): void {
  }

}
