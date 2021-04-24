import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmModule } from './farm/farm.module';
import { SettingModule } from './setting/setting.module';
import { StatisticsModule } from './statistics/statistics.module';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
    imports: [
        CommonModule,
        FarmModule,
        SettingModule,
        StatisticsModule,
        NgxWebstorageModule.forRoot()
    ]
})
export class ModulesModule { }
