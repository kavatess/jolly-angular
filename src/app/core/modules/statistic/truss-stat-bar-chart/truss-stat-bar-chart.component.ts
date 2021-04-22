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
    xAxis: {
      categories: [],
      title: {
        text: null
      }
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
    },
    series: [{
      name: 'Số lượng',
      type: "bar",
      data: []
    }]
  };
  barChart: Chart;
  constructor() { }

  ngOnChanges(): void {
    if (this.barChart) {
      const plantCategories = this.statArr.map(({ plantName }) => plantName);
      this.barChart.xAxis[0].setCategories(plantCategories);
      const newStatArr = this.statArr.map(({ plantColor, plantNumber }) => {
        return { y: plantNumber, color: plantColor }
      });
      this.barChart.series[0].setData(newStatArr);
    }
  }

  onChartLoad(chart: Chart): void {
    this.barChart = chart;
    this.ngOnChanges();
  }

}
