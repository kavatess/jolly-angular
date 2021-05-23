import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plant } from 'src/app/core/models/plant.model';
import { TrussHistoryInfo } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-truss-timeline',
  templateUrl: './truss-timeline.component.html',
  styleUrls: ['./truss-timeline.component.scss']
})
export class TrussTimelineComponent implements OnInit {
  @Input() history: TrussHistoryInfo = null;
  @Input() maxHole = 0;
  @Input() clickEv = false;
  @Output() clickedStatus = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  get plantType(): Plant {
    return this.history.plantType || new Plant();
  }

  selectTrussStatus(clickedStatusEl: any, statusIndex: number): void {
    if (this.clickEv) {
      const statusElArr = document.getElementsByClassName('truss-status');
      for (let i = 0; i < statusElArr.length; i++) {
        const statusEl = statusElArr.item(i);
        if (statusEl == clickedStatusEl) {
          statusEl.classList.toggle('active');
          continue;
        }
        statusEl.classList.remove('active');
      }
      this.clickedStatus.emit(statusIndex);
    }
  }
}