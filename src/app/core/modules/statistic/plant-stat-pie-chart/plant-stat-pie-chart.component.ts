import { Component, Input, OnChanges } from '@angular/core';
import { Chart, Options } from 'highcharts';
import { Statistics } from 'src/app/pages/statistic-page/statistic-page.component';

@Component({
  selector: 'app-plant-stat-pie-chart',
  templateUrl: './plant-stat-pie-chart.component.html',
  styleUrls: ['../statistic.component.scss']
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
    }
  };
  pieChart: Chart;
  constructor() { }

  ngOnChanges(): void {
    const sumOfPlantNumber = this.statArr.length ? this.statArr.map(({ plantNumber }) => plantNumber).reduce((a, b) => a + b) : 1;
    this.options.series = [{
      name: 'Loại cây',
      colorByPoint: true,
      type: 'pie',
      data: this.statArr.map(({ plantName, plantNumber }) => {
        return {
          name: plantName,
          y: plantNumber / sumOfPlantNumber * 100
        }
      })
    }];
  }

}
