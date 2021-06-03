import { Component, Input, OnChanges } from '@angular/core';
import { Chart, Options } from 'highcharts';
import { Statistics } from 'src/app/models/statistic.model';

@Component({
  selector: 'app-truss-stat-bar-chart',
  templateUrl: './truss-stat-bar-chart.component.html',
  styleUrls: ['../statistics.component.scss']
})
export class TrussStatBarChartComponent implements OnChanges {
  @Input() statArr: Statistics[] = [];
  options: Options = null;
  barChart: Chart;
  constructor() { }

  private setChartOptions(): void {
    this.options = {
      chart: {
        type: 'bar',
        width: 550,
        height: 1000
      },
      title: {
        text: 'Số lượng từng loại rau'
      },
      subtitle: {
        text: 'Đơn vị: cây (kg)'
      },
      xAxis: {
        categories: this.categoriesOfxAxis,
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
          data: this.chartDataSeries,
          dataLabels: {
            enabled: true,
            format: undefined,
            formatter: this.labelOptionFormatter
          }
        }
      ]
    };
  }

  private get categoriesOfxAxis(): string[] {
    return this.statArr.map(({ plantName }) => plantName);
  }

  private get chartDataSeries(): any[] {
    return this.statArr.map(({ plantColor, plantNumber }) => {
      return { y: plantNumber, color: plantColor };
    });
  }

  private get labelOptionFormatter(): any {
    const numberPerKgArr = this.statArr.map(({ numberPerKg }) => numberPerKg);
    return function () {
      const kgValue = Number(this.y / numberPerKgArr[this.point.index]).toFixed(1);
      return `${this.y} (${kgValue} kg)`;
    }
  }

  ngOnChanges(): void {
    if (this.statArr.length) {
      this.setChartOptions();
    }
  }

  onChartLoad(chart: Chart): void {
    this.barChart = chart;
    this.ngOnChanges();
  }
}
