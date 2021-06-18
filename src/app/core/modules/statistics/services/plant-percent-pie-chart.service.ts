import { Injectable } from '@angular/core';
import { Options } from 'highcharts';
import { Statistics } from 'src/app/models/statistic.model';

@Injectable({
  providedIn: 'root'
})
export class PlantPercentPieChartService {

  constructor() { }

  getChartOptions(statArr: Statistics[]): Options {
    return {
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
        data: this.getPercentDataArr(statArr)
      }]
    };
  }

  private getPercentDataArr(statArr: Statistics[]): any[] {
    const sumOfPlantNumber = statArr.length ? statArr.map(({ plantNumber }) => plantNumber).reduce((a, b) => a + b) : 1;
    return statArr.map(({ plantName, plantNumber }) => {
      return { name: plantName, y: plantNumber / sumOfPlantNumber * 100 }
    });
  }
}
