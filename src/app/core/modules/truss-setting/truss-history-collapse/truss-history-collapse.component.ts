import { Component, DoCheck, Input } from '@angular/core';
import { History } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-truss-history-collapse',
  templateUrl: './truss-history-collapse.component.html',
  styleUrls: ['./truss-history-collapse.component.scss']
})
export class TrussHistoryCollapseComponent implements DoCheck {
  @Input() history: History = null;
  collapseTitle = '';

  constructor() { }

  ngDoCheck(): void {
    this.createCollapseTitle();
  }

  createCollapseTitle(): void {
    const startDate = new Date(this.history.startDate).toLocaleDateString('en-GB');
    const endDate = new Date(this.history.realStatus[this.history.realStatus.length - 1].date).toLocaleDateString('en-GB');
    this.collapseTitle = `${startDate} --> ${endDate}`;
  }
}
