import { Injectable } from '@angular/core';
import { Options } from 'highcharts';
import { HarvestStatByDate } from 'src/app/models/statistic.model';

@Injectable({
  providedIn: 'root'
})
export class HarvestStatColumnChartService {

  constructor() { }

  getChartOptions(harvestStats: object): Options {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Biểu đồ cột sản lượng thu hoạch tháng 6'
      },
      subtitle: {
        text: 'Đơn vị: cây (kg)'
      },
      xAxis: {
        categories: this.createChartCategories(harvestStats),
        crosshair: true
      },
      yAxis: {
        title: {
          text: 'Số lượng (kg)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
      series: []
    }
  }

  private createChartCategories(harvestStats: object): string[] {
    let categories = [];
    for (const date in harvestStats) {
      categories.push(date);
    }
    return categories;
  }

  private createChartSeries(harvestStats: object): object {
    let harvestStatByPlantId = {};
    for (const date in harvestStats) {
      for (const plantId in harvestStats[date]) {
        const harvestNumber = harvestStats[date][plantId];
        if (plantId in harvestStatByPlantId) {
          harvestStatByPlantId[plantId].push(harvestNumber);
        } else {
          harvestStatByPlantId[plantId] = [harvestNumber];
        }
      }
    }
    return harvestStatByPlantId;
  }
}
