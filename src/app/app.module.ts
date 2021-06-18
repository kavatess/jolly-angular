import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlocksModule } from './blocks/blocks.module';
import { FarmModule } from './core/modules/farm/farm.module';
import { LoginModule } from './core/modules/login/login.module';
import { SettingModule } from './core/modules/setting/setting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BlocksModule,
    LoginModule,
    FarmModule,
    SettingModule,
    NgxWebstorageModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
