import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { HighchartsConfig, HighchartsModule } from '@howtimeflies/ngx-highcharts';
import { PlantStatPieChartComponent } from './plant-stat-pie-chart/plant-stat-pie-chart.component';
import { TrussStatBarChartComponent } from './truss-stat-bar-chart/truss-stat-bar-chart.component';

const config: HighchartsConfig = {
  cdnBaseUrl: 'https://code.highcharts.com',
  scriptName: 'highcharts.js',
  delayToExecuteModulesCode: 200,
  maxDelayToResizeContainer: 10000,
  globalOptions: {}
}

@NgModule({
  declarations: [StatisticsComponent, PlantStatPieChartComponent, TrussStatBarChartComponent],
  imports: [
    CommonModule,
    HighchartsModule,
    PageLayoutModule,
    SelectModule
  ],
  providers: [
    { provide: HighchartsConfig, useValue: config }
  ]
})
export class StatisticsModule { }
