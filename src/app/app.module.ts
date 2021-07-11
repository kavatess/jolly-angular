import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { LoginModule } from './modules/login/login.module';
import { FarmModule } from './modules/farm/farm.module';
import { SettingModule } from './modules/setting/setting.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    InterceptorsModule,
    LoginModule,
    FarmModule,
    SettingModule,
    NgxWebstorageModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
