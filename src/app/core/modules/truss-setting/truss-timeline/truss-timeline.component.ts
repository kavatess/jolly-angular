import { Component, DoCheck, Input } from '@angular/core';
import { History } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-truss-timeline',
  templateUrl: './truss-timeline.component.html',
  styleUrls: ['./truss-timeline.component.scss']
})
export class TrussTimelineComponent implements DoCheck {
  @Input() history: History = null;
  progressBarContent = [];
  percentageArr = [];

  constructor() { }

  ngDoCheck(): void {
    this.history.realStatus.forEach(status => {
      const maxNum = this.history.realStatus[0].plantNumber;
      this.progressBarContent.push(`${status.plantNumber}/ ${maxNum}`);
      this.percentageArr.push(status.plantNumber / maxNum * 100);
    });
  }
}