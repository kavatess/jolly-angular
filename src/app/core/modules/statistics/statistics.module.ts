import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { HighchartsConfig, HighchartsModule } from '@howtimeflies/ngx-highcharts';
import { PlantStatPieChartComponent } from './plant-stat-pie-chart/plant-stat-pie-chart.component';
import { TrussStatBarChartComponent } from './truss-stat-bar-chart/truss-stat-bar-chart.component';
import { RouterModule, Routes } from '@angular/router';

const HIGHCHARTS_CONFIG: HighchartsConfig = {
  cdnBaseUrl: 'https://code.highcharts.com',
  scriptName: 'highcharts.js',
  delayToExecuteModulesCode: 200,
  maxDelayToResizeContainer: 10000,
  globalOptions: {}
}

const STATISTICS_ROUTE: Routes = [
  {
    path: '',
    component: StatisticsComponent
  }
]

@NgModule({
  declarations: [StatisticsComponent, PlantStatPieChartComponent, TrussStatBarChartComponent],
  imports: [
    CommonModule,
    HighchartsModule,
    PageLayoutModule,
    SelectModule,
    RouterModule.forChild(STATISTICS_ROUTE)
  ],
  providers: [
    { provide: HighchartsConfig, useValue: HIGHCHARTS_CONFIG }
  ]
})
export class StatisticsModule { }
