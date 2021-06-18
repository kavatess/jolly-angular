import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { HighchartsConfig, HighchartsModule } from '@howtimeflies/ngx-highcharts';

const HIGHCHARTS_CONFIG: HighchartsConfig = {
  cdnBaseUrl: 'https://code.highcharts.com',
  scriptName: 'highcharts.js',
  delayToExecuteModulesCode: 200,
  maxDelayToResizeContainer: 10000,
  globalOptions: {}
}

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    HighchartsModule,
  ],
  providers: [
    { provide: HighchartsConfig, useValue: HIGHCHARTS_CONFIG }
  ],
  exports: [ChartComponent]
})
export class ChartModule { }
