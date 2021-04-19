import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';
import { HighchartsConfig, HighchartsModule } from '@howtimeflies/ngx-highcharts';
import { PlantStatPieChartComponent } from './plant-stat-pie-chart/plant-stat-pie-chart.component';
import { TrussStatBarChartComponent } from './truss-stat-bar-chart/truss-stat-bar-chart.component';

const config: HighchartsConfig = {
  cdnBaseUrl: 'https://code.highcharts.com',
  scriptName: 'highcharts.js',
  delayToExecuteModulesCode: 200,
  maxDelayToResizeContainer: 10000,
  globalOptions: {
    lang: {
      drillUpText: 'Drill-Up'
    }
  }
}
@NgModule({
  declarations: [StatisticComponent, PlantStatPieChartComponent, TrussStatBarChartComponent],
  imports: [
    CommonModule,
    HighchartsModule
  ],
  providers: [
    { provide: HighchartsConfig, useValue: config }
  ],
  exports: [StatisticComponent]
})
export class StatisticModule { }

