import { Injectable } from '@angular/core';
import { Options } from 'highcharts';
import { Statistics } from 'src/app/models/statistic.model';

@Injectable({
  providedIn: 'root'
})
export class TotalStatBarChartService {

  constructor() { }

  getChartOptions(statArr: Statistics[]): Options {
    return {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Số lượng từng loại rau'
      },
      subtitle: {
        text: 'Đơn vị: cây (kg)'
      },
      xAxis: {
        categories: statArr.map(({ plantName }) => plantName),
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'số cây',
          align: 'high'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Số lượng',
          type: "bar",
          data: statArr.map(({ plantColor, plantNumber }) => {
            return { y: plantNumber, color: plantColor };
          }),
          dataLabels: {
            enabled: true,
            format: undefined,
            formatter: this.getLabelOptionFormatter(statArr)
          }
        }
      ]
    };
  }

  private getLabelOptionFormatter(statArr: Statistics[]): any {
    const numberPerKgArr = statArr.map(({ numberPerKg }) => numberPerKg);
    return function () {
      const estimatedKgVal = Number(this.y / numberPerKgArr[this.point.index]).toFixed(1);
      return `${this.y} (${estimatedKgVal} kg)`;
    }
  }
}
