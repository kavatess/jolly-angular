import { Component, Input, OnInit } from '@angular/core';
import { Chart, Options } from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  @Input() options: Options = null;
  chart: Chart;
  constructor() { }

  ngOnInit(): void {
  }

  onChartLoad(chart: Chart): void {
    this.chart = chart;
  }
}
