import { Injectable } from '@angular/core';
import { Options } from 'highcharts';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { Plant } from 'src/app/models/plant.model';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class HarvestStatColumnChartService {
  plantArr: Plant[] = [];

  constructor(private sessionStorage: SessionService) {
    this.sessionStorage.getAsync(SESSION_STORAGE_KEY.PLANT).then(plantArr => {
      this.plantArr = plantArr;
    })
  }

  getChartOptions(month: string, harvestStats: object, option: string): Options {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: this.createChartTitle(month, option)
      },
      subtitle: {
        text: 'Đơn vị: cây (kg)'
      },
      xAxis: {
        categories: this.createChartCategories(month, option),
        crosshair: true
      },
      yAxis: {
        title: {
          text: 'Số lượng (kg)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormatter: this.getChartTooltipFormatter(),
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: this.createChartSeries(harvestStats)
    }
  }

  private createChartTitle(month: string, option: string): string {
    if (option == 'harvestStatsByDate') {
      return `Biểu đồ cột sản lượng thu hoạch tháng ${Number(month.split('-')[1])}`;
    }
    if (option == 'harvestStatsByMonth') {
      return `Biểu đồ cột sản lượng thu hoạch năm ${month.split('-')[0]}`;
    }
    return '';
  }

  private createChartCategories(month: string, option: string): string[] {
    if (option == 'harvestStatsByDate') {
      return this.createDateCategories(month);
    }
    if (option == 'harvestStatsByMonth') {
      return this.createMonthCategories();
    }
    return [];
  }

  private createDateCategories(month: string): string[] {
    let dateStrArr = [];
    for (let i = 1; i <= 31; i++) {
      const dateOfMonth = new Date(`${month}-${i}`);
      if (dateOfMonth.getMonth() + 1 == Number(month.split('-')[1])) {
        dateStrArr[i - 1] = dateOfMonth.toLocaleDateString('en-GB');
      }
    }
    return dateStrArr;
  }

  private createMonthCategories(): string[] {
    let monthStrArr = [];
    for (let i = 1; i <= 12; i++) {
      monthStrArr[i - 1] = `Tháng ${i}`;
    }
    return monthStrArr;
  }

  private createChartSeries(harvestStats: object): any[] {
    let series = [];
    for (const plantId in harvestStats) {
      const { plantName } = this.plantArr.find(({ _id }) => _id == plantId);
      series[series.length] = {
        name: plantName,
        data: harvestStats[plantId],
      }
    }
    return series;
  }

  private getChartTooltipFormatter(): any {
    let numberPerKgObj = {};
    this.plantArr.forEach(({ plantName, numberPerKg }) => numberPerKgObj[plantName] = numberPerKg);
    return function () {
      const estimatedKgVal = Number(this.y / numberPerKgObj[this.series.name]).toFixed(0);
      return `<tr><td style="color:{series.color};padding:0">${this.series.name}: </td>` +
        `<td style="padding:0"><b>${this.y} cây (${estimatedKgVal} kg)</b></td></tr>`;
    }
  }
}
