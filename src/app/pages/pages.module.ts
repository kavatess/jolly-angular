import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmPageModule } from './farm-page/farm-page.module';
import { SettingPageModule } from './setting-page/setting-page.module';
import { StatisticPageModule } from './statistic-page/statistic-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FarmPageModule,
    SettingPageModule,
    StatisticPageModule
  ]
})
export class PagesModule { }
