import { Component, Input, OnInit } from '@angular/core';
import { History } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-truss-timeline',
  templateUrl: './truss-timeline.component.html',
  styleUrls: ['./truss-timeline.component.scss']
})
export class TrussTimelineComponent implements OnInit {
  @Input() history: History = null;
  @Input() maxHole = 0;

  constructor() { }

  ngOnInit(): void { }

  selectTrussStatus(clickedStatusEl: any): void {
    const statusElArr = document.getElementsByClassName('truss-status');
    for (let i = 0; i < statusElArr.length; i++) {
      const statusEl = statusElArr.item(i);
      if (statusEl == clickedStatusEl) {
        statusEl.classList.toggle('active');
        continue;
      }
      statusEl.classList.remove('active');
    }
  }
}