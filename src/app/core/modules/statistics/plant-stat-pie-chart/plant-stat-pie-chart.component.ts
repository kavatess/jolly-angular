import { Component, Input, OnChanges } from '@angular/core';
import { Chart, Options } from 'highcharts';
import { Statistics } from 'src/app/core/models/statistic.model';

@Component({
  selector: 'app-plant-stat-pie-chart',
  templateUrl: './plant-stat-pie-chart.component.html',
  styleUrls: ['../statistics.component.scss']
})
export class PlantStatPieChartComponent implements OnChanges {
  @Input() statArr: Statistics[] = [];
  options: Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: '400px'
    },
    title: {
      text: 'Tỷ lệ phần trăm từng loại cây trồng trong vườn'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.2f} %'
        }
      }
    },
    series: [{
      name: 'Loại cây',
      colorByPoint: true,
      type: 'pie',
      data: []
    }]
  };
  pieChart: Chart;
  constructor() { }

  ngOnChanges(): void {
    if (this.pieChart) {
      const sumOfPlantNumber = this.statArr.length ? this.statArr.map(({ plantNumber }) => plantNumber).reduce((a, b) => a + b) : 1;
      const newStatArr = this.statArr.map(({ plantName, plantNumber }) => {
        return { name: plantName, y: plantNumber / sumOfPlantNumber * 100 }
      });
      this.pieChart.series[0].setData(newStatArr);
    }
  }

  onChartLoad(chart: Chart): void {
    this.pieChart = chart;
    this.ngOnChanges();
  }

}
