import { Component, Input, OnChanges } from '@angular/core';
import { Chart, Options } from 'highcharts';
import { Statistics } from 'src/app/core/models/statistic.model';

@Component({
  selector: 'app-truss-stat-bar-chart',
  templateUrl: './truss-stat-bar-chart.component.html',
  styleUrls: ['../statistic.component.scss']
})
export class TrussStatBarChartComponent implements OnChanges {
  @Input() statArr: Statistics[] = [];
  options: Options = {
    chart: {
      type: 'bar',
      width: 550,
      height: 1000
    },
    title: {
      text: 'Số lượng từng loại rau'
    },
    subtitle: {
      text: 'Đơn vị: cây'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'số cây',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' cây'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  };
  barChart: Chart;
  constructor() { }

  ngOnChanges(): void {
    this.options.xAxis = {
      categories: this.statArr.map(({ plantName }) => plantName),
      title: {
        text: null
      }
    };
    this.options.series = [{
      name: 'Số lượng',
      type: "bar",
      data: this.statArr.map(({ plantColor, plantNumber }) => {
        return {
          y: plantNumber,
          color: plantColor
        }
      })
    }];
  }

}
