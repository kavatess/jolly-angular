import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticPageComponent } from './statistic-page.component';
import { PageLayoutModule } from 'src/app/shared/modules/page-layout/page-layout.module';
import { SelectModule } from 'src/app/shared/modules/select/select.module';
import { StatisticModule } from 'src/app/core/modules/statistic/statistic.module';

@NgModule({
  declarations: [StatisticPageComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    SelectModule,
    StatisticModule
  ]
})
export class StatisticPageModule { }
