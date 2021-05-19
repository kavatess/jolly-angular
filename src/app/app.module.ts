import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlocksModule } from './blocks/blocks.module';
import { FarmModule } from './core/modules/farm/farm.module';
import { LoginModule } from './core/modules/login/login.module';
import { PlantSettingModule } from './core/modules/plant-setting/plant-setting.module';
import { SettingModule } from './core/modules/setting/setting.module';
import { StatisticsModule } from './core/modules/statistics/statistics.module';
import { TrussSettingModule } from './core/modules/truss-setting/truss-setting.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlocksModule,
    LoginModule,
    FarmModule,
    StatisticsModule,
    SettingModule,
    PlantSettingModule,
    TrussSettingModule,
    NgxWebstorageModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
