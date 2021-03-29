import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlocksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
