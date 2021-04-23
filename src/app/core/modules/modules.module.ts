import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmModule } from './farm/farm.module';
import { SettingModule } from './setting/setting.module';
import { StatisticsModule } from './statistics/statistics.module';

@NgModule({
  imports: [
    CommonModule,
    FarmModule,
    SettingModule,
    StatisticsModule
  ]
})
export class ModulesModule { }
