import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlocksModule } from './blocks/blocks.module';
import { FarmModule } from './core/modules/farm/farm.module';
import { SettingModule } from './core/modules/setting/setting.module';
import { StatisticsModule } from './core/modules/statistics/statistics.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlocksModule,
    AppRoutingModule,
    FarmModule,
    SettingModule,
    StatisticsModule,
    NgxWebstorageModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
