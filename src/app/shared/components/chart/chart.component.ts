import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chart, Options } from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  @Input() options: Options = null;
  @Output() onLoad = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChartLoad(chart: Chart): void {
    this.onLoad.emit(chart);
  }
}
