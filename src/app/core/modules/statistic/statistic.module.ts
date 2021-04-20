import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';
import { PlantStatPieChartComponent } from './plant-stat-pie-chart/plant-stat-pie-chart.component';
import { TrussStatBarChartComponent } from './truss-stat-bar-chart/truss-stat-bar-chart.component';
import { HighchartsConfig, HighchartsModule } from '@howtimeflies/ngx-highcharts';

const config: HighchartsConfig = {
  cdnBaseUrl: 'https://code.highcharts.com',
  scriptName: 'highcharts.js',
  delayToExecuteModulesCode: 200,
  maxDelayToResizeContainer: 10000,
  globalOptions: {}
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

