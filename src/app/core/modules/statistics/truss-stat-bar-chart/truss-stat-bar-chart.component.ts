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
      },
      title: {
        text: 'Số lượng từng loại rau'
      },
      subtitle: {
        text: 'Đơn vị: cây (kg)'
      },
      xAxis: {
        categories: this.getCategoriesOfxAxis(),
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
          data: this.getChartDataSeries(),
          dataLabels: {
            enabled: true,
            format: undefined,
            formatter: this.getLabelOptionFormatter()
          }
        }
      ]
    };
  }

  private getCategoriesOfxAxis(): string[] {
    return this.statArr.map(({ plantName }) => plantName);
  }

  private getChartDataSeries(): any[] {
    return this.statArr.map(({ plantColor, plantNumber }) => {
      return { y: plantNumber, color: plantColor };
    });
  }

  private getLabelOptionFormatter(): any {
    const numberPerKgArr = this.statArr.map(({ numberPerKg }) => numberPerKg);
    return function () {
      const estimatedKgVal = Number(this.y / numberPerKgArr[this.point.index]).toFixed(1);
      return `${this.y} (${estimatedKgVal} kg)`;
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
